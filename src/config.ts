/**
 * Single source of truth for site-wide identity.
 * Change `url` + `base` here and in astro.config.mjs together.
 */

import { projects } from '@/data/projects';

export const SITE = {
  /** Origin only — must match `site` in astro.config.mjs. */
  url: 'https://stratos-one.eu',
  /** Must match `base` in astro.config.mjs. '/' because this is a custom domain. */
  base: '/',
  name: 'Stratos One',
  tagline: {
    en: 'Choose your agent. Ship your business.',
    es: 'Elige tu agente. Lanza tu negocio.',
    de: 'Wähle deinen Agenten. Bring dein Business live.',
  },
  /**
   * Open Graph image, relative to /public. PNG rather than SVG deliberately —
   * LinkedIn, Slack, and X all decline to render SVG previews.
   */
  ogImage: '/og.png',
  email: 'm.casanova.dev@gmail.com',
  calendly: 'https://calendly.com/m-casanova-dev',
  github: 'https://github.com/marcocasanova-dev',
  linkedin: 'https://www.linkedin.com/in/marcocasanova-dev',
  /** The engineer's own site — every claim on this page is traceable there. */
  portfolio: 'https://marcocasanova.de',
} as const;

/**
 * ⚠️  CHECK BEFORE PITCHING
 * Set to 2011 so the site renders "15 years", as briefed.
 *
 * Note the conflict: marcocasanova.de and the CV both derive from 2015 and
 * therefore say "11+ years". A prospect who reads both will see two different
 * numbers. Pick one start year and make the portfolio, the CV, and this file
 * agree — the specific number matters far less than the three not disagreeing.
 */
export const CAREER_START_YEAR = 2011;

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
    /* Derived, not typed by hand: the hero can never disagree with the grid. */
    value: String(projects.length),
    label: {
      en: 'Systems delivered',
      es: 'Sistemas entregados',
      de: 'Systeme ausgeliefert',
    },
    detail: {
      en: 'Healthcare, IoT, ticketing, retail, marketplaces — every one of them reached real users.',
      es: 'Salud, IoT, ticketing, retail, marketplaces — todos llegaron a usuarios reales.',
      de: 'Healthcare, IoT, Ticketing, Retail, Marktplätze — jedes davon hat echte Nutzer erreicht.',
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
    value: '4',
    label: {
      en: 'Shared packages',
      es: 'Paquetes compartidos',
      de: 'Gemeinsame Pakete',
    },
    detail: {
      en: 'Auth, config, UI, and utilities — written once, reused under every product.',
      es: 'Auth, configuración, UI y utilidades — escritos una vez, reutilizados en cada producto.',
      de: 'Auth, Config, UI und Utilities — einmal geschrieben, unter jedem Produkt wiederverwendet.',
    },
  },
] as const;
