import type { Metadata } from "next";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { StoryRows, MarkerList } from "@/components/ui/editorial";
import { IndexHero } from "@/components/sections/heroes";
import { PhotoSection, Credit } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { capabilities } from "@/data/capabilities";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Capabilities", href: routes.capabilities() },
];

export const metadata: Metadata = pageMetadata({
  title: "Capabilities — what Mengo helps agencies with",
  description:
    "Six areas of marketing work Mengo carries behind agency client delivery: strategy, content, campaigns, lead nurturing, research and marketing systems.",
  path: routes.capabilities(),
  kicker: "Capabilities",
});

/**
 * The capabilities hub.
 *
 * Composed as a long index with each capability's job as the second line,
 * rather than as tiles — six items with a sentence each is a list, and the
 * list is more scannable than a grid at every viewport.
 *
 * The section beneath is the site's shared limits statement. Collecting the
 * boundaries once at hub level means an evaluator can find them in one place
 * instead of assembling them from six pages.
 */
export default function CapabilitiesPage() {
  const heroPhoto = photo("capabilities:index:hero");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Capabilities",
            "The six areas of marketing work Mengo carries behind agency delivery.",
            routes.capabilities(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="What Mengo helps with"
        title="Six areas of the work behind the recommendation"
        lead="Each page states what goes in, what comes back, where your judgement is required, and what the capability deliberately does not do."
        count={capabilities.length}
        countLabel="capabilities"
        note="The limits section is on every one of them. If a claim is not made there, it is not being made."
      />

      <Section tone="paper" tight>
        <StoryRows
          columns={1}
          items={capabilities.map((capability) => ({
            title: capability.title,
            body: capability.job,
            href: routes.capability(capability.slug),
          }))}
        />
      </Section>

      {/* The shared boundary ------------------------------------------- */}
      {heroPhoto ? (
        <PhotoSection photo={heroPhoto} scrim="start" align="start">
          <Statement>
            Across all six, the same four things never move: the client relationship, the
            recommendation, the final read and accountability.
          </Statement>
          <div className="mt-12 grid gap-x-14 gap-y-9 md:grid-cols-2">
            <div>
              <p className="label mb-6">Mengo never does any of this</p>
              <MarkerList
                tone="warn"
                items={[
                  "Send email, SMS or messages",
                  "Publish to social or web accounts",
                  "Hold, spend or manage advertising budget",
                  "Contact your clients, in any circumstance",
                  "Verify facts about a client's business",
                ]}
              />
            </div>
            <div>
              <p className="label mb-6">And it is not a substitute for</p>
              <MarkerList
                tone="warn"
                items={[
                  "Marketing expertise — you need enough to judge an output",
                  "An editor. Unedited drafts read as unedited drafts",
                  "Design, photography, video or development",
                  "Media buying and account management",
                  "Legal or compliance advice",
                ]}
              />
            </div>
          </div>
          <Credit photo={heroPhoto} className="mt-12" />
        </PhotoSection>
      ) : null}

      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="How they fit together" title="Capabilities run inside workflows" size="d3" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            A capability is what Mengo does; a workflow is when it does it, in what order, and where
            your review sits. If you are trying to picture the whole thing, the workflows are the
            better starting point.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={routes.workflows()}>See the workflows</ButtonLink>
          <ButtonLink href={routes.howItWorks()} variant="secondary">
            How it works, end to end
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
