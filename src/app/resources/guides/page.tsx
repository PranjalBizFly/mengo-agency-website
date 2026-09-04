import type { Metadata } from "next";

import { Section, JsonLd } from "@/components/ui/primitives";
import { StoryRows } from "@/components/ui/editorial";
import { IndexHero } from "@/components/sections/heroes";
import { Figure } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { guides } from "@/data/guides";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Resources", href: routes.resources() },
  { label: "Guides", href: routes.guides() },
];

export const metadata: Metadata = pageMetadata({
  title: "Guides — longer arguments about agency operations",
  description:
    "Guides on agency delivery capacity, retainer pricing, measuring where agency time goes, and using AI responsibly in client work.",
  path: routes.guides(),
  kicker: "Guides",
});

/** The guides index. Short list, so it leads with the argument each one makes. */
export default function GuidesPage() {
  const heroPhoto = photo("resources:guides:hero");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema("Guides", "Longer arguments about agency operations.", routes.guides()),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Guides"
        title="Arguments that reach a conclusion"
        lead="A guide is allowed to conclude that you should not do something, and two of these do. Playbooks instruct; guides argue."
        count={guides.length}
        countLabel="guides"
      />

      <Section tone="paper">
        <StoryRows
          columns={1}
          items={guides.map((guide) => ({
            kicker: guide.audience,
            title: guide.title,
            body: guide.summary,
            href: routes.guide(guide.slug),
          }))}
        />
      </Section>

      {heroPhoto ? (
        <Section tone="warm">
          <Figure
            photo={heroPhoto}
            aspect="21/9"
            drift
            context="Guides"
            caption="Longer arguments about how this work is run, written to be disagreed with rather than skimmed."
          />
        </Section>
      ) : null}
    </>
  );
}
