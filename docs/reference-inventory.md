# The Simple Krew — Content & Structure Reference Inventory

> **Purpose:** This document inventories the content and structure of https://www.thesimplekrew.com/ as a reference for a rewrite. It records what the site contains, how it is organised, and which facts are TSK-specific and must be replaced with neutral placeholders.
>
> **Method:** The site is a Next.js (Turbopack) single-page application with client-side rendering. Content is fetched at runtime from a REST API at `tskapi.t4gverse.com`. Pages were fetched with curl, RSC payloads were extracted from the HTML, and API endpoints were called directly to retrieve structured content data.

---

## 1. Site Overview

| Attribute | Value |
|---|---|
| **Site name** | The Simple Krew (short form: TSK) |
| **Tagline** | "Premium Marketing Authority" |
| **Description** | "We engineer growth for brands that refuse to blend in. Operating in Singapore, Malaysia" |
| **Tech stack** | Next.js with Turbopack bundler, React, client-side rendering, REST API backend |
| **API base URL** | `https://tskapi.t4gverse.com` |
| **CDN / storage** | `https://tsk-website.s3.eu-north-1.amazonaws.com` (AWS S3, eu-north-1) |
| **CMS reference** | Prismic (contact page video hosted on `elektra-nuxt.cdn.prismic.io`) |
| **Page count** | 4 routes: `/`, `/work`, `/services`, `/contact` |
| **Design language** | Dark theme (near-black `#15110f` background), orange accent (`#ff6b00` / `#f16920`), white text, monospace display font for labels, sans-serif for body |
| **Fonts** | Inter (body sans), Space Grotesk (display), Monument (monospace display for labels/eyebrows) |

---

## 2. Per-Page Inventory

### 2.1 Homepage — `/`

| Attribute | Value |
|---|---|
| **Route** | `/` |
| **Page title** | "The Simple Krew \| Premium Marketing Authority" |
| **Page label** | None (full-screen immersive) |
| **Rendering** | Fully client-side; lazy-loaded chunk contains the page component |

**Section-by-section structure (in order):**

1. **Full-screen video showreel (hero)**
   - A fixed-position video player fills the entire viewport
   - 5 video slides auto-rotate every 15 seconds
   - Each slide has: a progress bar (thin line, animates width over 15s), a title (monospace, uppercase, small), and a description (sans-serif, uppercase, very small, white/40)
   - Slide titles (factual labels): "Creative Direction & Concept Planning", "Professional Photography & Videography", "High-End Commercial Ads", "Brand Campaigns & Strategy", "Custom Visual Content & Brand Experiences"
   - Slide descriptions are short internal notes (e.g. "This is the foundation. Strategy + ideas that drive everything else.")
   - Video sources: `/video2.mp4`, `/video1_web.mp4`, `/video3.mp4`, `/video4.mp4`, `/video5_final.mp4` (with mobile variant `/video5_mobile_final.mp4`)
   - Gradient overlays at top and bottom for text legibility

2. **Sound toggle (bottom-right)**
   - A circular button with a speaker icon
   - Toggles video audio on/off
   - Label: "SOUND ON" / "SOUND OFF" (monospace, tiny, uppercase)

3. **Brand wordmark (bottom-center)**
   - Large centered text: "THE SIMPLE KREW" with an orange period
   - Font: Monument, very large (4–6vw), uppercase, white, opacity 0.7

**Text hierarchy:**
- H1 equivalent: "THE SIMPLE KREW." (brand wordmark, Monument, ~6vw)
- Slide titles: monospace, ~11–14px, uppercase
- Slide descriptions: sans-serif, ~9–10px, uppercase, white/40

**CTAs:** None on the homepage. The page is a passive showreel with a sound toggle only.

**Imagery:**
- 5 full-screen video slides (16:9 or similar, object-cover)
- No static images on this page

**Forms:** None.

---

### 2.2 Work / Portfolio — `/work`

