import Link from "next/link";
import { phones } from "@/data/phones";
import { posts } from "@/data/posts";
import { Settings2, Smartphone, ArrowRight, Zap, Search, BookOpen, Calendar } from "lucide-react";
import BrandSearch from "@/components/BrandSearch";
import Script from "next/script";

export default function Home() {
  // Get unique brands
  const brands = Array.from(new Set(phones.map((phone) => phone.brand))).sort();

  // Get count per brand
  const getBrandCount = (brand: string) => phones.filter((p) => p.brand === brand).length;

  // WebSite Schema.org JSON-LD
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FreeMobileAndroid.fr",
    "url": "https://www.freemobileandroid.fr",
    "description": "Guide indépendant de référence pour configurer les APN Free Mobile. Tutoriels pour Samsung, Xiaomi, iPhone et tous les smartphones.",
    "inLanguage": "fr-FR",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.freemobileandroid.fr/marques?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Latest blog posts for homepage section
  const latestPosts = posts.slice(0, 3);

  return (
    <main className="min-h-screen">
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      {/* Modern Hero Section with animated gradient */}
      <section className="relative overflow-hidden bg-gray-900 text-white py-32 sm:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/50 via-gray-900 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
            <span className="text-xs font-medium text-red-200 uppercase tracking-widest">Mise à jour 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-2">
            Configuration APN <br />
            <span className="text-red-500">Free Mobile</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Optimisez votre connexion 4G/5G et réparez les MMS en quelques secondes.
            Guides étape par étape pour tous les smartphones.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/configurer-apn" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-red-900/50">
              <Settings2 className="w-5 h-5" />
              Configurer mon APN
            </Link>
            <Link href="/marques" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
              <Search className="w-5 h-5" />
              Chercher mon modèle
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Search Section */}
      <section className="max-w-6xl mx-auto px-4 py-24 -mt-20 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <Smartphone className="w-6 h-6 text-red-600" />
            Sélectionnez votre modèle
          </h2>
          <Link href="/marques" className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-1 group">
            Voir tout <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <BrandSearch brands={brands} phones={phones} />
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50/50 py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Ultra-Rapide</h3>
              <p className="text-gray-500 leading-relaxed">
                Profitez de la 5G Free Mobile à pleine vitesse grâce aux réglages APN optimisés.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <Settings2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Configuration Simple</h3>
              <p className="text-gray-500 leading-relaxed">
                Pas besoin d'être un expert. Nos guides visuels vous accompagnent pas à pas.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Tous les Modèles</h3>
              <p className="text-gray-500 leading-relaxed">
                De l'iPhone 16 au vieux Samsung, nous couvrons tous les smartphones du marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Articles Section — Internal Linking */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-red-600" />
            Derniers Articles & Astuces
          </h2>
          <Link href="/blog" className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-1 group">
            Tous les articles <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{post.category}</span>
              <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-red-600 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("fr-FR")}
                </div>
                <span className="text-red-600 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Lire <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
