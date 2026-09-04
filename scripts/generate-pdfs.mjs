// Generates the downloadable PDFs into /public/pdf by rendering the
// production build with a headless browser and printing each page.
// Usage: npm run build && npm run pdf

import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";

const PORT = 3512;
const BASE_URL = `http://localhost:${PORT}`;
const OUT_DIR = path.join(process.cwd(), "public", "pdf");

const PAGES = [
  { route: "/", file: "tailwind-v4-cheatsheet-extended.pdf" },
  { route: "/?v3=0", file: "tailwind-v4-cheatsheet-extended-no-changes.pdf" },
  { route: "/condensed", file: "tailwind-v4-cheatsheet-condensed.pdf" },
];

function waitForServer(url, timeoutMs = 30_000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        // server not ready yet
      }
      if (Date.now() - start > timeoutMs) {
        return reject(new Error(`Server at ${url} did not start in time`));
      }
      setTimeout(check, 300);
    };
    check();
  });
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const server = spawn(
    "npx",
    ["next", "start", "-p", String(PORT)],
    { stdio: "inherit", shell: true },
  );

  const stopServer = () => {
    if (process.platform === "win32") {
      spawn("taskkill", ["/pid", String(server.pid), "/f", "/t"]);
    } else {
      server.kill("SIGTERM");
    }
  };

  try {
    await waitForServer(BASE_URL);

    const browser = await puppeteer.launch();
    try {
      for (const { route, file } of PAGES) {
        const page = await browser.newPage();
        await page.goto(`${BASE_URL}${route}`, { waitUntil: "networkidle0" });
        await page.emulateMediaType("print");
        const outPath = path.join(OUT_DIR, file);
        await page.pdf({
          path: outPath,
          format: "A4",
          printBackground: true,
          preferCSSPageSize: false,
          margin: { top: "14mm", bottom: "14mm", left: "12mm", right: "12mm" },
        });
        console.log(`Wrote ${path.relative(process.cwd(), outPath)}`);
        await page.close();
      }
    } finally {
      await browser.close();
    }
  } finally {
    stopServer();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
