import Link from "next/link";
import { posts } from "@/data/posts";
import { Calendar, User, Clock, ArrowRight, BookOpen } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Astuces Free Mobile | 4G, 5G, APN, Dépannage",
    description: "Actualités, tutoriels et guides de dépannage pour les abonnés Free Mobile. Comprendre la 5G, régler les problèmes de MMS, et plus encore.",
};

export default function BlogIndex() {
    return (
        <main className="min-h-screen pb-20 bg-gray-50/50">
            {/* Header */}
            <section className="bg-gray-900 text-white pt-32 pb-16 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
                    <div className="flex justify-center mb-4">
                        <Breadcrumbs items={[
                            { label: "Accueil", href: "/" },
                            { label: "Blog", href: "#" }
                        ]} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight flex flex-col md:flex-row items-center justify-center gap-4">
                        <BookOpen className="w-12 h-12 text-red-500" />
                        Blog & Astuces
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Guides d'experts pour maîtriser votre forfait Free Mobile et votre smartphone.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="max-w-5xl mx-auto px-4 -mt-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(post.date).toLocaleDateString("fr-FR")}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                            <User className="w-4 h-4" />
                                        </div>
                                        {post.author}
                                    </div>
                                    <span className="text-red-600 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                        Lire l'article
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
