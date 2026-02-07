import Link from "next/link";
import { Settings2, Github, Twitter } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl transition-all duration-300 shadow-sm">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="group flex items-center gap-3 font-bold text-xl text-gray-900 transition-colors"
                >
                    <div className="relative w-9 h-9 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-500 rounded-xl text-white shadow-lg shadow-red-500/30 group-hover:scale-105 transition-transform duration-300">
                        <Settings2 className="w-5 h-5 absolute z-10" />
                        <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="tracking-tight group-hover:text-red-600 transition-colors">
                        FreeMobile<span className="text-red-600">Android</span>
                    </span>
                </Link>

                <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/configurer-apn" className="hidden md:block hover:text-red-600 transition-colors">
                        Config APN
                    </Link>
                    <Link href="/marques" className="hover:text-red-600 transition-colors">
                        Marques
                    </Link>
                    <Link href="/blog" className="hover:text-red-600 transition-colors">
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white/50 backdrop-blur-sm mt-auto relative z-10">
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-bold text-lg text-gray-900">
                            <div className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center text-white text-xs">F</div>
                            FreeMobileAndroid
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Le guide de référence pour configurer votre smartphone Android et iPhone sur le réseau Free Mobile.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Liens Utiles</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/marques" className="hover:text-red-600 transition-colors">Toutes les marques</Link></li>
                            <li><a href="https://mobile.free.fr" target="_blank" rel="nofollow noreferrer" className="hover:text-red-600 transition-colors">Site officiel Free Mobile</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Légal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/qui-sommes-nous" className="hover:text-red-600 transition-colors">Qui sommes-nous ?</Link></li>
                            <li><span className="cursor-pointer hover:text-red-600 transition-colors">Mentions Légales</span></li>
                            <li><span className="cursor-pointer hover:text-red-600 transition-colors">Confidentialité</span></li>
                            <li><span className="cursor-pointer hover:text-red-600 transition-colors">Contact</span></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
                    <p className="mb-2">
                        Ce site est un blog d'entraide indépendant et n'est pas affilié à Free Mobile SAS.
                        Les marques citées appartiennent à leurs propriétaires respectifs.
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} FreeMobileAndroid.fr
                    </p>
                </div>
            </div>
        </footer>
    );
}
