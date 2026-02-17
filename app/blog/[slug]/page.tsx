import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import VpnCTA from "@/components/VpnCTA";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Script from "next/script";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Article introuvable",
        };
    }

    const imageUrl = post.image || "/og-default.png";

    return {
        title: `${post.title} - Blog FreeMobileAndroid`,
        description: post.excerpt,
        alternates: {
            canonical: `https://www.freemobileandroid.fr/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            url: `https://www.freemobileandroid.fr/blog/${slug}`,
            siteName: 'FreeMobileAndroid.fr',
            locale: 'fr_FR',
            images: [{
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: post.title,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [imageUrl],
        },
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Get related posts (same category, excluding current)
    const relatedPosts = posts
        .filter((p) => p.slug !== post.slug && p.category === post.category)
        .slice(0, 2);

    // If not enough related posts in same category, fill with recent posts
    if (relatedPosts.length < 2) {
        const otherPosts = posts
            .filter((p) => p.slug !== post.slug && !relatedPosts.find((r) => r.slug === p.slug))
            .slice(0, 2 - relatedPosts.length);
        relatedPosts.push(...otherPosts);
    }

    // Schema.org Article
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image ? `https://www.freemobileandroid.fr${post.image}` : undefined,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://www.freemobileandroid.fr/qui-sommes-nous"
        },
        "publisher": {
            "@type": "Organization",
            "name": "FreeMobileAndroid.fr",
            "url": "https://www.freemobileandroid.fr",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.freemobileandroid.fr/icon.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.freemobileandroid.fr/blog/${post.slug}`
        },
        "articleSection": post.category,
        "inLanguage": "fr-FR"
    };

    // Extract FAQ from HTML content for FAQPage schema
    const faqRegex = /<p><strong>Q\s*:\s*(.*?)<\/strong><br\s*\/?>\s*R\s*:\s*(.*?)<\/p>/g;
    const faqs: { question: string; answer: string }[] = [];
    let match;
    const contentForFaq = post.content;
    while ((match = faqRegex.exec(contentForFaq)) !== null) {
        faqs.push({
            question: match[1].replace(/<[^>]*>/g, '').trim(),
            answer: match[2].replace(/<[^>]*>/g, '').trim(),
        });
    }

    const faqJsonLd = faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    } : null;

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* Schema.org JSON-LD */}
            <Script
                id="article-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            {faqJsonLd && (
                <Script
                    id="faq-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}

            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-3xl mx-auto px-4 pt-32 pb-12">
                    <Breadcrumbs items={[
                        { label: "Accueil", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: post.title.substring(0, 30) + "...", href: "#" }
                    ]} />

                    <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 mt-6">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                            {post.category}
                        </span>
                        <time dateTime={post.date} className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString("fr-FR", { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                        <Link href="/qui-sommes-nous" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold group-hover:scale-105 transition-transform">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">{post.author}</div>
                                <div className="text-xs text-gray-500">Rédacteurs Tech</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Hero Image — optimized with next/image */}
            {
                post.image && (
                    <div className="max-w-4xl mx-auto px-4 -mt-8 mb-8 relative z-10">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={1200}
                            height={630}
                            priority
                            className="w-full h-auto rounded-2xl shadow-xl border border-gray-100"
                        />
                    </div>
                )
            }

            {/* Content */}
            <article className="max-w-3xl mx-auto px-4 py-12">
                <div
                    className="prose prose-lg prose-red max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-red-600 prose-img:rounded-2xl"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* NordVPN Affiliate CTA */}
                <VpnCTA />

                {/* Related Articles Module */}
                {relatedPosts.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles connexes</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-md transition-all"
                                >
                                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{related.category}</span>
                                    <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-red-600 transition-colors leading-snug">
                                        {related.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-2">{related.excerpt}</p>
                                    <span className="inline-flex items-center gap-1 text-sm text-red-600 font-medium mt-3 group-hover:translate-x-1 transition-transform">
                                        Lire <ArrowRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Share / CTA */}
                <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                    <p className="text-gray-500 mb-6 italic">
                        Cet article vous a aidé ? Partagez-le ou consultez nos guides de configuration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/configurer-apn"
                            className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200"
                        >
                            Configurer mon APN Free Mobile
                        </Link>
                        <Link
                            href="/marques"
                            className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-full hover:bg-gray-200 transition-all"
                        >
                            Trouver mon modèle
                        </Link>
                    </div>
                </div>
            </article>
        </main >
    );
}
