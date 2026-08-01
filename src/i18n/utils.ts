import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

export { defaultLang, languages, localeCodes, type Lang } from './ui';

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

/** Builds a base-aware, locale-prefixed path: `('de', 'agents')` -> `/base/de/agents`. */
export function localizePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${BASE}/${lang}/${clean}` : `${BASE}/${lang}`;
}

/** Prefixes a non-localised asset or route with the deploy base. */
export function withBase(path: string): string {
  return `${BASE}/${path.replace(/^\/+/, '')}`;
}

/** Swaps the locale segment of the current path, preserving the rest of the route. */
export function switchLangPath(url: URL, target: Lang): string {
  const segments = stripBase(url.pathname).split('/').filter(Boolean);
  if (segments.length > 0 && isLang(segments[0]!)) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  return `${BASE}/${segments.join('/')}`;
}
