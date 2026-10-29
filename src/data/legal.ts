import type { Lang } from '@i18n/utils';

/**
 * Copy for /imprint and /privacy.
 *
 * ── What is safe to write here, and what is not ─────────────────────────────
 * Everything below describes how THIS site actually behaves, and every sentence
 * is checkable against the source: there is no analytics script, no cookie is
 * set, no font or asset is fetched from a third-party host, the contact form only prepares an
 * email draft in the visitor's own mail app and transmits nothing, and the only thing written to the browser is the theme preference in
 * localStorage (see BaseLayout.astro and ThemeToggle.astro).
 *
 * Identity, address and VAT number are NOT here — they are owner-supplied and
 * live in LEGAL in src/config.ts. If a fact about the business cannot be read
 * out of that object, it does not get written into this file as prose.
 *
 * This is a factual description of a static site, not legal advice. The final
 * wording should be reviewed for the actual business setup before launch.
 */

/** Publication date of the current legal text. Absolute, never "today". */
export const LEGAL_UPDATED = '2026-10-25';

/** The deployment target, named because the privacy notice has to name it. */
export const HOSTING_PROVIDER = {
  name: 'GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA)',
  privacyUrl: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
} as const;

export interface LegalSection {
  id: string;
  heading: Record<Lang, string>;
  /** Paragraphs. Kept as an array so no template has to parse newlines. */
  body: Record<Lang, string[]>;
}

export const imprintLabels = {
  provider: { en: 'Provider', es: 'Prestador', de: 'Anbieter' },
  address: { en: 'Address', es: 'Dirección', de: 'Anschrift' },
  contact: { en: 'Contact', es: 'Contacto', de: 'Kontakt' },
  vat: {
    en: 'VAT identification number',
    es: 'Número de identificación fiscal (IVA)',
    de: 'Umsatzsteuer-Identifikationsnummer',
  },
  responsible: {
    en: 'Responsible for content under §18 (2) MStV',
    es: 'Responsable de contenidos según el §18 (2) MStV',
    de: 'Verantwortlich für den Inhalt nach §18 Abs. 2 MStV',
  },
} as const satisfies Record<string, Record<Lang, string>>;

export const imprintIntro: Record<Lang, string> = {
  en: 'Provider identification pursuant to §5 of the German Digital Services Act (DDG).',
  es: 'Identificación del prestador conforme al §5 de la Ley alemana de Servicios Digitales (DDG).',
  de: 'Anbieterkennzeichnung gemäß §5 des Digitale-Dienste-Gesetzes (DDG).',
};

export const privacyIntro: Record<Lang, string> = {
  en: 'This site is a static website. It sets no cookies, runs no analytics, embeds no third-party scripts and loads no external fonts. The sections below describe the only processing that occurs.',
  es: 'Esta web es un sitio estático. No usa cookies, no ejecuta analítica, no incrusta scripts de terceros y no carga fuentes externas. Las secciones siguientes describen el único tratamiento que se produce.',
  de: 'Diese Seite ist eine statische Website. Sie setzt keine Cookies, führt keine Analytics aus, bindet keine Skripte Dritter ein und lädt keine externen Schriften. Die folgenden Abschnitte beschreiben die einzige Verarbeitung, die stattfindet.',
};

