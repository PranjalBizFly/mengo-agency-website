import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, JsonLd } from "@/components/ui/primitives";
import { LongformHero } from "@/components/sections/heroes";
import { Blocks } from "@/components/sections/blocks";
import { Figure } from "@/components/ui/Photo";
import { Related, relatedStages, relatedUseCases } from "@/components/sections/related";
import { photo } from "@/lib/images";
import { DocumentCta, PrevNext, neighboursOf } from "@/components/sections/longform";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, documentSchema } from "@/seo/schema";
import { guides, guideBySlug } from "@/data/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ guide: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guide: string }>;
}): Promise<Metadata> {
  const { guide: slug } = await params;
  const guide = guideBySlug.get(slug);
  if (!guide) return {};
  return entityMetadata(guide, { type: "article" });
}

/** The guide archetype. A long argument, set to be read straight through. */
export default async function GuidePage({ params }: { params: Promise<{ guide: string }> }) {
  const { guide: slug } = await params;
  const guide = guideBySlug.get(slug);
  if (!guide) notFound();

  const cover = photo(`guide:${guide.slug}:hero`);

  const { previous, next } = neighboursOf(guides, guide.slug, routes.guide);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Resources", href: routes.resources() },
    { label: "Guides", href: routes.guides() },
    { label: guide.title, href: routes.guide(guide.slug) },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), documentSchema(guide, routes.guide(guide.slug))]} />

      <LongformHero
        trail={trail}
        kicker="Guide"
        title={guide.headline}
        lead={guide.lead}
        meta={[{ label: "Written for", value: guide.audience }]}
      />

      {cover ? (
        <Section tone="paper">
          <Figure
            photo={cover}
            aspect="21/9"
            drift
            context="Written for"
            caption={guide.audience}
          />
        </Section>
      ) : null}

      <Section tone="paper" as="div">
        <article className="max-w-[52rem]">
          <Blocks blocks={guide.blocks} />
        </article>
      </Section>

      <Related
        tone="warm"
        kicker="Related"
        title="Where this applies"
        items={[
          ...relatedStages(guide.related.stages),
          ...relatedUseCases(guide.related.useCases),
          ...guides
            .filter((other) => other.slug !== guide.slug)
            .slice(0, 2)
            .map((other) => ({
              kicker: "Guide",
              title: other.title,
              body: other.audience,
              href: routes.guide(other.slug),
            })),
        ]}
      />
      <PrevNext
        previous={previous}
        next={next}
        collectionLabel="Guides"
        collectionHref={routes.guides()}
      />

      <DocumentCta />
    </>
  );
}
