# Handoff: Sogody.com — Full Marketing Site

A complete, self-contained recreation of the **entire sogody.com marketing site** — every
page, the shared navigation/footer/contact shell, the design tokens, fonts, icons, raster
placeholders, and the content data model. This is the **whole web**, not a single page.

> Sogody is a martech company that engineers conversion-focused digital experiences
> ("convert without pitching"). The live site is **Gatsby + React + Sanity CMS**
> (repo: `github.com/Sogody/sogody.com`). This bundle reproduces it as static HTML that
> transpiles JSX in the browser.

---

## About the Design Files
The files here are **design references created in HTML/React-via-Babel** — prototypes that
show the intended look and behavior. They are **not** production code to ship as-is: every
page loads React + ReactDOM + `@babel/standalone` from a CDN and transpiles its `.jsx` in
the browser at runtime. That is perfect for a faithful visual/behavioral spec, but you would
never ship browser-side Babel to production.

**Your task:** recreate these designs in the target codebase's environment. The natural
target is the real stack — **Gatsby + React components backed by the Sanity content model** —
so most of this maps 1:1 onto existing repo components (the JSX here is deliberately mirrored
from `src/components/*` and `src/pages/*`, noted in comments inside each file). If you are
starting fresh, use any modern component framework and wire the content to a CMS or data
layer. Treat the HTML/JSX/CSS here as the visual + behavioral spec and the `data.jsx` model
as the shape of the content.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, radii, gradients, and
interactions are specified below and embedded in the files. The goal of this port was
**pixel-by-pixel, asset-by-asset parity** with live sogody.com (see `PIXEL_PARITY.md`).
Recreate pixel-for-pixel using the codebase's component library, then bind real content.

---

## How to run it
Static files — no build step. Serve the folder root over any static server (the JSX is
fetched by Babel, so `file://` will be blocked by CORS; use a server):

```
cd design_handoff_sogody_full_site
python3 -m http.server 8000      # then open http://localhost:8000/index.html
```

Open `index.html` and navigate via the nav bar. Pages link to each other with plain
relative `*.html` hrefs (Gatsby routes were rewritten to `.html` — see `mapPath` in
`components/src-kit.jsx`).

---

## Architecture (the "parity stack")

Every page is one HTML entry that loads, **in this order**:

1. `assets/bootstrap.min.css` — the repo's customized Bootstrap (includes `.scroll-show` rules).
2. `assets/fonts.css` — real `@font-face` set (Cabinet Grotesk + Helvetica Neue LT Pro, self-hosted in `assets/fonts/`).
3. `assets/style.css` — repo global CSS.
4. `swiper-bundle` CSS + JS (CDN, v11) — carousels (home case studies, platforms slider).
5. `styles/main-compiled.css` — compiled from the repo's `assets/scss/main.scss` (42 SCSS files).
6. `styles/components-compiled.css` — compiled component-level SCSS (18 files).
7. React 18.3.1 + ReactDOM + `@babel/standalone` 7.29.0 (pinned, with integrity hashes).
8. The page's `type="text/babel"` JSX modules (data → shell → page).

> The compiled CSS was produced by a custom quote-aware SCSS compiler (variables, nesting,
> parameterless mixins, `@content` media mixins for mobile `<768` / tablet / desktop `≥1024`,
> nested keyframes, interpolated arithmetic — 464 media rules). If you need to change styling,
> prefer editing the **source SCSS in the live repo** and recompiling there, rather than
> hand-patching `*-compiled.css`. See `PIXEL_PARITY.md` for the compiler notes.

### Two shell stacks (important)
There are **two** parallel implementations of the shared chrome. Pages use one or the other:

- **`src-*` stack** (closest 1:1 to repo `src/`): `components/src-kit.jsx`,
  `components/src-header.jsx`, `components/src-shell.jsx`. Used by **home** and **services**.
  Bootstrap-4 navbar markup, `ServicesDropdown`, `ContactNav`, Koalendar sidebar, the
  `scroll-show` reveal layout with an iframe-resize fallback.
- **`kit + shell + pagekit` stack** (lighter recreation): `components/kit.jsx`,
  `components/shell.jsx` (Header / Footer / ContactModal), `components/pagekit.jsx`. Used by
  **work, case-study, company, careers, career, contact, updates, update, privacy, terms, 404**.
- **Service-detail pages** use a hybrid: `kit.jsx` + `shell.jsx` + `src-kit.jsx` + `src-shell.jsx`.

