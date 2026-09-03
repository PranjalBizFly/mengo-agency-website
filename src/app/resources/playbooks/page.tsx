import type { Metadata } from "next";
import Link from "next/link";

import { Section, JsonLd } from "@/components/ui/primitives";
import { IndexHero } from "@/components/sections/heroes";
import { Figure } from "@/components/ui/Photo";
import { photo } from "@/lib/images";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { playbooks } from "@/data/playbooks";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Resources", href: routes.resources() },
  { label: "Playbooks", href: routes.playbooks() },
];

export const metadata: Metadata = pageMetadata({
  title: "Playbooks — operational documents for agency delivery",
  description:
    "Step-by-step playbooks for agency client work: the first ninety days, quarterly reviews, building a client content system, and deciding whether to take the next client.",
  path: routes.playbooks(),
  kicker: "Playbooks",
});

/**
 * The playbooks index.
 *
 * Each row carries who it is for and roughly what it costs to work through,
 * because a playbook is a commitment of time and the reader is deciding
 * whether to make it. A title alone does not let them decide.
 */
export default function PlaybooksPage() {
  const heroPhoto = photo("resources:playbooks:hero");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(TRAIL),
          collectionSchema(
            "Playbooks",
            "Operational documents for agency client delivery.",
            routes.playbooks(),
          ),
        ]}
      />

      <IndexHero
        trail={TRAIL}
        kicker="Playbooks"
        title="Written to be worked through, not read"
        lead="Each one passes the same test: could an agency person follow this on Monday without needing Mengo at all? If not, it is marketing rather than a playbook."
        count={playbooks.length}
        countLabel="playbooks"
      />

      <Section tone="paper" tight>
        <ul data-reveal-stagger>
          {playbooks.map((playbook) => (
            <li key={playbook.slug} data-reveal>
              <Link href={routes.playbook(playbook.slug)} className="group block rule-t py-9">
                <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
                  <div>
                    <h2 className="max-w-[28ch] type-title text-h5 transition-colors group-hover:text-lime-deep">
                      {playbook.title}
                    </h2>
                    <p className="mt-3 max-w-[54ch] text-body leading-relaxed text-ink-soft">
                      {playbook.summary}
                    </p>
                  </div>
                  <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    <div>
                      <dt className="label text-[0.6875rem]">Written for</dt>
                      <dd className="mt-1.5 text-fine leading-relaxed text-ink-soft">
                        {playbook.audience}
                      </dd>
                    </div>
                    <div>
                      <dt className="label text-[0.6875rem]">Effort</dt>
                      <dd className="mt-1.5 text-fine leading-relaxed text-ink-soft">
                        {playbook.effort}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {heroPhoto ? (
        <Section tone="warm" tight>
          <Figure photo={heroPhoto} aspect="21/9" drift />
        </Section>
      ) : null}
    </>
  );
}
