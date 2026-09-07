import { existsSync } from "node:fs";
import { chromium } from "playwright-core";

/**
 * Motion audit.
 *
 * Scroll animation has three failure modes and they are all invisible to a
 * type checker: content that never reveals and is therefore lost, motion that
 * shifts layout as it runs, and animation that ignores a reader who asked for
 * none. This drives the real pages and measures all three.
 *
 * Cumulative layout shift is measured with the browser's own PerformanceObserver
 * over a full scroll of the page, which is the number the reveal system exists
 * to keep at zero: content ships visible and only opacity and transform change,
 * so a correct implementation cannot shift anything.
 *
 * Run: node scripts/audit-motion.mjs [baseUrl]
 */

const BASE = process.argv[2] ?? "http://localhost:4123";

const PAGES = [
  ["homepage", "/"],
  ["capability", "/capabilities/content/blog-content/"],
  ["stage", "/solutions/stages/small-team/"],
  ["workflow", "/workflows/client-onboarding/"],
  ["directory", "/explore/"],
];

const WIDTHS = [390, 768, 1440];

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
];
const executablePath = CHROME_PATHS.find((p) => existsSync(p));
if (!executablePath) {
  console.error("No Chrome binary found.");
  process.exit(1);
}

const problems = [];
let passed = 0;
const check = (ok, label) => {
  if (ok) {
    passed += 1;
  } else {
    problems.push(label);
  }
  console.log(`  ${ok ? "✓" : "✗"} ${label}`);
};

/** Scroll the whole page in real steps, collecting layout shift as it goes. */
async function scrollAndMeasure(page) {
  await page.evaluate(() => {
    window.__cls = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        /* Shifts within 500ms of a real input are the reader's doing. */
        if (!entry.hadRecentInput) window.__cls += entry.value;
      }
    }).observe({ type: "layout-shift", buffered: true });
  });

  await page.evaluate(async () => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    const step = window.innerHeight * 0.6;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    await new Promise((r) => setTimeout(r, 500));
    root.style.scrollBehavior = previous;
  });

  return page.evaluate(() => ({
    cls: window.__cls ?? 0,
    stuck: [...document.querySelectorAll("[data-reveal], [data-reveal-lines]")].filter((el) => {
      const box = el.getBoundingClientRect();
      return Number(getComputedStyle(el).opacity) < 0.05 && el.textContent.trim().length > 0 && box.height > 0;
    }).length,
    revealed: document.querySelectorAll(".is-revealed").length,
    total: document.querySelectorAll("[data-reveal], [data-reveal-lines]").length,
  }));
}

const browser = await chromium.launch({ executablePath });

/* --------------------------------------------------- Reveal, shift, stuck */
for (const width of WIDTHS) {
  console.log(`\n  ${width}px`);
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    hasTouch: width <= 900,
    isMobile: width <= 900,
  });
  const page = await context.newPage();

  for (const [label, path] of PAGES) {
    await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
    const r = await scrollAndMeasure(page);
    check(
      r.cls < 0.02,
      `${label}: no layout shift from the reveals (CLS ${r.cls.toFixed(4)})`,
    );
    check(r.stuck === 0, `${label}: nothing left invisible (${r.stuck} stuck of ${r.total})`);
    check(r.revealed > 0, `${label}: the reveals actually ran (${r.revealed} revealed)`);
  }

  await context.close();
}

/* ------------------------------------------------------- Content ships visible */
console.log("\n  Without JavaScript");
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${BASE}/`, { waitUntil: "domcontentloaded" });
  const hidden = await page.evaluate(
    () =>
      [...document.querySelectorAll("[data-reveal], [data-reveal-lines]")].filter(
        (el) => Number(getComputedStyle(el).opacity) < 0.05,
      ).length,
  );
  check(hidden === 0, `every revealed element is visible with JS off (${hidden} hidden)`);
  const armed = await page.evaluate(() => document.documentElement.classList.contains("js-reveal"));
  check(!armed, "the hidden state is never armed without JavaScript");
  await context.close();
}

/* ------------------------------------------------------------ Reduced motion */
console.log("\n  Reduced motion");
{
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  const armed = await page.evaluate(() => document.documentElement.classList.contains("js-reveal"));
  check(!armed, "the reveal system does not arm at all");

  const moving = await page.evaluate(() => {
    /* Anything a reader could see move: a perceptible duration, or an element
       still dimmed. 20ms is well under a frame, so a clamped transition is
       instant rather than animated. */
    const longest = (value) =>
      Math.max(...String(value).split(",").map((v) => parseFloat(v) * (v.includes("ms") ? 1 : 1000) || 0));
    let offenders = 0;
    for (const el of document.querySelectorAll("[data-reveal], [data-reveal-lines], [data-drift] img")) {
      const s = getComputedStyle(el);
      if (Number(s.opacity) < 0.99) offenders += 1;
      else if (longest(s.transitionDuration) > 20 || longest(s.animationDuration) > 20) offenders += 1;
    }
    return offenders;
  });
  check(moving === 0, `nothing moves perceptibly or stays dimmed (${moving} offenders)`);

  const drift = await page.evaluate(() => {
    const img = document.querySelector("[data-drift] img");
    return img ? getComputedStyle(img).transform : "none";
  });
  check(drift === "none", `the parallax is off (transform: ${drift})`);

  /* The counter must print its value rather than animate to it. */
  await page.goto(`${BASE}/explore/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  const counted = await page.evaluate(() => {
    const el = [...document.querySelectorAll("p")].find((p) => /\d+\s+pages/.test(p.textContent ?? ""));
    return el ? el.textContent.trim() : "";
  });
  check(/529/.test(counted), `the counter shows its value immediately (${counted})`);
  await context.close();
}

/* ------------------------------------------------------------- The counter */
console.log("\n  Counter");
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(`${BASE}/explore/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1600);
  const settled = await page.evaluate(() => {
    const el = [...document.querySelectorAll("p")].find((p) => /\d+\s+pages/.test(p.textContent ?? ""));
    return el ? el.textContent.trim() : "";
  });
  check(/529/.test(settled), `it settles on the real number (${settled})`);
  await context.close();
}

await browser.close();

console.log(
  problems.length === 0
    ? `\n✓ Motion audit passed — ${passed} checks.\n`
    : `\nMotion audit found ${problems.length} problem(s):\n${problems.map((p) => `  ✗ ${p}`).join("\n")}\n`,
);
process.exit(problems.length === 0 ? 0 : 1);
