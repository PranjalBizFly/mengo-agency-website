import { existsSync } from "node:fs";
import { chromium } from "playwright-core";

/**
 * The interaction audit.
 *
 * Four pieces of this site are behaviour rather than markup — the header, the
 * search, the directory's filters and the capability explorer — and none of
 * them is covered by an audit that only reads rendered HTML. A search box that
 * looks right and returns nothing is worse than no search box, so this drives a
 * real browser and checks that each of them actually does its job.
 *
 * Run: node scripts/audit-interactive.mjs [base-url]   (needs a running server)
 */

const BASE = process.argv[2] ?? "http://localhost:4123";

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

const executablePath = CHROME_PATHS.find((path) => existsSync(path));
if (!executablePath) {
  console.error("No Chrome or Edge binary found. Add its path to CHROME_PATHS.");
  process.exit(1);
}

const problems = [];
const check = (condition, message) => {
  if (!condition) problems.push(message);
  console.log(`  ${condition ? "✓" : "✗"} ${message}`);
};

const browser = await chromium.launch({ executablePath });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();


/**
 * Refuse to audit an unstyled page.
 *
 * If the stylesheet did not load, every check below fails for one reason and
 * the report becomes two thousand phantom defects. `--color-paper` is defined
 * in the theme block and inherited by nothing else, so resolving it is a direct
 * test of whether the site's CSS is present.
 *
 * The usual cause is a `next dev` sharing `.next` with the production build it
 * is serving: dev rewrites that directory continuously, so the stylesheet can
 * vanish part-way through a twenty-minute run. That is why the responsive audit
 * re-checks at every width rather than once — a run that began styled can stop
 * being so, and the failure has to be named rather than measured.
 */
async function assertStyled(page, where) {
  const styled = await page.evaluate(() => {
    if (document.styleSheets.length === 0) return false;
    const paper = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-paper")
      .trim();
    return paper.length > 0;
  });
  if (!styled) {
    console.error(
      `\nThe page at ${where} rendered without its stylesheet.\n\n` +
        `Every layout check below would fail for that one reason, so the audit\n` +
        `stops here rather than reporting it as hundreds of defects.\n\n` +
        `The usual cause is a \`next dev\` sharing the .next directory with the\n` +
        `production server. Stop it, then:\n\n` +
        `  rm -rf .next && npm run build && npx next start -p 4123\n`,
    );
    await browser.close();
    process.exit(1);
  }
}

/* ------------------------------------------------------------------ Header */
console.log("\n  Header");
await page.goto(`${BASE}/why-mengo/`, { waitUntil: "networkidle" });
await assertStyled(page, `${BASE}/why-mengo/`);

const home = page.locator('header nav[aria-label="Primary"] a', { hasText: /^Home$/ });
check((await home.count()) === 1, "the bar carries one visible Home link");
check((await home.first().getAttribute("href")) === "/", "Home points at the root");

const headerText = (await page.locator("header").innerText()).toLowerCase();
check(!headerText.includes("for agencies"), "no descriptor is attached to the wordmark");

/* "How it works" is a supporting destination. It belongs in the Workflows
   panel and the footer, and a slot in the bar would give it the weight of a
   section — so its absence from the header is the check, not its presence. */
check(!headerText.includes("how it works"), "How it works is not in the header bar");
check(
  (await page.locator('header nav[aria-label="Primary"]').innerText()).toLowerCase().includes("home"),
  "the primary nav carries Home",
);

const mark = page.locator('header img[src*="mengo-mark"]');
check((await mark.count()) === 1, "the header carries the Mengo mark, not a wordmark alone");
check(
  (await mark.first().getAttribute("alt")) === "" &&
    (await mark.first().getAttribute("aria-hidden")) === "true",
  "the mark is decorative — the link carries the accessible name",
);

const sections = await page
  .locator('header nav[aria-label="Primary"] > ul > li > button')
  .allInnerTexts();
check(
  sections.join("|") === "Solutions|Capabilities|Workflows|Industries|Resources",
  `the five sections are in order (${sections.join(", ")})`,
);

