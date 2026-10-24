import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface ClosingCtaProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  tertiaryCta?: { label: string; to: string };
  /** "solid" = deep-green band; "image" = photographic band. */
  variant?: "solid" | "image";
  image?: string;
  imageAlt?: string;
}

/**
 * Deep-green closing call to action shared by the pages. The image variant
 * backs the band with a photograph under a heavy overlay.
 */
export function ClosingCta({
  eyebrow = "Get Involved",
  title,
  description,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  variant = "solid",
  image,
  imageAlt,
}: ClosingCtaProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "image" ? "bg-forest-deep" : "bg-forest-deep",
      )}
    >
      {variant === "image" && image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-forest-deep/80" />
        </>
      ) : null}
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/70">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-ivory md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/85">
              {description}
            </p>
          ) : null}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink to={primaryCta.to} variant="solid-light" size="lg">
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink to={secondaryCta.to} variant="outline-light" size="lg">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
            {tertiaryCta ? (
              <ButtonLink to={tertiaryCta.to} variant="outline-light" size="lg">
                {tertiaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
