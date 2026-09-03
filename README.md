# Mengo for Agencies

The agency-facing website for Mengo. **This is a separate property from the Mengo
end-user product site** at `mengoengine.com` and shares nothing with it but the
brand: its own routes, its own content, its own positioning, its own repository.

Neither `mengoengine.com` nor `mengoengine-website.vercel.app` is touched by
anything in here.

## The positioning, in one line

Mengo works alongside the agency, not in place of it. The agency keeps the
clients, the strategy, the final approval and the accountability; Mengo carries
the structural work behind them.

That claim is not just copy — it is the structure of the site. Every workflow is
an ordered sequence with each step attributed to its owner, and the first and
last step of every one of them belongs to the agency.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run qa           # the full gate: images, links, a11y/SEO, types, build, routes
```

The responsive audit drives a real browser and needs a server:

```bash
npm run build && npx next start -p 4123
npm run audit:responsive
```

## Architecture

```
src/
  app/         routes only — every page is a thin composition of components
  components/
    layout/    header, footer, breadcrumbs, logo, theme toggle
    sections/  page archetypes (heroes, long-form blocks, related links)
    ui/        the design system: primitives, editorial devices, photography, motion
  data/        all content, as typed objects. No copy lives in a page file.
  lib/         routes, navigation, entity registry, image resolver, types
  seo/         one metadata builder, one structured-data module
scripts/       the QA gates, and the photo registry generator
```

Two rules keep this from rotting:

- **Content never lives in a page file.** Pages compose components over data.
  Adding a capability is one entry in `src/data/capabilities.ts`; the route, the
  navigation, the footer, the sitemap and the FAQ hub all follow from it.
- **Everything routable goes through `src/lib/registry.ts`.** The sitemap, the
  human sitemap page and the route audit all read from it, so a page that the
  sitemap does not know about cannot be published.

## Page archetypes

Nine, not one. A site whose every page opens identically reads as a template no
matter how varied the sections beneath are.

| Archetype | Opening | Signature composition |
|---|---|---|
| Editorial landing | `PhotoHero` | Long narrative, a different device per section |
| Audience (stage) | `RuleHero` | Situation → problems → ledger → the week as a spine |
| Capability | `RuleHero` | Facing inputs/outputs columns, then an explicit limits section |
| Workflow | `RuleHero` | The spine first, then before/after as two facing indexes |
| Industry | `RuleHero` | Sector character → pressure → your expertise → constraints |
| Use case | `RuleHero` | Obstacle → ordered approach → expectations → who it is not for |
| Comparison | `RuleHero` | A real table, and "when the other option wins" placed first |
| Hub | `IndexHero` | A different index shape per section |
| Long-form | `LongformHero` | Reading measure, with the editorial devices available inline |

## The design system

Mengo's brand — lime `#a3e625` on forest `#022018`, Sora / Instrument Sans /
Instrument Serif — with a compositional system built for this site's argument.

The signature device is the **ledger**: two lanes with a rule between them, one
marked to the agency and one to Mengo. The **spine** (an attributed sequence),
the **ladder** (the five growth stages) and the comparison table are variations
on it. There are no card grids: content that is *read* gets a hairline and the
page's own ground; only objects a reader *acts on* get a raised surface.

Dark theme is not an inversion — it keeps the same three-step tonal rhythm with
the inverted band becoming lighter than the ground. Lime never flips.

## Photography

One licensed photograph appears in **exactly one place**. Not cropped
differently elsewhere, not recoloured, not reused.

That is enforced by construction rather than by discipline:
`scripts/build-photo-registry.mjs` assigns each asset from a pool exactly once
and refuses to emit a registry that is not a bijection;
`scripts/audit-images.mjs` then re-checks it against the *rendered* HTML, which
is where a template asking for the same photograph twice would show up.

Every assignment names its pool index deliberately, because every photograph has
been looked at. The pool contains a great deal that is licensed and unusable
here, and the rule for those is not to place them somewhere and write vague alt
text — **a section with no suitable photograph is text-led**, and many are:
every playbook, guide, framework and journal piece runs without one.

Alt text describes what is in the frame. Attribution travels with the picture,
either in the caption bar or as a `Credit` line under a photographic band.

## Motion

One `IntersectionObserver` and one `requestAnimationFrame` loop, in
`src/components/ui/Motion.tsx`.

Content ships visible. The hidden state exists only under `html.js-reveal`,
which a pre-paint head script arms only when JavaScript ran,
`IntersectionObserver` exists and reduced motion was not requested — so a
crawler, a no-JS reader and a reduced-motion reader always get the full page and
never a blank one. That script carries a 4-second failsafe: if the controller
never arrives, the page un-hides itself rather than leaving real content at
`opacity: 0`.

The observer decides *when* something animates; a scroll-driven safety sweep
decides *that* it animates, because a fast scroll can legitimately move a
section past the viewport within a single frame without the observer ever seeing
it intersect.

## QA gates

| Command | Checks |
|---|---|
| `npm run audit:images` | One photograph per section, attribution, alt text, no unused assignments |
| `npm run audit:links` | Every internal link resolves; no orphan pages; `rel="noopener"` |
| `npm run audit:a11y` | Headings, landmarks, accessible names, unique titles and descriptions, canonicals, no `opacity:0` in served HTML |
| `npm run audit:routes` | The build and the registry agree, in both directions |
| `npm run audit:responsive` | Overflow, unrevealed content and touch targets at 11 widths |

## Content rules

Nothing on this site is invented. There are no client logos, no testimonials, no
case studies, no percentages and no awards, because there is no verified agency
outcome data to draw on. The `/company/about/` and `/company/responsible-ai/`
pages say so explicitly, and the homepage has a section about it.

The two legal pages are **structural placeholders** and are labelled as such on
the page. They must be replaced with counsel-approved text before launch.

## Before launch

- [ ] Set `site.url` in `src/lib/site.ts` to the real origin. Every canonical,
      Open Graph URL and sitemap entry is built from it.
- [ ] Replace `/legal/privacy/` and `/legal/terms/` with approved text.
- [ ] Add `public/icon.png` and `public/apple-icon.png`, and re-add the `icons`
      entry to the metadata in `src/app/layout.tsx`.
- [ ] Confirm the Unsplash attribution approach with whoever owns licensing.

## References

- Original Mengo: <https://mengoengine.com/>
- Existing end-user website: <https://mengoengine-website.vercel.app/>
- New agency website: **deployment pending — no live URL yet**
