
import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4">
            <div className="bg-red-50 p-6 rounded-full mb-8 animate-bounce">
                <FileQuestion className="w-16 h-16 text-red-600" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                404
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                Page introuvable
            </h2>

            <p className="text-gray-500 text-center max-w-md mb-12">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-100"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Retour à l'accueil
                </Link>

                <Link
                    href="/marques"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-50 text-gray-900 font-medium hover:bg-gray-100 border border-gray-200 transition-colors"
                >
                    Voir les marques
                </Link>
            </div>
        </div>
    );
}
