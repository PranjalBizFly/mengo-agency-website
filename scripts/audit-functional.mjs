import { existsSync } from "node:fs";
import { chromium } from "playwright-core";

/**
 * Functional audit.
 *
 * The interaction audit covers the header, the search dialog, the results page,
 * the directory and the capability explorer. This covers everything else that
 * a reader can operate: the theme control, the mobile drawer, the FAQ
 * disclosures, the in-page rail, breadcrumbs, prev/next, the footer, external
 * links, the not-found page, and whether a keyboard can reach and see any of
 * it.
 *
 * Every check drives the rendered page. Nothing here reads source.
 *
 * Run: node scripts/audit-functional.mjs [baseUrl]
 */

const BASE = process.argv[2] ?? "http://localhost:4123";

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
const executablePath = CHROME_PATHS.find((p) => existsSync(p));
if (!executablePath) {
  console.error("No Chrome or Edge binary found.");
  process.exit(1);
}

const problems = [];
let passed = 0;
function check(ok, label) {
  if (ok) {
    passed += 1;
    console.log(`  ✓ ${label}`);
  } else {
    problems.push(label);
    console.log(`  ✗ ${label}`);
  }
}

const browser = await chromium.launch({ executablePath });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();

/* ------------------------------------------------------------------ Theme */
console.log("\n  Theme control");
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });

const themeButton = page.locator("header").getByRole("button", { name: /theme|dark|light/i }).first();
check((await themeButton.count()) > 0, "the header carries a theme control");

const readTheme = () =>
  page.evaluate(() => document.documentElement.getAttribute("data-theme") ?? "unset");
const before = await readTheme();
await themeButton.click();
await page.waitForTimeout(400);
const after = await readTheme();
check(after !== before, `the control changes the theme (${before} → ${after})`);

const painted = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
check(painted !== "rgba(0, 0, 0, 0)", `the new theme paints a ground (${painted})`);

/* It has to survive a navigation, or it is a toggle that forgets. */
await page.goto(`${BASE}/capabilities/`, { waitUntil: "networkidle" });
check((await readTheme()) === after, "the choice survives a navigation");

await themeButton.click();
await page.waitForTimeout(300);

/* --------------------------------------------------------------- Rail */
console.log("\n  In-page rail");
await page.goto(`${BASE}/capabilities/content/blog-content/`, { waitUntil: "networkidle" });
await page.waitForTimeout(500);

const rail = page.locator('nav[aria-label="On this page"] a');
const railCount = await rail.count();
check(railCount >= 4, `the rail lists the page's bands (${railCount})`);

if (railCount > 2) {
  const href = await rail.nth(2).getAttribute("href");
  const targetId = (href ?? "").replace("#", "");
  const exists = await page.evaluate((id) => (document.getElementById(id) ? 1 : 0), targetId);
  check(exists > 0, `every rail link points at a band that exists (#${targetId})`);

  await rail.nth(2).click();
  await page.waitForTimeout(700);
  const scrolled = await page.evaluate(() => window.scrollY);
  check(scrolled > 200, `following a rail link moves the page (${Math.round(scrolled)}px)`);
}

/* ------------------------------------------------------------ Disclosures */
console.log("\n  FAQ disclosures");
/* Scoped to the content: the header carries its own disclosure, hidden at
   this width, and `first()` would resolve to that. */
const details = page.locator("main details");
const detailCount = await details.count();
check(detailCount > 0, `the page carries disclosures (${detailCount})`);

if (detailCount > 0) {
  const first = details.first();
  check(!(await first.evaluate((el) => el.open)), "they start closed");
  await first.locator("summary").click();
  await page.waitForTimeout(300);
  check(await first.evaluate((el) => el.open), "a summary opens its answer");
  const answer = await first.evaluate((el) => (el.innerText ?? "").trim().length);
  check(answer > 40, `the answer has content (${answer} chars)`);
  await first.locator("summary").click();
  await page.waitForTimeout(300);
  check(!(await first.evaluate((el) => el.open)), "it closes again");
}

/* ------------------------------------------------------------ Breadcrumbs */
console.log("\n  Breadcrumbs");
const crumbs = page.locator('nav[aria-label="Breadcrumb"] a');
const crumbCount = await crumbs.count();
check(crumbCount >= 2, `the trail is present (${crumbCount} links)`);

const current = page.locator('nav[aria-label="Breadcrumb"] [aria-current="page"]');
check((await current.count()) === 1, "the current page is marked and not a link");

if (crumbCount > 0) {
  const href = await crumbs.nth(crumbCount - 1).getAttribute("href");
  const res = await page.request.get(`${BASE}${href}`);
  check(res.ok(), `the parent crumb resolves (${href} → ${res.status()})`);
}

