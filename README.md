# Stratos One — pitch site

The public site for Stratos One: a senior software engineering practice led and
delivered by Marco Casanova, selling design, stabilisation and delivery of
data-intensive web, mobile and backend systems.

Static, trilingual (EN/ES/DE), no client framework, deployed to GitHub Pages at
[stratos-one.eu](https://stratos-one.eu).

## Stack

Deliberately the same shape as [marcocasanova.de](https://marcocasanova.de), so
the two sites share one mental model and one set of SEO conventions.

| | |
| --- | --- |
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS 4, via `@tailwindcss/vite` |
| i18n | Astro's built-in `i18n` routing, `en` + `es` + `de`, all prefixed |
| SEO | `@astrojs/sitemap`, hreflang alternates, canonical URLs, `ProfessionalService` + `OfferCatalog` JSON-LD |
| Deploy | GitHub Actions → GitHub Pages, custom domain |

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321/en/
npm run build    # astro check && astro build
npm run preview
```

## Routes

| Route | Holds |
| --- | --- |
| `/<lang>/` | The pitch: hero, situations, three featured cases, offers, process, capability tracks, accountability, FAQ, CTA |
| `/<lang>/work/` | The full portfolio, filterable by sector |
| `/<lang>/capabilities/` | The six capability tracks in detail, plus the delivery phases |
| `/<lang>/contact/` | How to start, and what to put in the first message |
| `/<lang>/imprint/`, `/<lang>/privacy/` | Generated **only** when `LEGAL` is complete — see below |

`/<lang>/agents/` redirects to `/<lang>/capabilities/`; it is excluded from the
sitemap so only the new URL is submitted.

## Where the content lives

Almost nothing is hard-coded in a template. To change the site, edit data:

| File | Holds |
| --- | --- |
| `src/config.ts` | Identity, contact links, the proof stats, and the `LEGAL` block |
| `src/data/projects.ts` | The portfolio — every project, its sectors, and its outcome |
| `src/data/offers.ts` | The three engagements a client can buy |
| `src/data/situations.ts` | The four "when this is useful" triggers |
| `src/data/faq.ts` | The six questions answered before a first call |
| `src/data/agents.ts` | The six capability tracks and the four delivery phases |
| `src/data/legal.ts` | Imprint labels and the privacy notice copy |
| `src/i18n/ui.ts` | Every string of page chrome, plus per-page titles and meta descriptions |

Adding a locale is one entry in `languages` in `src/i18n/ui.ts`, one in
`localeCodes` and `hreflangCodes`, one `locales` entry in `astro.config.mjs`, and
the translated strings. `Record<Lang, string>` on the data files means
`astro check` will list every field still missing a translation — nothing
silently falls back.

### The rule for `src/data/agents.ts`

Each track carries a `proof` field. **A track may only claim a capability that
has already shipped in a real product**, and `proof` names where. If you add a
track and cannot fill `proof` with something a prospect could be shown, it does
not go on the site. That constraint is the whole credibility of the page — it is
what separates it from a slide deck.

The names (Atlas, Vault, Forge, Sentinel, Relay, Beacon) are labels for tracks of
work, not people and not autonomous software. Copy must never imply the client
is hiring six specialists; they are hiring one accountable senior engineer whose
work is organised into six tracks.

### The rules for `src/data/projects.ts`

**A project appears in that array exactly once, and nowhere else on the site.**
The proof counter, the sector filter, and both grids read from it, so a product
cannot end up described twice in two slightly different ways.

Three booleans decide where an entry may appear, and none of them defaults:

- `caseStudy` — a long-form case study really exists at
  `marcocasanova.de/<lang>/work/<slug>`. `false` suppresses the "read the case
  study" link. Three cards used to render that CTA onto a 404. **Re-check this
  with a request, not from memory, whenever a slug changes.**
- `inProduction` — reached real users. Only these are counted by the
  "systems in production" stat, so a scaffold in active development or a
  personal project cannot inflate a number a prospect might check.
- `featured` — appears on the landing page. Everything else lives on `/work`.

### The rule for legal pages

`LEGAL` in `src/config.ts` starts empty and **nothing about the business is ever
guessed into it**. While a required field is blank:

- `/imprint` and `/privacy` are not generated,
- the footer renders no legal links,
- the build prints exactly which fields are missing.

A published Impressum carrying an invented address is a false statement to every
visitor; a missing page is only a missing page. Fill the fields, and both pages
and their footer links appear with no other change. See
`CONTENT_AND_LEGAL_CONFIRMATION.md`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`npm run build` (type check included) and publishes `dist/` to Pages.

The site is a GitHub Pages **user site on a custom domain**, so `base` is `'/'`.
These four must always agree, or canonical URLs and internal links point at
different places and the mismatch stays invisible until a crawler finds it:

1. `SITE_ORIGIN` and `BASE` in `astro.config.mjs`
2. `SITE.url` and `SITE.base` in `src/config.ts`
3. `public/CNAME` — the bare domain, no scheme
4. Settings → Pages → Custom domain on the repo

Internal links all go through `localizePath()` and `withBase()` in
`src/i18n/utils.ts`, so changing the origin stays a config change rather than a
find-and-replace.

### URL conventions

Every internal URL carries a **trailing slash**, because `build.format` is
`'directory'` and that is what the emitted file and the sitemap entry actually
are. `localizePath()` and `switchLangPath()` enforce it, and `SEO.astro` builds
the canonical the same way. Without it, every canonical tag pointed at a URL
that redirects to the real one.

`hreflang` codes are **language-only** (`en`, `de`, `es`, plus `x-default`).
Region subtags belong there only once there is genuinely a different page per
region; Open Graph keeps `en_US`-style codes because the protocol requires them.

## Design notes

- **Dark-first.** With no stored preference the dark theme wins regardless of
  the OS setting — the brand surface is a deep atmosphere and light is the
  alternate, not the default. The toggle persists an explicit choice.
- **Track colour.** Each track supplies only a `hue`; lightness and chroma are
  fixed in `global.css` so six different hues still read as one designed set.
- **Contrast.** The primary CTA uses a *deeper* accent in light mode than in
  dark. Light-mode `--text-muted` is `ink-550` rather than `ink-500`: the ramp's
  own step measured 4.38:1 on sunken surfaces, and muted text sits on sunken in
  every outcome box and eyebrow on the site.
- **Motion is an enhancement.** `.reveal` hides content only under `html.js`,
  which an inline head script stamps. If scripting is off or a bundle fails, the
  page reads normally instead of rendering at `opacity: 0`.
- **Touch targets.** Icon controls are 44px on touch and 36px from `md` up. The
  language control moves into the mobile sheet rather than shrinking to fit.

## Related repositories

| Repo | What it is |
| --- | --- |
| `stratos-one` | The product monorepo — Kin Relay, RaumHub, and four scaffolds on four shared packages |
| `stratos-one-mobile` | The Flutter port of Kin Relay and RaumHub |
| `portafolio` | marcocasanova.de — the engineer's own site, where the case studies live |
