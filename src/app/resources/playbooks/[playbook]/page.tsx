import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section, JsonLd } from "@/components/ui/primitives";
import { LongformHero } from "@/components/sections/heroes";
import { Blocks } from "@/components/sections/blocks";
import { Figure } from "@/components/ui/Photo";
import { Related, relatedWorkflows, relatedCapabilities } from "@/components/sections/related";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, documentSchema } from "@/seo/schema";
import { playbooks, playbookBySlug } from "@/data/playbooks";

export function generateStaticParams() {
  return playbooks.map((playbook) => ({ playbook: playbook.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ playbook: string }>;
}): Promise<Metadata> {
  const { playbook: slug } = await params;
  const playbook = playbookBySlug.get(slug);
  if (!playbook) return {};
  return entityMetadata(playbook, { type: "article" });
}

/**
 * The playbook archetype.
 *
 * A working document, so it is set at a reading measure with the structural
 * devices available inside it — a playbook can carry a real spine rather than
 * describing one in prose. The photograph sits after the lead rather than
 * behind the title: this is a document, not a landing page.
 */
export default async function PlaybookPage({ params }: { params: Promise<{ playbook: string }> }) {
  const { playbook: slug } = await params;
  const playbook = playbookBySlug.get(slug);
  if (!playbook) notFound();

  const cover = photo(`playbook:${playbook.slug}:hero`);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Resources", href: routes.resources() },
    { label: "Playbooks", href: routes.playbooks() },
    { label: playbook.title, href: routes.playbook(playbook.slug) },
  ];

  return (
    <>
      <JsonLd
        data={[breadcrumbSchema(trail), documentSchema(playbook, routes.playbook(playbook.slug))]}
      />

      <LongformHero
        trail={trail}
        kicker="Playbook"
        title={playbook.headline}
        lead={playbook.lead}
        meta={[
          { label: "Written for", value: playbook.audience },
          { label: "Effort", value: playbook.effort },
        ]}
      />

      {cover ? (
        <Section tone="paper" tight>
          <Figure
            photo={cover}
            aspect="21/9"
            drift
            context="Playbook"
            caption={`${playbook.audience} · ${playbook.effort}`}
          />
        </Section>
      ) : null}

      <Section tone="paper" tight as="div">
        <article className="max-w-[52rem]">
          <Blocks blocks={playbook.blocks} />
        </article>
      </Section>

      <Related
        tone="warm"
        kicker="Related"
        title="Where this fits"
        items={[
          ...relatedWorkflows(playbook.related.workflows),
          ...relatedCapabilities(playbook.related.capabilities),
          ...playbooks
            .filter((other) => other.slug !== playbook.slug)
            .slice(0, 2)
            .map((other) => ({
              kicker: "Playbook",
              title: other.title,
              body: other.audience,
              href: routes.playbook(other.slug),
            })),
        ]}
      />
    </>
  );
}
