export const languages = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
} as const;

export const defaultLang = 'en' satisfies keyof typeof languages;

export type Lang = keyof typeof languages;

/**
 * `hreflang` codes. Language-only, deliberately.
 *
 * These pages carry no country-specific content — the English page is the same
 * page for a reader in Dublin, Boston or Singapore — and `en-US` tells a crawler
 * the opposite. Region subtags belong here only once there is genuinely a
 * different page per region.
 */
export const hreflangCodes: Record<Lang, string> = {
  en: 'en',
  es: 'es',
  de: 'de',
};

/**
 * OG locale codes. Open Graph wants `language_TERRITORY`, so unlike `hreflang`
 * these keep a region — it is a formatting requirement of the protocol, not a
 * claim about regional content.
 */
export const localeCodes: Record<Lang, string> = {
  en: 'en_US',
  es: 'es_ES',
  de: 'de_DE',
};

/**
 * All user-facing page chrome. Keys are identical across locales — `as const`
 * plus `UIKey` means a missing Spanish or German string is a type error at
 * build time rather than an English word appearing on a German page.
 *
 * Content does NOT live here. Projects, capabilities, offers, situations, FAQ
 * and legal copy each live in src/data/, so a fact is written in exactly one
 * place and cannot drift between the landing page and the page that details it.
 */
