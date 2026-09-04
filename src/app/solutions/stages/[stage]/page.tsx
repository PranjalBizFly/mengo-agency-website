import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Section, Heading, Kicker, Statement, ButtonLink, FaqList, JsonLd } from "@/components/ui/primitives";
import { IndexRows, NumberedRows, LedgerBlock, Spine, SpineKey, StoryRows } from "@/components/ui/editorial";
import { RuleHero } from "@/components/sections/heroes";
import { Figure, PhotoSection, Credit } from "@/components/ui/Photo";
import { Related, relatedCapabilities, relatedWorkflows } from "@/components/sections/related";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { stages, stageBySlug } from "@/data/stages";
import type { StageSlug } from "@/lib/types";

export function generateStaticParams() {
  return stages.map((stage) => ({ stage: stage.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stage: string }>;
}): Promise<Metadata> {
  const { stage: slug } = await params;
  const stage = stageBySlug.get(slug as StageSlug);
  if (!stage) return {};
  return entityMetadata(stage);
}

/**
 * The stage archetype.
 *
 * The site's primary audience axis, so this page has to do one thing before
 * anything else: let a reader confirm within a paragraph that it is about
 * them. Hence the opening — the shape of the week, then what breaks, in that
 * reader's own language — before any mention of what Mengo does.
 *
 * The composition runs: situation, problems, the ledger, the week as a spine
 * on a photograph, the boundary out of this stage, then routes onward. The
 * ledger sits in the middle rather than at the end because it is the answer to
 * the anxiety the problems section just raised.
 */
export default async function StagePage({ params }: { params: Promise<{ stage: string }> }) {
  const { stage: slug } = await params;
  const stage = stageBySlug.get(slug as StageSlug);
  if (!stage) notFound();

  const heroPhoto = photo(`stage:${stage.slug}:hero`);
  const weekPhoto = photo(`stage:${stage.slug}:week`);

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Solutions", href: routes.solutions() },
    { label: "By stage", href: routes.stages() },
    { label: stage.title, href: routes.stage(stage.slug) },
  ];

  const next = stages.find((s) => s.order === stage.order + 1);
  const previous = stages.find((s) => s.order === stage.order - 1);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(stage.faqs)]} />

      <RuleHero
        trail={trail}
        kicker={`Stage ${stage.order + 1} of ${stages.length}`}
        title={stage.headline}
        lead={stage.lead}
        actions={
          <>
            <ButtonLink href={stage.cta.href}>{stage.cta.label}</ButtonLink>
            <ButtonLink href={routes.stages()} variant="secondary">
              Compare all five stages
            </ButtonLink>
          </>
        }
        facts={
          <div className="grid gap-x-12 gap-y-8 rule-t pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div>
              <p className="label">This stage looks like</p>
              <p className="mt-3 max-w-[36ch] text-lead text-ink">{stage.shape}</p>
            </div>
            {heroPhoto ? (
              <Figure
                photo={heroPhoto}
                aspect="21/9"
                context={`Stage ${stage.order + 1} of ${stages.length}`}
                caption={stage.shape}
              />
            ) : null}
          </div>
        }
      />

      {/* Where the week goes -------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Heading kicker="The situation" title="Where the week actually goes" size="d3" width="full" />
          <IndexRows items={stage.situation} columns={1} />
        </div>
      </Section>

      {/* What breaks ----------------------------------------------------- */}
      <Section tone="warm">
        <Heading
          kicker="What breaks"
          title="The problems this stage recognises"
          lead="Not a list of things a system could fix — a list of what an agency at this size actually reports going wrong."
          size="d3"
        />
        <NumberedRows items={stage.problems} columns={2} className="mt-14" />
      </Section>

      {/* The ledger ------------------------------------------------------ */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <Heading kicker="The boundary" title="What stays yours" size="d2" width="full" />
          <Statement>
            The division does not change with size. Only the language for it does.
          </Statement>
        </div>
        <LedgerBlock ledger={stage.ledger} className="mt-16" />
      </Section>

      {/* The week, as a spine -------------------------------------------- */}
      {weekPhoto ? (
        <PhotoSection photo={weekPhoto} scrim="even" align="full">
          <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Kicker className="mb-7">The working week</Kicker>
              <h2 className="text-d3 text-on-dark">How the week runs at this stage</h2>
              <p className="mt-6 max-w-[38rem] text-lead text-sage-bright">
                Every step carries the side that owns it. The agency opens the week and closes it.
              </p>
              <SpineKey className="mt-8 text-sage-bright" />
              <Credit photo={weekPhoto} className="mt-10" />
            </div>
            <Spine steps={stage.week} />
          </div>
        </PhotoSection>
      ) : (
        <Section tone="deep">
          <Heading kicker="The working week" title="How the week runs at this stage" size="d3" />
          <SpineKey className="mt-8" />
          <Spine steps={stage.week} className="mt-8" />
        </Section>
      )}

      {/* The transition -------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start">
          <Heading kicker="What changes next" title={`Moving to ${stage.transition.to}`} size="d4" width="full" />
          <div>
            <p className="max-w-[46rem] text-lead text-ink-soft" data-reveal>
              {stage.transition.body}
            </p>
            <div className="mt-9 flex flex-wrap gap-4" data-reveal>
              {previous ? (
                <Link
                  href={routes.stage(previous.slug)}
                  className="link-index text-body font-semibold text-lime-deep underline decoration-lime-deep decoration-[1.5px] underline-offset-[4px] transition-colors hover:text-ink"
                >
                  ← {previous.title}
                </Link>
              ) : null}
              {next ? (
                <Link
                  href={routes.stage(next.slug)}
                  className="link-index text-body font-semibold text-lime-deep underline decoration-lime-deep decoration-[1.5px] underline-offset-[4px] transition-colors hover:text-ink"
                >
                  {next.title} →
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      {/* Where to go next ------------------------------------------------ */}
      <Section tone="warm">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          <div>
            <Heading kicker="Most relevant here" title="Capabilities" size="d4" width="full" />
            <StoryRows className="mt-9" columns={1} items={relatedCapabilities(stage.capabilities)} />
          </div>
          <div>
            <Heading kicker="Most relevant here" title="Workflows" size="d4" width="full" />
            <StoryRows className="mt-9" columns={1} items={relatedWorkflows(stage.workflows)} />
          </div>
        </div>
      </Section>

      {/* FAQ -------------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Heading kicker="Questions" title="At this stage, people ask" size="d3" width="full" />
          <FaqList faqs={stage.faqs} />
        </div>
      </Section>

      <Related
        tone="deep"
        title={stage.cta.label}
        kicker="Next"
        items={[
          { title: stage.cta.label, body: stage.cta.note, href: stage.cta.href },
          {
            title: "How it works",
            body: "The full sequence from client brief to client delivery.",
            href: routes.howItWorks(),
          },
          {
            title: "Get started",
            body: "What a first conversation looks like, and what to bring.",
            href: routes.getStarted(),
          },
        ]}
      />
    </>
  );
}
