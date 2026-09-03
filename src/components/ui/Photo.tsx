import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/lib/images";

/**
 * Photography.
 *
 * Two treatments, and no third. A photograph is either an object inside the
 * column — framed, captioned, credited — or it is the ground a section is
 * printed on. Adding a third treatment is how sites end up with photographs
 * that are decoration, and decoration is what the "no filler images" rule
 * exists to prevent.
 *
 * Attribution travels with the picture in both cases, so a credit can never
 * drift away from the image it belongs to.
 */

const ASPECT = {
  "21/9": "aspect-[21/9]",
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
} as const;

export type Aspect = keyof typeof ASPECT;

/**
 * The framed photograph.
 *
 * A rounded plate with a dark caption bar rather than a bare image: the frame
 * is what lets a photograph sit inside an editorial column without reading as
 * a screenshot.
 */
export function Figure({
  photo,
  caption,
  aspect = "16/9",
  priority = false,
  drift = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 1100px, 1400px",
  className = "",
}: {
  photo: Photo;
  /** Overrides the credit line's left half. The photographer is always kept. */
  caption?: ReactNode;
  aspect?: Aspect;
  priority?: boolean;
  /** Drift the image against the scroll. Never for above-the-fold media. */
  drift?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure
      className={`frame group ${className}`}
      data-reveal="media"
      {...(drift ? { "data-drift": "" } : {})}
    >
      <div className={`relative w-full overflow-hidden ${ASPECT[aspect]}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority={priority}
          sizes={sizes}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-sage/20 bg-forest px-5 py-3 text-fine text-on-dark">
        <span className="min-w-0">{caption ?? photo.alt}</span>
        <span className="shrink-0 text-sage-bright">Photo: {photo.photographer}</span>
      </figcaption>
    </figure>
  );
}

/** The compact plate, for grids and tight columns. No caption bar. */
export function FigureMini({
  photo,
  aspect = "4/3",
  className = "",
}: {
  photo: Photo;
  aspect?: Aspect;
  className?: string;
}) {
  return (
    <div className={`frame ${className}`} data-reveal="media">
      <div className={`relative w-full overflow-hidden ${ASPECT[aspect]}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 640px) 100vw, 480px"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

/**
 * The photograph as a section's ground.
 *
 * The picture is painted at full strength and a directional wash is laid over
 * it, chosen for where the type actually sits — that is what keeps it reading
 * as photography rather than as a murky tint. The band beneath paints an
 * opaque forest, so text still resolves against a real dark colour for a
 * contrast checker and for assistive technology.
 *
 * The image keeps its alt text: it is the section's illustration, not a
 * texture.
 */
export function PhotoGround({
  photo,
  scrim = "even",
  priority = false,
  drift = true,
  position,
}: {
  photo: Photo;
  /**
   *   hero   near-opaque left, clear right — a hero's single column
   *   start  dark across the left three quarters, for content held left
   *   end    the same, mirrored
   *   even   an even wash, for type that sits anywhere in the frame
   *   panel  a light wash, because a translucent panel carries the contrast
   */
  scrim?: "hero" | "start" | "end" | "even" | "panel";
  priority?: boolean;
  drift?: boolean;
  /** Focal point, when the subject is not centred. */
  position?: string;
}) {
  return (
    <div className="photo-band-media" data-scrim={scrim} {...(drift ? { "data-drift": "" } : {})}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        priority={priority}
        sizes="100vw"
        className="h-full w-full object-cover"
        {...(position ? { style: { objectPosition: position } } : {})}
      />
    </div>
  );
}

/**
 * A section carried on a photograph. Handles the band, the ground and the
 * container, so a template never has to remember the `photo-band` contract.
 */
export function PhotoSection({
  photo,
  children,
  scrim = "even",
  priority = false,
  align = "full",
  id,
  className = "",
  position,
}: {
  photo: Photo;
  children: ReactNode;
  scrim?: "hero" | "start" | "end" | "even" | "panel";
  priority?: boolean;
  /** How the content meets the picture. */
  align?: "full" | "start" | "end" | "panel";
  id?: string;
  className?: string;
  position?: string;
}) {
  const inner =
    align === "panel" ? (
      <div className="photo-panel max-w-[60rem] p-7 md:p-11 lg:p-14">{children}</div>
    ) : align === "start" || align === "end" ? (
      <div className={`max-w-[62rem] ${align === "end" ? "ml-auto" : ""}`}>{children}</div>
    ) : (
      children
    );

  return (
    <section id={id} className={`on-dark photo-band py-section text-sage-bright ${className}`}>
      <PhotoGround photo={photo} scrim={scrim} priority={priority} drift={!priority} position={position} />
      <div className="wrap">{inner}</div>
    </section>
  );
}

/**
 * Photograph credit as a standalone line.
 *
 * Used where a picture is a section ground, so the credit cannot ride in a
 * caption bar. Licensing requires the attribution to be present and findable,
 * not prominent.
 */
export function Credit({ photo, className = "" }: { photo: Photo; className?: string }) {
  return (
    <p className={`text-fine text-sage ${className}`}>
      Photograph: {photo.photographer} —{" "}
      <a href={photo.sourceUrl} rel="noopener noreferrer nofollow" className="underline underline-offset-2">
        Unsplash
      </a>
    </p>
  );
}
