import { existsSync, mkdirSync } from "node:fs";
import { chromium } from "playwright-core";

const [url, out, width, ...offsets] = process.argv.slice(2);
const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].find(existsSync);
if (!existsSync(out)) mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ executablePath: CHROME });
const page = await browser.newPage({ viewport: { width: Number(width), height: 900 } });
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(900);
for (const y of offsets) {
  await page.evaluate((top) => window.scrollTo(0, top), Number(y));
  await page.waitForTimeout(600);
  const file = `${out}/y${y}.png`;
  await page.screenshot({ path: file });
  console.log(file);
}
await browser.close();
