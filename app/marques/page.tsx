import Link from "next/link";
import { phones } from "@/data/phones";
import { ChevronRight, Smartphone, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Toutes les marques de smartphones | FreeMobileAndroid",
    description: "Liste complète des marques de téléphones pour configurer l'APN Free Mobile. Samsung, Apple, Xiaomi, et bien plus.",
};

export default function MarquesPage() {
    // Get unique brands
    const brands = Array.from(new Set(phones.map((phone) => phone.brand))).sort();

    // Get count per brand
    const getBrandCount = (brand: string) => phones.filter((p) => p.brand === brand).length;

    return (
        <main className="min-h-screen pb-20">
            <section className="bg-gray-900 text-white pt-32 pb-16 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
                    <div className="flex justify-center mb-4">
                        <Breadcrumbs items={[
                            { label: "Accueil", href: "/" },
                            { label: "Marques", href: "#" }
                        ]} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Toutes les marques
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Sélectionnez votre constructeur pour accéder aux guides de configuration.
                    </p>
                </div>
            </section>

            {/* Brand List Section */}
            <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-10 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {brands.map((brand) => (
                        <Link
                            key={brand}
                            href={`/marques/${brand.toLowerCase()}`}
                            className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-100 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Smartphone className="w-24 h-24 text-red-600 -mr-8 -mt-8" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                                        {brand}
                                    </span>
                                    <span className="text-xs font-medium bg-gray-50 border border-gray-100 text-gray-500 px-2 py-1 rounded-full">
                                        {getBrandCount(brand)}
                                    </span>
                                </div>
                                <div className="mt-auto flex items-center text-sm text-gray-400 group-hover:text-red-500 font-medium">
                                    Voir les modèles
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="bg-gray-50 border-t border-gray-100 py-16">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Pourquoi la configuration Free Mobile dépend de votre marque ?
                    </h2>

                    <div className="space-y-8 text-gray-600 leading-relaxed">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                                Les Surcouches Constructeur (MIUI, OneUI...)
                            </h3>
                            <p>
                                Chaque fabricant modifie Android à sa sauce. Un smartphone <strong>Samsung</strong> n'a pas les mêmes menus qu'un <strong>Xiaomi</strong> ou un <strong>Google Pixel</strong>.
                                Les réglages APN (Noms des Points d'Accès) sont parfois cachés dans des sous-menus différents. C'est pourquoi nous avons créé des guides spécifiques par marque.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                                La Compatibilité des Bandes de Fréquences
                            </h3>
                            <p>
                                Pour capter la 4G et la 5G Free Mobile de manière optimale, votre téléphone doit être compatible avec certaines fréquences clés, notamment la <strong>bande n28 (700 MHz)</strong>.
                                Certaines marques asiatiques (comme les modèles importés de Xiaomi ou OnePlus) peuvent ne pas supporter cette bande, réduisant considérablement votre couverture en campagne.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                                Le cas particulier des iPhone (iOS)
                            </h3>
                            <p>
                                Contrairement à Android, les <strong>iPhone</strong> d'Apple gèrent souvent la configuration opérateur via des mises à jour automatiques ("Réglages Opérateur").
                                Cependant, des problèmes de MMS ou de partage de connexion peuvent survenir après une mise à jour d'iOS, nécessitant une intervention manuelle spécifique.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
