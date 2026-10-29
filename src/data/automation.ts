import type { Lang } from '@i18n/utils';

/**
 * The AI-automation offer: the starting workflow, the illustrative demo, the
 * AI/people split and the plain-language capabilities.
 *
 * ── Honesty rules for this file ─────────────────────────────────────────────
 * Everything in `demo` is sample data. No customer, outcome, appointment time or
 * response time may be added here — the demo is labelled "illustrative" on the
 * page and that label has to stay true. Channels (voice, messaging) are options
 * to scope, not features that exist today.
 */

type L<T> = Record<Lang, T>;

export const workflowSteps: L<string[]> = {
  en: [
    'Incoming enquiry',
    'Collect details',
    'Answer approved questions',
    'Create a structured request',
    'Notify the team',
    'Prepare follow-up',
  ],
  es: [
    'Consulta entrante',
    'Recoger los datos',
    'Responder preguntas aprobadas',
    'Crear una solicitud estructurada',
    'Avisar al equipo',
    'Preparar el seguimiento',
  ],
  de: [
    'Eingehende Anfrage',
    'Angaben erfassen',
    'Freigegebene Fragen beantworten',
    'Strukturierte Anfrage anlegen',
    'Team benachrichtigen',
    'Nachfassen vorbereiten',
  ],
};

export const demo = {
  enquiry: {
    en: '“Hello, our heating system has stopped working. We are in Munich. Can someone call us back?”',
    es: '«Hola, nuestra calefacción ha dejado de funcionar. Estamos en Múnich. ¿Puede alguien devolvernos la llamada?»',
    de: '„Guten Tag, unsere Heizung ist ausgefallen. Wir sind in München. Kann uns jemand zurückrufen?“',
  } as L<string>,
  collects: {
    en: [
      'Contact name and preferred callback number.',
      'Service location.',
      'Equipment type, if known.',
      'Description of the problem.',
      'Preferred callback time.',
    ],
    es: [
      'Nombre de contacto y número preferido para la llamada.',
      'Lugar del servicio.',
      'Tipo de equipo, si se conoce.',
      'Descripción del problema.',
      'Franja horaria preferida para la llamada.',
    ],
    de: [
      'Kontaktname und bevorzugte Rückrufnummer.',
      'Einsatzort.',
      'Gerätetyp, falls bekannt.',
      'Beschreibung des Problems.',
      'Bevorzugte Rückrufzeit.',
    ],
  } as L<string[]>,
  request: {
    en: [
      ['Request type', 'Heating service enquiry'],
      ['Location', 'Munich'],
      ['Issue', 'Heating system not working'],
      ['Equipment', 'Details pending'],
      ['Contact', 'Sample customer — example contact details'],
      ['Requested action', 'Callback to discuss service availability'],
      ['Status', 'Awaiting team review'],
    ],
    es: [
      ['Tipo de solicitud', 'Consulta de servicio de calefacción'],
      ['Ubicación', 'Múnich'],
      ['Problema', 'La calefacción no funciona'],
      ['Equipo', 'Datos pendientes'],
      ['Contacto', 'Cliente de ejemplo — datos de contacto de muestra'],
      ['Acción solicitada', 'Llamada para hablar de la disponibilidad del servicio'],
      ['Estado', 'Pendiente de revisión por el equipo'],
    ],
    de: [
      ['Anfrageart', 'Serviceanfrage Heizung'],
      ['Ort', 'München'],
      ['Problem', 'Heizung funktioniert nicht'],
      ['Gerät', 'Angaben stehen noch aus'],
      ['Kontakt', 'Beispielkunde — Beispiel-Kontaktdaten'],
      ['Gewünschte Aktion', 'Rückruf zur Klärung der Service-Verfügbarkeit'],
      ['Status', 'Wartet auf Prüfung durch das Team'],
    ],
  } as L<string[][]>,
  handoff: {
    en: 'The customer asks for a guaranteed same-day appointment. The agent forwards the request to the service team for confirmation.',
    es: 'El cliente pide una cita garantizada para el mismo día. El agente reenvía la solicitud al equipo de servicio para que la confirme.',
    de: 'Der Kunde verlangt einen garantierten Termin noch am selben Tag. Der Agent leitet die Anfrage zur Bestätigung an das Service-Team weiter.',
  } as L<string>,
};

