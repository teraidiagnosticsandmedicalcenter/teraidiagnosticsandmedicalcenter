import React from "react";
import { Phone, MapPin, Clock, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white text-xs py-2 px-4 border-b border-teal-700/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Notice & Nepali Tagline */}
        <div className="flex items-center gap-2 text-center md:text-left flex-wrap justify-center md:justify-start">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            {siteConfig.features.homeCollectionNoticeNepali}
          </span>
          <span className="hidden sm:inline text-teal-200/80">|</span>
          <span className="text-teal-100 font-medium hidden sm:inline flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 inline" />
            {siteConfig.features.discountNoticeNepali}
          </span>
        </div>

        {/* Contact, Location & Hours */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          <div className="flex items-center gap-1.5 text-teal-100">
            <MapPin className="w-3.5 h-3.5 text-teal-300 shrink-0" />
            <span>{siteConfig.address.street}, {siteConfig.address.city}</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-teal-100">
            <Clock className="w-3.5 h-3.5 text-teal-300 shrink-0" />
            <span>7:00 AM – 8:00 PM</span>
          </div>

          <a
            href={`tel:${siteConfig.phones.primary}`}
            className="flex items-center gap-1.5 text-white font-semibold hover:text-emerald-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{siteConfig.phones.primary}</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Namaste%2C%20I%20would%20like%20to%20inquire%20about%20lab%20tests%20at%20Terai%20Diagnostic.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-2 py-0.5 rounded transition-colors"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
