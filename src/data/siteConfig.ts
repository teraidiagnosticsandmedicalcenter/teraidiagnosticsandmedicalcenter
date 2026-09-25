export interface SiteConfig {
  name: string;
  nameNepali: string;
  tagline: string;
  taglineNepali: string;
  established: string;
  nhpcReg: string;
  address: {
    street: string;
    streetNepali: string;
    landmark: string;
    landmarkNepali: string;
    city: string;
    district: string;
    country: string;
  };
  phones: {
    primary: string;
    technologist: string;
    managingDirector: string;
  };
  whatsapp: string;
  email: string;
  socials: {
    facebook: string;
  };
  hours: {
    days: string;
    timing: string;
    emergency: string;
  };
  features: {
    homeCollection: boolean;
    homeCollectionNotice: string;
    homeCollectionNoticeNepali: string;
    discountNotice: string;
    discountNoticeNepali: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Terai Diagnostic & Medical Center",
  nameNepali: "तराई डाइग्नोष्टिक एण्ड मेडिकल सेन्टर",
  tagline: "Your Trusted Partner for Precision Diagnostics & Compassionate Care",
  taglineNepali: "सटीक परीक्षण र भरपर्दो स्वास्थ्य सेवा",
  established: "Birgunj, Nepal",
  nhpcReg: "NHPC No: A3912 MLT",
  address: {
    street: "Main Road Birta",
    streetNepali: "मेन रोड बीर्ता",
    landmark: "Opposite 10-Storey Building",
    landmarkNepali: "दश तल्ले भवनको सामुने",
    city: "Birgunj-4",
    district: "Parsa",
    country: "Nepal",
  },
  phones: {
    primary: "+977 9816295312",
    technologist: "+977 9827543958",
    managingDirector: "+977 9827204237",
  },
  whatsapp: "9779816295312",
  email: "tdmcbrj@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/saheb.sah.855687",
  },
  hours: {
    days: "Sunday – Saturday (Everyday)",
    timing: "7:00 AM – 8:00 PM",
    emergency: "Home sample collection available on call",
  },
  features: {
    homeCollection: true,
    homeCollectionNotice: "Reliable Home Blood Sample Collection Available Across Birgunj",
    homeCollectionNoticeNepali: "यहाँ होम कलेक्सनको पनि सुविधा छ ।",
    discountNotice: "Special Discounts Available on All Lab Tests & Health Packages",
    discountNoticeNepali: "यो सबै जाँच Discount के साथ गरिन्छ ।",
  },
};
