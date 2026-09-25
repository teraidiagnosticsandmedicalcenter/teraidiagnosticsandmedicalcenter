export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  specialtyNepali: string;
  degrees: string;
  experience: string;
  schedule: string;
  image?: string;
  availableDays: string[];
}

export const doctorsData: Doctor[] = [
  {
    id: "dr-physician",
    name: "Consultant Physician",
    specialty: "Internal Medicine & Diabetes",
    specialtyNepali: "मेडिसिन तथा सुगर रोग विशेषज्ञ",
    degrees: "MBBS, MD (Internal Medicine)",
    experience: "12+ Years Experience",
    schedule: "Sun – Fri (11:00 AM – 3:00 PM)",
    availableDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
  },
  {
    id: "dr-gynecology",
    name: "Consultant Gynecologist",
    specialty: "Gynecology & Obstetrics",
    specialtyNepali: "स्त्री तथा प्रसूति रोग विशेषज्ञ",
    degrees: "MBBS, MS (Obstetrics & Gynecology)",
    experience: "10+ Years Experience",
    schedule: "Sun – Sat (10:00 AM – 2:00 PM)",
    availableDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  {
    id: "dr-ortho",
    name: "Consultant Orthopedic Surgeon",
    specialty: "Bone, Joint & Spine Specialist",
    specialtyNepali: "हड्डी, जोर्नी तथा नसा रोग विशेषज्ञ",
    degrees: "MBBS, MS (Orthopedics)",
    experience: "9+ Years Experience",
    schedule: "Sun, Tue, Thu (1:00 PM – 5:00 PM)",
    availableDays: ["Sun", "Tue", "Thu"]
  },
  {
    id: "dr-pediatrician",
    name: "Consultant Pediatrician",
    specialty: "Child & Newborn Care",
    specialtyNepali: "नवजात शिशु तथा बालरोग विशेषज्ञ",
    degrees: "MBBS, MD (Pediatrics)",
    experience: "11+ Years Experience",
    schedule: "Mon – Sat (12:00 PM – 4:00 PM)",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  {
    id: "dr-dental",
    name: "Consultant Dental Surgeon",
    specialty: "Dental Surgery & Orthodontics",
    specialtyNepali: "दन्तरोग तथा मुख विशेषज्ञ",
    degrees: "BDS, MDS",
    experience: "8+ Years Experience",
    schedule: "Daily (8:00 AM – 6:00 PM)",
    availableDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  {
    id: "dr-ent",
    name: "Consultant ENT Surgeon",
    specialty: "Ear, Nose, Throat & Head-Neck",
    specialtyNepali: "नाक, कान तथा घाँटी रोग विशेषज्ञ",
    degrees: "MBBS, MS (ENT)",
    experience: "10+ Years Experience",
    schedule: "Sun, Wed, Fri (2:00 PM – 5:00 PM)",
    availableDays: ["Sun", "Wed", "Fri"]
  }
];
