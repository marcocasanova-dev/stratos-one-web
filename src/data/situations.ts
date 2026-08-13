import type { Lang } from '@i18n/utils';

/**
 * The four moments in which someone actually goes looking for this.
 *
 * This section replaces the six agent chips that used to sit directly under the
 * hero. A buyer arriving cold does not yet know what an "agent" is, but they do
 * know which of these four sentences is currently true for them — and that
 * recognition, not the mechanism, is what makes them scroll.
 *
 * Each card is a situation, never a technology list. If a card cannot be read
 * aloud by a non-engineer CTO as "yes, that is us", it does not belong here.
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
      en: 'A release is blocked',
      es: 'Una release bloqueada',
      de: 'Ein Release steht',
    },
    body: {
      en: 'The date is set, but architecture, data or an integration is in the way, and nobody in the room can say with confidence which one.',
      es: 'La fecha está fijada, pero la arquitectura, los datos o una integración lo impiden, y nadie en la sala puede decir con seguridad cuál de los tres.',
      de: 'Der Termin steht, aber Architektur, Daten oder eine Integration blockieren — und niemand im Raum kann sicher sagen, welches davon.',
    },
  },
  {
    id: 'senior-ownership',
    label: {
      en: 'No senior owner',
      es: 'Falta responsable senior',
      de: 'Keine Senior-Verantwortung',
    },
    body: {
      en: 'You need someone who owns backend and frontend together and makes the call, without adding another permanent headcount to do it.',
      es: 'Necesitas a alguien que se responsabilice de backend y frontend a la vez y tome la decisión, sin sumar otra contratación permanente para conseguirlo.',
      de: 'Ihr braucht jemanden, der Backend und Frontend gemeinsam verantwortet und entscheidet — ohne dafür eine weitere feste Stelle zu schaffen.',
    },
  },
  {
    id: 'state-disagreement',
    label: {
      en: 'The data disagrees',
      es: 'Los datos no cuadran',
      de: 'Die Daten widersprechen sich',
    },
    body: {
      en: 'Real-time flows, APIs and client applications each believe something different about the same record, and support is absorbing the difference.',
      es: 'Los flujos en tiempo real, las APIs y las aplicaciones cliente creen cosas distintas sobre el mismo registro, y soporte está absorbiendo la diferencia.',
      de: 'Echtzeit-Flows, APIs und Clients glauben Unterschiedliches über denselben Datensatz — und der Support fängt die Differenz auf.',
    },
  },
  {
    id: 'independent-plan',
    label: {
      en: 'A plan before the spend',
      es: 'Un plan antes del gasto',
      de: 'Ein Plan vor der Investition',
    },
    body: {
      en: 'A larger build is on the table and you want an independent technical read on scope, sequence and risk before committing the budget.',
      es: 'Hay un desarrollo mayor sobre la mesa y quieres una lectura técnica independiente del alcance, la secuencia y el riesgo antes de comprometer el presupuesto.',
      de: 'Ein größeres Vorhaben steht an, und ihr wollt eine unabhängige technische Einschätzung zu Umfang, Reihenfolge und Risiko, bevor das Budget gebunden wird.',
    },
  },
];
