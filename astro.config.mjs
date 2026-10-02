import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://somosaura.com.co',
  integrations: [sitemap()],
  // Solo dev: AURA (localhost:4200) lee /ayuda/articulos.json. En Netlify lo da public/_headers.
  server: { headers: { 'Access-Control-Allow-Origin': '*' } },
});
