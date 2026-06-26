// Local screenshot harness (no MCP needed).
// node scripts/shot.mjs <url> <out.png> [w] [h] [fullPage] [waitMs] [selector] [motion]
//   selector: CSS selector to scrollIntoView before shooting ("-" to skip)
//   motion:   "reduce" (default, deterministic resting states + native scroll)
//             or "motion" (play animations / video)
import { chromium } from "playwright";

const [
  ,
  ,
  url = "http://localhost:3000",
  out = ".screens/shot.png",
  width = "1440",
  height = "900",
  fullPage = "false",
  waitMs = "2500",
  selector = "-",
  motion = "reduce",
] = process.argv;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: Number(width), height: Number(height) },
  deviceScaleFactor: 2,
  reducedMotion: motion === "reduce" ? "reduce" : "no-preference",
});

try {
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
} catch {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
}

if (selector && selector !== "-") {
  await page.evaluate((sel) => {
    document.querySelector(sel)?.scrollIntoView({ block: "start" });
  }, selector);
}

await page.waitForTimeout(Number(waitMs));
await page.screenshot({ path: out, fullPage: fullPage === "true" });
await browser.close();
console.log("saved", out);
