import type { Lang } from '@i18n/utils';

/**
 * The portfolio.
 *
 * ── The one rule ────────────────────────────────────────────────────────────
 * A project appears in this array exactly once, and nowhere else on the site.
 * The hero counters, the sector filter, and the grid all read from here, so a
 * product cannot be described twice in two slightly different ways — which is
 * how "released v1.0.1" ends up next to "in development" on the same page.
 *
 * Copy is kept in sync with the long-form case studies on marcocasanova.de;
 * `slug` is what links the two. If you rename a case study there, rename it
 * here, or the "read the case study" link 404s.
 */

/** Sector keys. Deliberately few — a filter with fifteen chips filters nothing. */
export const SECTORS = [
  'platform',
  'mobile',
  'healthcare',
  'marketplace',
  'data',
  'commerce',
  'events',
  'social',
  'gaming',
] as const;

export type Sector = (typeof SECTORS)[number];

export const sectorLabels: Record<Sector, Record<Lang, string>> = {
  platform: { en: 'Platform', es: 'Plataforma', de: 'Plattform' },
  mobile: { en: 'Mobile', es: 'Móvil', de: 'Mobile' },
  healthcare: { en: 'Healthcare', es: 'Salud', de: 'Healthcare' },
  marketplace: { en: 'Marketplace', es: 'Marketplace', de: 'Marktplatz' },
  data: { en: 'Data & IoT', es: 'Datos e IoT', de: 'Daten & IoT' },
  commerce: { en: 'Commerce', es: 'Comercio', de: 'Commerce' },
  events: { en: 'Events', es: 'Eventos', de: 'Events' },
  social: { en: 'Social', es: 'Social', de: 'Social' },
  gaming: { en: 'Gaming', es: 'Gaming', de: 'Gaming' },
};

