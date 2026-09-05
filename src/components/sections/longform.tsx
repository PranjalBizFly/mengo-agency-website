import Link from "next/link";
import { Section, Kicker, ButtonLink } from "@/components/ui/primitives";
import { routes } from "@/lib/site";

/**
 * The two things every long-form page on the product site ends with, and this
 * one did not: a way to the next document in the run, and a way out of the
 * library altogether.
 *
 * Both matter more here than they look. A reader who finishes a guide has
 * given the site more attention than almost anyone else on it, and the page
 * was previously ending in a related rail and nothing else — no sense of the
 * collection continuing, and no action. That is the difference between a
 * library and a pile.
 */

export interface DocumentNeighbour {
  title: string;
  href: string;
}

/**
 * Previous and next within a collection, derived from its own order.
 *
 * Order comes from the data file, which is the order the collection is meant
 * to be read in — so this is real sequence rather than alphabetical filler. A
 * document at either end shows one side only rather than a disabled control.
 */
export function PrevNext({
  previous,
  next,
  collectionLabel,
  collectionHref,
}: {
  previous?: DocumentNeighbour;
  next?: DocumentNeighbour;
  collectionLabel: string;
  collectionHref: string;
}) {
  if (!previous && !next) return null;

  return (
    <Section tone="paper" as="div">
      <nav
        aria-label={`${collectionLabel} navigation`}
        className="rule-t grid gap-x-10 gap-y-8 pt-9 sm:grid-cols-2"
      >
        <div>
          {previous ? (
            <Link href={previous.href} className="group block">
              <span className="label">Previous</span>
              <span className="mt-3 block max-w-[34ch] type-title text-h6 text-balance transition-colors group-hover:text-lime-deep">
                {previous.title}
              </span>
            </Link>
          ) : (
            <Link href={collectionHref} className="group block">
              <span className="label">The collection</span>
              <span className="mt-3 block type-title text-h6 transition-colors group-hover:text-lime-deep">
                All {collectionLabel.toLowerCase()}
              </span>
            </Link>
          )}
        </div>
        <div className="sm:text-right">
          {next ? (
            <Link href={next.href} className="group block">
              <span className="label">Next</span>
              <span className="mt-3 block max-w-[34ch] type-title text-h6 text-balance transition-colors group-hover:text-lime-deep sm:ml-auto">
                {next.title}
              </span>
            </Link>
          ) : (
            <Link href={collectionHref} className="group block">
              <span className="label">The collection</span>
              <span className="mt-3 block type-title text-h6 transition-colors group-hover:text-lime-deep">
                All {collectionLabel.toLowerCase()}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </Section>
  );
}

/**
 * The closing band, and the last thing on every page of this site.
 *
 * The product site's shape: an eyebrow, a `d2` line on forest with a radial
 * lime wash behind it, one paragraph and one action. Deliberately not the
 * footer's call to action repeated — this one names what the reader has just
 * finished and offers what follows from it.
 */
export function CtaBand({
  eyebrow = "Next step",
  title,
  body,
  action = { label: "Get started", href: routes.getStarted() },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  action?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-forest py-section text-sage-bright">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_120%_at_82%_50%,rgb(163_230_37/0.15),transparent_64%)]"
      />
      <div className="wrap relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-20">
        <div>
          <Kicker className="mb-6">{eyebrow}</Kicker>
          <h2 className="max-w-[18ch] text-d2 text-on-dark" data-reveal>
            {title}
          </h2>
          <p className="mt-7 max-w-[46rem] text-lead text-sage-bright" data-reveal>
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={action.href}>{action.label}</ButtonLink>
          {secondary ? (
            <ButtonLink href={secondary.href} variant="secondary">
              {secondary.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** The library's closing band. One `CtaBand`, with the library's own words. */
export function DocumentCta({
  kicker = "After reading",
  title = "Try it on one account before the whole practice",
  body,
}: {
  kicker?: string;
  title?: string;
  body?: string;
}) {
  return (
    <CtaBand
      eyebrow={kicker}
      title={title}
      body={
        body ??
        "Everything in this library works without Mengo — that is why it is published. If you want to see what the same structure looks like carried by a system, start with one client and one workflow."
      }
      secondary={{ label: "More from the library", href: routes.resources() }}
    />
  );
}

/**
 * Previous and next for one item in an ordered collection.
 *
 * A helper rather than four copies of the same index arithmetic in four
 * templates — the collections differ, the sequencing rule does not.
 */
export function neighboursOf<T extends { slug: string; title: string }>(
  collection: T[],
  slug: string,
  href: (slug: string) => string,
): { previous?: DocumentNeighbour; next?: DocumentNeighbour } {
  const index = collection.findIndex((item) => item.slug === slug);
  if (index === -1) return {};
  const before = collection[index - 1];
  const after = collection[index + 1];
  return {
    previous: before ? { title: before.title, href: href(before.slug) } : undefined,
    next: after ? { title: after.title, href: href(after.slug) } : undefined,
  };
}
