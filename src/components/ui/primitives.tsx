import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------------ */
/* Structured data                                                           */
/* ------------------------------------------------------------------------ */

export function JsonLd({ data }: { data: unknown | (unknown | null)[] }) {
  const list = (Array.isArray(data) ? data : [data]).filter(Boolean);
  if (list.length === 0) return null;
  return (
    <>
      {list.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Built in-repo from typed data. No user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------------ */
/* Section                                                                   */
/* ------------------------------------------------------------------------ */

export type Tone = "paper" | "warm" | "deep" | "forest";

const TONE: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  warm: "bg-paper-warm text-ink",
  deep: "bg-paper-deep text-ink",
  forest: "on-dark bg-forest text-sage-bright",
};

/**
 * The one section wrapper.
 *
 * Vertical rhythm comes from a single token, so a page built from twelve
 * sections has one cadence rather than twelve opinions. Tone is the only
 * variation, and alternating it is what gives a long page its structure
 * without any section needing a decorative device.
 */
export function Section({
  children,
  tone = "paper",
  id,
  className = "",
  bleed = false,
  as: Tag = "section",
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  /** Skip the container, for sections managing their own full-bleed layout. */
  bleed?: boolean;
  as?: "section" | "div";
  labelledBy?: string;
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={`${TONE[tone]} py-section ${className}`}
    >
      {bleed ? children : <div className="wrap">{children}</div>}
    </Tag>
  );
}

/* ------------------------------------------------------------------------ */
/* Type                                                                      */
/* ------------------------------------------------------------------------ */

/** The section-opening label. A rule with a lime cap, never a pill. */
export function Kicker({
  children,
  className = "",
  as: Tag = "p",
  pill = false,
  reveal = false,
}: {
  children: ReactNode;
  className?: string;
  as?: "p" | "h2" | "span";
  /**
   * The chip form, for a hero opening. Section labels keep the flat lettering:
   * a pill on every band would turn a page into a row of badges, which is the
   * decoration this site does not use.
   */
  pill?: boolean;
  reveal?: boolean;
}) {
  return (
    <Tag
      className={`${pill ? "eyebrow-pill" : "kicker"} ${className}`}
      {...(reveal ? { "data-reveal": "" } : {})}
    >
      {children}
    </Tag>
  );
}

/**
 * A section heading with an optional lead.
 *
 * `width` exists because an editorial page needs both a narrow working heading
 * and the occasional wide statement, and inventing a component for each is how
 * a design system rots.
 */
export function Heading({
  kicker,
  title,
  lead,
  size = "d3",
  as: Tag = "h2",
  width = "measure",
  pill = false,
  id,
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  /**
   * `label` is a real size, not a fallback. A page whose every band opens at
   * the same scale reads as a list of equal things no matter how varied the
   * devices beneath are, and an entity page has eight or nine bands — far more
   * than there are load-bearing arguments on it. The supporting ones open at
   * eyebrow scale and let the two or three that carry the page have d3.
   */
  size?: "d1" | "d2" | "d3" | "d4" | "label";
  as?: "h1" | "h2" | "h3";
  width?: "measure" | "wide" | "full";
  /** The chip eyebrow, for a band that opens a movement. */
  pill?: boolean;
  id?: string;
  className?: string;
}) {
  const sizeClass = {
    d1: "text-d1",
    d2: "text-d2",
    d3: "text-d3",
    d4: "text-d4",
    label: "label",
  }[size];
  const widthClass = { measure: "max-w-[46rem]", wide: "max-w-[62rem]", full: "" }[width];
  const isLabel = size === "label";

  return (
    <div className={`${widthClass} ${className}`} data-band-label={kicker} data-reveal>
      {/* At label scale the kicker and the heading would be the same lettering
          twice, so the kicker becomes the rule above it instead. */}
      {kicker && !isLabel ? (
        <Kicker pill={pill} className={pill ? "mb-7" : "mb-6"}>
          {kicker}
        </Kicker>
      ) : null}
      {isLabel ? <div className="rule-t mb-5" aria-hidden /> : null}
      <Tag id={id} className={sizeClass}>
        {title}
      </Tag>
      {lead ? (
        <p className={`${isLabel ? "mt-5" : "mt-6"} max-w-[44rem] text-lead text-ink-soft`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** A single large editorial statement. The loudest device here — use sparingly. */
export function Statement({
  children,
  attribution,
  className = "",
}: {
  children: ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <figure className={`relative max-w-[46rem] pl-6 md:pl-8 ${className}`} data-reveal>
      <span aria-hidden className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-lime" />
      <blockquote className="editorial text-statement text-ink">{children}</blockquote>
      {attribution ? <figcaption className="label mt-6">{attribution}</figcaption> : null}
    </figure>
  );
}

/* ------------------------------------------------------------------------ */
/* Motion helper                                                             */
/* ------------------------------------------------------------------------ */

/** Applies a staggered reveal delay to a list of children. */
export function Stagger({
  children,
  step = 70,
  className = "",
}: {
  children: ReactNode[];
  step?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <div key={i} data-reveal style={{ "--reveal-delay": `${i * step}ms` } as CSSProperties}>
          {child}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Actions                                                                   */
/* ------------------------------------------------------------------------ */

type Variant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "sm";

/* `max-w-full` with a centred label is what stops a long action — "See how a
   first engagement runs" — running past the edge of a 320px screen. The label
   wraps inside the pill rather than the pill outgrowing its viewport. */
const BASE =
  "type-button inline-flex max-w-full items-center justify-center gap-2 text-balance rounded-full text-center transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-[var(--ease-out-expo)] active:translate-y-px motion-safe:hover:-translate-y-0.5";

const SIZE: Record<ButtonSize, string> = {
  md: "min-h-12 px-7 py-3.5",
  sm: "min-h-11 px-5 py-2.5",
};

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-lime text-on-accent shadow-[0_8px_22px_-8px_rgb(95_139_20/0.65)] hover:bg-lime-bright hover:shadow-[0_16px_34px_-10px_rgb(95_139_20/0.6)]",
  /* The section action, and the one most likely to land on a photograph. A
     22% hairline disappears over a busy frame, so on a dark ground the border
     runs at 35% over a faint wash of its own — enough to read against any part
     of a picture without becoming a filled button and competing with the
     page's actual primary action. */
  secondary:
    "border border-ink/25 bg-transparent text-ink hover:border-ink/60 hover:bg-ink/[0.04] [.on-dark_&]:border-on-dark/35 [.on-dark_&]:bg-on-dark/[0.07] [.on-dark_&]:text-on-dark [.on-dark_&]:hover:border-lime [.on-dark_&]:hover:bg-lime/15 [.on-dark_&]:hover:text-lime",
  ghost:
    "px-0 text-ink underline decoration-lime decoration-2 underline-offset-[6px] hover:decoration-lime-deep [.on-dark_&]:text-on-dark",
};

export function buttonClass(variant: Variant = "primary", className = "", size: ButtonSize = "md") {
  return `${BASE} ${SIZE[size]} ${VARIANT[variant]} ${className}`;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: ButtonSize;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClass(variant, className, size)}>
      {children}
    </Link>
  );
}

/** Inline link with the house underline. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-block py-1 underline decoration-lime-deep decoration-[1.5px] underline-offset-[3px] transition-colors hover:text-lime-deep [.on-dark_&]:decoration-lime [.on-dark_&]:hover:text-lime ${className}`}
    >
      {children}
    </Link>
  );
}

/** The arrow that travels on a story row. Decorative, so it is hidden. */
export function Arrow() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
      <path d="M11.5 1L16.5 6L11.5 11M16 6H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------------ */
/* Link lists                                                                */
/* ------------------------------------------------------------------------ */

/**
 * A list of destinations, as rows with a mark rather than as prose links.
 *
 * The product site's shared list row, and the reason its related rails read as
 * navigation rather than as a paragraph of links: a lime dot on a hanging
 * indent, one rhythm, two sizes. The row is 33px under a mouse, which is what
 * lets a rail carry twenty destinations in the height a 44px row spends on
 * thirteen; the 44px floor comes back under a coarse pointer, where it is a
 * touch target rather than a list.
 */
export function RelatedLinkList({
  links,
  size = "body",
  className = "",
}: {
  links: { href: string; label: string }[];
  /** `compact` for a rail beside content, `body` for a full-width band. */
  size?: "body" | "compact";
  className?: string;
}) {
  if (links.length === 0) return null;
  const type = size === "compact" ? "text-small" : "text-body";

  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 py-1.5 [@media(pointer:coarse)]:min-h-11 [@media(pointer:coarse)]:py-2.5 ${type} leading-relaxed text-ink-soft transition-colors duration-300 hover:text-lime-deep [.on-dark_&]:text-sage-bright [.on-dark_&]:hover:text-lime`}
          >
            <span
              aria-hidden
              className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-lime-deep [.on-dark_&]:bg-lime"
            />
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------------ */
/* FAQ — native disclosure, no JavaScript                                    */
/* ------------------------------------------------------------------------ */

export function FaqList({
  faqs,
  className = "",
}: {
  faqs: { q: string; a: string }[];
  className?: string;
}) {
  if (faqs.length === 0) return null;
  return (
    <div className={className}>
      {faqs.map((faq) => (
        <details key={faq.q} className="group rule-t">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 type-title text-h6 transition-colors hover:text-lime-deep [&::-webkit-details-marker]:hidden">
            {faq.q}
            <span
              aria-hidden
              className="relative mt-2 h-3 w-3 shrink-0 text-lime-deep before:absolute before:left-0 before:top-1/2 before:h-px before:w-3 before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-3 after:w-px after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-300 group-open:after:scale-y-0"
            />
          </summary>
          <p className="max-w-[46rem] pb-6 text-body leading-relaxed text-ink-soft">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