await page.locator('header nav[aria-label="Primary"]').getByRole("button", { name: "Industries" }).hover();
await page.locator(".mega-panel").waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
await page.waitForTimeout(300);
const panelHeadings = (await page.locator(".mega-panel p.label").allInnerTexts()).join(" | ");
/* The label utility uppercases, so the comparison has to be case-insensitive. */
const headingText = panelHeadings.toLowerCase();
check(
  headingText.includes("technical") &&
    headingText.includes("commerce") &&
    headingText.includes("regulated"),
  `the industries panel is grouped by sector (${panelHeadings || "no headings found"})`,
);

/* Every panel renders every column it was given.
 *
 * The Capabilities panel splits eight groups across three columns, two of which
 * are continuations with no heading of their own. Keying those on the heading
 * collided, and React's documented response to a duplicate key is to duplicate
 * or omit children — so the check is that each panel's column count and its
 * link count are what the navigation data actually specifies. Hovering each in
 * turn also exercises the reconciliation between panels, which is where a bad
 * key does its damage. */
console.log("\n  Mega panels");
for (const [label, expectedColumns] of [
  ["Solutions", 4],
  ["Capabilities", 4],
  ["Workflows", 4],
  ["Industries", 4],
  ["Resources", 4],
]) {
  await page.locator('header nav[aria-label="Primary"]').getByRole("button", { name: label }).hover();
  await page.locator(".mega-panel").waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(250);
  const columns = await page.locator(".mega-panel [data-mega-col]").count();
  check(columns === expectedColumns, `${label} renders ${expectedColumns} columns (found ${columns})`);
}

/* The taxonomy is the one that collided, so it is named explicitly. */
await page.locator('header nav[aria-label="Primary"]').getByRole("button", { name: "Capabilities" }).hover();
await page.locator(".mega-panel").waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
await page.waitForTimeout(250);
const groupLinks = await page.evaluate(() =>
  [...document.querySelectorAll('.mega-panel a[href^="/capabilities/"]')]
    .map((a) => a.getAttribute("href"))
    .filter((href) => /^\/capabilities\/[a-z-]+\/$/.test(href ?? "")).length,
);
check(groupLinks === 8, `all eight capability groups are in the panel (found ${groupLinks})`);

await page.keyboard.press("Escape");

/* -------------------------------------------------------------------- Hero */
console.log("\n  Hero");
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });

/* The brand headline is Mengo's and is not this site's to reword. It has been
   changed twice by mistake, so it is asserted rather than trusted. */
const h1 = (await page.locator("main h1").first().innerText()).replace(/\s+/g, " ").trim();
check(h1 === "Your AI Co-founder", `the hero headline is the brand's (found "${h1}")`);

const heroText = (await page.locator("main section").first().innerText()).replace(/\s+/g, " ");
check(
  heroText.includes("The co-founder that never sleeps."),
  "the supporting headline is present",
);

/* Order is the composition: eyebrow, headline, promise, explanation, actions,
   facts. A hero whose parts are in the DOM but out of sequence is the "text
   here, image there" failure in another form. */
const heroOrder = await page.evaluate(() => {
  const hero = document.querySelector("main section");
  if (!hero) return null;
  const nodes = [...hero.querySelectorAll(".kicker, h1, p, a")];
  const index = (test) => nodes.findIndex(test);
  return {
    eyebrow: index((n) => n.classList.contains("kicker")),
    headline: index((n) => n.tagName === "H1"),
    promise: index((n) => n.textContent?.includes("never sleeps")),
    lead: index((n) => n.textContent?.includes("final call")),
    action: index((n) => n.tagName === "A" && /how it works/i.test(n.textContent ?? "")),
  };
});
check(
  heroOrder !== null &&
    heroOrder.eyebrow < heroOrder.headline &&
    heroOrder.headline < heroOrder.promise &&
    heroOrder.promise < heroOrder.lead &&
    heroOrder.lead < heroOrder.action,
  "the hero runs eyebrow → headline → promise → explanation → actions",
);

/* ------------------------------------------------------------------ Search */
console.log("\n  Search");
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });

