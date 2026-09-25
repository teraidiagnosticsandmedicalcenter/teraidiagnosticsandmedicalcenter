import React, { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HomeCollectionBanner } from "./components/HomeCollectionBanner";
import { LeadershipSection } from "./components/LeadershipSection";
import { FacilitiesSection } from "./components/FacilitiesSection";
import { TestSearchCatalog } from "./components/TestSearchCatalog";
import { HealthPackagesSection } from "./components/HealthPackagesSection";
import { DepartmentsSection } from "./components/DepartmentsSection";
import { DoctorsSection } from "./components/DoctorsSection";
import { GallerySection } from "./components/GallerySection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { BookingModal } from "./components/BookingModal";

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState("");

  const handleOpenBooking = (itemName?: string) => {
    setSelectedBookingItem(itemName || "");
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedBookingItem("");
  };

  const handleNavigateToTests = () => {
    const el = document.getElementById("tests");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 3. Hero Section with Optimistic Value Proposition */}
      <main className="flex-grow">
        <Hero
          onOpenBooking={() => handleOpenBooking("Home Blood Sample Collection")}
          onNavigateToTests={handleNavigateToTests}
        />

        {/* 4. Home Blood Sample Collection Doorstep Service Spotlight */}
        <HomeCollectionBanner
          onOpenBooking={() => handleOpenBooking("Home Blood Sample Collection")}
        />

        {/* 5. Center Leadership & Quality Credentials (Mr. Saheb Sah & Mr. Bablu Sah) */}
        <LeadershipSection />

        {/* 6. Core Diagnostic Facilities (Automated Pathology, X-Ray, USG, Dental, Eye, ECG) */}
        <FacilitiesSection onOpenBooking={handleOpenBooking} />

        {/* 7. Interactive Live Searchable Test Directory */}
        <TestSearchCatalog onOpenBooking={handleOpenBooking} />

        {/* 8. Preventive Health Checkup Packages */}
        <HealthPackagesSection onOpenBooking={handleOpenBooking} />

        {/* 9. 17+ Medical & Diagnostic Specialist Departments */}
        <DepartmentsSection onOpenBooking={handleOpenBooking} />

        {/* 10. Consultant Doctors & Visiting OPD Rosters */}
        <DoctorsSection onOpenBooking={handleOpenBooking} />

        {/* 11. Center Gallery, Official Posters & Publications */}
        <GallerySection />

        {/* 12. Why Choose Terai Diagnostic & Trust Badges */}
        <WhyChooseUs />

        {/* 13. Patient FAQ & Preparation Instructions */}
        <FaqSection />

        {/* 14. Contact Information & Birgunj Map */}
        <ContactSection />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Persistent Floating WhatsApp Chat Button */}
      <FloatingWhatsApp />

      {/* 17. Interactive Zero-Backend Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        preSelectedTest={selectedBookingItem}
      />
    </div>
  );
}

export default App;
