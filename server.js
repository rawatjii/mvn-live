// server.js
import express from 'express';
import path from 'path';
import fs from 'fs/promises';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app  = express();
const PORT = process.env.PORT || 3000;

/** Serve Vite build assets */
app.use(express.static(path.resolve(__dirname, 'dist'), {
  index: false, // we’ll send index.html manually (after injection)
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    // don’t cache HTML files
    if (filePath.endsWith('.html')) res.setHeader('Cache-Control', 'no-store');
  }
}));

/** Defaults for any route */
const defaultMeta = (fullUrl) => ({
  title: 'Default Title',
  description: 'Default Description',
  og_title: 'Default OG Title',
  og_description: 'Default OG Description',
  og_image: new URL('/og-default.jpg', fullUrl).toString(), // put this file in /dist
  og_url: fullUrl,
  canonical: fullUrl,
});

/** Optional: tiny in-memory cache */
const cache = new Map();
const TTL_MS = 60_000;

async function resolveMeta(req) {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const p = req.path;
  const cached = cache.get(fullUrl);
  if (cached && cached.expires > Date.now()) return cached.meta;

  let meta = defaultMeta(fullUrl);

  try {
    // EXAMPLES — adapt to your routes & API
    // /blog/:slug
    let m;
    if ((m = p.match(/^\/blog\/([^/]+)$/))) {
      const slug = m[1];
      const { data } = await axios.get(`https://mvnbackend.gtftechnologies.com/api/project/${slug}`);
      meta = data.head_data;
    }
    // /project/:slug
    else if ((m = p.match(/^\/project\/([^/]+)$/))) {
      const slug = m[1];
      const { data } = await axios.get(`https://mvnbackend.gtftechnologies.com/api/project/${slug}`);
      meta = data.head_data;
    
    }
    // add more branches as needed
  } catch (e) {
    console.error('Meta fetch error:', e?.message || e);
    // keep defaults on error
  }

  // ensure absolute og:image
  try { meta.og_image = new URL(meta.og_image, fullUrl).toString(); } catch {}

  cache.set(fullUrl, { meta, expires: Date.now() + TTL_MS });
  return meta;
}

function injectMeta(html, meta) {
  let out = html;
  for (const [k, v] of Object.entries(meta)) {
    out = out.replaceAll(`{{${k}}}`, String(v ?? ''));
  }
  return out;
}

/** Fallback handler: serve dist/index.html with injected meta for every route */
app.use(async (req, res) => {
  const indexPath = path.resolve(__dirname, 'dist', 'index.html');
  const html = await fs.readFile(indexPath, 'utf8').catch(() => null);
  if (!html) return res.status(500).send('dist/index.html missing – did you run `npm run build`?');

  const meta = await resolveMeta(req);
  const out  = injectMeta(html, meta);

  res.set('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(out);
});

app.listen(PORT, () => console.log(`Server running on :${PORT}`));
