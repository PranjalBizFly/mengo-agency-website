import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { SpineKey } from "@/components/ui/editorial";
import { IndexHero } from "@/components/sections/heroes";
import { Figure } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { workflows } from "@/data/workflows";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Workflows", href: routes.workflows() },
];

export const metadata: Metadata = pageMetadata({
  title: "Workflows — how agency client delivery actually runs",
  description:
    "Six delivery workflows for agencies, from client onboarding to scaling delivery. Every step attributed to the side that owns it.",
  path: routes.workflows(),
  kicker: "Workflows",
});

/**
 * The workflows hub.
 *
 * The one hub that does not use story rows, because a workflow's most useful
 * summary is its shape: how many steps, how many of them are the agency's, and
 * a preview of the lane pattern. The row below renders that pattern as a strip
 * of nodes, so a reader can see at a glance that every workflow opens and
 * closes with the agency before opening any of them.
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
            "Six agency delivery workflows with every step attributed to its owner.",
            routes.workflows(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Client delivery"
        title="Six workflows, every step attributed"
        lead="A workflow drawn as a row of features tells you nothing about who does what. Drawn as a sequence with owners, the shape of the argument is visible before you read a word."
        count={workflows.length}
        countLabel="workflows"
        note="Look at the strip on each row below. The first and last node are outlined on every one of them — those are yours."
      />

      <Section tone="paper" tight>
        <SpineKey className="mb-10" />

        <ul>
          {workflows.map((workflow) => {
            const agencySteps = workflow.spine.filter((step) => step.lane === "agency").length;
            return (
              <li key={workflow.slug}>
                <Link
                  href={routes.workflow(workflow.slug)}
                  className="group block rule-t py-8 transition-colors"
                >
                  <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
                    <div>
                      <h2 className="type-title text-h5 transition-colors group-hover:text-lime-deep">
                        {workflow.title}
                      </h2>
                      <p className="mt-3 max-w-[52ch] text-body leading-relaxed text-ink-soft">
                        {workflow.summary}
                      </p>
                    </div>

                    <div>
                      {/* The lane pattern, as a strip. Decorative here — the
                          same information is in the text beside it and on the
                          workflow's own page. */}
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
      </Section>

      {heroPhoto ? (
        <Section tone="warm" tight>
          <Figure photo={heroPhoto} aspect="21/9" drift />
        </Section>
      ) : null}

      <Section tone="deep">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="The underlying shape" title="They are all one spine" size="d3" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            Every workflow above is a variation on the same nine-step sequence. We published it as a
            framework you can adopt under your own name, along with a way to find where your current
            process has holes — most agencies find two.
          </p>
        </div>
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
