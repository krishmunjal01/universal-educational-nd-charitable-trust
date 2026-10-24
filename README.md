# Universal Educational & Charitable Trust — Official Website

> **"Small Actions. Real Change."**  
> An editorial, photography-driven web application for the Universal Educational & Charitable Trust, built with modern full-stack web standards, transparent ethics, and responsive design.

---

## 1. Project Overview

The **Universal Educational & Charitable Trust** is a dedicated non-governmental organization working alongside underserved communities to build a fairer, healthier, and more sustainable future. The organization focuses on four key pillars:

1. **Education & Learning:** Supporting grassroots schooling, foundational literacy, and student empowerment.
2. **Sustainable Livelihoods:** Promoting community self-reliance, vocational skills, and micro-enterprise development.
3. **Health & Wellbeing:** Facilitating access to preventative healthcare, hygiene awareness, and nutrition.
4. **Environmental Stewardship:** Fostering local ecological restoration, clean water initiatives, and sustainable living practices.

### Visual Identity & Ethical Approach

- **Refined Editorial Direction:** Designed with an editorial, magazine-grade layout inspired by timeless print publications. It pairs classical serif display typography with clean modern sans-serif body text, generous whitespace, and an earthy, organic color palette.
- **Ethical & Honest Disclosures:** Unverified reference figures, statistics, and stories are explicitly marked as placeholders in the code (`verified: false` in `src/content/site.ts`). All current imagery is transparently disclosed as illustrative placeholder photography until verified institutional photographs are published.
- **Responsible Demonstration Donation Flow:** The `/donate` flow provides a complete UI demonstration without accepting unverified payments until statutory registrations and payment gateways (e.g. Razorpay / UPI) are officially approved and integrated.

---

## 2. Tech Stack

