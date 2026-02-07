
import { Signal, ShieldCheck, Wifi } from "lucide-react";

export default function ApnSettings() {
    const settings = [
        { label: "Nom", value: "Free", important: true },
        { label: "APN", value: "free", important: true },
        { label: "MMSC", value: "http://mms.free.fr", important: true },
        { label: "MCC", value: "208" },
        { label: "MNC", value: "15" },
        { label: "Type d'APN", value: "default, supl, mms, dun", important: true },
        { label: "Type d'authentification", value: "Aucun" },
        { label: "Protocole APN", value: "IPv4 / IPv6" },
    ];

    return (
        <div className="my-8 relative group">
            {/* Decorative Blur */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>

            <div className="relative bg-white border border-gray-100 rounded-xl shadow-xl shadow-gray-200/50 overflow-hidden">
                <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center justify-between backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100/50 rounded-lg text-red-600">
                            <Signal className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 leading-none">
                                Réglages APN
                            </h3>
                            <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">Réseau Free Mobile</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                </div>

                <div className="divide-y divide-gray-50">
                    {settings.map((item, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-[1fr,1.5fr] px-6 py-3.5 items-center transition-colors hover:bg-gray-50/80 ${item.important ? 'bg-red-50/10' : ''}`}
                        >
                            <span className={`text-sm font-medium ${item.important ? 'text-gray-900' : 'text-gray-500'}`}>
                                {item.label}
                            </span>
                            <div className="flex items-center justify-between gap-2">
                                <code className={`font-mono text-sm px-2 py-1 rounded-md border ${item.important ? 'bg-white border-red-100 text-red-700 shadow-sm' : 'bg-gray-50 border-transparent text-gray-600'}`}>
                                    {item.value}
                                </code>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50/50 px-6 py-3 text-xs text-center text-gray-400 border-t border-gray-100 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3 h-3" />
                    Configuration officielle vérifiée
                </div>
            </div>
        </div>
    );
}
