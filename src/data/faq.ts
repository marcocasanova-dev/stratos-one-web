import type { Lang } from '@i18n/utils';

/**
 * The six objections that come up before a first call, answered on the page so
 * they do not have to be asked.
 *
 * ── The rule ────────────────────────────────────────────────────────────────
 * Every answer here is either a commercial term the owner sets (ownership,
 * continuation, AI handling) or a fact already stated elsewhere on this site.
 * Nothing is inferred. In particular, no claim is made about spoken meeting
 * fluency in any language — that is on the owner confirmation checklist, and a
 * seventh entry goes here once it is confirmed.
 */

export interface FaqItem {
  id: string;
  question: Record<Lang, string>;
  answer: Record<Lang, string>;
}

export const faq: FaqItem[] = [
  {
    id: 'fit',
    question: {
      en: 'What kind of projects are a good fit?',
      es: '¿Qué tipo de proyectos encajan?',
      de: 'Welche Projekte passen?',
    },
    answer: {
      en: 'Data-intensive web, mobile and backend systems where correctness matters more than novelty: APIs and data models, real-time and IoT flows, healthcare and operational products, retail and marketplace applications. The work is strongest where a system already exists and has to keep running while it changes.',
      es: 'Sistemas web, móviles y de backend intensivos en datos donde importa más la corrección que la novedad: APIs y modelos de datos, flujos en tiempo real e IoT, productos de salud y operativos, aplicaciones de retail y marketplace. El encaje es mayor cuando ya existe un sistema que debe seguir funcionando mientras cambia.',
      de: 'Datenintensive Web-, Mobile- und Backend-Systeme, bei denen Korrektheit mehr zählt als Neuheit: APIs und Datenmodelle, Echtzeit- und IoT-Flows, Healthcare- und operative Produkte, Retail- und Marktplatz-Anwendungen. Am stärksten dort, wo ein System bereits existiert und weiterlaufen muss, während es sich ändert.',
    },
  },
  {
    id: 'existing-team',
    question: {
      en: 'Can you work with our existing team and codebase?',
      es: '¿Puedes trabajar con nuestro equipo y nuestro código actuales?',
      de: 'Kannst du mit unserem bestehenden Team und Code arbeiten?',
    },
    answer: {
      en: 'Yes — that is the normal case, not the exception. Embedded Senior Engineering exists for exactly this: working inside your repositories, your review process and your release process, rather than beside them. Greenfield work is welcome too, but nothing here assumes an empty folder.',
      es: 'Sí — es el caso normal, no la excepción. La Ingeniería Senior Integrada existe justo para eso: trabajar dentro de vuestros repositorios, vuestro proceso de revisión y vuestro proceso de release, no en paralelo. El trabajo desde cero también es bienvenido, pero aquí nada presupone una carpeta vacía.',
      de: 'Ja — das ist der Normalfall, nicht die Ausnahme. Genau dafür gibt es Embedded Senior Engineering: Arbeit innerhalb eurer Repositories, eures Review- und eures Release-Prozesses statt daneben. Greenfield ist ebenfalls willkommen, aber hier setzt nichts einen leeren Ordner voraus.',
    },
  },
  {
    id: 'after-diagnostic',
    question: {
      en: 'Do we have to continue after the diagnostic?',
      es: '¿Tenemos que continuar después del diagnóstico?',
      de: 'Müssen wir nach dem Diagnostic weitermachen?',
    },
    answer: {
      en: 'No. The diagnostic ends with a document, not a retainer. The system map, the risks and the 30/60/90-day plan are yours whether the next phase is bought from Stratos One, given to your own team, or handed to somebody else entirely.',
      es: 'No. El diagnóstico termina en un documento, no en una cuota mensual. El mapa del sistema, los riesgos y el plan a 30/60/90 días son vuestros, tanto si la siguiente fase la contratáis con Stratos One, como si la ejecuta vuestro propio equipo o cualquier otra persona.',
      de: 'Nein. Das Diagnostic endet mit einem Dokument, nicht mit einem Retainer. Systemkarte, Risiken und der 30/60/90-Tage-Plan gehören euch — unabhängig davon, ob die nächste Phase bei Stratos One beauftragt, vom eigenen Team umgesetzt oder ganz anders vergeben wird.',
    },
  },
  {
    id: 'ownership',
    question: {
      en: 'Who owns the code and the documentation?',
      es: '¿De quién son el código y la documentación?',
      de: 'Wem gehören Code und Dokumentation?',
    },
    answer: {
      en: 'You do. Code is written in your repositories where possible, and handed over with the documentation needed to maintain it without the person who wrote it. No component of a delivery depends on continued access to Stratos One.',
      es: 'Vuestros. El código se escribe en vuestros repositorios siempre que es posible, y se entrega con la documentación necesaria para mantenerlo sin quien lo escribió. Ninguna parte de una entrega depende de seguir teniendo acceso a Stratos One.',
      de: 'Euch. Der Code entsteht nach Möglichkeit in euren Repositories und wird mit der Dokumentation übergeben, die nötig ist, um ihn ohne den Autor zu pflegen. Kein Bestandteil einer Lieferung hängt an fortgesetztem Zugang zu Stratos One.',
    },
  },
  {
    id: 'ai-tools',
    question: {
      en: 'How do you use AI tools with our code and data?',
      es: '¿Cómo usas herramientas de IA con nuestro código y nuestros datos?',
      de: 'Wie setzt du KI-Werkzeuge mit unserem Code und unseren Daten ein?',
    },
    answer: {
      en: 'AI tools may accelerate analysis and implementation where your policy permits it. Architecture, security, code review and release decisions remain human-owned. Confidential material is never submitted to third-party AI tools without your explicit approval — and if your policy is no AI at all, that is a workable constraint, not a dealbreaker.',
      es: 'Las herramientas de IA pueden acelerar el análisis y la implementación cuando vuestra política lo permite. Las decisiones de arquitectura, seguridad, revisión de código y release siguen siendo humanas. El material confidencial nunca se envía a herramientas de IA de terceros sin vuestra aprobación explícita — y si vuestra política es no usar IA en absoluto, es una restricción viable, no un impedimento.',
      de: 'KI-Werkzeuge können Analyse und Umsetzung beschleunigen, soweit eure Richtlinie das erlaubt. Entscheidungen zu Architektur, Sicherheit, Code-Review und Release bleiben menschlich verantwortet. Vertrauliches Material wird niemals ohne eure ausdrückliche Freigabe an KI-Dienste Dritter übermittelt — und wenn eure Richtlinie gar keine KI vorsieht, ist das eine machbare Rahmenbedingung, kein Ausschlusskriterium.',
    },
  },
  {
    id: 'where',
    question: {
      en: 'Where do you work from, and how do we overlap?',
      es: '¿Desde dónde trabajas y cómo coincidimos?',
      de: 'Von wo aus arbeitest du, und wie überschneiden wir uns?',
    },
    answer: {
      en: 'From Munich, on Central European Time, remotely across EU timezones. That means a full working-day overlap with teams in DACH and most of Europe, rather than a two-hour window at the edge of the day.',
      es: 'Desde Múnich, en horario de Europa Central, en remoto por husos horarios de la UE. Eso supone una jornada completa de solapamiento con equipos en DACH y en casi toda Europa, no una ventana de dos horas al final del día.',
      de: 'Aus München, in mitteleuropäischer Zeit, remote über EU-Zeitzonen hinweg. Das bedeutet einen vollen Arbeitstag Überschneidung mit Teams in DACH und weiten Teilen Europas statt eines Zwei-Stunden-Fensters am Tagesrand.',
    },
  },
];
