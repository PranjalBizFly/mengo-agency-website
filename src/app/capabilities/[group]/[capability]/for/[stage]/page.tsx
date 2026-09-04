import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { MarkerList, StoryRows, Spine, SpineKey } from "@/components/ui/editorial";
import { RuleHero } from "@/components/sections/heroes";
import { Related, relatedWorkflows, relatedCapabilities } from "@/components/sections/related";
import { RELEVANCE_LABEL, RELEVANCE_NOTE } from "@/components/sections/capability-stage";
import { routes, absolute } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { capabilityBySlug, capabilityStagePairs } from "@/data/capabilities";
import { groupBySlug } from "@/data/capability-groups";
import { stages, stageBySlug } from "@/data/stages";
import type { StageSlug } from "@/lib/types";

export function generateStaticParams() {
  return capabilityStagePairs().map(({ capability, stage }) => ({
    group: capability.group,
    capability: capability.slug,
    stage,
  }));
}

function resolve(capabilitySlug: string, groupSlug: string, stageSlug: string) {
  const capability = capabilityBySlug.get(capabilitySlug);
  if (!capability || capability.group !== groupSlug || capability.depth !== "staged") return null;
  const view = capability.stages.find((s) => s.stage === stageSlug);
  const stage = stageBySlug.get(stageSlug as StageSlug);
  if (!view || !stage) return null;
  return { capability, view, stage };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string; capability: string; stage: string }>;
}): Promise<Metadata> {
  const { group, capability: capabilitySlug, stage: stageSlug } = await params;
  const found = resolve(capabilitySlug, group, stageSlug);
  if (!found) return {};

  return pageMetadata({
    title: `${found.capability.title} for a ${found.stage.title.toLowerCase().replace(/^start an agency$/, "new agency")}`,
    description: `${found.view.headline}. ${found.view.situation}`,
    path: routes.capabilityStage(group, capabilitySlug, stageSlug),
    kicker: `${found.capability.title} · ${found.stage.title}`,
    modifiedTime: found.capability.updated,
  });
}

/**
 * The capability × agency stage archetype — the site's largest page family.
 *
 * These exist because the central claim of the whole site is that a capability
 * means something different at different agency sizes, and a claim like that
 * has to be demonstrated rather than asserted. Each of these answers one
 * question: what does this capability mean when you are *this* kind of agency?
 *
 * The composition is deliberately different from its parent capability page —
 * shorter, more direct, opening with the situation in the reader's own
 * language rather than with a definition. And where the relevance is `later`,
 * the page leads with that: a page telling a solo agency to build a Wikipedia
 * profile would be worse than no page at all.
 */
