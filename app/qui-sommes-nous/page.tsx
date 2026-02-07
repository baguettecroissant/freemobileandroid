import { Metadata } from "next";
import { Users, CheckCircle2, ShieldCheck, Newspaper } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Qui sommes-nous ? | FreeMobileAndroid",
    description: "Découvrez qui se cache derrière FreeMobileAndroid.fr, le guide indépendant de référence pour configurer votre mobile sur le réseau Free.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4">

                {/* Hero Section */}
                <section className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-600">
                        <Users size={32} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Qui sommes-nous ?
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Nous sommes une équipe de passionnés de technologie et d'experts télécoms, dédiés à une seule mission : vous aider à tirer le meilleur parti de votre forfait Free Mobile.
                    </p>
                </section>

                {/* Notre Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4 text-gray-900">
                            <CheckCircle2 className="text-red-600" />
                            <h2 className="text-xl font-bold">Notre Mission</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            La configuration des APN (Points d'Accès Réseau) est souvent un casse-tête. Entre les MMS qui refusent de partir et la 5G qui ne s'active pas, les utilisateurs sont souvent perdus.
                            <br /><br />
                            <strong>FreeMobileAndroid.fr</strong> est né de ce constat. Nous créons des guides étape par étape, vérifiés et mis à jour, pour chaque modèle de téléphone. Notre objectif est de rendre la technologie accessible à tous.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4 text-gray-900">
                            <ShieldCheck className="text-red-600" />
                            <h2 className="text-xl font-bold">Indépendance & Transparence</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Nous sommes un média <strong>100% indépendant</strong>. Nous ne sommes pas affiliés à l'opérateur Free Mobile (Groupe Iliad).
                            <br /><br />
                            Cette liberté nous permet de tester les produits et les configurations de manière objective. Nos guides sont rédigés par des humains, pour des humains, sans jargon technique inutile.
                        </p>
                    </div>
                </div>

                {/* L'Équipe */}
                <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Newspaper className="w-6 h-6 text-red-600" />
                        La Rédaction
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-3xl shrink-0">
                            👨‍💻
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">L'Équipe Technique</h3>
                            <p className="text-sm text-red-600 font-medium mb-3">Experts Réseaux & Android</p>
                            <p className="text-gray-600 leading-relaxed">
                                Composée d'ingénieurs télécom et de développeurs web, notre équipe veille technologique décortique les mises à jour Android et iOS pour vous proposer les configurations les plus récentes. Nous testons nous-mêmes les réglages sur des dizaines de modèles (Samsung, Xiaomi, iPhone...) pour garantir leur fonctionnement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Besoin d'aide pour configurer votre mobile ?</h3>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30"
                    >
                        Trouver mon téléphone
                    </Link>
                </div>

            </div>
        </main>
    );
}
