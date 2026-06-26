# Content port progress — full grind (option A)

Goal: all ~35 case studies + ~50 articles + exact privacy & terms legal text, pulled
verbatim from live sogody.com into `components/data.jsx` (CASE_STUDIES / UPDATES) and
`pages/privacy.jsx` / `pages/terms.jsx`.

Constraints: ~3 web_fetch + ~3 web_search per turn; listing pages lazy-load (can't
enumerate all slugs at once). So this runs across many turns. Commit content as it
arrives, then snip raw fetch output.

## Legal
- [x] Privacy — verbatim text in `pages/privacy.jsx` (done)
- [x] Terms — verbatim text in `pages/terms.jsx` (done, fetched from /terms/)

## Service detail pages (pages/service.jsx + SERVICE_DETAIL in data.jsx)
- [x] technology-engineering — full carbon copy (hero, capabilities, process, tech)
- [x] ai-solutions — full carbon copy (hero, capabilities, process, tech)
- [~] customer-experience — structure + verified capability titles & Adobe tech;
      hero/descriptions/process/rest of tech are BEST-EFFORT — verify vs live page

## Case studies (target 35) — known slugs
Have entry in data.jsx (10):
- [x] smart-home-app-development (MOD) — summary only, expand
- [x] biopharma-startup-ai-transformation — summary only, expand
- [x] development-agricultural-management — summary only, expand
- [x] from-paper-to-document-management (Kosovo Government) — summary only, expand
- [x] boosting-unilevers-email-subscription-campaign — GOOD body
- [x] launching-the-samsung-s22-series-through-our-new-product-testful — GOOD body
- [x] the-multinational-consumer-goods-company-s-biggest-e-commerce-platform (Unilever) — GOOD body
- [x] global-hygiene-brand (Lifebuoy) — GOOD body
- [x] creating-a-digital-experience-for-knorr — GOOD body
- [x] aov-increases-through-conversion-rate-optimization — summary only, expand

Discovered, NOT yet in data.jsx:
- [x] revitalizing-yippy-lingos-ecommerce-sogodys-headless-solution-for-enhanced-performance (YippyLingo) — added w/ body
- seal-skin-covers / spell & sell (mentioned on LinkedIn — find slug)
- ~24 more to enumerate from /work/ "Show More" pagination

## Updates / articles (target 50) — known slugs
Have entry in data.jsx (8):
- [x] from-employee-1-to-co-founder-the-8-year-evolution-of-a-startup-journey
- [x] WhySogody2030
- [x] delving-into-our-outsourcing-models (Martech pt.2) — GOOD body
- [x] sogodys-experience-in-outsourcing-martech-solutions (Martech pt.1)
- [x] marking-the-4th-anniversary-of-sogody — GOOD body
- [x] sogody-at-the-diaspora-symposium — GOOD body
- [x] how-ai-is-revolutionizing-ui-and-ux-design
- [x] sogody-winter-summit-23-ai-in-action — GOOD body

Discovered, NOT yet in data.jsx:
- [x] preventing-user-burnout — added w/ body
- [x] our-experience-working-with-dxi-and-google-optimize — added w/ body
- ux-friction-how-to-avoid-the-mistakes-and-optimize-your-ux (referenced; find/fetch)
- ~37 more to enumerate from /updates/ "Show More" pagination

## Enumeration strategy
- /work/ and /updates/ index pages expose first 4 cards + footer links only.
- Need to fetch category-filtered or paginated variants, or discover slugs via
  cross-links inside articles (each article/case study links to related ones).
- Each fetched detail page surfaces related slugs → snowball enumeration.
