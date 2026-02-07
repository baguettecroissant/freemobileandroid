import fs from 'fs';
import path from 'path';
import { phones } from '../data/phones';

// Configuration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const CONTENT_FILE = path.join(process.cwd(), 'data/phone-content.json');

// Types
interface PhoneContent {
    slug: string;
    intro: string;
    expert_opinion: string;
    faqs: { question: string; answer: string }[];
}

interface Model {
    name: string;
    version: string;
    displayName: string;
    description: string;
    supportedGenerationMethods: string[];
}

async function getBestModel(): Promise<string | null> {
    try {
        const response = await fetch(`${BASE_URL}/models?key=${GEMINI_API_KEY}`);
        if (!response.ok) {
            console.error(`Failed to list models: ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        const models = data.models as Model[];

        // Filter for generateContent support
        const contentModels = models.filter(m => m.supportedGenerationMethods.includes("generateContent"));

        if (contentModels.length === 0) return null;

        // Preference list - Prioritizing Gemini 2.0 Flash as requested
        const preferences = [
            "gemini-2.0-flash-exp",
            "gemini-2.0-flash",
            "gemini-1.5-flash",
            "gemini-1.5-pro",
            "gemini-1.0-pro"
        ];

        for (const pref of preferences) {
            const found = contentModels.find(m => m.name.includes(pref));
            if (found) return found.name;
        }

        // Fallback to first available gemini model
        const anyGemini = contentModels.find(m => m.name.includes("gemini"));
        return anyGemini ? anyGemini.name : contentModels[0].name;

    } catch (e) {
        console.error("Error listing models. Please check your API key and network connection.");
        return null;
    }
}

async function generateContentForPhone(phone: typeof phones[0], modelName: string): Promise<PhoneContent | null> {
    const prompt = `
    Rôle : Expert Télécom Free Mobile.
    Tâche : Rédige un contenu JSON unique pour le téléphone "${phone.brand} ${phone.model}" (Sortie: ${phone.year}, 5G: ${phone.compatible_5g ? 'Oui' : 'Non'}).
    Contexte : Site d'aide à la configuration APN Free Mobile.
    
    Format JSON attendu (strictement ce JSON, pas de markdown):
    {
      "intro": "Paragraphe de 50 mots sur le téléphone et sa compatibilité Free (mentionne les bandes 700MHz/3.5GHz si 5G).",
      "expert_opinion": "Avis technique de 80 mots sur ce modèle spécifique sur le réseau Free (qualité modem, accroche réseau, VoWiFi/VoLTE).",
      "faqs": [
        { "question": "Question pertinente sur ce modèle et Free (ex: eSIM, 5G, MMS) ?", "answer": "Réponse courte et précise." },
        { "question": "Autre question technique spécifique ?", "answer": "Réponse courte." }
      ]
    }
  `;

    try {
        // modelName comes like "models/gemini-1.5-flash-001" or just "gemini-1.5-flash"
        // The API expects models/model-name:generateContent
        const cleanModelName = modelName.startsWith("models/") ? modelName.split("/")[1] : modelName;
        const url = `${BASE_URL}/models/${cleanModelName}:generateContent?key=${GEMINI_API_KEY}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error generating for ${phone.model}: ${response.status} ${response.statusText}`, errorText);
            return null;
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) return null;

        // Clean markdown code blocks if present
        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

        const content = JSON.parse(cleanText);
        return {
            slug: phone.slug,
            ...content
        };

    } catch (error) {
        console.error(`Failed to generate for ${phone.model}:`, error);
        return null;
    }
}

async function main() {
    if (!GEMINI_API_KEY) {
        console.error("❌ GEMINI_API_KEY is missing in environment variables.");
        console.error("Run: export GEMINI_API_KEY='your_key' && npm run hydrate");
        process.exit(1);
    }

    console.log("🔍 Detectecting available AI Models...");
    const modelName = await getBestModel();

    if (!modelName) {
        console.error("❌ No suitable Gemini model found for this API Key.");
        process.exit(1);
    }

    console.log(`✅ Using Model: ${modelName}`);
    console.log("🚀 Starting Content Hydration...");

    // Load existing content
    let existingContent: PhoneContent[] = [];
    if (fs.existsSync(CONTENT_FILE)) {
        existingContent = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
    }

    // Find missing phones
    const missingPhones = phones.filter(p => !existingContent.find(c => c.slug === p.slug));

    console.log(`Found ${missingPhones.length} phones to hydrate.`);

    // Process in batches (to avoid rate limits)
    for (const phone of missingPhones) {
        console.log(`Generating content for ${phone.brand} ${phone.model}...`);

        const newContent = await generateContentForPhone(phone, modelName);

        if (newContent) {
            existingContent.push(newContent);
            // Save progressively
            fs.writeFileSync(CONTENT_FILE, JSON.stringify(existingContent, null, 2));
            console.log("✅ Saved.");
        }

        // Small delay
        await new Promise(r => setTimeout(r, 2000));
    }

    console.log("✨ Hydration Complete!");
}

main();
