// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/*
 * DEPLOY TARGET
 * ─────────────
 * Custom domain on GitHub Pages: https://stratos-one.eu
 *
 * These four must always agree, or canonical URLs and internal links point at
 * different places and the mismatch stays invisible until a crawler finds it:
 *   1. SITE_ORIGIN and BASE below
 *   2. `SITE.url` and `SITE.base` in src/config.ts
 *   3. public/CNAME — the bare domain, no scheme
 *   4. Settings → Pages → Custom domain on the repo
 *
 * public/CNAME rather than the GitHub UI alone: this deploys the `dist/`
 * artifact via Actions, so the file has to be in public/ to survive into it.
 */
const SITE_ORIGIN = 'https://stratos-one.eu';
const BASE = '/';

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

  /*
   * /<lang>/agents (then /capabilities) described a service catalogue the site
   * no longer sells. Both old paths keep resolving so shared links do not 404;
   * they land on the solutions section. Static output means these are
   * meta-refresh stubs rather than 301s, and the sitemap filter below excludes
   * them so only live pages are submitted.
   */
  redirects: {
    '/en/agents': '/en/',
    '/es/agents': '/es/',
    '/de/agents': '/de/',
    '/en/capabilities': '/en/',
    '/es/capabilities': '/es/',
    '/de/capabilities': '/de/',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        /*
         * Language-only, matching the <link rel="alternate"> tags the pages
         * emit. These were en-US/es-ES/de-DE, which tells a crawler there is a
         * US English page and a Spain Spanish page; there is one English page
         * and one Spanish page, and no regional content anywhere on the site.
         */
        locales: { en: 'en', es: 'es', de: 'de' },
      },
      /*
       * Drop 404 and the bare root. The root is the locale gateway: it is
       * `noindex` and exists only to bounce visitors to a locale, so
       * submitting it would earn a "Submitted URL marked noindex" in Search
       * Console and hand /en a duplicate alternate entry.
       *
       * Both sides are stripped of trailing slashes before comparing. With a
       * project base ('/stratos-one-web') only the page needed it; at the root
       * of a custom domain BASE is itself '/', so comparing unnormalised would
       * silently stop matching and let the noindex root back into the sitemap.
       */
      filter: (page) =>
        !page.includes('/404') &&
        // Redirect stubs for the old /agents URLs — the destination is in the
        // sitemap, and submitting both would offer a crawler two URLs for one
        // page and let it pick the deprecated one.
        !page.includes('/agents') &&
        !page.includes('/capabilities') &&
        page.replace(/\/+$/, '') !==
          `${SITE_ORIGIN}${BASE}`.replace(/\/+$/, ''),
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
