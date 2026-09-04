# Mengo — the agency property

Mengo, written from an agency's chair. **This is a separate property from the
Mengo end-user product site** at `mengoengine.com` and shares nothing with it
but the brand: its own routes, its own content, its own positioning, its own
repository.

The site is called *Mengo*. The audience is the perspective every page is
written from, not a phrase repeated into titles, headings, breadcrumbs and
navigation labels — `npm run audit:language` measures that and fails if it
drifts back.

Neither `mengoengine.com` nor `mengoengine-website.vercel.app` is touched by
anything in here.

## The positioning, in one line

Mengo works alongside the agency, not in place of it. The agency keeps the
clients, the strategy, the final approval and the accountability; Mengo carries
the structural work behind them.

That claim is not just copy — it is the structure of the site. Every workflow is
an ordered sequence with each step attributed to its owner, and the first and
last step of every one of them belongs to the agency. The homepage states the
same rule at the scale of the whole product: the **layer stack** in
`src/components/sections/system.tsx` opens and closes with a person.

The second claim the architecture has to carry is that a capability means a
**different thing at a different size**. That is why 52 of the 64 capabilities
have a page for each of the five stages: not the same explanation rescaled, but
a different problem, a different priority, and — on 47 of those 260 pages — an
honest "not yet, and here is what to do first instead". The **capability
explorer** at `/capabilities/#explorer` is that data made usable: choose a
stage and the taxonomy collapses to what is worth doing now, what follows once
that is running, and what to leave alone.

**529 pages**, every one of them findable four ways: the header dialog
(`/` anywhere), the `/search/` results page, the `/explore/` directory with
category chips and five filters, and the footer's map of the ecosystem. The
counts and the reasoning behind them are below.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run qa           # the full gate: types, build, images, links, a11y/SEO, routes, language
```

Two audits drive a real browser and need a server. Build and serve them from
`.next-audit` so a running `npm run dev` cannot disturb them — see below:

```bash
NEXT_DIST_DIR=.next-audit npm run build
NEXT_DIST_DIR=.next-audit npx next start -p 4123

NEXT_DIST_DIR=.next-audit npm run audit:interactive   # about a minute
NEXT_DIST_DIR=.next-audit npm run audit:responsive    # 11 widths, 38 pages, ~15 min
```

The static audits read build output too, so they take the same variable. With
no dev server around, omit it and everything uses `.next` as usual.

### One build directory, one writer

`next dev`, `next build` and `next start` all write a build directory, and only
one of them may write a given one. **A `next dev` running while you build and
serve the production output will corrupt it continuously** — dev rewrites
`static/`, `server/` and `BUILD_ID` as it recompiles, so a production server
sharing the directory serves whatever half-written state it finds.

Two symptoms, one cause:

- **`Cannot find module './NNNN.js'`** — the runtime manifest points at chunks
  that no longer exist.
- **Every page renders unstyled** — `static/` is momentarily absent and the
  stylesheet 404s. In a twenty-minute responsive audit that surfaces as two
  thousand phantom layout failures rather than as one missing file, and it costs
  a full audit cycle to work out why.

Both have happened here. The fix is not "remember to stop the dev server" —
editors restart them — so `distDir` is configurable and QA uses its own:

```bash
NEXT_DIST_DIR=.next-audit npm run build
```

`next.config.ts` reads that variable and every script that reads build output
honours it, so an audit build and a dev server can be up at the same time
without touching each other's files. If a directory does get into a bad state,
nothing in it is source — delete it and rebuild.

Both browser audits also refuse to run against an unstyled page. They resolve
`--color-paper` and stop with the rebuild command if it is missing, and the
responsive audit re-checks at every width, because a run that started styled can
stop being so halfway through. An audit whose every failure has one cause should
say so once.

## Information architecture

Home, then five sections, each answering a different question.

| Item | Question | Route |
|---|---|---|
| Home | — | `/` |
| Solutions | Who am I, and what am I trying to do? | `/solutions/stages/`, `/solutions/goals/` |
| Capabilities | What can it carry? | `/capabilities/<group>/<capability>/` |
| Workflows | How does the work run? | `/workflows/` |
| Industries | Whose clients? | `/industries/` |
| Resources | What has been written down? | `/resources/` |

**Home is a real item in the bar**, not only the wordmark: at five hundred
pages the reader four cross-links deep needs a way back that is not a logo they
have to guess is clickable. The wordmark carries no descriptor — a qualifier
attached to the logo is a qualifier on every page, and it is the one piece of
the mark that would differ from the product's.

**How it works is secondary navigation**, not a sixth section: it sits in the
utility cluster beside search, one step quieter, because it is for a reader who
has already decided to look. Search and `/explore/` cut across everything.

Each panel is grouped rather than listed. Solutions offers three lenses on the
same pages — by stage, by goal, by need — because a reader who cannot say
whether they are "doing the work" or "growing the business" still recognises
*we cannot take another client*. Industries runs four sector columns rather
than ten alphabetical entries, grouped by what the marketing has to contend
with: healthcare, financial services and education sit together because in all
three what may be said is decided outside the agency.

```
src/
  app/         routes only — every page is a thin composition of components
  components/
    layout/      header, footer (and its accordion), breadcrumbs, logo, theme toggle
    search/      the dialog and its shortcuts, the triggers, the results page
    explore/     the filtered directory
    interactive/ the capability explorer
    sections/    page archetypes (heroes, the layer stack, related links)
    ui/          the design system: primitives, editorial devices, photography, motion
  data/        all content, as typed objects. No copy lives in a page file.
  lib/         routes, navigation, entity registry, search index, image resolver, types
  seo/         one metadata builder, one structured-data module
