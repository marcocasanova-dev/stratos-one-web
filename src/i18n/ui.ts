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
    'nav.work': 'Our work',
    'nav.offers': 'How we can help',
    'nav.capabilities': 'What we do',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',
    'nav.menu': 'Menu',
    'nav.cta': 'Tell us your problem',

    'hero.eyebrow': 'Software help for growing businesses · Munich · Works with EU companies',
    'hero.title': 'When your app or website',
    'hero.titleAccent': 'needs to work — and keep working.',
    'hero.subtitle':
      'I build and fix the software behind your business: your website, your app, and the systems that keep your data correct. You talk to one person from start to finish, and that person is responsible for getting it right.',
    'hero.ctaPrimary': 'Tell us your problem',
    'hero.ctaSecondary': 'See what we have built',
    'hero.proofLine':
      'Munich-based, working with companies across Europe',
    'hero.note':
      'Every example on this page is something already used by real customers today — not a mock-up.',

    'situations.eyebrow': 'Does this sound familiar?',
    'situations.title':
      'Common moments when businesses reach out to us.',

    'work.eyebrow': 'Recent projects',
    'work.title': 'Three examples, and what got better because of them.',
    'work.sub':
      'Real projects for real businesses, in plain terms: what the business needed, what we built, and what changed afterward. Where we can show the full story we link to it; where we cannot, we simply do not link, rather than sending you to a broken page.',
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

    'workPage.eyebrow': 'All our work',
    'workPage.title': 'Every project we have shipped, and what it took.',
    'workPage.sub':
      'Nine projects across healthcare, factories and logistics, event tickets, shops, and online marketplaces. Each one is listed once, with the hard choice that made it work and what that choice cost.',
    'workPage.back': 'Back to the homepage',

    'offers.eyebrow': 'How we can help',
    'offers.title': 'Three ways to work together. Start small if you are not sure yet.',
    'offers.sub':
      'Every option below leaves you with something real and useful — a written plan, a working feature, or finished software your own team can keep running. You are never forced to buy the next step.',
    'offers.includes': 'What you get',
    'offers.note':
      'Before we start, we agree in writing exactly what we are doing and what it costs — so you know the price of finding out whether this is a good fit, upfront.',
    'offers.cta': 'Start with a quick check-up',

    'process.eyebrow': 'How a project works',
    'process.title': 'Four steps. You can stop after any of them.',
    'process.sub':
      'You are never locked into the next step. Each one finishes with something that belongs to you — a plan, working code, or software that is live for your customers.',
    'process.led': 'Focus',

    'caps.eyebrow': 'What we do',
    'caps.title': 'Six kinds of work. One person responsible for all of it.',
    'caps.sub':
      'Not six employees, and not automated software doing the work for you. These are the six kinds of problems we solve — you can hire us for just one, or for the whole journey from idea to launch.',
    'caps.does': 'What you get',
    'caps.proof': 'Proven on a real project',
    'caps.more': 'See all six in detail',

    'capsPage.eyebrow': 'What we do',
    'capsPage.title': 'Six kinds of work. One person responsible for all of it.',
    'capsPage.sub':
      'Each one below is something we have already done for a real business — we only list what we can actually show you working. Hire us for one, or for the full journey from idea to launch.',
    'capsPage.back': 'Back to the homepage',

    'principal.eyebrow': 'Who is responsible',
    'principal.title': 'I use modern tools. I make the decisions myself.',
    'principal.body':
      'Modern tools (including AI) help write code faster, but they also make mistakes that look correct at first glance. Every important decision, every piece of code that really matters, and everything before it goes live is checked by me personally — the same person you spoke to on the first call is the one who signs off before your customers see it.',
    'principal.aiPolicyLabel': 'How we handle your data',
    'principal.aiPolicy':
      'We may use AI tools to work faster, when your company is comfortable with that. The important decisions — how the system is built, how it is kept secure, and what actually goes live — are always made by a person, not by AI. Your confidential information is never shared with outside AI tools without asking you first.',
    'principal.viewPortfolio': 'See everything we have built',
    'principal.locationLabel': 'Based in',
    'principal.stackLabel': 'Tools we use',
    'principal.stackValue': 'Modern, widely-used tools — details on request if it matters to you',
    'principal.marketsLabel': 'Where we work',
    'principal.marketsValue': 'Germany, Austria, and remotely across Europe',

    'faq.eyebrow': 'Before you reach out',
    'faq.title': 'Questions people usually ask first.',

    'cta.title': 'Tell us what is not working — or what you want to build.',
    'cta.body':
      'A screenshot, a rough sketch, or just a sentence describing the problem is enough to start. The first conversation is 30 minutes, it is free, and if we are not the right fit, we will tell you honestly on that same call.',
    'cta.email': 'Email us your problem',
    'cta.call': 'Book a free 30-minute call',
    'cta.response': 'We usually reply within 48 hours — and you will hear from the person doing the work',

    'contact.heading': 'Tell us what is not working — or what you want to build.',
    'contact.sub':
      'The most useful first message is a simple one: what is going wrong, in your own words. You do not need diagrams or a formal write-up.',
    'contact.promptTitle': 'Four questions are all we need to get started',
    'contact.prompt1': 'What needs to work better, or get built?',
    'contact.prompt2': 'What is stuck or broken right now?',
    'contact.prompt3': 'What software or app is this about?',
    'contact.prompt4': 'Is there a date you are working toward?',
    'contact.emailSubject': 'Free 30-minute call — Stratos One',
    'contact.directTitle': 'Email',
    'contact.callTitle': 'Book a call',
    'contact.callDesc':
      '30 minutes, free, no sales pitch. We look at your problem together and figure out honestly whether we are the right people to help.',
    'contact.principalTitle': 'About Marco',
    'contact.principalDesc':
      'Past projects and the thinking behind them, in full — see everything before you decide.',
    'contact.responseLabel': 'How fast we reply',
    'contact.responseValue': 'Under 48 hours, from Marco himself',
    'contact.privacyNote':
      'Booking a call opens Calendly, an outside scheduling tool, in a new tab. Nothing you type on this page is sent anywhere — there is no contact form, no tracking and no cookies here.',

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

    'seo.homeTitle': 'Software Help for Growing Businesses in Munich',
    'seo.homeDesc':
      'I build and fix the websites, apps and business software behind growing companies — one person, responsible from start to finish. Munich, working across the EU.',
    'seo.workTitle': 'Recent Projects',
    'seo.workDesc':
      'Nine real projects — healthcare, factories, event tickets, online shops and marketplaces — with what we built and what changed for the business.',
    'seo.capsTitle': 'What We Do',
    'seo.capsDesc':
      'Planning, building, keeping data safe, launching and getting found online — six kinds of work, each proven on a real project already in use.',
    'seo.contactTitle': 'Tell Us About Your Project',
    'seo.contactDesc':
      'Got a website or app that needs fixing, or an idea you want built? Book a free 30-minute call with Marco, based in Munich. We reply within 48 hours.',
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
    'nav.work': 'Nuestro trabajo',
    'nav.offers': 'Cómo podemos ayudarte',
    'nav.capabilities': 'Qué hacemos',
    'nav.contact': 'Contacto',
    'nav.skipToContent': 'Ir al contenido',
    'nav.menu': 'Menú',
    'nav.cta': 'Cuéntanos tu problema',

    'hero.eyebrow': 'Ayuda con software para negocios en crecimiento · Múnich · Trabajamos con empresas de toda la UE',
    'hero.title': 'Cuando tu app o tu web',
    'hero.titleAccent': 'tiene que funcionar — y seguir funcionando.',
    'hero.subtitle':
      'Construyo y arreglo el software detrás de tu negocio: tu web, tu app, y los sistemas que mantienen tus datos correctos. Hablas con una sola persona de principio a fin, y esa persona es la responsable de que todo funcione.',
    'hero.ctaPrimary': 'Cuéntanos tu problema',
    'hero.ctaSecondary': 'Ver lo que hemos construido',
    'hero.proofLine':
      'Con base en Múnich, trabajando con empresas de toda Europa',
    'hero.note':
      'Cada ejemplo de esta página lo usan ya clientes reales hoy — no es una maqueta.',

    'situations.eyebrow': '¿Te suena esto?',
    'situations.title':
      'Los momentos más habituales en los que un negocio nos escribe.',

    'work.eyebrow': 'Proyectos recientes',
    'work.title': 'Tres ejemplos, y qué mejoró gracias a ellos.',
    'work.sub':
      'Proyectos reales para negocios reales, contados sin tecnicismos: qué necesitaba el negocio, qué construimos, y qué cambió después. Donde podemos mostrarte la historia completa, la enlazamos; donde no, simplemente no ponemos enlace, en vez de mandarte a una página rota.',
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

    'workPage.eyebrow': 'Todo nuestro trabajo',
    'workPage.title': 'Cada proyecto que hemos entregado, y lo que costó.',
    'workPage.sub':
      'Nueve proyectos en salud, fábricas y logística, entradas para eventos, tiendas y marketplaces online. Cada uno aparece una vez, con la decisión difícil que lo hizo funcionar y lo que esa decisión costó.',
    'workPage.back': 'Volver al inicio',

    'offers.eyebrow': 'Cómo podemos ayudarte',
    'offers.title': 'Tres formas de trabajar juntos. Empieza por lo pequeño si aún no lo tienes claro.',
    'offers.sub':
      'Cada opción de abajo te deja algo real y útil: un plan por escrito, una función que ya funciona, o software terminado que tu propio equipo puede mantener. Nunca te obligamos a comprar el siguiente paso.',
    'offers.includes': 'Qué recibes',
    'offers.note':
      'Antes de empezar, acordamos por escrito exactamente qué vamos a hacer y qué cuesta — así sabes de antemano el precio de averiguar si esto encaja contigo.',
    'offers.cta': 'Empieza con una revisión rápida',

    'process.eyebrow': 'Cómo funciona un proyecto',
    'process.title': 'Cuatro pasos. Puedes parar después de cualquiera de ellos.',
    'process.sub':
      'Nunca quedas atado al siguiente paso. Cada uno termina con algo que es tuyo: un plan, código que ya funciona, o software en marcha para tus clientes.',
    'process.led': 'Foco',

    'caps.eyebrow': 'Qué hacemos',
    'caps.title': 'Seis tipos de trabajo. Una sola persona responsable de todo.',
    'caps.sub':
      'No son seis empleados, ni software automático haciendo el trabajo por ti. Son los seis tipos de problemas que resolvemos — puedes contratarnos para uno solo, o para todo el camino desde la idea hasta el lanzamiento.',
    'caps.does': 'Qué recibes',
    'caps.proof': 'Probado en un proyecto real',
    'caps.more': 'Ver los seis en detalle',

    'capsPage.eyebrow': 'Qué hacemos',
    'capsPage.title': 'Seis tipos de trabajo. Una sola persona responsable de todo.',
    'capsPage.sub':
      'Cada uno de los siguientes es algo que ya hicimos para un negocio real — solo incluimos lo que podemos mostrarte funcionando. Contrátanos para uno solo, o para todo el camino desde la idea hasta el lanzamiento.',
    'capsPage.back': 'Volver al inicio',

    'principal.eyebrow': 'Quién es responsable',
    'principal.title': 'Uso herramientas modernas. Las decisiones las tomo yo.',
    'principal.body':
      'Las herramientas modernas (incluida la IA) ayudan a escribir código más rápido, pero también cometen errores que a primera vista parecen correctos. Cada decisión importante, cada parte del código que realmente importa, y todo lo que sale a producción lo reviso yo personalmente — la misma persona con la que hablaste en la primera llamada es quien da el visto bueno antes de que lo vean tus clientes.',
    'principal.aiPolicyLabel': 'Cómo tratamos tus datos',
    'principal.aiPolicy':
      'Podemos usar herramientas de IA para trabajar más rápido, cuando tu empresa esté de acuerdo. Las decisiones importantes — cómo se construye el sistema, cómo se mantiene seguro, y qué sale finalmente a producción — siempre las toma una persona, no la IA. Tu información confidencial nunca se comparte con herramientas externas de IA sin preguntarte antes.',
    'principal.viewPortfolio': 'Ver todo lo que hemos construido',
    'principal.locationLabel': 'Con base en',
    'principal.stackLabel': 'Herramientas que usamos',
    'principal.stackValue': 'Herramientas modernas y ampliamente usadas — más detalles si te interesa',
    'principal.marketsLabel': 'Dónde trabajamos',
    'principal.marketsValue': 'Alemania, Austria y en remoto por toda Europa',

    'faq.eyebrow': 'Antes de escribirnos',
    'faq.title': 'Las preguntas que la gente suele hacer primero.',

    'cta.title': 'Cuéntanos qué no está funcionando — o qué quieres construir.',
    'cta.body':
      'Con una captura de pantalla, un boceto o solo una frase describiendo el problema es suficiente para empezar. La primera conversación dura 30 minutos, es gratis, y si no somos la persona adecuada te lo diremos con honestidad en esa misma llamada.',
    'cta.email': 'Escríbenos tu problema',
    'cta.call': 'Reserva una llamada gratis de 30 minutos',
    'cta.response': 'Solemos responder en menos de 48 horas — y hablarás con quien hace el trabajo',

    'contact.heading': 'Cuéntanos qué no está funcionando — o qué quieres construir.',
    'contact.sub':
      'El primer mensaje más útil es sencillo: qué está fallando, con tus propias palabras. No necesitas diagramas ni un documento formal.',
    'contact.promptTitle': 'Con estas cuatro preguntas nos basta para empezar',
    'contact.prompt1': '¿Qué tiene que funcionar mejor, o construirse?',
    'contact.prompt2': '¿Qué está atascado o roto ahora mismo?',
    'contact.prompt3': '¿De qué software o app se trata?',
    'contact.prompt4': '¿Hay una fecha que tengas en mente?',
    'contact.emailSubject': 'Llamada gratis de 30 minutos — Stratos One',
    'contact.directTitle': 'Email',
    'contact.callTitle': 'Reservar una llamada',
    'contact.callDesc':
      '30 minutos, gratis, sin presentación de ventas. Miramos tu problema juntos y decidimos con honestidad si somos las personas adecuadas para ayudarte.',
    'contact.principalTitle': 'Sobre Marco',
    'contact.principalDesc':
      'Proyectos anteriores y el razonamiento detrás de ellos, al completo — míralo todo antes de decidir.',
    'contact.responseLabel': 'Con qué rapidez respondemos',
    'contact.responseValue': 'Menos de 48 horas, y responde el propio Marco',
    'contact.privacyNote':
      'Reservar una llamada abre Calendly, una herramienta externa de agenda, en una pestaña nueva. Nada de lo que escribas en esta página se envía a ningún sitio: aquí no hay formulario de contacto, ni seguimiento, ni cookies.',

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

    'seo.homeTitle': 'Ayuda con Software para Negocios en Crecimiento en Múnich',
    'seo.homeDesc':
      'Construyo y arreglo webs, apps y el software detrás de negocios en crecimiento — una sola persona, responsable de principio a fin. Múnich, trabajando en toda la UE.',
    'seo.workTitle': 'Proyectos Recientes',
    'seo.workDesc':
      'Nueve proyectos reales — salud, fábricas, entradas para eventos, tiendas online y marketplaces — con lo que construimos y lo que cambió para el negocio.',
    'seo.capsTitle': 'Qué Hacemos',
    'seo.capsDesc':
      'Planificar, construir, mantener tus datos seguros, lanzar y hacer que te encuentren online — seis tipos de trabajo, cada uno probado en un proyecto real ya en uso.',
    'seo.contactTitle': 'Cuéntanos tu Proyecto',
    'seo.contactDesc':
      '¿Tienes una web o app que arreglar, o una idea que construir? Reserva una llamada gratis de 30 minutos con Marco, en Múnich. Respondemos en menos de 48 horas.',
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
    'nav.work': 'Unsere Arbeit',
    'nav.offers': 'So können wir helfen',
    'nav.capabilities': 'Was wir tun',
    'nav.contact': 'Kontakt',
    'nav.skipToContent': 'Zum Inhalt springen',
    'nav.menu': 'Menü',
    'nav.cta': 'Erzähl uns dein Problem',

    'hero.eyebrow': 'Software-Hilfe für wachsende Unternehmen · München · Für Firmen in der ganzen EU',
    'hero.title': 'Wenn deine App oder Website',
    'hero.titleAccent': 'funktionieren muss — und es auch weiterhin tut.',
    'hero.subtitle':
      'Ich baue und repariere die Software hinter deinem Unternehmen: deine Website, deine App und die Systeme, die deine Daten korrekt halten. Du sprichst von Anfang bis Ende mit einer einzigen Person — und die ist dafür verantwortlich, dass es funktioniert.',
    'hero.ctaPrimary': 'Erzähl uns dein Problem',
    'hero.ctaSecondary': 'Unsere Arbeit ansehen',
    'hero.proofLine':
      'Mit Sitz in München, im Einsatz für Unternehmen in ganz Europa',
    'hero.note':
      'Jedes Beispiel auf dieser Seite wird schon heute von echten Kunden genutzt — kein Entwurf.',

    'situations.eyebrow': 'Kommt dir das bekannt vor?',
    'situations.title':
      'Die häufigsten Situationen, in denen sich Unternehmen bei uns melden.',

    'work.eyebrow': 'Aktuelle Projekte',
    'work.title': 'Drei Beispiele — und was sich dadurch verbessert hat.',
    'work.sub':
      'Echte Projekte für echte Unternehmen, einfach erklärt: was gebraucht wurde, was wir gebaut haben, und was sich danach verändert hat. Wo es die ganze Geschichte gibt, verlinken wir sie; wo nicht, gibt es lieber keinen Link als einen toten.',
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

    'workPage.eyebrow': 'Alle unsere Projekte',
    'workPage.title': 'Jedes Projekt, das wir umgesetzt haben — und was es gekostet hat.',
    'workPage.sub':
      'Neun Projekte aus Gesundheitswesen, Industrie und Logistik, Ticketing, Handel und Online-Marktplätzen. Jedes steht hier genau einmal, mit der schwierigen Entscheidung, die es tragfähig gemacht hat, und dem, was sie gekostet hat.',
    'workPage.back': 'Zurück zur Startseite',

    'offers.eyebrow': 'So können wir helfen',
    'offers.title': 'Drei Wege der Zusammenarbeit. Fang klein an, wenn du dir noch unsicher bist.',
    'offers.sub':
      'Jede Option unten hinterlässt dir etwas Echtes und Nützliches — einen schriftlichen Plan, eine funktionierende Funktion oder fertige Software, die dein eigenes Team weiter betreiben kann. Nirgendwo bist du gezwungen, den nächsten Schritt zu kaufen.',
    'offers.includes': 'Was du bekommst',
    'offers.note':
      'Bevor wir starten, legen wir schriftlich genau fest, was wir tun und was es kostet — so kennst du den Preis, um herauszufinden, ob das zu dir passt, schon vorher.',
    'offers.cta': 'Mit einem kurzen Check starten',

    'process.eyebrow': 'Wie ein Projekt abläuft',
    'process.title': 'Vier Schritte. Du kannst nach jedem davon aufhören.',
    'process.sub':
      'Du bist nie an den nächsten Schritt gebunden. Jeder endet mit etwas, das dir gehört — ein Plan, funktionierender Code, oder Software, die für deine Kunden live ist.',
    'process.led': 'Fokus',

    'caps.eyebrow': 'Was wir tun',
    'caps.title': 'Sechs Arten von Arbeit. Eine Person, die für alles verantwortlich ist.',
    'caps.sub':
      'Keine sechs Angestellten, keine automatische Software, die für dich arbeitet. Das sind die sechs Arten von Problemen, die wir lösen — du kannst uns für eine einzelne buchen, oder für den ganzen Weg von der Idee bis zum Launch.',
    'caps.does': 'Was du bekommst',
    'caps.proof': 'In einem echten Projekt bewiesen',
    'caps.more': 'Alle sechs im Detail ansehen',

    'capsPage.eyebrow': 'Was wir tun',
    'capsPage.title': 'Sechs Arten von Arbeit. Eine Person, die für alles verantwortlich ist.',
    'capsPage.sub':
      'Jede der folgenden Leistungen haben wir bereits für ein echtes Unternehmen erbracht — wir listen nur, was wir dir tatsächlich in Aktion zeigen können. Buche uns für eine einzelne, oder für den ganzen Weg von der Idee bis zum Launch.',
    'capsPage.back': 'Zurück zur Startseite',

    'principal.eyebrow': 'Wer verantwortlich ist',
    'principal.title': 'Ich nutze moderne Werkzeuge. Die Entscheidungen treffe ich selbst.',
    'principal.body':
      'Moderne Werkzeuge (auch KI) helfen dabei, schneller Code zu schreiben — machen aber auch Fehler, die auf den ersten Blick richtig aussehen. Jede wichtige Entscheidung, jeder Teil des Codes, der wirklich zählt, und alles, was live geht, wird von mir persönlich geprüft. Dieselbe Person, mit der du im ersten Gespräch sprichst, gibt am Ende grünes Licht, bevor es deine Kunden sehen.',
    'principal.aiPolicyLabel': 'Wie wir mit deinen Daten umgehen',
    'principal.aiPolicy':
      'Wir können KI-Werkzeuge nutzen, um schneller zu arbeiten, wenn dein Unternehmen damit einverstanden ist. Die wichtigen Entscheidungen — wie das System gebaut wird, wie es sicher bleibt und was am Ende live geht — trifft immer ein Mensch, nicht die KI. Deine vertraulichen Informationen werden nie ohne vorherige Rückfrage an externe KI-Werkzeuge weitergegeben.',
    'principal.viewPortfolio': 'Alles ansehen, was wir gebaut haben',
    'principal.locationLabel': 'Standort',
    'principal.stackLabel': 'Werkzeuge, die wir nutzen',
    'principal.stackValue': 'Moderne, weit verbreitete Werkzeuge — Details auf Anfrage, falls dir das wichtig ist',
    'principal.marketsLabel': 'Wo wir arbeiten',
    'principal.marketsValue': 'Deutschland, Österreich und remote in ganz Europa',

    'faq.eyebrow': 'Bevor du dich meldest',
    'faq.title': 'Fragen, die zuerst kommen.',

    'cta.title': 'Sag uns, was nicht funktioniert — oder was du bauen willst.',
    'cta.body':
      'Ein Screenshot, eine grobe Skizze oder einfach ein Satz, der das Problem beschreibt, reicht zum Start. Das erste Gespräch dauert 30 Minuten, ist kostenlos, und wenn wir nicht die Richtigen dafür sind, sagen wir dir das ehrlich in genau diesem Gespräch.',
    'cta.email': 'Schreib uns dein Problem',
    'cta.call': 'Kostenloses 30-Minuten-Gespräch buchen',
    'cta.response': 'Wir antworten meist innerhalb von 48 Stunden — und zwar die Person, die die Arbeit macht',

    'contact.heading': 'Sag uns, was nicht funktioniert — oder was du bauen willst.',
    'contact.sub':
      'Die nützlichste erste Nachricht ist eine einfache: was gerade schiefläuft, in deinen eigenen Worten. Du brauchst keine Diagramme und kein formelles Dokument.',
    'contact.promptTitle': 'Diese vier Fragen reichen uns zum Start',
    'contact.prompt1': 'Was muss besser funktionieren oder gebaut werden?',
    'contact.prompt2': 'Was hängt gerade fest oder ist kaputt?',
    'contact.prompt3': 'Um welche Software oder App geht es?',
    'contact.prompt4': 'Gibt es einen Termin, auf den du hinarbeitest?',
    'contact.emailSubject': 'Kostenloses 30-Minuten-Gespräch — Stratos One',
    'contact.directTitle': 'E-Mail',
    'contact.callTitle': 'Gespräch buchen',
    'contact.callDesc':
      '30 Minuten, kostenlos, kein Verkaufsgespräch. Wir schauen uns dein Problem gemeinsam an und entscheiden ehrlich, ob wir die Richtigen sind, um zu helfen.',
    'contact.principalTitle': 'Über Marco',
    'contact.principalDesc':
      'Frühere Projekte und die Überlegungen dahinter, vollständig — sieh dir alles an, bevor du dich entscheidest.',
    'contact.responseLabel': 'Wie schnell wir antworten',
    'contact.responseValue': 'Unter 48 Stunden — und zwar Marco persönlich',
    'contact.privacyNote':
      'Das Buchen eines Gesprächs öffnet Calendly, ein externes Buchungstool, in einem neuen Tab. Nichts, was du auf dieser Seite eingibst, wird irgendwohin gesendet — hier gibt es kein Kontaktformular, kein Tracking und keine Cookies.',

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

    'seo.homeTitle': 'Software-Hilfe für wachsende Unternehmen in München',
    'seo.homeDesc':
      'Ich baue und repariere Websites, Apps und die Software hinter wachsenden Unternehmen — eine Person, verantwortlich von Anfang bis Ende. München, im Einsatz für die ganze EU.',
    'seo.workTitle': 'Aktuelle Projekte',
    'seo.workDesc':
      'Neun echte Projekte — Gesundheitswesen, Industrie, Ticketing, Online-Shops und Marktplätze — mit dem, was wir gebaut haben und was sich für das Unternehmen verändert hat.',
    'seo.capsTitle': 'Was Wir Tun',
    'seo.capsDesc':
      'Planen, bauen, deine Daten sicher halten, launchen und online gefunden werden — sechs Arten von Arbeit, jede an einem echten, laufenden Projekt bewiesen.',
    'seo.contactTitle': 'Erzähl Uns Von Deinem Projekt',
    'seo.contactDesc':
      'Hast du eine Website oder App, die repariert werden muss, oder eine Idee, die gebaut werden soll? Buche ein kostenloses 30-Minuten-Gespräch mit Marco in München. Wir antworten innerhalb von 48 Stunden.',
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
