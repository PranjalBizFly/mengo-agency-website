import registry from "./photo-registry.json";

/**
 * Photograph resolution.
 *
 * The site has one hard rule about imagery: a photograph appears in exactly
 * one place. Not cropped differently elsewhere, not recoloured, not flipped —
 * one asset, one section. That rule is enforced by construction rather than by
 * discipline: `scripts/build-photo-registry.mjs` assigns each licensed asset
 * from a pool exactly once, and `scripts/audit-images.mjs` fails the build if
 * two keys ever resolve to the same source.
 *
 * The consequence, which is deliberate, is that a section cannot have a
 * photograph just because a photograph would look nice there. It gets one only
 * if an unused, appropriate asset exists. Everywhere else the section is
 * text-led, which is why this site has editorial rhythm instead of a picture
 * above every heading.
 */

export interface Photo {
  key: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  photographer: string;
  sourceUrl: string;
  license: string;
}

const photos = registry as Record<string, Photo>;

/**
 * The photograph for a section, or null.
 *
 * Null is a normal, expected answer and every caller has a text-led rendering
 * for it. Returning a fallback image instead would quietly reintroduce the
 * repetition this system exists to prevent.
 */
export function photo(key: string): Photo | null {
  return photos[key] ?? null;
}

/** Resolve `<type>:<slug>:<section>` without building the string at each call. */
export function sectionPhoto(type: string, slug: string, section = "hero"): Photo | null {
  return photo(`${type}:${slug}:${section}`);
}

/** Every registered photograph. Used by the image audit and the sitemap. */
export function allPhotos(): Photo[] {
  return Object.values(photos);
}
