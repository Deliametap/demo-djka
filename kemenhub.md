# Design Document: SiAPKA — Sistem Informasi Aplikasi Pengujian Perkeretaapian

## Overview

SiAPKA is the official digital portal for **Balai Pengujian Perkeretaapian** — a BLU (Badan Layanan Umum) under the Directorate General of Railways (Direktorat Jenderal Perkeretaapian), Ministry of Transportation (Kementerian Perhubungan). The site serves as a unified gateway for railway testing services, public information, and institutional profile.

---

## Visual Identity

### Brand

- **Product Name:** SiAPKA
- **Full Name:** Sistem Informasi Aplikasi Pengujian Perkeretaapian
- **Parent Institution:** Kementerian Perhubungan — Direktorat Jenderal Perkeretaapian — Balai Pengujian Perkeretaapian
- **Logo:** Blue gradient square tile (`#3B82F6` → `#1E40AF`) with bold white letter mark, + text wordmark "SiAPKA" with tagline beneath

---

## Design System

### Mode

- **Dark-first design** with full light mode support
- Default: dark navy
- Light mode toggled via `.light` class on `<body>`
- Navbar always stays dark (`#0E1937`) even in light mode

---

## Color Tokens

### Dark Mode (`:root`)

| Token         | Value                        | Usage                                      |
|---------------|------------------------------|--------------------------------------------|
| `--bg`        | `#0E1937`                    | Main page background, section backgrounds  |
| `--bg-mid`    | `#0E1937`                    | Alternate section backgrounds              |
| `--bg-card`   | `rgba(255,255,255,0.06)`     | Card surfaces                              |
| `--border`    | `rgba(255,255,255,0.1)`      | Card borders, dividers                     |
| `--blue`      | `#3B82F6`                    | CTA buttons, icons, accents                |
| `--blue-ic`   | `#1E3A5F`                    | Icon container backgrounds                 |
| `--red`       | `#DC2626`                    | Section heading underlines, accents        |
| `--white`     | `#FFFFFF`                    | Primary text                               |
| `--muted`     | `rgba(255,255,255,0.6)`      | Secondary / descriptive text               |
| `--faint`     | `rgba(255,255,255,0.25)`     | Placeholder, disabled text                 |
| `--r-xl`      | `16px`                       | Large radius (cards, modals)               |
| `--r-lg`      | `12px`                       | Medium radius                              |
| `--r-md`      | `8px`                        | Small radius                               |
| `--r-pill`    | `9999px`                     | Full pill buttons                          |

### Light Mode (`body.light`)

| Token         | Value                        |
|---------------|------------------------------|
| `--bg`        | `#F0F4FA`                    |
| `--bg-mid`    | `#E4EAF4`                    |
| `--bg-card`   | `rgba(255,255,255,0.9)`      |
| `--border`    | `rgba(0,0,0,0.09)`           |
| `--blue`      | `#2563EB`                    |
| `--blue-ic`   | `#DBEAFE`                    |
| `--white`     | `#0F172A`                    |
| `--muted`     | `rgba(15,23,42,0.55)`        |
| `--faint`     | `rgba(15,23,42,0.18)`        |

### Dropdown Tokens

| Token            | Dark                          | Light                         |
|------------------|-------------------------------|-------------------------------|
| `--dd-bg`        | `#1a2744`                     | `#ffffff`                     |
| `--dd-text`      | `rgba(255,255,255,0.85)`      | `#1a1a2e`                     |
| `--dd-hover-bg`  | `rgba(255,255,255,0.07)`      | `#f5f7ff`                     |
| `--dd-divider`   | `rgba(255,255,255,0.08)`      | `rgba(0,0,0,0.07)`            |
| `--dd-shadow`    | `0 8px 40px rgba(0,0,0,0.45)`| `0 8px 40px rgba(0,0,0,0.14)` |

---

## Typography

- **Font Family:** `'Inter'`, system-ui, sans-serif (Google Fonts)
- **Weights used:** 300, 400, 500, 600, 700, 800

