import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Section, Heading, Kicker, Statement, ButtonLink, FaqList, JsonLd } from "@/components/ui/primitives";
import { IndexRows, MarkerList, ProseRows, Spine, SpineKey, StoryRows } from "@/components/ui/editorial";
import { RuleHero } from "@/components/sections/heroes";
import { PhotoSection, Credit } from "@/components/ui/Photo";
import { relatedCapabilities, relatedUseCases } from "@/components/sections/related";
import {
  industriesForCapability,
  mergeSlugs,
  nextStepForCapability,
  siblingCapabilities,
  stagesForCapability,
  useCasesForCapability,
  workflowsForCapability,
} from "@/lib/relations";
import { workflowBySlug } from "@/data/workflows";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { capabilities, capabilityBySlug } from "@/data/capabilities";
import { groupBySlug } from "@/data/capability-groups";
import { stageBySlug } from "@/data/stages";
import { RELEVANCE_LABEL } from "@/components/sections/capability-stage";

export function generateStaticParams() {
  return capabilities.map((capability) => ({
    group: capability.group,
    capability: capability.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ capability: string }>;
}): Promise<Metadata> {
  const { capability: slug } = await params;
  const capability = capabilityBySlug.get(slug);
  if (!capability) return {};
  return entityMetadata(capability);
}

/**
 * The capability archetype.
 *
 * Its distinguishing composition is the inputs/outputs pair set as two facing
 * columns across a rule, and — for staged capabilities — a run of five stage
 * sections, each a summary linking to its own page.
 *
 * The stage run is the heart of the page and the reason this site exists in
 * this shape: the same capability means a different thing to a one-person
 * studio and a forty-person agency, and several of them honestly say "not yet,
 * do this instead". A capability page that gave the same answer to everyone
 * would be a brochure.
 */
export default async function CapabilityPage({
  params,
}: {
  params: Promise<{ group: string; capability: string }>;
}) {
  const { group: groupSlug, capability: slug } = await params;
  const capability = capabilityBySlug.get(slug);
  if (!capability || capability.group !== groupSlug) notFound();

  const group = groupBySlug.get(capability.group);
  const heroPhoto = photo(`capability:${capability.slug}:hero`);

  /* Everything this capability is named by, read from the other end. All of it
     is derived from relations somebody else authored, so none of it can drift
     out of step with the pages it points at. */
  const sectorPages = industriesForCapability(capability.slug);
  const leadingStages = stagesForCapability(capability.slug);

  /* Union, not replacement: what the capability's own author listed, extended
     by whatever the rest of the site turns out to claim about it. */
  const runningWorkflows = mergeSlugs(
    capability.related.workflows,
    workflowsForCapability(capability.slug),
  )
    .map((slug) => workflowBySlug.get(slug))
    .filter((workflow) => workflow !== undefined);

  const reachingUseCaseSlugs = mergeSlugs(
    capability.related.useCases,
    useCasesForCapability(capability.slug),
  );
  const siblings = siblingCapabilities(capability);
  const nextStep = nextStepForCapability(capability);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Capabilities", href: routes.capabilities() },
    { label: group?.title ?? capability.group, href: routes.capabilityGroup(capability.group) },
    { label: capability.title, href: routes.capability(capability.group, capability.slug) },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(capability.faqs)]} />

      <RuleHero
        tone="warm"
        trail={trail}
        kicker={group ? `${group.title} capability` : "Capability"}
        title={capability.headline}
        lead={capability.lead}
        facts={
          <div className="grid gap-x-12 gap-y-8 rule-t pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <p className="label">What this is</p>
              <p className="mt-3 max-w-[52ch] text-body leading-relaxed text-ink-soft">{capability.meaning}</p>
            </div>
            <div>
              <p className="label">The job</p>
              <p className="mt-3 max-w-[46ch] text-lead text-ink">{capability.job}</p>
            </div>
          </div>
        }
      />

      {/* Why agencies need it ------------------------------------------- */}
      {/* Prose rows: each of these is a reason with an argument behind it,
          and an index row would compress the argument out of it. */}
      <Section tone="paper">
        <Heading
          kicker="Why it matters"
          title="What this is actually for"
          lead={capability.meaning}
          size="d3"
        />
        <ProseRows items={capability.whyAgencies} className="mt-14" />
      </Section>

      {/* In and out ------------------------------------------------------ */}
      <Section tone="warm">
        <Heading
          kicker="In and out"
          title="What you hand over, and what comes back"
          lead="Concrete artefacts rather than outcomes. If something is not on the right-hand list, it is not produced."
          size="d3"
        />
        <div className="mt-14 grid gap-x-14 gap-y-12 lg:grid-cols-2">
          <div>
            <p className="label rule-t pt-5">You supply</p>
            <MarkerList items={capability.inputs} className="mt-7" />
          </div>
          <div>
            <p className="label rule-t pt-5 text-lime-deep">Mengo returns</p>
            <MarkerList items={capability.outputs} className="mt-7" />
          </div>
        </div>
      </Section>

      {/* By agency stage — the reason this page has this shape ----------- */}
      {capability.depth === "staged" ? (
        <Section tone="paper" id="by-stage">
          <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
            <Heading
              kicker="By stage"
              title="The same capability, five different problems"
              size="d3"
              width="full"
            />
            <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
              What this means to a one-person studio and to a forty-person agency is not the same
              thing at a different scale — it is a different problem. Some stages say wait, and what
              to do first instead.
            </p>
          </div>

          <ol className="mt-14" data-reveal-stagger>
            {capability.stages.map((view, index) => {
              const stage = stageBySlug.get(view.stage);
              if (!stage) return null;
              return (
                <li key={view.stage} data-reveal>
                  <Link
                    href={routes.capabilityStage(capability.group, capability.slug, view.stage)}
                    className="group block rule-t py-9"
                  >
                    <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1fr)]">
                      <span className="label tnum hidden pt-1.5 lg:block" aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h3 className="type-title text-h5 transition-colors group-hover:text-lime-deep">
                            {stage.title}
                          </h3>
                          <span
                            className={`label text-[0.6875rem] ${
                              view.relevance === "core" ? "text-lime-deep" : ""
                            }`}
                          >
                            {RELEVANCE_LABEL[view.relevance]}
                          </span>
                        </div>
                        <p className="mt-3 max-w-[50ch] text-body leading-relaxed text-ink-soft">
                          {view.headline}
                        </p>
                      </div>
                      <div>
                        <p className="label mb-2.5 text-[0.6875rem]">
                          {view.relevance === "later" ? "Do this instead" : "The problem here"}
                        </p>
                        <p className="max-w-[46ch] text-fine leading-relaxed text-ink-soft">
                          {view.relevance === "later" && view.insteadDoThis
                            ? view.insteadDoThis
                            : view.problem}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </Section>
      ) : (
        <Section tone="paper" tight>
          <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start">
            <Heading kicker="By stage" title="This one does not vary" size="d4" width="full" />
            <p className="max-w-[48rem] text-lead text-ink-soft" data-reveal>
              Unlike most capabilities here, this does not mean something different to a solo agency
              and a forty-person one. What changes is headcount and the sensitivity of client
              material, not the capability — so there are no stage pages for it, because writing
              five near-identical ones would be padding.
            </p>
          </div>
        </Section>
      )}

      {/* The sequence ---------------------------------------------------- */}
      {heroPhoto ? (
        <PhotoSection photo={heroPhoto} scrim="even">
          <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Kicker className="mb-7">How it runs</Kicker>
              <h2 className="text-d3 text-on-dark">Step by step, with owners</h2>
              <SpineKey className="mt-8 text-sage-bright" />
              <Credit photo={heroPhoto} className="mt-10" />
            </div>
            <Spine steps={capability.sequence} />
          </div>
        </PhotoSection>
      ) : (
        <Section tone="deep">
          <Heading kicker="How it runs" title="Step by step, with owners" size="d3" />
          <SpineKey className="mt-8" />
          <Spine steps={capability.sequence} className="mt-8" />
        </Section>
      )}

      {/* Judgement ------------------------------------------------------- */}
      {/* A set to scan rather than an argument to read, so it runs two-up
          under a full-width heading. */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <Heading kicker="Your judgement" title="What no system decides for you" size="d3" width="full" />
          <p className="max-w-[42rem] text-body leading-relaxed text-ink-soft" data-reveal>
            Every one of these is a decision a person has to make with something at stake. A draft
            can inform them; it cannot make any of them, and a workflow that pretends otherwise is
            the one that eventually reaches a client unread.
          </p>
        </div>
        <IndexRows items={capability.judgement} columns={2} className="mt-14" />
      </Section>

      {/* Limits ----------------------------------------------------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading kicker="Limits" title="What this does not do" size="d3" width="full" />
            <Statement className="mt-9">
              If a claim is not made in this section, it is not being made.
            </Statement>
          </div>
          <MarkerList items={capability.limits} tone="warn" />
        </div>
      </Section>

      {/* FAQ --------------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Heading kicker="Questions" title="What agencies ask about this" size="d3" width="full" />
          <FaqList faqs={capability.faqs} />
        </div>
      </Section>

      {/* Where it appears ---------------------------------------------------
          Every one of these is derived by inverting a relation somebody else
          already authored — the sectors that publish a page for it, the
          workflows that run it, the stages that lead with it. Nothing here is a
          second list to keep in step with the first. */}
      <Section tone="warm" labelledBy="where-it-appears">
        <Heading
          kicker="Where this appears"
          title="The rest of the system, from here"
          lead="A capability on its own is a definition. These are the places it is actually doing something — and they are the same pages that name it, read from the other end."
          size="d3"
          id="where-it-appears"
        />

        <div className="mt-14 grid gap-x-14 gap-y-12 lg:grid-cols-3">
          <div>
            <h3 className="label rule-b pb-4">
              {sectorPages.length > 0 ? `In ${sectorPages.length} client sectors` : "Client sectors"}
            </h3>
            {sectorPages.length > 0 ? (
              <ul className="mt-4">
                {sectorPages.map((industry) => (
                  <li key={industry.slug}>
                    <Link
                      href={routes.industryCapability(industry.slug, capability.slug)}
                      className="link-index text-small text-ink transition-colors hover:text-lime-deep"
                    >
                      {industry.navLabel ?? industry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-[36ch] text-small leading-relaxed text-ink-soft">
                No sector changes this one enough to need its own page. It works the same way
                whoever the client is, which is worth knowing in itself.
              </p>
            )}
          </div>

          <div>
            <h3 className="label rule-b pb-4">
              {runningWorkflows.length > 0 ? `In ${runningWorkflows.length} workflows` : "Workflows"}
            </h3>
            {runningWorkflows.length > 0 ? (
              <ul className="mt-4">
                {runningWorkflows.map((workflow) => (
                  <li key={workflow.slug}>
                    <Link
                      href={routes.workflow(workflow.slug)}
                      className="link-index text-small text-ink transition-colors hover:text-lime-deep"
                    >
                      {workflow.navLabel ?? workflow.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-[36ch] text-small leading-relaxed text-ink-soft">
                Not part of a delivery sequence — this one is set up once and referenced, rather
                than run.
              </p>
            )}
          </div>

          <div>
            <h3 className="label rule-b pb-4">
              {leadingStages.length > 0 ? "Stages that lead with it" : "Across the stages"}
            </h3>
            {leadingStages.length > 0 ? (
              <ul className="mt-4">
                {leadingStages.map((stage) => (
                  <li key={stage.slug}>
                    <Link
                      href={routes.stage(stage.slug)}
                      className="link-index text-small text-ink transition-colors hover:text-lime-deep"
                    >
                      {stage.navLabel ?? stage.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-[36ch] text-small leading-relaxed text-ink-soft">
                No stage page leads with it. {capability.depth === "staged"
                  ? "It still reads differently at each size — the five pages above say how."
                  : "It does not change with size, which is why it has one page rather than five."}
              </p>
            )}
          </div>
        </div>

        <div className="mt-14 rule-t pt-9">
          <div className="grid gap-x-14 gap-y-9 lg:grid-cols-2">
            <div>
              <Heading kicker="Works with" title="Other capabilities" size="d4" width="full" />
              <StoryRows
                className="mt-9"
                columns={1}
                items={relatedCapabilities(
                  capability.related.capabilities.length > 0
                    ? capability.related.capabilities
                    : siblings.slice(0, 4).map((c) => c.slug),
                )}
              />
            </div>
            <div>
              <Heading kicker="Reached for by" title="These use cases" size="d4" width="full" />
              {reachingUseCaseSlugs.length > 0 ? (
                <StoryRows
                  className="mt-9"
                  columns={1}
                  items={relatedUseCases(reachingUseCaseSlugs)}
                />
              ) : (
                <p className="mt-9 max-w-[46ch] text-body leading-relaxed text-ink-soft">
                  No use case leads with this one. It is supporting work — the kind that shows up
                  inside a job rather than being the job.
                </p>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* The next step ------------------------------------------------------
          One destination, chosen from the reader's own position, rather than a
          closing wall of links. A page that ends in forty choices has not
          ended. */}
      <Section tone="deep" tight>
        <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
          <Heading kicker={nextStep.kicker} title="Where to go next" size="d3" width="full" />
          <div>
            <p className="max-w-[46rem] text-lead text-ink-soft" data-reveal>
              {nextStep.kind === "workflow"
                ? `${capability.title} is one step inside a longer sequence. Reading that sequence is what makes the boundary concrete — who opens it, who closes it, and where this sits between the two.`
                : nextStep.kind === "use-case"
                  ? `${capability.title} exists because somebody was trying to do something. That job, start to finish, is the honest test of whether this capability is worth adopting.`
                  : `${capability.title} is rarely the place to start. Its group's adoption order says what comes before it, and why.`}
            </p>
            <div className="mt-9 flex flex-wrap gap-3" data-reveal>
              <ButtonLink
                href={
                  nextStep.kind === "workflow"
                    ? routes.workflow(nextStep.slug)
                    : nextStep.kind === "use-case"
                      ? routes.useCase(nextStep.slug)
                      : routes.capabilityGroup(nextStep.slug)
                }
              >
                {nextStep.label}
              </ButtonLink>
              <ButtonLink href={routes.capabilityGroup(capability.group)} variant="secondary">
                All {group?.title ?? "group"} capabilities
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

    </>
  );
}
