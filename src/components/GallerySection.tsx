import React, { useState } from "react";
import { Image as ImageIcon, Video, X, ZoomIn, Sparkles, FolderOpen } from "lucide-react";
import { galleryData, GalleryItem } from "../data/gallery";

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: "all", label: "All Media" },
    { id: "banners", label: "Official Posters & Brochures" },
    { id: "facility", label: "Clinic & Leadership" },
    { id: "videos", label: "Video Walkthroughs" },
  ];

  const filteredItems = galleryData.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5 text-teal-600" />
            <span>Media & Official Documents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Center Gallery & Publications
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our official posters, department brochures, lab equipment, and patient information publications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-teal-700 text-white shadow-md shadow-teal-700/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold bg-teal-600/90 px-3 py-1.5 rounded-xl backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to View Full Size</span>
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-1.5 bg-white">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Easy Upload Note for User */}
        <div className="mt-12 bg-slate-50 border border-dashed border-teal-300 rounded-3xl p-6 text-center max-w-2xl mx-auto space-y-2">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 mx-auto flex items-center justify-center">
            <FolderOpen className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-slate-800">Need to Add More Photos or Videos?</h4>
          <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
            Drop new clinic pictures into <code className="bg-teal-50 text-teal-800 px-1.5 py-0.5 rounded font-mono font-bold">public/uploads/gallery/</code> or facility clips into <code className="bg-teal-50 text-teal-800 px-1.5 py-0.5 rounded font-mono font-bold">public/uploads/videos/</code>. They will immediately render into this gallery!
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-teal-300 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[80vh] flex flex-col">
              <div className="overflow-y-auto max-h-[70vh] bg-slate-900 flex items-center justify-center p-2">
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[68vh] object-contain rounded-xl"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">
                    {selectedItem.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {selectedItem.caption}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-4 py-2 rounded-xl shrink-0"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
