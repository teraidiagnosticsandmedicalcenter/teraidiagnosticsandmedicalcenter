export interface DiagnosticTest {
  id: string;
  name: string;
  nameNepali: string;
  category: "Blood & Sugar" | "Thyroid & Hormones" | "Liver & Kidney" | "Imaging & Radiology" | "Cancer Markers" | "Cardiac & ECG" | "Routine & Pathology" | "Infertility";
  sampleType: string;
  fastingRequired: boolean;
  fastingHours?: string;
  turnaroundTime: string;
  description: string;
  hasDiscount: boolean;
  popular?: boolean;
}

export const diagnosticTestsData: DiagnosticTest[] = [
  {
    id: "blood-sugar-fasting",
    name: "Blood Glucose (Fasting & PP)",
    nameNepali: "रगतमा चिनीको मात्रा (Fasting & PP)",
    category: "Blood & Sugar",
    sampleType: "Blood (Fluoride Plasma)",
    fastingRequired: true,
    fastingHours: "8-10 Hours Fasting",
    turnaroundTime: "Same Day (2 Hours)",
    description: "Evaluates blood sugar levels to screen, diagnose, and monitor pre-diabetes and diabetes mellitus.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "hba1c",
    name: "HbA1c (Glycated Hemoglobin)",
    nameNepali: "एचबिएवानसी (विगत ३ महिनाको सुगर जाँच)",
    category: "Blood & Sugar",
    sampleType: "Whole Blood (EDTA)",
    fastingRequired: false,
    turnaroundTime: "Same Day (3 Hours)",
    description: "Gold standard test measuring your average blood glucose levels over the preceding 3 months.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "thyroid-profile",
    name: "Thyroid Profile (T3, T4, TSH)",
    nameNepali: "थाइराइड प्रोफाइल (T3, T4, TSH)",
    category: "Thyroid & Hormones",
    sampleType: "Blood (Serum)",
    fastingRequired: true,
    fastingHours: "Overnight fasting recommended",
    turnaroundTime: "Same Day (4 Hours)",
    description: "Evaluates thyroid gland activity to diagnose hypothyroidism, hyperthyroidism, weight changes, and fatigue.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "lipid-profile",
    name: "Lipid Profile (Cholesterol & Triglycerides)",
    nameNepali: "लिपिड प्रोफाइल (कोलेस्ट्रोल एवं ट्राइग्लिसराइड्स)",
    category: "Cardiac & ECG",
    sampleType: "Blood (Serum)",
    fastingRequired: true,
    fastingHours: "10-12 Hours Fasting",
    turnaroundTime: "Same Day (3 Hours)",
    description: "Comprehensive panel measuring Total Cholesterol, HDL (good), LDL (bad), VLDL, and Triglycerides.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "lft",
    name: "Liver Function Test (LFT)",
    nameNepali: "कलेजो सम्बन्धी जाँच (LFT)",
    category: "Liver & Kidney",
    sampleType: "Blood (Serum)",
    fastingRequired: false,
    turnaroundTime: "Same Day (3 Hours)",
    description: "Measures Bilirubin (Total & Direct), SGOT (AST), SGPT (ALT), Alkaline Phosphatase, Total Protein, and Albumin.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "kft-rft",
    name: "Kidney Function Test (KFT / RFT)",
    nameNepali: "मृगौला सम्बन्धी जाँच (KFT / RFT)",
    category: "Liver & Kidney",
    sampleType: "Blood (Serum)",
    fastingRequired: false,
    turnaroundTime: "Same Day (2-3 Hours)",
    description: "Assesses renal filtration and health via Blood Urea, Serum Creatinine, Uric Acid, and Electrolytes.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "cbc-hemogram",
    name: "Complete Blood Count (CBC & ESR)",
    nameNepali: "कम्प्लिट ब्लड काउन्ट (CBC एवं ESR)",
    category: "Routine & Pathology",
    sampleType: "Whole Blood (EDTA)",
    fastingRequired: false,
    turnaroundTime: "Same Day (1-2 Hours)",
    description: "High-parameter automated cell counter test for Hemoglobin, RBC, WBC count, Platelets, and ESR to detect infections and anemia.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "torch-panel",
    name: "TORCH Panel (10 Parameters)",
    nameNepali: "टर्च प्यानल (TORCH Profile)",
    category: "Infertility",
    sampleType: "Blood (Serum)",
    fastingRequired: false,
    turnaroundTime: "Within 24 Hours",
    description: "Screens for congenital infections (Toxoplasma, Rubella, Cytomegalovirus, Herpes Simplex) critical in pregnancy planning.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "tumor-markers",
    name: "Tumor Markers (Cancer Screening Panel)",
    nameNepali: "ट्युमर मार्कर (क्यान्सर जाँच)",
    category: "Cancer Markers",
    sampleType: "Blood (Serum)",
    fastingRequired: false,
    turnaroundTime: "Within 24 Hours",
    description: "Screening markers including PSA (Prostate), CEA (Colorectal), CA-125 (Ovarian), and AFP (Liver) to detect abnormal cell growths.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "digital-xray",
    name: "Digital X-Ray (High Resolution)",
    nameNepali: "डिजिटल एक्स-रे (Digital X-Ray)",
    category: "Imaging & Radiology",
    sampleType: "Radiographic Imaging",
    fastingRequired: false,
    turnaroundTime: "Instant (15-30 Minutes)",
    description: "Clear computerized radiography for chest, bones, spine, fractures, and joint evaluations.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "usg-ultrasound",
    name: "3D/4D Ultrasonography (USG)",
    nameNepali: "भिडियो एक्स-रे (Ultrasound - USG)",
    category: "Imaging & Radiology",
    sampleType: "Acoustic Ultrasound Scan",
    fastingRequired: true,
    fastingHours: "Full Bladder / 6 hrs fasting for Abdomen",
    turnaroundTime: "Instant with Report (30 Mins)",
    description: "Advanced imaging for whole abdomen, pelvis, liver, kidneys, pregnancy growth, and obstetric checks.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "ecg-12lead",
    name: "12-Lead Electrocardiogram (ECG)",
    nameNepali: "१२-लिड इसिजी (ECG मुटुको जाँच)",
    category: "Cardiac & ECG",
    sampleType: "Cardiac Surface Leads",
    fastingRequired: false,
    turnaroundTime: "Instant (15 Minutes)",
    description: "Quick diagnostic recording of the heart's electrical rhythm, checking for arrhythmia and ischemic symptoms.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "urine-routine",
    name: "Urine Routine & Microscopic Examination",
    nameNepali: "पिसाबको सामान्य तथा सुक्ष्म जाँच (Urine R/M/E)",
    category: "Routine & Pathology",
    sampleType: "Clean Catch Midstream Urine",
    fastingRequired: false,
    turnaroundTime: "Same Day (1 Hour)",
    description: "Tests for proteinuria, glucose, pus cells, RBCs, casts, and crystals to detect UTIs and kidney disease.",
    hasDiscount: true,
    popular: false
  },
  {
    id: "stool-occult",
    name: "Stool Routine & Occult Blood Test",
    nameNepali: "दिशा जाँच एवं सुक्ष्म परीक्षण",
    category: "Routine & Pathology",
    sampleType: "Fresh Stool Specimen",
    fastingRequired: false,
    turnaroundTime: "Same Day (2 Hours)",
    description: "Detects intestinal parasites, amoeba, occult gastrointestinal bleeding, and digestive abnormalities.",
    hasDiscount: true,
    popular: false
  },
  {
    id: "infertility-hormones",
    name: "Infertility & Reproductive Hormones (FSH, LH, PRL, AMH)",
    nameNepali: "निसन्तान तथा प्रजनन हर्मोन जाँच",
    category: "Infertility",
    sampleType: "Blood (Serum) & Semen",
    fastingRequired: false,
    turnaroundTime: "Within 24 Hours",
    description: "Evaluates ovarian reserve, male semen motility and morphology, prolactin, and ovulation hormones.",
    hasDiscount: true,
    popular: true
  },
  {
    id: "culture-sensitivity",
    name: "Culture & Sensitivity (Blood / Urine / Sputum)",
    nameNepali: "कल्चर एण्ड सेन्सिटिभिटी (C/S Test)",
    category: "Routine & Pathology",
    sampleType: "Biological Specimen",
    fastingRequired: false,
    turnaroundTime: "48-72 Hours (Incubation)",
    description: "Identifies specific bacterial pathogens causing chronic infections and determines effective antibiotic sensitivity.",
    hasDiscount: true,
    popular: false
  }
];
