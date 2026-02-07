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
            <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
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
        </main>
    );
}