| Layer                     | Technologies                                                                            | Version / Reference                                                        |
| :------------------------ | :-------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| **Framework & Server**    | [TanStack Start](https://tanstack.com/start) + [Nitro](https://nitro.unjs.io/)          | `@tanstack/react-start` `1.168.60`, `nitro` `3.0.260603-beta`              |
| **UI Library**            | [React 19](https://react.dev/)                                                          | `react` `19.2.0`, `react-dom` `19.2.0`                                     |
| **Styling & Design**      | [Tailwind CSS v4](https://tailwindcss.com/)                                             | `@tailwindcss/vite` `4.2.1`, OKLCH tokens in `src/styles.css`              |
| **Routing & Navigation**  | [TanStack Router](https://tanstack.com/router)                                          | `@tanstack/react-router` `1.170.41`, file-based routing in `src/routes/`   |
| **Server State**          | [TanStack Query](https://tanstack.com/query)                                            | `@tanstack/react-query` `5.101.1`                                          |
| **Icons & Notifications** | Lucide React + Sonner                                                                   | `lucide-react` `0.575.0`, `sonner` `2.0.7`                                 |
| **Forms & Validation**    | Zod + React Hook Form                                                                   | `zod` `3.25.76`, `react-hook-form` `7.71.2`, `@hookform/resolvers` `5.2.2` |
| **Database & ORM**        | [Supabase](https://supabase.com/) PostgreSQL + [Drizzle Kit](https://orm.drizzle.team/) | `@supabase/supabase-js` `2.118.0`, `drizzle-kit` `0.x`                     |
| **Tooling & Build**       | Vite 8 + TypeScript                                                                     | `vite` `8.1.5`, `typescript` `5.8.3`                                       |
| **Testing**               | Vitest + Testing Library                                                                | `vitest` `4.1.10`, `@testing-library/react` `16.0.0`, `jsdom` `20.0.3`     |
| **Code Quality**          | ESLint + Prettier                                                                       | `eslint` `9.32.0`, `prettier` `3.7.3`                                      |

---

## 3. Design System & Typography

The design system is defined in `src/styles.css` using modern CSS variables and Tailwind CSS v4 `@theme inline` tokens.

### Typography

- **Headings & Display:** `Cormorant Garamond` (`--font-serif`) — Loaded via Google Fonts in `src/routes/__root.tsx`. Used for brand wordmark, page hero headlines, and storytelling pull quotes.
- **Body & Controls:** `Inter` (`--font-sans`) — Loaded via Google Fonts. Used for navigation links, body copy, statistics, form inputs, and buttons.

### Color Tokens (OKLCH Palette)

| Token Name           | CSS Custom Property  | OKLCH Value                | Hex Reference | Primary Purpose                                            |
| :------------------- | :------------------- | :------------------------- | :------------ | :--------------------------------------------------------- |
| **Forest Green**     | `--forest`           | `oklch(0.327 0.051 173.1)` | `#123D32`     | Primary brand accent, primary CTA buttons, major titles    |
| **Deep Green**       | `--forest-deep`      | `oklch(0.277 0.043 175.4)` | `#0B2F27`     | High-impact dark sections, mobile nav dialog, site footer  |
| **Warm Ivory**       | `--ivory`            | `oklch(0.967 0.011 89.7)`  | `#F7F4EC`     | Default page background, light cards, inverted button text |
| **Soft Beige**       | `--beige`            | `oklch(0.920 0.019 86.1)`  | `#EAE4D7`     | Alternating section backgrounds, card hover states         |
| **Muted Olive**      | `--olive`            | `oklch(0.639 0.038 123.6)` | `#879077`     | Programme index tags, decorative indicator dots, accents   |
| **Charcoal**         | `--charcoal`         | `oklch(0.279 0.011 139.4)` | `#262A25`     | High-contrast dark text, dark mode surfaces                |
| **Sand**             | `--sand`             | `oklch(0.935 0.014 86.9)`  | `#EFECE3`     | Warm intermediate neutral surfaces                         |
| **Muted Foreground** | `--muted-foreground` | `oklch(0.518 0.016 124.8)` | `#666A60`     | Secondary copy, metadata, photo captions, timestamps       |

---

## 4. Project Structure

```text
universal-educational-nd-charitable-trust/
├── drizzle/                          # Database schema & Drizzle migrations
│   ├── migrations/                   # SQL migration scripts (0000_create_form_tables.sql)
│   └── schema.ts                     # Drizzle ORM schema definitions for PostgreSQL
├── public/                           # Static public assets
│   ├── favicon.svg                   # Brand 'U' lettermark SVG favicon
│   ├── favicon.ico                   # Standard browser favicon fallback
│   └── robots.txt                    # Search crawler rules
├── src/
│   ├── assets/                       # Illustrative editorial photography placeholders
│   ├── components/                   # Modular UI components
│   │   ├── forms/                    # Form components (volunteer, partnership, contact)
│   │   ├── ui/                       # Radix UI and accessible primitives (dialog, button, sonner)
│   │   ├── button-link.tsx           # Editorial styled button component with CVA variants
│   │   ├── closing-cta.tsx           # Reusable editorial closing banner
│   │   ├── framed-image.tsx          # Offset framed image treatment
│   │   ├── page-hero.tsx             # Standard hero section component
│   │   ├── reveal.tsx                # IntersectionObserver scroll reveal component
│   │   ├── site-footer.tsx           # Deep-green responsive site footer
│   │   └── site-header.tsx           # Responsive brand header & accessible mobile dialog
│   ├── content/
│   │   └── site.ts                   # Centralized single source of truth for site copy & metadata
│   ├── integrations/
│   │   └── supabase/                 # Supabase client, server admin client, & auth middleware
│   │       ├── client.ts             # Browser & SSR Supabase client (lazy Proxy initialization)
│   │       ├── client.server.ts      # Server-only Supabase admin client (service_role)
│   │       ├── cron-auth.ts          # Bearer token verification helper for cron jobs
│   │       └── types.ts              # Generated TypeScript database definitions
│   ├── lib/                          # Core application utilities & logic
│   │   ├── forms.functions.ts        # TanStack Start server functions for form submissions
│   │   ├── schemas.ts                # Zod validation schemas for forms
│   │   └── utils.ts                  # Class name merge utility (clsx + tailwind-merge)
│   ├── routes/                       # TanStack Router file-based route definitions
│   │   ├── __root.tsx                # Root route (HTML document shell, head metadata, fonts)
│   │   ├── index.tsx                 # Home page (/)
│   │   ├── about.tsx                 # About Us page (/about)
│   │   ├── work.tsx                  # Our Work & Programmes page (/work)
│   │   ├── impact.tsx                # Impact philosophy & stories (/impact)
│   │   ├── get-involved.tsx          # Volunteer & Partnership interest (/get-involved)
│   │   └── donate.tsx                # Demonstration donation selection (/donate)
│   ├── test/                         # Test suites & setup (Vitest + JSDOM)
│   │   ├── app-routing.test.tsx      # Route matching & navigation tests
│   │   └── setup.ts                  # Test environment matchMedia / polyfills
│   ├── routeTree.gen.ts              # Automatically generated route tree for TanStack Router
│   ├── router.tsx                    # TanStack Router initialization
│   ├── server.ts                     # Nitro / Node SSR server entrypoint
│   ├── start.ts                      # TanStack Start client/server runtime bridge
│   └── styles.css                    # Tailwind CSS v4 import, design system tokens
├── drizzle.config.ts                 # Drizzle Kit migration configuration
├── eslint.config.js                  # ESLint flat config
├── package.json                      # Project dependencies & npm scripts
├── vite.config.ts                    # Vite configuration (TanStack Start, React, Tailwind, Nitro)
└── vitest.config.ts                  # Vitest configuration
```

---

## 5. Routes & Pages

All pages share the global layout (`SiteHeader` and `SiteFooter`) and use TanStack Start file-based routing:

| Route Path      | Source File                   | Status          | Key Features & Sections                                                                                                                                            |
| :-------------- | :---------------------------- | :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`             | `src/routes/index.tsx`        | **Implemented** | Editorial hero, introductory narrative, 4 core programme spotlights, impact counter, illustrative stories, closing CTA.                                            |
| `/about`        | `src/routes/about.tsx`        | **Implemented** | Organization background, mission, vision, 4 core values (Community first, Stewardship, Transparency, Dignity), approach principles.                                |
| `/work`         | `src/routes/work.tsx`         | **Implemented** | Deep-dive into programmes: Education, Sustainable Livelihoods, Health & Wellbeing, Environmental Stewardship. Alternating editorial layouts.                       |
| `/impact`       | `src/routes/impact.tsx`       | **Implemented** | Philosophy of community-measured impact, transparency disclosures, illustrative photography reflection gallery.                                                    |
| `/get-involved` | `src/routes/get-involved.tsx` | **Implemented** | Interactive pathways (Volunteer, Partner, Donate), expression of interest form with client-side Zod validation and server function submission.                     |
| `/donate`       | `src/routes/donate.tsx`       | **Implemented** | Demonstration donation flow with preset/custom rupee amounts, frequency selection (one-time vs recurring), transparent disclaimers on pending gateway integration. |
| `/contact`      | _(Planned)_                   | **In Roadmap**  | Direct inquiry form (form component available in `src/components/forms/contact-form.tsx`), verified office address, phone, and official contact channels.          |

---

## 6. Getting Started (Local Development)

### Prerequisites

- **Node.js:** `v20.x` or `v24.x` (tested on Node `v24.14.0`)
- **Package Manager:** `npm` (`v10.x` or `v11.x`, tested on `v11.9.0`)

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd universal-educational-nd-charitable-trust
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables (optional for local UI testing):**
   Copy the example environment configuration or create a `.env` file in the project root:

   ```bash
   # Optional: Local development works out-of-the-box without Supabase credentials
   touch .env
   ```

   _(See the [Environment Variables](#7-environment-variables) section below for details)._

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

5. **Run tests:**

   ```bash
   npm test
   ```

6. **Build for production:**
   ```bash
   npm run build
   ```

---

## 7. Environment Variables

The application is architected so that **all frontend routes, layouts, and styles render cleanly even if no backend credentials are provided**. The Supabase client uses a lazy proxy that initializes on demand.

To connect a live Supabase backend and run database migrations, define the following variables in `.env`:

| Variable Name                   | Scope             | Required | Purpose                                                                                                                                                                      |
| :------------------------------ | :---------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_SUPABASE_URL`             | Client (Browser)  | Optional | Public Supabase project URL (e.g. `https://your-project.supabase.co`). Bundled by Vite into client code.                                                                     |
| `SUPABASE_URL`                  | Server (SSR)      | Optional | Supabase project URL used by Nitro SSR and TanStack Start server functions.                                                                                                  |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Client (Browser)  | Optional | Public publishable / anon key for client-side queries.                                                                                                                       |
| `SUPABASE_PUBLISHABLE_KEY`      | Server (SSR)      | Optional | Public publishable / anon key used in server functions to insert form submissions under write-only RLS.                                                                      |
| `SUPABASE_SERVICE_ROLE_KEY`     | Server Only       | Optional | Secret service-role key that bypasses RLS. Used exclusively in `src/integrations/supabase/client.server.ts` for administrative operations. **Never exposed to client code.** |
| `DATABASE_URL`                  | Tooling (Drizzle) | Optional | PostgreSQL connection string used by `drizzle-kit` to apply database migrations (`drizzle.config.ts`).                                                                       |
| `CRON_SECRET`                   | Server (Cron)     | Optional | Authorization bearer token for securing scheduled background maintenance handlers (`src/integrations/supabase/cron-auth.ts`).                                                |
| `CRON_SECRET_PREVIOUS`          | Server (Cron)     | Optional | Prior authorization token for zero-downtime rotation of `CRON_SECRET`.                                                                                                       |

---

## 8. Available Scripts

All scripts are configured in `package.json`:

```bash
# Start Vite development server with HMR and SSR
npm run dev

# Compile TypeScript and build production Nitro SSR bundle
npm run build

# Build using Vite development mode
npm run build:dev

# Run local preview of the production Nitro build
npm run preview

# Execute ESLint across the codebase
npm run lint

# Format all files using Prettier
npm run format

# Run test suite once with Vitest
npm test

# Run Vitest in interactive watch mode
npm run test:watch
```

---

## 9. Database & Forms Architecture

Form submissions are stored in Supabase PostgreSQL and managed with Drizzle Kit migrations (`drizzle/migrations/0000_create_form_tables.sql`).

### 1. Database Tables

- **`public.volunteer_applications`**
  - Captures volunteer inquiries from `/get-involved`.
  - Schema: `id` (uuid), `created_at` (timestamptz), `full_name` (text), `email` (text), `phone` (text), `interest` (text), `skills` (text), `availability` (text), `consent` (boolean), `status` (text).

- **`public.partnership_inquiries`**
  - Captures corporate, CSR, and institutional collaboration requests from `/get-involved`.
  - Schema: `id` (uuid), `created_at` (timestamptz), `organisation_name` (text), `contact_name` (text), `email` (text), `partnership_type` (text), `message` (text), `status` (text).

- **`public.contact_messages`**
  - Captures general inquiries from the planned `/contact` page.
  - Schema: `id` (uuid), `created_at` (timestamptz), `name` (text), `email` (text), `phone` (text), `subject` (text), `message` (text), `status` (text).

### 2. Write-Only Public Row Level Security (RLS)

- **Insert-Only for Public Users:** Each table grants `INSERT` permissions to `anon` and `authenticated` roles with `WITH CHECK (true)`.
- **Zero Public Reads:** No `SELECT` policies exist for public roles. Once a user submits their personal data or message, it cannot be read back through the client API, protecting submitter privacy.
- **Administrative Access:** Only the `service_role` (used in server-side administrative endpoints) has permission to read and manage submitted rows.

### 3. TanStack Start Server Functions

- All submissions are processed through type-safe server functions in `src/lib/forms.functions.ts` (`submitVolunteerApplication`, `submitPartnershipInquiry`, `submitContactMessage`).
- Inputs are validated server-side using Zod schemas (`src/lib/schemas.ts`) before being inserted into PostgreSQL.
- Handlers use a transient client with the publishable key, ensuring no user sessions or authorization tokens leak across requests.

---

## 10. License & Maintenance

This repository is maintained for the **Universal Educational & Charitable Trust**.  
All design tokens, layout components, and centralized copy must adhere to the standards outlined in `AGENTS.md` and `src/content/site.ts`.
