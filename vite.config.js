import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vitePrerenderPlugin from 'vite-prerender-plugin';
import DemoComponent from './src/DemoComponent';
// Recursively extract all route paths
// function extractPaths(routeArray, basePath = '') {
//   return routeArray.flatMap((route) => {
//     const fullPath = `${basePath}${route.path === '/' ? '' : route.path}`;
//     const paths = [fullPath || '/'];
//     if (route.children) {
//       paths.push(...extractPaths(route.children, fullPath));
//     }
//     return paths;
//   });
// }

// const allPaths = extractPaths(RouterArr);

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    vitePrerenderPlugin({
      staticDir: path.resolve(__dirname, 'dist'),
      renderTarget: '#root',
      prerenderScript: path.resolve(__dirname, 'src/main.jsx'),
routes: ['/', '/404', '/about-us'],
      additionalPrerenderRoutes: ['/404', '/about-us','/contact-us', '/aeroone-gurgaon'],
      previewMiddlewareFallback: '/index.html'
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js'
  },
  assetsInclude: [
    '**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.otf',
    '**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg'
  ],

  server: {
    proxy: {
      '/uploads': {
        target: 'https://mvnbackend.gtftechnologies.com',
        changeOrigin: true,
        secure: false
      }
    }
  },
    alias: {
      root: path.resolve(__dirname, 'src'), // 👈 add this
    },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'gsap']
        }
      }
    }
  },
    preview: {
    port: 4000
  }
});