export interface Project {
  /** Matches the case-study slug on marcocasanova.de/<lang>/work/<slug>. */
  slug: string;
  title: string;
  /** Client or product name shown as an eyebrow. Omitted when it repeats the title. */
  client?: string;
  year: number;
  /** Lower sorts first. Mirrors the ordering on the portfolio site. */
  order: number;
  /** Base hue in OKLCH. Shares L/C with the agent cards so both grids read as one system. */
  hue: number;
  sectors: Sector[];
  role: Record<Lang, string>;
  /** Delivery state — the tag in the card's top-right corner. */
  status: Record<Lang, string>;
  /** One line: what it is. */
  summary: Record<Lang, string>;
  /** One line a non-engineer can calibrate: what changed because it shipped. */
  outcome: Record<Lang, string>;
  /** Max six — beyond that the chips stop being scannable and become texture. */
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: 'stratos-one',
    title: 'Stratos One',
    year: 2025,
    order: 0.5,
    hue: 193,
    sectors: ['platform', 'mobile'],
    role: {
      en: 'Founder & Principal Engineer',
      es: 'Fundador e Ingeniero Principal',
      de: 'Gründer & Principal Engineer',
    },
    status: {
      en: 'Active development',
      es: 'En desarrollo activo',
      de: 'Aktive Entwicklung',
    },
    summary: {
      en: 'A product studio built as one monorepo — shared auth, config, UI, and utilities under six apps, so a new product starts with a working login instead of an empty folder.',
      es: 'Un estudio de producto construido como un solo monorepo — auth, configuración, UI y utilidades compartidas bajo seis apps, para que un producto nuevo empiece con un login funcionando en vez de una carpeta vacía.',
      de: 'Ein Produktstudio als ein einziges Monorepo — gemeinsame Auth, Konfiguration, UI und Utilities unter sechs Apps, damit ein neues Produkt mit einem funktionierenden Login startet statt mit einem leeren Ordner.',
    },
    outcome: {
      en: 'The second product shipped without rewriting the first product’s foundation.',
      es: 'El segundo producto se publicó sin reescribir los cimientos del primero.',
      de: 'Das zweite Produkt ging live, ohne das Fundament des ersten neu zu schreiben.',
    },
    stack: ['Turborepo', 'pnpm', 'Expo', 'Next.js', 'TypeScript', 'Supabase'],
  },
  {
    slug: 'mobile-commerce-platform',
    title: 'Mobile Commerce Platform',
    year: 2026,
    order: 1,
    hue: 28,
    sectors: ['commerce', 'mobile'],
    role: {
      en: 'Senior Software Engineer',
      es: 'Ingeniero de Software Senior',
      de: 'Senior Software Engineer',
    },
    status: { en: 'Production', es: 'Producción', de: 'Produktion' },
    summary: {
      en: 'Cart, checkout, CMS, and loyalty flows for a production retail app serving Germany and Austria across the mobile and API layers.',
      es: 'Flujos de carrito, checkout, CMS y loyalty para una app retail en producción que opera en Alemania y Austria, en la capa móvil y de API.',
      de: 'Warenkorb-, Checkout-, CMS- und Loyalty-Flows für eine Retail-App in Produktion, die Deutschland und Österreich bedient — über Mobile- und API-Schicht hinweg.',
    },
    outcome: {
      en: 'Market rules stayed in shared APIs rather than being duplicated per country in the app, which made releases safer to trace.',
      es: 'Las reglas de cada mercado se quedaron en APIs compartidas en vez de duplicarse por país en la app, lo que hizo las releases más fáciles de rastrear.',
      de: 'Marktregeln blieben in gemeinsamen APIs, statt pro Land in der App dupliziert zu werden — Releases wurden dadurch nachvollziehbarer.',
    },
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'TanStack Query', 'CI/CD'],
  },
  {
    slug: 'nightowl',
    title: 'NIGHTOWL',
    client: 'NIGHTOWL',
    year: 2025,
    order: 1.5,
    hue: 285,
    sectors: ['events', 'mobile'],
    role: {
      en: 'Full-Stack Engineer',
      es: 'Ingeniero Full-Stack',
      de: 'Full-Stack-Engineer',
    },
    status: { en: 'Production', es: 'Producción', de: 'Produktion' },
    summary: {
      en: 'A ticketing and event-management platform across Rails, React, and Flutter — organizer dashboards, ticket shops, and mobile entry on one backend model.',
      es: 'Una plataforma de ticketing y gestión de eventos con Rails, React y Flutter — dashboards de organizador, ticket shops y acceso móvil sobre un mismo modelo de backend.',
      de: 'Eine Ticketing- und Event-Management-Plattform mit Rails, React und Flutter — Organizer-Dashboards, Ticketshops und mobiler Einlass auf einem Backend-Modell.',
    },
    outcome: {
      en: 'Pricing phases, discounts, and scanner validation followed one set of rules instead of three client-side copies.',
      es: 'Fases de precio, descuentos y validación del escáner siguieron un único conjunto de reglas en vez de tres copias en los clientes.',
      de: 'Preisphasen, Rabatte und Scanner-Validierung folgten einem Regelwerk statt drei Kopien in den Clients.',
    },
    stack: ['Ruby on Rails', 'React', 'Flutter', 'PostgreSQL'],
  },
  {
    slug: 'kin-relay',
    title: 'Kin Relay',
    client: 'Stratos One',
    year: 2025,
    order: 1.6,
    hue: 268,
    sectors: ['healthcare', 'mobile'],
    role: {
      en: 'Founder & Principal Engineer',
      es: 'Fundador e Ingeniero Principal',
      de: 'Gründer & Principal Engineer',
    },
    // German keeps "Release" rather than "Veröffentlicht": the longer word wraps
    // the meta row on a 3-up grid, and "Release" is the term used in the trade.
    status: { en: 'Released v1.0.1', es: 'Publicado v1.0.1', de: 'Release v1.0.1' },
    summary: {
      en: 'Care coordination where families and professional carers log the same person’s day into one typed record — 6 categories, 65 subtypes, and a severity scale that survives an audit.',
      es: 'Coordinación de cuidados donde familias y cuidadores profesionales registran el día de la misma persona en un único historial tipado — 6 categorías, 65 subtipos y una escala de gravedad que aguanta una auditoría.',
      de: 'Pflegekoordination, in der Angehörige und professionelle Pflegekräfte den Tag derselben Person in eine typisierte Dokumentation eintragen — 6 Kategorien, 65 Subtypen und eine Schweregradskala, die ein Audit übersteht.',
    },
    outcome: {
      en: 'A handover between a family member and an agency carer no longer loses information — every event carries a category, a severity, and an author.',
      es: 'Un relevo entre un familiar y un cuidador de agencia ya no pierde información: cada evento lleva categoría, gravedad y autor.',
      de: 'Eine Übergabe zwischen Angehörigen und ambulantem Dienst verliert keine Information mehr — jedes Ereignis trägt Kategorie, Schweregrad und Verfasser.',
    },
    stack: ['Next.js', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL', 'Zod'],
  },
  {
    slug: 'raumhub',
    title: 'RaumHub',
    client: 'Stratos One',
    year: 2025,
    order: 1.7,
    hue: 235,
    sectors: ['marketplace', 'mobile', 'commerce'],
    role: {
      en: 'Founder & Principal Engineer',
      es: 'Fundador e Ingeniero Principal',
      de: 'Gründer & Principal Engineer',
    },
    status: { en: 'Released v1.2.1', es: 'Publicado v1.2.1', de: 'Release v1.2.1' },
    summary: {
      en: 'A marketplace for rentable storage space in Germany — map discovery, a listing wizard, and Stripe subscriptions settled in Supabase Edge Functions rather than on the phone.',
      es: 'Un marketplace de espacios de almacenaje en Alemania — descubrimiento en mapa, asistente de publicación y suscripciones de Stripe liquidadas en Edge Functions de Supabase, no en el móvil.',
      de: 'Ein Marktplatz für vermietbaren Lagerraum in Deutschland — Kartensuche, ein Einstell-Assistent und Stripe-Abos, die in Supabase Edge Functions abgewickelt werden statt auf dem Telefon.',
    },
    outcome: {
      en: 'The mobile client never holds a payment secret, and the Android permission set was cut to only what the product can justify to a reviewer.',
      es: 'El cliente móvil nunca guarda un secreto de pago, y el conjunto de permisos de Android se recortó a lo que el producto puede justificar ante un revisor.',
      de: 'Der Mobile-Client hält kein Zahlungs-Secret, und der Android-Berechtigungssatz wurde auf das reduziert, was sich einer Prüfstelle begründen lässt.',
    },
    stack: ['Expo', 'React Native', 'Supabase', 'Deno', 'Stripe', 'PostgreSQL'],
  },
  {
    slug: 'iot-data-platform',
    title: 'IoT Telemetry Platform',
    client: 'Kewazo',
    year: 2024,
    order: 2,
    hue: 152,
    sectors: ['data', 'platform'],
    role: {
      en: 'Lead Full-Stack Engineer',
      es: 'Ingeniero Full-Stack Líder',
      de: 'Leitender Full-Stack-Engineer',
    },
    status: { en: 'Production', es: 'Producción', de: 'Produktion' },
    summary: {
      en: 'Replaced 30-second polling with live telemetry operators could trust on a construction site — across the ingest, storage, and dashboard layers.',
      es: 'Reemplazó el polling de 30 segundos por telemetría en vivo en la que los operarios podían confiar en una obra — desde la ingesta hasta el dashboard.',
      de: 'Ersetzte 30-Sekunden-Polling durch Live-Telemetrie, der Bediener auf einer Baustelle vertrauen konnten — über Ingest, Storage und Dashboard hinweg.',
    },
    outcome: {
      en: 'Operators acted on the dashboard instead of walking to the machine, and could see when a reading was stale instead of trusting it silently.',
      es: 'Los operarios actuaban desde el dashboard en vez de caminar hasta la máquina, y veían cuándo un dato estaba obsoleto en lugar de confiar a ciegas.',
      de: 'Bediener handelten am Dashboard statt zur Maschine zu laufen und sahen, wann ein Messwert veraltet war, statt ihm stillschweigend zu vertrauen.',
    },
    stack: ['Svelte', 'Node.js', 'WebSockets', 'TimescaleDB', 'D3.js', 'Python'],
  },
  {
    slug: 'clinical-data-analyzer',
    title: 'Clinical Data Analysis Platform',
    year: 2024,
    order: 3,
    hue: 205,
    sectors: ['healthcare', 'data'],
    role: {
      en: 'Backend & Data Engineer',
      es: 'Ingeniero de Backend y Datos',
      de: 'Backend- & Data-Engineer',
    },
    status: { en: 'Production', es: 'Producción', de: 'Produktion' },
    summary: {
      en: 'Turned spreadsheet-based clinical analysis into a reproducible web workflow that produced audit-ready reports in minutes instead of a day.',
      es: 'Transformó el análisis clínico en hojas de cálculo en un flujo web reproducible que generaba informes auditables en minutos en lugar de un día.',
      de: 'Verwandelte tabellenbasierte klinische Analysen in einen reproduzierbaren Web-Workflow, der auditfähige Berichte in Minuten statt in einem Tag erzeugte.',
    },
    outcome: {
      en: 'Every analysis stored its dataset version, parameters, and pipeline version — so a clinician could regenerate a result and defend it later.',
      es: 'Cada análisis guardaba la versión del dataset, los parámetros y la versión del pipeline — para que el equipo clínico pudiera regenerar un resultado y defenderlo después.',
      de: 'Jede Analyse speicherte Datensatz-, Parameter- und Pipeline-Version — sodass ein Ergebnis später erneut erzeugt und verteidigt werden konnte.',
    },
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Celery', 'Docker'],
  },
  {
    slug: 'viamor-dating',
    title: 'Viamor',
    client: 'Viamor',
    year: 2023,
    order: 4,
    hue: 340,
    sectors: ['social', 'mobile'],
    role: {
      en: 'Full-Stack Engineer',
      es: 'Ingeniero Full-Stack',
      de: 'Full-Stack-Engineer',
    },
    status: { en: 'Production', es: 'Producción', de: 'Produktion' },
    summary: {
      en: 'Modelled complex relationship graphs and consent states for a production dating product built around polyamorous relationships.',
      es: 'Modeló grafos complejos de relaciones y estados de consentimiento para un producto de citas en producción centrado en relaciones poliamorosas.',
      de: 'Modellierte komplexe Beziehungsgraphen und Consent-Zustände für ein Dating-Produkt in Produktion rund um polyamore Beziehungen.',
    },
    outcome: {
      en: 'Partnered users, group consent, and matching rules fit one structure instead of a pile of special cases.',
      es: 'Usuarios con pareja, consentimiento grupal y reglas de matching cupieron en una sola estructura en vez de un montón de casos especiales.',
      de: 'Verpartnerte Nutzende, Gruppen-Consent und Matching-Regeln passten in eine Struktur statt in einen Stapel Sonderfälle.',
    },
    stack: ['Flutter', 'Ruby on Rails', 'Vue.js', 'Firebase', 'PostgreSQL'],
  },
  {
    slug: 'bavarian-defence',
    title: 'Bavarian Defence',
    year: 2023,
    order: 5,
    hue: 88,
    sectors: ['gaming'],
    role: {
      en: 'Gameplay & Systems Programmer',
      es: 'Programador de Gameplay y Sistemas',
      de: 'Gameplay- & Systems-Programmierer',
    },
    status: {
      en: 'Personal project',
      es: 'Proyecto personal',
      de: 'Eigenprojekt',
    },
    summary: {
      en: 'A tower-defence strategy game in Unity — and an exercise in updating hundreds of entities every frame without dropping below 60fps on mid-range hardware.',
      es: 'Un juego de estrategia tower defence en Unity — y un ejercicio para actualizar cientos de entidades en cada frame sin bajar de 60fps en hardware de gama media.',
      de: 'Ein Tower-Defence-Strategiespiel in Unity — und eine Übung darin, hunderte Entitäten pro Frame zu aktualisieren, ohne auf Mittelklasse-Hardware unter 60fps zu fallen.',
    },
    outcome: {
      en: 'Late-wave simulation stayed smooth once entity pooling and a spatial hash removed the GC churn from the hottest loops.',
      es: 'La simulación en oleadas tardías se mantuvo fluida en cuanto el pooling de entidades y un hash espacial quitaron el churn del GC de los bucles más calientes.',
      de: 'Die Simulation in späten Wellen blieb flüssig, sobald Entity-Pooling und ein Spatial Hash den GC-Churn aus den heißesten Schleifen nahmen.',
    },
    stack: ['Unity', 'C#'],
  },
];

/** Portfolio order: the sequence a prospect should read them in. */
export const orderedProjects = [...projects].sort((a, b) => a.order - b.order);

/** Only the sectors actually used, in `SECTORS` order — no empty filter chips. */
export const usedSectors: Sector[] = SECTORS.filter((sector) =>
  projects.some((project) => project.sectors.includes(sector))
);
