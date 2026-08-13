/**
 * Single source of truth for site-wide identity.
 * Change `url` + `base` here and in astro.config.mjs together.
 */

import { productionProjects } from '@/data/projects';

export const SITE = {
  /** Origin only — must match `site` in astro.config.mjs. */
  url: 'https://stratos-one.eu',
  /** Must match `base` in astro.config.mjs. '/' because this is a custom domain. */
  base: '/',
  name: 'Stratos One',
  tagline: {
    en: 'Senior software engineering for data-intensive products',
    es: 'Ingeniería de software senior para productos intensivos en datos',
    de: 'Senior Software Engineering für datenintensive Produkte',
  },
  /**
   * Open Graph image, relative to /public. PNG rather than SVG deliberately —
   * LinkedIn, Slack, and X all decline to render SVG previews.
   */
  ogImage: '/og.png',
  email: 'stratosone.apps@gmail.com',
  calendly: 'https://calendly.com/m-casanova-dev',
  github: 'https://github.com/marcocasanova-dev',
  linkedin: 'https://www.linkedin.com/in/marcocasanova-dev',
  /** The engineer's own site — every claim on this page is traceable there. */
  portfolio: 'https://marcocasanova.de',
} as const;

/**
 * Provider identification (§5 DDG) and the controller block a privacy notice
 * needs (GDPR Art. 13). Every field is owner-supplied and starts empty.
 *
 * ── Why empty rather than placeholder ───────────────────────────────────────
 * A published Impressum carrying an invented address is worse than no Impressum
 * at all: the first is a false statement to every visitor, the second is a
 * missing page. So nothing here is guessed. Until the required fields are
 * filled, /imprint and /privacy are not generated, the footer shows no legal
 * links, and the build prints the list of what is still missing.
 *
 * See CONTENT_AND_LEGAL_CONFIRMATION.md for what each field must contain.
 */
export const LEGAL = {
  /** Full legal name of the person or company operating the site. */
  legalName: '',
  /** e.g. 'Einzelunternehmen', 'GmbH'. Empty is allowed for a sole trader. */
  businessForm: '',
  /** Service address. A PO box does not satisfy §5 DDG. */
  street: '',
  postalCode: '',
  city: '',
  country: '',
  /** USt-IdNr. per §27a UStG. Only if one has actually been issued. */
  vatId: '',
  /** Responsible for content under §18 (2) MStV. Usually the same person. */
  responsibleForContent: '',
} as const;

/** Fields without which the legal pages must not be published. */
const LEGAL_REQUIRED = [
  'legalName',
  'street',
  'postalCode',
  'city',
  'country',
  'responsibleForContent',
] as const satisfies readonly (keyof typeof LEGAL)[];

export const legalMissingFields = LEGAL_REQUIRED.filter(
  (field) => LEGAL[field].trim() === ''
);

export const isLegalComplete = legalMissingFields.length === 0;

/*
 * Module scope, so it prints exactly once per build rather than once per page.
 * Deliberately loud: an incomplete Impressum is the one open item on this site
 * that carries a legal consequence, and a silent build hides it.
 */
if (!isLegalComplete) {
  console.warn(
    `\n⚠️  Legal pages not published — LEGAL is missing: ${legalMissingFields.join(', ')}` +
      `\n   /imprint and /privacy are omitted from the build and the sitemap.` +
      `\n   Fill these in src/config.ts. See CONTENT_AND_LEGAL_CONFIRMATION.md.\n`
  );
}

export const PRINCIPAL = {
  name: 'Marco Casanova',
  role: {
    en: 'Founder & Principal Engineer',
    es: 'Fundador e Ingeniero Principal',
    de: 'Gründer & Principal Engineer',
  },
  /* Endonym per locale — a German visitor should read "München", not "Munich". */
  city: { en: 'Munich', es: 'Múnich', de: 'München' },
  country: { en: 'Germany', es: 'Alemania', de: 'Deutschland' },
  timezone: 'Europe/Berlin · CET/CEST',
} as const;

/**
 * Proof, not adjectives. Every entry here is something that shipped and can be
 * checked. Do not add a row you cannot show a prospect.
 */
export const PROOF = [
  {
    /*
     * Derived from `inProduction`, not from `projects.length`. The grid holds
     * nine entries, but one is a scaffold in active development and one is a
     * personal project — counting those and then claiming "every one reached
     * real users" was a sentence the portfolio itself contradicted.
     */
    value: String(productionProjects.length),
    label: {
      en: 'Systems in production',
      es: 'Sistemas en producción',
      de: 'Systeme in Produktion',
    },
    detail: {
      en: 'Healthcare, industrial IoT, ticketing, retail, marketplaces — each one reached real users.',
      es: 'Salud, IoT industrial, ticketing, retail, marketplaces — cada uno llegó a usuarios reales.',
      de: 'Healthcare, Industrie-IoT, Ticketing, Retail, Marktplätze — jedes davon hat echte Nutzer erreicht.',
    },
  },
  {
    value: '11',
    label: {
      en: 'Interface languages',
      es: 'Idiomas de interfaz',
      de: 'Oberflächensprachen',
    },
    detail: {
      en: 'One care product ships in eleven locales, including Arabic, Turkish, and Ukrainian.',
      es: 'Un producto de cuidados se publica en once idiomas, incluidos árabe, turco y ucraniano.',
      de: 'Ein Pflegeprodukt läuft in elf Sprachen, darunter Arabisch, Türkisch und Ukrainisch.',
    },
  },
  {
    /*
     * Was "4 shared packages" — an internal engineering metric a buyer cannot
     * price. Same verifiable number, stated as the thing it bought.
     */
    value: '4',
    label: {
      en: 'Reused foundations',
      es: 'Cimientos reutilizados',
      de: 'Wiederverwendete Fundamente',
    },
    detail: {
      en: 'Auth, config, UI, and utilities written once — the second product shipped without rebuilding the first one’s base.',
      es: 'Auth, configuración, UI y utilidades escritos una vez — el segundo producto salió sin reconstruir la base del primero.',
      de: 'Auth, Config, UI und Utilities einmal geschrieben — das zweite Produkt ging live, ohne die Basis des ersten neu zu bauen.',
    },
  },
] as const;
