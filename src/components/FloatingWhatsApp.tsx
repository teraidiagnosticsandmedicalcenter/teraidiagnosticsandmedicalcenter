import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Namaste%2C%20I%20would%20like%20to%20inquire%20about%20tests%20or%20home%20collection%20at%20Terai%20Diagnostic.`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center group">
      <div className="hidden sm:block mr-3 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with our Lab on WhatsApp 💬
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Terai Diagnostic on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-emerald-500/40 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 border-2 border-white ring-4 ring-emerald-500/20"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
};