| Attribute | Value |
|---|---|
| **Route** | `/work` |
| **Page title** | "The Simple Krew \| Premium Marketing Authority" |
| **Page label** | "OUR PORTFOLIO" |
| **Subline** | "Bold campaigns. Cinematic visuals. Real results." |

**Section-by-section structure (in order):**

1. **Page header**
   - Eyebrow label: "OUR PORTFOLIO" (monospace, orange, small, tracking-wide)
   - Subline: short tagline (sans-serif, white/70, medium length)

2. **Work listing (portfolio index)**
   - A vertical list of 11 projects, each row separated by a thin border
   - Each row contains:
     - Index number (monospace, white/20, e.g. "01", "02"…)
     - Project name (Space Grotesk, bold, large — 4xl to 6xl, zinc-300, hover turns white)
     - Category label (small, white/60)
     - A circular arrow button (right-pointing arrow, rotates 45° on hover, orange background on hover)
     - A hover preview thumbnail (appears on the right side of the row on hover, 240×120px, scales from 95% to 100%)
   - Rows have hover effects: border color changes to orange/50, text brightens

3. **Clients section**
   - Section heading: "Our Clients" (Monument, bold, large — 6vw to 3.5vw, uppercase)
   - Subtext: "Trusted by brands across Singapore, Malaysia." (sans-serif, white/40, small)
   - A horizontal scrolling marquee of client logos (17 logos)
   - Logos are contained in fixed-width boxes (40–56px wide, 16–24px tall), opacity 50%, hover to 100%
   - Left and right edge fade gradients for the marquee

4. **Footer**
   - Tagline: "TSK — Where vision becomes visual authority." (monospace, white/20, tiny, uppercase)
   - Copyright: "© 2024 The Simple Krew. All Rights Reserved." (white/15, tiny)

**Text hierarchy:**
- H1: "Our Clients" (Monument, ~3.5–6vw, uppercase)
- H2: Project names (Space Grotesk, 4xl–6xl, bold)
- Body: subline, descriptions (sans-serif, base to lg)
- Eyebrow: "OUR PORTFOLIO" (monospace, orange, 10–12px, tracking 4px)

**CTAs:**
- Each work row has an arrow button (circular, right-arrow icon) — appears to navigate to a project detail page (no detail pages were reachable; likely a modal or external link)
- No other explicit CTAs on this page

**Imagery:**
- 11 project poster/thumbnail images (served from S3, various formats: .jpg, .webp, .png)
- 17 client logo images (PNG, from S3)
- Hover preview thumbnails on work rows (240×120px)

**Forms:** None.

**Work projects (11 total):**

| # | Name | Slug | Category | Year |
|---|---|---|---|---|
| 01 | The Madras Barber | the-madras-barber | Creative Direction | 2026 |
| 02 | Sooraa | sooraa | High-End Commercials | 2026 |
| 03 | Chuan Watch | chuan-watch | Product Photography | 2024 |
| 04 | Diamond Pearl | diamond-pearl | Brand Campaign | 2024 |
| 05 | DNet | dnet | Commercial Ads | 2024 |
| 06 | Kree | kree | Content Creation | 2024 |
| 07 | Ruchi | ruchi | Social Media | 2024 |
| 08 | Super Deluxe | super-deluxe | Brand Identity | 2024 |
| 09 | GOA | goa | Uncategorized | 2024 |
| 10 | Mix Master | mix-master | Uncategorized | 2024 |
| 11 | Best Perfume | best-perfume | Uncategorized | 2024 |

---

### 2.3 Services — `/services`

| Attribute | Value |
|---|---|
| **Route** | `/services` |
| **Page title** | "The Simple Krew \| Premium Marketing Authority" |
| **Page label** | "OUR SERVICES" |
| **Subline** | "Comprehensive creative solutions for your brand." |

**Section-by-section structure (in order):**

1. **Page header**
   - Eyebrow label: "OUR SERVICES" (monospace, orange, small, tracking-wide)
   - Subline: short tagline

