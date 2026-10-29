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
 *
 * ── Reading level ────────────────────────────────────────────────────────────
 * The reader is a founder, an operations lead or a business owner — someone who
 * owns the problem but does not write code. Every string here is written to be
 * understood by that person on a first read, with no engineering vocabulary
 * ("architecture", "backend", "API", "data-intensive") left unexplained. Where a
 * technical word is genuinely necessary it is followed by what it means in
 * plain terms, in the same sentence. Short sentences, one idea each.
 */
export const ui = {
  en: {
    'nav.solutions':
      'Solutions',
    'nav.howItWorks':
      'How It Works',
    'nav.experience':
      'Experience',
    'nav.about':
      'About',
    'nav.contact':
      'Contact',
    'nav.skipToContent':
      'Skip to content',
    'nav.menu':
      'Menu',
    'nav.cta':
      'Discuss your workflow',
    'hero.eyebrow':
      'AI agents · Software integrations · Senior engineering',
    'hero.title':
      'AI agents that',
    'hero.titleAccent':
      'move your business forward.',
    'hero.subtitle':
      'We build AI agents that handle enquiries, collect information and coordinate follow-up across your business tools. Senior engineering turns each workflow into a dependable system, with clear handoffs when a person needs to step in.',
    'hero.ctaPrimary':
      'Discuss your workflow',
    'hero.ctaSecondary':
      'See an example',
    'start.eyebrow':
      'Where we start',
    'start.title':
      'Turn incoming enquiries into actionable requests.',
    'start.desc':
      'Help your team spend less time answering routine questions and collecting missing information. An AI agent gathers the details, uses your approved information and routes a structured request to the right person.',
    'start.workflowLabel':
      'The workflow, step by step',
    'start.support':
      'Start with one channel, a defined workflow and a limited set of integrations. Expand when the results justify it.',
    'start.channels':
      'Voice, messaging and other channels are options we scope together; they are not part of this page’s example.',
    'start.capsTitle':
      'What sits behind it',
    'demo.eyebrow':
      'Example',
    'demo.title':
      'See how an enquiry becomes a structured request.',
    'demo.label':
      'Illustrative workflow — sample data, not a live customer deployment.',
    'demo.enquiryLabel':
      'Sample incoming enquiry',
    'demo.collectsLabel':
      'Information the agent collects',
    'demo.requestLabel':
      'Sample structured request',
    'demo.fieldHeader':
      'Field',
    'demo.valueHeader':
      'Sample value',
    'demo.handoffLabel':
      'Human handoff example',
    'demo.caption':
      'Your team receives the context needed to respond, with exceptions clearly flagged for review.',
    'people.title':
      'Automation with human judgment built in.',
    'people.agentsHeader':
      'AI agents can',
    'people.peopleHeader':
      'People remain responsible for',
    'people.note':
      'Stratos One handles the technical implementation, monitoring and agreed improvements. Your team handles business exceptions unless a separate service is agreed.',
    'packages.eyebrow':
      'Ways to work together',
    'packages.title':
      'Start with one workflow. Build on what works.',
    'packages.outputsLabel':
      'Typical outputs',
    'packages.scopeLabel':
      'Typical scope',
    'packages.cta':
      'Request a scoped proposal',
    'packages.note':
      'Your proposal defines ownership of customer-specific deliverables, licensing of reusable components and access to hosted services. Pricing is scoped per proposal.',
    'experience.title':
      'Engineering experience behind the automation.',
    'experience.sub':
      'Production systems, integrations and real-time data work. Each project is labelled with the capacity in which Marco worked on it; these are not all Stratos One customers.',
    'experience.contractor':
      'Marco’s experience as a contractor',
    'experience.employee':
      'Marco’s experience as an employee',
    'experience.independent':
      'Independent work',
    'founder.title':
      'Founded and led by Marco Casanova.',
    'founder.body':
      'Stratos One brings together AI automation and more than 15 years of software engineering experience. Founder Marco Casanova has built applications across industrial IoT, healthcare, e-commerce and enterprise software, connecting complex systems and supporting them in production.',
    'founder.link':
      'Explore Marco’s experience',
    'founder.accountability':
      'You work directly with the engineer responsible for your implementation.',
    'founder.eyebrow':
      'Founder',
    'principal.locationLabel':
      'Based in',
    'principal.marketsLabel':
      'Where we work',
    'principal.marketsValue':
      'Germany, Austria, and remotely across Europe',
    'contact.heading':
      'Which workflow would you like to improve?',
    'contact.sub':
      'Tell us where your team spends time collecting information, moving it between tools or coordinating follow-up. We can explore whether a focused AI workflow would help.',
    'contact.name':
      'Name',
    'contact.email':
      'Work email',
    'contact.company':
      'Company',
    'contact.workflow':
      'Which workflow would you like to improve?',
    'contact.tools':
      'Which tools do you currently use?',
    'contact.optional':
      'Optional',
    'contact.submit':
      'Discuss your workflow',
    'contact.errorRequired':
      'Please fill in this field.',
    'contact.errorEmail':
      'Please enter a valid email address.',
    'contact.errorSummary':
      'Please check the highlighted fields.',
    'contact.opened':
      'Your email app should now show a draft. Nothing has been sent until you send it from there. If no draft opened, write to the address below.',
    'contact.formNote':
      'This form prepares an email draft in your own email app; nothing is sent from this page. Please do not include sensitive personal data.',
    'contact.emailSubject':
      'Workflow enquiry — Stratos One',
    'contact.alsoTitle':
      'Prefer another route?',
    'contact.directTitle':
      'Email',
    'contact.callTitle':
      'Book a call',
    'contact.callDesc':
      'A 30-minute call to talk through your workflow and see whether we are the right people to help.',
    'contact.principalTitle':
      'About Marco',
    'contact.principalDesc':
      'Past projects and the thinking behind them, in full.',
    'contact.responseLabel':
      'How fast we reply',
    'contact.responseValue':
      'Under 48 hours, from Marco himself',
    'contact.privacyNote':
      'Booking a call opens Calendly, an outside scheduling tool, in a new tab. This site sets no cookies and uses no tracking.',
    'cta.call':
      'Book a 30-minute call',
    'cta.email':
      'Email us',
    'seo.homeTitle':
      'AI Agents & Business Automation',
    'seo.homeDesc':
      'AI agents for enquiries, information collection and follow-up. Stratos One connects your business tools with senior engineering and clear human handoffs.',
    'seo.contactTitle':
      'Discuss Your Workflow',
    'seo.contactDesc':
      'Tell us which workflow takes too much manual coordination. We can explore whether a focused AI workflow would help.',
    'workPage.eyebrow':
      'Project archive',
    'workPage.title':
      'The projects behind the engineering.',
    'workPage.sub':
      'Nine projects across healthcare, factories and logistics, event tickets, shops and online marketplaces. Where it is known, each card says whether Marco worked on it independently, as a contractor or as an employee.',

    'work.role': 'What we did',
    'work.outcome': 'What changed',
    'work.stack': 'Built with',
    'work.caseStudy': 'See the full story',
    'work.seeAll': 'See all nine projects',
    'work.filterLabel': 'Filter by industry',
    'work.filterAll': 'All',
    'work.viewAll': 'See every project on marcocasanova.de',
    'work.empty': 'No projects in that industry yet.',
    'work.countOne': 'project',
    'work.countMany': 'projects',
    'workPage.back': 'Back to the homepage',
    'footer.built': 'A fast, simple website — no trackers watching you.',
    'footer.rights': 'All rights reserved.',
    'footer.principal': 'A Marco Casanova venture',
    'footer.navLabel': 'Footer',
    'footer.legalLabel': 'Legal',
    'legal.imprintNav': 'Imprint',
    'legal.privacyNav': 'Privacy',
    'legal.lastUpdated': 'Last updated',
    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Change language',
    'seo.workTitle': 'Recent Projects',
    'seo.workDesc':
      'Nine real projects — healthcare, factories, event tickets, online shops and marketplaces — with what was built and what changed for the business.',
    'seo.imprintTitle': 'Imprint',
    'seo.imprintDesc':
      'Provider identification for stratos-one.eu under §5 DDG, including the responsible party for content under §18 (2) MStV.',
    'seo.privacyTitle': 'Privacy Notice',
    'seo.privacyDesc':
      'How stratos-one.eu handles personal data: no cookies, no analytics and no third-party scripts. What the host logs, and the rights you have under the GDPR.',
    '404.title': 'Page not found',
    '404.subtitle': 'That page does not exist. It may have moved.',
    '404.cta': 'Back home',
  },
  es: {
    'nav.solutions':
      'Soluciones',
    'nav.howItWorks':
      'Cómo funciona',
    'nav.experience':
      'Experiencia',
    'nav.about':
      'Sobre nosotros',
    'nav.contact':
      'Contacto',
    'nav.skipToContent':
      'Ir al contenido',
    'nav.menu':
      'Menú',
    'nav.cta':
      'Habla de tu flujo de trabajo',
    'hero.eyebrow':
      'Agentes de IA · Integraciones de software · Ingeniería senior',
    'hero.title':
      'Agentes de IA que',
    'hero.titleAccent':
      'hacen avanzar tu negocio.',
    'hero.subtitle':
      'Construimos agentes de IA que atienden consultas, recogen información y coordinan el seguimiento entre las herramientas de tu negocio. La ingeniería senior convierte cada flujo de trabajo en un sistema fiable, con traspasos claros cuando una persona debe intervenir.',
    'hero.ctaPrimary':
      'Habla de tu flujo de trabajo',
    'hero.ctaSecondary':
      'Ver un ejemplo',
    'start.eyebrow':
      'Por dónde empezamos',
    'start.title':
      'Convierte las consultas entrantes en solicitudes accionables.',
    'start.desc':
      'Ayuda a tu equipo a dedicar menos tiempo a responder preguntas rutinarias y a reunir datos que faltan. Un agente de IA recoge los detalles, usa tu información aprobada y envía una solicitud estructurada a la persona adecuada.',
    'start.workflowLabel':
      'El flujo de trabajo, paso a paso',
    'start.support':
      'Empieza con un canal, un flujo de trabajo definido y un conjunto limitado de integraciones. Amplía cuando los resultados lo justifiquen.',
    'start.channels':
      'La voz, la mensajería y otros canales son opciones que definimos juntos; no forman parte del ejemplo de esta página.',
    'start.capsTitle':
      'Qué hay detrás',
    'demo.eyebrow':
      'Ejemplo',
    'demo.title':
      'Mira cómo una consulta se convierte en una solicitud estructurada.',
    'demo.label':
      'Flujo de trabajo ilustrativo — datos de ejemplo, no un despliegue real con un cliente.',
    'demo.enquiryLabel':
      'Consulta entrante de ejemplo',
    'demo.collectsLabel':
      'Información que recoge el agente',
    'demo.requestLabel':
      'Solicitud estructurada de ejemplo',
    'demo.fieldHeader':
      'Campo',
    'demo.valueHeader':
      'Valor de ejemplo',
    'demo.handoffLabel':
      'Ejemplo de traspaso a una persona',
    'demo.caption':
      'Tu equipo recibe el contexto necesario para responder, con las excepciones claramente marcadas para su revisión.',
    'people.title':
      'Automatización con criterio humano integrado.',
    'people.agentsHeader':
      'Los agentes de IA pueden',
    'people.peopleHeader':
      'Las personas siguen siendo responsables de',
    'people.note':
      'Stratos One se ocupa de la implementación técnica, la monitorización y las mejoras acordadas. Tu equipo se ocupa de las excepciones del negocio, salvo que se acuerde un servicio aparte.',
    'packages.eyebrow':
      'Formas de trabajar juntos',
    'packages.title':
      'Empieza con un flujo de trabajo. Construye sobre lo que funciona.',
    'packages.outputsLabel':
      'Entregables habituales',
    'packages.scopeLabel':
      'Alcance habitual',
    'packages.cta':
      'Solicita una propuesta con alcance definido',
    'packages.note':
      'Tu propuesta define la titularidad de los entregables específicos para el cliente, la licencia de los componentes reutilizables y el acceso a los servicios alojados. El precio se define en cada propuesta.',
    'experience.title':
      'La experiencia de ingeniería detrás de la automatización.',
    'experience.sub':
      'Sistemas en producción, integraciones y trabajo con datos en tiempo real. Cada proyecto indica en qué calidad trabajó Marco en él; no todos son clientes de Stratos One.',
    'experience.contractor':
      'Experiencia de Marco como contratista',
    'experience.employee':
      'Experiencia de Marco como empleado',
    'experience.independent':
      'Trabajo independiente',
    'founder.title':
      'Fundada y dirigida por Marco Casanova.',
    'founder.body':
      'Stratos One une la automatización con IA y más de 15 años de experiencia en ingeniería de software. Su fundador, Marco Casanova, ha construido aplicaciones de IoT industrial, salud, comercio electrónico y software empresarial, conectando sistemas complejos y manteniéndolos en producción.',
    'founder.link':
      'Conoce la experiencia de Marco',
    'founder.accountability':
      'Trabajas directamente con el ingeniero responsable de tu implementación.',
    'founder.eyebrow':
      'Fundador',
    'principal.locationLabel':
      'Con base en',
    'principal.marketsLabel':
      'Dónde trabajamos',
    'principal.marketsValue':
      'Alemania, Austria y en remoto en toda Europa',
    'contact.heading':
      '¿Qué flujo de trabajo te gustaría mejorar?',
    'contact.sub':
      'Cuéntanos dónde dedica tu equipo tiempo a recoger información, pasarla de una herramienta a otra o coordinar el seguimiento. Podemos explorar si un flujo de trabajo de IA enfocado ayudaría.',
    'contact.name':
      'Name',
    'contact.email':
      'Correo de trabajo',
    'contact.company':
      'Empresa',
    'contact.workflow':
      '¿Qué flujo de trabajo te gustaría mejorar?',
    'contact.tools':
      '¿Qué herramientas usas actualmente?',
    'contact.optional':
      'Opcional',
    'contact.submit':
      'Habla de tu flujo de trabajo',
    'contact.errorRequired':
      'Rellena este campo.',
    'contact.errorEmail':
      'Introduce un correo electrónico válido.',
    'contact.errorSummary':
      'Revisa los campos marcados.',
    'contact.opened':
      'Tu aplicación de correo debería mostrar ahora un borrador. No se ha enviado nada hasta que lo envíes desde allí. Si no se abrió ningún borrador, escribe a la dirección de abajo.',
    'contact.formNote':
      'Este formulario prepara un borrador de correo en tu propia aplicación; desde esta página no se envía nada. No incluyas datos personales sensibles.',
    'contact.emailSubject':
      'Consulta sobre un flujo de trabajo — Stratos One',
    'contact.alsoTitle':
      '¿Prefieres otra vía?',
    'contact.directTitle':
      'Correo electrónico',
    'contact.callTitle':
      'Reserva una llamada',
    'contact.callDesc':
      'Una llamada de 30 minutos para repasar tu flujo de trabajo y ver si somos las personas adecuadas para ayudarte.',
    'contact.principalTitle':
      'Sobre Marco',
    'contact.principalDesc':
      'Proyectos anteriores y el razonamiento detrás de ellos, al completo.',
    'contact.responseLabel':
      'Cuánto tardamos en responder',
    'contact.responseValue':
      'Menos de 48 horas, de parte del propio Marco',
    'contact.privacyNote':
      'Reservar una llamada abre Calendly, una herramienta externa de citas, en una pestaña nueva. Esta web no usa cookies ni seguimiento.',
    'cta.call':
      'Reserva una llamada de 30 minutos',
    'cta.email':
      'Escríbenos',
    'seo.homeTitle':
      'Agentes de IA y automatización de negocio',
    'seo.homeDesc':
      'Agentes de IA para consultas, recogida de información y seguimiento. Stratos One conecta las herramientas de tu negocio con ingeniería senior y traspasos claros a personas.',
    'seo.contactTitle':
      'Habla de tu flujo de trabajo',
    'seo.contactDesc':
      'Cuéntanos qué flujo de trabajo requiere demasiada coordinación manual. Podemos explorar si un flujo de IA enfocado ayudaría.',
    'workPage.eyebrow':
      'Archivo de proyectos',
    'workPage.title':
      'Los proyectos detrás de la ingeniería.',
    'workPage.sub':
      'Nueve proyectos de salud, fábricas y logística, entradas para eventos, tiendas y marketplaces online. Cuando se conoce, cada ficha indica si Marco trabajó de forma independiente, como contratista o como empleado.',

    'work.role': 'Qué hicimos',
    'work.outcome': 'Qué cambió',
    'work.stack': 'Construido con',
    'work.caseStudy': 'Ver la historia completa',
    'work.seeAll': 'Ver los nueve proyectos',
    'work.filterLabel': 'Filtrar por sector',
    'work.filterAll': 'Todos',
    'work.viewAll': 'Ver todos los proyectos en marcocasanova.de',
    'work.empty': 'Todavía no hay proyectos en ese sector.',
    'work.countOne': 'proyecto',
    'work.countMany': 'proyectos',
    'workPage.back': 'Volver al inicio',
    'footer.built': 'Una web rápida y sencilla — sin rastreadores vigilándote.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.principal': 'Un proyecto de Marco Casanova',
    'footer.navLabel': 'Pie de página',
    'footer.legalLabel': 'Legal',
    'legal.imprintNav': 'Aviso legal',
    'legal.privacyNav': 'Privacidad',
    'legal.lastUpdated': 'Última actualización',
    'theme.toggle': 'Cambiar tema',
    'lang.switch': 'Cambiar idioma',
    'seo.workTitle': 'Proyectos Recientes',
    'seo.workDesc':
      'Nueve proyectos reales — salud, fábricas, entradas para eventos, tiendas online y marketplaces — con lo que construimos y lo que cambió para el negocio.',
    'seo.imprintTitle': 'Aviso legal',
    'seo.imprintDesc':
      'Identificación del prestador de stratos-one.eu según el §5 DDG, incluido el responsable de contenidos según el §18 (2) MStV.',
    'seo.privacyTitle': 'Política de privacidad',
    'seo.privacyDesc':
      'Cómo trata stratos-one.eu los datos personales: sin cookies, sin analítica y sin scripts de terceros. Qué registra el hosting y qué derechos te da el RGPD.',
    '404.title': 'Página no encontrada',
    '404.subtitle': 'Esa página no existe. Puede que se haya movido.',
    '404.cta': 'Volver al inicio',
  },
  de: {
    'nav.solutions':
      'Lösungen',
    'nav.howItWorks':
      'So funktioniert es',
    'nav.experience':
      'Erfahrung',
    'nav.about':
      'Über uns',
    'nav.contact':
      'Kontakt',
    'nav.skipToContent':
      'Zum Inhalt springen',
    'nav.menu':
      'Menü',
    'nav.cta':
      'Workflow besprechen',
    'hero.eyebrow':
      'KI-Agenten · Software-Integrationen · Senior Engineering',
    'hero.title':
      'KI-Agenten, die',
    'hero.titleAccent':
      'dein Unternehmen voranbringen.',
    'hero.subtitle':
      'Wir bauen KI-Agenten, die Anfragen bearbeiten, Informationen erfassen und das Nachfassen über deine Geschäftswerkzeuge hinweg koordinieren. Senior Engineering macht aus jedem Workflow ein verlässliches System, mit klaren Übergaben, wenn ein Mensch übernehmen muss.',
    'hero.ctaPrimary':
      'Workflow besprechen',
    'hero.ctaSecondary':
      'Beispiel ansehen',
    'start.eyebrow':
      'Womit wir starten',
    'start.title':
      'Aus eingehenden Anfragen werden umsetzbare Aufträge.',
    'start.desc':
      'Dein Team verbringt weniger Zeit mit Routinefragen und dem Nachfragen fehlender Angaben. Ein KI-Agent sammelt die Details, nutzt deine freigegebenen Informationen und leitet eine strukturierte Anfrage an die richtige Person weiter.',
    'start.workflowLabel':
      'Der Ablauf, Schritt für Schritt',
    'start.support':
      'Starte mit einem Kanal, einem klar umrissenen Workflow und wenigen Anbindungen. Erweitere, wenn die Ergebnisse es rechtfertigen.',
    'start.channels':
      'Telefon, Messaging und weitere Kanäle sind Optionen, die wir gemeinsam abstecken; sie sind nicht Teil des Beispiels auf dieser Seite.',
    'start.capsTitle':
      'Was dahintersteckt',
    'demo.eyebrow':
      'Beispiel',
    'demo.title':
      'So wird aus einer Anfrage ein strukturierter Auftrag.',
    'demo.label':
      'Illustrativer Ablauf — Beispieldaten, kein produktiver Kundeneinsatz.',
    'demo.enquiryLabel':
      'Beispiel einer eingehenden Anfrage',
    'demo.collectsLabel':
      'Angaben, die der Agent erfasst',
    'demo.requestLabel':
      'Beispiel eines strukturierten Auftrags',
    'demo.fieldHeader':
      'Feld',
    'demo.valueHeader':
      'Beispielwert',
    'demo.handoffLabel':
      'Beispiel für die Übergabe an einen Menschen',
    'demo.caption':
      'Dein Team erhält den nötigen Kontext für die Antwort, Ausnahmen sind zur Prüfung klar gekennzeichnet.',
    'people.title':
      'Automatisierung mit eingebautem menschlichem Urteil.',
    'people.agentsHeader':
      'KI-Agenten können',
    'people.peopleHeader':
      'Menschen bleiben verantwortlich für',
    'people.note':
      'Stratos One übernimmt die technische Umsetzung, die Überwachung und die vereinbarten Verbesserungen. Dein Team kümmert sich um geschäftliche Ausnahmen, sofern kein separater Service vereinbart ist.',
    'packages.eyebrow':
      'Möglichkeiten der Zusammenarbeit',
    'packages.title':
      'Starte mit einem Workflow. Baue auf dem auf, was funktioniert.',
    'packages.outputsLabel':
      'Typische Ergebnisse',
    'packages.scopeLabel':
      'Typischer Umfang',
    'packages.cta':
      'Angebot mit klarem Umfang anfragen',
    'packages.note':
      'Dein Angebot regelt, wem kundenspezifische Ergebnisse gehören, wie wiederverwendbare Komponenten lizenziert werden und wie der Zugang zu gehosteten Diensten aussieht. Preise werden je Angebot festgelegt.',
    'experience.title':
      'Die Engineering-Erfahrung hinter der Automatisierung.',
    'experience.sub':
      'Produktivsysteme, Integrationen und Arbeit mit Echtzeitdaten. Jedes Projekt zeigt, in welcher Rolle Marco daran gearbeitet hat; nicht alle sind Kunden von Stratos One.',
    'experience.contractor':
      'Marcos Erfahrung als Auftragnehmer',
    'experience.employee':
      'Marcos Erfahrung als Angestellter',
    'experience.independent':
      'Eigenständige Arbeit',
    'founder.title':
      'Gegründet und geleitet von Marco Casanova.',
    'founder.body':
      'Stratos One verbindet KI-Automatisierung mit mehr als 15 Jahren Erfahrung in der Softwareentwicklung. Gründer Marco Casanova hat Anwendungen in den Bereichen Industrie-IoT, Gesundheitswesen, E-Commerce und Unternehmenssoftware gebaut, komplexe Systeme verbunden und im Betrieb betreut.',
    'founder.link':
      'Marcos Erfahrung ansehen',
    'founder.accountability':
      'Du arbeitest direkt mit dem Ingenieur, der für deine Umsetzung verantwortlich ist.',
    'founder.eyebrow':
      'Gründer',
    'principal.locationLabel':
      'Standort',
    'principal.marketsLabel':
      'Wo wir arbeiten',
    'principal.marketsValue':
      'Deutschland, Österreich und remote in ganz Europa',
    'contact.heading':
      'Welchen Workflow möchtest du verbessern?',
    'contact.sub':
      'Erzähl uns, wo dein Team Zeit damit verbringt, Informationen zu sammeln, zwischen Werkzeugen zu verschieben oder das Nachfassen zu koordinieren. Wir prüfen gemeinsam, ob ein fokussierter KI-Workflow helfen würde.',
    'contact.name':
      'Name',
    'contact.email':
      'Geschäftliche E-Mail',
    'contact.company':
      'Unternehmen',
    'contact.workflow':
      'Welchen Workflow möchtest du verbessern?',
    'contact.tools':
      'Welche Werkzeuge nutzt du aktuell?',
    'contact.optional':
      'Optional',
    'contact.submit':
      'Workflow besprechen',
    'contact.errorRequired':
      'Bitte fülle dieses Feld aus.',
    'contact.errorEmail':
      'Bitte gib eine gültige E-Mail-Adresse ein.',
    'contact.errorSummary':
      'Bitte prüfe die markierten Felder.',
    'contact.opened':
      'Deine E-Mail-App sollte jetzt einen Entwurf anzeigen. Es wurde nichts gesendet, bis du ihn dort abschickst. Falls kein Entwurf erschienen ist, schreib an die Adresse unten.',
    'contact.formNote':
      'Dieses Formular erstellt einen E-Mail-Entwurf in deiner eigenen E-Mail-App; von dieser Seite wird nichts gesendet. Bitte gib keine sensiblen personenbezogenen Daten an.',
    'contact.emailSubject':
      'Workflow-Anfrage — Stratos One',
    'contact.alsoTitle':
      'Lieber ein anderer Weg?',
    'contact.directTitle':
      'E-Mail',
    'contact.callTitle':
      'Gespräch buchen',
    'contact.callDesc':
      'Ein 30-minütiges Gespräch, um deinen Workflow durchzugehen und zu klären, ob wir die Richtigen für dich sind.',
    'contact.principalTitle':
      'Über Marco',
    'contact.principalDesc':
      'Frühere Projekte und die Überlegungen dahinter, vollständig.',
    'contact.responseLabel':
      'Antwortzeit',
    'contact.responseValue':
      'Unter 48 Stunden, direkt von Marco',
    'contact.privacyNote':
      'Die Buchung eines Gesprächs öffnet Calendly, ein externes Terminwerkzeug, in einem neuen Tab. Diese Seite setzt keine Cookies und nutzt kein Tracking.',
    'cta.call':
      '30-Minuten-Gespräch buchen',
    'cta.email':
      'Schreib uns',
    'seo.homeTitle':
      'KI-Agenten & Business-Automatisierung',
    'seo.homeDesc':
      'KI-Agenten für Anfragen, Informationserfassung und Nachfassen. Stratos One verbindet deine Geschäftswerkzeuge mit Senior Engineering und klaren Übergaben an Menschen.',
    'seo.contactTitle':
      'Workflow besprechen',
    'seo.contactDesc':
      'Erzähl uns, welcher Workflow zu viel manuelle Abstimmung braucht. Wir prüfen, ob ein fokussierter KI-Workflow helfen würde.',
    'workPage.eyebrow':
      'Projektarchiv',
    'workPage.title':
      'Die Projekte hinter dem Engineering.',
    'workPage.sub':
      'Neun Projekte aus Gesundheitswesen, Industrie und Logistik, Event-Tickets, Shops und Online-Marktplätzen. Wo bekannt, zeigt jede Karte, ob Marco eigenständig, als Auftragnehmer oder als Angestellter daran gearbeitet hat.',

    'work.role': 'Was wir gemacht haben',
    'work.outcome': 'Was sich verändert hat',
    'work.stack': 'Gebaut mit',
    'work.caseStudy': 'Ganze Geschichte ansehen',
    'work.seeAll': 'Alle neun Projekte ansehen',
    'work.filterLabel': 'Nach Branche filtern',
    'work.filterAll': 'Alle',
    'work.viewAll': 'Alle Projekte auf marcocasanova.de',
    'work.empty': 'Noch keine Projekte in dieser Branche.',
    'work.countOne': 'Projekt',
    'work.countMany': 'Projekte',
    'workPage.back': 'Zurück zur Startseite',
    'footer.built': 'Eine schnelle, einfache Website — ohne Tracker, die dich beobachten.',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.principal': 'Ein Unternehmen von Marco Casanova',
    'footer.navLabel': 'Fußzeile',
    'footer.legalLabel': 'Rechtliches',
    'legal.imprintNav': 'Impressum',
    'legal.privacyNav': 'Datenschutz',
    'legal.lastUpdated': 'Zuletzt aktualisiert',
    'theme.toggle': 'Design wechseln',
    'lang.switch': 'Sprache wechseln',
    'seo.workTitle': 'Aktuelle Projekte',
    'seo.workDesc':
      'Neun echte Projekte — Gesundheitswesen, Industrie, Ticketing, Online-Shops und Marktplätze — mit dem, was wir gebaut haben und was sich für das Unternehmen verändert hat.',
    'seo.imprintTitle': 'Impressum',
    'seo.imprintDesc':
      'Anbieterkennzeichnung für stratos-one.eu nach §5 DDG, einschließlich der nach §18 (2) MStV verantwortlichen Person für den Inhalt.',
    'seo.privacyTitle': 'Datenschutzerklärung',
    'seo.privacyDesc':
      'Wie stratos-one.eu mit personenbezogenen Daten umgeht: keine Cookies, keine Analytics, keine Skripte Dritter. Was der Hoster protokolliert und welche Rechte die DSGVO gibt.',
    '404.title': 'Seite nicht gefunden',
    '404.subtitle': 'Diese Seite existiert nicht. Vielleicht wurde sie verschoben.',
    '404.cta': 'Zurück zur Startseite',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
