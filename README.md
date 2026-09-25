# 🏥 Terai Diagnostic & Medical Center — Official Front-End Website
> **तराई डाइग्नोष्टिक एण्ड मेडिकल सेन्टर | Birgunj-4, Parsa, Nepal**  
> *Chief Technologist: Mr. Saheb Sah Kanu (B.Sc. MLT, NHPC Reg: A3912 MLT, L.L.B.)*  
> *Managing Director: Mr. Bablu Sah Kanu*  

A modern, responsive, optimistic, and healthy healthcare web application designed specifically for **Terai Diagnostic & Medical Center**. Built as a 100% pure front-end application with zero server/database dependencies, ready to push to any GitHub repository and deploy instantly for free on **GitHub Pages**, **Vercel**, or **Netlify**.

---

## 🌟 Key Features

- **Doorstep Home Blood Sample Collection ("यहाँ होम कलेक्सनको पनि सुविधा छ ।")**:
  - Interactive booking modal with automatic pre-filled WhatsApp dispatch to `+977 9816295312` and click-to-call hotlines.
- **Interactive Live Searchable Test Directory**:
  - Real-time instant filtering for 100+ tests (Blood Sugar, Thyroid Profile, LFT, KFT, Tumor Markers, USG, X-Ray, etc.) with fasting preparation guides and turnaround times.
- **Preventive Health Checkup Packages**:
  - Executive Full Body Checkup, Diabetic Care Package, Senior Citizen Wellness, and Women's Health Panels.
- **17+ Medical & Diagnostic Specialist Departments**:
  - General Medicine, Orthopedics, Gynecology & Obstetrics, Chest & Pulmonology, Surgery, ENT, Ophthalmology/Eye, Dental, Dermatology, Psychiatry, Cardiology, Pediatrics, Urology, Radiology, Physiotherapy, Audiometry, and Pathology.
- **Consultant Doctors & OPD Visiting Rosters**:
  - Specialist qualifications, consulting days, and visiting hours with 1-click token booking.
- **Center Leadership Spotlight**:
  - Highlighting Mr. Saheb Sah Kanu (B.Sc. MLT Dehradun UK India, Sr. Medical Lab Technologist, NHPC A3912 MLT, Lawyer) with direct links to his official Facebook profile and contact numbers, alongside Managing Director Mr. Bablu Sah Kanu.
- **Official Publications & Media Gallery**:
  - Built-in lightbox viewing for official calendar posters, patient brochures, and clinic facilities.
- **Bilingual & Culturally Grounded**:
  - English and Nepali headings and notices throughout the interface.
- **Mobile Responsive & Accessible**:
  - Optimized for smartphones, tablets, and desktops with smooth scrolling and persistent WhatsApp quick contact.

---

## 📁 Where to Upload Images, Videos & Schedules

To upload your files, simply drop them into the respective folder in `public/uploads/`:

```
public/uploads/
├── logo/          -> Center Logo (logo-icon.svg, logo.png)
├── leadership/    -> Photos of Mr. Saheb Sah Kanu & Mr. Bablu Sah Kanu
├── doctors/       -> Visiting consultant doctors and specialists photos
├── facilities/    -> Photos of automated lab machines, X-ray, USG, dental unit
├── gallery/       -> General clinic photos, waiting lounge, health camps
├── videos/        -> Facility tour clips, educational reels (.mp4)
├── banners/       -> Seasonal posters, festival discount announcements
└── schedules/     -> Doctor weekly OPD rosters (PDF or images)
```

> 💡 **Tip**: When you add photos or update doctors/tests, you can also edit the straightforward data files in `src/data/`:
> - `src/data/siteConfig.ts` — Phone numbers, address, email, social links.
> - `src/data/tests.ts` — List of tests, fasting instructions, and categories.
> - `src/data/packages.ts` — Health package bundles and checklists.
> - `src/data/doctors.ts` — Doctor names, degrees, and consulting hours.
> - `src/data/gallery.ts` — Image & video list for the gallery.

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
- Node.js (version 18 or newer)
- npm

### 1. Install dependencies
```bash
npm install
```

### 2. Start the local development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for production (Static HTML/CSS/JS)
```bash
npm run build
```
This generates the optimized static build in the `dist/` directory.

---

## 🐙 Pushing to GitHub & Free Deployment

### Step 1: Initialize Git and Commit
```bash
git init
git add .
git commit -m "Initial commit: Terai Diagnostic & Medical Center modern website"
```

### Step 2: Push to Your GitHub Repository
Create a new empty repository on your GitHub account (e.g. `terai-diagnostic`), then run:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

### Step 3: Enable Free GitHub Pages (Automated)
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** (under Code and automation).
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site! Within 1–2 minutes, your website will be live at `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/`.

---

## 📞 Clinic Details & Direct Inquiries

- **Center**: Terai Diagnostic & Medical Center (तराई डाइग्नोष्टिक एण्ड मेडिकल सेन्टर)
- **Location**: Main Road Birta, Birgunj-4, Parsa, Nepal (Opposite 10-Storey Building)
- **Reception & Booking**: `+977 9816295312`
- **Technologist Desk**: `+977 9827543958`
- **Managing Director**: `+977 9827204237`
- **Email**: `tdmcbrj@gmail.com`
- **Facebook**: [facebook.com/saheb.sah.855687](https://www.facebook.com/saheb.sah.855687)
- **Hours**: Sunday – Saturday: 7:00 AM – 8:00 PM (Everyday)
