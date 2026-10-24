# Aashray — Premium Editorial NGO Website

Build a seven-page, production-oriented NGO website with a shared design system,
centralized content data, working forms backed by Lovable Cloud, and a donation
flow prepared (not faked) for payment-gateway integration.

## 1. Design System

**Tokens in `src/styles.css`** (oklch conversions of the given hex values):

| Token | Hex |
|---|---|
| forest (primary) | #123D32 |
| deep-green | #0B2F27 |
| ivory (background) | #F7F4EC |
| beige | #EAE4D7 |
| olive | #879077 |
| charcoal | #262A25 |
| muted-text | #666A60 |

**Typography:** Cormorant Garamond (serif display) + Inter (sans), loaded via
`<link>` in `src/routes/__root.tsx`, referenced through `@theme` font tokens.
Serif for headlines/story statements, sans for nav, body, stats, labels, forms.

**Shared primitives:** header, footer, hero shells, section wrappers, editorial
row layouts, buttons (solid forest / outline ivory), form fields, image frames
with subtle organic decoration, reveal-on-scroll utility (IntersectionObserver +
CSS, disabled under `prefers-reduced-motion`).

**Visual rhythm:** alternate ivory / beige / photographic / deep-green sections;
no repeated same-color banding; minimal borders, no oversized rounded cards.

## 2. Centralized Content Data

`src/content/site.ts` — single editable source for: nav, contact placeholders,
statistics (10K+ / 42 / 18, each flagged `verified: false` and rendered with a
subtle "pending confirmation" affordance in data comments), four programs
(Education, Sustainable Livelihoods, Health & Wellbeing, Environment) with
descriptions, key activities, outcome placeholders, team placeholders (marked
placeholder), story placeholders, donation amounts (₹500 / ₹1,000 / ₹2,500).

No invented facts: no founding year, founders, registration numbers, real
emails/phones/social handles, testimonials, or geographic operating claims.
Regions shown only as an illustrative placeholder labeled as such.

## 3. Routes (7 pages, all with unique `head()` metadata)

- `/` Home — hero (child photo right, headline left), impact stats band,
  four editorial program rows (alternating layout, each links to /work),
  full-width quote banner, How You Can Help (3 columns), deep-green closing CTA.
- `/about` — landscape hero, Our Story two-column, three values columns,
  placeholder team section, closing CTA.
- `/work` — community hero, four alternating program sections (image,
  description, key activities, outcome placeholders, CTA to /donate or
  /get-involved), closing CTA.
- `/impact` — panoramic hero, stats, reach section with illustrative
  placeholder map clearly labeled, Stories of Change (accessible horizontal
  scroller with placeholder stories marked as such), three outcomes, photographic
  closing CTA.
- `/get-involved` — volunteers hero, three pathways (Donate / Volunteer /
  Partner with CTAs), volunteer registration form (name, email, optional phone,
  interest, skills, availability, consent), partnership inquiry form, community
  photo section.
- `/donate` — warm child photo hero, donation module on ivory: frequency toggle
  (One-time / Monthly), amount selector (₹500 / ₹1,000 / ₹2,500 / Other with
  working custom input), multi-stage donor flow (amount → details → review →
  gateway), rupee formatting. **No gateway is enabled in this pass**: the final
  step shows an honest "payment integration pending" state instead of simulating
  success. Transparency section without unverified tax/registration claims.
- `/contact` — landscape hero, two-column info placeholders + validated message
  form, editable location placeholder (no fabricated map), footer.

## 4. Backend — Lovable Cloud (enable after plan approval)

Cloud is enabled first; then a migration creates:

- `volunteer_applications`, `contact_messages`, `partnership_inquiries` —
  anon/public INSERT-only via RLS; no public reads. Input validated with zod on
  both client and in server functions before insert.
- Server functions (`createServerFn`) handle submission; UI shows real
  loading / success / error states from actual responses, never fake success.
- Seed data lives in the migration only if needed; no page-load seeding.

## 5. Imagery

AI-generated documentary-style placeholder photography (warm, natural-light,
Indian community scenes — child portrait, rural valley, community work,
volunteers, panoramic landscape, program photos for the four areas) saved under
`src/assets/` and imported. Every image is replaceable; a `PLACEHOLDER.md`
comment in `src/content/site.ts` notes they are placeholders. Generated in
batches of ≤4 per response.

## 6. Performance, Accessibility, SEO

- Lazy-load below-fold images (`loading="lazy"`), fixed aspect-ratio containers
  to avoid layout shift, `srcset`-style sizing where useful.
- Semantic HTML, labeled forms, visible focus rings, contrast-checked tokens,
  reduced-motion support, no animation on critical content.
- Per-route title / description / og tags; og:type per page; no fake structured
  data, reviews, or stats. Relative canonical/og:url.

## 7. Verification

- Build-error log clean; no console errors or horizontal overflow (Playwright
  at desktop + 390px mobile across all seven routes; header menu, program links,
  donation state toggles, and forms exercised).
- Small tests added for the rules that matter: form submissions persist via
  server function with zod validation; donation flow never reports success
  without a gateway; content-data stats carry `verified: false`.
- Placeholder content clearly labeled throughout.
