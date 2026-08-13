import type { Lang } from '@i18n/utils';

/**
 * What a client can actually buy.
 *
 * ── Why this file exists ────────────────────────────────────────────────────
 * The page used to sell "pick an agent", which is a mechanism, not a purchase.
 * A buyer with a blocked release cannot tell what they receive, when, or what
 * it costs to find out they were wrong about us. These three shapes answer that
 * in order of commitment, and the first one is deliberately small enough to say
 * yes to without a procurement conversation.
 *
 * `price` is modelled but null everywhere on purpose: the components already
 * render a price when one is present, so publishing rates later is a data edit
 * rather than a template change. Do not fill it in with a guess — a number on
 * this page is a quote.
 */

export interface Offer {
  id: string;
  /** Base hue in OKLCH, shared with the agent/project cards so the set reads as one system. */
  hue: number;
  title: Record<Lang, string>;
  duration: Record<Lang, string>;
  body: Record<Lang, string>;
  /** Only the entry offer itemises. The other two are scoped per engagement. */
  deliverables?: Record<Lang, string[]>;
  /** Owner-confirmed rate. `null` renders nothing at all. */
  price: Record<Lang, string> | null;
}

export const offers: Offer[] = [
  {
    id: 'diagnostic',
    hue: 193,
    title: {
      en: 'Technical Delivery Diagnostic',
      es: 'Diagnóstico Técnico de Entrega',
      de: 'Technisches Delivery-Diagnostic',
    },
    duration: {
      en: '5–10 business days',
      es: '5–10 días laborables',
      de: '5–10 Arbeitstage',
    },
    body: {
      en: 'One system, one critical question, one prioritised plan. You receive a system map, evidence-backed risks, quick wins and a sequenced delivery plan you own.',
      es: 'Un sistema, una pregunta crítica, un plan priorizado. Recibes un mapa del sistema, los riesgos con la evidencia que los respalda, mejoras inmediatas y un plan de entrega secuenciado que es tuyo.',
      de: 'Ein System, eine kritische Frage, ein priorisierter Plan. Du erhältst eine Systemkarte, belegte Risiken, schnelle Verbesserungen und einen sequenzierten Lieferplan, der dir gehört.',
    },
    deliverables: {
      en: [
        'Kickoff, and one primary technical question agreed in writing',
        'Review of the agreed repositories, documents, logs and architecture',
        'A current-state system map',
        'Prioritised risks and quick wins',
        'A 30/60/90-day delivery plan',
        'Readout session and written handover',
      ],
      es: [
        'Kickoff y una pregunta técnica principal acordada por escrito',
        'Revisión de los repositorios, documentos, logs y arquitectura acordados',
        'Un mapa del sistema en su estado actual',
        'Riesgos priorizados y mejoras inmediatas',
        'Un plan de entrega a 30/60/90 días',
        'Sesión de presentación y entrega por escrito',
      ],
      de: [
        'Kickoff und eine schriftlich vereinbarte technische Hauptfrage',
        'Review der vereinbarten Repositories, Dokumente, Logs und Architektur',
        'Eine Systemkarte des Ist-Zustands',
        'Priorisierte Risiken und schnelle Verbesserungen',
        'Ein 30/60/90-Tage-Lieferplan',
        'Abschlusssitzung und schriftliche Übergabe',
      ],
    },
    price: null,
  },
  {
    id: 'sprint',
    hue: 28,
    title: {
      en: 'Production Build Sprint',
      es: 'Sprint de Desarrollo a Producción',
      de: 'Production Build Sprint',
    },
    duration: { en: '4–8 weeks', es: '4–8 semanas', de: '4–8 Wochen' },
    body: {
      en: 'One clearly defined outcome delivered to production — an API or data flow, a mobile feature, a migration, or a reliability improvement.',
      es: 'Un resultado claramente definido entregado en producción: una API o un flujo de datos, una función móvil, una migración o una mejora de fiabilidad.',
      de: 'Ein klar definiertes Ergebnis in Produktion geliefert — eine API oder ein Datenfluss, ein Mobile-Feature, eine Migration oder eine Verbesserung der Zuverlässigkeit.',
    },
    price: null,
  },
  {
    id: 'embedded',
    hue: 268,
    title: {
      en: 'Embedded Senior Engineering',
      es: 'Ingeniería Senior Integrada',
      de: 'Embedded Senior Engineering',
    },
    duration: {
      en: 'Defined period',
      es: 'Periodo definido',
      de: 'Definierter Zeitraum',
    },
    body: {
      en: 'Senior hands-on capacity inside your product team, with direct ownership of design, implementation, testing and release.',
      es: 'Capacidad senior trabajando dentro de tu equipo de producto, con responsabilidad directa sobre diseño, implementación, pruebas y release.',
      de: 'Senior-Kapazität, die direkt in deinem Produktteam mitarbeitet — mit Verantwortung für Design, Implementierung, Tests und Release.',
    },
    price: null,
  },
];

export const [entryOffer, ...followOnOffers] = offers;
