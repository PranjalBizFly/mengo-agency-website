import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Section, Heading, Statement, ButtonLink, FaqList, JsonLd } from "@/components/ui/primitives";
import { IndexRows, NumberedRows } from "@/components/ui/editorial";
import { IndexHero } from "@/components/sections/heroes";
import { RELEVANCE_LABEL } from "@/components/sections/capability-stage";
import { routes } from "@/lib/site";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema, faqSchema } from "@/seo/schema";
import { capabilityGroups, groupBySlug } from "@/data/capability-groups";
import { capabilitiesInGroup } from "@/data/capabilities";
import { stages } from "@/data/stages";

export function generateStaticParams() {
  return capabilityGroups.map((group) => ({ group: group.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string }>;
}): Promise<Metadata> {
  const { group: slug } = await params;
  const group = groupBySlug.get(slug as never);
  if (!group) return {};
  return entityMetadata(group);
}

/**
 * The capability group hub.
 *
 * What earns this page its place is `adoptionOrder`. A hub that lists its
 * capabilities is a menu; one that says which three to do first and which to
 * leave until later is advice — and at sixty-four capabilities, an agency
 * needs the second far more than the first.
 *
 * The capability rows carry a per-stage relevance strip, so a reader can see
 * at a glance which of a group's capabilities are core at their own size
 * without opening any of them.
 */
export default async function CapabilityGroupPage({
  params,
}: {
  params: Promise<{ group: string }>;
}) {
  const { group: slug } = await params;
  const group = groupBySlug.get(slug as never);
  if (!group) notFound();

  const members = capabilitiesInGroup(group.slug);
  const staged = members.filter((c) => c.depth === "staged");

  const trail = [
    { label: "Home", href: routes.home() },
    { label: "Capabilities", href: routes.capabilities() },
    { label: group.title, href: routes.capabilityGroup(group.slug) },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          collectionSchema(group.title, group.summary, routes.capabilityGroup(group.slug)),
          faqSchema(group.faqs),
        ]}
      />

      <IndexHero
        trail={trail}
        kicker="Capability group"
        title={group.headline}
        lead={group.lead}
        count={members.length}
        countLabel="capabilities"
        note={group.character}
      />

      {/* The capabilities, with a stage relevance strip ------------------- */}
      <Section tone="paper">
        <ul data-reveal-stagger>
          {members.map((capability) => (
            <li key={capability.slug} data-reveal>
              <Link
                href={routes.capability(group.slug, capability.slug)}
                className="group block rule-t py-9"
              >
                <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
                  <div>
                    <h2 className="type-title text-h5 transition-colors group-hover:text-lime-deep">
                      {capability.title}
                    </h2>
                    <p className="mt-3 max-w-[54ch] text-body leading-relaxed text-ink-soft">
                      {capability.job}
                    </p>
                  </div>

                  <div>
                    {capability.depth === "staged" ? (
                      <>
                        <p className="label mb-3 text-[0.6875rem]">Relevance by stage</p>
                        {/* A strip rather than a list: the shape of it is the
                            information — which stages this is core at, and
                            where it says wait. */}
                        <ul className="flex flex-wrap gap-x-4 gap-y-2">
                          {capability.stages.map((view) => (
                            <li key={view.stage} className="flex items-center gap-1.5">
                              <span
                                aria-hidden
                                className={`inline-block h-2 w-2 rounded-full ${
                                  view.relevance === "core"
                                    ? "bg-lime-deep"
                                    : view.relevance === "useful"
                                      ? "bg-ink-soft/50"
                                      : "border border-ink-soft/40 bg-transparent"
                                }`}
                              />
                              <span className="text-fine text-ink-soft">
                                {stages.find((s) => s.slug === view.stage)?.navLabel ?? view.stage}
                                <span className="sr-only">: {RELEVANCE_LABEL[view.relevance]}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <p className="label mb-3 text-[0.6875rem]">Relevance by stage</p>
                        <p className="max-w-[42ch] text-fine leading-relaxed text-ink-soft">
                          Does not vary by agency size, so it has no stage pages.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-fine text-ink-soft" data-reveal>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-lime-deep" /> Core at this stage
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-ink-soft/50" /> Useful
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="inline-block h-2 w-2 rounded-full border border-ink-soft/40" /> Later
          </span>
        </p>
      </Section>

      {/* Why this group ---------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Heading kicker="Why this group" title="What you reach for it for" size="d3" width="full" />
          <IndexRows items={group.whyGroup} columns={1} />
        </div>
      </Section>

      {/* Adoption order — the reason this page exists --------------------- */}
      <Section tone="forest">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <Heading kicker="Adoption order" title="What to do first, and what to leave" size="d2" width="full" />
          <Statement>
            A hub that lists its capabilities is a menu. This is the part that is actually advice.
          </Statement>
        </div>
        <NumberedRows items={group.adoptionOrder} columns={1} className="mt-16" />
      </Section>

      {/* FAQ ---------------------------------------------------------------- */}
      <Section tone="paper">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Heading kicker="Questions" title={`About ${group.title.toLowerCase()}`} size="d3" width="full" />
          <FaqList faqs={group.faqs} />
        </div>
      </Section>

      {/* Onward -------------------------------------------------------------- */}
      <Section tone="warm">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <Heading kicker="Elsewhere" title="Other capability groups" size="d4" width="full" />
          <p className="max-w-[44rem] text-body leading-relaxed text-ink-soft" data-reveal>
            {staged.length} of this group&rsquo;s {members.length} capabilities have a page for each
            agency stage, because what they mean genuinely differs with size.
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3" data-reveal>
          {capabilityGroups
            .filter((other) => other.slug !== group.slug)
            .map((other) => (
              <li key={other.slug}>
                <Link
                  href={routes.capabilityGroup(other.slug)}
                  className="inline-flex min-h-11 items-center rounded-full border border-ink/20 px-5 text-body transition-colors hover:border-lime-deep hover:text-lime-deep"
                >
                  {other.title}{" "}
                  <span className="ml-2 text-fine text-ink-soft">
                    {capabilitiesInGroup(other.slug).length}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
        <div className="mt-12" data-reveal>
          <ButtonLink href={routes.capabilities()} variant="secondary">
            The full taxonomy
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
