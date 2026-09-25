export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "facility" | "laboratory" | "banners" | "videos";
  type: "image" | "video";
  url: string;
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "banner-calendar",
    title: "Official Center Calendar & Services Poster",
    category: "banners",
    type: "image",
    url: "/uploads/banners/calendar_poster.png",
    caption: "Comprehensive services list, leadership credentials, and calendar of Terai Diagnostic & Medical Center."
  },
  {
    id: "banner-brochure",
    title: "Patient Services Booklet & Departments",
    category: "banners",
    type: "image",
    url: "/uploads/banners/folder_brochure.jpg",
    caption: "Overview of 17+ medical departments, pathology, digital X-ray, ultrasound, and home collection details."
  },
  {
    id: "banner-card",
    title: "Specialties & Facilities Information Card",
    category: "banners",
    type: "image",
    url: "/uploads/banners/banner_card.png",
    caption: "Director details, discount information, and types of doctors available at Birgunj-4 Birta."
  },
  {
    id: "leader-photo",
    title: "Mr. Saheb Sah Kanu (Sr. Medical Lab Technologist)",
    category: "facility",
    type: "image",
    url: "/uploads/leadership/saheb-sah.png",
    caption: "NHPC Registered Technologist (A3912 MLT) & Advocate ensuring clinical diagnostic accuracy."
  }
];
