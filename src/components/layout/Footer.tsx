import Link from "next/link";
import { footerColumns, footerEcosystem, footerFindAnything, footerLegal } from "@/lib/nav";
import { routes, site } from "@/lib/site";
import { FooterColumns } from "@/components/layout/FooterNav";
import { Logo } from "@/components/layout/Logo";
import { SocialMark } from "@/components/layout/SocialMarks";
import { SearchTrigger } from "@/components/search/Search";
import { buttonClass } from "@/components/ui/primitives";

/**
 * One footer, in four registers.
 *
 * A closing statement with the site's one action, then a brand rail beside the
 * curated section columns, then the two ways to find anything, then the legal
 * line — each separated by the same hairline at the same rhythm and each one
 * step quieter than the last. That is what makes it read as the end of the
 * page rather than as a sitemap somebody pasted underneath it.
 *
 * The composition is a rail and a field. One column on the left carries
 * everything that is *about* Mengo — the mark, the sentence, the social
 * accounts and the rest of the estate — and five columns to the right carry
 * everything that is *inside* it. The rail's width is the same track in all
 * three of the lower bands, so the section columns, the "find anything" links
 * and the legal line all hang off one vertical, and the footer reads as a
 * single grid rather than as four stacked layouts.
 *
 * The rule the columns enforce is *curated, then carried*. Every group is the
 * length a reader will actually scan and ends in the route holding the rest:
 * six industries of ten, then "All industries". The complete inventory lives
 * at /explore/, which is built for it, and the columns are generated from the
 * content so they cannot link to a page that does not exist.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative isolate overflow-hidden bg-forest text-sage-bright">
      {/* A brand hairline across the top edge — the one place the lime runs the
          full width of the page. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-lime-deep)_18%,var(--color-lime)_50%,var(--color-lime-deep)_82%,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(52%_70%_at_12%_0%,rgb(163_230_37/0.09),transparent_60%)]"
      />

      {/* Without JavaScript the accordion cannot open, so the lists it would
          collapse are shown instead. A footer that hides fifty links from a
          reader with scripting off is worse than a long one. */}
      <noscript>
        <style>{`.footer-links{display:block !important}`}</style>
      </noscript>

      {/* 1 — The closing statement, and the site's one action. On the footer's
          own ground rather than as a separate section, so every page ends the
          same way without every template having to remember to end it. */}
      <div className="wrap rule-b py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <p className="kicker">Get started</p>
            <p className="mt-7 max-w-[16ch] text-d2 leading-[1.02] text-on-dark">{site.promise}</p>
            <p className="mt-7 max-w-[46rem] text-lead text-sage-bright">
              Start with one account and one workflow. Decide what you are measuring before you
              begin, and compare it honestly against how that account was being delivered before.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href={routes.getStarted()} className={buttonClass("primary")}>
              Get started
            </Link>
            <Link href={routes.contact()} className={buttonClass("secondary")}>
              Talk to us
            </Link>
          </div>
        </div>
      </div>

      {/* 2 — The map: the brand rail beside the section columns. */}
      <div className="wrap py-14 md:py-16 xl:py-20">
        <div className="grid gap-y-14 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-x-14 xl:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] xl:gap-x-10">
          <BrandRail />
          <FooterColumns columns={footerColumns} />
        </div>
      </div>

      {/* 3 — Find anything. Its own quiet band on the same two tracks: this is
          navigation about navigation, and it is the register that stops a
          reader giving up on a site of this size. */}
      <section className="wrap rule-t py-9">
        <div className="grid gap-x-10 gap-y-5 lg:grid-cols-5 lg:gap-x-6 lg:items-baseline xl:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] xl:gap-x-12">
          <h2 className="label">Find anything</h2>
          <div className="grid gap-x-10 gap-y-4 lg:col-span-4 xl:col-span-1 xl:grid-cols-[auto_minmax(0,1fr)] xl:items-baseline">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-1">
              <li>
                <SearchTrigger variant="line" className="text-sage-bright" />
              </li>
              {footerFindAnything.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-index text-small text-sage-bright transition-colors hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="max-w-[52ch] text-fine leading-relaxed text-sage">
              Every page is organised in the directory and can be filtered by type, capability,
              stage, industry and topic.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — The legal register. */}
      <div className="wrap rule-t py-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="max-w-[76ch]">
            <p className="text-fine text-sage">
              © {year} {site.legalName}. This site is written for the people running the agency.
              Photography licensed from Unsplash and credited in place. This site publishes no
              testimonials, client names or performance figures, because we have none we could
              stand behind.
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-1">
            {footerLegal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-index text-fine text-sage transition-colors hover:text-lime"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

/**
 * The brand rail.
 *
 * Everything that is about Mengo rather than inside it, in one place: the
 * mark, the sentence that states the position, the social accounts, and the
 * two properties that are not this site.
 *
 * It is a rail only from `xl`, where the container is wide enough for a rail
 * and five columns beside it. Below that it turns and runs across the top of
 * the band as a two-up — mark and sentence on the left, accounts and estate on
 * the right — which is what lets the columns underneath keep all five tracks
 * on a small laptop instead of falling to three and leaving a hole where the
 * sixth cell would have been.
 */
function BrandRail() {
  return (
    <div data-reveal className="lg:self-start">
      <div>
        <Logo tone="light" href={null} />
        <p className="mt-5 max-w-[34rem] text-body leading-relaxed text-sage-bright xl:max-w-none">
          Mengo works alongside the agency, not in place of it. You keep the clients, the strategy
          and the final call; Mengo carries the research, planning, content systems and follow-up
          behind them.
        </p>
        <Link
          href={routes.why()}
          className="link-index mt-3 text-small font-semibold text-lime transition-colors hover:text-lime-bright"
        >
          Why Mengo →
        </Link>
      </div>

      <div className="mt-9">
        <h2 className="label text-lime">Follow</h2>
        {/* A row of marks rather than a row of chips. The target is 44px in
            both directions under any pointer, and the negative margin pulls the
            first glyph back onto the column's vertical — the padding inside a
            44px target is not indentation and should not read as any. */}
        <ul className="-ml-3.5 mt-2 flex flex-wrap items-center">
          {site.social.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center text-sage transition-colors hover:text-lime"
              >
                <span className="sr-only">{social.label}</span>
                <SocialMark name={social.label} />
              </a>
            </li>
          ))}
        </ul>

        {/* The rest of the estate, directly under the accounts: both are ways
            of leaving this site, and neither is a section of it. */}
        <h2 className="label mt-9 text-lime">More from Mengo</h2>
        <ul className="mt-3 grid">
          {footerEcosystem.map((item) => (
            <li key={item.href}>
              {/* Two lines, so `link-index` is wrong here: its coarse-pointer
                  form is a flex row and would set the domain beside the label
                  rather than under it. The pair already clears 44px on its
                  own. */}
              <a
                href={item.href}
                rel="noopener noreferrer"
                className="group block py-2 text-small text-sage-bright transition-colors hover:text-lime"
              >
                <span className="flex items-baseline gap-1.5">
                  {item.label}
                  <span
                    aria-hidden
                    className="text-fine text-sage transition-colors group-hover:text-lime"
                  >
                    ↗
                  </span>
                </span>
                <span className="block text-fine text-sage">{item.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
