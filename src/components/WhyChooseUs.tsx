import React from "react";
import { Award, Zap, ShieldCheck, Home, Tag, Users, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Award,
      title: "Senior Technologist Leadership",
      titleNepali: "अनुभवी ल्याब विशेषज्ञद्वारा प्रत्यक्ष रेखदेख",
      desc: "Headed by Mr. Saheb Sah Kanu (B.Sc. MLT Dehradun, NHPC Reg: A3912 MLT, L.L.B.) ensuring every hematology, hormone, and culture result is clinically verified."
    },
    {
      icon: Home,
      title: "Doorstep Home Sample Collection",
      titleNepali: "घरमै पुगेर रगत संकलन सेवा",
      desc: "Save travel and queues. Our hygienic phlebotomists visit your home anywhere in Birgunj with vacuum collection tubes at your convenient morning slot."
    },
    {
      icon: Zap,
      title: "Same-Day WhatsApp Delivery",
      titleNepali: "छिटो र भरपर्दो रिपोर्टिङ",
      desc: "Fast turnaround times on all routine and special blood tests. Verified PDF reports delivered right to your smartphone without multiple clinic visits."
    },
    {
      icon: Tag,
      title: "Special Discounts on All Tests",
      titleNepali: "सुलभ तथा छुट सहितको शुल्क",
      desc: "Healthcare should never be a burden. We believe in ethical, accessible medical care and provide special concessions across all 100+ tests."
    },
    {
      icon: ShieldCheck,
      title: "Automated Analyzers & Calibration",
      titleNepali: "आधुनिक स्वचालित उपकरण",
      desc: "State-of-the-art automated clinical chemistry and cell counter machinery calibrated with standard controls for zero diagnostic error."
    },
    {
      icon: Users,
      title: "17+ Specialist Departments",
      titleNepali: "बहु-विशेषज्ञ ओपिडी सेवा",
      desc: "From internal medicine, cardiology, and orthopedics to gynecological care, pediatrics, and dental surgery — all in one accessible location."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Terai Diagnostic Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Birgunj Chooses Terai Diagnostic
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Delivering trusted lab science, patient empathy, and modern diagnostics to Parsa and Madhesh Province.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center group-hover:scale-105 group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-teal-700 transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs font-bold text-teal-800">
                    {pt.titleNepali}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