When you reconcile these into one component set in the real codebase, the `src-*` versions are
the more faithful mirror of the repo's actual DOM. The `shell.jsx` Header renders the same
visual nav (light-grey pill, sliding active indicator, "What we do" mega-dropdown).

### Shared content model — `components/data.jsx` (`window.SogodyData`)
A single content module every page reads from. Exposes:
`CATEGORIES, SERVICES, SERVICE_DETAIL, SERVICE_CAP_HEADING, SERVICE_TECH_HEADING,
SERVICE_PHOTOS, NAV, CLIENT_LOGOS, IMG, COMPANY_BANNERS, CASE_STUDIES, UPDATES, JOBS,
TESTIMONIALS, FAQS, OFFICES, BOOKING_URL`.
In the real app these correspond to **Sanity documents** (case study, article, job,
service, testimonial, office, FAQ). Treat `data.jsx` as the GROQ/CMS schema shape.

---

## Pages / Views

Each page is a `*.html` entry → loads its shell stack + a page module. Listing pages read
arrays from `SogodyData`; detail pages select a record by `?slug=` query param.

### 1. Home — `index.html` → `pages/home-sections.jsx` + `pages/home-main.jsx`
Mirror of `src/pages/index.js`. Sections top→bottom:
- **MainBanner** — centered hero, big Cabinet Grotesk headline, autoplay product **video**
  (`border-radius: 24px 24px 0 0`), primary green CTA + ExploreLink.
- **WhereWeComeIn** — short positioning section.
- **HomeServices** — service tiles with hover state (hovered tile expands/highlights).
- **WhatWeBuild** — numbered list (01–0n) over the brand background image
  (`assets/images/what-we-build-bg.png` / `-bg-image.png`).
- **HomeCaseStudies** — **Swiper** carousel of case-study cards (hover reveals overlay tag).
- **BookMeetHomePage** — dark CTA band ("Set up a Meeting").
- **HomeUpdates** — latest 2 articles (desktop variant).
Then Footer.

### 2. Services overview — `services.html` → `pages/services-sections.jsx` + `pages/services-main.jsx`
Mirror of `src/pages/services.js`:
- **SvServicesBanner** — services hero with a staggered list of the three service names.
- **SvServicesCategories / SvServiceCategoryCard** — the three offering categories
  (Domain-Specific Software Platforms, AI & Data Systems, Human–AI Interfaces) as scroll-reveal cards.
- **SpOptimizedServices** — "optimized" capability cards (IntersectionObserver reveal).
- **SpPhotoGrid** — 3-column masonry of brand photos/video ("unforgettable experiences"),
  order matches live; media from Sanity CDN + R2 video.
- **SpBookMeet** — shared dark CTA band.

### 3. Service detail (template, 3 instances)
`service.html` (Technology & Engineering / Domain-Specific Software Platforms — default),
`service-ai-solutions.html` (AI & Data Systems), `service-customer-experience.html`
(Customer Experience). All render `pages/service-detail-main.jsx` with content from
`pages/service-detail-data.jsx`, keyed by `window.SD_SLUG`. Per-service color identity via
`[data-sd-theme="tech|ai|cx"]`.

Module stack: **Hero** (dark rounded banner, copy left + video right, divider + "Trusted by"
logo marquee) → **Capabilities** (3×2 grid: 5 capability cards + 1 dark CTO card with swoosh
corner) → **Our Process** (5 hairline-divided, vertically staggered step columns with hover
tooltips) → **Technologies** (full-bleed band, six white cards in one row) → optional
**Platforms** carousel / **ProjectDetails** / **Promo** / **UpdatesSingle** → **BookMeet** CTA.

> Full, measurement-level documentation of the service-detail template, its per-theme
> gradients, and the shared nav lives in the earlier focused handoff:
> `../design_handoff_sogody_service_pages/README.md`. AI capability illustrations are
> **inline SVG** authored in `pages/service-illustrations.jsx` (no external files).

**Per-service themes** (`[data-sd-theme]`):
- `tech` (default): hero `linear-gradient(150deg,#242329,#2b2733 55%,#3a2f4a)`; tech band = wave image.
- `ai`: hero `linear-gradient(150deg,#1c4a38,#21664c 52%,#267A5C)`; CTO card
  `linear-gradient(160deg,#18241e,#1f5440 50%,#2e7d5d)`; tech band `#e3f1e9`; title accent `#bde8d1`.
