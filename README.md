# Stratos One — pitch site

The public site for Stratos One: an AI-native product consulting studio where a
client picks the specialists their project needs, and one senior engineer is
accountable for everything that ships.

Static, trilingual (EN/ES/DE), no client framework, deployed to GitHub Pages.

## Stack

Deliberately the same shape as [marcocasanova.de](https://marcocasanova.de), so
the two sites share one mental model and one set of SEO conventions.

| | |
| --- | --- |
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS 4, via `@tailwindcss/vite` |
| i18n | Astro's built-in `i18n` routing, `en` + `es` + `de`, all prefixed |
| SEO | `@astrojs/sitemap`, hreflang alternates, canonical URLs, `ProfessionalService` JSON-LD |
| Deploy | GitHub Actions → GitHub Pages |

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321/stratos-one-web/
npm run build    # astro check && astro build
npm run preview
```

Note the base path in the dev URL — see below.

## Where the content lives

Almost nothing is hard-coded in a template. To change the site, edit data:

| File | Holds |
| --- | --- |
| `src/config.ts` | Identity, contact links, career start year, the proof stats in the hero |
| `src/data/agents.ts` | The six agents and the four delivery phases |
| `src/data/projects.ts` | The portfolio — every project, its sectors, and its outcome |
| `src/i18n/ui.ts` | Every string of page chrome, EN, ES, and DE |

Adding a locale is one entry in `languages` in `src/i18n/ui.ts`, one in
`localeCodes`, one `locales` entry in `astro.config.mjs`, and the translated
strings. `Record<Lang, string>` on the data files means `astro check` will list
every field still missing a translation — nothing silently falls back.

### The rule for `src/data/agents.ts`

Each agent carries a `proof` field. **An agent may only claim a capability that
has already shipped in a real product**, and `proof` names where. If you add an
agent and cannot fill `proof` with something a prospect could be shown, the
agent does not go on the site. That constraint is the whole credibility of the
page — it is what separates it from a slide deck.

### The rule for `src/data/projects.ts`

**A project appears in that array exactly once, and nowhere else on the site.**
The hero counter, the sector filter, and the grid all read from it, so a product
cannot end up described twice in two slightly different ways — which is how
"released v1.0.1" ends up next to "in development" on the same page.

The long-form case study is not duplicated here either: each entry carries a
`slug` and the card links out to `marcocasanova.de/<lang>/work/<slug>`. Rename a
case study there and you must rename the `slug` here, or the link 404s.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`npm run build` (type check included) and publishes `dist/` to Pages.

One-time setup on the GitHub repo:

1. **Settings → Pages → Source: GitHub Actions**
2. Push to `main`.

The site lands at `https://marcocasanova-dev.github.io/stratos-one-web/`.

### Moving to a custom domain

The site is configured as a GitHub Pages *project* site, so every URL carries a
`/stratos-one-web` base. Internal links all go through `localizePath()` and
`withBase()` in `src/i18n/utils.ts`, so switching is a config change rather than
a find-and-replace.

To move to, say, `https://stratos.one`:

1. `astro.config.mjs` — set `site` to the new origin and `base` to `'/'`
2. `src/config.ts` — set `SITE.url` and `SITE.base` to match
3. Add `public/CNAME` containing `stratos.one`
4. Point the domain's DNS at GitHub Pages, then set it under Settings → Pages

Change all three of 1–3 together. If `site`/`base` and `SITE.url`/`SITE.base`
disagree, canonical tags and internal links point at different places, and the
mismatch stays invisible until a crawler finds it.

## Design notes

- **Dark-first.** With no stored preference the dark theme wins regardless of
  the OS setting — the brand surface is a deep atmosphere and light is the
  alternate, not the default. The toggle persists an explicit choice.
- **Agent colour.** Each agent supplies only a `hue`; lightness and chroma are
  fixed in `global.css` so six different hues still read as one designed set.
- **Contrast.** The primary CTA uses a *deeper* accent in light mode than in
  dark. The pale teal that glows on a near-black page disappears against white.
- **Motion.** Everything decorative is behind `prefers-reduced-motion`, and the
  reduced branch unwinds hover transforms rather than merely zeroing durations.

## Related repositories

| Repo | What it is |
| --- | --- |
| `stratos-one` | The product monorepo — Kin Relay, RaumHub, and four scaffolds on four shared packages |
| `stratos-one-mobile` | The Flutter port of Kin Relay and RaumHub |
| `portafolio` | marcocasanova.de — the engineer's own site, where the case studies live |
