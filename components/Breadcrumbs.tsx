
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Script from 'next/script';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Generate JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://www.freemobileandroid.fr${item.href}`
        }))
    };

    return (
        <>
            <div className="text-sm text-gray-500 flex items-center gap-2 mb-4 overflow-x-auto whitespace-nowrap">
                {items.map((item, index) => (
                    <div key={item.href} className="flex items-center gap-2">
                        {index > 0 && <ChevronRight className="w-3 h-3 text-gray-300" />}
                        {index === items.length - 1 ? (
                            <span className="text-gray-900 font-medium">{item.label}</span>
                        ) : (
                            <Link href={item.href} className="hover:text-red-600 transition-colors">
                                {item.label}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            <Script
                id="breadcrumb-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
