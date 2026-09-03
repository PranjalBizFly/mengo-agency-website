import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, Kicker, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import {
  IndexRows,
  NumberedRows,
  Ladder,
  LedgerBlock,
  Spine,
  SpineKey,
  StoryRows,
  MarkerList,
} from "@/components/ui/editorial";
import { PhotoHero } from "@/components/sections/heroes";
import { Figure, PhotoSection, Credit } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes, site } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { stages } from "@/data/stages";
import { capabilities } from "@/data/capabilities";
import { workflows } from "@/data/workflows";
import { industries } from "@/data/industries";
import { useCases } from "@/data/use-cases";
import { articles } from "@/data/articles";
import { frameworks } from "@/data/frameworks";
import { playbooks } from "@/data/playbooks";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  path: routes.home(),
  kicker: "For agencies",
});

/**
 * The homepage.
 *
 * One continuous argument rather than a stack of unrelated sections: the
 * reality of running an agency, what breaks, where the boundary sits, how the
 * work actually runs, who it is for at each size, and what to read next.
 *
 * Every section uses a different device — an index, a numbered argument, the
 * ledger, a spine on a photograph, the ladder, linked rows — so the page has a
 * rhythm rather than a repeated shape. The one section that would normally be
 * a wall of logos and statistics is instead an honest account of what we do
 * not have, which is the most defensible thing this site can put there.
 */