export const ui = {
  en: {
    'nav.work': 'Work',
    'nav.offers': 'Engagements',
    'nav.capabilities': 'Capabilities',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',
    'nav.menu': 'Menu',
    'nav.cta': 'Discuss your project',

    'hero.eyebrow': 'Senior product engineering · Munich · Remote EU',
    'hero.title': 'Senior software engineering',
    'hero.titleAccent': 'for data-intensive products.',
    'hero.subtitle':
      'I help product teams design, stabilise and ship web, mobile and data systems — from APIs and real-time flows to reliable production releases. One senior engineer, accountable end to end.',
    'hero.ctaPrimary': 'Discuss your project',
    'hero.ctaSecondary': 'See selected work',
    'hero.proofLine':
      'TypeScript · Python · PostgreSQL · React Native · AWS — Munich, remote across the EU',
    'hero.note':
      'Every claim on this page is backed by software already running in production.',

    'situations.eyebrow': 'When this is useful',
    'situations.title':
      'Useful when the product must move, but the technical path is unclear.',

    'work.eyebrow': 'Selected work',
    'work.title': 'Three systems, and what changed because they shipped.',
    'work.sub':
      'Client systems in production, each with the decision that made it work and the trade-off it cost. Where a long-form case study exists, it is linked; where it does not, there is no link rather than a broken one.',
    'work.role': 'Role',
    'work.outcome': 'Outcome',
    'work.stack': 'Stack',
    'work.caseStudy': 'Read the case study',
    'work.seeAll': 'See all nine systems',
    'work.filterLabel': 'Filter by sector',
    'work.filterAll': 'All',
    'work.viewAll': 'See every case study on marcocasanova.de',
    'work.empty': 'No projects in that sector.',
    'work.countOne': 'project',
    'work.countMany': 'projects',

    'workPage.eyebrow': 'Portfolio',
    'workPage.title': 'Every system, once, with the trade-off it cost.',
    'workPage.sub':
      'Nine systems across healthcare, industrial IoT, ticketing, retail and marketplaces. Each appears here exactly once, with the decision that made it work and what that decision cost.',
    'workPage.back': 'Back to overview',

    'offers.eyebrow': 'Engagements',
    'offers.title': 'Three shapes. Start with the smallest one that answers your question.',
    'offers.sub':
      'Each one ends with something you own outright — a document, a release, a repository your team can maintain. None of them requires you to buy the next.',
    'offers.includes': 'What you receive',
    'offers.note':
      'Scope and a fixed price are agreed in writing before anything starts, so the cost of finding out whether this works is known in advance.',
    'offers.cta': 'Start with a diagnostic',

    'process.eyebrow': 'How delivery runs',
    'process.title': 'Four phases, and you can stop after any of them.',
    'process.sub':
      'No phase depends on you buying the next one. Each ends with something you own outright — a document, a repository, a release.',
    'process.led': 'Track',

    'caps.eyebrow': 'Capability tracks',
    'caps.title': 'Six capability tracks. One accountable senior engineer.',
    'caps.sub':
      'Not six people, and not autonomous software you hire. These are the tracks the work is organised into, so an engagement can be scoped to one of them or run across all six.',
    'caps.does': 'Hands over',
    'caps.proof': 'Already shipped',
    'caps.more': 'All six capability tracks',

    'capsPage.eyebrow': 'Capabilities',
    'capsPage.title': 'Six capability tracks. One accountable senior engineer.',
    'capsPage.sub':
      'Each track may only claim a capability that has already shipped in a real product, and names where. Scope an engagement to one track, or run the sequence end to end.',
    'capsPage.back': 'Back to overview',

    'principal.eyebrow': 'Who is accountable',
    'principal.title': 'AI-assisted delivery. Human-owned decisions.',
    'principal.body':
      'One senior engineer designs the system, writes the parts that carry risk, reviews everything that ships, and signs the release. You talk to that person directly, from the first call to the handover — the same person is on the call, in the pull request and on the incident.',
    'principal.aiPolicyLabel': 'AI and confidentiality',
    'principal.aiPolicy':
      'AI tools may accelerate analysis and implementation where the client’s policy permits it. Architecture, security, code review and release decisions remain human-owned. Confidential material is never submitted to third-party AI tools without explicit approval.',
    'principal.viewPortfolio': 'See the full track record',
    'principal.locationLabel': 'Based in',
    'principal.stackLabel': 'Core stack',
    'principal.stackValue': 'TypeScript · Node.js · Python · PostgreSQL · React Native · AWS',
    'principal.marketsLabel': 'Markets',
    'principal.marketsValue': 'Germany, Austria, and remote across EU timezones',

    'faq.eyebrow': 'Before the first call',
    'faq.title': 'The questions that come up first.',

    'cta.title': 'Tell me what needs to ship — or what is blocking it.',
    'cta.body':
      'Bring a system diagram, a slow query, a failed release or a product goal. The first 30-minute fit call is free, and if I am not the right person for it, I will say so on that call.',
    'cta.email': 'Email the problem',
    'cta.call': 'Book a 30-minute fit call',
    'cta.response': 'Typical reply time: under 48 hours, from the engineer himself',

    'contact.heading': 'Tell me what needs to ship — or what is blocking it.',
    'contact.sub':
      'The most useful first message describes what is actually going wrong. Architecture diagrams welcome; a polished brief is not required.',
    'contact.promptTitle': 'Four lines are enough',
    'contact.prompt1': 'What needs to ship or improve?',
    'contact.prompt2': 'What is blocked today?',
    'contact.prompt3': 'What stack or system is involved?',
    'contact.prompt4': 'Is there a target date?',
    'contact.emailSubject': 'Technical fit call — Stratos One',
    'contact.directTitle': 'Email',
    'contact.callTitle': 'Book a call',
    'contact.callDesc':
      '30 minutes, no charge, no deck. We look at the problem and decide together whether this is a fit — including when the honest answer is that it is not.',
    'contact.principalTitle': 'The engineer',
    'contact.principalDesc':
      'Track record, case studies, and the reasoning behind past decisions, in full.',
    'contact.responseLabel': 'Reply time',
    'contact.responseValue': 'Under 48 hours, from the engineer himself',
    'contact.privacyNote':
      'Booking a call opens Calendly, a third-party service, in a new tab. Nothing you type here is sent anywhere — this site has no contact form, no analytics and no cookies.',

    'footer.built': 'Built with Astro. Static, no trackers, no client framework.',
    'footer.rights': 'All rights reserved.',
    'footer.principal': 'A Marco Casanova venture',
    'footer.navLabel': 'Footer',
    'footer.legalLabel': 'Legal',

    'legal.imprintNav': 'Imprint',
    'legal.privacyNav': 'Privacy',
    'legal.lastUpdated': 'Last updated',

    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Change language',

    'seo.homeTitle': 'Senior Product Engineer in Munich',
    'seo.homeDesc':
      'Senior engineering for data-intensive web and mobile products — from architecture and APIs to reliable production releases. Munich, remote across the EU.',
    'seo.workTitle': 'Selected Work in Data-Intensive Systems',
    'seo.workDesc':
      'Nine production systems across healthcare, industrial IoT, ticketing, retail and marketplaces — each with the technical decision behind it and what it cost.',
    'seo.capsTitle': 'Product Engineering Capabilities',
    'seo.capsDesc':
      'Architecture, data and backend, product build, security, release and reach — six capability tracks, each backed by software already running in production.',
    'seo.contactTitle': 'Discuss a Software Project',
    'seo.contactDesc':
      'Bring a blocked release, a data problem or a product goal to a free 30-minute technical fit call with a senior engineer based in Munich. Reply under 48 hours.',
    'seo.imprintTitle': 'Imprint',
    'seo.imprintDesc':
      'Provider identification for stratos-one.eu under §5 DDG, including the responsible party for content under §18 (2) MStV.',
    'seo.privacyTitle': 'Privacy Notice',
    'seo.privacyDesc':
      'How stratos-one.eu handles personal data: no cookies, no analytics and no third-party scripts. What the host logs, and the rights you have under the GDPR.',

    '404.title': 'Page not found',
    '404.subtitle': 'That route does not exist. It may have moved.',
    '404.cta': 'Back home',
  },
  es: {
    'nav.work': 'Proyectos',
    'nav.offers': 'Formatos',
    'nav.capabilities': 'Capacidades',
    'nav.contact': 'Contacto',
    'nav.skipToContent': 'Ir al contenido',
    'nav.menu': 'Menú',
    'nav.cta': 'Hablemos de tu proyecto',

    'hero.eyebrow': 'Ingeniería de producto senior · Múnich · Remoto en la UE',
    'hero.title': 'Ingeniería de software senior',
    'hero.titleAccent': 'para productos intensivos en datos.',
    'hero.subtitle':
      'Ayudo a equipos de producto a diseñar, estabilizar y lanzar sistemas web, móviles y de datos: desde APIs y flujos en tiempo real hasta releases fiables en producción. Un ingeniero senior responsable de principio a fin.',
    'hero.ctaPrimary': 'Hablemos de tu proyecto',
    'hero.ctaSecondary': 'Ver proyectos seleccionados',
    'hero.proofLine':
      'TypeScript · Python · PostgreSQL · React Native · AWS — Múnich, remoto en toda la UE',
    'hero.note':
      'Cada afirmación de esta página está respaldada por software que ya corre en producción.',

    'situations.eyebrow': 'Cuándo sirve',
    'situations.title':
      'Sirve cuando el producto tiene que avanzar, pero el camino técnico no está claro.',

    'work.eyebrow': 'Proyectos seleccionados',
    'work.title': 'Tres sistemas, y qué cambió porque se entregaron.',
    'work.sub':
      'Sistemas de cliente en producción, cada uno con la decisión que lo hizo funcionar y lo que costó esa decisión. Donde existe un caso de estudio largo, está enlazado; donde no, no hay enlace en vez de un enlace roto.',
    'work.role': 'Rol',
    'work.outcome': 'Resultado',
    'work.stack': 'Stack',
    'work.caseStudy': 'Leer el caso de estudio',
    'work.seeAll': 'Ver los nueve sistemas',
    'work.filterLabel': 'Filtrar por sector',
    'work.filterAll': 'Todos',
    'work.viewAll': 'Ver todos los casos en marcocasanova.de',
    'work.empty': 'No hay proyectos en ese sector.',
    'work.countOne': 'proyecto',
    'work.countMany': 'proyectos',

    'workPage.eyebrow': 'Portafolio',
    'workPage.title': 'Cada sistema, una vez, con lo que costó la decisión.',
    'workPage.sub':
      'Nueve sistemas en salud, IoT industrial, ticketing, retail y marketplaces. Cada uno aparece aquí exactamente una vez, con la decisión que lo hizo funcionar y lo que esa decisión costó.',
    'workPage.back': 'Volver a la vista general',

    'offers.eyebrow': 'Formatos de colaboración',
    'offers.title': 'Tres formatos. Empieza por el más pequeño que responda tu pregunta.',
    'offers.sub':
      'Cada uno termina con algo que es tuyo por completo: un documento, una release, un repositorio que tu equipo puede mantener. Ninguno te obliga a comprar el siguiente.',
    'offers.includes': 'Qué recibes',
    'offers.note':
      'El alcance y un precio cerrado se acuerdan por escrito antes de empezar, así que lo que cuesta averiguar si esto funciona se sabe de antemano.',
    'offers.cta': 'Empezar por el diagnóstico',

    'process.eyebrow': 'Cómo se entrega',
    'process.title': 'Cuatro fases, y puedes parar después de cualquiera.',
    'process.sub':
      'Ninguna fase depende de que compres la siguiente. Cada una termina con algo que es tuyo por completo: un documento, un repositorio, una versión publicada.',
    'process.led': 'Track',

    'caps.eyebrow': 'Tracks de capacidad',
    'caps.title': 'Seis tracks de capacidad. Un ingeniero senior responsable.',
    'caps.sub':
      'No son seis personas, ni software autónomo que contratas. Son los tracks en los que se organiza el trabajo, para que un encargo pueda acotarse a uno solo o recorrer los seis.',
    'caps.does': 'Entrega',
    'caps.proof': 'Ya entregado',
    'caps.more': 'Los seis tracks de capacidad',

    'capsPage.eyebrow': 'Capacidades',
    'capsPage.title': 'Seis tracks de capacidad. Un ingeniero senior responsable.',
    'capsPage.sub':
      'Cada track solo puede afirmar una capacidad que ya se entregó en un producto real, y dice dónde. Acota un encargo a un solo track, o recorre la secuencia de principio a fin.',
    'capsPage.back': 'Volver a la vista general',

    'principal.eyebrow': 'Quién responde',
    'principal.title': 'Entrega asistida por IA. Decisiones con responsable humano.',
    'principal.body':
      'Un ingeniero senior diseña el sistema, escribe las partes que concentran el riesgo, revisa todo lo que sale y firma la release. Hablas con esa persona directamente, desde la primera llamada hasta la entrega: la misma persona está en la llamada, en el pull request y en el incidente.',
    'principal.aiPolicyLabel': 'IA y confidencialidad',
    'principal.aiPolicy':
      'Las herramientas de IA pueden acelerar el análisis y la implementación cuando la política del cliente lo permite. Las decisiones de arquitectura, seguridad, revisión de código y release siguen siendo humanas. El material confidencial nunca se envía a herramientas de IA de terceros sin aprobación explícita.',
    'principal.viewPortfolio': 'Ver la trayectoria completa',
    'principal.locationLabel': 'Con base en',
    'principal.stackLabel': 'Stack principal',
    'principal.stackValue': 'TypeScript · Node.js · Python · PostgreSQL · React Native · AWS',
    'principal.marketsLabel': 'Mercados',
    'principal.marketsValue': 'Alemania, Austria y remoto en husos horarios europeos',

    'faq.eyebrow': 'Antes de la primera llamada',
    'faq.title': 'Las preguntas que salen primero.',

    'cta.title': 'Cuéntame qué tiene que salir — o qué lo está bloqueando.',
    'cta.body':
      'Trae un diagrama del sistema, una consulta lenta, una release fallida o un objetivo de producto. La primera llamada de 30 minutos es gratuita, y si no soy la persona adecuada, te lo digo en esa misma llamada.',
    'cta.email': 'Escribir el problema',
    'cta.call': 'Reservar 30 minutos',
    'cta.response': 'Respuesta habitual: menos de 48 horas, del propio ingeniero',

    'contact.heading': 'Cuéntame qué tiene que salir — o qué lo está bloqueando.',
    'contact.sub':
      'El primer mensaje más útil es el que describe qué está fallando de verdad. Los diagramas de arquitectura son bienvenidos; un briefing pulido no hace falta.',
    'contact.promptTitle': 'Con cuatro líneas basta',
    'contact.prompt1': '¿Qué tiene que salir o mejorar?',
    'contact.prompt2': '¿Qué está bloqueado hoy?',
    'contact.prompt3': '¿Qué stack o sistema está implicado?',
    'contact.prompt4': '¿Hay una fecha objetivo?',
    'contact.emailSubject': 'Llamada técnica — Stratos One',
    'contact.directTitle': 'Email',
    'contact.callTitle': 'Reservar una llamada',
    'contact.callDesc':
      '30 minutos, sin coste y sin presentación. Miramos el problema y decidimos juntos si encaja — incluido cuando la respuesta honesta es que no.',
    'contact.principalTitle': 'El ingeniero',
    'contact.principalDesc':
      'Trayectoria, casos de estudio y el razonamiento detrás de decisiones pasadas, al completo.',
    'contact.responseLabel': 'Tiempo de respuesta',
    'contact.responseValue': 'Menos de 48 horas, y responde el propio ingeniero',
    'contact.privacyNote':
      'Reservar una llamada abre Calendly, un servicio de terceros, en una pestaña nueva. Nada de lo que escribas aquí se envía a ningún sitio: esta web no tiene formulario, ni analítica, ni cookies.',

    'footer.built': 'Construido con Astro. Estático, sin trackers, sin framework de cliente.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.principal': 'Un proyecto de Marco Casanova',
    'footer.navLabel': 'Pie de página',
    'footer.legalLabel': 'Legal',

    'legal.imprintNav': 'Aviso legal',
    'legal.privacyNav': 'Privacidad',
    'legal.lastUpdated': 'Última actualización',

    'theme.toggle': 'Cambiar tema',
    'lang.switch': 'Cambiar idioma',

    'seo.homeTitle': 'Ingeniero de software senior en Múnich',
    'seo.homeDesc':
      'Ingeniería senior para productos web y móviles intensivos en datos: de la arquitectura y las APIs a releases fiables en producción. Múnich, remoto en la UE.',
    'seo.workTitle': 'Proyectos en sistemas intensivos en datos',
    'seo.workDesc':
      'Nueve sistemas en producción en salud, IoT industrial, ticketing, retail y marketplaces, cada uno con la decisión técnica detrás y lo que esa decisión costó.',
    'seo.capsTitle': 'Capacidades de ingeniería de producto',
    'seo.capsDesc':
      'Arquitectura, datos y backend, producto, seguridad, release y alcance: seis tracks de capacidad, cada uno respaldado por software que ya corre en producción.',
    'seo.contactTitle': 'Hablar de un proyecto de software',
    'seo.contactDesc':
      'Trae una release bloqueada, un problema de datos o un objetivo de producto a una llamada técnica gratuita de 30 minutos con un ingeniero senior en Múnich.',
    'seo.imprintTitle': 'Aviso legal',
    'seo.imprintDesc':
      'Identificación del prestador de stratos-one.eu según el §5 DDG, incluido el responsable de contenidos según el §18 (2) MStV.',
    'seo.privacyTitle': 'Política de privacidad',
    'seo.privacyDesc':
      'Cómo trata stratos-one.eu los datos personales: sin cookies, sin analítica y sin scripts de terceros. Qué registra el hosting y qué derechos te da el RGPD.',

    '404.title': 'Página no encontrada',
    '404.subtitle': 'Esa ruta no existe. Puede que se haya movido.',
    '404.cta': 'Volver al inicio',
  },
  de: {
    'nav.work': 'Referenzen',
    'nav.offers': 'Formate',
    'nav.capabilities': 'Leistungen',
    'nav.contact': 'Kontakt',
    'nav.skipToContent': 'Zum Inhalt springen',
    'nav.menu': 'Menü',
    'nav.cta': 'Projekt besprechen',

    'hero.eyebrow': 'Senior Product Engineering · München · Remote in der EU',
    'hero.title': 'Senior Software Engineering',
    'hero.titleAccent': 'für datenintensive Produkte.',
    'hero.subtitle':
      'Ich unterstütze Produktteams dabei, Web-, Mobile- und Datensysteme zu entwickeln, zu stabilisieren und zuverlässig in Produktion zu bringen — von APIs und Echtzeit-Datenflüssen bis zum Release. Ein Senior Engineer, durchgehend verantwortlich.',
    'hero.ctaPrimary': 'Projekt besprechen',
    'hero.ctaSecondary': 'Ausgewählte Projekte',
    'hero.proofLine':
      'TypeScript · Python · PostgreSQL · React Native · AWS — München, remote in der ganzen EU',
    'hero.note':
      'Jede Aussage auf dieser Seite ist durch Software gedeckt, die bereits in Produktion läuft.',

    'situations.eyebrow': 'Wann das hilft',
    'situations.title':
      'Hilfreich, wenn das Produkt vorankommen muss, der technische Weg aber unklar ist.',

    'work.eyebrow': 'Ausgewählte Projekte',
    'work.title': 'Drei Systeme — und was sich geändert hat, weil sie live gingen.',
    'work.sub':
      'Kundensysteme in Produktion, jeweils mit der Entscheidung, die sie tragfähig gemacht hat, und dem Preis dieser Entscheidung. Wo es eine ausführliche Fallstudie gibt, ist sie verlinkt; wo nicht, steht kein Link statt eines toten Links.',
    'work.role': 'Rolle',
    'work.outcome': 'Ergebnis',
    'work.stack': 'Stack',
    'work.caseStudy': 'Fallstudie lesen',
    'work.seeAll': 'Alle neun Systeme ansehen',
    'work.filterLabel': 'Nach Branche filtern',
    'work.filterAll': 'Alle',
    'work.viewAll': 'Alle Fallstudien auf marcocasanova.de',
    'work.empty': 'Keine Projekte in dieser Branche.',
    'work.countOne': 'Projekt',
    'work.countMany': 'Projekte',

    'workPage.eyebrow': 'Referenzen',
    'workPage.title': 'Jedes System einmal — samt dem Preis der Entscheidung.',
    'workPage.sub':
      'Neun Systeme aus Healthcare, Industrie-IoT, Ticketing, Retail und Marktplätzen. Jedes steht hier genau einmal, mit der Entscheidung, die es tragfähig gemacht hat, und dem, was sie gekostet hat.',
    'workPage.back': 'Zurück zur Übersicht',

    'offers.eyebrow': 'Zusammenarbeit',
    'offers.title': 'Drei Formate. Beginne mit dem kleinsten, das deine Frage beantwortet.',
    'offers.sub':
      'Jedes endet mit etwas, das dir vollständig gehört — ein Dokument, ein Release, ein Repository, das dein Team pflegen kann. Keines setzt voraus, dass du das nächste kaufst.',
    'offers.includes': 'Was du bekommst',
    'offers.note':
      'Umfang und Festpreis werden vor dem Start schriftlich vereinbart. Damit steht vorher fest, was es kostet, herauszufinden, ob das trägt.',
    'offers.cta': 'Mit dem Diagnostic starten',

    'process.eyebrow': 'Wie geliefert wird',
    'process.title': 'Vier Phasen — und nach jeder kannst du aufhören.',
    'process.sub':
      'Keine Phase setzt voraus, dass du die nächste kaufst. Jede endet mit etwas, das dir vollständig gehört — ein Dokument, ein Repository, ein Release.',
    'process.led': 'Track',

    'caps.eyebrow': 'Capability-Tracks',
    'caps.title': 'Sechs Capability-Tracks. Ein verantwortlicher Senior Engineer.',
    'caps.sub':
      'Keine sechs Personen und keine autonome Software, die du anheuerst. Es sind die Tracks, in denen die Arbeit organisiert ist — ein Mandat kann auf einen davon zugeschnitten sein oder alle sechs durchlaufen.',
    'caps.does': 'Liefert',
    'caps.proof': 'Bereits ausgeliefert',
    'caps.more': 'Alle sechs Capability-Tracks',

    'capsPage.eyebrow': 'Leistungen',
    'capsPage.title': 'Sechs Capability-Tracks. Ein verantwortlicher Senior Engineer.',
    'capsPage.sub':
      'Jeder Track darf nur eine Fähigkeit behaupten, die bereits in einem echten Produkt ausgeliefert wurde — und benennt, wo. Schneide ein Mandat auf einen Track zu oder durchlaufe die Sequenz vollständig.',
    'capsPage.back': 'Zurück zur Übersicht',

    'principal.eyebrow': 'Wer verantwortet',
    'principal.title': 'KI-gestützte Umsetzung. Menschlich verantwortete Entscheidungen.',
    'principal.body':
      'Ein Senior Engineer entwirft das System, schreibt die Teile, in denen das Risiko sitzt, prüft alles, was ausgeliefert wird, und zeichnet das Release. Du sprichst direkt mit dieser Person — vom ersten Gespräch bis zur Übergabe. Dieselbe Person sitzt im Call, im Pull Request und im Incident.',
    'principal.aiPolicyLabel': 'KI und Vertraulichkeit',
    'principal.aiPolicy':
      'KI-Werkzeuge können Analyse und Umsetzung beschleunigen, soweit die Richtlinie des Kunden das erlaubt. Entscheidungen zu Architektur, Sicherheit, Code-Review und Release bleiben menschlich verantwortet. Vertrauliches Material wird ohne ausdrückliche Freigabe niemals an KI-Dienste Dritter übermittelt.',
    'principal.viewPortfolio': 'Vollständige Referenzen ansehen',
    'principal.locationLabel': 'Standort',
    'principal.stackLabel': 'Kern-Stack',
    'principal.stackValue': 'TypeScript · Node.js · Python · PostgreSQL · React Native · AWS',
    'principal.marketsLabel': 'Märkte',
    'principal.marketsValue': 'Deutschland, Österreich und remote in europäischen Zeitzonen',

    'faq.eyebrow': 'Vor dem ersten Gespräch',
    'faq.title': 'Die Fragen, die zuerst kommen.',

    'cta.title': 'Sag mir, was live gehen muss — oder was es blockiert.',
    'cta.body':
      'Bring ein Systemdiagramm, eine langsame Query, ein fehlgeschlagenes Release oder ein Produktziel mit. Das erste 30-Minuten-Gespräch ist kostenlos, und wenn ich nicht die richtige Person bin, sage ich das in diesem Gespräch.',
    'cta.email': 'Problem per E-Mail schildern',
    'cta.call': '30 Minuten buchen',
    'cta.response': 'Übliche Antwortzeit: unter 48 Stunden, vom Engineer selbst',

    'contact.heading': 'Sag mir, was live gehen muss — oder was es blockiert.',
    'contact.sub':
      'Die nützlichste erste Nachricht beschreibt, was tatsächlich schiefläuft. Architekturdiagramme sind willkommen; ein ausgefeiltes Briefing ist nicht nötig.',
    'contact.promptTitle': 'Vier Zeilen genügen',
    'contact.prompt1': 'Was muss live gehen oder besser werden?',
    'contact.prompt2': 'Was ist heute blockiert?',
    'contact.prompt3': 'Welcher Stack oder welches System ist beteiligt?',
    'contact.prompt4': 'Gibt es einen Zieltermin?',
    'contact.emailSubject': 'Technisches Erstgespräch — Stratos One',
    'contact.directTitle': 'E-Mail',
    'contact.callTitle': 'Gespräch buchen',
    'contact.callDesc':
      '30 Minuten, kostenlos, ohne Foliensatz. Wir sehen uns das Problem an und entscheiden gemeinsam, ob es passt — auch dann, wenn die ehrliche Antwort nein lautet.',
    'contact.principalTitle': 'Der Engineer',
    'contact.principalDesc':
      'Referenzen, Fallstudien und die Begründungen hinter vergangenen Entscheidungen, vollständig.',
    'contact.responseLabel': 'Antwortzeit',
    'contact.responseValue': 'Unter 48 Stunden — und zwar vom Engineer selbst',
    'contact.privacyNote':
      'Das Buchen eines Gesprächs öffnet Calendly, einen Dienst Dritter, in einem neuen Tab. Was du hier liest, wird nirgendwohin gesendet: Diese Seite hat kein Formular, keine Analytics und keine Cookies.',

    'footer.built': 'Gebaut mit Astro. Statisch, keine Tracker, kein Client-Framework.',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.principal': 'Ein Unternehmen von Marco Casanova',
    'footer.navLabel': 'Fußzeile',
    'footer.legalLabel': 'Rechtliches',

    'legal.imprintNav': 'Impressum',
    'legal.privacyNav': 'Datenschutz',
    'legal.lastUpdated': 'Zuletzt aktualisiert',

    'theme.toggle': 'Design wechseln',
    'lang.switch': 'Sprache wechseln',

    'seo.homeTitle': 'Senior Software Engineer in München',
    'seo.homeDesc':
      'Senior Engineering für datenintensive Web- und Mobile-Produkte — von Architektur und APIs bis zu verlässlichen Releases. München, remote in der ganzen EU.',
    'seo.workTitle': 'Projekte in datenintensiven Systemen',
    'seo.workDesc':
      'Neun Systeme in Produktion aus Healthcare, Industrie-IoT, Ticketing, Retail und Marktplätzen — je mit der technischen Entscheidung dahinter und ihrem Preis.',
    'seo.capsTitle': 'Leistungen im Product Engineering',
    'seo.capsDesc':
      'Architektur, Daten und Backend, Produktentwicklung, Sicherheit, Release und Reichweite — sechs Tracks, gedeckt durch Software, die in Produktion läuft.',
    'seo.contactTitle': 'Softwareprojekt besprechen',
    'seo.contactDesc':
      'Bring ein blockiertes Release, ein Datenproblem oder ein Produktziel in ein kostenloses 30-Minuten-Gespräch mit einem Senior Engineer aus München.',
    'seo.imprintTitle': 'Impressum',
    'seo.imprintDesc':
      'Anbieterkennzeichnung für stratos-one.eu nach §5 DDG, einschließlich der nach §18 (2) MStV verantwortlichen Person für den Inhalt.',
    'seo.privacyTitle': 'Datenschutzerklärung',
    'seo.privacyDesc':
      'Wie stratos-one.eu mit personenbezogenen Daten umgeht: keine Cookies, keine Analytics, keine Skripte Dritter. Was der Hoster protokolliert und welche Rechte die DSGVO gibt.',

    '404.title': 'Seite nicht gefunden',
    '404.subtitle': 'Diese Route existiert nicht. Vielleicht wurde sie verschoben.',
    '404.cta': 'Zurück zur Startseite',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
