import React from "react";
import { Award, Phone, ExternalLink, ShieldCheck, Scale, FlaskConical, MessageCircle } from "lucide-react";
import { leadershipData } from "../data/leadership";
import { siteConfig } from "../data/siteConfig";

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Dedicated Leadership & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Guiding Quality Diagnostics in Birgunj
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Terai Diagnostic & Medical Center is built on rigorous laboratory science, strict ethics, and personal community commitment. Meet our founding leaders.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Mr. Saheb Sah Kanu (Featured Senior Technologist & Legal Advisor) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-teal-50/60 via-slate-50 to-white rounded-3xl p-6 sm:p-8 border border-teal-100 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              {/* Profile Top Row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="relative">
                  <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-4 ring-teal-100/80 shrink-0">
                    <img
                      src="/uploads/leadership/saheb-sah.png"
                      alt="Mr. Saheb Sah Kanu"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-1.5 rounded-full shadow-md">
                    <Award className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">
                    Senior Medical Lab Technologist & Legal Advisor
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {leadershipData[0].name}
                  </h3>
                  <p className="text-sm font-semibold text-teal-800">
                    {leadershipData[0].nameNepali}
                  </p>
                  <p className="text-xs font-semibold text-slate-600 flex items-center justify-center sm:justify-start gap-1.5">
                    <FlaskConical className="w-3.5 h-3.5 text-teal-600" />
                    <span>B.Sc. MLT Dehradun (UK India)</span>
                    <span>•</span>
                    <Scale className="w-3.5 h-3.5 text-amber-600" />
                    <span>L.L.B. (Lawyer)</span>
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    <span>Registration:</span>
                    <span>{leadershipData[0].regNumber}</span>
                  </div>
                </div>
              </div>

              {/* Bio & Philosophy */}
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed border-t border-teal-100/60 pt-4">
                <p>{leadershipData[0].bio}</p>
                <p className="text-xs text-slate-500 italic bg-white/60 p-3 rounded-xl border border-slate-100">
                  "{leadershipData[0].bioNepali}"
                </p>
              </div>

              {/* Credential Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {leadershipData[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2 rounded-xl border border-slate-100 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
              <a
                href={leadershipData[0].facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Official Facebook Profile</span>
              </a>

              <a
                href={`tel:${siteConfig.phones.technologist}`}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>{siteConfig.phones.technologist}</span>
              </a>

              <a
                href={`https://wa.me/${leadershipData[0].whatsapp}?text=Namaste%20Mr.%20Saheb%20Sah%2C%20I%20have%20an%20inquiry%20regarding%20tests%20at%20Terai%20Diagnostic.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mr. Bablu Sah Kanu (Managing Director) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                  Operations & Community Outreach
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {leadershipData[1].name}
                </h3>
                <p className="text-sm font-semibold text-emerald-800">
                  {leadershipData[1].nameNepali}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Managing Director, Terai Diagnostic & Medical Center
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                <p>{leadershipData[1].bio}</p>
                <p className="text-xs text-slate-500 italic bg-white p-3 rounded-xl border border-slate-100">
                  "{leadershipData[1].bioNepali}"
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                {leadershipData[1].highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${siteConfig.phones.managingDirector}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white text-sm font-bold py-3 rounded-xl shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Managing Director ({siteConfig.phones.managingDirector})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
