import type { Metadata } from "next";

import { Section, Heading, Kicker, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { IndexRows, NumberedRows, LedgerBlock, MarkerList, StoryRows } from "@/components/ui/editorial";
import { PhotoHero } from "@/components/sections/heroes";
import { Figure, PhotoSection, Credit } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { comparisons } from "@/data/comparisons";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Why Mengo", href: routes.why() },
];

export const metadata: Metadata = pageMetadata({
  title: "Why Mengo — the argument, and where the boundary sits",
  description:
    "Mengo works alongside the agency rather than replacing it. The full argument: what actually constrains agency delivery, which layer moves, and what never does.",
  path: routes.why(),
  kicker: "Why Mengo",
});

/**
 * The argument page.
 *
 * Its job is to be persuasive by being checkable. The structure is a chain
 * anyone can disagree with at a specific link: here is the constraint, here is
 * why it is misdiagnosed, here is the distinction that resolves it, here is
 * where the boundary falls, and here is what we are not claiming.
 *
 * The last section is the load-bearing one. A page arguing for adopting
 * something is only trustworthy if it also states, in the same voice and at
 * the same length, what would make it the wrong choice.
 */
export default function WhyMengoPage() {
  const heroPhoto = photo("page:why-mengo:hero");
  const controlPhoto = photo("page:why-mengo:control");
  const structurePhoto = photo("page:why-mengo:structure");

  return (
    <>
      <JsonLd data={breadcrumbSchema(TRAIL)} />

      {heroPhoto ? (
        <PhotoHero
          photo={heroPhoto}
          kicker="Why Mengo"
          title={
            <>
              The agency is not the bottleneck.{" "}
              <span className="text-lime">The rebuild is.</span>
            </>
          }
          lead="Every client engagement rebuilds the same scaffolding: research, positioning, a plan, a content structure, a follow-up sequence. The shape repeats. The hours never compound. That is the argument on this page, in one sentence."
          actions={
            <>
              <ButtonLink href={routes.howItWorks()}>See how it works</ButtonLink>
              <ButtonLink href={routes.compare()} variant="secondary">
                Compare the alternatives
              </ButtonLink>
            </>
          }
        />
      ) : null}

      {/* 1 — The misdiagnosis -------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Heading
            kicker="One — the misdiagnosis"
            title="Agencies describe a structural problem as a hiring problem"
            size="d3"
            width="full"
          />
          <div>
            <p className="max-w-[46rem] text-lead text-ink-soft" data-reveal>
              The talent explanation is appealing because it is partly true and entirely flattering:
              good agency people are genuinely hard to find, and it puts the cause outside the
              business, in a labour market nobody controls.
            </p>
            <p className="mt-6 max-w-[46rem] text-body leading-relaxed text-ink-soft" data-reveal>
              Measured, a large share of the week goes to work that is structurally identical
              between accounts. That work is not hard and requires no particular talent. It is
              simply necessary, and it repeats in full every time.
            </p>
            <IndexRows
              className="mt-12"
              columns={1}
              items={[
                {
                  label: "It is done by skilled people",
                  body: "So its cost lands in the salary line for skilled staff, where it presents as a shortage of them.",
                },
                {
                  label: "It is distributed rather than scheduled",
                  body: "Spread through everyone's week in fragments rather than appearing as a project, so nobody ever sees the total.",
                },
                {
                  label: "Its largest component is untracked",
                  body: "Reloading client context before starting anything appears on no task list, which is exactly why it is invisible.",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 2 — The distinction ---------------------------------------------- */}
      <Section tone="warm">
        <Heading
          kicker="Two — the distinction"
          title="Three kinds of hour, with three different economics"
          lead="This is the whole analytical move. Once agency hours are separated this way, what should and should not be systematised stops being a matter of opinion."
          size="d3"
        />
        <NumberedRows
          className="mt-14"
          columns={1}
          items={[
            {
              label: "Relationship work",
              body: "Client conversations, difficult news, understanding a business well enough to advise it. Irreducibly human, and the thing a client is actually paying for.",
            },
            {
              label: "Judgement work",
              body: "Deciding what to recommend, what to cut, whether a draft is right for this client. Requires expertise and cannot be produced at volume.",
            },
            {
              label: "Structural work",
              body: "Research assembly, planning scaffolding, first drafts, context reassembly. Necessary, repetitive between accounts, and largely the same whoever does it.",
            },
          ]}
        />
        <Statement className="mt-16">
          A hire adds capacity across all three, at the cost of all three. If the constraint is
          structural work, you are buying relationship and judgement capacity you did not need to
          get production capacity you did.
        </Statement>
      </Section>

      {/* 3 — The test ------------------------------------------------------ */}
      {structurePhoto ? (
        <PhotoSection photo={structurePhoto} scrim="start" align="start">
          <Kicker className="mb-7">Three — the test</Kicker>
          <h2 className="max-w-[22ch] text-d2 text-on-dark">
            Would two competent people in your agency produce meaningfully different work?
          </h2>
          <p className="mt-9 max-w-[46rem] text-lead text-sage-bright">
            If yes — and the difference would matter to the client — that is judgement, and it stays
            with a person. If no, it is structure, and it can move. One question, applied activity
            by activity, produces the boundary.
          </p>
          <p className="mt-6 max-w-[46rem] text-body leading-relaxed text-sage-bright">
            Four things are exempt from the test and stay with the agency whatever it says: the
            client relationship, the strategic recommendation, final approval, and accountability
            for what ships.
          </p>
          <div className="mt-10">
            <ButtonLink href={routes.framework("the-ownership-ledger")} variant="secondary">
              The framework, in full
            </ButtonLink>
          </div>
          <Credit photo={structurePhoto} className="mt-12" />
        </PhotoSection>
      ) : null}

      {/* 4 — The boundary --------------------------------------------------- */}
      <Section tone="paper">
        <Heading
          kicker="Four — the boundary"
          title="Applied to an agency engagement"
          lead="This is the same ledger that appears throughout the site, because it is the same argument every time. The language changes by stage; the division does not."
          size="d3"
        />
        <LedgerBlock
          className="mt-14"
          ledger={{
            agency: {
              heading: "Stays with the agency",
              note: "Exempt from the test, permanently.",
              items: [
                {
                  label: "The client relationship",
                  body: "Clients do not renew because reporting was punctual. They renew because someone understood their business and told them something true.",
                },
                {
                  label: "The strategic recommendation",
                  body: "A generated strategy is a hypothesis with good grammar — plausible by construction, which is exactly what makes it dangerous without someone who can judge it.",
                },
                {
                  label: "The final read",
                  body: "Someone decides this is good enough to carry your name. It is a required step in every workflow here, because a standard people are asked to uphold loses to a deadline.",
                },
                {
                  label: "Accountability",
                  body: "When something goes wrong a person is answerable, with the authority to fix it. A structure that points at a system has no mechanism at all.",
                },
              ],
            },
            mengo: {
              heading: "Can move",
              note: "Structure, with a checkpoint on the way back.",
              items: [
                {
                  label: "Research assembly",
                  body: "Context gathered at a consistent depth on every account, with what is unknown marked as unknown rather than filled in.",
                },
                {
                  label: "Planning scaffolding",
                  body: "A stored strategic layer and a plan that reflows on change, so keeping it current stops being a project.",
                },
                {
                  label: "First drafts",
                  body: "Briefed and written to the format each channel takes, so your hours go to editing — which is faster, and where voice actually enters the work.",
                },
                {
                  label: "Sequence construction",
                  body: "Follow-up built to a consistent anatomy so it can be reviewed in minutes rather than rebuilt from nothing.",
                },
              ],
            },
          }}
        />
      </Section>

      {/* 5 — What moves, honestly ------------------------------------------- */}
      <Section tone="deep">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <Heading
              kicker="Five — what actually changes"
              title="The constraint moves. It does not disappear."
              size="d3"
              width="full"
            />
            <p className="mt-7 max-w-[42rem] text-lead text-ink-soft" data-reveal>
              This is the part most tooling arguments skip, and it is the part that determines
              whether adopting anything goes well. Production stops binding. Review starts binding.
              The ceiling is higher and it is still a ceiling.
            </p>
            <MarkerList
              className="mt-9 max-w-[42rem]"
              items={[
                "Adding an account no longer implies a proportional increase in first-draft hours",
                "Every piece still needs a competent person to stand behind it — that has not changed",
                "If you produce more than you can review, the result is unedited work across a larger portfolio",
                "Which damages a reputation faster than being at capacity does",
              ]}
            />
          </div>
          {controlPhoto ? <Figure photo={controlPhoto} aspect="4/3" drift /> : null}
        </div>
      </Section>

      {/* 6 — What we are not claiming ----------------------------------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Heading kicker="Six — the limits" title="What this argument does not claim" size="d3" width="full" />
            <Statement className="mt-9">
              A page arguing for something is only worth reading if it says, at the same length,
              what would make it the wrong choice.
            </Statement>
          </div>
          <MarkerList
            tone="warn"
            items={[
              "It does not claim outcomes. There are no performance figures on this site because we have none we could stand behind.",
              "It does not claim to remove hiring. It changes what you hire for, and judgement roles are harder to fill than production roles.",
              "It does not claim to replace expertise. An agency that cannot evaluate an output gets more output it cannot evaluate.",
              "It does not claim to be proven at scale. Mengo is early, and pretending otherwise is the first thing a serious evaluator would catch.",
              "It does not apply if your current delivery is consistent, sustainable and profitable. In that case the honest answer is that you may not need this.",
            ]}
          />
        </div>
      </Section>

      {/* Onward -------------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="Test the argument" title="Against what you would otherwise do" size="d3" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            Each of these names the situations where the alternative is the better answer. The last
            one — carrying on exactly as you are — is the option most agencies are really weighing,
            and it has the advantage of already working.
          </p>
        </div>
        <StoryRows
          className="mt-12"
          columns={2}
          items={comparisons.map((comparison) => ({
            title: comparison.title,
            body: comparison.question,
            href: routes.comparison(comparison.slug),
          }))}
        />
        <div className="mt-14 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={routes.howItWorks()}>How it works</ButtonLink>
          <ButtonLink href={routes.forAgencies()} variant="secondary">
            Find your stage
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
