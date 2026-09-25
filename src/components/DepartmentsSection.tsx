import React, { useState } from "react";
import {
  FlaskConical,
  Scan,
  HeartPulse,
  Smile,
  Eye,
  Stethoscope,
  Activity,
  Baby,
  Wind,
  Scissors,
  Ear,
  Sparkles,
  Brain,
  Droplet,
  Flame,
  Volume2,
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { departmentsData, Department } from "../data/departments";

interface DepartmentsProps {
  onOpenBooking: (deptName?: string) => void;
}

export const DepartmentsSection: React.FC<DepartmentsProps> = ({ onOpenBooking }) => {
  const [selectedDept, setSelectedDept] = useState<Department>(departmentsData[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FlaskConical": return FlaskConical;
      case "Scan": return Scan;
      case "HeartPulse": return HeartPulse;
      case "Smile": return Smile;
      case "Eye": return Eye;
      case "Stethoscope": return Stethoscope;
      case "Activity": return Activity;
      case "Baby": return Baby;
      case "Wind": return Wind;
      case "Scissors": return Scissors;
      case "Ear": return Ear;
      case "Sparkles": return Sparkles;
      case "Brain": return Brain;
      case "Droplet": return Droplet;
      case "Flame": return Flame;
      case "Volume2": return Volume2;
      default: return HeartHandshake;
    }
  };

  const SelectedIcon = getIcon(selectedDept.iconName);

  return (
    <section id="departments" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <span>हाम्रो सेवाहरू • Multi-Specialty Medical Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            17+ Medical & Diagnostic Departments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From routine physician consultations to advanced pathology, ultrasound, and surgical guidance in Birgunj.
          </p>
        </div>

        {/* Interactive Layout: Grid of Department Badges + Detail Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Department List Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {departmentsData.map((dept) => {
              const Icon = getIcon(dept.iconName);
              const isSelected = selectedDept.id === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept)}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between h-28 ${
                    isSelected
                      ? "bg-teal-700 text-white border-teal-700 shadow-md shadow-teal-700/20 scale-[1.02]"
                      : "bg-slate-50 hover:bg-teal-50/60 border-slate-200 text-slate-800 hover:border-teal-300"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isSelected ? "bg-white/20 text-white" : "bg-white text-teal-700 shadow-2xs"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm leading-tight line-clamp-1">
                      {dept.name}
                    </h4>
                    <p className={`text-[11px] font-medium truncate mt-0.5 ${
                      isSelected ? "text-teal-100" : "text-slate-500"
                    }`}>
                      {dept.nameNepali}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Department Detailed Spotlight Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/50 rounded-3xl p-6 sm:p-8 border border-teal-100 shadow-xl space-y-6">
              {/* Top Row */}
              <div className="flex items-center gap-4 border-b border-teal-100 pb-5">
                <div className="w-16 h-16 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md">
                  <SelectedIcon className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                    Department Spotlight
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-xl sm:text-2xl leading-tight">
                    {selectedDept.name}
                  </h3>
                  <p className="text-sm font-bold text-teal-800">
                    {selectedDept.nameNepali}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  {selectedDept.summary}
                </p>
                <p className="text-xs text-slate-500 italic bg-white/70 p-3 rounded-xl border border-slate-100">
                  "{selectedDept.summaryNepali}"
                </p>
              </div>

              {/* Key Clinical Services */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Key Services & Diagnostic Procedures:
                </span>
                <div className="space-y-2">
                  {selectedDept.keyServices.map((srv, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Appointment for this Department */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking(`Consultation: ${selectedDept.name}`)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm py-3 px-6 rounded-2xl shadow-md transition-all"
                >
                  <span>Book Consultation for {selectedDept.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
