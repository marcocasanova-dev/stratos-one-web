import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

export {
  defaultLang,
  languages,
  localeCodes,
  hreflangCodes,
  type Lang,
} from './ui';

/**
 * Astro's configured `base`, normalised to either '' or '/segment' — no
 * trailing slash — so it can be concatenated without producing '//'.
 *
 * Every internal link goes through here. That is what makes the move from a
 * GitHub Pages project site ('/stratos-one-web') to a custom domain ('/') a
 * config change rather than a find-and-replace across every template.
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function isLang(value: string): value is Lang {
  return value in languages;
}

/** Removes the deploy base from a pathname, leaving a root-relative route. */
function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) {
    return pathname.slice(BASE.length) || '/';
  }
  return pathname;
}

/** Reads the locale out of a URL like `/stratos-one-web/de/agents`. */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = stripBase(url.pathname).split('/');
  return segment && isLang(segment) ? segment : defaultLang;
}

/**
 * Returns a `t()` bound to `lang`, falling back to the default locale so a
 * missing translation degrades to English instead of showing the key.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Builds a base-aware, locale-prefixed path: `('de', 'work')` -> `/base/de/work/`.
 *
 * The trailing slash is not cosmetic. The build emits directories, so the file
 * that actually exists is `/de/work/index.html` and the sitemap lists
 * `/de/work/`. Linking to `/de/work` made every internal navigation an extra
 * redirect hop, and the canonical tag disagreed with the sitemap on every page.
 * One convention, applied here, fixes both.
 */
export function localizePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${BASE}/${lang}/${clean}/` : `${BASE}/${lang}/`;
}

/** Prefixes a non-localised asset or route with the deploy base. */
export function withBase(path: string): string {
  return `${BASE}/${path.replace(/^\/+/, '')}`;
}

/**
 * Swaps the locale segment of the current path, preserving the rest of the
 * route. Trailing-slashed for the same reason as `localizePath` — these strings
 * are also the `hreflang` alternates, and an alternate that redirects is an
 * alternate a crawler has to resolve before it can trust it.
 */
export function switchLangPath(url: URL, target: Lang): string {
  const segments = stripBase(url.pathname).split('/').filter(Boolean);

  /*
   * A route with no locale segment has no translated counterpart to switch to
   * — 404.html is the real case, served by GitHub Pages for every unmatched
   * path. Prefixing it produced links to /en/404/, /es/404/ and /de/404/, none
   * of which exist, so the language picker on the error page led to three more
   * errors. Send those to the locale's home instead.
   */
  if (segments.length === 0 || !isLang(segments[0]!)) {
    return localizePath(target);
  }

  segments[0] = target;
  return `${BASE}/${segments.join('/')}/`;
}
