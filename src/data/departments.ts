export interface Department {
  id: string;
  name: string;
  nameNepali: string;
  iconName: string;
  summary: string;
  summaryNepali: string;
  keyServices: string[];
}

export const departmentsData: Department[] = [
  {
    id: "pathology",
    name: "Pathology & Lab Medicine",
    nameNepali: "प्याथोलोजी विभाग",
    iconName: "FlaskConical",
    summary: "State-of-the-art fully automated analyzers for biochemistry, hematology, immunology, and cytology under senior technologist supervision.",
    summaryNepali: "पूर्ण स्वचालित आधुनिक एनालाइजरद्वारा रगत, पिसाब, दिशा, खकार तथा हर्मोनको भरपर्दो जाँच ।",
    keyServices: ["Biochemistry & Hematology", "Thyroid & Hormone Panels", "Cancer Tumor Markers", "Culture & Sensitivity", "Home Sample Collection"]
  },
  {
    id: "radiology",
    name: "Radiology & Ultrasound",
    nameNepali: "रेडियोलोजी तथा भिडियो एक्स-रे विभाग",
    iconName: "Scan",
    summary: "High-resolution Digital X-Ray and advanced 3D/4D Ultrasonography (USG) for accurate abdominal, pelvic, and obstetric evaluations.",
    summaryNepali: "उच्च गुणस्तरको डिजिटल एक्स-रे र थ्रीडी/फोरडी भिडियो एक्स-रे (USG) सुविधा ।",
    keyServices: ["Digital X-Ray (Chest & Bone)", "Whole Abdomen USG", "Pregnancy & 3D/4D USG", "Color Doppler", "Pelvic & Soft Tissue Scan"]
  },
  {
    id: "cardiology",
    name: "Cardiology & Heart Care",
    nameNepali: "हृदय रोग विभाग",
    iconName: "HeartPulse",
    summary: "Early detection and monitoring of cardiovascular conditions, hypertension, ischemic heart disease, and lipid disorders.",
    summaryNepali: "उच्च रक्तचाप, मुटुको धड्कन तथा मुटु सम्बन्धी समस्याहरूको परीक्षण र परामर्श ।",
    keyServices: ["12-Lead Digital ECG", "Lipid Profile & Cholesterol", "Cardiac Enzyme Markers", "Hypertension Management"]
  },
  {
    id: "dental",
    name: "Dental Care & Surgery",
    nameNepali: "दन्त रोग विभाग",
    iconName: "Smile",
    summary: "Comprehensive dental clinic providing root canal treatments, scaling, fillings, extractions, and smile design.",
    summaryNepali: "दाँत सफा गर्ने, भर्ने, आरसीटी (Root Canal) तथा गिजा सम्बन्धी सम्पूर्ण उपचार ।",
    keyServices: ["Dental Scaling & Cleaning", "Root Canal Therapy (RCT)", "Tooth Extraction", "Tooth Filling & Caps", "Orthodontic Consultation"]
  },
  {
    id: "eye",
    name: "Ophthalmology / Eye Care",
    nameNepali: "नेत्ररोग विभाग",
    iconName: "Eye",
    summary: "Complete vision testing, refractive error corrections, diabetic retinopathy screening, and cataract consultations.",
    summaryNepali: "आँखाको ज्योति जाँच, चश्मा नम्बर निर्धारण, मोतियाबिन्दु तथा आँखा सम्बन्धी परामर्श ।",
    keyServices: ["Computerized Eye Checkup", "Refraction & Glasses", "Glaucoma & Pressure Check", "Diabetic Eye Screening"]
  },
  {
    id: "medicine",
    name: "General Medicine",
    nameNepali: "मेडिसिन विभाग",
    iconName: "Stethoscope",
    summary: "Consultant physicians for chronic condition management including diabetes, hypertension, infectious fevers, and gastrointestinal issues.",
    summaryNepali: "मधुमेह, उच्च रक्तचाप, ज्वरो, दम तथा सम्पूर्ण आन्तरिक रोगहरूको उपचार र परामर्श ।",
    keyServices: ["Diabetes & Thyroid Management", "Fever & Viral Illnesses", "Hypertension Clinic", "Executive Health Consultation"]
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Joint Care",
    nameNepali: "हड्डी एवं जोड रोग विभाग",
    iconName: "Activity",
    summary: "Diagnosis and therapy for joint pain, arthritis, bone fractures, spine issues, and sports injuries.",
    summaryNepali: "जोर्नी दुख्ने, वाथ रोग, हड्डी भाँचिएको तथा ढाड/कम्मर दुख्ने समस्याको उपचार ।",
    keyServices: ["Arthritis & Uric Acid Care", "Back & Neck Pain", "Fracture Management", "Joint Injections & Rehab"]
  },
  {
    id: "gynecology",
    name: "Gynecology & Obstetrics",
    nameNepali: "स्त्री एवं प्रसूति रोग विभाग",
    iconName: "Baby",
    summary: "Care for women across every phase of life, including antenatal care, menstrual disorders, PCOD, and infertility evaluations.",
    summaryNepali: "गर्भावस्था जाँच, महिनावारी सम्बन्धी समस्या, निसन्तान परामर्श तथा महिला स्वास्थ्य ।",
    keyServices: ["Antenatal & Postnatal Care", "PCOS & Hormonal Imbalance", "Infertility Workup", "Cervical Cancer Screening"]
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Child Health",
    nameNepali: "शिशु तथा बाल रोग विभाग",
    iconName: "HeartHandshake",
    summary: "Gentle healthcare for newborns, infants, and children including growth monitoring, immunizations, and pediatric infections.",
    summaryNepali: "नवजात शिशु तथा बालबालिकाको वृद्धि विकास, खोप तथा सम्पूर्ण बालरोग उपचार ।",
    keyServices: ["Newborn Assessment", "Childhood Vaccination", "Pediatric Nutrition & Growth", "Childhood Asthma & Fevers"]
  },
  {
    id: "pulmonology",
    name: "Chest & Respiratory Medicine",
    nameNepali: "छाती रोग विभाग",
    iconName: "Wind",
    summary: "Specialist consultation for asthma, COPD, chronic cough, pneumonia, and tuberculosis screening with digital chest X-ray.",
    summaryNepali: "दम, पुरानो खोकी, निमोनिया तथा क्षयरोग (TB) सम्बन्धी परामर्श र उपचार ।",
    keyServices: ["Asthma & Allergy Care", "COPD Management", "Sputum AFB Testing", "Digital Chest Radiography"]
  },
  {
    id: "surgery",
    name: "General & Laparoscopic Surgery",
    nameNepali: "जनरल तथा लेप्रोस्कोपी सर्जरी विभाग",
    iconName: "Scissors",
    summary: "Pre-surgical evaluations and expert consultations for gallbladder stones, hernia, appendix, and minor procedural treatments.",
    summaryNepali: "पित्तथैलीको पत्थरी, हर्निया, एपेन्डिसाइटिस तथा सामान्य शल्यक्रिया सम्बन्धी परामर्श ।",
    keyServices: ["Pre-Operative Diagnostics", "Hernia & Gallbladder Consult", "Laparoscopic Surgical Advice", "Minor Surgical Procedures"]
  },
  {
    id: "ent",
    name: "ENT (Ear, Nose & Throat)",
    nameNepali: "नाक, कान, घाँटी रोग विभाग",
    iconName: "Ear",
    summary: "Care for ear infections, hearing loss, sinusitis, tonsillitis, and nasal allergies with video otoscopy.",
    summaryNepali: "कान पाक्ने, सुनाइमा कमजोरी, पिनास (साइनस) तथा घाँटी दुख्ने समस्याको उपचार ।",
    keyServices: ["Ear Infection Treatment", "Sinusitis & Allergy Care", "Tonsil & Throat Evaluation", "Foreign Body Removal"]
  },
  {
    id: "dermatology",
    name: "Dermatology & Skin Care",
    nameNepali: "त्वचा रोग विभाग",
    iconName: "Sparkles",
    summary: "Expert treatment for acne, eczema, psoriasis, fungal infections, hair loss, and allergic skin rashes.",
    summaryNepali: "डन्डिफोर, एलर्जी, दाद/लुतो, कपाल झर्ने तथा सम्पूर्ण छाला सम्बन्धी रोगहरूको उपचार ।",
    keyServices: ["Acne & Scar Management", "Fungal & Skin Infection Care", "Eczema & Psoriasis", "Hair & Scalp Health"]
  },
  {
    id: "psychiatry",
    name: "Psychiatry & Behavioral Health",
    nameNepali: "मानसिक रोग विभाग",
    iconName: "Brain",
    summary: "Supportive and confidential care for anxiety, depression, sleep disorders, stress management, and psychosomatic concerns.",
    summaryNepali: "चिन्ता, तनाव, अनिद्रा, डिप्रेसन तथा मानसिक समस्याहरूको परामर्श र उपचार ।",
    keyServices: ["Anxiety & Stress Management", "Depression Support", "Sleep Hygiene", "Counselling Guidance"]
  },
  {
    id: "urology",
    name: "Urology & Kidney Stone Care",
    nameNepali: "यूरोलोजी विभाग",
    iconName: "Droplet",
    summary: "Specialized clinical diagnosis and therapy for kidney stones, urinary tract infections (UTI), and prostate disorders.",
    summaryNepali: "मृगौलाको पत्थरी, पिसाब सम्बन्धी समस्या तथा प्रोस्टेट ग्रन्थीको उपचार र परामर्श ।",
    keyServices: ["Kidney & Bladder Stones", "Recurrent UTI Care", "Prostate (BPH) Assessment", "Renal Ultrasound Evaluation"]
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy & Rehab",
    nameNepali: "फिजियोथेरेपी विभाग",
    iconName: "Flame",
    summary: "Physical therapy and rehabilitation for post-paralysis recovery, cervical spondylosis, knee pain, and sports injuries.",
    summaryNepali: "प्यारालाइसिस, नसा च्यापिएको, घुँडा तथा गर्धन दुख्ने बिरामीहरूको फिजियोथेरेपी ।",
    keyServices: ["Electrotherapy & Traction", "Post-Stroke Rehab", "Cervical & Lumbar Spondylosis", "Sports Injury Recovery"]
  },
  {
    id: "audiometry",
    name: "Audiometry & Hearing",
    nameNepali: "अडियोमेट्री विभाग",
    iconName: "Volume2",
    summary: "Sound-treated audiometry chamber for pure-tone testing and precise hearing threshold measurements for children and adults.",
    summaryNepali: "आधुनिक अडियोमेट्री मेसिनद्वारा कानको सुन्ने क्षमता (Hearing Test) को परीक्षण ।",
    keyServices: ["Pure Tone Audiometry (PTA)", "Speech Discrimination", "Hearing Aid Counseling", "Industrial Hearing Screen"]
  }
];
