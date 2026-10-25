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
  /**
   * A long-form case study actually exists at marcocasanova.de/<lang>/work/<slug>.
   *
   * Required, not optional, and never defaulted to `true`: three cards used to
   * render "read the case study" straight onto a 404 because the flag did not
   * exist and nobody re-checked. `false` suppresses the link entirely — a
   * missing link costs a click, a broken one costs the sale.
   * Verified against the live portfolio on 13 Aug 2026.
   */
  caseStudy: boolean;
  /**
   * Reached real users in production. Gates the "systems in production" proof
   * counter, so a scaffold in active development or a personal project cannot
   * quietly inflate a number a prospect might check.
   */
  inProduction: boolean;
  /** Shown on the landing page. Everything else lives on /work. */
  featured?: boolean;
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
      en: 'Our own set of products, all built on one shared foundation — so a brand-new product starts with a working login and shared building blocks already in place, instead of starting from an empty folder.',
      es: 'Nuestro propio conjunto de productos, todos construidos sobre una misma base compartida — para que un producto nuevo empiece ya con un login funcionando y piezas compartidas listas, en vez de partir de una carpeta vacía.',
      de: 'Unsere eigene Produktreihe, alle auf einer gemeinsamen Basis aufgebaut — damit ein neues Produkt mit funktionierendem Login und fertigen Bausteinen startet, statt mit einem leeren Ordner.',
    },
    outcome: {
      en: 'The second product went live without having to rebuild what the first one already had.',
      es: 'El segundo producto salió sin tener que reconstruir lo que ya tenía el primero.',
      de: 'Das zweite Produkt ging live, ohne das neu bauen zu müssen, was das erste schon hatte.',
    },
    stack: ['Turborepo', 'pnpm', 'Expo', 'Next.js', 'TypeScript', 'Supabase'],
    caseStudy: false,
    inProduction: false,
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
      en: 'Shopping cart, checkout, store content and loyalty rewards for a live retail app used by shoppers in Germany and Austria.',
      es: 'Carrito de compra, checkout, contenido de tienda y puntos de fidelidad para una app de retail en marcha usada por clientes en Alemania y Austria.',
      de: 'Warenkorb, Checkout, Store-Inhalte und Treuepunkte für eine laufende Retail-App, die Kund:innen in Deutschland und Österreich nutzen.',
    },
    outcome: {
      en: 'Pricing rules for each country live in one shared place instead of being copied into the app separately for each one — so updates are easier to make and less likely to go wrong.',
      es: 'Las reglas de precio de cada país viven en un único lugar compartido en vez de copiarse por separado en la app para cada uno — así las actualizaciones son más fáciles de hacer y hay menos riesgo de error.',
      de: 'Die Preisregeln für jedes Land liegen an einem gemeinsamen Ort, statt für jedes Land separat in die App kopiert zu werden — Updates sind dadurch einfacher und weniger fehleranfällig.',
    },
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'TanStack Query', 'CI/CD'],
    caseStudy: true,
    inProduction: true,
    featured: true,
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
      en: 'A ticket-selling and event-management platform for concerts and events — an organiser dashboard, an online ticket shop, and an app door staff use to scan tickets, all connected.',
      es: 'Una plataforma de venta de entradas y gestión de eventos para conciertos y eventos — un panel para organizadores, una tienda de entradas online, y una app para que el personal de acceso escanee entradas, todo conectado.',
      de: 'Eine Ticketing- und Event-Management-Plattform für Konzerte und Events — ein Dashboard für Veranstalter, ein Online-Ticketshop, und eine App, mit der das Einlasspersonal Tickets scannt, alles miteinander verbunden.',
    },
    outcome: {
      en: 'Ticket prices, discounts and entry scanning all follow the same rules everywhere, instead of each app having its own copy that could disagree with the others.',
      es: 'Los precios de las entradas, los descuentos y el escaneo de acceso siguen las mismas reglas en todas partes, en vez de que cada app tenga su propia copia que podría no coincidir con las demás.',
      de: 'Ticketpreise, Rabatte und Einlass-Scanning folgen überall denselben Regeln, statt dass jede App ihre eigene Kopie hat, die von den anderen abweichen könnte.',
    },
    stack: ['Ruby on Rails', 'React', 'Flutter', 'PostgreSQL'],
    caseStudy: true,
    inProduction: true,
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
      en: 'An app where family members and professional carers write down what happened during someone\'s day, in a shared, organised log — instead of scattered notes that do not match up.',
      es: 'Una app donde familiares y cuidadores profesionales anotan lo que pasó durante el día de una persona, en un registro compartido y organizado — en vez de notas sueltas que no coinciden entre sí.',
      de: 'Eine App, in der Angehörige und professionelle Pflegekräfte festhalten, was im Tagesverlauf einer Person passiert ist — in einem gemeinsamen, geordneten Protokoll statt in verstreuten Notizen, die nicht zusammenpassen.',
    },
    outcome: {
      en: 'When care is handed from a family member to a professional carer, nothing gets lost — every entry clearly shows what happened, how serious it was, and who wrote it.',
      es: 'Cuando el cuidado pasa de un familiar a un cuidador profesional, no se pierde nada — cada entrada muestra claramente qué pasó, cuán grave fue, y quién lo escribió.',
      de: 'Bei der Übergabe von Angehörigen an eine professionelle Pflegekraft geht nichts verloren — jeder Eintrag zeigt klar, was passiert ist, wie ernst es war, und wer es geschrieben hat.',
    },
    stack: ['Next.js', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL', 'Zod'],
    caseStudy: false,
    inProduction: true,
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
      en: 'An online marketplace for renting storage space in Germany — find space on a map, list your own space with a simple step-by-step form, and pay for it monthly through the app.',
      es: 'Un marketplace online para alquilar espacio de almacenaje en Alemania — encuentra espacio en un mapa, publica el tuyo con un formulario sencillo paso a paso, y págalo cada mes desde la app.',
      de: 'Ein Online-Marktplatz zum Mieten von Lagerraum in Deutschland — Raum auf einer Karte finden, den eigenen mit einem einfachen Schritt-für-Schritt-Formular einstellen, und monatlich über die App bezahlen.',
    },
    outcome: {
      en: 'Payment details are never stored on the phone itself, and the Android app only asks for the permissions it genuinely needs — nothing extra that a reviewer would have to question.',
      es: 'Los datos de pago nunca se guardan en el propio teléfono, y la app de Android solo pide los permisos que realmente necesita — nada de más que un revisor tuviera que cuestionar.',
      de: 'Zahlungsdaten werden nie auf dem Telefon selbst gespeichert, und die Android-App fragt nur die Berechtigungen an, die sie wirklich braucht — nichts Zusätzliches, das ein Prüfer hinterfragen müsste.',
    },
    stack: ['Expo', 'React Native', 'Supabase', 'Deno', 'Stripe', 'PostgreSQL'],
    caseStudy: false,
    inProduction: true,
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
      en: 'Construction-site machines used to only report their status once every 30 seconds. We replaced that with a live dashboard operators could actually trust, updating in real time.',
      es: 'Las máquinas de una obra solo informaban de su estado cada 30 segundos. Lo sustituimos por un dashboard en vivo en el que los operarios podían confiar de verdad, actualizado en tiempo real.',
      de: 'Maschinen auf einer Baustelle meldeten ihren Status bisher nur alle 30 Sekunden. Wir ersetzten das durch ein Live-Dashboard, dem Bediener wirklich vertrauen konnten, mit Echtzeit-Updates.',
    },
    outcome: {
      en: 'Operators could act from the dashboard instead of walking over to check the machine in person, and could immediately tell when a reading was out of date instead of trusting it blindly.',
      es: 'Los operarios podían actuar desde el dashboard en vez de caminar hasta la máquina para comprobarlo en persona, y sabían al instante cuándo un dato estaba desactualizado en lugar de confiar a ciegas.',
      de: 'Bediener konnten vom Dashboard aus handeln, statt zur Maschine zu laufen, um persönlich nachzusehen — und sahen sofort, wenn ein Messwert veraltet war, statt ihm blind zu vertrauen.',
    },
    stack: ['Svelte', 'Node.js', 'WebSockets', 'TimescaleDB', 'D3.js', 'Python'],
    caseStudy: true,
    inProduction: true,
    featured: true,
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
      en: 'Clinical researchers used to analyse their data by hand in spreadsheets, taking a full day per report. We turned it into a website that produces the same reports, ready for review, in minutes.',
      es: 'Los investigadores clínicos analizaban sus datos a mano en hojas de cálculo, con un día completo por informe. Lo convertimos en una web que genera los mismos informes, listos para revisión, en minutos.',
      de: 'Klinische Forschende analysierten ihre Daten bisher von Hand in Tabellen — ein ganzer Tag pro Bericht. Wir machten daraus eine Website, die dieselben, prüfbereiten Berichte in Minuten erzeugt.',
    },
    outcome: {
      en: 'Every report keeps a record of exactly what data and settings produced it, so a researcher can recreate the same result later and explain exactly how they got it.',
      es: 'Cada informe guarda un registro de qué datos y ajustes lo produjeron exactamente, para que un investigador pueda recrear el mismo resultado después y explicar exactamente cómo lo obtuvo.',
      de: 'Jeder Bericht speichert genau, welche Daten und Einstellungen ihn erzeugt haben — so kann eine Forscherin das Ergebnis später erneut erzeugen und genau erklären, wie sie dazu kam.',
    },
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Celery', 'Docker'],
    caseStudy: true,
    inProduction: true,
    featured: true,
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
      en: 'A dating app built for people in polyamorous relationships — where someone can be connected to more than one partner at once, and everyone involved needs to agree before a match happens.',
      es: 'Una app de citas pensada para personas en relaciones poliamorosas — donde alguien puede estar conectado a más de una pareja a la vez, y todas las personas implicadas tienen que estar de acuerdo antes de que se produzca un match.',
      de: 'Eine Dating-App für Menschen in polyamoren Beziehungen — bei der jemand mit mehr als einer Person gleichzeitig verbunden sein kann, und alle Beteiligten zustimmen müssen, bevor ein Match zustande kommt.',
    },
    outcome: {
      en: 'Couples, group agreements and matching all work through one consistent set of rules, instead of a growing list of special-case fixes bolted on over time.',
      es: 'Las parejas, los acuerdos de grupo y el matching funcionan con un único conjunto de reglas consistente, en vez de una lista creciente de arreglos para casos especiales añadidos con el tiempo.',
      de: 'Paare, Gruppenabsprachen und Matching laufen über ein einziges, konsistentes Regelwerk, statt über eine wachsende Liste nachträglich angeflickter Sonderfälle.',
    },
    stack: ['Flutter', 'Ruby on Rails', 'Vue.js', 'Firebase', 'PostgreSQL'],
    caseStudy: true,
    inProduction: true,
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
      en: 'A personal strategy game project — hundreds of characters on screen at once, all moving smoothly without the game slowing down, even on an older computer.',
      es: 'Un proyecto personal de juego de estrategia — cientos de personajes en pantalla a la vez, todos moviéndose con fluidez sin que el juego se ralentice, incluso en un ordenador antiguo.',
      de: 'Ein persönliches Strategiespiel-Projekt — hunderte Figuren gleichzeitig auf dem Bildschirm, die sich flüssig bewegen, ohne dass das Spiel ruckelt, selbst auf älteren Rechnern.',
    },
    outcome: {
      en: 'Even in the busiest, most crowded moments of the game, everything kept running smoothly instead of slowing down.',
      es: 'Incluso en los momentos más intensos y llenos de personajes del juego, todo siguió funcionando con fluidez sin ralentizarse.',
      de: 'Selbst in den vollsten, actionreichsten Momenten des Spiels lief alles flüssig weiter, statt zu ruckeln.',
    },
    stack: ['Unity', 'C#'],
    caseStudy: true,
    inProduction: false,
  },
];

/** Portfolio order: the sequence a prospect should read them in. */
export const orderedProjects = [...projects].sort((a, b) => a.order - b.order);

/**
 * The three cards the landing page leads with — B2B client work in the sectors
 * Stratos One sells into. Own products and the personal project are not hidden;
 * they live on /work, where a prospect who wants the full list can read them
 * without the three strongest cases being diluted nine ways on first contact.
 */
export const featuredProjects = orderedProjects.filter((p) => p.featured);

/** Only what reached real users. The proof counter reads this, not `projects`. */
export const productionProjects = projects.filter((p) => p.inProduction);

/** Only the sectors actually used, in `SECTORS` order — no empty filter chips. */
export const usedSectors: Sector[] = SECTORS.filter((sector) =>
  projects.some((project) => project.sectors.includes(sector))
);