2. **Services grid/list**
   - 8 service entries, each with:
     - Title (e.g. "Creative Direction", "Website development", "Social Media Marketing", "Video Marketing", "Performance Marketing", "Account Growth & Optimisation", "Influencer Marketing", "Podcast Studio & Recording Services")
     - Description (1–2 sentences, sans-serif, white/60)
     - Feature list (4–5 bullet points per service, short phrases)
   - Each service has an associated image (from S3, various formats: .jpg, .jpeg, .webp, .png)
   - Layout appears to be a grid or stacked list with images

**Text hierarchy:**
- H1: "Our Clients" equivalent — "OUR SERVICES" eyebrow (monospace, orange)
- H2: Service titles (bold, large)
- Body: descriptions (sans-serif, white/60)
- List items: feature bullets (small, white/40–60)

**CTAs:** No explicit CTA buttons found in the services data. The page appears to be informational.

**Imagery:**
- 8 service images (one per service, from S3)

**Forms:** None.

**Services (8 total):**

| # | Title | Slug | Features count |
|---|---|---|---|
| 1 | Creative Direction | creative-direction-concept-planning | 4 |
| 2 | Website development | website-developement | 5 |
| 3 | Social Media Marketing | social-media-marketing | 5 |
| 4 | Video Marketing | video-marketing | 5 |
| 5 | Performance Marketing | performance-marketing | 5 |
| 6 | Account Growth & Optimisation | account-growth-optimisation | 5 |
| 7 | Influencer Marketing | influencer-marketing | 5 |
| 8 | Podcast Studio & Recording Services | podcast-studio-recording-services | 5 |

---

### 2.4 Contact — `/contact`

| Attribute | Value |
|---|---|
| **Route** | `/contact` |
| **Page title** | "The Simple Krew \| Premium Marketing Authority" |
| **Page label** | None (immersive layout) |

**Section-by-section structure (in order):**

1. **Video background**
   - Full-screen background video (muted, autoplay, loop)
   - Video source: Prismic CDN (`.mp4`)
   - Gradient overlays top and bottom

2. **Leadership section**
   - Eyebrow: "Leadership" (monospace, white/60, small, uppercase, tracking-widest)
   - Two columns (stacks on mobile):
     - Column 1: "Founder & Director" — name "The Simple Krew", email link
     - Column 2: "Growth & Strategy" — name "Global Team", email link
   - Each has: name (white, 16px), role (white/60, 14px), email link (orange, 14px, mailto:)

3. **Markets / Location section**
   - Eyebrow: "Markets" (monospace, white/60, small, uppercase, tracking-widest)
   - Two columns:
     - Column 1: "Singapore" — "APAC HQ", email link, address "7 Cuff Road"
     - Column 2: (appears to be a second market/location, details not fully extracted)
   - Email links: mailto:admin@thesimplekrew.com (orange)

4. **Social / DM section (bottom-right, absolute positioned)**
   - Instagram link: `http://instagram.com/thesimplekrew/` (opens in new tab)
   - Label: "DM us: @thesimplekrew" (monospace, orange, small, uppercase)
   - Instagram icon (SVG, 32×32)

5. **Brand wordmark (bottom)**
   - Large text: "THE SIMPLE KREW" (Monument, 5–9vw, uppercase, white, mix-blend-difference, opacity 0.85)

6. **Footer**
   - Copyright: "© 2026 The Simple Krew. All rights reserved." (white/50, 12px, sans-serif)

**Text hierarchy:**
- H1: "THE SIMPLE KREW" (Monument, 5–9vw, uppercase)
- H2: Section labels "Leadership", "Markets" (monospace, 12–14px, uppercase, tracking-widest)
- H3: Names "Founder & Director", "Growth & Strategy", "Singapore" (white, 16px)
- Body: roles, address (white/60, 14px)
- Links: email, Instagram (orange, 14px)

