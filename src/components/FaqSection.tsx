import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I book Home Blood Sample Collection in Birgunj?",
      a: `It's completely hassle-free! Simply click the "Book Home Collection" button on our website, or call us at ${siteConfig.phones.primary} / ${siteConfig.phones.technologist}. Share your location in Birgunj, preferred time slot, and test requirement. Our certified phlebotomist will arrive with sterile vacuum tubes.`
    },
    {
      q: "Which tests require fasting, and for how many hours?",
      a: "Tests like Fasting Blood Sugar (8–10 hours), Lipid Profile (10–12 hours), and Thyroid profile (overnight fasting recommended) require fasting. Water is permitted during fasting. Tests such as Complete Blood Count (CBC), Urine Routine, and HbA1c do not require fasting."
    },
    {
      q: "How and when will I receive my test results?",
      a: "Most routine tests (CBC, Blood Sugar, LFT, KFT, Urine R/M/E, ECG) are completed on the same day within 2 to 4 hours. You will receive an official, verified digital PDF report directly via WhatsApp, and physical printed reports are also available for collection at our center."
    },
    {
      q: "Where is Terai Diagnostic & Medical Center located?",
      a: `We are conveniently situated at Main Road Birta, Birgunj-4, Parsa, Nepal — right opposite the well-known 10-Storey Building (दश तल्ले भवनको सामुने). Easily accessible with parking and wheelchair access.`
    },
    {
      q: "Do you offer discounts on tests and health checkup packages?",
      a: `Yes! As proudly noted on our official announcements, "यो सबै जाँच Discount के साथ गरिन्छ ।" We believe quality diagnostics should be affordable for every family in Birgunj, so we offer special concessional pricing across all lab tests and preventive packages.`
    },
    {
      q: "How can I book an OPD appointment with visiting doctors?",
      a: `You can view our Doctor Timings section above and reserve your consultation token in advance by calling reception at ${siteConfig.phones.primary} or sending a WhatsApp message with the patient's name and desired doctor specialty.`
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Patient Guidance & FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about sample collection, preparation, and reports.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left font-bold text-slate-800 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Help Box */}
        <div className="mt-10 text-center text-xs text-slate-500">
          Still have a question? Contact our medical team at{" "}
          <a
            href={`tel:${siteConfig.phones.primary}`}
            className="font-bold text-teal-700 underline"
          >
            {siteConfig.phones.primary}
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-bold text-teal-700 underline"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
};
