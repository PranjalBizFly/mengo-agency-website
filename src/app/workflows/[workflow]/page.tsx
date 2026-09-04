import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Section, Heading, Kicker, ButtonLink, FaqList, JsonLd } from "@/components/ui/primitives";
import { IndexRows, MarkerList, Spine, SpineKey, StoryRows, FactStrip } from "@/components/ui/editorial";
import { RuleHero } from "@/components/sections/heroes";
import { Figure } from "@/components/ui/Photo";
import { Related, relatedCapabilities, relatedStages } from "@/components/sections/related";
import { industriesForWorkflow, useCasesForWorkflow } from "@/lib/relations";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema, howToSchema } from "@/seo/schema";
import { workflows, workflowBySlug } from "@/data/workflows";

export function generateStaticParams() {
  return workflows.map((workflow) => ({ workflow: workflow.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ workflow: string }>;
}): Promise<Metadata> {
  const { workflow: slug } = await params;
  const workflow = workflowBySlug.get(slug);
  if (!workflow) return {};
  return entityMetadata(workflow);
}

/**
 * The workflow archetype.
 *
 * The spine is the page — it opens immediately after the hero rather than
 * being introduced, because a reader who came here wants to see the sequence
 * and can read the argument afterwards if they want it.
 *
 * Before-and-after are set as two facing columns across one rule. It is the
 * only place on the site where two indexes sit side by side as a comparison,
 * which is what distinguishes a workflow page from a capability page at a
 * glance.
 */
export default async function WorkflowPage({ params }: { params: Promise<{ workflow: string }> }) {
  const { workflow: slug } = await params;
  const workflow = workflowBySlug.get(slug);
  if (!workflow) notFound();

  const heroPhoto = photo(`workflow:${workflow.slug}:hero`);
  const sectors = industriesForWorkflow(workflow.slug);
  const servingUseCases = useCasesForWorkflow(workflow.slug);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Workflows", href: routes.workflows() },
    { label: workflow.title, href: routes.workflow(workflow.slug) },
  ];

  const agencySteps = workflow.spine.filter((step) => step.lane === "agency").length;

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(workflow.faqs), howToSchema(workflow)]} />

      <RuleHero
        trail={trail}
        kicker="Workflow"
        title={workflow.headline}
        lead={workflow.lead}
        facts={
          <FactStrip
            facts={[
              { label: "Triggered by", value: workflow.trigger },
              { label: "Ends with", value: workflow.outcome },
              { label: "Steps", value: `${workflow.spine.length}, of which ${agencySteps} are yours` },
            ]}
          />
        }
      />

      {/* The spine — the page's reason for existing --------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Heading kicker="The sequence" title="End to end, with owners" size="d3" width="full" />
            <p className="mt-6 max-w-[34rem] text-body leading-relaxed text-ink-soft" data-reveal>
              The agency opens the sequence and the agency closes it. That is a property of every
              workflow published here, not a coincidence of this one.
            </p>
            <SpineKey className="mt-8" />
          </div>
          <Spine steps={workflow.spine} />
        </div>
      </Section>

      {/* Checkpoints ---------------------------------------------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading kicker="Checkpoints" title="The steps that cannot be skipped" size="d3" width="full" />
            <p className="mt-7 max-w-[38rem] text-body leading-relaxed text-sage-bright" data-reveal>
              These are steps rather than guidance. A review requirement expressed as a standard
              loses to a deadline; one expressed as a step in the workflow does not.
            </p>
          </div>
          <MarkerList items={workflow.checkpoints} />
        </div>
      </Section>

      {/* Before and after ------------------------------------------------ */}
      <Section tone="paper">
        <Heading
          kicker="What changes"
          title="How this usually runs, and how it runs here"
          lead="The left column is not a straw man. It is how competent agencies deliver when nobody has had time to design the process."
          size="d3"
        />
        <div className="mt-14 grid gap-x-14 gap-y-14 lg:grid-cols-2">
          <div>
            <p className="label rule-t pt-5">Without a defined workflow</p>
            <IndexRows items={workflow.before} columns={1} className="mt-4" />
          </div>
          <div>
            <p className="label rule-t pt-5 text-lime-deep">With one</p>
            <IndexRows items={workflow.after} columns={1} className="mt-4" />
          </div>
        </div>
      </Section>

      {/* Illustration ---------------------------------------------------- */}
      {heroPhoto ? (
        <Section tone="warm">
          <Figure
            photo={heroPhoto}
            aspect="21/9"
            drift
            context="Trigger"
            caption={workflow.trigger}
          />
        </Section>
      ) : null}

      {/* FAQ -------------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Heading kicker="Questions" title="About this workflow" size="d3" width="full" />
          <FaqList faqs={workflow.faqs} />
        </div>
      </Section>

      {/* Onward ----------------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          <div>
            <Heading kicker="Draws on" title="Capabilities" size="d4" width="full" />
            <StoryRows
              className="mt-9"
              columns={1}
              items={relatedCapabilities(workflow.related.capabilities)}
            />
          </div>
          <div>
            <Heading kicker="Most useful at" title="These stages" size="d4" width="full" />
            <StoryRows className="mt-9" columns={1} items={relatedStages(workflow.stages)} />
          </div>
        </div>
        {/* The jobs this sequence serves, and the sectors that reach for it.
            Both inverted from relations authored on those pages. */}
        {(servingUseCases.length > 0 || sectors.length > 0) ? (
          <div className="mt-14 rule-t pt-9">
            <div className="grid gap-x-14 gap-y-10 lg:grid-cols-2">
              {servingUseCases.length > 0 ? (
                <div>
                  <p className="label">Run for these jobs</p>
                  <ul className="mt-4">
                    {servingUseCases.map((useCase) => (
                      <li key={useCase.slug}>
                        <Link
                          href={routes.useCase(useCase.slug)}
                          className="link-index text-small text-ink transition-colors hover:text-lime-deep"
                        >
                          {useCase.navLabel ?? useCase.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {sectors.length > 0 ? (
                <div>
                  <p className="label">Recommended in these sectors</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {sectors.map((industry) => (
                      <li key={industry.slug}>
                        <Link
                          href={routes.industry(industry.slug)}
                          className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-small text-ink-soft transition-colors hover:border-lime-deep hover:text-lime-deep"
                        >
                          {industry.navLabel ?? industry.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="mt-14 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={routes.workflows()} variant="secondary">
            All workflows
          </ButtonLink>
          <ButtonLink href={routes.framework("the-client-delivery-spine")} variant="secondary">
            The delivery spine framework
          </ButtonLink>
        </div>
      </Section>

      <Related
        tone="deep"
        kicker="Next"
        title="Put it to work"
        items={[
          {
            title: "The first ninety days with a new client",
            body: "A week-by-week structure for the opening quarter of an engagement.",
            href: routes.playbook("first-ninety-days-with-a-new-client"),
          },
          {
            title: "Get started",
            body: "One account, one workflow, a measurement agreed in advance.",
            href: routes.getStarted(),
          },
        ]}
      />
    </>
  );
}
