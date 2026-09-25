import React from "react";
import { ShieldCheck, Calendar, ArrowRight, Phone, Sparkles, CheckCircle2, Home, HeartPulse, Clock, FileText } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToTests: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigateToTests }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-slate-50 to-white pt-8 pb-16 lg:py-20">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-teal-200/20 via-emerald-200/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>{siteConfig.nhpcReg} • Trusted Healthcare in Birgunj</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Accurate Diagnostics,{" "}
                <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  Compassionate Care.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-teal-800 tracking-wide">
                {siteConfig.nameNepali} ({siteConfig.address.landmarkNepali})
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your health deserves precision you can trust. Led by senior medical lab technologists with degrees from India and NHPC certification, we provide fully automated pathology, digital X-ray, 3D/4D ultrasound, dental, eye care, and <strong>free home blood sample collection</strong> across Birgunj at discounted rates.
            </p>

            {/* Highlights Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm font-semibold text-slate-700 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Same-Day WhatsApp & Printed Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free Home Sample Collection in Birgunj</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Special Discounts on All 100+ Tests</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>17+ Specialist Doctor OPD Services</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-base px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-teal-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Home className="w-5 h-5" />
                <span>Book Home Blood Collection</span>
              </button>

              <button
                onClick={onNavigateToTests}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-teal-400 font-bold text-base px-6 py-3.5 rounded-2xl transition-all shadow-xs"
              >
                <span>Browse Test Catalog</span>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </button>
            </div>

            {/* Emergency / Phone Contact Card */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-500">
              <span>Need help right now?</span>
              <a
                href={`tel:${siteConfig.phones.primary}`}
                className="font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{siteConfig.phones.primary}</span>
              </a>
              <span>/</span>
              <a
                href={`tel:${siteConfig.phones.managingDirector}`}
                className="font-bold text-teal-700 hover:text-teal-900"
              >
                {siteConfig.phones.managingDirector}
              </a>
            </div>
          </div>

          {/* Right Column: Visual Feature Card & Leadership Teaser */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Card Backing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-emerald-400 rounded-3xl transform rotate-2 scale-102 opacity-25 filter blur-sm" />

              <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-teal-100/80 space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 p-2 flex items-center justify-center">
                      <img src="/uploads/logo/logo-icon.svg" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight">
                        Terai Diagnostic Center
                      </h4>
                      <p className="text-xs text-teal-700 font-semibold">Birgunj-4, Main Road Birta</p>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Open Today
                  </span>
                </div>

                {/* Key Leader Feature Highlight */}
                <div className="bg-gradient-to-br from-teal-50/80 to-emerald-50/50 rounded-2xl p-4 border border-teal-100 flex items-center gap-4">
                  <img
                    src="/uploads/leadership/saheb-sah.png"
                    alt="Mr. Saheb Sah Kanu"
                    className="w-16 h-18 object-cover rounded-xl border-2 border-white shadow-sm shrink-0"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block">
                      Chief of Laboratory
                    </span>
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                      Mr. Saheb Sah Kanu
                    </h5>
                    <p className="text-xs text-slate-600 font-medium">
                      B.Sc. MLT Dehradun (UK India) • L.L.B.
                    </p>
                    <p className="text-[11px] text-emerald-700 font-semibold">
                      NHPC Registered No: A3912 MLT
                    </p>
                  </div>
                </div>

                {/* Quick Service Highlights Pills */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Core Diagnostic Facilities
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                      <HeartPulse className="w-4 h-4 text-rose-500" />
                      <span>Pathology Lab</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-500" />
                      <span>Digital X-Ray</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-500" />
                      <span>3D/4D USG</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Dental & Eye</span>
                    </div>
                  </div>
                </div>

                {/* Home Collection Direct Banner */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-4 text-center shadow-md">
                  <p className="text-xs text-emerald-100 font-medium">No Need to Wait in Queues</p>
                  <p className="font-bold text-sm sm:text-base mt-0.5">
                    {siteConfig.features.homeCollectionNoticeNepali}
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="mt-3 w-full bg-white text-teal-800 hover:bg-emerald-50 text-xs sm:text-sm font-bold py-2 rounded-xl transition-all shadow-sm"
                  >
                    Click to Book Phlebotomist Home Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-700">100+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Diagnostic Tests</div>
            <div className="text-[11px] text-emerald-600 font-medium">With Special Discounts</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-700">17+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Medical Departments</div>
            <div className="text-[11px] text-slate-500">Multi-Specialty OPD</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-700">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">NHPC Certified</div>
            <div className="text-[11px] text-slate-500">Reg: A3912 MLT</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-700">7 Days</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Open 7 AM – 8 PM</div>
            <div className="text-[11px] text-slate-500">Main Road Birta, Birgunj</div>
          </div>
        </div>
      </div>
    </section>
  );
};
