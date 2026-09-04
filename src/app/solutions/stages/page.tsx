import type { Metadata } from "next";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { Ladder, IndexRows, StoryRows } from "@/components/ui/editorial";
import { IndexHero } from "@/components/sections/heroes";
import { PhotoSection, Credit } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { stages } from "@/data/stages";
import { useCases } from "@/data/use-cases";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Solutions", href: routes.solutions() },
  { label: "By stage", href: routes.stages() },
];

export const metadata: Metadata = pageMetadata({
  title: "By stage — from a first client to a multi-team practice",
  description:
    "Five stages, from starting out to running multiple client teams. Find the one that describes your week, and what changes on the way to the next.",
  path: routes.stages(),
  kicker: "By stage",
});

/**
 * The stage hub.
 *
 * A reader arrives here not knowing which page is theirs, so the ladder is the
 * page's centre of gravity rather than an ornament — it is the navigation. The
 * comparison beneath it exists for the reader who is between two stages, which
 * is most of them.
 */
export default function StagesPage() {
  const heroPhoto = photo("stages:index:hero");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "By stage",
            "Five stages, from starting out to a multi-team practice.",
            routes.stages(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="By stage"
        title="Find the week that sounds like yours"
        lead="Each of these points has a different constraint, a different week and a different set of things that break. The boundary does not change with size — what changes is the language for it."
        count={stages.length}
        countLabel="stages"
        note="If you are between two, read the earlier one. The problems described there are usually the ones still unresolved."
      />

      <Section tone="paper" tight>
        <Ladder
          steps={stages.map((stage) => ({
            label: stage.title,
            shape: stage.shape,
            href: routes.stage(stage.slug),
          }))}
        />
      </Section>

      {/* The comparison ------------------------------------------------- */}
      <Section tone="warm">
        <Heading
          kicker="What changes"
          title="The constraint moves as the practice grows"
          lead="Each stage is defined by what runs out first. Recognising which one you are in matters more than the headcount, because it determines what is worth fixing."
          size="d3"
        />
        <IndexRows
          className="mt-14"
          columns={1}
          items={stages.map((stage) => ({
            label: stage.title,
            body: `${stage.shape} ${stage.transition.to === "the next standard" ? "The ongoing work is keeping the standard true as the agency changes." : `The boundary out: ${stage.transition.body.split(". ")[0]}.`}`,
          }))}
        />
      </Section>

      {/* The constant ---------------------------------------------------- */}
      {heroPhoto ? (
        <PhotoSection photo={heroPhoto} scrim="start" align="start">
          <Statement>
            Whatever the size, the client relationship, the strategy and the final call stay with
            the people whose name is on the door.
          </Statement>
          <p className="mt-10 max-w-[46rem] text-lead text-sage-bright">
            That is the one thing every page in this section says the same way. What differs is the
            structural work behind it, and how much of it repeats.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={routes.why()} variant="secondary">
              Why Mengo
            </ButtonLink>
            <ButtonLink href={routes.howItWorks()} variant="secondary">
              How it works
            </ButtonLink>
          </div>
          <Credit photo={heroPhoto} className="mt-12" />
        </PhotoSection>
      ) : null}

      {/* By goal instead --------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="Another way in" title="Or start from what you are trying to do" size="d3" width="full" />
          <p className="max-w-[42rem] text-body leading-relaxed text-ink-soft" data-reveal>
            Some readers know their constraint better than their category. These pages start from
            the goal and name, honestly, who each one is not for.
          </p>
        </div>
        <StoryRows
          className="mt-12"
          columns={2}
          items={useCases.map((useCase) => ({
            title: useCase.title,
            body: useCase.situation,
            href: routes.useCase(useCase.slug),
          }))}
        />
      </Section>
    </>
  );
}
