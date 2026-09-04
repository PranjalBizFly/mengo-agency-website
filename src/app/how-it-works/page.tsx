import type { Metadata } from "next";

import { Section, Heading, Kicker, Statement, ButtonLink, FaqList, JsonLd } from "@/components/ui/primitives";
import { Spine, SpineKey, IndexRows, MarkerList, StoryRows } from "@/components/ui/editorial";
import { PhotoHero } from "@/components/sections/heroes";
import { Figure, PhotoSection, Credit } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/seo/schema";
import { workflows } from "@/data/workflows";
import { frameworks } from "@/data/frameworks";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "How It Works", href: routes.howItWorks() },
];

/** The spine every workflow on the site is a variation of. */
const SPINE = frameworks.find((f) => f.slug === "the-client-delivery-spine");

const FAQS = [
  {
    q: "How long does the first pass take?",
    a: "Faster than a from-scratch discovery, but the gating factor is almost always client availability and how quickly your reviewer reaches the draft — not production time. Any number we gave you would be about our part of a process that is mostly yours.",
  },
  {
    q: "What if we already have a delivery process?",
    a: "Then map it against the nine steps and see which you genuinely perform. Most agencies find two missing, usually validating research before building strategy on it, and running a retrospective against a definition agreed in advance.",
  },
  {
    q: "Where exactly does our review sit?",
    a: "At four points: validating the research, making the strategic call, approving the plan before the client sees it, and approving work before it ships. Each one is a step in the workflow rather than a policy, because policies lose to deadlines.",
  },
  {
    q: "Does the client ever interact with Mengo?",
    a: "No. There is no circumstance in which Mengo contacts your clients. Every client-facing step in every workflow on this site is an agency step.",
  },
  {
    q: "What happens when something is unusual?",
    a: "It escalates to a person with the authority to decide. A process with no exception route gets abandoned the first time a client needs something it did not anticipate, which is why the escalation path is part of the design rather than an afterthought.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "How it works — from client brief to client delivery",
  description:
    "The nine-step sequence behind agency marketing delivery, with every step attributed. What the agency does, what Mengo carries, and where the four review checkpoints sit.",
  path: routes.howItWorks(),
  kicker: "How it works",
});

/**
 * The mechanism page.
 *
 * One long sequence rather than a set of feature sections, because the thing a
 * reader wants here is to follow a single client from a first conversation to
 * a delivered piece of work and see exactly where they are in it.
 *
 * The spine is shown once at full length on a photographic ground — the
 * longest single element on the site — and everything else on the page either
 * sets it up or reads off it.
 */
