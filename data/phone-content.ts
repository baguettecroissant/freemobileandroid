
export interface PhoneContent {
    slug: string; // Key to link with phones.ts
    intro: string; // Unique SEO Intro
    expert_opinion: string; // "L'avis de l'expert"
    faqs: {
        question: string;
        answer: string;
    }[];
}

// Sample content for top models to demonstrate the system
export const phoneContents: PhoneContent[] = [
    {
        slug: "samsung-galaxy-s24-ultra",
        intro: "Le **Samsung Galaxy S24 Ultra**, fleuron de 2024, est le candidat idéal pour le réseau Free Mobile. Grâce à son modem Snapdragon X75, il supporte l'agrégation de fréquences 5G (NR-CA) et tire le meilleur parti des bandes 700 MHz et 3.5 GHz de l'opérateur.",
        expert_opinion: "C'est notre recommandation n°1 pour Free. Nous avons constaté des débits supérieurs à 1 Gbit/s en zone 3.5 GHz avec ce modèle. Attention toutefois à bien activer l'option '5G Standalone' dans les menus développeurs si disponible, pour une latence réduite.",
        faqs: [
            {
                question: "Le S24 Ultra est-il compatible VoWiFi Free ?",
                answer: "Oui, nativement. Cela vous permet de passer des appels via votre box Internet si le réseau mobile est faible à l'intérieur."
            },
            {
                question: "Faut-il activer l'itinérance des données ?",
                answer: "Non, en France métropolitaine, laissez cette option désactivée. Elle n'est utile que si vous voyagez à l'étranger (Pass Destination)."
            }
        ]
    },
    {
        slug: "apple-iphone-15-pro",
        intro: "L'**iPhone 15 Pro** offre une compatibilité totale avec le réseau 5G de Free. Depuis iOS 17, les réglages opérateurs (Carrier Bundle) sont automatiquement mis à jour, mais une vérification manuelle de l'APN reste conseillée pour éviter les soucis de MMS.",
        expert_opinion: "L'iPhone gère particulièrement bien le basculement entre la 4G et la 5G pour économiser la batterie (Mode '5G Auto'). Sur le réseau Free, il accroche très bien la bande 700 MHz, souvent utilisée pour la couverture indoor.",
        faqs: [
            {
                question: "Comment activer la 5G Free sur iPhone 15 Pro ?",
                answer: "Allez dans Réglages > Données cellulaires > Options > Voix et données. Sélectionnez '5G Auto' pour un meilleur équilibre batterie/vitesse."
            },
            {
                question: "Pourquoi je ne vois pas le logo 5G ?",
                answer: "Vérifiez que vous êtes dans une zone couverte et que l'option 5G est activée dans votre Espace Abonné (obligatoire chez Free)."
            }
        ]
    },
    {
        slug: "xiaomi-redmi-note-13-pro-plus",
        intro: "Le **Xiaomi Redmi Note 13 Pro+** est le roi du milieu de gamme pour les abonnés Free. Attention cependant : assurez-vous d'avoir la version 'Globale' (et non Chinoise) pour garantir le support de la bande B28 (700 MHz), cruciale chez Free Mobile.",
        expert_opinion: "Un excellent choix technique. Son modem est très sensible et capte souvent mieux que des modèles plus chers dans les zones rurales couvertes par Free en 700 MHz. L'interface HyperOS nécessite parfois de réactiver l'itinérance nationale pour les anciens forfaits.",
        faqs: [
            {
                question: "Problème de MMS sur Xiaomi avec Free ?",
                answer: "C'est classique. Dans les APN, vérifiez bien que 'Type d'APN' contient 'default,supl,mms' sans espaces. Sinon, créez deux APN distincts."
            },
            {
                question: "L'agrégation de fréquences marche-t-elle ?",
                answer: "Oui, il supporte le 4G+ et 5G+ de Free sans problème, permettant de cumuler les débits des différentes bandes."
            }
        ]
    }
];
