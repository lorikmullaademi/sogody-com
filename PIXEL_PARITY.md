# Pixel-parity port — sogody.com → static clone

Goal: 100% page-by-page, pixel-by-pixel, asset-by-asset parity with live
sogody.com, built from the real repo source (Sogody/sogody.com@main).

## Architecture (the parity stack)
Every ported page loads, in order:
1. `assets/bootstrap.min.css` — repo's customized bootstrap (incl. .scroll-show rules at end)
2. `assets/fonts.css` — real @font-face set (fonts in assets/fonts/)
3. `assets/style.css` — repo global css
4. swiper-bundle CSS+JS (CDN) — for carousels
5. `styles/main-compiled.css` — compiled from assets/scss/main.scss (42 files)
6. `styles/components-compiled.css` — compiled component-level SCSS (18 files)

Compiled with a custom quote-aware SCSS compiler (run_script): variables,
nesting, parameterless mixins, @content media mixins (mobile<768 / tablet /
desktop>=1024), nested @keyframes, interpolated arithmetic. Zero warnings.
NOTE: if SCSS needs recompiling, the compiler script must be rebuilt — see
chat history m0153 or hand-edit the compiled CSS.

JSX mirrors with EXACT source DOM (bootstrap utility classes included):
- `components/src-kit.jsx` — ExploreLink, CircularButton, InitKoalendar,
  ClientsCarousel, KoalendarSidebar (cal.com iframe), mapPath (gatsby→.html)
- `components/src-header.jsx` — Header (BS4 navbar markup), ServicesDropdown, ContactNav
- `components/src-shell.jsx` — Footer, SrcLayout (scroll-show reveal w/ iframe fallback)

## Page status
- [x] index.html — home: MainBanner, WhereWeComeIn, Services, WhatWeBuild,
      CaseStudies (Swiper), BookMeetHomePage, Updates. 1:1 vs src/pages/index.js.
- [ ] services.html — port to src-* stack (src/pages/services.js: ServicesPageBanner?,
      ServicesCategories, OptimizedServices, faq, PhotoGrid, BookMeetHomePage)
- [ ] service.html — single service (Sanity modules via utils/componentMap.js +
      templates/page.js — check repo nodes/ for content)
- [ ] work.html — src/pages/work.js (BannerWork, CaseStudiesLoad)
- [ ] case-study.html — templates/case-studies-template.js + ProjectDetails
- [ ] updates.html / update.html — src/pages/updates.js + templates/updates-template.js
- [ ] careers.html / career.html — src/pages/careers.js + templates/career-template.js
- [ ] company.html — src/pages/company.js (BannerCompany, CompanyStaff, CEOQuote, PhotoGrid)
- [ ] contact.html — src/pages/contact.js (ContactUs, Testimonials, FAQ)
- [ ] privacy.html / terms.html — port to src stack (content already verbatim)
- [ ] 404.html

## Asset gaps (placeholders in use)
- Service card images + case-study card images + update card images: real URLs
  live ONLY in Sanity CMS (project 3hfxs7a8). NEXT TURN: web_search for the page,
  then web_fetch https://sogody.com/page-data/index/page-data.json (and
  /page-data/work/, /page-data/services/ etc.) — Gatsby serves full static-query
  JSON incl. all image URLs. (web_fetch quota exhausted turn of 2026-06-10.)
- AnnouncementBanner content (showOnAllPages=false on live — not rendered)

## Fixed (2026-06-10 pass 2)
- SCSS compiler v4: `#{...}` interpolation no longer parsed as block braces —
  ALL @include mobile/tablet/desktop media rules were broken before (hundreds of
  `selector )` garbage rules; desktop navbar/CTA/responsive styles missing).
  464 media rules now compile. THE COMPILER LIVES IN CHAT m0153/m0202 — rebuild
  from PIXEL_PARITY notes if needed again.
- Social icons: import had stripped `<style>.a{fill:#67be83}</style>` from defs;
  re-added as inline fill attrs. Footer icons green = matches live (verified vs
  live fetch).
- Calendar: KoalendarSidebar now uses official cal.com embed.js inline embed
  (calLink sogody/30min, theme light, month_view) — same as live CalEmbed.js.
  Old direct iframe to cal.com was blocked by frame headers.

## Verification-environment quirks (NOT bugs)
The agent's hidden iframe: IntersectionObserver + window scroll events never
fire, CSS transitions freeze at start values. SrcLayout has a polling fallback
for reveal. When screenshotting, force-finish:
`document.querySelectorAll('.scroll-show').forEach(el => { el.classList.add('show'); el.getAnimations().forEach(a => a.finish()); })`
User-visible preview behaves normally.
