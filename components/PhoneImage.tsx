
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Smartphone } from "lucide-react";

interface PhoneImageProps {
    brand: string;
    model: string;
    slug: string;
    priority?: boolean;
}

export default function PhoneImage({ brand, model, slug, priority = false }: PhoneImageProps) {
    const [imgSrc, setImgSrc] = useState<string>(`/images/phones/${slug}.jpg`);
    const [hasError, setHasError] = useState(false);

    // Normalize brand for fallback
    const normalizedBrand = brand.toLowerCase();
    const validBrands = ["apple", "samsung", "google", "xiaomi", "oppo"];

    const fallbackSrc = validBrands.includes(normalizedBrand)
        ? `/images/brands/${normalizedBrand}.png`
        : `/images/brands/generic.png`;

    return (
        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center group">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>

            <Image
                src={hasError ? fallbackSrc : imgSrc}
                alt={`${brand} ${model}`}
                fill
                className={`object-contain p-8 transition-all duration-700 group-hover:scale-105 ${hasError ? 'opacity-90' : 'opacity-100'}`}
                onError={() => {
                    if (!hasError) {
                        setImgSrc(fallbackSrc);
                        setHasError(true);
                    }
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={priority}
            />

            {/* Badge if using fallback */}
            {hasError && (
                <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-[10px] font-medium text-gray-400 border border-gray-100 shadow-sm">
                        <Smartphone className="w-3 h-3" />
                        Visuel générique
                    </span>
                </div>
            )}
        </div>
    );
}
