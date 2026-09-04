import { existsSync } from "node:fs";
import { chromium } from "playwright-core";

/**
 * Page anatomy.
 *
 * Prints, band by band, what a page is actually made of: how tall it is, what
 * ground it sits on, the heading scale that opens it, how much prose it
 * carries, how many list items, and whether a picture is doing any work. Two
 * sites can match on tokens and geometry and still read as different products,
 * because what a reader perceives is the sequence of devices and the density
 * inside each one. This is the measurement of that.
 *
 * Run: node scripts/_anatomy.mjs <base> <path> [path...]
 */

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].find(existsSync);

const [base, ...paths] = process.argv.slice(2);

const browser = await chromium.launch({ executablePath: CHROME });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

for (const path of paths) {
  await page.goto(`${base}${path}`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(500);
  /* Release every reveal so nothing measures as empty because it has not
     animated in yet. */
  await page.evaluate(() => {
    for (const el of document.querySelectorAll("[data-reveal], [data-reveal-lines]")) {
      el.setAttribute("data-revealed", "true");
      el.style.opacity = "1";
      el.style.transform = "none";
    }
  });
  await page.waitForTimeout(200);

  const anatomy = await page.evaluate(() => {
    const main = document.querySelector("main") ?? document.body;
    const bands = [...main.children].filter((el) => el.getBoundingClientRect().height > 40);

    const ground = (bg) => {
      const m = bg.match(/\d+/g);
      if (!m) return "?";
      const [r, g, b] = m.map(Number);
      if (r < 60 && g < 70) return "dark";
      if (r > 248 && g > 248) return "white";
      if (r > 243) return "paper";
      return "warm";
    };

    return {
      total: Math.round(document.documentElement.scrollHeight),
      bands: bands.map((band) => {
        const box = band.getBoundingClientRect();
        const heading = band.querySelector("h1, h2");
        const text = (band.innerText ?? "").replace(/\s+/g, " ").trim();
        const paragraphs = [...band.querySelectorAll("p")].filter(
          (p) => (p.innerText ?? "").trim().length > 60,
        ).length;
        const listItems = band.querySelectorAll("li, dt, details").length;
        const images = [...band.querySelectorAll("img")].filter(
          (img) => img.getBoundingClientRect().height > 80,
        ).length;
        const links = band.querySelectorAll("a").length;
        return {
          h: Math.round(box.height),
          ground: ground(getComputedStyle(band).backgroundColor),
          scale: heading ? Math.round(parseFloat(getComputedStyle(heading).fontSize)) : 0,
          head: heading ? heading.innerText.replace(/\s+/g, " ").trim().slice(0, 42) : "—",
          words: text.split(" ").filter(Boolean).length,
          paragraphs,
          listItems,
          images,
          links,
          /* Words per 100px of height: the density number. A band under ~8 is
             mostly air; a band over ~60 is a wall of text. */
          density: Math.round((text.split(" ").filter(Boolean).length / box.height) * 100),
        };
      }),
    };
  });

  console.log(`\n${path}  —  ${anatomy.total}px, ${anatomy.bands.length} bands`);
  console.log("   h    ground  scale  words  para  list  img  link  dens  heading");
  for (const b of anatomy.bands) {
    console.log(
      `  ${String(b.h).padStart(5)} ${b.ground.padEnd(7)} ${String(b.scale).padStart(4)} ` +
        `${String(b.words).padStart(6)} ${String(b.paragraphs).padStart(5)} ` +
        `${String(b.listItems).padStart(5)} ${String(b.images).padStart(4)} ` +
        `${String(b.links).padStart(5)} ${String(b.density).padStart(5)}  ${b.head}`,
    );
  }
}

await browser.close();
