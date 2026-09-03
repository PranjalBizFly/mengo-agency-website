import type { Metadata } from "next";
import { absolute, site } from "@/lib/site";
import type { Entity } from "@/lib/types";
import { kindLabel, urlFor } from "@/lib/registry";

/**
 * The site's single metadata builder.
 *
 * Every page goes through `pageMetadata`, which guarantees a canonical, an
 * Open Graph record and a title/description pair. Nothing hand-rolls its own
 * metadata object, so it is not possible to publish a page with a missing
 * canonical or a duplicate title.
 */

const TITLE_SUFFIX = ` | ${site.name}`;
const MAX_DESCRIPTION = 165;

export interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  noindex?: boolean;
  /** Small label printed above the title on the generated social card. */
  kicker?: string;
}

export function pageMetadata(input: PageMetaInput): Metadata {
  const title = withSuffix(input.title);
  const description = clamp(input.description);
  const url = absolute(input.path);
  const image = absolute(ogImagePath(input.title, input.kicker));

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: input.noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        },
    openGraph: {
      type: input.type ?? "website",
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
      ...(input.section ? { section: input.section } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: site.twitter,
      title,
      description,
      images: [image],
    },
  };
}

/** Metadata for any content entity, derived when explicit SEO fields are absent. */
export function entityMetadata(entity: Entity, opts: { type?: "website" | "article" } = {}): Metadata {
  return pageMetadata({
    title: entity.seoTitle ? stripSuffix(entity.seoTitle) : entity.title,
    description: entity.seoDescription ?? entity.summary,
    path: urlFor(entity),
    type: opts.type,
    section: kindLabel(entity.kind),
    kicker: kindLabel(entity.kind),
    modifiedTime: entity.updated,
    ...(entity.kind === "article" ? { publishedTime: entity.published } : {}),
  });
}

function withSuffix(title: string): string {
  return title.includes(site.name) ? title : `${title}${TITLE_SUFFIX}`;
}

function stripSuffix(title: string): string {
  return title.endsWith(TITLE_SUFFIX) ? title.slice(0, -TITLE_SUFFIX.length) : title;
}

function clamp(text: string): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= MAX_DESCRIPTION) return flat;
  const cut = flat.slice(0, MAX_DESCRIPTION);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : MAX_DESCRIPTION).trimEnd()}…`;
}

/**
 * Social cards are rendered on demand by `/api/og`. Query parameters are fine
 * here — the image URL is never an indexable page, and this gives every page a
 * distinct card without committing a hundred image files to the repository.
 */
function ogImagePath(title: string, kicker?: string): string {
  const params = new URLSearchParams({ t: title });
  if (kicker) params.set("k", kicker);
  return `/api/og?${params.toString()}`;
}
