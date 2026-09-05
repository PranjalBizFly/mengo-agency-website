import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { Figure } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { workflows, WORKFLOW_PHASES, workflowsInPhase } from "@/data/workflows";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Workflows", href: routes.workflows() },
];

export const metadata: Metadata = pageMetadata({
  title: "Workflows — how agency client delivery actually runs",
  description:
    "Twenty-eight delivery workflows across onboarding, planning, production, conversion and operations. Every step attributed to the side that owns it.",
  path: routes.workflows(),
  kicker: "Workflows",
});

/**
 * The workflows hub.
 *
 * The one index that does not use story rows, because a workflow's most useful
 * summary is its shape: how many steps, how many are the agency's, and the
 * lane pattern. The strip on each row renders that pattern, so a reader can
 * see that every workflow opens and closes with the agency before opening any
 * of them.
 *
 * Grouped by phase, with anchors, because twenty-eight in one list is a wall.
 */
export default function WorkflowsPage() {
  const heroPhoto = photo("workflows:index:hero");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Workflows",
            "Agency delivery workflows with every step attributed to its owner.",
            routes.workflows(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Client delivery"
        title="Twenty-eight workflows, every step attributed"
        lead="A workflow drawn as a row of features tells you nothing about who does what. Drawn as a sequence with owners, the shape of the argument is visible before you read a word."
        count={workflows.length}
        countLabel={`workflows in ${WORKFLOW_PHASES.length} phases`}
        note="Look at the strip on each row. The first and last node are outlined on every one of them — those are yours."
      />

      <Section tone="paper">
        <nav aria-label="Delivery phases" className="rule-b pb-7">
          <ul className="flex flex-wrap gap-2">
            {WORKFLOW_PHASES.map((phase) => (
              <li key={phase.slug}>
                <a
                  href={`#${phase.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-small transition-colors hover:border-lime-deep hover:text-lime-deep"
                >
                  {phase.label}
                  <span className="ml-2 text-fine text-ink-soft">
                    {workflowsInPhase(phase.slug).length}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>


        {WORKFLOW_PHASES.map((phase) => (
          <section
            key={phase.slug}
            id={phase.slug}
            className="mt-16"
            style={{ scrollMarginTop: "calc(var(--header-h) + 2rem)" }}
          >
            <div className="rule-t pt-7">
              <h2 className="text-d4">{phase.label}</h2>
              <p className="mt-2.5 max-w-[52ch] text-body text-ink-soft">{phase.note}</p>
            </div>

            <ul>
              {workflowsInPhase(phase.slug).map((workflow) => {
                const agencySteps = workflow.spine.filter((step) => step.lane === "agency").length;
                return (
                  <li key={workflow.slug}>
                    <Link href={routes.workflow(workflow.slug)} className="group block rule-t py-8">
                      <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
                        <div>
                          <h3 className="type-title text-h5 transition-colors group-hover:text-lime-deep">
                            {workflow.title}
                          </h3>
                          <p className="mt-3 max-w-[52ch] text-body leading-relaxed text-ink-soft">
                            {workflow.summary}
                          </p>
                        </div>

                        <div>
                          {/* The lane pattern as a strip. Decorative — the same
                              information is in the text beside it. */}
                          <div className="flex flex-wrap items-center gap-1.5" aria-hidden>
                            {workflow.spine.map((step, i) => (
                              <span
                                key={i}
                                className={`h-2.5 w-2.5 rounded-full ${
                                  step.lane === "mengo"
                                    ? "bg-lime-deep"
                                    : "border-2 border-lane-agency bg-transparent"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="mt-4 text-fine text-ink-soft">
                            {workflow.spine.length} steps · {agencySteps} yours ·{" "}
                            {workflow.spine.length - agencySteps} Mengo
                          </p>
                          <p className="mt-3 max-w-[46ch] text-fine text-ink-soft">
                            <span className="label text-[0.6875rem]">Triggered by</span>{" "}
                            {workflow.trigger}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </Section>

      {/* The plate belongs to the argument beneath it rather than standing as
          a band of its own: a photograph in an empty section is decoration, and
          the caption is what states the relationship. */}
      <Section tone="deep">
        <div className="grid gap-x-16 gap-y-9 lg:grid-cols-2 lg:items-start">
          <Heading kicker="The underlying shape" title="They are all one spine" size="d3" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            Every workflow above is a variation on the same nine-step sequence. We published it as a
            framework you can adopt under your own name, along with a way to find where your current
            process has holes — most agencies find two.
          </p>
        </div>

        {heroPhoto ? (
          <Figure
            photo={heroPhoto}
            aspect="21/9"
            drift
            className="mt-14"
            context="The spine"
            caption={`One nine-step sequence behind all ${workflows.length} workflows, opened and closed by a person.`}
          />
        ) : null}

        <div className="mt-12 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={routes.framework("the-client-delivery-spine")}>
            The Client Delivery Spine
          </ButtonLink>
          <ButtonLink href={routes.howItWorks()} variant="secondary">
            How it works
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