// The "/" shortcut, from a cold page with nothing focused.
await page.keyboard.press("/");
const dialog = page.locator('[role="dialog"][aria-label="Search"]');
await dialog.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
check(await dialog.isVisible(), 'pressing "/" opens the search dialog');

check(
  await page.evaluate(() => document.activeElement?.getAttribute("type") === "search"),
  "the search field takes focus on open",
);

await page.keyboard.type("healthcare");
await page.waitForTimeout(400);
const hits = dialog.locator('a[data-index]');
const hitCount = await hits.count();
check(hitCount > 0, `"healthcare" returns results (${hitCount})`);

const firstHref = await hits.first().getAttribute("href");
check(
  typeof firstHref === "string" && firstHref.startsWith("/") && firstHref.endsWith("/"),
  `the first result is a real internal link (${firstHref})`,
);

/* Arrow-then-enter is the keyboard path, and it has to navigate. This is a
   client-side transition, so waiting on the network would resolve before the
   route had changed — wait on the URL itself. */
await page.keyboard.press("ArrowDown");
await page.keyboard.press("Enter");
await page.waitForURL((url) => url.pathname !== "/", { timeout: 5000 }).catch(() => {});
check(
  new URL(page.url()).pathname !== "/",
  `Enter navigates to a result (${new URL(page.url()).pathname})`,
);

/* A query with no answer must say so rather than showing an empty panel.
   From a fresh load: a route change closes the dialog, so opening one during
   the transition we just triggered would race that effect. */
await page.goto(`${BASE}/why-mengo/`, { waitUntil: "networkidle" });
await page.keyboard.press("/");
await dialog.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
await dialog.locator("input[type=search]").waitFor({ state: "visible" });
await page.keyboard.type("zzzqqq");
await dialog
  .getByText(/Nothing matched/)
  .waitFor({ state: "visible", timeout: 5000 })
  .catch(() => {});
check(
  (await dialog.getByText(/Nothing matched/).count()) > 0,
  "a query with no matches says so",
);

/* aria-modal hides the page behind the dialog; the tab order has to be held
   as well, or a keyboard reader walks into content they cannot see. */
await page.keyboard.press("Shift+Tab");
await page.waitForTimeout(150);
check(
  await page.evaluate(() => {
    const panel = document.querySelector('[role="dialog"][aria-label="Search"]');
    return Boolean(panel && document.activeElement && panel.contains(document.activeElement));
  }),
  "Tab is trapped inside the dialog",
);

await page.keyboard.press("Escape");
await page.waitForTimeout(200);
check(!(await dialog.isVisible()), "Escape closes the dialog");

/* The directory is offered inside search itself, as the panel's last row, in
   every state — the reader who cannot name what they want should not have to
   fail a search first to be shown the whole site. */
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
await page.keyboard.press("/");
await dialog.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});

const exploreLink = dialog.getByRole("link", { name: /Explore all pages/i });
check((await exploreLink.count()) === 1, "search offers Explore all pages before anything is typed");

/* Last child of the panel, not a row somewhere in the middle of it. */
check(
  await page.evaluate(() => {
    const panel = document.querySelector('[role="dialog"][aria-label="Search"]');
    const link = panel?.querySelector('a[href="/explore/"]');
    return Boolean(link) && panel?.lastElementChild === link;
  }),
  "it is the panel's bottom action row",
);

const exploreText = await exploreLink.first().innerText();
const shownCount = Number((exploreText.match(/([\d,]+)\s+pages/) ?? [])[1]?.replace(/,/g, ""));
const registryCount = await page.evaluate(async () => {
  const response = await fetch("/api/search-index/");
  return (await response.json()).length;
});
check(
  Number.isFinite(shownCount) && shownCount === registryCount,
  `the count comes from the registry (${shownCount} shown, ${registryCount} registered)`,
);
check(/→/.test(exploreText), "the row carries its arrow");

/* And it is there once a query has been typed, too. */
await page.keyboard.type("brand");
await page.waitForTimeout(300);
check(
  (await dialog.getByRole("link", { name: /Explore all pages/i }).count()) === 1,
  "the row survives a query",
);
await page.keyboard.press("Backspace");
await page.keyboard.press("Backspace");
await page.keyboard.press("Backspace");
await page.keyboard.press("Backspace");
await page.keyboard.press("Backspace");
await page.waitForTimeout(200);

