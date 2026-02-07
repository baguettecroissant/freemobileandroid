import { MetadataRoute } from "next";
import { phones } from "@/data/phones";
import { posts } from "@/data/posts";

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

    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "weekly" as const,
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
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/qui-sommes-nous`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        ...brandUrls,
        ...phoneUrls,
        ...blogUrls,
    ];
}
