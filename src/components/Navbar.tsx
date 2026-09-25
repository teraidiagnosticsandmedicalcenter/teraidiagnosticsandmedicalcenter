import React, { useState } from "react";
import { Menu, X, Phone, Calendar, HeartHandshake } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface NavbarProps {
  onOpenBooking: (testName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About & Leadership", href: "#leadership" },
    { label: "Facilities", href: "#facilities" },
    { label: "Tests Catalog", href: "#tests" },
    { label: "Health Packages", href: "#packages" },
    { label: "Departments", href: "#departments" },
    { label: "Doctors OPD", href: "#doctors" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Branding */}
          <a
            href="#home"
            className="flex items-center gap-3 group text-left"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-50 border border-teal-200/60 p-1.5 shadow-sm group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0">
              <img
                src="/uploads/logo/logo-icon.svg"
                alt="Terai Diagnostic Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg md:text-xl text-slate-900 tracking-tight leading-tight group-hover:text-teal-700 transition-colors">
                Terai Diagnostic
              </span>
              <span className="text-xs sm:text-sm font-bold text-teal-700 tracking-tight">
                {siteConfig.nameNepali}
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {siteConfig.nhpcReg}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-teal-600 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phones.primary}`}
              className="inline-flex items-center gap-2 text-slate-700 hover:text-teal-700 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left leading-none">
                <span className="text-[10px] text-slate-500 block uppercase font-medium">Quick Call</span>
                <span className="text-xs font-bold">{siteConfig.phones.primary}</span>
              </div>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-teal-600/20 transition-all transform active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Home Collection</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-teal-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm"
            >
              Home Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-teal-700" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-teal-600">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm font-bold py-3 rounded-xl shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Home Blood Collection</span>
            </button>

            <a
              href={`tel:${siteConfig.phones.primary}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold py-2.5 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call Clinic ({siteConfig.phones.primary})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
