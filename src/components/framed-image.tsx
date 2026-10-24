import { cn } from "@/lib/utils";

interface FramedImageProps {
  src: string;
  alt: string;
  /** Aspect class for the frame, e.g. "aspect-[4/3]". */
  aspect?: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
}

/**
 * Photograph in a frame with a subtle offset backdrop — the editorial
 * "organic decoration" used across the site. Decor is aria-hidden.
 */
export function FramedImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className,
  imgClassName,
  loading = "lazy",
}: FramedImageProps) {
  return (
    <div className={cn("relative", aspect, className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg bg-beige"
      />
      <div className="img-zoom relative z-10 h-full w-full overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      </div>
    </div>
  );
}
