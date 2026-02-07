import Link from "next/link";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Calendar, User, Clock, Share2 } from "lucide-react";

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

    return {
        title: `${post.title} - Blog FreeMobileAndroid`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        }
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pb-20">
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
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString("fr-FR", { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
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


            {/* Hero Image */}
            {
                post.image && (
                    <div className="max-w-4xl mx-auto px-4 -mt-8 mb-8 relative z-10">
                        <img
                            src={post.image}
                            alt={post.title}
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

                {/* Share / CTA */}
                <div className="mt-16 pt-8 border-t border-gray-100 text-center">
                    <p className="text-gray-500 mb-6 italic">
                        Cet article vous a aidé ? Partagez-le ou consultez nos guides de configuration.
                    </p>
                    <Link
                        href="/marques"
                        className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200"
                    >
                        Configurer mon APN Free Mobile
                    </Link>
                </div>
            </article>
        </main >
    );
}
