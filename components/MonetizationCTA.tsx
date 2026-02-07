import { Smartphone, ArrowRight, Zap } from "lucide-react";

interface MonetizationCTAProps {
    modelName: string;
}

export default function MonetizationCTA({ modelName }: MonetizationCTAProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 my-12 group isolation-auto">
            {/* Dynamic Background Effects */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-red-600/20 rounded-full blur-[80px] group-hover:bg-red-600/30 transition-colors duration-700"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-blue-600/20 transition-colors duration-700"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-900/20">
                        <Zap className="w-3 h-3 fill-current" />
                        Solution Alternative
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Votre {modelName} capte toujours mal ?
                    </h3>

                    <p className="text-gray-400 max-w-lg leading-relaxed">
                        Si la configuration APN ne suffit pas, votre antenne est peut-être fatiguée. Découvrez les offres reconditionnées garanties 12 mois.
                    </p>
                </div>

                <div className="flex-shrink-0">
                    <a
                        href="https://www.backmarket.fr/fr-fr/l/smartphone/0754854e-6b99-4d69-8078-4db81d596472"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="group/btn relative inline-flex items-center gap-3 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] overflow-hidden"
                    >
                        <span className="relative z-10">Voir les offres -50%</span>
                        <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-1" />

                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
                    </a>
                    <p className="text-xs text-gray-500 text-center mt-3">
                        Partenaire BackMarket • Garantie 12 mois
                    </p>
                </div>
            </div>
        </div>
    );
}
