import { Link } from "@tanstack/react-router";

import { navLinks, programs, site } from "@/content/site";

/**
 * Shared deep-green footer. Contact details and social links are
 * PLACEHOLDERS from src/content/site.ts and are labelled as such.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr_1fr_1.4fr] md:px-10">
        <div className="min-w-0">
          <p className="font-serif text-3xl font-semibold">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/75">{site.mission}</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-olive">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer — explore">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-ivory/85 transition-colors hover:text-olive">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/donate" className="text-sm text-ivory/85 transition-colors hover:text-olive">
                Donate
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Footer — programmes">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">Programmes</p>
          <ul className="mt-4 space-y-2.5">
            {programs.map((program) => (
              <li key={program.id}>
                <Link to="/work" className="text-sm text-ivory/85 transition-colors hover:text-olive">
                  {program.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">Contact</p>
          <dl className="mt-4 space-y-2.5 text-sm text-ivory/85">
            <div>
              <dt className="sr-only">Email</dt>
              <dd>{site.contact.email}</dd>
            </div>
            <div>
              <dt className="sr-only">Phone</dt>
              <dd>{site.contact.phone}</dd>
            </div>
            <div>
              <dt className="sr-only">Address</dt>
              <dd>{site.contact.address}</dd>
            </div>
            <div>
              <dt className="sr-only">Social media</dt>
              <dd>{site.contact.socialNote}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-ivory/55 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>
            Statistics, stories, and contact details marked as placeholders are pending confirmation
            by the organisation.
          </p>
        </div>
      </div>
    </footer>
  );
}
