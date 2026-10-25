import type { Lang } from '@i18n/utils';

/**
 * The four moments in which someone actually goes looking for this.
 *
 * This section replaces the six agent chips that used to sit directly under the
 * hero. A buyer arriving cold does not yet know what an "agent" is, but they do
 * know which of these four sentences is currently true for them — and that
 * recognition, not the mechanism, is what makes them scroll.
 *
 * ── Reading level ────────────────────────────────────────────────────────────
 * Written for a founder or operations lead, not an engineer. If a card cannot
 * be read aloud by a non-technical business owner as "yes, that is exactly
 * where we are", it does not belong here — no matter how accurate it is
 * technically.
 */

export interface Situation {
  id: string;
  label: Record<Lang, string>;
  body: Record<Lang, string>;
}

export const situations: Situation[] = [
  {
    id: 'blocked-release',
    label: {
      en: 'Launch keeps slipping',
      es: 'El lanzamiento se retrasa una y otra vez',
      de: 'Der Launch verschiebt sich immer wieder',
    },
    body: {
      en: 'You have a date, but every time it gets close something technical is not ready — and nobody can tell you exactly what, or why.',
      es: 'Tienes una fecha, pero cada vez que se acerca algo técnico no está listo — y nadie te sabe decir exactamente qué, ni por qué.',
      de: 'Du hast einen Termin, aber jedes Mal, wenn er näher rückt, ist irgendetwas Technisches nicht fertig — und niemand kann dir genau sagen, was oder warum.',
    },
  },
  {
    id: 'senior-ownership',
    label: {
      en: 'No one is really in charge of it',
      es: 'Nadie está realmente al mando de esto',
      de: 'Niemand ist wirklich dafür verantwortlich',
    },
    body: {
      en: 'You need one experienced person who can look at the whole thing — website, app and all — and make the call, without hiring a full-time employee to do it.',
      es: 'Necesitas a una sola persona con experiencia que pueda ver todo el conjunto — web, app y demás — y tomar la decisión, sin tener que contratar a alguien a tiempo completo para ello.',
      de: 'Du brauchst eine erfahrene Person, die sich das große Ganze ansieht — Website, App und alles dazwischen — und entscheidet, ohne dass du dafür jemanden fest einstellen musst.',
    },
  },
  {
    id: 'state-disagreement',
    label: {
      en: 'Your numbers do not add up',
      es: 'Tus números no cuadran',
      de: 'Deine Zahlen stimmen nicht überein',
    },
    body: {
      en: 'The app says one thing, the website says another, and your team is spending hours every week manually checking which one is actually right.',
      es: 'La app dice una cosa, la web dice otra, y tu equipo pasa horas cada semana comprobando a mano cuál de las dos es la correcta.',
      de: 'Die App zeigt etwas anderes an als die Website, und dein Team verbringt jede Woche Stunden damit, von Hand herauszufinden, welche Zahl eigentlich stimmt.',
    },
  },
  {
    id: 'independent-plan',
    label: {
      en: 'You want a second opinion before spending',
      es: 'Quieres una segunda opinión antes de gastar',
      de: 'Du willst eine zweite Meinung, bevor du investierst',
    },
    body: {
      en: 'You are about to invest in a big piece of software and want an outside expert to check the plan first — before you commit the budget.',
      es: 'Estás a punto de invertir en un desarrollo grande y quieres que un experto externo revise el plan antes — antes de comprometer el presupuesto.',
      de: 'Du stehst kurz davor, in ein größeres Software-Projekt zu investieren, und willst vorher eine externe, unabhängige Einschätzung — bevor das Budget gebunden wird.',
    },
  },
];
