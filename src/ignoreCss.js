// This tells Node to skip CSS imports during prerender
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Stub CSS/SCSS imports so Node doesn't throw
require.extensions['.css'] = () => {};
require.extensions['.scss'] = () => {};
require.extensions['.sass'] = () => {};
