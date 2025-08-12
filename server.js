// // server.js
// import express from 'express';
// import path from 'path';
// import fs from 'fs/promises';
// import axios from 'axios';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 4000;

// /* Serve built assets from dist */
// app.use(express.static(path.resolve(__dirname, 'dist'), {
//   index: false, // let us manually serve index.html
//   maxAge: '1y',
//   setHeaders: (res, filePath) => {
//     if (filePath.endsWith('.html')) {
//       res.setHeader('Cache-Control', 'no-store');
//     }
//   }
// }));

// /* Default meta fallback */
// const defaultMeta = (fullUrl) => ({
//   head_data: `
//     <title>Default Title</title>
//     <meta name="description" content="Default Description">
//     <meta property="og:title" content="Default OG Title">
//     <meta property="og:description" content="Default OG Description">
//     <meta property="og:image" content="${new URL('/og-default.jpg', fullUrl)}">
//     <meta property="og:url" content="${fullUrl}">
//     <link rel="canonical" href="${fullUrl}">
//   `
// });

// /* Simple in-memory cache */
// const cache = new Map();
// const TTL_MS = 60_000; // 1 minute cache

// async function resolveMeta(req) {
//   const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
//   const cached = cache.get(fullUrl);
//   if (cached && cached.expires > Date.now()) {
//     return cached.meta;
//   }

//   let meta = defaultMeta(fullUrl);

//   try {
//     // Clean up path from request URL for dynamic API call
//     const pathSlug = req.originalUrl.replace(/^\/+|\/+$/g, '') || 'home';

//     // You can also include query params if needed
//     // const queryString = req.originalUrl.includes('?') ? '?' + req.originalUrl.split('?')[1] : '';
//     // const apiUrl = `https://mvnbackend.gtftechnologies.com/api/project/${pathSlug}${queryString}`;

//     const apiUrl = `https://mvnbackend.gtftechnologies.com/api/project/${pathSlug}`;

//     const { data } = await axios.get(apiUrl, { timeout: 5000 });

//     if (data.data?.head_data) {
//       meta.head_data = data.data.head_data;
//     }
//   } catch (err) {
//     console.error('Meta fetch error:', err?.message || err);
//   }

//   cache.set(fullUrl, { meta, expires: Date.now() + TTL_MS });
//   return meta;
// }

// function injectMeta(html, meta) {
//   return html.replace('{{head_data}}', meta.head_data || '');
// }

// /* Catch-all route to handle SSR */
// app.use(async (req, res) => {
//   try {
//     // Read base HTML
//     const indexPath = path.resolve(__dirname, 'dist', 'index.html');
//     const html = await fs.readFile(indexPath, 'utf8');

//     // Wait for meta BEFORE sending response
//     const meta = await resolveMeta(req);
//     const out = injectMeta(html, meta);

//     res.set('Content-Type', 'text/html; charset=utf-8');
//     res.status(200).send(out);
//   } catch (err) {
//     console.error('Error serving request:', err);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


import express from 'express';
import path from 'path';
import fs from 'fs/promises';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files (except index.html which we'll handle)
app.use(express.static(path.join(__dirname, 'dist'), { index: false }));

// Sanitize JSON to prevent XSS
function safeSerialize(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

app.get('*', async (req, res) => {
  try {
    // Read the HTML template
    const templatePath = path.join(__dirname, 'dist', 'index.html');
    let html = await fs.readFile(templatePath, 'utf8');

    // Fetch data from API
    let serverData = {};
    try {
      const { data } = await axios.get(
        'https://mvnbackend.gtftechnologies.com/api/project/mvn-athens-gurgaon-phase-2'
      );
      serverData = data;
    } catch (err) {
      console.error('API fetch error:', err?.message || err);
    }

    // Replace placeholder with safe JSON
    html = html.replace('__SERVER_DATA__', safeSerialize(serverData));

    // Send the final HTML
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
