# Design Document: PERONHUB — Portal Layanan & Data Direktorat Jenderal Perkeretaapian

## Overview

PERONHUB is the official digital service and data portal for Indonesia's Directorate General of Railways (Direktorat Jenderal Perkeretaapian), under the Ministry of Transportation (Kementerian Perhubungan). It functions as a "superapps" — a unified gateway for railway transport services, information, and data management.

---

## Visual Identity

### Brand

- **Product Name:** PERONHUB
- **Tagline:** Portal Pelayanan Perkeretaapian Online
- **Parent Institution:** Kementerian Perhubungan — Direktorat Jenderal Perkeretaapian
- **Mascot:** A 3D humanoid robot character (blue/white, friendly pose), used in the hero section as a digital companion/guide
- **Institutional Logo:** Globe with eagle (Garuda) — golden/yellow on dark navy, used in footer

### Color Palette

| Role               | Value           | Usage                                      |
|--------------------|-----------------|--------------------------------------------|
| Primary Dark       | `#0A1628`       | Main background, navbar, footer            |
| Navy Mid           | `#0D1F3C`       | Section backgrounds, card backgrounds      |
| Navy Light         | `#1A2F50`       | Card borders, subtle highlights            |
| Blue Accent        | `#3B82F6`       | Buttons (CTA), icons, pagination dots      |
| Blue Icon BG       | `#1E3A5F`       | Circular icon containers on cards          |
| Red Accent         | `#E53E3E` / `#C0392B` | Section divider lines under headings, service code separators |
| White Primary      | `#FFFFFF`       | Headings, body text on dark backgrounds    |
| White Secondary    | `rgba(255,255,255,0.75)` | Subtitles, descriptions              |
| Gray Muted         | `rgba(255,255,255,0.4)`  | Placeholder text, secondary labels   |
| Gold (Footer Logo) | `#F5C842`       | Institutional globe logo                   |

### Typography

| Element             | Style                                 |
|---------------------|---------------------------------------|
| Hero Heading        | Bold, ~40–48px, white, line-height tight |
| Section Heading     | Bold, ~32–36px, white, centered       |
| Card Title          | Semi-bold, ~16–18px, white            |
| Body Text           | Regular, ~14–15px, white/muted        |
| Service Codes       | Bold, ~16px, white, preceded by red line |
| Navbar Links        | Medium, ~14px, white, with dropdown chevrons |
| Footer Text         | Regular, ~13px, white                 |

- Font family: System sans-serif stack, likely **Inter** or similar geometric sans-serif
- All text on dark backgrounds — no light-mode typography documented in current screenshots

---

## Layout & Structure

### Page Structure (Top to Bottom)

1. **Navbar**
2. **Hero Section**
3. **About / Value Proposition Section**
4. **Layanan Utama (Main Services)**
5. **Layanan Unggulan (Featured Services)**
6. **Berita Terbaru (Latest News)**
7. **Berita Foto (Photo News)**
8. **Video & Podcast**
9. **Sosial Media (Social Media)**
10. **Footer**

---

## Section-by-Section Design Spec

### 1. Navbar

- **Background:** Transparent over hero, dark on scroll
- **Height:** ~64px
- **Logo:** PERONHUB wordmark + diamond icon, left-aligned, with subtitle "Portal Pelayanan Perkeretaapian Online"
- **Nav Links (center/right):** Tentang Kami ▾ | Kebijakan ▾ | Program Pembangunan ▾ | Berita ▾ | ✦ HUBNET
- **Right Actions:** Login button (outlined, rounded-pill, with person icon) | Dark mode toggle (moon icon + toggle switch)
- **Login Button Style:** Border `1px solid white`, rounded-full, text "Login", icon left

### 2. Hero Section

- **Layout:** Full-viewport-height section
- **Background:** Photographic scene — high-speed trains on railway tracks, urban skyline with skyscrapers, green grass, blue sky; heavy dark navy color overlay (~60% opacity)
- **Foreground Card:** Glassmorphism card, centered-left (approx 60% width, vertically centered)
  - Background: `rgba(255,255,255,0.1)` with backdrop blur
  - Border: `1px solid rgba(255,255,255,0.2)`
  - Border-radius: `16px`
  - Padding: `40px`
  - Contains: H1 heading, subtitle paragraph, "Layanan Kami" CTA button
  - Mascot robot floats on the right side of the card
