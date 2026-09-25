import React, { useState, useMemo } from "react";
import { Search, Clock, AlertTriangle, Check, Sparkles, Calendar, Phone, ArrowUpRight, Filter } from "lucide-react";
import { diagnosticTestsData, DiagnosticTest } from "../data/tests";
import { siteConfig } from "../data/siteConfig";

interface TestSearchCatalogProps {
  onOpenBooking: (testName?: string) => void;
}

export const TestSearchCatalog: React.FC<TestSearchCatalogProps> = ({ onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Blood & Sugar",
    "Thyroid & Hormones",
    "Liver & Kidney",
    "Imaging & Radiology",
    "Cancer Markers",
    "Cardiac & ECG",
    "Infertility",
    "Routine & Pathology"
  ];

  const filteredTests = useMemo(() => {
    return diagnosticTestsData.filter((test) => {
      const matchesSearch =
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.nameNepali.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.sampleType.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || test.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="tests" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Test Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find & Book Diagnostic Tests
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Search our laboratory tests, view fasting requirements, expected turnaround times, and request home sample collection in 1 click.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by test name (e.g. Thyroid, Sugar, LFT, KFT, Tumor, Ultrasound, CBC)..."
              className="w-full pl-12 pr-4 py-3.5 text-sm sm:text-base rounded-2xl border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1 pl-1">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-full shrink-0 transition-all ${
                  selectedCategory === cat
                    ? "bg-teal-700 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing <strong>{filteredTests.length}</strong> available test{filteredTests.length === 1 ? "" : "s"}
            </span>
            <span className="text-emerald-700 font-medium">
              ★ {siteConfig.features.discountNoticeNepali}
            </span>
          </div>
        </div>

        {/* Test Cards Grid */}
        {filteredTests.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-200 max-w-xl mx-auto space-y-3">
            <p className="text-slate-700 font-bold">No exact test match found for "{searchQuery}"</p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We offer over 100+ diagnostic tests that may not all be listed here. Please call our Senior Technologist directly.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phones.primary}`}
                className="inline-flex items-center gap-2 bg-teal-600 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic ({siteConfig.phones.primary})</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-400/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200/60">
                      {test.category}
                    </span>
                    {test.hasDiscount && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                        Discounted
                      </span>
                    )}
                  </div>

                  {/* Title & Nepali */}
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-teal-700 transition-colors">
                      {test.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {test.nameNepali}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {test.description}
                  </p>

                  {/* Test Specs: Fasting, Time & Sample */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium w-16">Sample:</span>
                      <span className="font-semibold text-slate-700">{test.sampleType}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium w-16">Report:</span>
                      <span className="font-semibold text-emerald-700 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        {test.turnaroundTime}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium w-16">Fasting:</span>
                      {test.fastingRequired ? (
                        <span className="font-semibold text-amber-700 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-amber-600" />
                          {test.fastingHours || "Fasting Required"}
                        </span>
                      ) : (
                        <span className="font-medium text-slate-500">No Fasting Required</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Book Test Action */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-teal-700 font-bold">
                    Home Collection OK
                  </span>
                  <button
                    onClick={() => onOpenBooking(test.name)}
                    className="inline-flex items-center gap-1.5 bg-teal-50 hover:bg-teal-600 text-teal-800 hover:text-white font-bold text-xs px-3.5 py-1.5 rounded-xl transition-all shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Test</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Can't find test banner */}
        <div className="mt-12 bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 rounded-2xl p-6 border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-bold text-slate-800 text-base">Looking for a specific or doctor-prescribed test?</h4>
            <p className="text-xs text-slate-600">
              We process hundreds of rare biomarkers, cultures, and specialty profiles daily.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking("Custom Doctor Prescription")}
              className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs"
            >
              Upload Prescription on WhatsApp
            </button>
            <a
              href={`tel:${siteConfig.phones.primary}`}
              className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors"
            >
              Call Clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
