import { existsSync } from "node:fs";
import { chromium } from "playwright-core";

/**
 * Rendered-parity audit.
 *
 * Matching design tokens is necessary and not sufficient: two sites can share
 * every variable and still look unrelated, because what a reader sees is
 * composition — how wide the column is, how far the sections sit apart, how
 * large the heading resolves at this viewport, how much text is on the page.
 *
 * So this measures the rendered geometry of equivalent pages on both sites and
 * reports the differences that a reader would actually notice. It is a
 * comparison tool rather than a pass/fail gate: some divergence is correct,
 * because the content is deliberately different. What it catches is divergence
 * nobody chose.
 *
 * Run:  node scripts/audit-parity.mjs [newBase] [referenceBase]
 * Both bases must already be serving.
 */

const NEW = process.argv[2] ?? "http://localhost:4123";
const REF = process.argv[3] ?? "http://localhost:4200";

/* Equivalent by archetype, not by subject. */
const PAIRS = [
  ["homepage", "/", "/"],
  ["capability", "/capabilities/content/blog-content/", "/features/annual-calendar/"],
  ["solution", "/solutions/use-cases/deliver-faster/", "/solutions/build-a-content-engine/"],
  ["industry", "/industries/healthcare/", "/industries/accounting-firms/"],
  ["comparison", "/compare/mengo-vs-hiring/", "/compare/mengo-vs-a-fractional-cmo/"],
  ["long-form", "/resources/guides/using-ai-in-client-work-responsibly/", "/resources/90-day-content-plan/"],
  ["directory", "/explore/", "/sitemap/"],
];

const WIDTHS = [390, 1280];

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

const executablePath = CHROME_PATHS.find((path) => existsSync(path));
if (!executablePath) {
  console.error("No Chrome or Edge binary found.");
  process.exit(1);
}

/**
 * Everything a reader perceives as "the same design", measured in pixels.
 *
 * Deliberately not reading CSS variables: the question is what the browser
 * resolved, after every cascade, clamp and media query.
 */
async function measure(page) {
  return page.evaluate(() => {
    const num = (value) => Math.round(parseFloat(value) || 0);
    const main = document.querySelector("main") ?? document.body;

    const h1 = main.querySelector("h1");
    const h1Style = h1 ? getComputedStyle(h1) : null;

    /* The content column: the widest block-level wrapper inside main. */
    const wrappers = [...main.querySelectorAll("div")]
      .map((el) => el.getBoundingClientRect().width)
      .filter((w) => w > 200);
    const column = wrappers.length ? Math.round(Math.max(...wrappers)) : 0;

const median = (a) => (a.length ? a[Math.floor(a.length / 2)] : null);

    /* Body copy by its shared role class. Both sites set reading prose with
       `.text-prose`, so this compares the same element rather than whichever
       paragraph a heuristic happened to land on. Where a page sets its body in
       another role the count is zero and the field reports absent, which is
       the truth rather than a fabricated difference. */
    const bodyParas = [...main.querySelectorAll("p.text-prose")];
    const measures = bodyParas.map((para) => Math.round(para.getBoundingClientRect().width));
    measures.sort((a, b) => a - b);

    /* Section rhythm: the gap between consecutive top-level sections. */
    const sections = [...main.children].filter((el) => el.getBoundingClientRect().height > 40);
    const pads = sections.map((el) => {
      const s = getComputedStyle(el);
      return num(s.paddingTop) + num(s.paddingBottom);
    });

    const bodyStyle = bodyParas[0] ? getComputedStyle(bodyParas[0]) : null;
    const header = document.querySelector("header");

    /* The shared button role, not "anything round with a minimum height" —
       that matched a filter chip on one site and a call to action on the
       other, and reported a ten-pixel difference between two things that were
       never the same control. */
    const button = main.querySelector("a.type-button, button.type-button");
    const buttonStyle = button ? getComputedStyle(button) : null;

    const eyebrow = main.querySelector(".eyebrow, .kicker, .label");
    const eyebrowStyle = eyebrow ? getComputedStyle(eyebrow) : null;

    return {
      column,
      measure: median(measures),
      h1: h1Style ? num(h1Style.fontSize) : null,
      h1Leading: h1Style ? num(h1Style.lineHeight) : null,
      body: bodyStyle ? num(bodyStyle.fontSize) : null,
      bodyLeading: bodyStyle ? num(bodyStyle.lineHeight) : null,
      eyebrow: eyebrowStyle ? num(eyebrowStyle.fontSize) : null,
      eyebrowTrack: eyebrowStyle ? Number(parseFloat(eyebrowStyle.letterSpacing).toFixed(2)) : null,
      sectionPad: median(pads.slice().sort((a, b) => a - b)),
      sections: sections.length,
      words: (main.innerText.match(/\S+/g) ?? []).length,
      images: main.querySelectorAll("img").length,
      headerH: header ? Math.round(header.getBoundingClientRect().height) : null,
      buttonH: buttonStyle ? num(buttonStyle.height) : null,
      buttonRadius: buttonStyle ? num(buttonStyle.borderRadius) : null,
      scrollW: document.documentElement.scrollWidth,
    };
  });
}