check(
  (await dialog.innerText()).toLowerCase().includes("start here"),
  "the suggested destinations are headed Start here",
);

await exploreLink.first().click();
await page.waitForURL((url) => url.pathname === "/explore/", { timeout: 5000 }).catch(() => {});
check(
  new URL(page.url()).pathname === "/explore/",
  `Explore all pages opens the directory (${new URL(page.url()).pathname})`,
);

/* ----------------------------------------------------------- Results page */
console.log("\n  Results page");
await page.goto(`${BASE}/search/?q=healthcare`, { waitUntil: "networkidle" });
await page.waitForTimeout(400);

check(
  (await page.locator('input[aria-label="Search everything"]').inputValue()) === "healthcare",
  "the query arrives from the URL",
);

const results = page.locator("main section ul > li > a");
const resultCount = await results.count();
check(resultCount > 0, `the results page renders matches (${resultCount})`);

const first = results.first();
const firstText = await first.innerText();
check(/\n/.test(firstText.trim()), "each result carries more than a bare link");
check(
  (await first.locator(".label").count()) > 0,
  "each result names its type",
);
check(
  (await page.locator("main mark").count()) > 0,
  "the matched words are marked in the description",
);

await page.locator("main").getByRole("button", { name: /^Sector/ }).first().click().catch(() => {});
await page.waitForTimeout(300);
check(page.url().includes("q=healthcare"), "the query stays in the URL while filtering");

/* --------------------------------------------------------------- Directory */
console.log("\n  Directory");
await page.goto(`${BASE}/explore/`, { waitUntil: "networkidle" });

/* The control bar, scoped: "Workflows" and "Clear" also name things in the
   header and the footer, and an unscoped role query would find those first. */
const bar = page.locator("div.sticky");
const visibleRows = () =>
  page.evaluate(
    () => [...document.querySelectorAll("[data-entry]")].filter((li) => !li.hidden).length,
  );

/* Against the registry itself rather than against a threshold: a directory
   that quietly drops a hundred pages is the failure this exists to catch. */
const published = await page.evaluate(async () => {
  const response = await fetch("/api/search-index/");
  const records = await response.json();
  return records.length;
});
const listed = await page.locator("[data-entry]").count();
check(listed === published, `every registered page is in the directory (${listed} of ${published})`);

const categories = await page.locator("[data-category]").count();
check(categories > 1, `the site is grouped into categories (${categories})`);
check(
  (await page.locator("[data-category] [data-toggle]").count()) === categories,
  "every category carries its own disclosure control",
);

const layout = await page.evaluate(() => {
  const list = document.querySelector("[data-entries]");
  const head = document.querySelector("[data-category] h2").parentElement;
  return {
    columns: getComputedStyle(list).gridTemplateColumns.split(" ").length,
    rule: getComputedStyle(head).borderBottomWidth,
  };
});
check(layout.columns === 3, `entries run in three columns at 1280 (${layout.columns})`);
check(layout.rule === "1px", `a thin divider closes each heading (${layout.rule})`);

/* Collapsing is presentation only: it folds the rows and changes no count. */
await bar.getByRole("button", { name: "Collapse all" }).click();
await page.waitForTimeout(250);
const folded = await page.evaluate(() => ({
  open: [...document.querySelectorAll("[data-entries]")].filter((ul) => !ul.hidden).length,
  headings: document.querySelectorAll("[data-category] h2").length,
  total: document.querySelector("[aria-live=polite]").textContent.trim(),
}));
check(folded.open === 0, `collapse all folds every category (${folded.open} left open)`);
check(folded.headings === categories, "the headings stay when the rows fold away");
check(folded.total === `${published} pages`, `folding changes no count (${folded.total})`);

await bar.getByRole("button", { name: "Expand all" }).click();
await page.waitForTimeout(250);
check((await visibleRows()) === published, "expand all restores every row");