- `cx`: hero `linear-gradient(150deg,#2a2230,#38262f 55%,#4c2f3f)`; CTO card
  `linear-gradient(150deg,#38262f,#4c2f3f)`; tech band `#fcf3f4`.

### 4. Work (case-study index) — `work.html` → `pages/work.jsx`
Banner + grid of case-study cards from `CASE_STUDIES`. Each card links to
`case-study.html?slug=…`. Card overlay tag = `csBtn`.

### 5. Case study (detail) — `case-study.html` → `pages/case-study.jsx`
Selects a `CASE_STUDIES` record by `?slug=` (falls back to first). Renders hero, long-form
body, and a **ProjectDetails** module (logo + founded/partners + "why we invested" + image,
with a LinkedIn link icon). Mirror of `templates/case-studies-template.js`.

### 6. Company — `company.html` → `pages/company.jsx`
Mirror of `src/pages/company.js`: **BannerCompany** (gallery from `COMPANY_BANNERS`),
**CompanyStaff**, **CEOQuote**, **PhotoGrid**, **Testimonials** (`TESTIMONIALS`).

### 7. Careers (index) — `careers.html` → `pages/careers.jsx`
Careers banner + list of open positions from `JOBS`. Each links to `career.html?slug=…`.

### 8. Career (role detail + apply) — `career.html` → `pages/career.jsx`
Selects a `JOBS` record by `?slug=`. Renders the role, an **Accordion** of sections
(responsibilities/requirements), and an **ApplyForm** (name/email/file, client-side
`status` state: "Apply" → submitting → result). Wire to your real ATS endpoint.

### 9. Contact — `contact.html` → `pages/contact.jsx`
**ContactForm** (controlled, `sent` success state), office/contact info, and **FAQ**
accordion from `FAQS`. Mirror of `src/pages/contact.js` (ContactUs + Testimonials + FAQ).

### 10. Updates (article index) — `updates.html` → `pages/updates.jsx`
Banner + grid of articles from `UPDATES`. Each links to `update.html?slug=…`.

### 11. Update (article detail) — `update.html` → `pages/update.jsx`
Selects an `UPDATES` record by `?slug=` and renders the article body + share links.

### 12. Privacy — `privacy.html` → `pages/privacy.jsx`
Legal page; **verbatim** text fetched from live `/privacy/`. Green-accented section titles.

### 13. Terms — `terms.html` → `pages/terms.jsx`
Legal page; **verbatim** text fetched from live `/terms/`.

### 14. 404 — `404.html` → `pages/notfound.jsx`
Not-found page with the brand `notFound` illustration (`IMG.notFound`).

---

## Shared Navigation & Footer (every page)

**Top nav** (`shell.jsx → Header`, and the `src-header.jsx` mirror):
- Fixed bar. Left: Sogody logo (`130.77×40`). Center: a **light-grey pill**
  (`background:#e8e8e8; border-radius:50px; padding:5px 12px; gap:14px`) holding
  `What we do ⌄ | Work | Updates | Careers | Company`. Right: green **"Contact Us"** pill.
- Nav item: HelveticaNeue 65 Md 16px, `padding:8px 14px`, `border-radius:32px`. A white
  **sliding pill** (`height:36px; border-radius:32px`) animates under the active/hovered item
  (position measured from the active item's bounding box; re-measured on `document.fonts.ready`
  and resize; "What we do" / index 0 is excluded from the active pill).
- **"What we do"** caret: the shared asset `assets/icons/down-arrow.svg` is actually a
  right-chevron, rotated `90deg` to point down on desktop. Hover opens a services
  **mega-dropdown** (white card, `border-radius:20px`, soft shadow, "All Solutions" + a row
  per service with a logo tile + chevron that nudges `translateX(3px)` on hover).
- **≤1023px:** collapses to a hamburger; menu slides in from the right as a
  `backdrop-filter:blur(14px)` panel; "What we do" becomes a tap-to-expand accordion.

**Footer:** single dark `#2b2b2b` rounded card; social icons (`assets/icons/social/`) green,
`translateY(-5%)` on hover.

