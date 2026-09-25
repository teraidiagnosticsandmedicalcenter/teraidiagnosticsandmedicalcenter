import React from "react";
import { Phone, MapPin, Mail, ExternalLink, Heart, ShieldCheck, Clock } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Registration */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-900/60 border border-teal-500/30 p-2 flex items-center justify-center shrink-0">
                <img src="/uploads/logo/logo-icon.svg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base sm:text-lg leading-tight">
                  Terai Diagnostic
                </h3>
                <p className="text-teal-400 font-bold text-xs">
                  {siteConfig.nameNepali}
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Birgunj’s trusted destination for precision pathology, digital X-ray, 3D/4D ultrasound, dental care, and home blood collection at ethical discounted prices.
            </p>

            <div className="space-y-1 text-xs">
              <p className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{siteConfig.nhpcReg}</span>
              </p>
              <p className="text-slate-400">
                Chief Technologist: <strong className="text-white">Mr. Saheb Sah Kanu (B.Sc. MLT, L.L.B.)</strong>
              </p>
              <p className="text-slate-400">
                Managing Director: <strong className="text-white">Mr. Bablu Sah Kanu</strong>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#leadership" className="hover:text-teal-400 transition-colors">Leadership Team</a></li>
              <li><a href="#facilities" className="hover:text-teal-400 transition-colors">Lab Facilities</a></li>
              <li><a href="#tests" className="hover:text-teal-400 transition-colors">Search Tests Catalog</a></li>
              <li><a href="#packages" className="hover:text-teal-400 transition-colors">Health Packages</a></li>
              <li><a href="#departments" className="hover:text-teal-400 transition-colors">17+ Departments</a></li>
              <li><a href="#doctors" className="hover:text-teal-400 transition-colors">Doctors OPD Timings</a></li>
              <li><a href="#gallery" className="hover:text-teal-400 transition-colors">Brochures & Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Diagnostic Specialties */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Diagnostic Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">Automated Pathology & Blood Tests</li>
              <li className="text-slate-300">Thyroid (T3, T4, TSH) & Hormone Profile</li>
              <li className="text-slate-300">Digital X-Ray Radiography</li>
              <li className="text-slate-300">3D/4D Abdominal & Pregnancy USG</li>
              <li className="text-slate-300">12-Lead Electrocardiogram (ECG)</li>
              <li className="text-slate-300">Tumor Markers (Cancer Screening)</li>
              <li className="text-slate-300">Dental Surgery & Scaling</li>
              <li className="text-slate-300">Computerized Eye Testing</li>
              <li className="text-emerald-400 font-semibold">Free Birgunj Home Sample Collection</li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Birgunj Center
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Main Road Birta, Birgunj-4, Parsa, Nepal (Opposite 10-Storey Building)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+977 9816295312 / 9827543958</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Daily: 7:00 AM – 8:00 PM</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
              >
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Terai Diagnostic & Medical Center. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for community health & wellness</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
