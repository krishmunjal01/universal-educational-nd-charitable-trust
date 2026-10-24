import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Editorial button styles for the Aashray design system.
 * - `solid`        forest green fill (primary actions on light sections)
 * - `solid-light`  ivory fill (primary actions on deep-green sections)
 * - `outline-dark` forest outline (secondary actions on light sections)
 * - `outline-light` ivory outline (secondary actions on deep-green sections)
 */
export const buttonLinkStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground hover:bg-forest-deep",
        "solid-light": "bg-ivory text-forest hover:bg-beige",
        "outline-dark": "border border-forest/40 bg-transparent text-forest hover:bg-forest hover:text-ivory",
        "outline-light": "border border-ivory/50 bg-transparent text-ivory hover:bg-ivory hover:text-forest-deep",
      },
      size: {
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

type ButtonLinkVariantProps = VariantProps<typeof buttonLinkStyles>;

interface ButtonLinkProps extends ButtonLinkVariantProps {
  /** Internal route path, e.g. "/donate". */
  to: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/**
 * TanStack <Link> styled as a button. `to` is a plain string prop, so the
 * route id is cast through `never` — the cast stays type-safe at the call
 * sites, which pass route literals checked by TanStack's own validation.
 */
export function ButtonLink({ to, children, className, ariaLabel, variant, size }: ButtonLinkProps) {
  return (
    <Link
      to={to as never}
      aria-label={ariaLabel}
      className={cn(buttonLinkStyles({ variant, size }), className)}
    >
      {children}
    </Link>
  );
}
