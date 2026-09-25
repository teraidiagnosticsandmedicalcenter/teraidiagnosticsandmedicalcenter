import React from "react";
import { FlaskConical, Scan, HeartPulse, Smile, Eye, Stethoscope, Video, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface FacilitiesProps {
  onOpenBooking: (facilityName?: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesProps> = ({ onOpenBooking }) => {
  const facilities = [
    {
      id: "pathology",
      title: "Automated Pathology Lab",
      titleNepali: "प्याथोलोजी ल्याब (रगत, पिसाब, दिशा, खकार)",
      icon: FlaskConical,
      color: "from-teal-500 to-emerald-600",
      bgSoft: "bg-teal-50",
      textAccent: "text-teal-700",
      description: "Equipped with automated biochemistry and hematology analyzers for rapid, high-precision blood, hormone, and body fluid diagnostics.",
      features: ["Thyroid & TORCH Panels", "Tumor Markers (Cancer Screening)", "Infertility Hormones", "Home Blood Collection Available"]
    },
    {
      id: "xray",
      title: "Digital X-Ray System",
      titleNepali: "डिजिटल एक्स-रे (Digital X-Ray)",
      icon: Scan,
      color: "from-blue-500 to-cyan-600",
      bgSoft: "bg-blue-50",
      textAccent: "text-blue-700",
      description: "Low-radiation computerized digital radiography producing razor-sharp bone, chest, and joint skeletal imaging in minutes.",
      features: ["Chest, Ribs & Spine", "Joints & Bone Fractures", "Pre-Surgical Radiography", "Instant Digital & Print Output"]
    },
    {
      id: "usg",
      title: "3D/4D Ultrasound (USG)",
      titleNepali: "भिडियो एक्स-रे (3D/4D Ultrasound)",
      icon: Stethoscope,
      color: "from-indigo-500 to-purple-600",
      bgSoft: "bg-indigo-50",
      textAccent: "text-indigo-700",
      description: "High-resolution sonography for abdominal organs, obstetric pregnancy scans, liver, kidneys, and color Doppler vascular flow.",
      features: ["Whole Abdomen & Pelvic", "Pregnancy & Fetal Well-being", "Kidney & Bladder Stones", "Soft Tissue Scanning"]
    },
    {
      id: "dental",
      title: "Dental Care Clinic",
      titleNepali: "दन्त रोग विभाग (Dental Unit)",
      icon: Smile,
      color: "from-amber-500 to-orange-600",
      bgSoft: "bg-amber-50",
      textAccent: "text-amber-700",
      description: "Modern ergonomic dental unit providing painless root canal therapy, ultrasonic tooth scaling, fillings, extractions, and cosmetic dentistry.",
      features: ["Ultrasonic Scaling & Polishing", "Root Canal Treatment (RCT)", "Tooth Fillings & Crowns", "Gum Disease Care"]
    },
    {
      id: "eye",
      title: "Ophthalmology & Eye Clinic",
      titleNepali: "नेत्ररोग तथा आँखा परीक्षण",
      icon: Eye,
      color: "from-rose-500 to-pink-600",
      bgSoft: "bg-rose-50",
      textAccent: "text-rose-700",
      description: "Computerized vision testing, refractive glass power determination, diabetic eye checks, and cataract evaluations.",
      features: ["Computerized Vision Refraction", "Prescription Spectacles", "Diabetic Eye Screening", "Cataract Assessment"]
    },
    {
      id: "ecg",
      title: "12-Lead Digital ECG",
      titleNepali: "मुटुको परीक्षण (ECG Check)",
      icon: HeartPulse,
      color: "from-emerald-500 to-teal-600",
      bgSoft: "bg-emerald-50",
      textAccent: "text-emerald-700",
      description: "Precision cardiac rhythm monitoring and instantaneous electro-cardiograms to evaluate chest pain, arrhythmias, and hypertension risks.",
      features: ["12-Lead Rhythm Trace", "Instant Medical Printout", "Pre-Operative Heart Clearance", "Cardiologist Review"]
    }
  ];

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <span>Advanced Diagnostic Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive In-House Facilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            All major clinical diagnostics under one welcoming roof at Birgunj-4 Birta. No running around from center to center.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${fac.bgSoft} flex items-center justify-center ${fac.textAccent} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl group-hover:text-teal-700 transition-colors">
                        {fac.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        {fac.titleNepali}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {fac.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {fac.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Discount Available
                  </span>
                  <button
                    onClick={() => onOpenBooking(fac.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
