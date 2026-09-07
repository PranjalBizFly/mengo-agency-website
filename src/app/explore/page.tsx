import type { Metadata } from "next";

import { JsonLd, Kicker } from "@/components/ui/primitives";
import { CountUp } from "@/components/ui/CountUp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageDirectory } from "@/components/explore/PageDirectory";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { pageDirectory, directoryPageCount } from "@/lib/directory";

const TRAIL = [
  { label: "Home", href: routes.home() },
  { label: "Explore", href: routes.explore() },
];

export const metadata: Metadata = pageMetadata({
  title: "Explore every page",
  description:
    "The complete directory, grouped by category and searchable from one field. Every published page on the site, in one list.",
  path: routes.explore(),
  kicker: "Directory",
});

/**
 * The directory.
 *
 * A site with five hundred pages needs a room where all of them are visible at
 * once. This is that room, and it is the page search sends anyone who does not
 * know the word to type.
 *
 * The list is server-rendered in full, so the page is complete for a crawler
 * and for a reader without JavaScript. The bar above it only narrows what is
 * already there — see `DirectoryControls` for why the index is not shipped a
 * second time.
 */
export default function ExplorePage() {
  const categories = pageDirectory();
  const total = directoryPageCount();

  return (
    <>
      <JsonLd data={breadcrumbSchema(TRAIL)} />

      {/* The opening band. Compact by design: this page is a tool, and the
          controls under it are the first thing it is for, so the heading takes
          the hub scale rather than the homepage one and stops there. */}
      <div className="on-dark relative isolate flex min-h-[clamp(24rem,56vh,33rem)] flex-col justify-center overflow-hidden bg-forest text-sage-bright">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(66%_86%_at_84%_0%,rgb(163_230_37/0.13),transparent_60%)]"
        />
        <div className="wrap pb-14 pt-12 md:pb-16 md:pt-16">
          <Breadcrumbs trail={TRAIL} className="mb-10" />
          <div className="max-w-[46rem]">
            <Kicker pill reveal className="mb-6">
              Directory
            </Kicker>
            <h1
              className="text-d2 text-on-dark"
              data-reveal
              style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
            >
              Every page on this site, in one place
            </h1>
            <p
              className="mt-6 max-w-[52ch] text-lead text-on-dark/85"
              data-reveal
              style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
            >
              Built from the same registry the pages are, so this list and the site cannot drift
              apart. Useful when you would rather scan than navigate.
            </p>
            <p
              className="label tnum mt-6"
              data-reveal
              style={{ "--reveal-delay": "410ms" } as React.CSSProperties}
            >
              <CountUp to={total} /> pages
            </p>
          </div>
        </div>
      </div>

      {/* Not the shared `Section`: its full top rhythm would drop the control
          bar most of a screen below the band, and the bar is the first thing
          this page is for. The foot keeps the shared cadence. */}
      <section className="bg-paper pb-section pt-8 text-ink">
        <div className="wrap">
          <PageDirectory categories={categories} />
        </div>
      </section>
    </>
  );
}
