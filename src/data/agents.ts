import type { Lang } from '@i18n/utils';

/**
 * The roster a client picks from.
 *
 * Each agent is a specialisation, not a personality. `proof` is the rule that
 * keeps this honest: an agent may only claim a capability that has already
 * shipped in a real product, and `proof` names where. If you add an agent,
 * you must be able to fill `proof` with something a prospect can be shown.
 */

export interface Agent {
  id: string;
  /** Display name. Deliberately short — it becomes a noun in conversation. */
  name: string;
  /** Base hue in OKLCH. All agents share L/C so the set reads as one system. */
  hue: number;
  /** Single-path SVG mark, drawn on a 24×24 grid. */
  icon: string;
  role: Record<Lang, string>;
  summary: Record<Lang, string>;
  /** What this agent actually hands over. Kept to four lines — it is a card. */
  does: Record<Lang, string[]>;
  /** Shipped evidence. No claim without one. */
  proof: Record<Lang, string>;
}

export const agents: Agent[] = [
  {
    id: 'atlas',
    name: 'Atlas',
    hue: 205,
    icon: 'M12 3 3 8l9 5 9-5-9-5Zm-9 11 9 5 9-5M3 11l9 5 9-5',
    role: {
      en: 'Discovery & Architecture',
      es: 'Análisis y Arquitectura',
      de: 'Analyse & Architektur',
    },
    summary: {
      en: 'Maps the domain before anyone writes code, and writes down why each decision went the way it did.',
      es: 'Mapea el dominio antes de que nadie escriba código, y deja por escrito por qué cada decisión se tomó así.',
      de: 'Erfasst die Domäne, bevor jemand Code schreibt, und hält fest, warum jede Entscheidung so gefallen ist.',
    },
    does: {
      en: [
        'Domain model and system boundaries',
        'Architecture decision records',
        'Build-vs-buy and stack selection',
        'A costed, sequenced delivery plan',
      ],
      es: [
        'Modelo de dominio y límites del sistema',
        'Architecture Decision Records',
        'Decisión de construir o comprar, y elección de stack',
        'Un plan de entrega secuenciado y con costes',
      ],
      de: [
        'Domänenmodell und Systemgrenzen',
        'Architecture Decision Records',
        'Make-or-Buy und Stack-Auswahl',
        'Ein kalkulierter, sequenzierter Lieferplan',
      ],
    },
    proof: {
      en: 'Six products run on one shared core because the boundaries were drawn before the first app, not after the third.',
      es: 'Seis productos corren sobre un mismo núcleo compartido porque los límites se trazaron antes de la primera app, no después de la tercera.',
      de: 'Sechs Produkte laufen auf einem gemeinsamen Kern, weil die Grenzen vor der ersten App gezogen wurden, nicht nach der dritten.',
    },
  },
  {
    id: 'vault',
    name: 'Vault',
    hue: 268,
    icon: 'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    role: { en: 'Data & Backend', es: 'Datos y Backend', de: 'Daten & Backend' },
    summary: {
      en: 'Designs the schema you will still be able to query in three years, and the access rules that keep it lawful.',
      es: 'Diseña el esquema que todavía podrás consultar dentro de tres años, y las reglas de acceso que lo mantienen dentro de la ley.',
      de: 'Entwirft das Schema, das du in drei Jahren noch abfragen kannst, und die Zugriffsregeln, die es rechtskonform halten.',
    },
    does: {
      en: [
        'Postgres schema and migrations',
        'Row-level access and role models',
        'APIs, jobs, and integrations',
        'Taxonomies that survive a rewrite',
      ],
      es: [
        'Esquema de Postgres y migraciones',
        'Acceso por fila y modelos de roles',
        'APIs, jobs e integraciones',
        'Taxonomías que sobreviven a una reescritura',
      ],
      de: [
        'Postgres-Schema und Migrationen',
        'Zeilenbasierte Zugriffs- und Rollenmodelle',
        'APIs, Jobs und Integrationen',
        'Taxonomien, die ein Rewrite überleben',
      ],
    },
    proof: {
      en: 'A care record with 6 categories, 65 typed subtypes, and two orthogonal severity scales — migrated once without invalidating a single existing row.',
      es: 'Un historial de cuidados con 6 categorías, 65 subtipos tipados y dos escalas de gravedad ortogonales — migrado una vez sin invalidar una sola fila existente.',
      de: 'Eine Pflegedokumentation mit 6 Kategorien, 65 typisierten Subtypen und zwei orthogonalen Schweregradskalen — einmal migriert, ohne eine einzige bestehende Zeile zu entwerten.',
    },
  },
  {
    id: 'forge',
    name: 'Forge',
    hue: 28,
    icon: 'M3 17h18M6 17V9l6-5 6 5v8M9.5 17v-4h5v4',
    role: { en: 'Product Build', es: 'Desarrollo de Producto', de: 'Produktentwicklung' },
    summary: {
      en: 'Builds the surfaces users actually touch — web and mobile from one codebase, one design system, one login.',
      es: 'Construye las superficies que los usuarios realmente tocan — web y móvil desde un solo código, un solo sistema de diseño, un solo login.',
      de: 'Baut die Oberflächen, die Nutzer wirklich anfassen — Web und Mobile aus einer Codebasis, einem Design-System, einem Login.',
    },
    does: {
      en: [
        'Web apps in Next.js or Astro',
        'iOS and Android from one codebase',
        'A design system, not a screen pile',
        'Shared auth, config, and UI packages',
      ],
      es: [
        'Apps web en Next.js o Astro',
        'iOS y Android desde un solo código',
        'Un sistema de diseño, no un montón de pantallas',
        'Paquetes compartidos de auth, configuración y UI',
      ],
      de: [
        'Web-Apps in Next.js oder Astro',
        'iOS und Android aus einer Codebasis',
        'Ein Design-System statt eines Screen-Haufens',
        'Gemeinsame Auth-, Config- und UI-Pakete',
      ],
    },
    proof: {
      en: 'Two products released on the same four shared packages — the second shipped without rewriting the first one’s foundation.',
      es: 'Dos productos publicados sobre los mismos cuatro paquetes compartidos — el segundo salió sin reescribir los cimientos del primero.',
      de: 'Zwei Produkte auf denselben vier gemeinsamen Paketen veröffentlicht — das zweite ging live, ohne das Fundament des ersten neu zu schreiben.',
    },
  },
  {
    id: 'sentinel',
    name: 'Sentinel',
    hue: 152,
    icon: 'M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3Zm-3 9 2.2 2.2L15 10',
    role: {
      en: 'Security & Compliance',
      es: 'Seguridad y Cumplimiento',
      de: 'Sicherheit & Compliance',
    },
    summary: {
      en: 'Keeps secrets off the client, permissions minimal, and your GDPR and store paperwork defensible.',
      es: 'Mantiene los secretos fuera del cliente, los permisos al mínimo, y tu documentación de RGPD y de tienda defendible.',
      de: 'Hält Secrets vom Client fern, Berechtigungen minimal und deine DSGVO- und Store-Unterlagen belastbar.',
    },
    does: {
      en: [
        'Threat modelling and secret handling',
        'GDPR posture and data retention',
        'Permission and dependency audits',
        'App store review readiness',
      ],
      es: [
        'Modelado de amenazas y gestión de secretos',
        'Postura de RGPD y retención de datos',
        'Auditorías de permisos y dependencias',
        'Preparación para la revisión en las tiendas',
      ],
      de: [
        'Bedrohungsmodellierung und Secret-Handling',
        'DSGVO-Aufstellung und Datenaufbewahrung',
        'Berechtigungs- und Dependency-Audits',
        'Bereitschaft für die Store-Prüfung',
      ],
    },
    proof: {
      en: 'Payment authority moved off the phone into server-side Edge Functions, and the Android camera permission removed entirely rather than defended.',
      es: 'La autoridad de pago se movió del móvil a Edge Functions en el servidor, y el permiso de cámara en Android se eliminó por completo en vez de defenderlo.',
      de: 'Zahlungshoheit vom Telefon in serverseitige Edge Functions verlagert und die Android-Kameraberechtigung ganz entfernt statt verteidigt.',
    },
  },
  {
    id: 'relay',
    name: 'Relay',
    hue: 312,
    icon: 'M5 12a7 7 0 0 1 7-7m7 7a7 7 0 0 1-7 7m-7-7H2m20 0h-3m-7 7-2.5-2.5M12 5l2.5 2.5M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
    role: { en: 'Release & Operations', es: 'Release y Operaciones', de: 'Release & Betrieb' },
    summary: {
      en: 'Gets it into the store and keeps it there — pipelines, signing, rollbacks, and the boring migrations nobody budgets for.',
      es: 'Lo lleva a la tienda y lo mantiene ahí — pipelines, firma, rollbacks y las migraciones aburridas que nadie presupuesta.',
      de: 'Bringt es in den Store und hält es dort — Pipelines, Signierung, Rollbacks und die langweiligen Migrationen, für die niemand budgetiert.',
    },
    does: {
      en: [
        'CI/CD and reproducible builds',
        'Play Store and App Store submission',
        'Release channels and rollback paths',
        'Data migrations that need no apology',
      ],
      es: [
        'CI/CD y builds reproducibles',
        'Envío a Play Store y App Store',
        'Canales de release y rutas de rollback',
        'Migraciones de datos que no piden perdón',
      ],
      de: [
        'CI/CD und reproduzierbare Builds',
        'Play-Store- und App-Store-Einreichung',
        'Release-Kanäle und Rollback-Pfade',
        'Datenmigrationen ohne Entschuldigung',
      ],
    },
    proof: {
      en: 'A production AAB built through EAS and submitted to Google Play, with a storage re-keying migration that moved existing listings without a single re-upload.',
      es: 'Un AAB de producción construido con EAS y enviado a Google Play, con una migración de claves de almacenamiento que movió los anuncios existentes sin una sola resubida.',
      de: 'Ein Produktions-AAB über EAS gebaut und bei Google Play eingereicht, samt Storage-Migration, die bestehende Anzeigen ohne einen einzigen erneuten Upload verschoben hat.',
    },
  },
  {
    id: 'beacon',
    name: 'Beacon',
    hue: 88,
    icon: 'M12 2v4m0 12v4M2 12h4m12 0h4M5 5l2.8 2.8m8.4 8.4L19 19M19 5l-2.8 2.8m-8.4 8.4L5 19m11-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
    role: { en: 'Reach & Growth', es: 'Alcance y Crecimiento', de: 'Reichweite & Wachstum' },
    summary: {
      en: 'Makes the product findable — technical SEO, real multilingual support, and analytics you can act on.',
      es: 'Hace que el producto se encuentre — SEO técnico, multilingüe de verdad y analítica sobre la que se puede actuar.',
      de: 'Macht das Produkt auffindbar — technisches SEO, echte Mehrsprachigkeit und Analytics, aus denen sich handeln lässt.',
    },
    does: {
      en: [
        'Technical SEO and structured data',
        'Multilingual routing and hreflang',
        'Landing pages that load instantly',
        'Analytics and conversion instrumentation',
      ],
      es: [
        'SEO técnico y datos estructurados',
        'Rutas multilingües y hreflang',
        'Landing pages que cargan al instante',
        'Analítica e instrumentación de conversión',
      ],
      de: [
        'Technisches SEO und strukturierte Daten',
        'Mehrsprachiges Routing und hreflang',
        'Landingpages, die sofort laden',
        'Analytics und Conversion-Messung',
      ],
    },
    proof: {
      en: 'Eleven interface languages in production, and this page — static, per-locale canonical URLs, structured data, no client framework.',
      es: 'Once idiomas de interfaz en producción, y esta página — estática, URLs canónicas por idioma, datos estructurados, sin framework de cliente.',
      de: 'Elf Oberflächensprachen in Produktion, und diese Seite — statisch, kanonische URLs je Sprache, strukturierte Daten, kein Client-Framework.',
    },
  },
];

