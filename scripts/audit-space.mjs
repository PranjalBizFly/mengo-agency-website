import { existsSync } from "node:fs";
import { chromium } from "playwright-core";

/**
 * Dead space audit.
 *
 * Section padding is deliberate and shows up as the same figure on every band;
 * what this looks for is the space no rule put there — a band whose content
 * stops well short of its own edges, or a column that reserves width nothing
 * fills. Both are invisible to a stylesheet review and obvious to a reader.
 *
 * The thresholds are deliberately generous: this is meant to catch bands that
 * are wrong, not to argue about twenty pixels.
 *
 * Run: node scripts/audit-space.mjs [baseUrl]
 */

const BASE = process.argv[2] ?? "http://localhost:4123";

const PAGES = [
  ["homepage", "/"],
  ["capability", "/capabilities/content/blog-content/"],
  ["stage", "/solutions/stages/small-team/"],
  ["workflow", "/workflows/client-onboarding/"],
  ["industry", "/industries/healthcare/"],
  ["use case", "/solutions/use-cases/deliver-faster/"],
  ["comparison", "/compare/mengo-vs-hiring/"],
  ["directory", "/explore/"],
  ["guide", "/resources/guides/using-ai-in-client-work-responsibly/"],
];

const WIDTHS = [320, 375, 390, 430, 768, 1024, 1280, 1440];

/* Space beyond the band's own padding that nothing occupies. */
const SLACK = 90;
/* Width reserved to the right of the widest thing in a band. */
const GUTTER = 340;

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
];
const executablePath = CHROME_PATHS.find((p) => existsSync(p));
if (!executablePath) {
  console.error("No Chrome binary found.");
  process.exit(1);
}

const findings = [];
let checked = 0;

const browser = await chromium.launch({ executablePath });

for (const width of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    hasTouch: width <= 900,
    isMobile: width <= 900,
  });
  const page = await context.newPage();

  for (const [label, path] of PAGES) {
    await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
    /* Release the reveals, or unrevealed content measures as absent and every
       band below the fold looks empty. */
    await page.evaluate(() => {
      for (const el of document.querySelectorAll("[data-reveal], [data-reveal-lines]")) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    });
    await page.waitForTimeout(150);

    const bands = await page.evaluate(() => {
      const main = document.querySelector("main") ?? document.body;

      function contentBox(root) {
        let top = Infinity;
        let bottom = -Infinity;
        let right = -Infinity;
        let measured = false;
        const walk = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        let node = walk.currentNode;
        while (node) {
          const paints =
            node.tagName === "IMG" ||
            node.tagName === "SVG" ||
            [...node.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim().length > 0);
          if (paints) {
            const r = node.getBoundingClientRect();
            if (r.height > 0 && r.width > 0) {
              top = Math.min(top, r.top);
              bottom = Math.max(bottom, r.bottom);
              if (r.right > right) {
                right = r.right;
                /* The measure may be on the element or on the wrapper holding
                   it — a heading is rarely capped itself, its column is. */
                measured = false;
                for (let a = node; a && a !== root.parentElement; a = a.parentElement) {
                  if (getComputedStyle(a).maxWidth !== "none") {
                    measured = true;
                    break;
                  }
                }
              }
            }
          }
          node = walk.nextNode();
        }
        return { top, bottom, right, measured };
      }

      return [...main.children]
        .filter((el) => el.getBoundingClientRect().height > 60)
        .map((band) => {
          const r = band.getBoundingClientRect();
          const c = contentBox(band);
          const s = getComputedStyle(band);
          const heading = band.querySelector("h1, h2");
          return {
            head: heading ? heading.textContent.replace(/\s+/g, " ").trim().slice(0, 38) : "—",
            slackTop: Number.isFinite(c.top)
              ? Math.round(c.top - r.top - parseFloat(s.paddingTop))
              : 0,
            slackBottom: Number.isFinite(c.bottom)
              ? Math.round(r.bottom - c.bottom - parseFloat(s.paddingBottom))
              : 0,
            gutter: Number.isFinite(c.right) ? Math.round(r.right - c.right) : 0,
            measured: c.measured,
          };
        });
    });

    for (const b of bands) {
      checked += 1;
      if (b.slackTop > SLACK || b.slackBottom > SLACK) {
        findings.push(
          `${label} @ ${width}: "${b.head}" — ${Math.max(b.slackTop, b.slackBottom)}px beyond its padding`,
        );
      }
      /* A measured band is prose at a reading width, which is the whitespace
         the brief says to keep. Only an unmeasured one is reserving column it
         could have used. */
      if (width >= 1024 && b.gutter > GUTTER && !b.measured) {
        findings.push(`${label} @ ${width}: "${b.head}" — ${b.gutter}px of unused column`);
      }
    }
  }

  await context.close();
  console.log(`  ${width}px checked`);
}

await browser.close();

console.log(`\n  ${checked} bands measured across ${PAGES.length} pages × ${WIDTHS.length} widths.`);
if (findings.length === 0) {
  console.log("\n✓ Space audit passed — no band carries space beyond its own rhythm.\n");
} else {
  console.log(`\nSpace audit found ${findings.length} finding(s):`);
  for (const f of findings.slice(0, 30)) console.log(`  ✗ ${f}`);
  if (findings.length > 30) console.log(`  … and ${findings.length - 30} more`);
  console.log("");
}
process.exit(findings.length === 0 ? 0 : 1);
