import { phones } from "@/data/phones";
import phoneContentsData from "@/data/phone-content.json";
import { posts } from "@/data/posts";

interface PhoneContent {
    slug: string;
    intro: string;
    expert_opinion: string;
    faqs: { question: string; answer: string }[];
}

const phoneContents = phoneContentsData as PhoneContent[];
import ApnSettings from "@/components/ApnSettings";
import MonetizationCTA from "@/components/MonetizationCTA";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Settings, ArrowRight } from "lucide-react";
import PhoneImage from "@/components/PhoneImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import Script from "next/script";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return phones.map((phone) => ({
        slug: phone.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const phone = phones.find((p) => p.slug === slug);

    if (!phone) {
        return {
            title: "Modèle introuvable",
        };
    }

    const year = new Date().getFullYear();
    const title = `Comment configurer l'APN Free Mobile sur ${phone.brand} ${phone.model} (${year})`;
    const description = `Tuto complet ${year} : Paramètres APN Free Mobile pour ${phone.brand} ${phone.model}. MMS, Internet, 4G/5G.`;

    return {
        title,
        description,
        alternates: {
            canonical: `https://www.freemobileandroid.fr/configurer-apn/${slug}`,
        },
        openGraph: {
            title,
            description,
            type: 'article',
            url: `https://www.freemobileandroid.fr/configurer-apn/${slug}`,
            siteName: 'FreeMobileAndroid.fr',
            locale: 'fr_FR',
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const phone = phones.find((p) => p.slug === slug);

    if (!phone) {
        notFound();
    }

    const currentYear = new Date().getFullYear();
    const phoneContent = phoneContents.find(c => c.slug === phone.slug);

    // HowTo Schema.org JSON-LD
    const howToJsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `Configurer l'APN Free Mobile sur ${phone.brand} ${phone.model}`,
        "description": `Guide étape par étape pour configurer Internet et MMS Free Mobile sur votre ${phone.brand} ${phone.model}.`,
        "totalTime": "PT3M",
        "supply": [
            {
                "@type": "HowToSupply",
                "name": `${phone.brand} ${phone.model} avec carte SIM Free Mobile`
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Ouvrir les paramètres APN",
                "text": "Rendez-vous dans Paramètres → Réseau mobile → Noms des points d'accès (APN)."
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Créer un nouvel APN Internet",
                "text": "Nom : Free, APN : free, MCC : 208, MNC : 15, Type d'APN : default,supl,hipri"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Créer un APN MMS",
                "text": "Nom : Free MMS, APN : mmsfree, MMSC : http://mms.free.fr, MCC : 208, MNC : 15, Type d'APN : mms"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Enregistrer et redémarrer",
                "text": "Appuyez sur le menu (3 points) et sélectionnez Enregistrer. Sélectionnez l'APN Free comme profil par défaut. Redémarrez votre téléphone."
            }
        ]
    };

    // FAQPage Schema.org (from dynamic FAQs + static troubleshooting)
    const faqItems = [];

    // Add dynamic FAQs if available
    if (phoneContent?.faqs) {
        phoneContent.faqs.forEach((faq) => {
            faqItems.push({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer,
                }
            });
        });
    }

    // Add static troubleshooting FAQs
    faqItems.push({
        "@type": "Question",
        "name": `Mon ${phone.brand} ${phone.model} capte-t-il la 5G Free Mobile ?`,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": phone.compatible_5g
                ? `Oui, le ${phone.brand} ${phone.model} est compatible 5G Free Mobile. Vérifiez que l'option 5G est activée dans votre Espace Abonné.`
                : `Non, le ${phone.brand} ${phone.model} n'est pas compatible 5G. Vous bénéficierez de la 4G/4G+ avec Free Mobile.`,
        }
    });

    faqItems.push({
        "@type": "Question",
        "name": "Les MMS ne fonctionnent pas, que faire ?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vérifiez que le Type d'APN contient 'mms' en minuscules et que le MMSC est bien http://mms.free.fr. Les données mobiles doivent être activées pour envoyer et recevoir des MMS.",
        }
    });

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems,
    };

    // Pick relevant blog posts to cross-link
    const relevantPosts = posts.filter(p =>
        p.category === "Configuration" || p.category === "Dépannage"
    ).slice(0, 2);

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* Schema.org JSON-LD */}
            <Script
                id="howto-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
            />
            <Script
                id="faq-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Breadcrumb Header */}
            <div className="bg-gray-50/80 backdrop-blur-sm border-b border-gray-100 pt-24 pb-8 sticky top-0 z-40 transition-all">
                <div className="max-w-3xl mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: "Accueil", href: "/" },
                        { label: "Marques", href: "/marques" },
                        { label: phone.brand, href: `/marques/${phone.brand.toLowerCase()}` },
                        { label: phone.model, href: "#" }
                    ]} />

                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                        Config APN Free Mobile {phone.model}
                    </h1>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-8">

                <div className="grid md:grid-cols-[250px,1fr] gap-8 mb-12 items-start">
                    {/* Image Column */}
                    <div>
                        <PhoneImage brand={phone.brand} model={phone.model} slug={phone.slug} priority={true} />

                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {phone.year}
                            </span>
                            {phone.compatible_5g && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    5G
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Content Column */}
                    <div>
                        {/* Intro Card */}
                        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mb-6 flex gap-4 items-start">
                            <div className="bg-white p-2 rounded-lg shadow-sm text-blue-600 mt-1">
                                <Settings className="w-5 h-5" />
                            </div>
                            <div className="prose prose-sm text-blue-900">
                                {phoneContent ? (
                                    <p className="m-0">
                                        {phoneContent.intro}
                                    </p>
                                ) : (
                                    <p className="m-0">
                                        Vous rencontrez des problèmes d'envoi de MMS ou de connexion Internet (4G/5G) avec votre <strong>{phone.brand} {phone.model}</strong> ? Appliquez la configuration officielle ci-dessous pour résoudre le problème immédiatement.
                                    </p>
                                )}
                            </div>
                        </div>

                        <section className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-red-600">
                            <h2 className="flex items-center gap-3 text-xl">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold shadow-lg shadow-red-500/30">1</span>
                                Paramètres APN à saisir
                            </h2>

                            <p className="text-gray-600 pl-11">
                                Rendez-vous dans <strong>Paramètres</strong> → <strong>Réseau mobile</strong> → <strong>Noms des points d'accès (APN)</strong>.
                            </p>

                            <div className="pl-4 md:pl-0">
                                <ApnSettings />
                            </div>

                            <div className="my-8 pl-11">
                                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 flex gap-3 text-sm text-yellow-800">
                                    <div className="shrink-0 mt-0.5">⚠️</div>
                                    <p className="m-0">
                                        <strong>Important :</strong> Après avoir saisi ces valeurs, appuyez sur le menu (3 points) et sélectionnez <strong>&quot;Enregistrer&quot;</strong>. Redémarrez ensuite votre téléphone.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <MonetizationCTA modelName={`${phone.brand} ${phone.model}`} />

                    <h2 className="flex items-center gap-3 text-xl mt-12 mb-6 font-bold text-gray-900">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-bold">?</span>
                        Dépannage Rapide
                    </h2>

                    {/* Expert Opinion Section (If available) */}
                    {phoneContent && (
                        <div className="mt-12 bg-gray-900 text-white rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-600 rounded-full opacity-20 blur-xl"></div>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
                                <Settings className="w-5 h-5 text-red-500" />
                                L&apos;avis de l&apos;expert
                            </h2>
                            <p className="text-gray-300 relative z-10 leading-relaxed">
                                &quot;{phoneContent.expert_opinion}&quot;
                            </p>
                        </div>
                    )}

                    {/* Dynamic FAQ Section (If available) */}
                    {phoneContent && (
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions Fréquentes</h2>
                            <div className="space-y-4">
                                {phoneContent.faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                        <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6 not-prose mt-12">
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Pas de 5G ?</h3>
                            <p className="text-sm text-gray-600">
                                Vérifiez que l&apos;option 5G est active dans votre <a href="https://mobile.free.fr/account/" target="_blank" className="text-red-600 underline decoration-red-200 underline-offset-2">Espace Abonné</a>.
                                {phone.compatible_5g ? " Votre smartphone est compatible." : <span className="text-red-600 font-medium"> Attention : Ce modèle n&apos;est PAS compatible 5G.</span>}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">MMS bloqués ?</h3>
                            <p className="text-sm text-gray-600">
                                Vérifiez la ligne <strong>Type d&apos;APN</strong>. Elle doit contenir &quot;mms&quot; en minuscules. Les données mobiles doivent être activées.
                            </p>
                        </div>
                    </div>

                    {/* Cross-link to relevant blog articles */}
                    {relevantPosts.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">📖 Guides complémentaires</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {relevantPosts.map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all"
                                    >
                                        <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{post.category}</span>
                                        <h3 className="font-bold text-gray-900 mt-1 mb-1 text-sm group-hover:text-red-600 transition-colors leading-snug">
                                            {post.title}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-xs text-red-600 font-medium mt-2 group-hover:translate-x-1 transition-transform">
                                            Lire <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </main>
    );
}
