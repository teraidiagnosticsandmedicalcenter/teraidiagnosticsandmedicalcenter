import React from "react";
import { UserCheck, Clock, Calendar, Phone, Sparkles, ArrowRight } from "lucide-react";
import { doctorsData } from "../data/doctors";
import { siteConfig } from "../data/siteConfig";

interface DoctorsProps {
  onOpenBooking: (doctorName?: string) => void;
}

export const DoctorsSection: React.FC<DoctorsProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctors" className="py-16 sm:py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>OPD Specialist Consultations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consultant Doctors & Visiting Timings
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Expert medical specialists visit Terai Diagnostic & Medical Center regularly. Check schedules and reserve your OPD consultation token in advance.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                      {doc.specialty}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mt-2 group-hover:text-teal-700 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {doc.specialtyNepali}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                </div>

                {/* Degrees & Experience */}
                <div className="text-xs space-y-1 text-slate-600">
                  <p className="font-semibold text-slate-800">{doc.degrees}</p>
                  <p className="text-emerald-700 font-medium">★ {doc.experience}</p>
                </div>

                {/* Timing & Available Days */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-800">
                    <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{doc.schedule}</span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-slate-200/60">
                    <span className="text-[11px] text-slate-400 font-medium mr-1">Days:</span>
                    {doc.availableDays.map((day) => (
                      <span
                        key={day}
                        className="bg-white border border-slate-200 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenBooking(`OPD Appointment: ${doc.specialty} (${doc.name})`)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-teal-600 text-slate-800 hover:text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl transition-all shadow-2xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation Token</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Schedules Notice */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-slate-600">
            Visiting specialist schedules are subject to clinical rotations. To confirm today's doctor availability, call our reception desk directly.
          </p>
          <a
            href={`tel:${siteConfig.phones.primary}`}
            className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-bold text-sm"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Call Reception: {siteConfig.phones.primary}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
