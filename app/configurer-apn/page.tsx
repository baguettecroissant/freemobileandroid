
import Link from 'next/link';
import { Metadata } from 'next';
import { Settings, Smartphone, ArrowRight, ShieldCheck, Globe, MessageSquare } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Configurer APN Free Mobile (MMS & Internet) - Guide Complet 2026',
    description: 'Le guide ultime pour configurer les APN Free Mobile sur Android et iPhone. Résolvez vos problèmes de MMS et Internet en 2 minutes.',
};

export default function ConfigurerAPNPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 pt-32 pb-16 text-center">
                    <Breadcrumbs items={[
                        { label: "Accueil", href: "/" },
                        { label: "Configuration APN", href: "/configurer-apn" }
                    ]} />

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-6 mt-6">
                        <Settings className="w-4 h-4" />
                        <span>Configuration Officielle 2026</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Configurer votre mobile <span className="text-red-600">Free</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Internet ne marche pas ? Impossible d'envoyer des MMS ?
                        Voici les paramètres APN officiels à entrer dans votre téléphone pour tout débloquer.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-8">
                {/* Quick Actions Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Automatic Config Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-red-50 border border-red-100 relative overflow-hidden group hover:scale-[1.01] transition-transform">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Smartphone size={120} className="text-red-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Configuration par Marque</h3>
                            <p className="text-gray-500 mb-6">Trouvez le guide pas-à-pas spécifique pour votre modèle de téléphone.</p>
                            <Link href="/marques" className="inline-flex items-center text-red-600 font-bold hover:gap-2 transition-all">
                                Choisir ma marque <ArrowRight className="w-5 h-5 ml-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Manual Config Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <Settings className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Paramètres Manuels</h3>
                        <p className="text-gray-500 mb-6">Les valeurs brutes à copier-coller si vous savez déjà où aller dans les réglages.</p>
                        <a href="#valeurs-manuelles" className="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all">
                            Voir les valeurs <ArrowRight className="w-5 h-5 ml-1" />
                        </a>
                    </div>
                </div>

                {/* Manual Configuration Section */}
                <section id="valeurs-manuelles" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Les Valeurs à Copier-Coller</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* APN Internet */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <Globe className="w-6 h-6 text-gray-700" />
                                <h3 className="font-bold text-lg text-gray-900">1. APN Internet</h3>
                            </div>
                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">Nom</span>
                                    <span className="font-bold text-gray-900">Free</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">APN</span>
                                    <span className="font-bold text-gray-900">free</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">MCC</span>
                                    <span className="font-bold text-gray-900">208</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">MNC</span>
                                    <span className="font-bold text-gray-900">15</span>
                                </div>
                                <div className="flex justify-between pt-1">
                                    <span className="text-gray-500">Type d'APN</span>
                                    <span className="font-bold text-gray-900 text-right">default,supl,hipri</span>
                                </div>
                            </div>
                        </div>

                        {/* APN MMS */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <MessageSquare className="w-6 h-6 text-gray-700" />
                                <h3 className="font-bold text-lg text-gray-900">2. APN MMS</h3>
                            </div>
                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">Nom</span>
                                    <span className="font-bold text-gray-900">Free MMS</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">APN</span>
                                    <span className="font-bold text-gray-900">mmsfree</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">MMSC</span>
                                    <span className="font-bold text-gray-900 text-[10px] md:text-xs truncate ml-2">http://mms.free.fr</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">MCC</span>
                                    <span className="font-bold text-gray-900">208</span>
                                </div>
                                <div className="flex justify-between pt-1">
                                    <span className="text-gray-500">Type d'APN</span>
                                    <span className="font-bold text-gray-900">mms</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 text-blue-800 p-4 rounded-xl flex gap-3 text-sm items-start">
                        <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                        <p><strong>Astuce de pro :</strong> Si vous ne pouvez pas créer deux APN distincts, essayez de tout mettre dans un seul, mais la séparation reste la méthode la plus fiable chez Free.</p>
                    </div>
                </section>

            </div>
        </main>
    );
}