- **CTA Button:** "Layanan Kami" — solid blue (`#3B82F6`), rounded-full, bold white text, ~48px height
- **Search Bar:** Full-width pill below the hero card — `rgba(255,255,255,0.1)` background, white border, magnifier icon, placeholder "Cari Layanan ..."
- **Bird silhouettes** visible in background for depth

### 3. About Section (Value Proposition)

- **Background:** Deep navy `#0A1628`
- **Layout:** 2-column, 50/50 split
  - Left: Rounded image of person using laptop showing DJKA login portal (`border-radius: 16px`)
  - Right: Text block
    - H2: "Layanan dan Data Perkeretaapian dalam Satu Portal Terpadu" (~32px, bold, white)
    - Two body paragraphs in white/muted text, ~15px
- **Scroll-to-top button:** Blue circular button, bottom-right corner, arrow-up icon

### 4. Layanan Utama (Main Services)

- **Background:** Dark navy with subtle blurred city imagery overlay
- **Section Heading:** "Layanan Utama" — white, bold, centered; red underline accent (`4px`, ~60px wide)
- **Grid:** 2×2 card grid
- **Card Design:**
  - Background: `rgba(255,255,255,0.05)` with subtle glass effect
  - Border: `1px solid rgba(255,255,255,0.15)`
  - Border-radius: `12px`
  - Padding: `32px`
  - Icon: White line icon inside dark navy circle (`#1E3A5F`), ~56px diameter
  - Service Code: Bold white text with red horizontal line left separator (e.g., "— HUB - 06.04")
  - Service Name: White text below code
- **Services Listed:**
  - HUB-06.04: Pelayanan Transportasi Perkeretaapian
  - HUB-07.04: Keselamatan dan Keamanan Perkeretaapian
  - HUB-08.04: Pengelolaan Sarana dan Prasarana Transportasi Perkeretaapian
  - HUB-09: Aksesibilitas dan Konektivitas Transportasi Perkeretaapian

### 5. Layanan Unggulan (Featured Services)

- **Background:** Deep navy `#0A1628`
- **Section Heading:** "Layanan Unggulan" — same style as above (white bold, red underline)
- **Layout:** Horizontal carousel, 4 cards visible
- **Card Design:**
  - Background: `rgba(255,255,255,0.05)`
  - Border: `1px solid rgba(255,255,255,0.1)`
  - Border-radius: `16px`
  - Icon: Blue line icon in dark circular container
  - Label: Bold white, centered, 2–3 lines
  - No service code — just icon + title
- **Navigation:** Left/right circular buttons (blue, `#3B82F6`) — bottom right of section
- **Services Shown:**
  - Pemantauan CCTV Stasiun
  - Dukungan Manajemen Lainnya
  - Layanan Sertifikasi Kelaikan Sarana Perkeretaapian
  - Layanan Sertifikasi SDM Perkeretaapian

### 6. Berita Terbaru (Latest News)

- **Section Heading:** "Berita Terbaru" — same heading style
- **Layout:** 3-column horizontal carousel
- **Card Design:**
  - Background: Transparent (dark bg shows through)
  - Image: Rounded thumbnail (~16px radius), 16:9 aspect ratio
  - Title: Bold white, 2 lines, centered, ~16px
  - Date: Muted white, centered, ~13px
- **Navigation:** Left/right circle buttons; pagination dots at bottom (filled blue dot = active)
- **Sample Articles:**
  - "Momentum Hari Transportasi Nasional: Sinergi Kuat untuk Masa..." — 22 April 2026
  - "DJKA Bersama Chodai dan KfW Kunjungi Lokasi Proyek SRRL di S..." — 22 April 2026
  - "Siaran Pers Nomor: 93/SP/IV/BKIP/2026: Presiden Prabowo dan..." — 28 April 2026

### 7. Berita Foto & Video/Podcast

- **Layout:** 2-column equal split
  - Left column: "Berita Foto" — carousel with image thumbnail and title/date
  - Right column: "Video & Podcast" — carousel with video thumbnail and title/date
- **Column Headings:** White, bold, with red underline separator
- **Card Design:** Image with rounded corners, left/right nav arrows overlaid on image edges (blue circles)
- **Thumbnail Style:** Full-bleed rounded rectangle image, caption below

