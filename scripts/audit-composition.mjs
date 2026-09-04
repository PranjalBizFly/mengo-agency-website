import { existsSync } from "node:fs";
import { chromium } from "playwright-core";

/**
 * Composition audit.
 *
 * The parity audit compares geometry — column widths, type scale, rhythm — and
 * reports zero divergence. Two sites can pass that and still read as different
 * products, because what a reader actually perceives as "the same website" is
 * the *grammar*: which editorial devices a page reaches for, in what order, and
 * how many of them it uses.
 *
 * So this prints the section-by-section shape of equivalent pages on both
 * sites: for each band, its ground, its heading scale, and the device carrying
 * its content. Divergence here is not automatically a defect — the content
 * differs on purpose — but a page that answers the same question with a
 * different sequence of devices is where "sibling product" comes from.
 *
 * Run: node scripts/audit-composition.mjs [newBase] [referenceBase]
 */

const NEW = process.argv[2] ?? "http://localhost:4123";
const REF = process.argv[3] ?? "http://localhost:4200";

const PAIRS = [
  ["homepage", "/", "/"],
  ["capability", "/capabilities/content/blog-content/", "/features/annual-calendar/"],
  ["solution", "/solutions/use-cases/deliver-faster/", "/solutions/build-a-content-engine/"],
  ["industry", "/industries/healthcare/", "/industries/accounting-firms/"],
  ["comparison", "/compare/mengo-vs-hiring/", "/compare/mengo-vs-a-fractional-cmo/"],
  ["long-form", "/resources/guides/using-ai-in-client-work-responsibly/", "/resources/90-day-content-plan/"],
];

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

/** Name the device carrying a band, by the markup both sites actually emit. */
const DEVICE_TESTS = [
  ["process-rail", "ol.process-rail, ol[data-numbered], dl[data-numbered]"],
  ["definition-list", "dl.index-list, dl.index-rows"],
  ["story-rows", ".story-rows"],
  ["marker-list", "ul.space-y-3\\.5, ul[class*='space-y-3']"],
  ["pull-quote", "figure blockquote"],
  ["faq", "details"],
  ["table", "table"],
  ["spine", ".spine, .process-rail"],
  ["ledger", ".ledger"],
  ["ladder", ".ladder"],
  ["layers", ".system-layers"],
  ["photo", "img"],
  ["prose", "p.text-prose"],
];

async function shapeOf(page) {
  return page.evaluate((tests) => {
    const main = document.querySelector("main") ?? document.body;
    const bands = [...main.children].filter((el) => el.getBoundingClientRect().height > 60);

    return bands.map((band) => {
      const heading = band.querySelector("h1, h2");
      const size = heading
        ? Math.round(parseFloat(getComputedStyle(heading).fontSize))
        : null;
      const bg = getComputedStyle(band).backgroundColor;
      const devices = tests
        .filter(([, selector]) => {
          try {
            return band.querySelector(selector) !== null;
          } catch {
            return false;
          }
        })
        .map(([name]) => name);
      return {
        tag: heading ? heading.tagName.toLowerCase() : "—",
        size,
        bg,
        devices: devices.slice(0, 3),
      };
    });
  }, tests());
}

function tests() {
  return DEVICE_TESTS;
}

const browser = await chromium.launch({ executablePath });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();

for (const [label, newPath, refPath] of PAIRS) {
  console.log(`\n${"━".repeat(72)}\n${label.toUpperCase()}`);
  for (const [side, base, path] of [
    ["NEW", NEW, newPath],
    ["REF", REF, refPath],
  ]) {
    try {
      await page.goto(`${base}${path}`, { waitUntil: "networkidle", timeout: 45000 });
    } catch {
      console.log(`  ${side}  — could not load ${path}`);
      continue;
    }
    const shape = await shapeOf(page);
    console.log(`  ${side}  ${path}  (${shape.length} bands)`);
    shape.forEach((band, i) => {
      const head = band.size ? `${band.tag}/${band.size}px` : "—";
      console.log(
        `     ${String(i + 1).padStart(2)}  ${head.padEnd(10)} ${(band.devices.join(", ") || "text only").padEnd(34)}`,
      );
    });
  }
}

await browser.close();
