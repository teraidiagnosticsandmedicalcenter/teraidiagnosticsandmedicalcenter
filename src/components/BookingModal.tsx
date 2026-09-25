import React, { useState, useEffect } from "react";
import { X, Calendar, Phone, Home, Building2, Clock, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedTest?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedTest = "",
}) => {
  const [bookingType, setBookingType] = useState<"home" | "clinic">("home");
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [testRequested, setTestRequested] = useState(preSelectedTest);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (7:00 AM – 10:00 AM)");
  const [address, setAddress] = useState("");
  const [isFasting, setIsFasting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedTest) {
      setTestRequested(preSelectedTest);
    }
  }, [preSelectedTest]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const message = `*TERAI DIAGNOSTIC & MEDICAL CENTER*
📋 *${bookingType === "home" ? "🏠 Home Sample Collection Request" : "🏥 Clinic Appointment Request"}*

👤 *Patient Name:* ${patientName.trim()}
📞 *Contact Number:* ${phone.trim()}
🧪 *Test / Package:* ${testRequested.trim() || "General Consultation / Routine Checkup"}
📅 *Preferred Date:* ${preferredDate || "Earliest Available"}
⏰ *Preferred Time:* ${preferredTime}
${bookingType === "home" ? `📍 *Birgunj Address:* ${address.trim() || "To be provided on call"}\n` : ""}🍽️ *Fasting Status:* ${isFasting ? "Yes (Fasting maintained)" : "No / Not required"}

_Sent via Terai Diagnostic Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-white/20 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Easy Direct Booking
            </span>
            <span className="text-xs text-teal-100">No Advance Payment</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {bookingType === "home" ? "Book Free Home Collection" : "Schedule Clinic Visit"}
          </h3>
          <p className="text-xs sm:text-sm text-teal-100 mt-1">
            {siteConfig.features.homeCollectionNoticeNepali}
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-800">Booking Prepared!</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your details were prepared and opened in WhatsApp. Our medical technologist will review your request and confirm your time slot shortly.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-700">Need Immediate Assistance?</p>
              <p>Call our Senior Technologist: <strong className="text-teal-700">{siteConfig.phones.technologist}</strong></p>
              <p>Managing Director: <strong className="text-teal-700">{siteConfig.phones.managingDirector}</strong></p>
            </div>
            <div className="pt-2 flex gap-3 justify-center">
              <a
                href={`tel:${siteConfig.phones.primary}`}
                className="inline-flex items-center gap-2 bg-teal-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow hover:bg-teal-700"
              >
                <Phone className="w-4 h-4" />
                Call Directly
              </a>
              <button
                onClick={handleReset}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-xl"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Booking Type Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl">
              <button
                type="button"
                onClick={() => setBookingType("home")}
                className={`flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  bookingType === "home"
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home Collection</span>
              </button>
              <button
                type="button"
                onClick={() => setBookingType("clinic")}
                className={`flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  bookingType === "clinic"
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Visit Clinic</span>
              </button>
            </div>

            {/* Patient Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Patient Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="e.g. Ramesh Sah"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mobile / WhatsApp Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9816295312"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              />
            </div>

            {/* Test or Package Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Test or Health Package Name
              </label>
              <input
                type="text"
                value={testRequested}
                onChange={(e) => setTestRequested(e.target.value)}
                placeholder="e.g. Thyroid Profile, Full Body Checkup, Sugar, USG"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              />
            </div>

            {/* Home Address (If Home Collection) */}
            {bookingType === "home" && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Home Address / Area in Birgunj <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Birta Ward-4, near Clock Tower, Adarshnagar"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                />
              </div>
            )}

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:border-teal-500 outline-none text-slate-700"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:border-teal-500 outline-none text-slate-700 bg-white"
                >
                  <option>Morning (7:00 AM – 10:00 AM)</option>
                  <option>Midday (10:00 AM – 2:00 PM)</option>
                  <option>Afternoon (2:00 PM – 5:00 PM)</option>
                  <option>Evening (5:00 PM – 8:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Fasting Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="fastingCheck"
                checked={isFasting}
                onChange={(e) => setIsFasting(e.target.checked)}
                className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500 cursor-pointer"
              />
              <label htmlFor="fastingCheck" className="text-xs text-slate-600 cursor-pointer">
                I am fasting / will be fasting (required for Sugar, Lipid, Thyroid)
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-teal-500/25 transition-all transform active:scale-98"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirm & Send via WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Free instant booking. Payment only after service/sample collection.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
