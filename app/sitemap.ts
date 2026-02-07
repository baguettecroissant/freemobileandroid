import { MetadataRoute } from "next";
import { phones } from "@/data/phones";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://freemobileandroid.fr";

    const brands = Array.from(new Set(phones.map((phone) => phone.brand.toLowerCase())));

    const brandUrls = brands.map((brand) => ({
        url: `${baseUrl}/marques/${brand}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    const phoneUrls = phones.map((phone) => ({
        url: `${baseUrl}/configurer-apn/${phone.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/marques`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...brandUrls,
        ...phoneUrls,
    ];
}
