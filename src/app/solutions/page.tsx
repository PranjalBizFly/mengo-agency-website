import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { Ladder, IndexRows } from "@/components/ui/editorial";
import { IndexHero } from "@/components/sections/heroes";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { stages } from "@/data/stages";
import { useCases, USE_CASE_PHASES, useCasesInPhase } from "@/data/use-cases";
import { workflows } from "@/data/workflows";
import { capabilities } from "@/data/capabilities";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Solutions", href: routes.solutions() },
];

export const metadata: Metadata = pageMetadata({
  title: "Solutions — two ways into the same system",
  description:
    "The same capabilities, workflows and sectors organised twice: by where you are today, and by what you are trying to do next.",
  path: routes.solutions(),
  kicker: "Solutions",
});

/**
 * The solutions hub.
 *
 * Two lenses over one body of work, and the page exists to make that explicit
 * rather than to add a third layer of content. A reader arrives holding either
 * an identity ("we are four people and everything goes through me") or an
 * intention ("we need to take another client without hiring"), and the whole
 * site is reachable from either.
 *
 * Composed as two long ruled runs rather than a grid of cards, because these
 * are things to read and choose between, not objects to act on.
 */
export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Solutions",
            "The same system organised by where you are and by what you are trying to do.",
            routes.solutions(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Solutions"
        title="Two ways into the same system"
        lead="One body of work — sixty-four capabilities, twenty-eight workflows, ten client sectors — organised twice. Come in by where you are, or by what you are trying to do."
        count={stages.length + useCases.length}
        countLabel="entry points"
        note="Neither route is the beginner's version. They lead to the same pages by a different door, and the door that matters is the one that describes your Monday."
      />

      {/* Lens one: where you are ----------------------------------------- */}
      <Section tone="paper" tight labelledBy="by-stage">
        <div className="rule-b flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-7">
          <h2 id="by-stage" className="type-title text-d4">
            Where you are
          </h2>
          <Link
            href={routes.stages()}
            className="link-index text-small font-semibold text-lime-deep transition-colors hover:text-ink"
          >
            Compare all five →
          </Link>
        </div>
        <p className="mt-7 max-w-[46rem] text-lead text-ink-soft" data-reveal>
          Five points on one path. They are described by the shape of the week rather than by
          headcount, because a four-person team with one enormous client runs like a solo practice
          and a two-person shop with eleven retainers does not.
        </p>
        <Ladder
          className="mt-12"
          steps={stages.map((stage) => ({
            label: stage.title,
            shape: stage.shape,
            href: routes.stage(stage.slug),
          }))}
        />
      </Section>

      {/* Lens two: what you want ----------------------------------------- */}
      <Section tone="warm" labelledBy="by-goal">
        <div className="rule-b flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-7">
          <h2 id="by-goal" className="type-title text-d4">
            What you are trying to do
          </h2>
          <Link
            href={routes.useCases()}
            className="link-index text-small font-semibold text-lime-deep transition-colors hover:text-ink"
          >
            All {useCases.length} use cases →
          </Link>
        </div>
        <p className="mt-7 max-w-[46rem] text-lead text-ink-soft" data-reveal>
          Some readers know their constraint better than their category. Every one of these states
          the situation, why the obvious answer does not work, and — on the same page — who it is
          not for.
        </p>

        <div className="mt-12 grid gap-x-12 gap-y-12 lg:grid-cols-3">
          {USE_CASE_PHASES.map((phase) => (
            <div key={phase.slug}>
              <h3 className="label rule-b pb-4">
                <Link
                  href={`${routes.useCases()}#${phase.slug}`}
                  className="transition-colors hover:text-lime-deep"
                >
                  {phase.label}
                </Link>
              </h3>
              <p className="mt-4 max-w-[40ch] text-small leading-relaxed text-ink-soft">
                {phase.note}
              </p>
              <ul className="mt-5 space-y-0.5">
                {useCasesInPhase(phase.slug).map((goal) => (
                  <li key={goal.slug}>
                    <Link
                      href={routes.useCase(goal.slug)}
                      className="link-index text-small text-ink transition-colors hover:text-lime-deep"
                    >
                      {goal.navLabel ?? goal.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* The constant across both ---------------------------------------- */}
      <Section tone="forest">
        <Statement>
          Whichever door you come in by, the client relationship, the strategy and the final call
          stay with the people whose name is on the door.
        </Statement>
        <p className="mt-10 max-w-[46rem] text-lead text-sage-bright" data-reveal>
          What changes between one stage and the next is how much of the structural work repeats,
          and how expensive it is when it is done from scratch. That is the only thing being moved.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={routes.why()} variant="secondary">
            Why Mengo
          </ButtonLink>
          <ButtonLink href={routes.howItWorks()} variant="secondary">
            How it works
          </ButtonLink>
        </div>
      </Section>

      {/* Where both doors lead -------------------------------------------- */}
      <Section tone="paper">
        <Heading
          kicker="What is behind both"
          title="The same system, whichever way you arrived"
          lead="Every stage page and every goal page routes into these. They are the site, and the two lenses above are how you get to the part of it that is yours."
          size="d3"
        />
        <IndexRows
          className="mt-14"
          columns={1}
          items={[
            {
              label: `${capabilities.length} capabilities, in eight groups`,
              body: "What the system can carry, from a business profile to a full content programme — each one with what it does, what it does not do, and where your judgement is required.",
            },
            {
              label: `${workflows.length} workflows, in five phases`,
              body: "How the work actually runs, from onboarding a client to running the practice. Every one opens and closes with a person.",
            },
            {
              label: "Ten client sectors",
              body: "What changes when the client is a clinic rather than a software company — including the constraints that must not be got wrong.",
            },
          ]}
        />
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href={routes.capabilities()}>Browse the capabilities</ButtonLink>
          <ButtonLink href={routes.explore()} variant="secondary">
            Explore every page
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
