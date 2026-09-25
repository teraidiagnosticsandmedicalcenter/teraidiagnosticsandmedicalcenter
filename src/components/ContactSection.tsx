import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `*General Inquiry - Terai Diagnostic Website*
👤 *Name:* ${inquiryName.trim()}
📞 *Phone:* ${inquiryPhone.trim()}
💬 *Message:* ${inquiryMessage.trim()}`;

    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(formatted)}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-teal-700" />
            <span>Visit Us in Birgunj</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & Location Details
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Conveniently located on Main Road Birta, Birgunj-4 (Opposite the 10-Storey Building). We are here to serve you every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Physical Location
              </h3>
              <div className="text-xs sm:text-sm text-slate-600 space-y-1">
                <p className="font-bold text-slate-800">Terai Diagnostic & Medical Center</p>
                <p>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.district}, {siteConfig.address.country}</p>
                <p className="text-teal-800 font-semibold">
                  Landmark: {siteConfig.address.landmark} ({siteConfig.address.landmarkNepali})
                </p>
              </div>
            </div>

            {/* Direct Phone Numbers Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Call & WhatsApp Hotlines
              </h3>
              <div className="text-xs sm:text-sm space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Reception & Booking:</span>
                  <a href={`tel:${siteConfig.phones.primary}`} className="font-bold text-teal-700 hover:underline">
                    {siteConfig.phones.primary}
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Sr. Technologist Desk:</span>
                  <a href={`tel:${siteConfig.phones.technologist}`} className="font-bold text-teal-700 hover:underline">
                    {siteConfig.phones.technologist}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Managing Director:</span>
                  <a href={`tel:${siteConfig.phones.managingDirector}`} className="font-bold text-teal-700 hover:underline">
                    {siteConfig.phones.managingDirector}
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Timings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-card space-y-2">
                <Clock className="w-5 h-5 text-teal-600" />
                <h4 className="font-bold text-slate-800 text-sm">Working Hours</h4>
                <p className="text-xs text-slate-600">Everyday: 7:00 AM – 8:00 PM</p>
                <p className="text-[11px] text-emerald-700 font-semibold">Home collection on call</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-card space-y-2">
                <Mail className="w-5 h-5 text-teal-600" />
                <h4 className="font-bold text-slate-800 text-sm">Official Email</h4>
                <a href={`mailto:${siteConfig.email}`} className="text-xs text-teal-700 font-bold block truncate hover:underline">
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-blue-600 font-bold inline-flex items-center gap-1 hover:underline"
                >
                  <span>Official Facebook Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & WhatsApp Message Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl p-3 border border-slate-200 shadow-card overflow-hidden">
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden relative bg-slate-100">
                <iframe
                  title="Terai Diagnostic Location Map Birgunj"
                  src="https://maps.google.com/maps?q=Birta,%20Birgunj,%20Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-3 text-xs text-slate-500 flex items-center justify-between">
                <span>📍 Birta, Birgunj-4, Parsa (Opp. 10-Storey Building)</span>
                <a
                  href="https://maps.google.com/?q=Birta,+Birgunj,+Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-teal-700 hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card">
              <h3 className="font-extrabold text-slate-900 text-lg mb-1">
                Have a Quick Inquiry or Feedback?
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Send a direct message to our WhatsApp desk. We reply promptly during working hours.
              </p>

              <form onSubmit={handleSendInquiry} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 outline-none"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="How can we help you? (e.g. Test price inquiry, home collection request, doctor timing)..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct WhatsApp Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