**CTAs:**
- Email links (mailto:admin@thesimplekrew.com) — appear 3 times (Leadership ×2, Markets ×1)
- Instagram link (external, new tab) — bottom-right
- No form-based CTA

**Imagery:**
- 1 background video (full-screen, object-cover, opacity-60)
- Instagram icon (SVG inline)

**Forms:** None. Contact is via email link and Instagram DM only.

---

## 3. Navigation & Footer Structure

### Primary Navigation

The site has a fixed header/navigation bar. Based on the routes that exist and the JS chunk analysis:

- **Nav items (inferred):** Home (`/`), Work (`/work`), Services (`/services`), Contact (`/contact`)
- The nav is hidden on `/admin` routes (a conditional check in the layout component hides the header when pathname starts with `/admin`)
- The nav appears to be a fixed overlay on top of the full-screen content
- No hamburger menu was detected in the extracted code; the nav likely uses inline links

### Footer

The footer is minimal and appears at the bottom of the Work page (and likely other pages):

- **Tagline:** "TSK — Where vision becomes visual authority." (monospace, white/20, tiny, uppercase)
- **Copyright:** "© 2024 The Simple Krew. All Rights Reserved." (white/15, tiny)
- On the Contact page, the footer is simpler: "© 2026 The Simple Krew. All rights reserved." (white/50, 12px)
- No multi-column footer link groups were detected
- No sitemap or extensive footer navigation

### Secondary / Utility Nav

- Sound toggle on homepage (bottom-right)
- Social link (Instagram) on contact page (bottom-right)
- No breadcrumbs, no pagination, no search

---

## 4. TSK-SPECIFIC FACTS TO REPLACE

This is the exhaustive list of concrete facts that belong to The Simple Krew and must be replaced with neutral placeholders in any rewrite.

### Company Name & Short Forms
- **Full name:** The Simple Krew
- **Short form:** TSK
- **Domain:** thesimplekrew.com / www.thesimplekrew.com
- **Brand wordmark text:** "THE SIMPLE KREW" / "THE SIMPLE KREW."

### Named People / Roles
- "Founder & Director" (role title, no personal name given)
- "Growth & Strategy" (role title, no personal name given)
- "Global Team" (team name, no individual names)
- "The Simple Krew" (used as the name under Founder & Director — the company name stands in for a person)

### Client / Brand Names (17 clients)
1. Goa Night Club
2. Erodu Amman Mess
3. Krewpad Studio
4. Mix Master Club
5. Soora Liquers
6. Sree Laxmi Vilas
7. STR8UP
8. A Star Motors PTE
9. Ammakase
10. Best Perfume
11. Capital Insight Affluence
12. Chuan Watch
13. Diamond Pearl
14. Dnet Interior
15. Evoque Medical Aesthetics
16. Game Hub
17. Super Deluxe Kitchen

### Work / Project Names (11 projects)
1. The Madras Barber
2. Sooraa
3. Chuan Watch
4. Diamond Pearl
5. DNet
6. Kree
7. Ruchi
8. Super Deluxe
9. GOA
10. Mix Master
11. Best Perfume

### Project Slugs (URL identifiers)
- the-madras-barber, sooraa, chuan-watch, diamond-pearl, dnet, kree, ruchi, super-deluxe, goa, mix-master, best-perfume

### Service Names (8 services)
1. Creative Direction
2. Website development
3. Social Media Marketing
4. Video Marketing
5. Performance Marketing
6. Account Growth & Optimisation
7. Influencer Marketing
8. Podcast Studio & Recording Services

### Service Slugs
- creative-direction-concept-planning, website-developement, social-media-marketing, video-marketing, performance-marketing, account-growth-optimisation, influencer-marketing, podcast-studio-recording-services

### Numbers / Metrics / Statistics
- **17** clients
- **11** work projects
- **8** services
- **5** homepage video slides
- **50+** cinematic shots (Chuan Watch project)
- **2024** — copyright year on work page; project year for most works
- **2026** — copyright year on contact page; project year for The Madras Barber and Sooraa
- **15** seconds — homepage video slide rotation interval
- **4–5** features per service (4 for Creative Direction, 5 for all others)
- **3–4** services tagged per work project