**Contact / booking:** nav "Contact Us" opens an in-page contact modal
(`window.SogodyOpenContact`). Service-content CTAs ("Schedule an Audit Call", "Set up a
Meeting") open a **cal.com / Koalendar** booking sidebar (`BOOKING_URL =
https://cal.com/sogody/30min`). In production, wire both to your real contact/booking flow.

---

## Interactions & Behavior
- **Arrow nudge** (the brand signature): arrow icons `translateX` on hover; mega-dropdown
  service rows nudge their chevron `translateX(3px)`.
- **Scroll-reveal:** elements with `.scroll-show` fade/translate in via IntersectionObserver
  (threshold ~0.2). The **visible state is the default** so print / reduced-motion / no-JS
  show content. `SrcLayout` adds a polling fallback for the reveal.
- **Swiper carousels** (home case studies): CDN Swiper v11, hover overlay tags.
- **Platforms slider** (service detail): autoplays every 2s, pause/replay toggle, dot
  pagination, `translateX` track transition `0.8s ease`.
- **Process hover** (service detail): entering a step card reveals its tooltip bubble.
- **CTA "circle→pill" alignment:** the circular arrow button has a built-in `-20px` overlap,
  so its container gets `margin-left:20px` to land the visible circle on the text column's edge.
- **Forms:** Contact (`sent`) and Career apply (`status` + `result`) are client-side stubs —
  bind to real endpoints.
- **Responsive:** capability grid 3→2→1; tech grid 6→2; process row wraps ≤900px; hero stacks
  ≤991px; nav collapses to hamburger ≤1023px. Honors `prefers-reduced-motion`.

## State Management
- Listing pages: read arrays from `window.SogodyData` (no local state beyond hover).
- Detail pages: `slug` from `?slug=` (or `window.SD_SLUG`) selects the record; default to first.
- Nav: `menuShow`, `showServices` (mobile accordion), `showDropdown` (desktop), hover/active
  slider positions, `isMobile` (matchMedia ≤1023px), `atTop` (scrollY===0).
- Contact modal: `open`, `sent`, form fields. Career apply: `status`, `result`. Platforms:
  `index`, `autoplay`. Process: `hovered` index. Home services: `hoveredService`.

## Design Tokens

**Brand**
- Accent green (the ONE accent): `#67be83`; darker press/hover `#4d8e62`; lighter `#8ed3a4`.
- Ink `#2b2b2b`; body gray `#636363` / `#4a4a4a`; muted `#8a8a8a` / `#888`.
- Surfaces: white, pale-grey `#f8f8f8`; pastel section fills `#f2f1f6`, `#dbe5f2`, `#fcf6f6`,
  `#f1f6f5`, `#e1f2e6`. Hairlines `#e8e8e8` / `#d6d6d6`. Nav pill `#e8e8e8`. Dark footer/CTA
  `#2b2b2b` / `#10101e`.
- **Signature gradient** (green → periwinkle → coral) appears at most once per page.

**Typography**
- Display/headings: **Cabinet Grotesk** (weight 400–500; headings are NOT bold — `font-weight: normal`).
- UI/body: **Helvetica Neue LT Pro** — 45 Lt (light body), 55 Roman (body/labels), 65 Md
  (nav/buttons), 63 MdEx (small label chips only).
- Scale: section titles 32px/40px; service hero h1 34px; listing/banner heroes 48–56px; card
  title 20px; body 16px/30; small 13–14px. Root 20px. Min 24px on slides if reused for decks.
- A legacy global rule forced `h2 → MdEx`; it was changed to **Cabinet Grotesk** so all
  headings match. Keep headings in Cabinet Grotesk; reserve MdEx for small label chips.

**Geometry / shadow / motion**
- Radii: pill `50px` (buttons/nav), chip `32px`, card `20px`, media `24px`, tech card `14px`,
  nav item `15px`, circle `50%`. CTO swoosh `20px 20px 110px 20px`. Hero video `24px 24px 0 0`.
- Shadows: card `0 4px 6px rgba(0,0,0,.10)` → hover `0 4px 8px`; float `0 0 15px /.20`;
  drawer `-6px 0 24px /.25`.
- Motion: `0.3s ease` hovers; arrows nudge `translateX`; dropdown `rotateX` 90°→0° reveal;
  mobile menu `scaleY` from top. Honor `prefers-reduced-motion`.

## Assets
- **Fonts** (`assets/fonts/`, `assets/fonts.css`): Cabinet Grotesk + Helvetica Neue LT Pro,
  self-hosted woff/woff2/ttf. Ensure you hold redistribution licenses.
- **Icons** (`assets/icons/`, `assets/icons/social/`): single-color line SVGs (arrows, check,
  star, close, down-arrow, social marks). Note `down-arrow.svg` is a green right-chevron
  rotated in CSS. Substitute thin-stroke (Lucide/Feather) for any missing icon; keep the
  single-color + hover-nudge treatment and flag the substitution.
- **Logos** (`assets/logos/`), **images** (`assets/images/`): brand background
  (`what-we-build-bg*.png`), favicons, OG images, and **local raster placeholders**
  (`work.png`, `updates.png`, `career.png`, `cs-*.png`, `sd-*.png`, `service-card-*.png`).
- **Remote media:** hero/service videos from `files.sogody.co.uk`; case-study / article /
  service-photo imagery and client logos from **Sanity CDN**
  (`cdn.sanity.io/images/3hfxs7a8/production/…`). These resolve only with network access.
- **AI capability illustrations:** inline SVG in `pages/service-illustrations.jsx`.

## Known caveats (read before publishing)
See `PIXEL_PARITY.md` and `CONTENT_PROGRESS.md` (copied into this bundle) for the full status.
Highlights:
- **Asset gaps:** card imagery for some case studies / articles / service cards uses local
  placeholders (`work.png` / `updates.png`) because the real URLs live only in Sanity. Pull
  the real images from the CMS (or the Gatsby `page-data/*.json`) when wiring up content.
- **Content completeness:** `CASE_STUDIES` (~10 of ~35 live) and `UPDATES` (~8 of ~50 live)
  are partial; some bodies are summaries. Privacy & Terms are verbatim. The
  **customer-experience** service-detail copy (hero/descriptions/process/most tech) is
  **best-effort** — verify against the live page before shipping.
- **Two shell stacks** exist (see Architecture) — unify them in the real codebase; prefer the
  `src-*` versions as the faithful mirror.
- **Verification-env quirk (not a bug):** in a headless iframe, IntersectionObserver/scroll
  events don't fire and transitions freeze at start values; force-finish with
  `document.querySelectorAll('.scroll-show').forEach(el => { el.classList.add('show'); el.getAnimations().forEach(a => a.finish()); })`. Normal browsers behave correctly.

## File map
```
design_handoff_sogody_full_site/
├── README.md                  ← this file
├── PIXEL_PARITY.md            ← architecture + per-page parity status + asset gaps
├── CONTENT_PROGRESS.md        ← content port progress (case studies / articles / legal)
├── *.html                     ← 16 page entries (see Pages above)
├── deviceCheck.js             ← matchMedia mobile/tablet helper
├── assets/
│   ├── bootstrap.min.css, fonts.css, style.css
│   ├── fonts/                 ← Cabinet Grotesk + Helvetica Neue LT Pro
│   ├── icons/ (+ social/)     ← line-SVG icon set
│   ├── images/ (+ networks/, social-icons/)
│   ├── logos/, svgs/, scss/   ← scss/ = original SCSS sources (reference)
├── styles/
│   ├── main-compiled.css      ← compiled site SCSS (load this)
│   ├── components-compiled.css← compiled component SCSS (load this)
│   ├── site.css, sogody.css, pages.css, service-detail.css, components-compiled.css, ds.css
│   └── tokens/                ← token CSS (reference)
├── components/
│   ├── data.jsx               ← content model (window.SogodyData) ← the CMS schema shape
│   ├── src-kit.jsx, src-header.jsx, src-shell.jsx   ← faithful repo mirror (home/services)
│   ├── kit.jsx, shell.jsx, pagekit.jsx              ← lighter recreation (most pages)
│   └── *.js                   ← 1:1 references of the real repo src/components/* (read-only ref)
└── pages/
    ├── home-sections.jsx, home-main.jsx             ← index.html
    ├── services-sections.jsx, services-main.jsx     ← services.html
    ├── service-detail-main.jsx, service-detail-data.jsx, service-illustrations.jsx ← service*.html
    ├── work.jsx, case-study.jsx                     ← work.html, case-study.html
    ├── company.jsx, careers.jsx, career.jsx, contact.jsx
    ├── updates.jsx, update.jsx, privacy.jsx, terms.jsx, notfound.jsx
```
> `components/*.js` are read-only mirrors of the real `src/components/*` (e.g. `Header.js`,
> `Footer.js`, `MainBanner.js`, `ProjectDetails.js`, plus `content.json`, `modules.js`,
> `rich-text.js`). They are NOT loaded by the HTML — they're there so a developer can diff the
> recreation against the original repo source. The active page code is the `.jsx` files.