/** The end-to-end sequence a client is buying, in order. */
export const phases = [
  {
    id: 'frame',
    agent: 'Atlas',
    label: { en: 'Frame', es: 'Encuadrar', de: 'Rahmen' },
    body: {
      en: 'Two weeks. We map the domain, name the risks, and produce a written plan with a cost attached. It ends with a document you own — not a dependency on us.',
      es: 'Dos semanas. Mapeamos el dominio, nombramos los riesgos y producimos un plan escrito con un coste asociado. Termina con un documento que es tuyo, no con una dependencia de nosotros.',
      de: 'Zwei Wochen. Wir erfassen die Domäne, benennen die Risiken und liefern einen schriftlichen Plan mit Kosten. Am Ende steht ein Dokument, das dir gehört — keine Abhängigkeit von uns.',
    },
  },
  {
    id: 'build',
    agent: 'Vault · Forge',
    label: { en: 'Build', es: 'Construir', de: 'Bauen' },
    body: {
      en: 'Schema first, then the surfaces. You get working software in front of real users early, on a foundation that a second product can reuse.',
      es: 'Primero el esquema, después las superficies. Pones software que funciona delante de usuarios reales pronto, sobre una base que un segundo producto puede reutilizar.',
      de: 'Erst das Schema, dann die Oberflächen. Du bekommst früh funktionierende Software vor echte Nutzer, auf einer Basis, die ein zweites Produkt wiederverwenden kann.',
    },
  },
  {
    id: 'harden',
    agent: 'Sentinel',
    label: { en: 'Harden', es: 'Endurecer', de: 'Härten' },
    body: {
      en: 'Before launch, not after the incident. Secrets audited, permissions cut to what you can justify, GDPR posture written down.',
      es: 'Antes del lanzamiento, no después del incidente. Secretos auditados, permisos recortados a lo justificable, postura de RGPD por escrito.',
      de: 'Vor dem Launch, nicht nach dem Vorfall. Secrets geprüft, Berechtigungen auf das Begründbare reduziert, DSGVO-Aufstellung schriftlich.',
    },
  },
  {
    id: 'ship',
    agent: 'Relay · Beacon',
    label: { en: 'Ship', es: 'Publicar', de: 'Ausliefern' },
    body: {
      en: 'Stores, pipelines, search visibility, and the handover. Your team gets documentation they can maintain, and the repository keys.',
      es: 'Tiendas, pipelines, visibilidad en buscadores y la entrega. Tu equipo recibe documentación que puede mantener, y las llaves del repositorio.',
      de: 'Stores, Pipelines, Sichtbarkeit in der Suche und die Übergabe. Dein Team bekommt wartbare Dokumentation und die Schlüssel zum Repository.',
    },
  },
];