### Awards
- None found on any page.

### Addresses
- **7 Cuff Road, Singapore** (listed under Markets / Singapore / APAC HQ)

### Email Addresses
- **admin@thesimplekrew.com** (used for all contact links — Leadership, Markets, footer)

### Phone Numbers
- None found on any page.

### Social Handles
- **Instagram:** @thesimplekrew (URL: `http://instagram.com/thesimplekrew/`)
- Label: "DM us: @thesimplekrew"

### Taglines / Slogans (short factual labels)
- "Premium Marketing Authority"
- "We engineer growth for brands that refuse to blend in."
- "Where vision becomes visual authority" (rendered as "TSK — Where vision becomes visual authority.")
- "Bold campaigns. Cinematic visuals. Real results." (work page subline)
- "Comprehensive creative solutions for your brand." (services page subline)
- "Trusted by brands across Singapore, Malaysia." (clients section subtext)

### Geographic Markets
- Singapore
- Malaysia
- APAC (referred to as "APAC HQ")

### Image / Logo Asset URLs
- **OG image:** `https://www.thesimplekrew.com/og-image.png`
- **Favicon:** `/icon.png` (500×500, PNG)
- **Client logos:** 17 PNG files at `https://tsk-website.s3.eu-north-1.amazonaws.com/clients/`
- **Work posters:** 11 images at `https://tsk-website.s3.eu-north-1.amazonaws.com/works/` (mixed .jpg, .webp, .png)
- **Service images:** 8 images at `https://tsk-website.s3.eu-north-1.amazonaws.com/services/` (mixed .jpg, .jpeg, .webp, .png)
- **Homepage videos:** `/video1_web.mp4`, `/video2.mp4`, `/video3.mp4`, `/video4.mp4`, `/video5_final.mp4`, `/video5_mobile_final.mp4`
- **Contact video:** `https://elektra-nuxt.cdn.prismic.io/elektra-nuxt/Z9_VXXdAxsiBvxU6_Video-contact-comp.mp4`
- **Placeholder logos (dev fallback):** `https://placehold.co/200x100/15110f/444444.png?text=LOGO+1` through `LOGO+5`

### API Endpoints
- `https://tskapi.t4gverse.com/api/clients` — returns client list with name, logo URL, order
- `https://tskapi.t4gverse.com/api/services` — returns services with slug, title, description, features, image
- `https://tskapi.t4gverse.com/api/works` — returns projects with name, slug, category, year, tagline, description, heroTagline, services, media, image

### Google Drive Links (in work project data)
- Chuan Watch: `https://drive.google.com/drive/folders/1vmCBxVz4NuRewc3ktMkV-KqNcSHqZc7K`
- Diamond Pearl: `https://drive.google.com/drive/folders/1pAmqoJZI-eULCb3gzj7tNvHvMyvWutjP`
- DNet: `https://drive.google.com/drive/folders/1OxEyioo0ToQPM0_mH7OtDCw3109tmAGi`
- Kree: `https://drive.google.com/drive/folders/1X69xFTGyQ-xSRLXpZ1yxuG0W6OLHq6ps`
- Ruchi: `https://drive.google.com/drive/folders/1WFcttkRuVJBRh-bPn6HaqMOsSFDy3mhJ`
- Super Deluxe: `https://drive.google.com/drive/folders/15BD5E8WHTPkem3rCCy8bDWoTqZvNeeUE`

---

## 5. STRUCTURAL PATTERNS WORTH REUSING

These are site-level design and layout patterns described in our own words. No TSK wording is copied.

### Layout Rhythm
- **Full-viewport sections:** Each page section occupies at least one full viewport height, creating a scroll-driven narrative.
- **Fixed overlay navigation:** A persistent header sits above all content, hidden only on admin routes.
- **Bottom-anchored brand wordmark:** A large, centered brand name anchors the bottom of immersive pages (homepage, contact), creating a consistent visual signature.
- **Dark canvas with orange accent:** Every page uses the same near-black background with a single orange accent color for interactive elements and emphasis.