| Element              | Size         | Weight | Notes                          |
|----------------------|--------------|--------|--------------------------------|
| Hero wordmark        | 56–110px     | 900    | Clamp, letter-spacing 12–28px  |
| Hero welcome text    | 18–26px      | 600    | Centered, 0.5px tracking       |
| Section heading h2   | 32px         | 700    | Centered, `--white`            |
| Card title           | 14–16px      | 600    | `--white`                      |
| Body / description   | 13.5–15px    | 400    | `--muted`                      |
| Nav links            | 14px         | 600    | `rgba(255,255,255,0.75)`       |
| Dropdown items       | 15px         | 500    | `--dd-text`                    |
| Page banner h1       | 2rem         | 800    | Letter-spacing -0.4px          |
| Page banner sub      | 14.5px       | 400    | `--muted`, max-width 640px     |

---

## Layout & Grid

- **Container max-width:** `1440px`, centered, `padding: 0 80px`
- **Section vertical padding:** `100px 0`
- **Card gap:** `24px`
- **Card padding:** `24–32px`
- **Navbar height:** `68px`

---

## Page Structure (Top to Bottom)

1. **Navbar** — fixed, transparent over hero, dark on scroll
2. **Hero Section** — full viewport, glassmorphism card, search bar
3. **About Section** — 2-column text + image mockup
4. **Informasi Layanan (Layanan Utama)** — 4-col card grid with service image + code
5. **Link Layanan (Layanan Unggulan)** — 3-col card grid with icon + label
6. **Monitoring** — tabbed data table section
7. **Berita Terbaru** — 3-col news card carousel
8. **Sosial Media** — 3-col social media card grid
9. **Mitra** — horizontal logo marquee slider
10. **Footer** — 3-col: logo+visitor / links / address+contact

---

## Section-by-Section Design Spec

### 1. Navbar

- **Height:** `68px`, `position: fixed`
- **Background:** `rgba(255,255,255,0)` over hero; `#0E1937` on scroll (`.scrolled`) — always `#0E1937` in light mode
- **Logo:** Blue gradient 40×40px tile + "SiAPKA" 19px/800 + subtitle 9px/500
- **Nav Links:** Semi-bold 14px/600, hover: white + `rgba(255,255,255,0.08)` bg + red underline animation
- **Dropdowns:** Click-triggered; pill panel `border-radius:16px`; items 15px/500 with hover tint
- **Login Button:** Frosted glass, `border: 1.5px solid rgba(255,255,255,0.55)`, `border-radius: 12px`, circle-arrow icon
- **Theme Toggle:** 62×32px pill, dark track `#0E1937`, blue dot right (dark) / left (light), moon/sun Lucide icons

### 2. Hero Section

- **Height:** `100vh`, min 600px
- **Background image:** `Asset/ba43df5f-628d-464e-a876-7df3c6c86d3c.png`, cover, centered
- **Tint overlay:** `rgba(10,22,40,0.15)`
- **Bottom fade:** `linear-gradient(to top, rgba(10,22,40,0.6), transparent)`, 160px
- **Glass card:**
  - `background: rgba(40,55,80,0.52)`, `backdrop-filter: blur(28px) saturate(140%)`
  - `border: 1px solid rgba(255,255,255,0.18)`, `border-radius: 20px`
  - `padding: 36px 48px 28px`, `width: min(1000px, 80vw)`
  - Contains: institution badges, welcome text, SiAPKA wordmark, tagline, social strip
- **Search bar:** Below card, same glass treatment, pill shape, width matches card

### 3. Section Heading Pattern

```
[Centered Bold White h2, 32px, font-weight:700]
[Red line — width:56px, height:3px, centered, border-radius:2px]
```

### 4. Informasi Layanan (Layanan Utama)

- **Background:** `--bg-mid`
- **Grid:** `repeat(4, 1fr)`, gap `24px`
- **Card:** `background:#092237` (dark), no border, `border-radius:16px`
- **Card hover:** lift `translateY(-4px)`, content slides up
- **Card structure:** 16:9 image top → icon circle → service code (red line + text) → title → description

### 5. Link Layanan (Layanan Unggulan)

- **Background:** `--bg`
- **Grid:** `repeat(3, 1fr)`, gap `20px`
- **Card:** glass surface, border, `border-radius:16px`, centered icon + label

### 6. Berita Terbaru