export default async function CapabilityStagePage({
  params,
}: {
  params: Promise<{ group: string; capability: string; stage: string }>;
}) {
  const { group: groupSlug, capability: capabilitySlug, stage: stageSlug } = await params;
  const found = resolve(capabilitySlug, groupSlug, stageSlug);
  if (!found) notFound();

  const { capability, view, stage } = found;
  const group = groupBySlug.get(capability.group);
  const isLater = view.relevance === "later";

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Capabilities", href: routes.capabilities() },
    { label: group?.title ?? capability.group, href: routes.capabilityGroup(capability.group) },
    { label: capability.title, href: routes.capability(capability.group, capability.slug) },
    { label: stage.title, href: routes.capabilityStage(capability.group, capability.slug, view.stage) },
  ];

  /* Sibling stages, so a reader who has misjudged their own size can move
     sideways in one click rather than going back up two levels. */
  const siblings = capability.stages
    .filter((s) => s.stage !== view.stage)
    .map((s) => {
      const sibling = stageBySlug.get(s.stage);
      if (!sibling) return null;
      return {
        kicker: RELEVANCE_LABEL[s.relevance],
        title: sibling.title,
        body: s.headline,
        href: routes.capabilityStage(capability.group, capability.slug, s.stage),
      };
    })
    .filter((s) => s !== null);

  /* The steps of the parent capability's sequence, filtered to the lanes that
     matter here. A `later` stage does not get a sequence — showing one would
     undercut the recommendation the page just made. */
  const showSequence = !isLater;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${capability.title} for ${stage.title}`,
            description: view.headline,
            url: absolute(routes.capabilityStage(capability.group, capability.slug, view.stage)),
            isPartOf: {
              "@type": "WebPage",
              name: capability.title,
              url: absolute(routes.capability(capability.group, capability.slug)),
            },
            inLanguage: "en",
          },
        ]}
      />

      <RuleHero
        tone={isLater ? "warm" : "paper"}
        trail={trail}
        kicker={`${capability.title} · ${stage.title}`}
        title={view.headline}
        lead={view.situation}
        actions={
          <>
            <ButtonLink href={routes.capability(capability.group, capability.slug)} variant="secondary">
              {capability.title} in full
            </ButtonLink>
            <ButtonLink href={routes.stage(stage.slug)} variant="secondary">
              More on {stage.title}
            </ButtonLink>
          </>
        }
        facts={
          <div className="grid gap-x-12 gap-y-8 rule-t pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div>
              <p className="label">At this stage</p>
              <p
                className={`mt-3 type-title text-h6 ${view.relevance === "core" ? "text-lime-deep" : ""}`}
              >
                {RELEVANCE_LABEL[view.relevance]}
              </p>
              <p className="mt-2.5 max-w-[38ch] text-fine leading-relaxed text-ink-soft">
                {RELEVANCE_NOTE[view.relevance]}
              </p>
            </div>
            <div>
              <p className="label">This stage looks like</p>
              <p className="mt-3 max-w-[46ch] text-body leading-relaxed text-ink-soft">{stage.shape}</p>
            </div>
          </div>
        }
      />

      {/* Later stages lead with the redirection, because that is the advice */}
      {isLater && view.insteadDoThis ? (
        <Section tone="forest">
          <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <Heading kicker="Do this instead" title="Not yet — and here is what is worth doing" size="d3" width="full" />
            <div>
              <Statement>{view.insteadDoThis}</Statement>
              <p className="mt-9 max-w-[46rem] text-body leading-relaxed text-sage-bright" data-reveal>
                {view.problem}
              </p>
            </div>
          </div>
        </Section>
      ) : (
        <Section tone="warm">
          <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <Heading kicker="The problem here" title="What actually goes wrong" size="d3" width="full" />
            <div>
              <p className="max-w-[46rem] text-lead text-ink-soft" data-reveal>
                {view.problem}
              </p>
              <p className="mt-7 max-w-[46rem] text-body leading-relaxed text-ink-soft" data-reveal>
                {capability.meaning}
              </p>
            </div>
          </div>
        </Section>
      )}

      {/* The ledger, for this capability at this stage -------------------- */}
      <Section tone={isLater ? "paper" : "forest"}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <Heading kicker="The boundary" title="Who does what, here" size="d2" width="full" />
          <p className="max-w-[44rem] text-lead text-ink-soft" data-reveal>
            The division does not change with agency size. What changes is the language for it, and
            what the structural half actually consists of at this stage.
          </p>
        </div>

        <div className="ledger mt-16" data-reveal>
          <div className="ledger-lane">
            <div className="lane-head">
              <span className="lane-mark" data-lane="agency" aria-hidden />
              <div>
                <h3 className="type-title text-h5">Your agency owns</h3>
                <p className="mt-1.5 text-small text-ink-soft">Permanently, at every stage.</p>
              </div>
            </div>
            <MarkerList items={view.agency} />
          </div>
          <div className="ledger-rule" aria-hidden />
          <div className="ledger-lane">
            <div className="lane-head">
              <span className="lane-mark" data-lane="mengo" aria-hidden />
              <div>
                <h3 className="type-title text-h5">Mengo carries</h3>
                <p className="mt-1.5 text-small text-ink-soft">
                  {isLater ? "If and when you adopt this." : "At this stage, specifically."}
                </p>
              </div>
            </div>
            <MarkerList items={view.mengo} />
          </div>
        </div>
      </Section>

      {/* What changes ----------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start">
          <Heading kicker="What changes" title="Afterwards" size="d3" width="full" />
          <div>
            <p className="max-w-[46rem] text-lead text-ink-soft" data-reveal>
              {view.outcome}
            </p>
            <p className="mt-7 max-w-[46rem] text-fine text-ink-soft" data-reveal>
              Described without numbers, because we have no agency outcome data we could stand
              behind. What is stated here is what changes structurally, which you can verify against
              your own.
            </p>
          </div>
        </div>
      </Section>

      {/* The sequence, for stages where this is actually adopted ----------- */}
      {showSequence ? (
        <Section tone="deep">
          <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Heading kicker="How it runs" title="The sequence, unchanged by stage" size="d3" width="full" />
              <p className="mt-6 max-w-[36rem] text-body leading-relaxed text-ink-soft" data-reveal>
                The steps are the same whatever size the agency is. What differs is how much of it
                you were doing manually before.
              </p>
              <SpineKey className="mt-8" />
            </div>
            <Spine steps={capability.sequence} />
          </div>
        </Section>
      ) : null}

      {/* Limits ------------------------------------------------------------ */}
      <Section tone={showSequence ? "warm" : "deep"} tight>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Heading kicker="Limits" title="What this does not do" size="d4" width="full" />
          <MarkerList items={capability.limits} tone="warn" />
        </div>
      </Section>

      {/* Other stages ------------------------------------------------------ */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading
            kicker="Other stages"
            title={`${capability.title} at a different size`}
            size="d3"
            width="full"
          />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            If the situation above does not describe your Thursday, one of these probably does. An
            agency with four people and one enormous client runs like a solo practice, and a
            two-person shop with eleven retainers does not.
          </p>
        </div>
        <StoryRows className="mt-12" columns={2} items={siblings} />

        <div className="mt-14 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={routes.capability(capability.group, capability.slug)}>
            {capability.title} in full
          </ButtonLink>
          <Link
            href={routes.stages()}
            className="link-index text-body font-semibold text-lime-deep underline decoration-lime-deep decoration-[1.5px] underline-offset-[4px] transition-colors hover:text-ink"
          >
            Compare all {stages.length} stages →
          </Link>
        </div>
      </Section>

      <Related
        tone="warm"
        kicker="Related"
        title="Where this runs"
        items={[
          ...relatedWorkflows(capability.related.workflows),
          ...relatedCapabilities(capability.related.capabilities.slice(0, 2)),
        ]}
      />
    </>
  );
}