### 8. Sosial Media

- **Section Heading:** "Sosial Media" — centered, white bold, red underline
- **Layout:** 3-column grid of embedded social cards
  - Column 1: Facebook page embed (DJKA — Direktorat Jenderal Perkeretaapian)
  - Column 2: X/Twitter post embed
  - Column 3: Instagram profile embed (ditjenperkeretaapian — 4,054 posts, 100K followers)
- **Card Style:** White/light background cards (native social embed appearance) within dark navy page

### 9. Footer

- **Background:** Dark navy `#0A1628`
- **Layout:** 4-column horizontal
  1. **Logo Column:** Institutional globe/eagle logo (gold/yellow), organization name "Kementerian Perhubungan / Direktorat Jenderal Perkeretaapian"
  2. **Map Column:** Embedded Google Maps showing location near National Monument, Jakarta
  3. **Contact Column:**
     - Alamat: Jl. Medan Merdeka Barat No.8 Jakarta Pusat 10110 - Indonesia
     - Telepon: +62 813-6001-3838
     - Email: ditjenka@kemenhub.go.id
  4. **Social Media Column:** Handles listed with platform prefix
     - ig: @ditjenperkeretaapian
     - fb: @ditjenperkeretaapian
     - tiktok: @ditjenperkeretaapian
     - youtube: @ditjenperkeretaapian
     - X: @perkeretaapian
- **Bottom Bar:** Thin divider line + copyright "© Copyright 2025 Direktorat Jenderal Perkeretaapian All Rights Reserved"

---

## Component Patterns

### Section Heading Pattern
```
[Centered Bold White Text ~32px]
[Red horizontal line, ~60px wide, 3px thick, centered beneath]
```

### Service Card Pattern
```
[Dark circular icon container]
[Red line — SERVICE CODE]
[Service Name text]
```

### Glassmorphism Card
```
background: rgba(255,255,255,0.08)
backdrop-filter: blur(12px)
border: 1px solid rgba(255,255,255,0.15)
border-radius: 16px
```

### CTA Button (Primary)
```
background: #3B82F6
color: white
border-radius: 9999px (pill)
padding: 12px 28px
font-weight: 700
```

### Navigation Arrow Button
```
background: #3B82F6
color: white
width: 40px
height: 40px
border-radius: 50%
display: flex; align-items: center; justify-content: center
```

### Scroll-to-Top Button
```
background: #3B82F6
color: white
width: 48px
height: 48px
border-radius: 50%
position: fixed
bottom: 24px
right: 24px
```

---

## Spacing & Grid

- **Container max-width:** ~1440px, centered
- **Horizontal padding:** `80–120px` on desktop
- **Section vertical padding:** `80–100px` top and bottom
- **Card gap:** `24px`
- **Card padding:** `32px`

---

## Interaction Patterns

- **Dark mode toggle:** Moon icon + blue pill toggle in navbar (appears to be in dark mode by default)
- **Dropdown menus:** Navbar items with ▾ chevron (Tentang Kami, Kebijakan, Program Pembangunan, Berita)
- **Carousels:** Left/right navigation arrows; pagination dots for news section
- **Search bar:** Full-width pill with focus state
- **Hover states:** Cards likely have subtle glow/border brightening (inferred from design language)
- **Scroll-to-top:** Fixed blue circle button, bottom-right

---

## Dark Mode

The entire site appears to be in a **dark-first** design. The dark mode toggle in the navbar suggests light mode may exist, but all screenshots show the dark variant:
- Background: Deep navy (`#0A1628`)
- Text: White and light gray
- Icons and accents: Blue (`#3B82F6`) and Red (`#E53E3E`)

---

## Accessibility Notes

- High contrast white text on dark navy backgrounds
- Icon + text labeling on all service cards
- Search bar with magnifier icon and placeholder text
- Navigation landmarks: navbar, main, footer
- All interactive elements (buttons, nav links) appear large enough for touch targets

---

## Assets & Media

- Hero background: Full-bleed photographic image of high-speed trains + city skyline
- Robot mascot: 3D rendered character, appears as PNG with transparent background
- Institutional logo: SVG/PNG globe with Garuda eagle, gold/yellow color
- Google Maps embed in footer
- Social media embeds (Facebook, Twitter/X, Instagram) rendered as native widgets