export const peopleSplit = {
  agents: {
    en: [
      'Answer questions using approved business information',
      'Collect and structure customer details',
      'Update connected systems within agreed permissions',
      'Prepare summaries and follow-up drafts',
      'Route requests to the appropriate person',
    ],
    es: [
      'Responder preguntas con información de negocio aprobada',
      'Recoger y estructurar los datos del cliente',
      'Actualizar los sistemas conectados dentro de los permisos acordados',
      'Preparar resúmenes y borradores de seguimiento',
      'Dirigir las solicitudes a la persona adecuada',
    ],
    de: [
      'Fragen anhand freigegebener Unternehmensinformationen beantworten',
      'Kundenangaben erfassen und strukturieren',
      'Angebundene Systeme im Rahmen vereinbarter Berechtigungen aktualisieren',
      'Zusammenfassungen und Entwürfe für das Nachfassen vorbereiten',
      'Anfragen an die zuständige Person weiterleiten',
    ],
  } as L<string[]>,
  people: {
    en: [
      'Unusual, sensitive or ambiguous requests',
      'Approvals outside agreed rules',
      'Business commitments requiring judgment',
      'Customer relationships',
      'Exception handling',
    ],
    es: [
      'Solicitudes inusuales, sensibles o ambiguas',
      'Aprobaciones fuera de las reglas acordadas',
      'Compromisos de negocio que requieren criterio',
      'La relación con los clientes',
      'La gestión de excepciones',
    ],
    de: [
      'Ungewöhnliche, sensible oder unklare Anfragen',
      'Freigaben außerhalb der vereinbarten Regeln',
      'Geschäftliche Zusagen, die Urteilsvermögen erfordern',
      'Die Kundenbeziehung',
      'Der Umgang mit Ausnahmen',
    ],
  } as L<string[]>,
};

export interface Capability {
  id: string;
  title: L<string>;
  body: L<string>;
}

/** Plain descriptions that replace the old unexplained capability names. */
export const capabilities: Capability[] = [
  {
    id: 'knowledge',
    title: {
      en: 'Business knowledge and search',
      es: 'Conocimiento del negocio y búsqueda',
      de: 'Unternehmenswissen und Suche',
    },
    body: {
      en: 'Agents answer from information you have approved, such as service descriptions, opening hours and policies, rather than guessing.',
      es: 'Los agentes responden con la información que tú has aprobado, como descripciones de servicios, horarios y políticas, en lugar de inventar.',
      de: 'Agenten antworten auf Basis von Informationen, die du freigegeben hast, etwa Leistungsbeschreibungen, Öffnungszeiten und Richtlinien, statt zu raten.',
    },
  },
  {
    id: 'integrations',
    title: {
      en: 'CRM and system integrations',
      es: 'Integraciones con CRM y sistemas',
      de: 'CRM- und Systemanbindungen',
    },
    body: {
      en: 'Requests land in the tools your team already uses, with permissions agreed in advance.',
      es: 'Las solicitudes llegan a las herramientas que tu equipo ya usa, con permisos acordados de antemano.',
      de: 'Anfragen landen in den Werkzeugen, die dein Team bereits nutzt, mit vorab vereinbarten Berechtigungen.',
    },
  },
  {
    id: 'automation',
    title: {
      en: 'Workflow automation',
      es: 'Automatización de flujos de trabajo',
      de: 'Workflow-Automatisierung',
    },
    body: {
      en: 'Routine steps run on their own; anything outside the agreed rules is passed to a person.',
      es: 'Los pasos rutinarios se ejecutan solos; todo lo que queda fuera de las reglas acordadas pasa a una persona.',
      de: 'Routineschritte laufen von selbst; alles außerhalb der vereinbarten Regeln geht an eine Person.',
    },
  },
  {
    id: 'monitoring',
    title: {
      en: 'Monitoring and quality evaluation',
      es: 'Monitorización y evaluación de calidad',
      de: 'Überwachung und Qualitätsbewertung',
    },
    body: {
      en: 'We test behaviour on realistic examples, watch for failures once live and review them with you.',
      es: 'Probamos el comportamiento con ejemplos realistas, vigilamos los fallos una vez en producción y los revisamos contigo.',
      de: 'Wir testen das Verhalten an realistischen Beispielen, beobachten Fehler im Betrieb und besprechen sie mit dir.',
    },
  },
];
