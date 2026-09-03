import Link from "next/link";
import { routes, site } from "@/lib/site";

/**
 * The wordmark.
 *
 * Mengo in the display face with the lime dot, and "for Agencies" set beside
 * it in the reading face. The qualifier is part of the mark rather than a
 * strapline underneath: this site's whole job in the first two seconds is to
 * say who it is for, and the logo is the first thing anyone reads.
 *
 * Below the small breakpoint the qualifier is hidden visually but kept in the
 * accessible name, so the header row fits at 320px without the mark losing its
 * meaning for a screen reader.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href={routes.home()}
      /* `min-h-11` rather than the lettering's own height: this is the home
         link, and on a phone it is a touch target before it is a wordmark.
         The baseline alignment moves to the inner row so the qualifier still
         sits on the wordmark's baseline rather than being centred against it. */
      className={`group inline-flex min-h-11 shrink-0 items-center ${className}`}
      aria-label={`${site.name} — home`}
    >
      <span className="flex items-baseline gap-2">
        <span className="type-title text-[1.3rem] leading-none text-ink lg:text-[1.45rem]">
          Mengo
          <span className="text-lime-deep" aria-hidden>
            .
          </span>
        </span>
        <span className="hidden text-fine font-medium leading-none text-ink-soft transition-colors group-hover:text-lime-deep sm:inline">
          for Agencies
        </span>
      </span>
    </Link>
  );
}
