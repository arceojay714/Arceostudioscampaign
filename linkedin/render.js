// Renders linkedin/ad.html to PNG at each LinkedIn single-image size.
//   node linkedin/render.js
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const FORMATS = [
  { hash: 'wide',   w: 1200, h: 627,  file: 'arceo-linkedin-1200x627.png' },
  { hash: 'square', w: 1200, h: 1200, file: 'arceo-linkedin-1200x1200.png' },
];

(async () => {
  const outDir = path.join(__dirname, 'out');
  fs.mkdirSync(outDir, { recursive: true });
  const url = 'file://' + path.join(__dirname, 'ad.html');

  const browser = await chromium.launch();
  for (const f of FORMATS) {
    const page = await browser.newPage({ viewport: { width: f.w, height: f.h } });
    await page.goto(`${url}#${f.hash}`);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(outDir, f.file), clip: { x: 0, y: 0, width: f.w, height: f.h } });
    await page.close();
    console.log('wrote', path.join('linkedin/out', f.file));
  }
  await browser.close();
})();