scripts/       the QA gates, and the photo registry generator
```

## The footer

Four registers, each separated by the same hairline and each one step quieter
than the last: a closing statement with the site's one action, a brand column
beside seven curated section columns, the two ways to find anything, then the
legal line. That is what makes it read as the end of the page rather than as a
sitemap pasted underneath it.

The rule it enforces is **curated, then carried**. Every column is the length a
reader will actually scan and ends in the route holding the rest — six
industries of ten, then "All industries". The complete inventory lives at
`/explore/`, which is built for it. Below `md` the columns become an accordion,
and a `<noscript>` rule opens them all, because a footer that hides fifty links
from a reader with scripting off is worse than a long one.

## Search and the directory

Real search over every published page, derived rather than maintained.
`src/lib/search-index.ts` builds one record per route from the same data the
pages are built from; `src/app/api/search-index/route.ts` prerenders it as a
static JSON file; the dialog fetches that the first time somebody opens search.
**The content corpus never enters the browser bundle** — which is the whole
reason it is a fetch rather than an import.

Two front ends over one index, because they answer different questions. The
header dialog (`/`, ⌘K) is *take me there*: thirty ranked hits, arrow keys,
gone in two keystrokes. `/search/` is *show me what there is*: every match with
its type, its parent, its description with the matched words marked, its URL,
and a type filter built from the result set. The dialog hands off to it, and the
results page is `noindex` — it has nothing of its own to index and a crawler
following query strings would find five hundred near-empty variants of it.

`src/lib/search.ts` holds the record shape and the matcher and imports no data,
so a client component can use the algorithm without dragging 529 pages of prose
in behind it. `/explore/` reuses the same records as props from a server
component and filters them by section, type, stage, capability group and client
sector, with the filter state round-tripping through the query string.

`npm run audit:routes` compares the index against the build in both directions.
A published page that search cannot find is a defect, and the gate says so.

Two rules keep this from rotting:

- **Content never lives in a page file.** Pages compose components over data.
  Adding a capability is one entry under `src/data/capabilities/`; its route,
  its five stage routes, the navigation, the footer, the sitemap, the search
  index, the directory and the FAQ index all follow from it. 529 pages come from
  35 data files and 38 page templates.
- **Everything routable goes through `src/lib/registry.ts`.** The sitemap, the
  human sitemap page and the route audit all read from it, so a page that the
  sitemap does not know about cannot be published — and `npm run audit:routes`
  compares the two in both directions on every build.

## Content architecture

The site is a relationship graph rather than a page tree. Entities reference
each other by slug, and the routes fall out of the relationships:

```
Stage ─┬─ capability ─┬─ capability × stage    (52 × 5 = 260 pages)
       │              └─ industry × capability (60 curated pairs)
       ├─ workflow
       └─ goal