### Section Ordering Conventions
1. Eyebrow label (monospace, orange, uppercase, letter-spaced) — establishes context
2. Large heading or wordmark — communicates the section's purpose
3. Supporting subline or description — one or two sentences
4. Content grid or list — the primary material
5. Footer with tagline and copyright

### Hover / Interaction Conventions
- **Row hover states:** List items brighten text, change border color to orange, and reveal a preview thumbnail.
- **Button hover states:** Circular icon buttons rotate 45° and fill with orange.
- **Logo marquee hover:** Client logos transition from 50% to 100% opacity.
- **Color transitions:** All hover states use 300–500ms ease transitions.
- **Auto-rotation:** Homepage video slides auto-advance on a timer with a linear progress indicator.

### Type Scale Relationships
- **Monument (monospace display):** Used for eyebrow labels, section headings, and the brand wordmark. Ranges from 10px (labels) to 9vw (hero wordmark). Always uppercase with wide letter-spacing.
- **Space Grotesk (display sans):** Used for project names and card titles. Large and bold (4xl–6xl). Tight tracking.
- **Inter (body sans):** Used for descriptions, body copy, and UI elements. Small (9–14px). Often uppercase with wide tracking for labels.

### Footer Structure
- Minimal single-line footer: tagline on the left, copyright on the right.
- No multi-column link groups, no sitemap, no newsletter signup.
- Copyright year varies by page (2024 on work, 2026 on contact).

### Imagery Conventions
- **Hero slots:** Full-screen video with gradient overlays for text legibility.
- **Project thumbnails:** Landscape posters, object-cover, served from S3.
- **Client logos:** Small, contained, opacity-controlled, arranged in a horizontal marquee.
- **Service images:** One per service, mixed aspect ratios, served from S3.

### Data-Driven Patterns
- All content (works, services, clients) is fetched from a REST API at runtime.
- The API returns structured JSON with consistent fields (name, slug, description, image, order).
- The frontend renders lists/grids from API responses with hover interactions.
- A loading state with a pulsing orange dot is shown while data fetches.

---

## 6. NOT DETERMINABLE / NOT REACHED

| Item | Reason |
|---|---|
| **Project detail pages** | The work listing has arrow buttons suggesting detail navigation, but no `/work/[slug]` routes returned 200. Detail pages may be modals, external links, or not yet built. |
| **Services page chunk** | The services page lazy-loads a chunk (`d29d88e501fd17c5d.js`) that returned 404 when fetched directly. The services page structure was inferred from the RSC payload and API data. |
| **Navigation item labels** | The nav is client-rendered and was not fully captured. Nav items (Home, Work, Services, Contact) are inferred from the routes that exist. |
| **Contact page second market** | The Markets section appears to have two columns but only "Singapore / APAC HQ / 7 Cuff Road" was fully extracted. The second market details were not captured. |
| **Forms** | No forms were found on any page. Contact is via email link and Instagram DM only. A contact form may exist but was not detected. |
| **About page** | No `/about` route exists (returns 404). Company information is embedded in the contact page instead. |
| **Blog / Journal** | No blog routes exist. |
| **Individual team member names** | Only role titles are used; no personal names appear anywhere on the site. |
| **Phone numbers** | No phone numbers appear on any page. |
| **Awards / certifications** | None found. |
| **Testimonials** | None found. |
| **Pricing** | None found. |
| **robots.txt / sitemap.xml** | Both return 404. No SEO infrastructure files are exposed. |
| **Admin panel** | An `/admin` route is referenced in the JS (nav is hidden on this path) but was not accessed. |

---

*Inventory generated from direct page fetches, RSC payload extraction, and API endpoint queries. All TSK-specific facts are catalogued in Section 4 for replacement with neutral placeholders.*
