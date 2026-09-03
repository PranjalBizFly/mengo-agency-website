import type { Metadata } from "next";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { NumberedRows, MarkerList, StoryRows, IndexRows } from "@/components/ui/editorial";
import { PhotoHero } from "@/components/sections/heroes";
import { photo } from "@/lib/images";
import { routes, site } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { stages } from "@/data/stages";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Get Started", href: routes.getStarted() },
];

export const metadata: Metadata = pageMetadata({
  title: "Get started — one account, one workflow, one measurement",
  description:
    "How to evaluate Mengo for your agency: pick one account, run one workflow end to end, and decide what you are measuring before you begin.",
  path: routes.getStarted(),
  kicker: "Get started",
});

/**
 * The conversion page, written as a method rather than a pitch.
 *
 * A form would be the conventional choice here. It is deliberately not the
 * centre of this page: an agency evaluating a delivery change needs to know
 * what a sensible evaluation looks like more than it needs a field to type an
 * email into, and telling them that first is also the most persuasive thing
 * available.
 *
 * There is no form component on this site at all. Contact runs through the
 * company contact page, which is honest about what happens next rather than
 * implying an automated onboarding that does not exist.
 */
export default function GetStartedPage() {
  const heroPhoto = photo("page:get-started:hero");

  return (
    <>
      <JsonLd data={breadcrumbSchema(TRAIL)} />

      {heroPhoto ? (
        <PhotoHero
          photo={heroPhoto}
          kicker="Get started"
          title="Start with one account, not with your whole book"
          lead="A delivery change that touches every client in the same month is the worst possible way to find out whether it works. One account is enough to find the gaps and small enough that a wrong answer costs you very little."
          actions={
            <>
              <ButtonLink href={routes.contact()}>Start a conversation</ButtonLink>
              <ButtonLink href={routes.howItWorks()} variant="secondary">
                See the sequence first
              </ButtonLink>
            </>
          }
        />
      ) : null}

      {/* The method ------------------------------------------------------ */}
      <Section tone="paper">
        <Heading
          kicker="A sensible evaluation"
          title="Five steps, in this order"
          lead="This is what we would want you to do whether or not you end up using Mengo. Steps one and two are worth doing on their own."
          size="d3"
        />
        <NumberedRows
          className="mt-14"
          columns={1}
          items={[
            {
              label: "Measure where your hours actually go",
              body: "Two weeks, by work type rather than by client, everyone who touches delivery including you. Most agencies find the composition surprising, and the surprise redirects everything that follows. If you do nothing else on this list, do this.",
            },
            {
              label: "Decide what you are measuring",
              body: "Before anything changes. Hours per account, elapsed time to a first plan, consistency against your standard, or how much senior time went to production. Pick one or two and record them now, or you will end up arguing about impressions.",
            },
            {
              label: "Pick one account",
              body: "Ideally a representative one rather than your most difficult or your easiest. Not your largest — the cost of a mistake there is higher than the value of the information.",
            },
            {
              label: "Run one workflow end to end",
              body: "Properly, including the checkpoints, even where they feel heavy for a single account. Skipping the review steps means testing something other than what is described on this site.",
            },
            {
              label: "Compare honestly",
              body: "Against how that account was actually being delivered before, not against how you would have liked it to be. Then decide — including deciding to stop, which is a legitimate outcome and costs you only the time.",
            },
          ]}
        />
      </Section>

      {/* What to bring ---------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-2">
          <div>
            <Heading kicker="For a first conversation" title="What is useful to bring" size="d4" width="full" />
            <MarkerList
              className="mt-9"
              items={[
                "How many accounts you run, and roughly what each receives",
                "Where you believe your delivery time goes — and whether you have measured it",
                "What you have already tried, including what did not work",
                "Any contractual constraints on where client material may be processed",
                "What would have to be true for a pilot to count as successful",
              ]}
            />
          </div>
          <div>
            <Heading kicker="What to expect" title="What the conversation is like" size="d4" width="full" />
            <IndexRows
              className="mt-4"
              columns={1}
              items={[
                {
                  label: "Questions rather than a demo",
                  body: "Expect to be asked what is actually breaking in your delivery. Mengo is early and we are more interested in agencies with a specific problem than in general interest.",
                },
                {
                  label: "An honest answer about fit",
                  body: "If your constraint is new business, design production or media operations, we will say so. Those are outside what this does.",
                },
                {
                  label: "No client list",
                  body: "We do not have agency case studies and will not invent any. If proof of others' results is what you need to proceed, we are too early for you and that is a reasonable position.",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Honest disqualifiers ---------------------------------------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading kicker="Before you spend the time" title="When not to start" size="d3" width="full" />
            <Statement className="mt-9">
              Finding out here that the answer is no costs you five minutes. Finding out in month
              three costs a quarter.
            </Statement>
          </div>
          <MarkerList
            tone="warn"
            items={[
              "Your current delivery is consistent, sustainable and profitable. The honest answer is that you may not need this.",
              "You are mid-crisis. A delivery change during a bad quarter adds risk exactly when you have least tolerance for it — stabilise first.",
              "Review capacity is already your bottleneck. Adding production makes that worse, not better.",
              "Nobody can own the transition. A change with no named owner reverts within a quarter and you will have spent the effort for nothing.",
              "Your constraint is design, video, development or media buying. None of those are in scope.",
            ]}
          />
        </div>
      </Section>

      {/* Read first --------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="Or read first" title="Start with the page for your size" size="d3" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            Each stage page describes the week, what breaks and what changes on the way to the next
            stage. If none of them describes your Thursday, this is probably not for you — and that
            is a useful thing to learn without a conversation.
          </p>
        </div>
        <StoryRows
          className="mt-12"
          columns={2}
          items={stages.map((stage) => ({
            title: stage.title,
            body: stage.shape,
            href: routes.stage(stage.slug),
          }))}
        />
        <div className="mt-14 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={routes.contact()}>Start a conversation</ButtonLink>
          <ButtonLink href={routes.responsibleAi()} variant="secondary">
            Read our Responsible AI position
          </ButtonLink>
        </div>
        <p className="mt-10 max-w-[46rem] text-fine text-ink-soft" data-reveal>
          Evaluating this through procurement or compliance? Say so in your first message and it
          will be routed rather than answered generically. The Mengo product site for business
          owners is at{" "}
          <a
            href={site.productSite}
            rel="noopener noreferrer"
            className="underline decoration-lime-deep underline-offset-2"
          >
            mengoengine.com
          </a>
          .
        </p>
      </Section>
    </>
  );
}
