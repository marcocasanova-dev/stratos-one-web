export const languages = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
} as const;

export const defaultLang = 'en' satisfies keyof typeof languages;

export type Lang = keyof typeof languages;

/** OG / `hreflang` locale codes. */
export const localeCodes: Record<Lang, string> = {
  en: 'en-US',
  es: 'es-ES',
  de: 'de-DE',
};

/**
 * All user-facing copy. Keys are shared across locales so a missing Spanish or
 * German string falls back to English rather than rendering the raw key.
 *
 * Project copy does NOT live here — it lives in src/data/projects.ts, so a
 * project is described in exactly one place and cannot drift between the
 * landing page and the portfolio grid.
 */
export const ui = {
  en: {
    'nav.agents': 'Agents',
    'nav.how': 'How it works',
    'nav.work': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',
    'nav.menu': 'Menu',
    'nav.closeMenu': 'Close menu',
    'nav.cta': 'Book a call',

    'hero.eyebrow': 'AI-native product consulting · Munich',
    'hero.title': 'Choose your agent.',
    'hero.titleAccent': 'Ship your business.',
    'hero.subtitle':
      'Stratos One is an AI consulting studio where you pick the specialists your project actually needs — then one senior engineer stands behind everything they ship. From the first domain model to the app in the store.',
    'hero.ctaAgents': 'Meet the agents',
    'hero.ctaCall': 'Book 30 minutes',
    'hero.note': 'Every capability below is backed by software already in production.',

    'agents.eyebrow': 'The roster',
    'agents.title': 'Six specialists. You decide who works on what.',
    'agents.sub':
      'Most agencies sell you a team and bill you for all of it. Here you compose the engagement: take one agent for a two-week diagnosis, or the full chain from architecture to store submission.',
    'agents.does': 'Hands over',
    'agents.proof': 'Already shipped',
    'agents.readMore': 'Full roster',
    'agents.select': 'Select this agent',

    'how.eyebrow': 'End to end',
    'how.title': 'Four phases, and you can stop after any of them.',
    'how.sub':
      'No phase depends on you buying the next one. Each ends with something you own outright — a document, a repository, a release.',
    'how.led': 'Led by',

    'work.eyebrow': 'Portfolio',
    'work.title': 'Nine systems that shipped, not nine slides.',
    'work.sub':
      'Every project below reached real users — a construction site, a clinic, a ticket gate, a store listing. Each one is here once, with the decision that made it work and the trade-off it cost.',
    'work.filterLabel': 'Filter by sector',
    'work.filterAll': 'All',
    'work.role': 'Role',
    'work.outcome': 'Outcome',
    'work.stack': 'Stack',
    'work.caseStudy': 'Read the case study',
    'work.viewAll': 'See every case study on marcocasanova.de',
    'work.empty': 'No projects in that sector.',
    'work.countOne': 'project',
    'work.countMany': 'projects',

    'principal.eyebrow': 'Who signs off',
    'principal.title': 'The agents move fast. A human is accountable.',
    'principal.body':
      'AI writes a lot of plausible code. The difference between plausible and correct is judgement, and judgement is the part you are actually buying. Every architecture decision, every schema, and every release that leaves Stratos One is reviewed by one senior engineer who puts his name on it.',
    'principal.yearsLabel': 'years shipping production software',
    'principal.viewPortfolio': 'See the full track record',
    'principal.locationLabel': 'Based in',
    'principal.stackLabel': 'Core stack',
    'principal.stackValue': 'TypeScript · Node.js · Python · PostgreSQL · React Native · AWS',
    'principal.marketsLabel': 'Markets',
    'principal.marketsValue': 'Germany, Austria, and remote across EU timezones',

    'engage.eyebrow': 'Engagements',
    'engage.title': 'Three shapes. Pick the smallest one that answers your question.',
    'engage.shape1Title': 'Diagnosis',
    'engage.shape1Duration': '1–2 weeks',
    'engage.shape1Body':
      'One agent, one question. We read the system, measure it, and hand you a written diagnosis with a prioritised plan. It ends with a document, not a retainer.',
    'engage.shape1Agent': 'Typically Atlas or Sentinel',
    'engage.shape2Title': 'Fixed-scope build',
    'engage.shape2Duration': '6–12 weeks',
    'engage.shape2Body':
      'One defined piece of system delivered to production: an ingest pipeline, a mobile app, an API layer, a migration. Handed over with documentation your team can maintain.',
    'engage.shape2Agent': 'Vault · Forge · Relay',
    'engage.shape3Title': 'Business, end to end',
    'engage.shape3Duration': '3+ months',
    'engage.shape3Body':
      'The full chain. Domain model to store listing, with the shared foundation built so your second product costs a fraction of your first.',
    'engage.shape3Agent': 'The full roster',
    'engage.antiAgency':
      'You talk directly to the engineer who writes the code. There is no account manager, and there is no team of juniors behind the demo.',

    'cta.title': 'Tell us what is on fire.',
    'cta.body':
      'Bring an architecture diagram, a slow query, a failed store review, or an idea with nothing built yet. First conversation is 30 minutes and costs nothing.',
    'cta.email': 'Email us',
    'cta.call': 'Book 30 minutes',
    'cta.response': 'Typical reply time: under 48 hours',

    'contact.title': 'Contact',
    'contact.heading': 'Start with the problem, not the solution.',
    'contact.sub':
      'The most useful first message is the one that describes what is actually going wrong. Architecture diagrams welcome; polished briefs are not required.',
    'contact.directTitle': 'Direct',
    'contact.callTitle': 'Book a call',
    'contact.callDesc':
      '30 minutes, no charge, no deck. We look at your problem and tell you which agent — if any — is the right one.',
    'contact.principalTitle': 'The engineer',
    'contact.principalDesc':
      'Track record, case studies, and the reasoning behind past decisions, in full.',
    'contact.responseLabel': 'Reply time',
    'contact.responseValue': 'Under 48 hours, from the engineer himself',

    'agentsPage.title': 'The roster',
    'agentsPage.sub':
      'Six specialisations. Each one may only claim a capability that has already shipped in a real product — the evidence is on every card.',
    'agentsPage.back': 'Back to overview',

    'footer.built': 'Built with Astro. Static, no trackers, no client framework.',
    'footer.rights': 'All rights reserved.',
    'footer.principal': 'A Marco Casanova venture',

    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Change language',

    '404.title': 'Page not found',
    '404.subtitle': 'That route does not exist. It may have moved.',
    '404.cta': 'Back home',
  },
  es: {
    'nav.agents': 'Agentes',
    'nav.how': 'Cómo funciona',
    'nav.work': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.skipToContent': 'Ir al contenido',
    'nav.menu': 'Menú',
    'nav.closeMenu': 'Cerrar menú',
    'nav.cta': 'Reservar una llamada',

    'hero.eyebrow': 'Consultoría de producto nativa en IA · Múnich',
    'hero.title': 'Elige tu agente.',
    'hero.titleAccent': 'Lanza tu negocio.',
    'hero.subtitle':
      'Stratos One es un estudio de consultoría con IA donde eliges los especialistas que tu proyecto realmente necesita — y un ingeniero senior responde por todo lo que entregan. Del primer modelo de dominio hasta la app publicada en la tienda.',
    'hero.ctaAgents': 'Ver los agentes',
    'hero.ctaCall': 'Reservar 30 minutos',
    'hero.note': 'Cada capacidad de abajo está respaldada por software que ya está en producción.',

    'agents.eyebrow': 'El equipo',
    'agents.title': 'Seis especialistas. Tú decides quién trabaja en qué.',
    'agents.sub':
      'La mayoría de las agencias te vende un equipo entero y te lo factura completo. Aquí tú compones el encargo: un agente para un diagnóstico de dos semanas, o la cadena completa desde la arquitectura hasta la publicación en la tienda.',
    'agents.does': 'Entrega',
    'agents.proof': 'Ya entregado',
    'agents.readMore': 'Equipo completo',
    'agents.select': 'Elegir este agente',

    'how.eyebrow': 'De principio a fin',
    'how.title': 'Cuatro fases, y puedes parar después de cualquiera.',
    'how.sub':
      'Ninguna fase depende de que compres la siguiente. Cada una termina con algo que es tuyo por completo: un documento, un repositorio, una versión publicada.',
    'how.led': 'Dirigido por',

    'work.eyebrow': 'Portafolio',
    'work.title': 'Nueve sistemas entregados, no nueve diapositivas.',
    'work.sub':
      'Cada proyecto de abajo llegó a usuarios reales: una obra, una clínica, un control de acceso, una ficha de tienda. Cada uno aparece una sola vez, con la decisión que lo hizo funcionar y lo que costó esa decisión.',
    'work.filterLabel': 'Filtrar por sector',
    'work.filterAll': 'Todos',
    'work.role': 'Rol',
    'work.outcome': 'Resultado',
    'work.stack': 'Stack',
    'work.caseStudy': 'Leer el caso de estudio',
    'work.viewAll': 'Ver todos los casos en marcocasanova.de',
    'work.empty': 'No hay proyectos en ese sector.',
    'work.countOne': 'proyecto',
    'work.countMany': 'proyectos',

    'principal.eyebrow': 'Quién firma',
    'principal.title': 'Los agentes van rápido. Un humano responde.',
    'principal.body':
      'La IA escribe mucho código plausible. La diferencia entre plausible y correcto es el criterio, y el criterio es lo que en realidad estás contratando. Cada decisión de arquitectura, cada esquema y cada versión que sale de Stratos One la revisa un ingeniero senior que pone su nombre debajo.',
    'principal.yearsLabel': 'años entregando software en producción',
    'principal.viewPortfolio': 'Ver la trayectoria completa',
    'principal.locationLabel': 'Con base en',
    'principal.stackLabel': 'Stack principal',
    'principal.stackValue': 'TypeScript · Node.js · Python · PostgreSQL · React Native · AWS',
    'principal.marketsLabel': 'Mercados',
    'principal.marketsValue': 'Alemania, Austria y remoto en husos horarios europeos',

    'engage.eyebrow': 'Formatos de colaboración',
    'engage.title': 'Tres formatos. Elige el más pequeño que responda tu pregunta.',
    'engage.shape1Title': 'Diagnóstico',
    'engage.shape1Duration': '1–2 semanas',
    'engage.shape1Body':
      'Un agente, una pregunta. Leemos el sistema, lo medimos y te entregamos un diagnóstico escrito con un plan priorizado. Termina en un documento, no en una cuota mensual.',
    'engage.shape1Agent': 'Normalmente Atlas o Sentinel',
    'engage.shape2Title': 'Desarrollo de alcance cerrado',
    'engage.shape2Duration': '6–12 semanas',
    'engage.shape2Body':
      'Una pieza definida del sistema entregada en producción: un pipeline de ingesta, una app móvil, una capa de API, una migración. Se entrega con documentación que tu equipo puede mantener.',
    'engage.shape2Agent': 'Vault · Forge · Relay',
    'engage.shape3Title': 'Negocio, de punta a punta',
    'engage.shape3Duration': 'desde 3 meses',
    'engage.shape3Body':
      'La cadena completa. Del modelo de dominio a la ficha en la tienda, con una base compartida construida para que tu segundo producto cueste una fracción del primero.',
    'engage.shape3Agent': 'El equipo completo',
    'engage.antiAgency':
      'Hablas directamente con el ingeniero que escribe el código. No hay account manager ni un equipo de juniors detrás de la demo.',

    'cta.title': 'Cuéntanos qué está ardiendo.',
    'cta.body':
      'Trae un diagrama de arquitectura, una consulta lenta, una revisión de tienda rechazada o una idea sin nada construido todavía. La primera conversación dura 30 minutos y no cuesta nada.',
    'cta.email': 'Escríbenos',
    'cta.call': 'Reservar 30 minutos',
    'cta.response': 'Tiempo de respuesta habitual: menos de 48 horas',

    'contact.title': 'Contacto',
    'contact.heading': 'Empieza por el problema, no por la solución.',
    'contact.sub':
      'El primer mensaje más útil es el que describe qué está fallando de verdad. Los diagramas de arquitectura son bienvenidos; un briefing pulido no hace falta.',
    'contact.directTitle': 'Directo',
    'contact.callTitle': 'Reservar una llamada',
    'contact.callDesc':
      '30 minutos, sin coste y sin presentación. Miramos tu problema y te decimos qué agente — si alguno — es el adecuado.',
    'contact.principalTitle': 'El ingeniero',
    'contact.principalDesc':
      'Trayectoria, casos de estudio y el razonamiento detrás de decisiones pasadas, al completo.',
    'contact.responseLabel': 'Tiempo de respuesta',
    'contact.responseValue': 'Menos de 48 horas, y responde el propio ingeniero',

    'agentsPage.title': 'El equipo',
    'agentsPage.sub':
      'Seis especializaciones. Cada una solo puede afirmar una capacidad que ya se entregó en un producto real — la evidencia está en cada tarjeta.',
    'agentsPage.back': 'Volver a la vista general',

    'footer.built': 'Construido con Astro. Estático, sin trackers, sin framework de cliente.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.principal': 'Un proyecto de Marco Casanova',

    'theme.toggle': 'Cambiar tema',
    'lang.switch': 'Cambiar idioma',

    '404.title': 'Página no encontrada',
    '404.subtitle': 'Esa ruta no existe. Puede que se haya movido.',
    '404.cta': 'Volver al inicio',
  },
  de: {
    'nav.agents': 'Agenten',
    'nav.how': 'Ablauf',
    'nav.work': 'Referenzen',
    'nav.contact': 'Kontakt',
    'nav.skipToContent': 'Zum Inhalt springen',
    'nav.menu': 'Menü',
    'nav.closeMenu': 'Menü schließen',
    'nav.cta': 'Gespräch buchen',

    'hero.eyebrow': 'KI-natives Produkt-Consulting · München',
    'hero.title': 'Wähle deinen Agenten.',
    'hero.titleAccent': 'Bring dein Business live.',
    'hero.subtitle':
      'Stratos One ist ein KI-Consulting-Studio, in dem du genau die Spezialisten wählst, die dein Projekt braucht — und ein Senior Engineer für alles geradesteht, was sie ausliefern. Vom ersten Domänenmodell bis zur App im Store.',
    'hero.ctaAgents': 'Agenten ansehen',
    'hero.ctaCall': '30 Minuten buchen',
    'hero.note': 'Jede Fähigkeit unten ist durch Software gedeckt, die bereits in Produktion läuft.',

    'agents.eyebrow': 'Das Team',
    'agents.title': 'Sechs Spezialisten. Du entscheidest, wer woran arbeitet.',
    'agents.sub':
      'Die meisten Agenturen verkaufen dir ein Team und stellen dir alles davon in Rechnung. Hier stellst du das Mandat selbst zusammen: ein Agent für eine zweiwöchige Diagnose oder die ganze Kette von der Architektur bis zur Store-Einreichung.',
    'agents.does': 'Liefert',
    'agents.proof': 'Bereits ausgeliefert',
    'agents.readMore': 'Gesamtes Team',
    'agents.select': 'Diesen Agenten wählen',

    'how.eyebrow': 'Ende zu Ende',
    'how.title': 'Vier Phasen — und nach jeder kannst du aufhören.',
    'how.sub':
      'Keine Phase setzt voraus, dass du die nächste kaufst. Jede endet mit etwas, das dir vollständig gehört — ein Dokument, ein Repository, ein Release.',
    'how.led': 'Geleitet von',

    'work.eyebrow': 'Referenzen',
    'work.title': 'Neun ausgelieferte Systeme, nicht neun Folien.',
    'work.sub':
      'Jedes Projekt unten hat echte Nutzer erreicht — eine Baustelle, eine Klinik, eine Einlasskontrolle, einen Store-Eintrag. Jedes steht genau einmal hier, mit der Entscheidung, die es tragfähig gemacht hat, und dem Preis dieser Entscheidung.',
    'work.filterLabel': 'Nach Branche filtern',
    'work.filterAll': 'Alle',
    'work.role': 'Rolle',
    'work.outcome': 'Ergebnis',
    'work.stack': 'Stack',
    'work.caseStudy': 'Fallstudie lesen',
    'work.viewAll': 'Alle Fallstudien auf marcocasanova.de',
    'work.empty': 'Keine Projekte in dieser Branche.',
    'work.countOne': 'Projekt',
    'work.countMany': 'Projekte',

    'principal.eyebrow': 'Wer unterschreibt',
    'principal.title': 'Die Agenten arbeiten schnell. Ein Mensch trägt die Verantwortung.',
    'principal.body':
      'KI schreibt viel plausiblen Code. Der Unterschied zwischen plausibel und richtig ist Urteilsvermögen — und Urteilsvermögen ist das, was du eigentlich kaufst. Jede Architekturentscheidung, jedes Schema und jedes Release, das Stratos One verlässt, wird von einem Senior Engineer geprüft, der seinen Namen daruntersetzt.',
    'principal.yearsLabel': 'Jahre Software in Produktion',
    'principal.viewPortfolio': 'Vollständige Referenzen ansehen',
    'principal.locationLabel': 'Standort',
    'principal.stackLabel': 'Kern-Stack',
    'principal.stackValue': 'TypeScript · Node.js · Python · PostgreSQL · React Native · AWS',
    'principal.marketsLabel': 'Märkte',
    'principal.marketsValue': 'Deutschland, Österreich und remote in europäischen Zeitzonen',

    'engage.eyebrow': 'Zusammenarbeit',
    'engage.title': 'Drei Formate. Nimm das kleinste, das deine Frage beantwortet.',
    'engage.shape1Title': 'Diagnose',
    'engage.shape1Duration': '1–2 Wochen',
    'engage.shape1Body':
      'Ein Agent, eine Frage. Wir lesen das System, messen es und übergeben eine schriftliche Diagnose mit priorisiertem Plan. Am Ende steht ein Dokument, kein Retainer.',
    'engage.shape1Agent': 'Meist Atlas oder Sentinel',
    'engage.shape2Title': 'Umsetzung mit festem Umfang',
    'engage.shape2Duration': '6–12 Wochen',
    'engage.shape2Body':
      'Ein klar definierter Teil des Systems in Produktion: eine Ingest-Pipeline, eine mobile App, eine API-Schicht, eine Migration. Übergeben mit Dokumentation, die dein Team pflegen kann.',
    'engage.shape2Agent': 'Vault · Forge · Relay',
    'engage.shape3Title': 'Business, Ende zu Ende',
    'engage.shape3Duration': 'ab 3 Monaten',
    'engage.shape3Body':
      'Die ganze Kette. Vom Domänenmodell bis zum Store-Eintrag, mit einer gemeinsamen Basis, die dein zweites Produkt zu einem Bruchteil des ersten macht.',
    'engage.shape3Agent': 'Das gesamte Team',
    'engage.antiAgency':
      'Du sprichst direkt mit dem Engineer, der den Code schreibt. Es gibt keinen Account Manager und kein Juniorteam hinter der Demo.',

    'cta.title': 'Sag uns, was gerade brennt.',
    'cta.body':
      'Bring ein Architekturdiagramm, eine langsame Query, eine abgelehnte Store-Prüfung oder eine Idee, zu der noch nichts gebaut ist. Das erste Gespräch dauert 30 Minuten und kostet nichts.',
    'cta.email': 'E-Mail schreiben',
    'cta.call': '30 Minuten buchen',
    'cta.response': 'Übliche Antwortzeit: unter 48 Stunden',

    'contact.title': 'Kontakt',
    'contact.heading': 'Fang beim Problem an, nicht bei der Lösung.',
    'contact.sub':
      'Die nützlichste erste Nachricht beschreibt, was tatsächlich schiefläuft. Architekturdiagramme sind willkommen; ein ausgefeiltes Briefing ist nicht nötig.',
    'contact.directTitle': 'Direkt',
    'contact.callTitle': 'Gespräch buchen',
    'contact.callDesc':
      '30 Minuten, kostenlos, ohne Foliensatz. Wir sehen uns dein Problem an und sagen dir, welcher Agent — wenn überhaupt — der richtige ist.',
    'contact.principalTitle': 'Der Engineer',
    'contact.principalDesc':
      'Referenzen, Fallstudien und die Begründungen hinter vergangenen Entscheidungen, vollständig.',
    'contact.responseLabel': 'Antwortzeit',
    'contact.responseValue': 'Unter 48 Stunden — und zwar vom Engineer selbst',

    'agentsPage.title': 'Das Team',
    'agentsPage.sub':
      'Sechs Spezialisierungen. Jede darf nur eine Fähigkeit behaupten, die bereits in einem echten Produkt ausgeliefert wurde — der Beleg steht auf jeder Karte.',
    'agentsPage.back': 'Zurück zur Übersicht',

    'footer.built': 'Gebaut mit Astro. Statisch, keine Tracker, kein Client-Framework.',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.principal': 'Ein Unternehmen von Marco Casanova',

    'theme.toggle': 'Design wechseln',
    'lang.switch': 'Sprache wechseln',

    '404.title': 'Seite nicht gefunden',
    '404.subtitle': 'Diese Route existiert nicht. Vielleicht wurde sie verschoben.',
    '404.cta': 'Zurück zur Startseite',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