export default function HowItWorksPage() {
  const heroPhoto = photo("page:how-it-works:hero");
  const briefPhoto = photo("page:how-it-works:brief");
  const reviewPhoto = photo("page:how-it-works:review");

  const spineSteps = SPINE?.blocks.find((block) => block.type === "steps");

  return (
    <>
      <JsonLd data={[breadcrumbSchema(TRAIL), faqSchema(FAQS)]} />

      {heroPhoto ? (
        <PhotoHero
          photo={heroPhoto}
          kicker="How it works"
          title="One client, followed all the way through"
          lead="Nine steps from a first conversation to delivered work. Four of them are review checkpoints that belong to you, and the sequence opens and closes with your agency — not as a courtesy, but as a property of how it is built."
          actions={
            <>
              <ButtonLink href={routes.getStarted()}>Get started</ButtonLink>
              <ButtonLink href={routes.workflows()} variant="secondary">
                See all six workflows
              </ButtonLink>
            </>
          }
          aside={<SpineKey className="text-sage-bright" />}
        />
      ) : null}

      {/* It starts with a conversation ---------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <Heading kicker="It starts where it always did" title="With a conversation only you can have" size="d3" width="full" />
            <p className="mt-7 max-w-[42rem] text-lead text-ink-soft" data-reveal>
              Everything downstream inherits from the brief, and the brief comes from a conversation
              with the people who decide. The useful material — what actually stops their buyers
              buying, what the last agency got wrong — usually arrives once the agenda has run out.
            </p>
            <IndexRows
              className="mt-11"
              columns={1}
              items={[
                {
                  label: "The same fields every time",
                  body: "What they sell, what it costs, who buys it, what stops them, where traction already exists, what they will not do, and who approves.",
                },
                {
                  label: "Gaps are recorded, not filled",
                  body: "'The client does not know' is a valid and highly informative answer. Completing the brief from your own assumptions afterwards destroys its value.",
                },
                {
                  label: "It is a conversation, not a form",
                  body: "Sent as a form, a brief produces the answers people think you want. Filled during a call, it produces the material you actually need.",
                },
              ]}
            />
            <div className="mt-11" data-reveal>
              <ButtonLink href={routes.framework("the-standard-client-brief")} variant="secondary">
                The Standard Client Brief
              </ButtonLink>
            </div>
          </div>
          {briefPhoto ? (
            <Figure
              photo={briefPhoto}
              aspect="4/3"
              drift
              context="Step one"
              caption="The brief. One structure asked of every client, which does more for consistency than anything else available in year one."
            />
          ) : null}
        </div>
      </Section>

      {/* The full spine ---------------------------------------------------
          This is the page. The photographic ground is a treatment, so the
          spine renders either way — it must never be conditional on an image
          being assigned. */}
      {spineSteps?.type === "steps" ? (
        reviewPhoto ? (
          <PhotoSection photo={reviewPhoto} scrim="even" id="the-sequence">
            <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <Kicker className="mb-7">The sequence</Kicker>
                <h2 className="text-d2 text-on-dark">Nine steps, end to end</h2>
                <p className="mt-7 max-w-[38rem] text-lead text-sage-bright">
                  Every workflow on this site is a variation of this. Read the lane on each step:
                  the agency brackets the process, and the two hand-offs back to you are the
                  checkpoints that make the whole thing safe.
                </p>
                <SpineKey className="mt-9 text-sage-bright" />
                <Credit photo={reviewPhoto} className="mt-10" />
              </div>
              <Spine steps={spineSteps.items} />
            </div>
          </PhotoSection>
        ) : (
          <Section tone="forest" id="the-sequence">
            <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <Kicker className="mb-7">The sequence</Kicker>
                <h2 className="text-d2 text-on-dark">Nine steps, end to end</h2>
                <p className="mt-7 max-w-[38rem] text-lead text-sage-bright">
                  Every workflow on this site is a variation of this. Read the lane on each step:
                  the agency brackets the process, and the two hand-offs back to you are the
                  checkpoints that make the whole thing safe.
                </p>
                <SpineKey className="mt-9 text-sage-bright" />
              </div>
              <Spine steps={spineSteps.items} />
            </div>
          </Section>
        )
      ) : null}

      {/* The checkpoints ---------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading kicker="Your four checkpoints" title="Where the sequence stops for a person" size="d3" width="full" />
            <Statement className="mt-9">
              A review requirement written as a standard loses to a deadline. Written as a step, it
              does not.
            </Statement>
          </div>
          <IndexRows
            columns={1}
            items={[
              {
                label: "Validate the research",
                body: "Before anything is built on it. Some of the assembled context will be wrong, and finding that is the purpose of the step rather than a failure of it. This is the most commonly skipped checkpoint in agency delivery.",
              },
              {
                label: "Make the strategic call",
                body: "Not a review of a draft — a decision. You know the client's history, their appetite for risk and what their last agency got wrong. None of that was in the brief.",
              },
              {
                label: "Approve the plan",
                body: "Before the client sees it, and with the constraints only you know about already applied: their budget cycle, their capacity, the month their founder is unreachable.",
              },
              {
                label: "Approve the work",
                body: "A named person decides each piece is right for this client and good enough to carry your name. Publishing then happens in your own and your client's tools.",
              },
            ]}
          />
        </div>
      </Section>

      {/* What never happens --------------------------------------------------
          A statement, then the list beneath it at full width. The section above
          uses the same forest ground and a heading-beside-list split; running
          this one the same way would make the page's two most important claims
          look like one repeated section. */}
      <Section tone="forest">
        <Kicker className="mb-7">What never happens</Kicker>
        <h2 className="max-w-[20ch] text-d2 text-on-dark">
          The steps that are not in any workflow
        </h2>
        <p className="mt-8 max-w-[52rem] text-lead text-sage-bright" data-reveal>
          Not defaults, not settings, not &ldquo;off by default&rdquo;. There is no step in any
          published workflow that does any of these, which is why the boundary holds without anybody
          having to police it.
        </p>
        <MarkerList
          tone="warn"
          className="mt-12 lg:columns-2 lg:gap-x-14 lg:[&>li]:break-inside-avoid"
          items={[
            "Mengo sending an email, SMS or message on anyone's behalf",
            "Mengo publishing to a social or web account",
            "Mengo holding, spending or managing an advertising budget",
            "Mengo contacting your client, under any circumstance",
            "Work reaching a client without a named person having approved it",
            "A generated fact standing in for one nobody supplied",
          ]}
        />
      </Section>

      {/* The six workflows --------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="In practice" title="The same spine, six ways" size="d3" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            Onboarding a client, planning a quarter, running a production week, launching a
            campaign, building follow-up, and running a portfolio. Each is the sequence above with
            different content in it.
          </p>
        </div>
        <StoryRows
          className="mt-12"
          columns={2}
          items={workflows.map((workflow) => ({
            title: workflow.title,
            body: workflow.trigger,
            href: routes.workflow(workflow.slug),
          }))}
        />
      </Section>

      {/* FAQ ------------------------------------------------------------------ */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Heading kicker="Questions" title="About the mechanism" size="d3" width="full" />
          <FaqList faqs={FAQS} />
        </div>
      </Section>
    </>
  );
}
