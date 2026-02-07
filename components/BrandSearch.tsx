"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Smartphone, ChevronRight, ArrowRight } from "lucide-react";

interface BrandSearchProps {
    brands: string[];
    phones: { brand: string; model: string; slug: string; year: number }[];
}

export default function BrandSearch({ brands, phones }: BrandSearchProps) {
    const [query, setQuery] = useState("");

    // Filter logic
    const filteredBrands = brands.filter((brand) =>
        brand.toLowerCase().includes(query.toLowerCase())
    );

    const filteredPhones = phones.filter((phone) =>
        `${phone.brand} ${phone.model}`.toLowerCase().includes(query.toLowerCase())
    );

    const getBrandCount = (brand: string) =>
        phones.filter((p) => p.brand === brand).length;

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto mb-12">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-11 pr-4 py-4 border border-gray-200 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 text-lg"
                    placeholder="Rechercher une marque ou un modèle (ex: Samsung, iPhone 15...)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {query.length > 0 ? (
                // Search Results Mode
                <div className="space-y-8">
                    {filteredPhones.length > 0 ? (
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 px-2">
                                Modèles trouvés ({filteredPhones.length})
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredPhones.slice(0, 9).map((phone) => (
                                    <Link
                                        key={phone.slug}
                                        href={`/configurer-apn/${phone.slug}`}
                                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-red-100 hover:shadow-md transition-all group"
                                    >
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase">
                                                {phone.brand}
                                            </span>
                                            <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                                                {phone.model}
                                            </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-red-500" />
                                    </Link>
                                ))}
                            </div>
                            {filteredPhones.length > 9 && (
                                <p className="text-center text-gray-500 mt-4 text-sm">
                                    ...et {filteredPhones.length - 9} autres résultats.
                                </p>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                            <Smartphone className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500">Aucun modèle trouvé pour "{query}"</p>
                        </div>
                    )}
                </div>
            ) : (
                // Default View (Brand Grid)
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {brands.map((brand) => (
                        <Link
                            key={brand}
                            href={`/marques/${brand.toLowerCase()}`}
                            className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-3 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-10 transition-opacity">
                                <Smartphone className="w-16 h-16 text-red-600 -mr-6 -mt-6" />
                            </div>
                            <span className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors z-10">
                                {brand}
                            </span>
                            <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-full z-10">
                                {getBrandCount(brand)} modèles
                            </span>
                            <ArrowRight className="w-4 h-4 text-red-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all absolute bottom-4" />
                        </Link>
                    ))}
                    <Link
                        href="/marques"
                        className="group bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200 hover:border-red-200 hover:bg-red-50/50 transition-all flex flex-col items-center justify-center gap-2 text-center"
                    >
                        <span className="font-medium text-gray-600 group-hover:text-red-600">
                            Voir toutes les marques
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                    </Link>
                </div>
            )}
        </div>
    );
}
