import { Shield, ArrowRight, Lock } from "lucide-react";

export default function VpnCTA() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 my-12 group isolation-auto">
            {/* Dynamic Background Effects — Blue/Purple palette for VPN branding */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-colors duration-700"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] group-hover:bg-violet-600/20 transition-colors duration-700"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-900/20">
                        <Lock className="w-3 h-3 fill-current" />
                        Sécurité Recommandée
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Protégez votre connexion Free Mobile
                    </h3>

                    <p className="text-gray-400 max-w-lg leading-relaxed">
                        Vous configurez votre réseau ? Sécurisez aussi votre 4G/5G et vos Wi-Fi publics.
                        NordVPN chiffre vos données sur <strong className="text-gray-300">tous vos appareils</strong>.
                    </p>
                </div>

                <div className="flex-shrink-0 flex flex-col items-center">
                    <a
                        href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=140680&source=freemobile"
                        target="_blank"
                        rel="nofollow noopener noreferrer sponsored"
                        className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] overflow-hidden"
                    >
                        <Shield className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">Découvrir NordVPN</span>
                        <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-1" />

                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                    </a>
                    <p className="text-xs text-gray-500 text-center mt-3">
                        Lien affilié • Soutenez le blog ❤️
                    </p>
                </div>
            </div>
        </div>
    );
}
