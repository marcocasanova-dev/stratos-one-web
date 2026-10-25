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
 *
 * ── Reading level ────────────────────────────────────────────────────────────
 * Written for a founder or business owner, not a technical hire. Questions use
 * the words a non-technical reader would actually type into a search bar or
 * ask out loud on a call, not the words an engineer would use to ask the same
 * thing.
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
      en: 'What kind of projects do you take on?',
      es: '¿Qué tipo de proyectos aceptas?',
      de: 'An welchen Projekten arbeitet ihr?',
    },
    answer: {
      en: 'Websites, apps and the systems behind them, especially where getting the numbers right matters more than looking flashy — things like customer records, live tracking, health data, online shops and marketplaces. We are strongest when something already exists and has to keep working while it changes, rather than starting completely from scratch.',
      es: 'Webs, apps y los sistemas que hay detrás, especialmente cuando que los números sean correctos importa más que impresionar visualmente — cosas como fichas de clientes, seguimiento en vivo, datos de salud, tiendas online y marketplaces. Somos más fuertes cuando ya existe algo que tiene que seguir funcionando mientras cambia, más que empezando totalmente desde cero.',
      de: 'Websites, Apps und die Systeme dahinter — besonders dort, wo es wichtiger ist, dass die Zahlen stimmen, als dass es beeindruckend aussieht: Dinge wie Kundendaten, Live-Tracking, Gesundheitsdaten, Online-Shops und Marktplätze. Am stärksten sind wir dort, wo schon etwas existiert und weiterlaufen muss, während es sich verändert — statt komplett bei null anzufangen.',
    },
  },
  {
    id: 'existing-team',
    question: {
      en: 'Can you work alongside our own team?',
      es: '¿Puedes trabajar junto a nuestro propio equipo?',
      de: 'Könnt ihr mit unserem eigenen Team zusammenarbeiten?',
    },
    answer: {
      en: 'Yes — that is the normal way we work, not an exception. If you already have people working on this, we join in and work inside what you already have, rather than building something separate on the side. Starting completely from scratch is fine too, but we do not assume that is the case.',
      es: 'Sí — es la forma normal en la que trabajamos, no una excepción. Si ya tienes personas trabajando en esto, nos sumamos y trabajamos dentro de lo que ya tienes, en lugar de construir algo aparte. Empezar completamente desde cero también nos vale, pero no lo damos por hecho.',
      de: 'Ja — das ist unsere normale Arbeitsweise, keine Ausnahme. Wenn schon Leute daran arbeiten, steigen wir ein und arbeiten innerhalb dessen, was bereits da ist, statt etwas Separates daneben aufzubauen. Ganz von vorne anzufangen geht auch, aber wir gehen nicht automatisch davon aus.',
    },
  },
  {
    id: 'after-diagnostic',
    question: {
      en: 'If we start with the quick check-up, are we locked into more?',
      es: 'Si empezamos con la revisión rápida, ¿nos comprometemos a más?',
      de: 'Sind wir nach dem kurzen Check zu mehr verpflichtet?',
    },
    answer: {
      en: 'No. The check-up ends with a written plan, not an ongoing contract. The plan and the list of risks are yours to keep — whether you then hire us for the next part, do it with your own team, or take it to someone else entirely.',
      es: 'No. La revisión termina con un plan por escrito, no con un contrato continuo. El plan y la lista de riesgos son tuyos para quedártelos — tanto si luego nos contratas para la siguiente parte, como si lo hace tu propio equipo, o se lo llevas a otra persona.',
      de: 'Nein. Der Check endet mit einem schriftlichen Plan, nicht mit einem laufenden Vertrag. Der Plan und die Liste der Risiken gehören danach dir — egal, ob du uns für den nächsten Schritt beauftragst, es dein eigenes Team macht, oder du es an jemand anderen gibst.',
    },
  },
  {
    id: 'ownership',
    question: {
      en: 'Who owns the finished code — us or you?',
      es: '¿De quién es el código terminado — tuyo o nuestro?',
      de: 'Wem gehört der fertige Code — euch oder uns?',
    },
    answer: {
      en: 'You own it, completely. Whenever possible we build it directly in your own systems, and we hand over clear notes so your own team (or someone else you hire later) can keep it running without needing us. You are never stuck depending on us to keep your own software alive.',
      es: 'Es tuyo, por completo. Siempre que es posible, lo construimos directamente en tus propios sistemas, y te entregamos notas claras para que tu propio equipo (o alguien más que contrates después) pueda mantenerlo sin necesitarnos a nosotros. Nunca dependes de nosotros para que tu propio software siga funcionando.',
      de: 'Er gehört komplett dir. Wo immer möglich, bauen wir direkt in deinen eigenen Systemen, und du bekommst klare Notizen, damit dein eigenes Team (oder jemand, den du später beauftragst) es ohne uns weiter betreiben kann. Du bist nie darauf angewiesen, dass wir deine eigene Software am Laufen halten.',
    },
  },
  {
    id: 'ai-tools',
    question: {
      en: 'Do you use AI? What happens to our data if you do?',
      es: '¿Usáis IA? ¿Qué pasa con nuestros datos si es así?',
      de: 'Setzt ihr KI ein? Was passiert dann mit unseren Daten?',
    },
    answer: {
      en: 'We may use AI tools to work faster, but only where your company is comfortable with it. The decisions that really matter — how something is built, how it is kept secure, what actually goes live — are always made by a person, not by AI. We never send your confidential information to an outside AI tool without asking you first — and if your rule is no AI at all, that is completely fine, we can work that way.',
      es: 'Podemos usar herramientas de IA para trabajar más rápido, pero solo cuando tu empresa esté de acuerdo. Las decisiones que realmente importan — cómo se construye algo, cómo se mantiene seguro, qué sale finalmente a producción — siempre las toma una persona, no la IA. Nunca enviamos tu información confidencial a una herramienta externa de IA sin preguntarte antes — y si tu norma es no usar IA en absoluto, no hay ningún problema, podemos trabajar así.',
      de: 'Wir können KI-Werkzeuge nutzen, um schneller zu arbeiten — aber nur, wenn dein Unternehmen damit einverstanden ist. Die Entscheidungen, die wirklich zählen — wie etwas gebaut wird, wie es sicher bleibt, was am Ende live geht — trifft immer ein Mensch, nicht die KI. Wir schicken deine vertraulichen Informationen nie an ein externes KI-Werkzeug, ohne vorher zu fragen — und wenn deine Regel „keine KI" lautet, ist das völlig in Ordnung, so können wir auch arbeiten.',
    },
  },
  {
    id: 'where',
    question: {
      en: 'Where are you based, and will our time zones line up?',
      es: '¿Dónde estáis, y coincidirán nuestros horarios?',
      de: 'Wo seid ihr, und passen unsere Zeitzonen zusammen?',
    },
    answer: {
      en: 'We work from Munich, Germany, on Central European time, and remotely with companies across Europe. That means a full working day of overlap with most of Europe — not just a short window at the start or end of your day.',
      es: 'Trabajamos desde Múnich, Alemania, en horario centroeuropeo, y en remoto con empresas de toda Europa. Eso significa una jornada laboral completa de coincidencia con la mayor parte de Europa — no solo una ventana corta al principio o al final de tu día.',
      de: 'Wir arbeiten von München aus, in mitteleuropäischer Zeit, und remote mit Unternehmen aus ganz Europa. Das bedeutet einen vollen Arbeitstag Überschneidung mit den meisten europäischen Ländern — nicht nur ein kurzes Zeitfenster am Anfang oder Ende deines Tages.',
    },
  },
];
