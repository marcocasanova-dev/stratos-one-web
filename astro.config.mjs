// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/*
 * DEPLOY TARGET
 * ─────────────
 * Defaults to a GitHub Pages *project* site:
 *   https://marcocasanova-dev.github.io/stratos-one-web
 *
 * To move to a custom domain (e.g. https://stratos.one) change three things
 * together, or canonical URLs and internal links will disagree:
 *   1. SITE_ORIGIN and BASE below (BASE becomes '/')
 *   2. `SITE.url` and `SITE.base` in src/config.ts
 *   3. add public/CNAME containing the bare domain
 */
const SITE_ORIGIN = 'https://marcocasanova-dev.github.io';
const BASE = '/stratos-one-web';

export default defineConfig({
  site: SITE_ORIGIN,
  base: BASE,
  trailingSlash: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de'],
    routing: {
      // Every locale is explicit in the URL so none is a second-class
      // citizen for crawlers.
      prefixDefaultLocale: true,
      // Astro's built-in root redirect emits a 2-second meta refresh and cannot
      // read the visitor's language. src/pages/index.astro replaces it.
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-ES', de: 'de-DE' },
      },
      /*
       * Drop 404 and the bare root. The root is the locale gateway: it is
       * `noindex` and exists only to bounce visitors to a locale, so
       * submitting it would earn a "Submitted URL marked noindex" in Search
       * Console and hand /en a duplicate alternate entry.
       */
      filter: (page) =>
        !page.includes('/404') &&
        page.replace(/\/$/, '') !== `${SITE_ORIGIN}${BASE}`,
    }),
  ],

  build: {
    // Emit `agents/index.html` rather than `agents.html` for clean URLs.
    format: 'directory',
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
