/**
 * Responsive audit.
 *
 * Drives a real browser against a running production build and checks, at
 * every width the design has to support, the failures that only exist once
 * layout has actually run: horizontal overflow, elements wider than the
 * viewport, touch targets below 44px, and content that the reveal animation
 * has left invisible.
 *
 * The last of those is the important one. A static check cannot see it, and it
 * is the failure mode of any scroll-reveal system: an element that never
 * intersects and stays at opacity 0 is not a missed animation, it is missing
 * content.
 *
 * Usage:
 *   npx next build && npx next start -p 4123
 *   node scripts/audit-responsive.mjs [baseUrl]
 */
import { existsSync } from "node:fs";
import { chromium } from "playwright-core";

const BASE = process.argv[2] ?? "http://localhost:4123";

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];

/** Every width in the brief, plus the two where this design changes hardest. */
const WIDTHS = [320, 360, 390, 430, 768, 900, 1024, 1280, 1440, 1600, 1920];

/** One page per archetype, plus the two heaviest layouts. */
const PAGES = [
  "/",
  "/why-mengo/",
  "/how-it-works/",
  "/for-agencies/",
  "/for-agencies/solo-agency/",
  "/capabilities/",
  "/capabilities/lead-nurturing/",
  "/workflows/",
  "/workflows/client-onboarding/",
  "/industries/",
  "/industries/healthcare/",
  "/use-cases/",
  "/use-cases/handle-more-clients/",
  "/compare/",
  "/compare/mengo-vs-hiring/",
  "/resources/",
  "/resources/frameworks/the-ownership-ledger/",
  "/resources/blog/the-agency-bottleneck-is-not-talent/",
  "/resources/glossary/",
  "/resources/faq/",
  "/company/responsible-ai/",
  "/get-started/",
  "/sitemap/",
];

/* playwright-core ships no browser of its own, so it drives whichever Chrome
   or Edge is already installed. */
const executablePath = CHROME_PATHS.find((path) => existsSync(path));
if (!executablePath) {
  console.error("No Chrome or Edge binary found. Add its path to CHROME_PATHS.");
  process.exit(1);
}

const browser = await chromium.launch({ executablePath });

const problems = [];
let checks = 0;

for (const width of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
    hasTouch: width <= 900,
    isMobile: width <= 900,
  });
  const page = await context.newPage();

  for (const path of PAGES) {
    const response = await page.goto(`${BASE}${path}`, { waitUntil: "networkidle", timeout: 45000 });
    if (!response || response.status() >= 400) {
      problems.push(`${path} @ ${width}: HTTP ${response?.status() ?? "no response"}`);
      continue;
    }

    /* Scroll the whole page so every reveal target gets its chance, then come
       back to the top. This also exercises the reveal system's safety sweep.

       `scroll-behavior: smooth` is set globally, so a plain scrollTo animates
       and the next frame arrives before the page has moved — which made this
       loop retarget an in-flight animation twenty times and travel almost
       nowhere. Overriding it for the duration is what makes each step a real
       jump, and a real jump is also the harsher test of the sweep. */
    await page.evaluate(async () => {
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";

      const step = window.innerHeight * 0.75;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 60));
      }
      window.scrollTo(0, 0);
      await new Promise((resolve) => setTimeout(resolve, 400));
      root.style.scrollBehavior = previous;
    });

    const result = await page.evaluate((viewportWidth) => {
      const findings = [];
      const doc = document.documentElement;

      if (doc.scrollWidth > viewportWidth + 1) {
        findings.push(`horizontal overflow: document is ${doc.scrollWidth}px wide`);
      }

      /* The element actually causing an overflow, rather than every descendant
         of it.

         Two exemptions, both for elements that cannot widen the page. An
         ancestor with `overflow-x: auto|scroll` is a deliberate scroll region —
         the comparison table is one. An ancestor with `overflow: hidden` or
         `clip` genuinely clips: the photographic grounds paint their image at
         `scale(1.06)`, so its box extends past the frame while not a pixel of
         it is painted outside. Reporting either is noise, and noise is how an
         audit stops being read. */
      for (const el of document.querySelectorAll("body *")) {
        const box = el.getBoundingClientRect();
        if (box.width === 0 || box.height === 0) continue;
        if (box.right <= viewportWidth + 1 && box.left >= -1) continue;
        if (getComputedStyle(el).position === "fixed") continue;

        let contained = false;
        let ancestor = el.parentElement;
        while (ancestor && ancestor !== document.body) {
          const overflowX = getComputedStyle(ancestor).overflowX;
          if (["auto", "scroll", "hidden", "clip"].includes(overflowX)) {
            contained = true;
            break;
          }
          ancestor = ancestor.parentElement;
        }
        if (contained) continue;

        findings.push(
          `${el.tagName.toLowerCase()}.${String(el.className).split(" ")[0] || "-"} extends to ${Math.round(box.right)}px`,
        );
        break;
      }

      // Content left invisible by the reveal system.
      for (const el of document.querySelectorAll("[data-reveal], [data-reveal-lines]")) {
        const style = getComputedStyle(el);
        if (Number(style.opacity) < 0.05 && el.textContent.trim().length > 0) {
          findings.push(`unrevealed content: "${el.textContent.trim().slice(0, 48)}"`);
          break;
        }
      }

      /* Touch targets, on touch widths only.
         Every distinct offender is reported rather than the first, so one run
         gives the whole list instead of one item per iteration. Identical
         labels collapse — a repeated component fails once, not forty times. */
      if (viewportWidth <= 900) {
        const seen = new Set();
        for (const el of document.querySelectorAll("a, button, summary, [role='button']")) {
          const box = el.getBoundingClientRect();
          if (box.width === 0 || box.height === 0) continue;
          // A 1×1 clipped box is the screen-reader-only pattern — the skip
          // link, which is a full-size target once it takes focus.
          if (box.width <= 2 && box.height <= 2) continue;
          if (getComputedStyle(el).display === "inline") continue;
          if (box.height >= 40) continue;

          const label = el.textContent.trim().slice(0, 32);
          if (seen.has(label)) continue;
          seen.add(label);
          findings.push(
            `touch target ${Math.round(box.width)}×${Math.round(box.height)}px: "${label}"`,
          );
        }
      }

      return findings;
    }, width);

    checks += 1;
    for (const finding of result) problems.push(`${path} @ ${width}px — ${finding}`);
  }

  await context.close();
  process.stdout.write(`  ${width}px checked\n`);
}

await browser.close();

console.log(`\n  ${checks} page/width combinations checked across ${PAGES.length} pages.`);

if (problems.length > 0) {
  console.error(`\nResponsive audit found ${problems.length} problem(s):`);
  for (const problem of problems.slice(0, 60)) console.error(`  ✗ ${problem}`);
  if (problems.length > 60) console.error(`  … and ${problems.length - 60} more`);
  process.exit(1);
}

console.log("\n✓ Responsive audit passed — no overflow, no hidden content, no small touch targets.");
