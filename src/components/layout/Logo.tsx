import Image from "next/image";
import Link from "next/link";
import { routes, site } from "@/lib/site";

/**
 * The Mengo lockup: the official mark, then the wordmark.
 *
 * This is the product's own mark, used unchanged — the same asset the Mengo
 * end-user site carries. That is the point: the two properties are one brand
 * seen from two chairs, and a different lockup on this one would say the
 * opposite before a reader had read a word.
 *
 * There is deliberately no descriptor beside it. A qualifier attached to the
 * logo is a qualifier on every page of the site, the audience is meant to be
 * legible from the content, and it is the one piece of the mark that would
 * differ from the product's.
 *
 * `tone` only changes the wordmark. The lime mark is legible on both the paper
 * and the forest grounds, so it never needs a second version.
 */
export function Logo({
  tone = "dark",
  href = routes.home(),
  className = "",
}: {
  tone?: "dark" | "light";
  /** Null renders the lockup without a link — for the footer's brand block. */
  href?: string | null;
  className?: string;
}) {
  const lockup = (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/brand/mengo-mark.png"
        alt=""
        aria-hidden
        priority
        width={32}
        height={32}
        className="h-7 w-auto lg:h-8"
      />
      <span
        className={`type-title text-[1.35rem] leading-none tracking-[-0.04em] transition-colors lg:text-[1.5rem] ${
          tone === "light" ? "text-on-dark" : "text-ink group-hover:text-lime-deep"
        }`}
      >
        {site.name}
      </span>
    </span>
  );

  if (!href) return <span className={`inline-flex items-center ${className}`}>{lockup}</span>;

  return (
    <Link
      href={href}
      /* `min-h-11` rather than the lockup's own height: this is the home link,
         and on a phone it is a touch target before it is a wordmark. */
      className={`group inline-flex min-h-11 shrink-0 items-center ${className}`}
      aria-label={`${site.name} — home`}
    >
      {lockup}
    </Link>
  );
}