export const privacySections: LegalSection[] = [
  {
    id: 'hosting',
    heading: {
      en: 'Hosting and server logs',
      es: 'Alojamiento y registros del servidor',
      de: 'Hosting und Server-Logs',
    },
    body: {
      en: [
        `This site is hosted on ${HOSTING_PROVIDER.name}. When a page is requested, the host necessarily processes technical connection data — including your IP address, the requested URL, the time of the request, the referring page and your browser identification — in order to deliver the page and maintain the security of the service.`,
        'This processing is carried out by the hosting provider, not by this site, which has no server-side code and no database. The legal basis is Art. 6 (1) (f) GDPR: the legitimate interest in delivering a website that is reachable and secure.',
      ],
      es: [
        `Esta web está alojada en ${HOSTING_PROVIDER.name}. Al solicitar una página, el proveedor de alojamiento trata necesariamente datos técnicos de conexión —incluidas tu dirección IP, la URL solicitada, la hora de la solicitud, la página de origen y la identificación de tu navegador— para poder entregar la página y mantener la seguridad del servicio.`,
        'Ese tratamiento lo realiza el proveedor de alojamiento, no esta web, que no tiene código de servidor ni base de datos. La base jurídica es el art. 6.1.f del RGPD: el interés legítimo en ofrecer un sitio accesible y seguro.',
      ],
      de: [
        `Diese Seite wird bei ${HOSTING_PROVIDER.name} gehostet. Beim Abruf einer Seite verarbeitet der Hoster notwendigerweise technische Verbindungsdaten — darunter IP-Adresse, angeforderte URL, Zeitpunkt der Anfrage, verweisende Seite und Browserkennung —, um die Seite auszuliefern und den Dienst abzusichern.`,
        'Diese Verarbeitung erfolgt durch den Hoster, nicht durch diese Seite, die weder serverseitigen Code noch eine Datenbank hat. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO: das berechtigte Interesse an einer erreichbaren und sicheren Website.',
      ],
    },
  },
  {
    id: 'contact',
    heading: {
      en: 'Contacting by email',
      es: 'Contacto por correo electrónico',
      de: 'Kontaktaufnahme per E-Mail',
    },
    body: {
      en: [
        'The contact form on this site does not send anything itself. When you submit it, your browser opens a draft in your own email app, pre-filled with what you typed (name, work email, company, workflow description and tools). Nothing reaches us until you send that email, and the form data is not stored on this site or by any service we operate. If you write to the address given in the imprint, your message and the data it contains are processed solely in order to answer it and to handle any resulting engagement. Please do not include sensitive personal data.',
        'The legal basis is Art. 6 (1) (b) GDPR where the message concerns a possible contract, and otherwise Art. 6 (1) (f) GDPR. Correspondence is kept for as long as needed to deal with the matter and to meet statutory retention periods.',
      ],
      es: [
        'El formulario de contacto de esta web no envía nada por sí mismo. Al enviarlo, tu navegador abre un borrador en tu propia aplicación de correo, rellenado con lo que has escrito (nombre, correo de trabajo, empresa, descripción del flujo de trabajo y herramientas). No nos llega nada hasta que envías ese correo, y los datos del formulario no se almacenan en esta web ni en ningún servicio que operemos. Si escribes a la dirección indicada en el aviso legal, tu mensaje y los datos que contenga se tratan únicamente para responderlo y para gestionar la posible colaboración que se derive. Por favor, no incluyas datos personales sensibles.',
        'La base jurídica es el art. 6.1.b del RGPD cuando el mensaje se refiere a un posible contrato, y en los demás casos el art. 6.1.f. La correspondencia se conserva el tiempo necesario para atender el asunto y cumplir los plazos legales de conservación.',
      ],
      de: [
        'Das Kontaktformular auf dieser Seite sendet selbst nichts. Wenn du es abschickst, öffnet dein Browser einen Entwurf in deiner eigenen E-Mail-App, vorausgefüllt mit deinen Eingaben (Name, geschäftliche E-Mail, Unternehmen, Beschreibung des Workflows und Werkzeuge). Bei uns kommt erst etwas an, wenn du diese E-Mail absendest; die Formulardaten werden weder auf dieser Seite noch bei einem von uns betriebenen Dienst gespeichert. Wenn du an die im Impressum genannte Adresse schreibst, werden deine Nachricht und die darin enthaltenen Daten ausschließlich verarbeitet, um sie zu beantworten und eine daraus entstehende Zusammenarbeit abzuwickeln. Bitte gib keine sensiblen personenbezogenen Daten an.',
        'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Nachricht einen möglichen Vertrag betrifft, im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Die Korrespondenz wird so lange aufbewahrt, wie es zur Bearbeitung und zur Einhaltung gesetzlicher Aufbewahrungsfristen erforderlich ist.',
      ],
    },
  },
  {
    id: 'local-storage',
    heading: {
      en: 'Theme preference stored in your browser',
      es: 'Preferencia de tema guardada en tu navegador',
      de: 'Im Browser gespeicherte Design-Einstellung',
    },
    body: {
      en: [
        'If you switch between the dark and light theme, that choice is written to your browser’s local storage under the key “theme”. It is a preference, not an identifier: it is never transmitted to any server, is not used to recognise you, and is removed when you clear your browser’s site data.',
        'No cookie is set by this site, and no consent banner is shown because there is nothing to consent to.',
      ],
      es: [
        'Si cambias entre el tema oscuro y el claro, esa elección se guarda en el almacenamiento local de tu navegador bajo la clave «theme». Es una preferencia, no un identificador: nunca se transmite a ningún servidor, no se usa para reconocerte y desaparece al borrar los datos del sitio en tu navegador.',
        'Esta web no instala ninguna cookie, y no muestra banner de consentimiento porque no hay nada que consentir.',
      ],
      de: [
        'Wenn du zwischen dunklem und hellem Design wechselst, wird diese Wahl im Local Storage deines Browsers unter dem Schlüssel „theme“ gespeichert. Das ist eine Einstellung, keine Kennung: Sie wird an keinen Server übertragen, dient nicht dazu, dich wiederzuerkennen, und verschwindet, wenn du die Websitedaten im Browser löschst.',
        'Diese Seite setzt keine Cookies und zeigt kein Consent-Banner, weil es nichts zu bestätigen gibt.',
      ],
    },
  },
  {
    id: 'external-links',
    heading: {
      en: 'Links to other services',
      es: 'Enlaces a otros servicios',
      de: 'Links zu anderen Diensten',
    },
    body: {
      en: [
        'This site links out to Calendly for scheduling, and to marcocasanova.de, GitHub and LinkedIn. Nothing from those services is embedded here — no widget, no script, no pixel — so they receive no data until you follow the link yourself.',
        'Once you do, that provider’s own privacy notice applies to whatever you do there. Booking a call through Calendly means providing your data to Calendly under their terms.',
      ],
      es: [
        'Esta web enlaza a Calendly para agendar llamadas, y a marcocasanova.de, GitHub y LinkedIn. Nada de esos servicios está incrustado aquí —ni widget, ni script, ni píxel—, de modo que no reciben ningún dato hasta que sigues el enlace por tu cuenta.',
        'A partir de ese momento se aplica la política de privacidad de ese proveedor. Reservar una llamada mediante Calendly implica facilitarle tus datos conforme a sus condiciones.',
      ],
      de: [
        'Diese Seite verlinkt auf Calendly zur Terminbuchung sowie auf marcocasanova.de, GitHub und LinkedIn. Von diesen Diensten ist hier nichts eingebettet — kein Widget, kein Skript, kein Pixel —, sie erhalten also keine Daten, solange du dem Link nicht selbst folgst.',
        'Sobald du das tust, gilt die Datenschutzerklärung des jeweiligen Anbieters. Eine Terminbuchung über Calendly bedeutet, dass du Calendly deine Daten zu deren Bedingungen übermittelst.',
      ],
    },
  },
  {
    id: 'rights',
    heading: {
      en: 'Your rights',
      es: 'Tus derechos',
      de: 'Deine Rechte',
    },
    body: {
      en: [
        'Under the GDPR you have the right to obtain confirmation of whether your data is processed and to access it (Art. 15), to have it corrected (Art. 16) or erased (Art. 17), to restrict processing (Art. 18), to receive it in a portable form (Art. 20), and to object to processing based on legitimate interests (Art. 21).',
        'To exercise any of these, write to the address in the imprint. You also have the right to lodge a complaint with the data protection supervisory authority of your habitual residence or place of work.',
      ],
      es: [
        'Conforme al RGPD tienes derecho a obtener confirmación de si se tratan tus datos y a acceder a ellos (art. 15), a su rectificación (art. 16) o supresión (art. 17), a la limitación del tratamiento (art. 18), a la portabilidad (art. 20) y a oponerte al tratamiento basado en intereses legítimos (art. 21).',
        'Para ejercer cualquiera de ellos, escribe a la dirección indicada en el aviso legal. También tienes derecho a presentar una reclamación ante la autoridad de control de protección de datos de tu residencia habitual o lugar de trabajo.',
      ],
      de: [
        'Nach der DSGVO hast du das Recht auf Auskunft darüber, ob und welche Daten verarbeitet werden (Art. 15), auf Berichtigung (Art. 16), auf Löschung (Art. 17), auf Einschränkung der Verarbeitung (Art. 18), auf Datenübertragbarkeit (Art. 20) sowie auf Widerspruch gegen eine auf berechtigten Interessen beruhende Verarbeitung (Art. 21).',
        'Zur Ausübung genügt eine Nachricht an die im Impressum genannte Adresse. Zudem steht dir ein Beschwerderecht bei der Datenschutz-Aufsichtsbehörde deines gewöhnlichen Aufenthaltsorts oder Arbeitsplatzes zu.',
      ],
    },
  },
];
