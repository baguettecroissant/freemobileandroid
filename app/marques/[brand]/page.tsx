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

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-4">
                        <div className="p-3 bg-red-50 rounded-2xl text-red-600">
                            <Smartphone className="w-8 h-8" />
                        </div>
                        Smartphones {brandName}
                    </h1>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            </section>
        </main>
    );
}