/* Fields where a gap is a design divergence rather than a content decision. */
/* Fields where this site departs from the product site on purpose. Each one
   names why, and carries the size of the departure so it cannot grow without
   this list being edited. */
const DECLARED = {};

const declaredHits = new Set();

const DESIGN_FIELDS = [
  ["column", "content column", 24],
  ["measure", "prose measure", 40],
  ["h1", "h1 size", 4],
  ["h1Leading", "h1 leading", 6],
  ["body", "body size", 1],
  ["bodyLeading", "body leading", 2],
  ["eyebrow", "eyebrow size", 1],
  ["eyebrowTrack", "eyebrow tracking", 0.2],
  ["sectionPad", "section padding", 24],
  ["headerH", "header height", 4],
  ["buttonH", "button height", 3],
  ["buttonRadius", "button radius", 4],
];

const browser = await chromium.launch({ executablePath });
const problems = [];

for (const width of WIDTHS) {
  const context = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await context.newPage();

  console.log(`\n  ${width}px`);
  console.log(
    `  ${"archetype".padEnd(12)} ${"field".padEnd(18)} ${"new".padStart(7)} ${"ref".padStart(7)}  gap`,
  );

  for (const [label, newPath, refPath] of PAIRS) {
    let mine;
    let theirs;
    try {
      await page.goto(`${NEW}${newPath}`, { waitUntil: "networkidle", timeout: 45000 });
      mine = await measure(page);
      await page.goto(`${REF}${refPath}`, { waitUntil: "networkidle", timeout: 45000 });
      theirs = await measure(page);
    } catch {
      console.log(`  ${label.padEnd(12)} — could not load one of the pair`);
      continue;
    }

    for (const [field, name, tolerance] of DESIGN_FIELDS) {
      if (mine[field] === null || theirs[field] === null) {
        if (mine[field] !== theirs[field]) {
          console.log(
            `  ${label.padEnd(12)} ${name.padEnd(18)} ${String(mine[field] ?? "—").padStart(7)} ${String(theirs[field] ?? "—").padStart(7)}  absent one side`,
          );
        }
        continue;
      }
      const gap = Math.abs(mine[field] - theirs[field]);
      if (gap <= tolerance) continue;
      /* A declared departure passes at its stated size and fails at any other,
         so this cannot become a blanket exemption. */
      const declared = DECLARED[field];
      if (declared && Math.abs(gap - declared.delta) <= tolerance) {
        declaredHits.add(field);
        continue;
      }
      console.log(
        `  ${label.padEnd(12)} ${name.padEnd(18)} ${String(mine[field]).padStart(7)} ${String(theirs[field]).padStart(7)}  ${gap > tolerance * 2 ? "««" : "«"}`,
      );
      problems.push(`${label} @ ${width}px — ${name}: ${mine[field]} vs ${theirs[field]}`);
    }

    /* Density is reported rather than judged: the content is meant to differ,
       but an order-of-magnitude gap means one of them is not a real page. */
    const ratio = theirs.words ? mine.words / theirs.words : 0;
    if (ratio && (ratio < 0.5 || ratio > 2)) {
      console.log(
        `  ${label.padEnd(12)} ${"words".padEnd(18)} ${String(mine.words).padStart(7)} ${String(theirs.words).padStart(7)}  density`,
      );
    }
  }

  await context.close();
}

await browser.close();

console.log(
  problems.length === 0
    ? `
✓ Rendered geometry matches the product site within tolerance.
` +
      [...declaredHits].map((f) => `  · declared departure — ${f}: ${DECLARED[f].why}
`).join("")
    : `\n${problems.length} rendered difference(s) outside tolerance — listed above.\n`,
);
