# 📁 Media & Uploads Directory Guide

Welcome to the uploads directory for **Terai Diagnostic & Medical Center**!
Any files placed here are directly accessible to the website frontend.

## 📂 Subdirectories Breakdown:

### 1. `/uploads/leadership/`
- **Purpose**: Photos of the founder, senior lab technologist, and managing director.
- **Current Files**:
  - `saheb-sah.png`: Mr. Saheb Sah Kanu (B.Sc. MLT, Sr. Medical Lab Technologist & Lawyer).
  - `bablu-sah.jpg`: Managing Director Mr. Bablu Sah Kanu (drop your photo here!).
- **Recommended format**: JPG or PNG, 400x400 to 800x800 px (square or portrait).

### 2. `/uploads/doctors/`
- **Purpose**: Profile photos of visiting consultant doctors and specialists.
- **Recommended format**: JPG/PNG, 400x400 px square headshots.
- **Reference in code**: Add filenames into `src/data/doctors.ts`.

### 3. `/uploads/facilities/`
- **Purpose**: Department and diagnostic equipment images (e.g. Fully Automated Analyzer, Digital X-Ray machine, 3D/4D USG machine, Dental Chair, ECG monitor).
- **Recommended format**: JPG or WebP, 800x600 px (4:3 or 16:9).

### 4. `/uploads/gallery/`
- **Purpose**: Reception, waiting lounge, blood sample collection room, health camps, staff team photos.
- **Recommended format**: JPG or WebP, 1200x800 px.
- **Reference in code**: Listed in `src/data/gallery.ts`.

### 5. `/uploads/videos/`
- **Purpose**: Short facility tour clips, video reels, educational health clips (.mp4, .webm).
- **How to play**: Referenced in the Gallery tab or Video section of the site.

### 6. `/uploads/banners/`
- **Purpose**: Seasonal health camp banners, festival discount posters, official notices.
- **Current Files**:
  - `calendar_poster.png`: Official clinic calendar poster.
  - `folder_brochure.jpg`: Official clinic patient folder and department list.
  - `banner_card.png`: Facility card with doctors list and contact info.

### 7. `/uploads/schedules/`
- **Purpose**: PDF files or high-res images of weekly doctor OPD rosters and lab sample collection timings.
- **Tip**: Patients can view or download this directly from the website!