- **Grid:** 3-column
- **Card:** glass surface, image thumbnail (16:9, `border-radius:12px`), title, date
- **Navigation:** Left/right circle buttons + pagination dots
- **Hover:** border-color lift to `rgba(59,130,246,0.25)`

### 7. Sosial Media

- **Grid:** 3-column equal
- **Card:** glass surface, hover: `border-color: #e53e3e` (2px solid)
- **Platforms:** Instagram, X/Twitter, YouTube — colored icon containers

### 8. Footer

- **Background:** `#0E1937`, always dark
- **Grid:** `1.2fr 1fr 1.4fr`, gap `80px`
- **Columns:** Logo + visitor counter | Quick links | Address + contact (Lucide icons)
- **Bottom bar:** copyright, `padding: 18px 80px`

---

## Component Patterns

### CTA Button (Primary)
```css
background: #3B82F6;
color: white;
border-radius: 9999px;
padding: 13px 28px;
font-size: 14px;
font-weight: 700;
```

### Login Button
```css
border: 1.5px solid rgba(255,255,255,0.55);
border-radius: 12px;
background: rgba(255,255,255,0.1);
backdrop-filter: blur(8px);
font-size: 13.5px;
font-weight: 600;
```

### Card (Default)
```css
background: rgba(255,255,255,0.06);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 16px;
padding: 24px;
```

### Page Banner (used on PPID, FAQ, Profil pages)
```css
padding: 110px 0 56px;
background: --bg;
/* radial blue glow overlay */
.page-banner-inner: max-width 1160px, padding 0 80px
h1: 2rem, font-weight:800, letter-spacing:-0.4px
sub: 14.5px, max-width:640px
.banner-accent: 44×3px red bar, margin-top:18px
```

### Scroll-to-Top Button
```css
background: #3B82F6;
width: 48px; height: 48px;
border-radius: 50%;
position: fixed; bottom: 24px; right: 24px;
```

---

## Interaction Patterns

- **Navbar:** Transparent → opaque on scroll; dropdown on click with chevron flip
- **Theme toggle:** Moon ↔ Sun icon swap via `body.light` CSS class (no JS at toggle time)
- **Cards:** `translateY(-4px)` lift on hover; border-color transitions
- **Carousels:** JS-driven left/right nav; pagination dots
- **Fade-up animation:** `IntersectionObserver` adds `.visible` class → `opacity:0 → 1`, `translateY(24px → 0)`
- **Search bar:** Focus state: `border-color: rgba(59,130,246,0.7)`

---

## Spacing System

| Context            | Value  |
|--------------------|--------|
| Section padding    | 100px  |
| Container padding  | 80px   |
| Card gap           | 24px   |
| Card padding       | 24–32px |
| Navbar height      | 68px   |
| Scrollbar width    | 5px    |

---

## Sub-pages

All sub-pages share the same navbar, footer, color tokens, and font stack.

| Page                | File                        | Unique Structure                          |
|---------------------|-----------------------------|-------------------------------------------|
| Home                | `siapka-redesign.html`      | Hero + sections                           |
| Profil BLU          | `siapka-profil.html`        | Page banner + 2-col sidebar/content       |
| PPID                | `siapka-ppid.html`          | Page banner + tab-based content           |
| FAQ                 | `siapka-faq.html`           | Page banner + accordion FAQ               |
| Berita Detail       | `siapka-berita-detail.html` | Article layout                            |

### 2-Column Profile Layout (siapka-profil.html)
- **Left sidebar:** `300px`, sticky `top:68px`, accordion nav buttons with blue left-border active state
- **Right content:** `flex:1`, scrollable, `padding: 56px 64px 80px`
- **Sections:** Tentang Kami, Struktur Organisasi, Visi & Misi, Ruang Lingkup

---

## Assets

- Hero background: `Asset/ba43df5f-628d-464e-a876-7df3c6c86d3c.png`
- Logo (footer/header): `Asset/ChatGPT Image 5 Mei 2026, 15.03.03.png`
- Public header logo: `Asset/1730709636-logopublicheader.png`
- Org chart: `Asset/org-struktur.png`
- SDM data: `Asset/sdm-pegawai.jpg`
- Icons: Lucide via CDN (`unpkg.com/lucide@latest/dist/umd/lucide.min.js`)