export default function HomePage() {
  const heroPhoto = photo("home:index:hero");
  const realityPhoto = photo("home:index:reality");
  const togetherPhoto = photo("home:index:together");
  const workflowPhoto = photo("home:index:workflow");
  const scalePhoto = photo("home:index:scale");
  const closePhoto = photo("home:index:close");

  const onboarding = workflows.find((w) => w.slug === "client-onboarding");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: site.name,
          description: site.description,
          url: site.url,
          about: { "@type": "Thing", name: "Marketing delivery for agencies" },
        }}
      />

      {/* 1 — Hero ------------------------------------------------------- */}
      {heroPhoto ? (
        <PhotoHero
          photo={heroPhoto}
          kicker="Mengo for agencies"
          title={
            <>
              Build a better agency.{" "}
              <span className="text-lime">Not a bigger overhead.</span>
            </>
          }
          lead="Your agency keeps the clients, the strategy and the final call. Mengo carries the research, planning, content systems and nurturing workflows behind them — so a small team can deliver like a larger one."
          actions={
            <>
              <ButtonLink href={routes.howItWorks()}>See how it works</ButtonLink>
              <ButtonLink href={routes.forAgencies()} variant="secondary">
                Find your stage
              </ButtonLink>
            </>
          }
          aside={
            <dl className="grid gap-x-10 gap-y-6 border-t border-sage/25 pt-7 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "You own", value: "Clients, strategy, final approval" },
                { label: "Mengo carries", value: "Research, planning, drafts, sequences" },
                { label: "Never", value: "Sending, publishing, ad spend, client contact" },
                { label: "Built for", value: "Solo through to multi-team agencies" },
              ].map((fact) => (
                <div key={fact.label}>
                  <dt className="label">{fact.label}</dt>
                  <dd className="mt-2 text-small leading-relaxed text-sage-bright">{fact.value}</dd>
                </div>
              ))}
            </dl>
          }
        />
      ) : null}

      {/* 2 — The reality ----------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <Heading
              kicker="The reality"
              title="Agencies do not run out of ideas. They run out of Thursday."
              size="d2"
              width="full"
            />
            <p className="mt-7 max-w-[40rem] text-lead text-ink-soft" data-reveal>
              Client work has deadlines. Delivery has clients waiting. The structural work behind
              good marketing — the research, the planning, the system that makes the next piece
              faster than the last — has neither, so it loses to whatever is urgent.
            </p>
            {realityPhoto ? <Figure photo={realityPhoto} aspect="4/3" drift className="mt-12" /> : null}
          </div>

          <div>
            <IndexRows
              columns={1}
              items={[
                {
                  label: "Every brief starts at zero",
                  body: "Positioning, audience, channels and a content plan get rebuilt from scratch for each client — even when two clients are in the same sector with the same buying cycle.",
                },
                {
                  label: "The unpaid work is most of the job",
                  body: "Research, planning and setting up the shape of a programme are real hours that never appear on an invoice, and they repeat in full on every account.",
                },
                {
                  label: "Context reassembly is invisible",
                  body: "Re-reading the strategy, the last three pieces and the tone the client likes, before writing a word. It is on no task list, and in most agencies it is one of the largest categories in the week.",
                },
                {
                  label: "Quality moves with the week",
                  body: "The first client of the month and the last get different versions of you. Clients notice inconsistency long before they notice a metric.",
                },
                {
                  label: "Growth means hiring",
                  body: "Win the client, recruit, onboard, deliver — with a quarter of compressed margin in the middle, taken as a bet on a pipeline that might not hold.",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 3 — What that actually costs ---------------------------------- */}
      <Section tone="warm">
        <Heading
          kicker="What it costs"
          title="The constraint is rarely talent. It is the fixed cost of every account."
          lead="Ask an agency what limits its growth and you will usually hear about hiring. Measure where the hours go and a different answer appears — one that no amount of recruitment fixes."
          size="d3"
        />
        <NumberedRows
          columns={2}
          className="mt-14"
          items={[
            {
              label: "Structural work dominates",
              body: "Research assembly, planning scaffolding and first drafts are necessary, repetitive between accounts, and largely identical whoever does them.",
            },
            {
              label: "It is done by expensive people",
              body: "So its cost lands in the salary line for skilled staff, where it looks like a talent shortage rather than a structural one.",
            },
            {
              label: "Hiring relocates the problem",
              body: "More production capacity generates more work needing review, and review was already tight. The same pressure returns one headcount higher.",
            },
            {
              label: "The quiet accounts pay for it",
              body: "Attention follows noise. The client who never complains gets whatever is left, and is the one who leaves without a conversation.",
            },
          ]}
        />
        <p className="mt-12 max-w-[44rem] text-body text-ink-soft" data-reveal>
          We wrote this argument out properly in{" "}
          <Link
            href={routes.article("the-agency-bottleneck-is-not-talent")}
            className="underline decoration-lime-deep decoration-[1.5px] underline-offset-[3px] transition-colors hover:text-lime-deep"
          >
            The agency bottleneck is not talent
          </Link>
          , along with how to measure it in a fortnight.
        </p>
      </Section>

      {/* 4 — The boundary. The site's central claim. -------------------- */}
      <Section tone="forest" id="the-boundary">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <Heading
            kicker="Mengo's role"
            title="Mengo works alongside the agency. It does not replace it."
            size="d2"
            width="full"
          />
          <Statement>
            Your agency stays the agency. What changes is how much of the work behind it has to be
            built by hand, every time, from nothing.
          </Statement>
        </div>

        <LedgerBlock
          className="mt-16"
          ledger={{
            agency: {
              heading: "Your agency owns",
              note: "Permanently, and in every workflow published here.",
              items: [
                {
                  label: "The client relationship",
                  body: "Every conversation, every difficult message, every renewal. Mengo never contacts your clients under any circumstance.",
                },
                {
                  label: "Strategy and expertise",
                  body: "What you recommend is your professional judgement. A draft informs it; it does not constitute it.",
                },
                {
                  label: "The final read",
                  body: "A named person decides that work is good enough to carry your agency's name. This is a required step, not a guideline.",
                },
                {
                  label: "Accountability",
                  body: "When something goes wrong, a person is answerable. That cannot be delegated to a system, and we would not want it to be.",
                },
              ],
            },
            mengo: {
              heading: "Mengo carries",
              note: "The structural layer that repeats on every account.",
              items: [
                {
                  label: "Research and context",
                  body: "Audience, competitor and channel context assembled at a consistent depth, with gaps marked as gaps rather than filled with invention.",
                },
                {
                  label: "Planning structure",
                  body: "A stored strategic layer per client and a themed plan that reflows when the offer or the channel mix changes.",
                },
                {
                  label: "Production volume",
                  body: "Briefs and drafts in the shapes each channel actually takes, so your hours go to editing rather than to first drafts.",
                },
                {
                  label: "Follow-up systems",
                  body: "Objection-led nurture sequences built to a consistent anatomy, ready for your client's own sending tools.",
                },
              ],
            },
          }}
        />

        <div className="mt-14 flex flex-wrap items-center gap-4" data-reveal>
          <ButtonLink href={routes.why()}>Read the full argument</ButtonLink>
          <ButtonLink href={routes.framework("the-ownership-ledger")} variant="secondary">
            The Ownership Ledger framework
          </ButtonLink>
        </div>
      </Section>

      {/* 5 — Agency and Mengo together --------------------------------- */}
      {togetherPhoto ? (
        <PhotoSection photo={togetherPhoto} scrim="start" align="start">
          <Kicker className="mb-7">Working together</Kicker>
          <h2 className="max-w-[18ch] text-d2 text-on-dark">
            The parts a client is paying for stay in human hands.
          </h2>
          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            <p className="text-lead text-sage-bright">
              A client hires an agency for judgement: someone who understands their business well
              enough to tell them something true, occasionally something they did not want to hear.
              Nothing about that changes here.
            </p>
            <MarkerList
              items={[
                "Mengo does not send email or messages",
                "Mengo does not publish to any account",
                "Mengo does not hold or spend advertising budget",
                "Mengo never contacts your clients",
              ]}
            />
          </div>
          <Credit photo={togetherPhoto} className="mt-12" />
        </PhotoSection>
      ) : null}

      {/* 6 — Growth stages --------------------------------------------- */}
      <Section tone="paper" id="stages">
        <Heading
          kicker="Whatever size you are"
          title="Five stages, one path"
          lead="An agency at each of these points has a different constraint, a different week and a different set of things that break. Start with the one that describes your Thursday."
          size="d3"
        />
        <Ladder
          className="mt-14"
          steps={stages.map((stage) => ({
            label: stage.title,
            shape: stage.shape,
            href: routes.stage(stage.slug),
          }))}
        />
      </Section>

      {/* 7 — What Mengo helps with ------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <Heading
            kicker="What Mengo helps with"
            title="Six areas of the work behind the recommendation"
            size="d3"
            width="full"
          />
          <p className="max-w-[42rem] text-body leading-relaxed text-ink-soft" data-reveal>
            Each of these has a page stating what goes in, what comes back, where your judgement is
            required and — the section most product pages leave out — what it deliberately does not
            do.
          </p>
        </div>
        <StoryRows
          className="mt-12"
          columns={2}
          items={capabilities.map((capability) => ({
            title: capability.title,
            body: capability.job,
            href: routes.capability(capability.slug),
          }))}
        />
      </Section>

      {/* 8 — The client workflow, on a photograph ----------------------- */}
      {workflowPhoto && onboarding ? (
        <PhotoSection photo={workflowPhoto} scrim="even" align="full" id="workflow">
          <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Kicker className="mb-7">A real client engagement</Kicker>
              <h2 className="text-d2 text-on-dark">From client brief to client delivery</h2>
              <p className="mt-7 max-w-[40rem] text-lead text-sage-bright">
                This is the onboarding workflow, unedited. Every step carries the side that owns it,
                and the pattern is not a coincidence: the agency opens the sequence and the agency
                closes it.
              </p>
              <SpineKey className="mt-9 text-sage-bright" />
              <div className="mt-9">
                <ButtonLink href={routes.workflow(onboarding.slug)} variant="secondary">
                  Open this workflow
                </ButtonLink>
              </div>
              <Credit photo={workflowPhoto} className="mt-10" />
            </div>

            <Spine steps={onboarding.spine} />
          </div>
        </PhotoSection>
      ) : null}

      {/* 9 — Scaling delivery ------------------------------------------ */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <Heading
              kicker="What changes"
              title="Adding an account stops meaning adding a person"
              size="d3"
              width="full"
            />
            <p className="mt-7 max-w-[42rem] text-lead text-ink-soft" data-reveal>
              The structural layer is what repeats in full on every account. Move it and the
              marginal cost of a client falls — but the constraint does not vanish, it moves. Review
              capacity becomes the binding one, and that is worth planning for before you sign
              anything.
            </p>
            <MarkerList
              className="mt-9 max-w-[42rem]"
              items={[
                "Production stops being what caps your account count",
                "Senior hours shift from assembly toward review and client contact",
                "Every account gets the same floor, including the quiet ones",
                "Hiring becomes a decision about judgement roles rather than about volume",
              ]}
            />
            <div className="mt-10 flex flex-wrap gap-3" data-reveal>
              <ButtonLink href={routes.useCase("scale-without-hiring")} variant="secondary">
                Scale without hiring too fast
              </ButtonLink>
              <ButtonLink href={routes.framework("the-agency-capacity-model")} variant="secondary">
                The capacity model
              </ButtonLink>
            </div>
          </div>

          {scalePhoto ? <Figure photo={scalePhoto} aspect="4/3" drift /> : null}
        </div>
      </Section>

      {/* 10 — Use cases and industries, as two indexes ------------------ */}
      <Section tone="deep">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          <div>
            <Heading kicker="By goal" title="What you are trying to do" size="d4" width="full" />
            <StoryRows
              className="mt-9"
              columns={1}
              items={useCases.map((useCase) => ({
                title: useCase.title,
                href: routes.useCase(useCase.slug),
              }))}
            />
          </div>
          <div>
            <Heading kicker="By client sector" title="Who you deliver for" size="d4" width="full" />
            <StoryRows
              className="mt-9"
              columns={1}
              items={industries.map((industry) => ({
                title: industry.title,
                href: routes.industry(industry.slug),
              }))}
            />
          </div>
        </div>
      </Section>

      {/* 11 — Evidence. The honest version. ----------------------------- */}
      <Section tone="paper" id="evidence">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Heading
            kicker="Evidence"
            title="What we are not showing you, and why"
            size="d3"
            width="full"
          />
          <div>
            <p className="max-w-[44rem] text-lead text-ink-soft" data-reveal>
              There are no client logos on this site, no testimonials, no case studies and no
              percentages. Mengo is early and we do not have agency outcome data we could stand
              behind. Publishing invented figures would be the fastest way to lose the readers we
              most want.
            </p>
            <IndexRows
              className="mt-12"
              columns={1}
              items={[
                {
                  label: "What we will tell you",
                  body: "Exactly what the product does, exactly where it stops, and which parts of your delivery it cannot help with. Every capability page carries an explicit limits section.",
                },
                {
                  label: "What we would rather you did",
                  body: "Run one account through one workflow, decide what you are measuring before you start, and compare it honestly against how that account was being delivered before.",
                },
                {
                  label: "Where the argument is checkable",
                  body: "The frameworks and playbooks here work without Mengo. That is deliberate — they are the part of the argument you can test on Monday, at no cost.",
                },
              ]}
            />
            <div className="mt-11 flex flex-wrap gap-3" data-reveal>
              <ButtonLink href={routes.responsibleAi()} variant="secondary">
                Our Responsible AI position
              </ButtonLink>
              <ButtonLink href={routes.compare()} variant="secondary">
                Honest comparisons
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 12 — Resources ------------------------------------------------- */}
      <Section tone="warm">
        <Heading
          kicker="Resources"
          title="Things you can use whether or not you ever use Mengo"
          lead="Frameworks to adopt under your own name, playbooks to work through on Monday, and writing about agency operations."
          size="d3"
        />
        <div className="mt-14 grid gap-x-14 gap-y-12 lg:grid-cols-3">
          <div>
            <p className="label rule-t pt-4">Frameworks</p>
            <StoryRows
              className="mt-5"
              columns={1}
              items={frameworks.map((framework) => ({
                title: framework.title,
                href: routes.framework(framework.slug),
              }))}
            />
          </div>
          <div>
            <p className="label rule-t pt-4">Playbooks</p>
            <StoryRows
              className="mt-5"
              columns={1}
              items={playbooks.map((playbook) => ({
                title: playbook.title,
                href: routes.playbook(playbook.slug),
              }))}
            />
          </div>
          <div>
            <p className="label rule-t pt-4">Journal</p>
            <StoryRows
              className="mt-5"
              columns={1}
              items={articles.slice(0, 4).map((article) => ({
                title: article.title,
                href: routes.article(article.slug),
              }))}
            />
          </div>
        </div>
      </Section>

      {/* 13 — Close ------------------------------------------------------ */}
      {closePhoto ? (
        <PhotoSection photo={closePhoto} scrim="panel" align="panel">
          <Kicker className="mb-7">Where to start</Kicker>
          <h2 className="max-w-[20ch] text-d3 text-on-dark">
            One account. One workflow. A measurement you agreed in advance.
          </h2>
          <p className="mt-6 max-w-[46rem] text-lead text-sage-bright">
            It is enough to find the gaps and small enough that a wrong answer costs you very
            little. If it does not work, you keep the written process — which is worth having
            either way.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={routes.getStarted()}>Get started</ButtonLink>
            <ButtonLink href={routes.howItWorks()} variant="secondary">
              See the full sequence first
            </ButtonLink>
          </div>
          <Credit photo={closePhoto} className="mt-10" />
        </PhotoSection>
      ) : null}
    </>
  );
}
