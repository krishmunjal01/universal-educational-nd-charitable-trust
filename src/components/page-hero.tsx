import { cn } from "@/lib/utils";

interface PageHeroProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Full-bleed photographic hero shared by every inner page.
 * Deep-green gradient overlay keeps ivory text contrast-checked.
 */
export function PageHero({ image, imageAlt, eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[440px] items-end overflow-hidden bg-forest-deep md:min-h-[540px]",
        className,
      )}
    >
      <img
        src={image}
        alt={imageAlt}
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/45 to-forest-deep/20"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-40 md:px-10 md:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/80">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight text-ivory md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/90 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
