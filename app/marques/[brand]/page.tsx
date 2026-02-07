import Link from "next/link";
import { phones } from "@/data/phones";
import { ChevronRight, Smartphone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ brand: string }>;
}

export async function generateStaticParams() {
    const brands = Array.from(new Set(phones.map((p) => p.brand.toLowerCase())));
    return brands.map((brand) => ({
        brand: brand,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { brand } = await params;
    const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);

    return {
        title: `Smartphones ${brandName} - Config APN Free Mobile`,
        description: `Liste des modèles ${brandName} pour configurer l'APN Free Mobile.`,
    };
}

export default async function Page({ params }: PageProps) {
    const { brand } = await params;
    const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);

    const brandPhones = phones.filter(
        (p) => p.brand.toLowerCase() === brand.toLowerCase()
    );

    if (brandPhones.length === 0) {
        notFound();
    }

    const getBrandSpecifics = (brandName: string) => {
        const lowerBrand = brandName.toLowerCase();

        if (lowerBrand === 'iphone' || lowerBrand === 'apple') {
            return {
                tip: "Sur iPhone, le partage de connexion disparaît souvent après une mise à jour. Allez dans Réglages > Données cellulaires > Réseau de données cellulaires et remplissez la section 'Partage de connexion' avec 'free'.",
                issue: "iMessage et Facetime en attente d'activation",
                issueFix: "Désactivez et réactivez iMessage dans les réglages après avoir configuré votre numéro. Un redémarrage est souvent nécessaire."
            };
        }
        if (lowerBrand === 'xiaomi' || lowerBrand === 'redmi' || lowerBrand === 'poco') {
            return {
                tip: "Les téléphones Xiaomi ferment agressivement les applications en arrière-plan. Pour que les MMS fonctionnent bien, verrouillez l'app Messages dans le gestionnaire de tâches.",
                issue: "Pas de 5G malgré le forfait",
                issueFix: "Vérifiez que le 'Type de réseau préféré' est bien sur '5G' et non 'LTE' dans les paramètres de carte SIM."
            };
        }
        if (lowerBrand === 'samsung') {
            return {
                tip: "Samsung cache parfois le bouton pour ajouter un APN. Si vous ne le voyez pas, touchez 'Ajouter' ou les trois petits points en haut à droite dans le menu 'Noms des points d'accès'.",
                issue: "Itinérance des données grisée",
                issueFix: "C'est normal si vous êtes en France. L'itinérance ne doit être activée qu'à l'étranger pour éviter les surcoûts (sauf pass destination inclus)."
            };
        }
        return {
            tip: "Si vous ne trouvez pas le menu APN, utilisez la barre de recherche des paramètres et tapez 'Noms des points d'accès' ou 'Access Point Names'.",
            issue: "Perte de connexion 4G/5G aléatoire",
            issueFix: "Essayez de passer le téléphone en mode avion pendant 10 secondes puis désactivez-le pour forcer une reconnexion à l'antenne la plus proche."
        };
    };

    const specifics = getBrandSpecifics(brandName);

    return (
        <main className="min-h-screen bg-gray-50/50 pb-20">
            <section className="bg-white border-b border-gray-100 pt-28 pb-12 px-4 shadow-sm">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb */}
                    <Breadcrumbs items={[
                        { label: "Accueil", href: "/" },
                        { label: "Marques", href: "/marques" },
                        { label: brandName, href: "#" }
                    ]} />

                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 flex flex-col md:flex-row md:items-center gap-4 mt-6">
                        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                            <Smartphone className="w-8 h-8" />
                        </div>
                        <span>
                            Configuration APN <span className="text-red-600">{brandName}</span>
                            <span className="block text-lg font-normal text-gray-500 mt-2">
                                Guides détaillés pour tous les modèles {brandName} et solutions aux problèmes courants.
                            </span>
                        </span>
                    </h1>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sélectionnez votre modèle {brandName}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                    {brandPhones.map((phone) => (
                        <Link
                            key={phone.slug}
                            href={`/configurer-apn/${phone.slug}`}
                            className="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300 flex flex-col items-start gap-3"
                        >
                            <div className="w-full flex items-center justify-between">
                                <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded uppercase tracking-wider">
                                    {phone.year}
                                </span>
                                {phone.compatible_5g && (
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                )}
                            </div>

                            <h3 className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition-colors leading-tight">
                                {phone.model}
                            </h3>

                            <div className="mt-auto pt-4 w-full border-t border-gray-50 flex items-center justify-between text-sm text-gray-400 group-hover:text-red-500">
                                <span>Configurer</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* SEO & Troubleshooting Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 ">L'Astuce Spéciale {brandName}</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {specifics.tip}
                        </p>
                        <div className="p-4 bg-yellow-50 text-yellow-800 rounded-xl text-sm font-medium">
                            💡 Bon à savoir : Les mises à jour système {brandName} peuvent parfois effacer vos réglages APN. Gardez cette page en favori !
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Problème Fréquent</h2>
                        <h3 className="font-bold text-red-600 mb-2">{specifics.issue}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {specifics.issueFix}
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Questions Fréquentes sur {brandName} et Free</h2>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <div>
                            <h3 className="font-bold text-lg mb-2">Mon téléphone {brandName} est-il compatible 5G Free ?</h3>
                            <p className="text-gray-600">
                                Cela dépend du modèle et de sa provenance. Les modèles {brandName} vendus en Europe sont généralement compatibles avec la bande n78 (3.5 GHz) et n28 (700 MHz).
                                Vérifiez la fiche technique de votre modèle ci-dessus.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Internet fonctionne mais pas les MMS sur mon {brandName}</h3>
                            <p className="text-gray-600">
                                C'est un classique. Assurez-vous d'avoir bien configuré l'APN "mmsfree" séparément de l'APN Internet "free", et que la taille maximale des MMS est définie (souvent 600 ko ou illimité).
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
