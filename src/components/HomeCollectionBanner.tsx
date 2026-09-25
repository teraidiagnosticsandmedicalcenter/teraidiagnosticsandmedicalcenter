import React from "react";
import { Home, PhoneCall, ShieldCheck, FileCheck, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface HomeCollectionBannerProps {
  onOpenBooking: () => void;
}

export const HomeCollectionBanner: React.FC<HomeCollectionBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-950 text-white relative overflow-hidden">
      {/* Background Accent Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-300/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Home className="w-3.5 h-3.5" />
              <span>Doorstep Healthcare Service</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              {siteConfig.features.homeCollectionNoticeNepali}
            </h2>

            <p className="text-teal-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Skip hospital traffic and long waiting lines. Our certified medical phlebotomists visit your home anywhere in Birgunj with sterile vacuum collection tubes and cold-chain sample preservation. Ideal for elderly parents, expectant mothers, and busy professionals.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Request Phlebotomist Home Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${siteConfig.phones.primary}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-5 py-3 rounded-xl border border-white/20 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-300" />
                <span>Call {siteConfig.phones.primary}</span>
              </a>
            </div>
          </div>

          {/* Right 3-Step Process */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-extrabold text-lg shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Call or WhatsApp Us</h4>
                <p className="text-xs text-teal-100">Send your name, required tests, and Birgunj location.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-extrabold text-lg shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Safe Sample Collection</h4>
                <p className="text-xs text-teal-100">Sterile vacuum tubes & hygienic disposable collection kit at your home.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-extrabold text-lg shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">WhatsApp & Print Reports</h4>
                <p className="text-xs text-teal-100">Same-day verified PDF report delivered directly to your phone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
