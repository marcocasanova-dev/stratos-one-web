import type { Lang } from '@i18n/utils';

/**
 * The four engagement packages, in the order a customer moves through them:
 * assessment → pilot → production → managed operations.
 *
 * `price` is modelled but null everywhere on purpose. Pricing is still being
 * validated and is quoted as a scoped proposal; a number on this page is a
 * quote. Do not fill it in with a guess, and do not add "unlimited" or "24/7"
 * wording — support hours and usage allowances belong in the proposal.
 */

export interface Offer {
  id: string;
  /** Base hue in OKLCH, shared with the project cards so the set reads as one system. */
  hue: number;
  title: Record<Lang, string>;
  body: Record<Lang, string>;
  /** Introduced by `outputsLabel` in the UI strings. */
  outputs: Record<Lang, string>;
  /** Owner-confirmed rate. `null` renders nothing at all. */
  price: Record<Lang, string> | null;
}

export const offers: Offer[] = [
  {
    id: 'assessment',
    hue: 193,
    title: {
      en: 'Workflow Assessment',
      es: 'Evaluación del flujo de trabajo',
      de: 'Workflow-Analyse',
    },
    body: {
      en: 'Identify a useful workflow, review your existing tools and define the scope, expected value and success measures.',
      es: 'Identificamos un flujo de trabajo útil, revisamos tus herramientas actuales y definimos el alcance, el valor esperado y las medidas de éxito.',
      de: 'Wir finden einen sinnvollen Workflow, prüfen deine bestehenden Werkzeuge und definieren Umfang, erwarteten Nutzen und Erfolgskriterien.',
    },
    outputs: {
      en: 'Process map, integration inventory, feasibility review and scoped proposal.',
      es: 'Mapa del proceso, inventario de integraciones, análisis de viabilidad y propuesta con alcance definido.',
      de: 'Prozesslandkarte, Übersicht der Schnittstellen, Machbarkeitsprüfung und Angebot mit klarem Umfang.',
    },
    price: null,
  },
  {
    id: 'pilot',
    hue: 152,
    title: {
      en: 'Agent Pilot',
      es: 'Piloto de agente',
      de: 'Agenten-Pilot',
    },
    body: {
      en: 'Test one workflow with limited integrations, clear boundaries and measurable results.',
      es: 'Probamos un flujo de trabajo con integraciones limitadas, límites claros y resultados medibles.',
      de: 'Wir testen einen Workflow mit wenigen Anbindungen, klaren Grenzen und messbaren Ergebnissen.',
    },
    outputs: {
      en: 'Bounded implementation, evaluation examples and pilot review.',
      es: 'Implementación acotada, ejemplos de evaluación y revisión del piloto.',
      de: 'Begrenzte Umsetzung, Testbeispiele und gemeinsame Auswertung des Piloten.',
    },
    price: null,
  },
  {
    id: 'production',
    hue: 28,
    title: {
      en: 'Production Implementation',
      es: 'Implementación en producción',
      de: 'Umsetzung im Produktivbetrieb',
    },
    body: {
      en: 'Connect the workflow to your systems, test failure scenarios and establish monitoring and handover procedures.',
      es: 'Conectamos el flujo de trabajo a tus sistemas, probamos escenarios de fallo y establecemos la monitorización y los procedimientos de traspaso.',
      de: 'Wir binden den Workflow an deine Systeme an, testen Fehlerszenarien und richten Überwachung und Übergabeprozesse ein.',
    },
    outputs: {
      en: 'Production integrations, documented permissions, operational monitoring and handover.',
      es: 'Integraciones en producción, permisos documentados, monitorización operativa y traspaso.',
      de: 'Produktive Anbindungen, dokumentierte Berechtigungen, Überwachung im Betrieb und Übergabe.',
    },
    price: null,
  },
  {
    id: 'managed',
    hue: 268,
    title: {
      en: 'Managed Operations',
      es: 'Operación gestionada',
      de: 'Betreuter Betrieb',
    },
    body: {
      en: 'Maintain integrations, monitor performance, review failures and deliver agreed improvements through a monthly service.',
      es: 'Mantenemos las integraciones, monitorizamos el rendimiento, revisamos los fallos y entregamos las mejoras acordadas mediante un servicio mensual.',
      de: 'Wir pflegen die Anbindungen, überwachen die Leistung, werten Fehler aus und liefern vereinbarte Verbesserungen im Rahmen eines Monatsservice.',
    },
    outputs: {
      en: 'Agreed monitoring, maintenance, reporting and a defined improvement allowance. Support availability and usage allowances are specified in the proposal.',
      es: 'Monitorización, mantenimiento e informes acordados, y una bolsa definida de mejoras. La disponibilidad de soporte y los límites de uso se especifican en la propuesta.',
      de: 'Vereinbarte Überwachung, Wartung und Berichte sowie ein definiertes Verbesserungskontingent. Support-Verfügbarkeit und Nutzungsumfang stehen im Angebot.',
    },
    price: null,
  },
];
