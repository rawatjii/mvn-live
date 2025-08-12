// server.js
import express from 'express';
import path from 'path';
import fs from 'fs/promises';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

/* Serve built assets from dist */
app.use(express.static(path.resolve(__dirname, 'dist'), {
  index: false, // let us manually serve index.html
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-store');
    }
  }
}));

/* Default meta fallback */
const defaultMeta = (fullUrl) => ({
  head_data: `
    <title>Default Title</title>
    <meta name="description" content="Default Description">
    <meta property="og:title" content="Default OG Title">
    <meta property="og:description" content="Default OG Description">
    <meta property="og:image" content="${new URL('/og-default.jpg', fullUrl)}">
    <meta property="og:url" content="${fullUrl}">
    <link rel="canonical" href="${fullUrl}">
  `
});

/* Simple in-memory cache */
const cache = new Map();
const TTL_MS = 60_000; // 1 minute cache

async function resolveMeta(req) {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const cached = cache.get(fullUrl);
  if (cached && cached.expires > Date.now()) {
    return cached.meta;
  }

  let meta = defaultMeta(fullUrl);

  try {
    // Clean up path from request URL for dynamic API call
    const pathSlug = req.originalUrl.replace(/^\/+|\/+$/g, '') || 'home';

    // You can also include query params if needed
    // const queryString = req.originalUrl.includes('?') ? '?' + req.originalUrl.split('?')[1] : '';
    // const apiUrl = `https://mvnbackend.gtftechnologies.com/api/project/${pathSlug}${queryString}`;

    const apiUrl = `https://mvnbackend.gtftechnologies.com/api/project/${pathSlug}`;

    const { data } = await axios.get(apiUrl, { timeout: 5000 });

    if (data.data?.head_data) {
      meta.head_data = data.data.head_data;
    }
  } catch (err) {
    console.error('Meta fetch error:', err?.message || err);
  }

  cache.set(fullUrl, { meta, expires: Date.now() + TTL_MS });
  return meta;
}

function injectMeta(html, meta) {
  return html.replace('{{head_data}}', meta.head_data || '');
}

/* Catch-all route to handle SSR */
app.use(async (req, res) => {
  try {
    // Read base HTML
    const indexPath = path.resolve(__dirname, 'dist', 'index.html');
    const html = await fs.readFile(indexPath, 'utf8');

    // Wait for meta BEFORE sending response
    const meta = await resolveMeta(req);
    const out = injectMeta(html, meta);

    res.set('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(out);
  } catch (err) {
    console.error('Error serving request:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