/* A category chip narrows to that category, and the count says which. */
await bar.getByRole("button", { name: /^Industries/ }).click();
await page.waitForTimeout(250);
const chipFiltered = await visibleRows();
check(
  chipFiltered < published && chipFiltered > 5,
  `the category chips narrow the directory (${chipFiltered} pages)`,
);
check(
  /industries/i.test(await page.locator("[aria-live=polite]").innerText()),
  "the count names the category it is showing",
);

await bar.getByRole("button", { name: "Clear", exact: true }).click();
await page.waitForTimeout(250);
check((await visibleRows()) === published, "clear puts every page back");

/* Search reaches the whole registry, by title and by URL slug. */
await bar.locator("input[type=search]").fill("onboarding");
await page.waitForTimeout(300);
const searched = await visibleRows();
check(searched > 0 && searched < 100, `directory search narrows the list (${searched} pages)`);

await bar.locator("input[type=search]").fill("client-onboarding");
await page.waitForTimeout(300);
check((await visibleRows()) > 0, "a pasted slug finds its page");

/* A search has to override a fold, or the page it matched stays hidden. */
await bar.locator("input[type=search]").fill("");
await page.waitForTimeout(200);
await bar.getByRole("button", { name: "Collapse all" }).click();
await page.waitForTimeout(200);
await bar.locator("input[type=search]").fill("healthcare");
await page.waitForTimeout(300);
check(
  await page.evaluate(() =>
    [...document.querySelectorAll("[data-category]")]
      .filter((section) => !section.hidden)
      .every((section) => !section.querySelector("[data-entries]").hidden),
  ),
  "a search re-opens whatever it matches",
);

/* --------------------------------------------------- The panel on a phone */
console.log("\n  Search panel at 390px");
{
  const narrow = await browser.newContext({
    viewport: { width: 390, height: 780 },
    hasTouch: true,
    isMobile: true,
  });
  const small = await narrow.newPage();
  await small.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await assertStyled(small, `${BASE}/ at 390px`);

  await small.locator("header").getByRole("button", { name: "Search" }).click();
  const panel = small.locator('[role="dialog"][aria-label="Search"]');
  await panel.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
  check(await panel.isVisible(), "the icon trigger opens the panel on a phone");

  /* The bottom row is the densest thing in the panel — an icon, a label, a
     count and an arrow on one line — so it is the row most likely to overflow
     at 390px. */
  const row = panel.getByRole("link", { name: /Explore all pages/i });
  const fits = await row.first().evaluate((el) => {
    const box = el.getBoundingClientRect();
    return box.right <= window.innerWidth + 1 && box.left >= -1 && box.height >= 44;
  });
  check(fits, "the bottom action row fits and keeps its touch height at 390px");

  check(
    (await row.first().innerText()).replace(/\s+/g, " ").includes("pages"),
    "the count is still shown at 390px",
  );

  await narrow.close();
}

/* --------------------------------------------------------------- Explorer */
console.log("\n  Capability explorer");
await page.goto(`${BASE}/capabilities/`, { waitUntil: "networkidle" });

const tabs = page.locator('[role="tab"]');
check((await tabs.count()) === 5, `the explorer offers every stage (${await tabs.count()} tabs)`);

const panelLinks = () => page.locator('[role="tabpanel"] a').count();
const firstStage = await panelLinks();
check(firstStage > 10, `the first stage renders without interaction (${firstStage} links)`);

await tabs.nth(4).click();
await page.waitForTimeout(250);
const lastStage = await panelLinks();
check(lastStage > 10, `choosing a stage re-renders the panel (${lastStage} links)`);
check(
  (await tabs.nth(4).getAttribute("aria-selected")) === "true",
  "the chosen tab reports itself selected",
);

// Arrow keys are the reason this is a tablist rather than a row of buttons.
await tabs.nth(4).focus();
await page.keyboard.press("ArrowRight");
await page.waitForTimeout(200);
check(
  (await tabs.nth(0).getAttribute("aria-selected")) === "true",
  "arrow keys move between stages and wrap",
);

await browser.close();

if (problems.length > 0) {
  console.error(`\nInteraction audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  process.exit(1);
}

console.log("\n✓ Interaction audit passed — search, the directory and the explorer all work.\n");