```

| Family | Count | Notes |
|---|---|---|
| Stages | 5 | Starting out, solo practice, small team, growing team, established firm |
| Capability groups | 8 | Foundation, Brand, Marketing, Sales, Content, Programs, Organization, System |
| Capabilities | 64 | 52 staged, 12 flat |
| Capability × stage | 260 | Only for staged capabilities |
| Workflows | 28 | Across 5 delivery phases |
| Industries | 10 | SaaS/software, professional services, ecommerce/D2C, healthcare, real estate, local/multi-location, financial services, education, construction, home services |
| Industry × capability | 60 | Curated pairs, never a cross product |
| Goals | 21 | Across 3 phases |
| Comparisons | 7 | Each names when the alternative wins |
| Resources | 38 | Playbooks, guides, frameworks, journal, glossary |

**Two rules keep the page count honest.** A capability gets stage pages only if
its meaning genuinely changes with size — the twelve that do not say so on their
own page rather than generating five near-identical ones. And industry pairs are
listed on each industry rather than crossed automatically, so a combination with
nothing true to say cannot be generated. Ten sectors times sixty-four
capabilities would be 640 pages; 60 of them are worth writing.

## Page archetypes

Twelve, not one. A site whose every page opens identically reads as a template
no matter how varied the sections beneath are.

| Archetype | Opening | Signature composition |
|---|---|---|
| Editorial landing | `PhotoHero` | Problem, cost, the shift, then the system as connected layers |
| Stage | `RuleHero` | Situation → problems → ledger → the week as a spine |
| Capability group | `IndexHero` | Capability rows with a per-stage relevance strip, then adoption order |
| Capability | `RuleHero` | Facing inputs/outputs, five stage rows, then explicit limits |
| Capability × stage | `RuleHero` | Relevance first; `later` pages lead with what to do instead |
| Workflow | `RuleHero` | The spine first, then before/after as two facing indexes |
| Industry | `RuleHero` | Sector character → pressure → your expertise → constraints |
| Industry × capability | `RuleHero` | Shortest on the site: what differs, what is yours, what to watch |
| Goal | `RuleHero` | Obstacle → ordered approach → expectations → who it is not for |
| Comparison | `RuleHero` | A real table, and "when the other option wins" placed first |
| Hub | `IndexHero` | A different index shape per section |
| Long-form | `LongformHero` | Reading measure, with the editorial devices available inline |
| Directory | `IndexHero` | One raised control bar over ruled, grouped result rows |

Within a page the rule is that **the composition follows the content, and no
composition repeats**. A section whose points each need a paragraph gets
`ProseRows` — the label held sticky in the margin while its own argument
scrolls. A section whose points are scanned gets a two-up index under a
full-width heading. A section that is a warning leads with the statement and
runs its list full width beneath. Three sections on one page using the same
heading-left/rows-right split is the template problem in miniature, and it is
what the industry, capability and how-it-works templates were carrying.

## The design system

Mengo's brand — lime `#a3e625` on forest `#022018`, Sora / Instrument Sans /
Instrument Serif — with a compositional system built for this site's argument.

The signature device is the **ledger**: two lanes with a rule between them, one
marked to the agency and one to Mengo. The **spine** (an attributed sequence),
the **layer stack** (the whole product as strata, with a person at both ends),
the **ladder** (the five growth stages) and the comparison table are variations
on it. There are no card grids: content that is *read* gets a hairline and the
page's own ground; only objects a reader *acts on* get a raised surface — the
directory's filter bar and the search panel, and very little else.

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

**Every framed photograph names its relationship to the section it is in.** The
caption bar carries three things and the split is deliberate: `context` is what
the picture stands for in this page's argument — the stage, the workflow's
trigger, the sector — `caption` describes the frame, and the credit travels with
both. An image whose only caption was its own alt text is the decoration this
site does not publish, and it is what "the image and the text tell different
stories" looks like in markup.

At 529 pages the great majority are text-led, and that is the design rather
than a shortfall: 59 photographs across the site, each in one place. The
editorial devices — the ledger, the spine, the ladder, ruled indexes — are what
carry the pages that have no picture, which is why they had to be good enough
to stand on their own.

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
| `npm run audit:routes` | The build, the registry and the search index agree, in every direction |
| `npm run audit:language` | The audience is the perspective, not a keyword repeated into headings and titles |
| `npm run audit:responsive` | Overflow, unrevealed content and touch targets at 11 widths |
| `npm run audit:interactive` | The header's shape, search finds and navigates, the directory filters, the explorer switches stage, focus stays trapped |

At this size the audits are the only practical way to know the site is sound —
nobody is going to open 529 pages. `audit:links` walks 72,000 internal links,
`audit:a11y` checks every rendered page for a single h1, no skipped heading
levels and a unique title and description, and `audit:routes` compares the
build against the registry in both directions so a page cannot exist without
the sitemap knowing about it.

`audit:responsive` and `audit:interactive` need a running server, so they are
not in `npm run qa`; the rest run in seconds and are. `audit:interactive` is the
one that matters most after a change to search or the directory — everything
else on this site is markup an audit can read, and those three are behaviour.

## Content rules

Nothing on this site is invented. There are no client logos, no testimonials, no
case studies, no percentages and no awards, because there is no verified outcome
data to draw on. The `/company/about/` and `/company/responsible-ai/`
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
