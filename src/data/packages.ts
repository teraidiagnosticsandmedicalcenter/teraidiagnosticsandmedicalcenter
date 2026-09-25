export interface HealthPackage {
  id: string;
  name: string;
  nameNepali: string;
  badge: string;
  popular?: boolean;
  testCount: number;
  fastingNote: string;
  idealFor: string;
  includes: string[];
}

export const healthPackagesData: HealthPackage[] = [
  {
    id: "executive-full-body",
    name: "Executive Full Body Checkup",
    nameNepali: "एक्जिक्युटिभ सम्पूर्ण शरीर जाँच",
    badge: "Most Comprehensive",
    popular: true,
    testCount: 45,
    fastingNote: "10-12 Hours Overnight Fasting Required",
    idealFor: "Men & Women aged 25+ seeking a complete annual wellness audit",
    includes: [
      "Complete Blood Count (CBC 24 Parameters)",
      "Blood Sugar Fasting & PP",
      "HbA1c (3-Month Sugar Average)",
      "Liver Function Test (LFT Complete)",
      "Kidney Function Test (KFT & Creatinine)",
      "Lipid Profile (Full Cholesterol Breakdown)",
      "Thyroid Profile (T3, T4, TSH)",
      "Uric Acid & Bone Health",
      "Urine Routine & Microscopic",
      "12-Lead Digital ECG",
      "Whole Abdomen & Pelvic USG",
      "Chest Digital X-Ray",
      "Free Senior Technologist Report Review"
    ]
  },
  {
    id: "diabetic-care",
    name: "Advanced Diabetic Care Package",
    nameNepali: "मधुमेह (सुगर) विशेष परीक्षण प्याकेज",
    badge: "Specialized Care",
    popular: true,
    testCount: 22,
    fastingNote: "Fasting & Post-Meal samples required",
    idealFor: "Diabetic and pre-diabetic patients monitoring blood glucose control and organ protection",
    includes: [
      "Fasting Blood Sugar",
      "2-Hour Post Prandial Sugar",
      "HbA1c Glycated Hemoglobin",
      "Kidney Screening (Creatinine & Urea)",
      "Urine Microalbumin / Proteinuria",
      "Lipid Profile (Cholesterol & Triglycerides)",
      "Liver Enzymes (SGOT & SGPT)",
      "Diabetic Foot & Blood Pressure Check"
    ]
  },
  {
    id: "senior-citizen",
    name: "Senior Citizen Wellness Package",
    nameNepali: "ज्येष्ठ नागरिक स्वास्थ्य प्याकेज",
    badge: "Golden Age Care",
    popular: false,
    testCount: 35,
    fastingNote: "10-12 Hours Fasting (Home Collection Available)",
    idealFor: "Elders aged 50+ desiring comfortable at-home sample collection and vital organ checks",
    includes: [
      "Free Home Sample Collection",
      "Complete Blood Count & ESR",
      "Kidney & Renal Health (Urea, Creatinine)",
      "Liver Function Test (LFT)",
      "Cardiac ECG (12-Lead)",
      "Lipid Profile (Heart Risk)",
      "Serum Calcium & Uric Acid (Joints)",
      "Blood Sugar Fasting",
      "Urine Routine Analysis"
    ]
  },
  {
    id: "women-wellness",
    name: "Women's Wellness & Hormonal Package",
    nameNepali: "महिला विशेष तथा थाइराइड स्वास्थ्य प्याकेज",
    badge: "Women Care",
    popular: true,
    testCount: 28,
    fastingNote: "Overnight Fasting",
    idealFor: "Women managing thyroid changes, PCOD, hormonal fluctuations, or fatigue",
    includes: [
      "Complete Hemogram (Anemia Detection)",
      "Thyroid Profile (T3, T4, TSH)",
      "Fasting Blood Sugar",
      "Serum Iron & Ferritin Screen",
      "Serum Calcium & Bone Health",
      "Liver & Kidney Profiles",
      "Pelvic & Abdominal Ultrasound (USG)",
      "Urine R/M/E"
    ]
  }
];
