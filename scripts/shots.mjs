import { existsSync, mkdirSync } from "node:fs";
import { chromium } from "playwright-core";

/**
 * Side-by-side screenshots of equivalent pages.
 *
 * The measurement scripts answer "are the numbers the same". This answers the
 * only question that actually decides the work: does it look like the same
 * website. Pages are captured from both sites at the same viewport, so the two
 * files can be put next to each other and read rather than diffed.
 *
 * Usage: node scripts/shots.mjs <archetype> <width> [full]
 */

const NEW = "http://localhost:4123";
const REF = "http://localhost:4200";
const OUT = process.env.SHOT_DIR ?? "shots";

const PAIRS = {
  homepage: ["/", "/"],
  hub: ["/capabilities/", "/features/"],
  capability: ["/capabilities/content/blog-content/", "/features/annual-calendar/"],
  solution: ["/solutions/use-cases/deliver-faster/", "/solutions/build-a-content-engine/"],
  workflow: ["/workflows/client-onboarding/", "/platform/campaign-lab/"],
  industry: ["/industries/healthcare/", "/industries/accounting-firms/"],
  longform: [
    "/resources/guides/using-ai-in-client-work-responsibly/",
    "/resources/90-day-content-plan/",
  ],
  explore: ["/explore/", "/sitemap/"],
};

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

const archetype = process.argv[2] ?? "homepage";
const width = Number(process.argv[3] ?? 1280);
const full = process.argv[4] === "full";

const pair = PAIRS[archetype];
if (!pair) {
  console.error(`Unknown archetype. One of: ${Object.keys(PAIRS).join(", ")}`);
  process.exit(1);
}

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const executablePath = CHROME_PATHS.find((path) => existsSync(path));
const browser = await chromium.launch({ executablePath });
const context = await browser.newContext({
  viewport: { width, height: full ? 900 : Math.round(width * 0.72) },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

for (const [side, base, path] of [
  ["new", NEW, pair[0]],
  ["ref", REF, pair[1]],
]) {
  await page.goto(`${base}${path}`, { waitUntil: "networkidle", timeout: 45000 });
  /* Let the reveal controller settle so nothing is captured mid-animation. */
  await page.waitForTimeout(900);
  const file = `${OUT}/${archetype}-${width}-${side}.png`;
  await page.screenshot({ path: file, fullPage: full });
  console.log(file);
}

await browser.close();
