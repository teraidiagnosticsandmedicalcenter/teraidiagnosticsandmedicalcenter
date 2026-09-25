export interface Leader {
  name: string;
  nameNepali: string;
  role: string;
  roleNepali: string;
  degrees: string[];
  regNumber?: string;
  phone: string;
  whatsapp?: string;
  facebook?: string;
  image: string;
  bio: string;
  bioNepali: string;
  highlights: string[];
}

export const leadershipData: Leader[] = [
  {
    name: "Mr. Saheb Sah Kanu",
    nameNepali: "मि. साहेब साह कानु",
    role: "Senior Medical Lab Technologist & Legal Advisor",
    roleNepali: "सिनियर मेडिकल ल्याब टेक्नोलोजिष्ट",
    degrees: [
      "B.Sc. MLT Dehradun (UK India)",
      "Sr. Medical Lab Technologist",
      "L.L.B. (Lawyer)"
    ],
    regNumber: "NHPC No: A3912 MLT",
    phone: "+977 9827543958 / 9816295312",
    whatsapp: "9779816295312",
    facebook: "https://www.facebook.com/saheb.sah.855687",
    image: "/uploads/leadership/saheb-sah.png",
    bio: "With advanced education in Medical Laboratory Technology from Dehradun (Uttarakhand, India) and years of diagnostic laboratory leadership, Mr. Saheb Sah Kanu oversees clinical quality assurance, automated pathology analyzers, and strict patient report validation. He also holds a degree in Law (L.L.B.), bringing ethical leadership and community dedication to healthcare in Birgunj.",
    bioNepali: "देहरादुन (उत्तराखण्ड, भारत) बाट मेडिकल ल्याब टेक्नोलोजीमा स्नातक (B.Sc. MLT) उपाधि प्राप्त तथा NHPC दर्ता नम्बर A3912 MLT प्राप्त श्री साहेब साह कानुको प्रत्यक्ष प्राविधिक रेखदेखमा अन्तर्राष्ट्रिय मापदण्डको ल्याब उपकरणद्वारा विश्वसनीय परीक्षण गरिन्छ ।",
    highlights: [
      "B.Sc. MLT (Dehradun, UK India)",
      "NHPC Registered Technologist: A3912 MLT",
      "Advocate & Legal Counselor (L.L.B.)",
      "Direct Quality Oversight for all Blood & Hormone Profiles"
    ]
  },
  {
    name: "Mr. Bablu Sah Kanu",
    nameNepali: "मि. बब्लु साह कानु",
    role: "Managing Director",
    roleNepali: "प्रबन्ध निर्देशक (Managing Director)",
    degrees: ["Healthcare Administration & Management"],
    phone: "+977 9827204237",
    whatsapp: "9779827204237",
    image: "/uploads/leadership/bablu-sah.png",
    bio: "As Managing Director, Mr. Bablu Sah Kanu directs patient accessibility, community outreach, and streamlined clinical operations. Under his leadership, Terai Diagnostic introduced patient-friendly home blood collection services and special discounted testing for families across Birgunj and surrounding districts.",
    bioNepali: "प्रबन्ध निर्देशक श्री बब्लु साह कानुको कुशल व्यवस्थापनमा केन्द्रले बिरामी-केन्द्रित सेवा, सुपथ मूल्यमा छुटको सुविधा र घरमै पुगेर रगत संकलन (Home Collection) सेवा प्रदान गर्दै आएको छ ।",
    highlights: [
      "Patient Experience & Hospital Relations",
      "Birgunj Free Home Sample Collection Coordination",
      "Subsidized & Discounted Diagnostic Camp Organizer",
      "Available on Call: +977 9827204237"
    ]
  }
];
