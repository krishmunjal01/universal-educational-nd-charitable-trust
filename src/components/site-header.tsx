import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";

function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-2.5"
      aria-label={`${site.name} — home`}
    >
      <span
        aria-hidden="true"
        className={cn("h-2.5 w-2.5 rounded-full", onDark ? "bg-olive" : "bg-forest")}
      />
      <span
        className={cn(
          "font-serif text-2xl font-semibold tracking-wide",
          onDark ? "text-ivory" : "text-forest",
        )}
      >
        {site.name}
      </span>
    </Link>
  );
}

/**
 * Shared site header. Desktop shows an inline nav; on mobile a full-screen
 * menu dialog opens (focus moved in, Escape closes, scroll locked, focus
 * returns to the toggle on close, closes on route change).
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  // Close whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Dialog behaviour while open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      toggleRef.current?.focus();
    };
  }, [open]);

  const navLinkClasses = (isActive: boolean) =>
    cn(
      "text-sm font-medium transition-colors hover:text-forest",
      isActive ? "text-forest underline decoration-olive decoration-2 underline-offset-8" : "text-muted-foreground",
    );

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 md:h-20 md:px-10">
        <div className="flex min-w-0 items-center gap-3">
          <Wordmark />
          <span className="hidden truncate text-xs text-muted-foreground lg:inline">
            {site.tagline}
          </span>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className={navLinkClasses(
                link.to === "/" ? pathname === "/" : pathname.startsWith(link.to),
              )}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink to="/donate" size="md" className="px-5 py-2.5">
            Donate
          </ButtonLink>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-forest transition-colors hover:bg-beige md:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-forest-deep md:hidden"
        >
          <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6">
            <Wordmark onDark />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ivory transition-colors hover:bg-forest"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="border-b border-ivory/10 py-4 font-serif text-3xl text-ivory transition-colors hover:text-olive"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8">
              <ButtonLink to="/donate" variant="solid-light" size="lg" className="w-full">
                Donate
              </ButtonLink>
            </div>
          </nav>
          <p className="px-6 pb-8 text-xs text-ivory/60">
            {site.tagline}
          </p>
        </div>
      ) : null}
    </header>
  );
}
