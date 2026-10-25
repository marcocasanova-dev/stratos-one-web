import type { Lang } from '@i18n/utils';

/**
 * What a client can actually buy.
 *
 * ── Why this file exists ────────────────────────────────────────────────────
 * The page used to sell "pick an agent", which is a mechanism, not a purchase.
 * A buyer with a blocked launch cannot tell what they receive, when, or what
 * it costs to find out they were wrong about us. These three shapes answer that
 * in order of commitment, and the first one is deliberately small enough to say
 * yes to without a procurement conversation.
 *
 * `price` is modelled but null everywhere on purpose: the components already
 * render a price when one is present, so publishing rates later is a data edit
 * rather than a template change. Do not fill it in with a guess — a number on
 * this page is a quote.
 *
 * ── Reading level ────────────────────────────────────────────────────────────
 * Written for a founder or business owner deciding whether to reach out, not
 * for an engineer scoping a contract. Names and deliverables describe the
 * result in the reader's own words ("a written plan you can act on") rather
 * than the engineering artefact behind it ("architecture decision records").
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
      en: 'Quick Check-Up',
      es: 'Revisión Rápida',
      de: 'Kurzer Check',
    },
    duration: {
      en: '5–10 working days',
      es: '5–10 días laborables',
      de: '5–10 Arbeitstage',
    },
    body: {
      en: 'You have one big question about your software. We look under the hood, find out what is really going on, and hand you a clear, written plan you can act on — with or without us.',
      es: 'Tienes una gran pregunta sobre tu software. Miramos por dentro, averiguamos qué está pasando realmente, y te entregamos un plan claro y por escrito que puedes poner en marcha — con nosotros o sin nosotros.',
      de: 'Du hast eine große Frage zu deiner Software. Wir schauen genau hin, finden heraus, was wirklich los ist, und geben dir einen klaren, schriftlichen Plan an die Hand, den du umsetzen kannst — mit uns oder ohne uns.',
    },
    deliverables: {
      en: [
        'A first call to agree on the one question that matters most to you',
        'We look through your app, website or systems to understand what is really happening',
        'A simple map of how everything fits together today',
        'A plain list of what is risky, and quick fixes we spot along the way',
        'A step-by-step plan for the next 30, 60 and 90 days',
        'A wrap-up call to walk through everything, plus the full plan in writing',
      ],
      es: [
        'Una primera llamada para acordar la pregunta que más te importa',
        'Revisamos tu app, tu web o tus sistemas para entender qué está pasando realmente',
        'Un mapa sencillo de cómo encaja todo hoy en día',
        'Una lista clara de qué es arriesgado, y mejoras rápidas que encontremos por el camino',
        'Un plan paso a paso para los próximos 30, 60 y 90 días',
        'Una llamada final para repasarlo todo, más el plan completo por escrito',
      ],
      de: [
        'Ein erstes Gespräch, um die eine Frage zu klären, die dir am wichtigsten ist',
        'Wir schauen uns deine App, Website oder Systeme an, um zu verstehen, was wirklich passiert',
        'Eine einfache Übersicht, wie heute alles zusammenhängt',
        'Eine klare Liste, was riskant ist, plus schnelle Verbesserungen, die uns auffallen',
        'Ein Schritt-für-Schritt-Plan für die nächsten 30, 60 und 90 Tage',
        'Ein Abschlussgespräch, in dem wir alles durchgehen, plus den ganzen Plan schriftlich',
      ],
    },
    price: null,
  },
  {
    id: 'sprint',
    hue: 28,
    title: {
      en: 'Build & Launch',
      es: 'Construcción y Lanzamiento',
      de: 'Bauen & Launchen',
    },
    duration: { en: '4–8 weeks', es: '4–8 semanas', de: '4–8 Wochen' },
    body: {
      en: 'One clear result, live for your customers — a new feature in your app, two systems finally talking to each other correctly, moving to more reliable software, or fixing something that keeps breaking.',
      es: 'Un resultado claro, en marcha para tus clientes — una función nueva en tu app, dos sistemas que por fin se comunican bien entre sí, un cambio a software más fiable, o arreglar algo que no deja de romperse.',
      de: 'Ein klares Ergebnis, live für deine Kunden — eine neue Funktion in deiner App, zwei Systeme, die endlich richtig miteinander sprechen, ein Umstieg auf zuverlässigere Software, oder die Reparatur von etwas, das ständig kaputtgeht.',
    },
    price: null,
  },
  {
    id: 'embedded',
    hue: 268,
    title: {
      en: 'Ongoing Senior Help',
      es: 'Ayuda Senior Continua',
      de: 'Laufende Senior-Unterstützung',
    },
    duration: {
      en: 'As long as you need',
      es: 'El tiempo que necesites',
      de: 'So lange, wie du es brauchst',
    },
    body: {
      en: 'Experienced, hands-on help inside your own team for as long as you need it — someone who takes real responsibility for planning, building, testing and getting things live, not just writing code on the side.',
      es: 'Ayuda experta y práctica dentro de tu propio equipo durante el tiempo que necesites — alguien que asume responsabilidad real sobre la planificación, la construcción, las pruebas y la puesta en marcha, no solo escribir código en paralelo.',
      de: 'Erfahrene, praktische Unterstützung direkt in deinem Team, so lange du sie brauchst — jemand, der wirklich Verantwortung für Planung, Umsetzung, Tests und den Live-Gang übernimmt, statt nur nebenbei Code zu schreiben.',
    },
    price: null,
  },
];

export const [entryOffer, ...followOnOffers] = offers;
