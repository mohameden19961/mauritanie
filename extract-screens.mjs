import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 5174;
const ROOT = path.resolve('dist');
const OUT = path.resolve('exports/screens');
fs.mkdirSync(OUT, { recursive: true });

const routes = [
  { path: '/', file: 'home' },
  { path: '/history', file: 'history' },
  { path: '/geography', file: 'geography' },
  { path: '/tourism', file: 'tourism' },
  { path: '/economy', file: 'economy' },
  { path: '/demographics', file: 'demographics' },
  { path: '/government', file: 'government' },
  { path: '/cuisine', file: 'cuisine' },
  { path: '/gallery', file: 'gallery' },
  { path: '/contact', file: 'contact' },
  { path: '/pages', file: 'pages' },
  { path: '/faune', file: 'faune' },
  { path: '/langues', file: 'langues' },
  { path: '/artisanat', file: 'artisanat' },
  { path: '/musique', file: 'musique' },
  { path: '/education', file: 'education' },
  { path: '/transport', file: 'transport' },
  { path: '/religion', file: 'religion' },
  { path: '/sports', file: 'sports' },
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0].split('#')[0];
  if (urlPath === '/') urlPath = '/index.html';
  const full = path.join(ROOT, urlPath);
  try {
    if (fs.existsSync(full) && fs.statSync(full).isFile()) {
      const ext = path.extname(full).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(full).pipe(res);
      return;
    }
  } catch (_) {}
  // SPA fallback : laisse React Router rendre la route côté client
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  fs.createReadStream(path.join(ROOT, 'index.html')).pipe(res);
});

function pngSize(buf) {
  // PNG signature (8 bytes) then IHDR: width at offset 16, height at offset 20 (big-endian uint32)
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20),
  };
}

(async () => {
  await new Promise((resolve) => server.listen(PORT, '127.0.0.1', resolve));
  console.log(`Serveur statique sur http://127.0.0.1:${PORT}`);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });

  for (const r of routes) {
    const url = `http://127.0.0.1:${PORT}${r.path}`;
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
      // laisser les animations GSAP / Three.js / chargement d'images se caler
      await new Promise((r) => setTimeout(r, 2000));

      const png = await page.screenshot({ fullPage: true, type: 'png' });
      const { width, height } = pngSize(png);

      fs.writeFileSync(path.join(OUT, `${r.file}.png`), png);

      const b64 = png.toString('base64');
      const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <image href="data:image/png;base64,${b64}" width="${width}" height="${height}"/>
</svg>`;
      fs.writeFileSync(path.join(OUT, `${r.file}.svg`), svg);

      console.log(`OK ${r.path.padEnd(12)} -> ${r.file}.svg  ${width}x${height}`);
    } catch (err) {
      console.error(`ECHEC ${r.path}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();
  console.log('\nTerminé. Fichiers dans exports/screens/');
})();