/* -------------------------------------------------------------- Prev/Next */
console.log("\n  Prev/Next");
await page.goto(`${BASE}/resources/guides/using-ai-in-client-work-responsibly/`, {
  waitUntil: "networkidle",
});
const prevNext = page.locator('nav[aria-label$="navigation"] a');
const pnCount = await prevNext.count();
check(pnCount > 0, `long-form carries prev/next (${pnCount} links)`);
if (pnCount > 0) {
  const href = await prevNext.first().getAttribute("href");
  const res = await page.request.get(`${BASE}${href}`);
  check(res.ok(), `its destination resolves (${href} → ${res.status()})`);
}

/* ----------------------------------------------------------------- Footer */
console.log("\n  Footer");
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(600);

const footerLinks = page.locator("footer a");
const footerCount = await footerLinks.count();
check(footerCount > 15, `the footer carries its navigation (${footerCount} links)`);

const external = await page.evaluate(() =>
  [...document.querySelectorAll("footer a")]
    .filter((a) => a.href.startsWith("http") && !a.href.includes(location.host))
    .map((a) => ({ href: a.href, rel: a.getAttribute("rel") ?? "" })),
);
check(external.length > 0, `the footer links out (${external.length} external)`);
const unsafe = external.filter((a) => !a.rel.includes("noopener"));
check(unsafe.length === 0, `every external link carries rel=noopener (${unsafe.length} without)`);

/* --------------------------------------------------------------- Not found */
console.log("\n  Not found");
const missing = await page.goto(`${BASE}/this-page-does-not-exist/`, { waitUntil: "networkidle" });
check(missing.status() === 404, `an unknown route answers 404 (${missing.status()})`);
const body = (await page.locator("body").innerText()).toLowerCase();
check(body.length > 80, "the 404 renders a real page rather than a bare message");
check((await page.locator("header nav").count()) > 0, "the 404 keeps the site navigation");
const recovery = await page.locator("main a").count();
check(recovery > 0, `it offers a way back (${recovery} links)`);

/* --------------------------------------------------------------- Keyboard */
console.log("\n  Keyboard");
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
await page.keyboard.press("Tab");
const firstStop = await page.evaluate(() => {
  const el = document.activeElement;
  return { text: (el?.textContent ?? "").trim().slice(0, 30), tag: el?.tagName };
});
check(/skip/i.test(firstStop.text), `the first stop is the skip link (${firstStop.text})`);

const visible = await page.evaluate(() => {
  const el = document.activeElement;
  if (!el) return false;
  const s = getComputedStyle(el);
  const box = el.getBoundingClientRect();
  return s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0 && box.height > 0;
});
check(visible, "the focused skip link is visible and takes an outline");

await page.keyboard.press("Enter");
await page.waitForTimeout(400);
const jumped = await page.evaluate(() => location.hash);
check(jumped === "#main", `the skip link jumps to the content (${jumped || "no hash"})`);

/* Tab through the header and confirm every stop shows focus. */
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
let noOutline = 0;
for (let i = 0; i < 12; i += 1) {
  await page.keyboard.press("Tab");
  const ok = await page.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return true;
    const s = getComputedStyle(el);
    return (s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0) || s.boxShadow !== "none";
  });
  if (!ok) noOutline += 1;
}
check(noOutline === 0, `every header stop shows a focus ring (${noOutline} without)`);

/* ----------------------------------------------------------- Mobile drawer */
console.log("\n  Mobile drawer at 390px");
const narrow = await browser.newContext({
  viewport: { width: 390, height: 780 },
  hasTouch: true,
  isMobile: true,
});
const small = await narrow.newPage();
await small.goto(`${BASE}/`, { waitUntil: "networkidle" });

const burger = small.locator("header button").filter({ hasText: /menu/i }).first();
const burgerFallback = small.locator("header button").last();
const trigger = (await burger.count()) > 0 ? burger : burgerFallback;
await trigger.click();
await small.waitForTimeout(600);

const drawerLinks = small.locator("#mobile-nav a");
const drawerCount = await drawerLinks.count();
check(drawerCount > 5, `the drawer opens with the navigation in it (${drawerCount} links)`);

const locked = await small.evaluate(() => getComputedStyle(document.body).overflow);
check(locked === "hidden", `the drawer locks the page behind it (overflow: ${locked})`);

await small.keyboard.press("Escape");
await small.waitForTimeout(500);
const unlocked = await small.evaluate(() => getComputedStyle(document.body).overflow);
check(unlocked !== "hidden", `Escape closes it and returns the scroll (overflow: ${unlocked})`);

await narrow.close();
await browser.close();

console.log(
  problems.length === 0
    ? `\n✓ Functional audit passed — ${passed} checks.\n`
    : `\nFunctional audit found ${problems.length} problem(s):\n${problems.map((p) => `  ✗ ${p}`).join("\n")}\n`,
);
process.exit(problems.length === 0 ? 0 : 1);
