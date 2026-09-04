import type { Metadata } from "next";
import Link from "next/link";

import { Section, Heading, Statement, ButtonLink, JsonLd } from "@/components/ui/primitives";
import { MarkerList } from "@/components/ui/editorial";
import { IndexHero } from "@/components/sections/heroes";
import { CapabilityExplorer } from "@/components/interactive/CapabilityExplorer";
import { explorerStages } from "@/lib/explorer";
import { PhotoSection, Credit } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { capabilityGroups } from "@/data/capability-groups";
import { capabilities, capabilitiesInGroup, stagedCapabilities } from "@/data/capabilities";
import { stages } from "@/data/stages";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Capabilities", href: routes.capabilities() },
];

export const metadata: Metadata = pageMetadata({
  title: "Capabilities — the complete taxonomy, read from every stage",
  description:
    "Sixty-four capabilities across eight groups: foundation, brand, marketing, sales, content, programmes, organisation and system. Each read from all five stages.",
  path: routes.capabilities(),
  kicker: "Capabilities",
});

/**
 * The capability taxonomy hub.
 *
 * Sixty-four capabilities is too many for a list, so this page is a map: the
 * eight groups, each with its character, its count and its capabilities
 * inline. A reader should be able to find the one they came for without
 * opening a group, and understand the shape of the whole thing if they did not
 * come for anything in particular.
 *
 * The section beneath collects the boundaries once. An evaluator looking for
 * the edge of the claim should find it in one place rather than assembling it
 * from sixty-four pages.
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
            "The complete Mengo capability taxonomy, read from each of the five stages.",
            routes.capabilities(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="The taxonomy"
        title="Sixty-four capabilities, read five ways"
        lead="Every capability whose meaning genuinely changes with agency size has a page for each of the five stages — including the ones that say wait, and name what is worth doing first instead."
        count={capabilities.length}
        countLabel={`capabilities in ${capabilityGroups.length} groups`}
        note={`${stagedCapabilities.length} of them are read from each of the ${stages.length} stages. The other ${capabilities.length - stagedCapabilities.length} do not vary with size, and say so rather than padding.`}
      />

      {/* The map ---------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-16 lg:grid-cols-2">
          {capabilityGroups.map((group) => {
            const members = capabilitiesInGroup(group.slug);
            return (
              <div key={group.slug} data-reveal>
                <div className="rule-t pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h2 className="type-title text-h5">
                      <Link
                        href={routes.capabilityGroup(group.slug)}
                        className="transition-colors hover:text-lime-deep"
                      >
                        {group.title}
                      </Link>
                    </h2>
                    <span className="label tnum text-[0.6875rem]">{members.length}</span>
                  </div>
                  <p className="mt-2.5 max-w-[46ch] text-body text-ink-soft">{group.character}</p>
                </div>

                {/* Chips rather than rows: sixty-four titles in eight blocks
                    reads as a map, where sixty-four ruled rows reads as a
                    wall. The group hubs do the browsing. */}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {members.map((capability) => (
                    <li key={capability.slug}>
                      <Link
                        href={routes.capability(group.slug, capability.slug)}
                        className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-small transition-colors hover:border-lime-deep hover:text-lime-deep"
                      >
                        {capability.navLabel ?? capability.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={routes.capabilityGroup(group.slug)}
                  className="link-index mt-5 text-small font-semibold text-lime-deep transition-colors hover:text-ink"
                >
                  {group.title}: what to adopt first →
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* The explorer ------------------------------------------------------ */}
      <Section tone="warm" id="explorer" labelledBy="explorer-heading">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
          <Heading
            kicker="Narrow it down"
            title="Pick the week that sounds like yours"
            size="d3"
            width="full"
            id="explorer-heading"
          />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            Sixty-four is a taxonomy, not an answer. Choose a stage and the set collapses to what
            carries the constraint now, what follows once that is running, and what is worth leaving
            alone — with the thing to do first instead.
          </p>
        </div>
        <div className="mt-12">
          <CapabilityExplorer stages={explorerStages} />
        </div>
      </Section>

      {/* The shared boundary ---------------------------------------------- */}
      {heroPhoto ? (
        <PhotoSection photo={heroPhoto} scrim="start" align="start">
          <Statement>
            Across all sixty-four, the same four things never move: the client relationship, the
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

      {/* How to read it ---------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="Where this goes next" title="A capability is only half of it" size="d3" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            A capability says what can be carried. A workflow says how it runs, who opens it and who
            closes it — and every one of them closes with a person. Each group hub also carries an
            adoption order, so the taxonomy never has to be read as a to-do list.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={routes.workflows()}>See the workflows</ButtonLink>
          <ButtonLink href={routes.howItWorks()} variant="secondary">
            How it works, end to end
          </ButtonLink>
          <ButtonLink href={routes.explore()} variant="secondary">
            Explore every page
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
