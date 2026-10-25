import type { Lang } from '@i18n/utils';

/**
 * The six kinds of work a client can hire us for.
 *
 * Each entry is a kind of work, not a person or a personality — see the note
 * in ui.ts about "capability tracks" language. `proof` is the rule that keeps
 * this honest: a track may only claim something that has already shipped in a
 * real product, and `proof` names where. If you add a track, you must be able
 * to fill `proof` with something a prospect can be shown.
 *
 * ── Reading level ────────────────────────────────────────────────────────────
 * `role`, `summary` and `does` are written for a founder or business owner —
 * someone deciding whether to reach out, not an engineer scoping a ticket.
 * `proof` is allowed a little more technical colour because by the time a
 * reader gets there, they are checking credibility, not deciding whether to
 * keep reading; even so it stays a plain sentence, not a spec.
 */

export interface Agent {
  id: string;
  /** Display name. Deliberately short — it becomes a noun in conversation. */
  name: string;
  /** Base hue in OKLCH. All agents share L/C so the set reads as one system. */
  hue: number;
  /** Single-path SVG mark, drawn on a 24×24 grid. */
  icon: string;
  role: Record<Lang, string>;
  summary: Record<Lang, string>;
  /** What this track actually hands over. Kept to four lines — it is a card. */
  does: Record<Lang, string[]>;
  /** Shipped evidence. No claim without one. */
  proof: Record<Lang, string>;
}

export const agents: Agent[] = [
  {
    id: 'atlas',
    name: 'Atlas',
    hue: 205,
    icon: 'M12 3 3 8l9 5 9-5-9-5Zm-9 11 9 5 9-5M3 11l9 5 9-5',
    role: {
      en: 'Planning before building',
      es: 'Planificar antes de construir',
      de: 'Planen, bevor gebaut wird',
    },
    summary: {
      en: 'Understands what your business actually needs before anyone writes a single line of code, and writes down why each decision was made.',
      es: 'Entiende lo que tu negocio realmente necesita antes de que nadie escriba una sola línea de código, y deja por escrito por qué se tomó cada decisión.',
      de: 'Versteht, was dein Unternehmen wirklich braucht, bevor auch nur eine Zeile Code geschrieben wird — und hält fest, warum jede Entscheidung so getroffen wurde.',
    },
    does: {
      en: [
        'A clear picture of how your business actually works today',
        'Written reasons behind every major decision, so you always know why',
        'Honest advice on what to build versus what to buy off the shelf',
        'A step-by-step plan with real costs attached',
      ],
      es: [
        'Una imagen clara de cómo funciona hoy realmente tu negocio',
        'Razones por escrito detrás de cada decisión importante, para que siempre sepas por qué',
        'Consejo honesto sobre qué construir y qué comprar ya hecho',
        'Un plan paso a paso con costes reales',
      ],
      de: [
        'Ein klares Bild davon, wie dein Unternehmen heute wirklich funktioniert',
        'Schriftliche Gründe hinter jeder wichtigen Entscheidung, damit du immer weißt, warum',
        'Ehrlicher Rat, was selbst gebaut und was fertig eingekauft werden sollte',
        'Ein Schritt-für-Schritt-Plan mit echten Kosten',
      ],
    },
    proof: {
      en: 'Six different products run on one shared foundation today, because the plan was made before the first one was built — not patched together after the third.',
      es: 'Hoy seis productos distintos funcionan sobre una misma base compartida, porque el plan se hizo antes de construir el primero — no se improvisó después del tercero.',
      de: 'Heute laufen sechs verschiedene Produkte auf einer gemeinsamen Basis, weil der Plan vor dem ersten Produkt gemacht wurde — nicht nachträglich nach dem dritten zusammengeflickt.',
    },
  },
  {
    id: 'vault',
    name: 'Vault',
    hue: 268,
    icon: 'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    role: { en: 'Keeping your data organised', es: 'Organizar tus datos', de: 'Deine Daten ordnen' },
    summary: {
      en: 'Sets up your customer records, orders and other business data so you can still find and trust them in three years — and only the right people can see them.',
      es: 'Organiza tus fichas de clientes, pedidos y demás datos del negocio para que dentro de tres años sigas pudiendo encontrarlos y confiar en ellos — y solo las personas adecuadas puedan verlos.',
      de: 'Ordnet deine Kundendaten, Bestellungen und andere Geschäftsdaten so, dass du sie in drei Jahren noch findest und ihnen vertrauen kannst — und nur die richtigen Personen sie sehen können.',
    },
    does: {
      en: [
        'A well-organised database that stays useful as your business grows',
        'Clear rules for who can see and change what',
        'Connections between your different tools and systems',
        'A structure that survives being rebuilt or redesigned later',
      ],
      es: [
        'Una base de datos bien organizada que sigue siendo útil según crece tu negocio',
        'Reglas claras sobre quién puede ver y cambiar qué',
        'Conexiones entre tus distintas herramientas y sistemas',
        'Una estructura que sobrevive a una reconstrucción o rediseño posterior',
      ],
      de: [
        'Eine gut organisierte Datenbank, die auch mit wachsendem Unternehmen nützlich bleibt',
        'Klare Regeln, wer was sehen und ändern darf',
        'Verbindungen zwischen deinen verschiedenen Tools und Systemen',
        'Eine Struktur, die auch einen späteren Umbau oder Neustart übersteht',
      ],
    },
    proof: {
      en: 'A health-tracking record with 6 categories and 65 detailed entry types was rebuilt from the ground up once, without losing or breaking a single existing record.',
      es: 'Un historial de seguimiento de salud con 6 categorías y 65 tipos de entrada detallados se reconstruyó por completo una vez, sin perder ni romper ni un solo registro existente.',
      de: 'Eine Gesundheits-Dokumentation mit 6 Kategorien und 65 detaillierten Eintragsarten wurde einmal komplett neu aufgebaut, ohne einen einzigen bestehenden Eintrag zu verlieren oder zu beschädigen.',
    },
  },
  {
    id: 'forge',
    name: 'Forge',
    hue: 28,
    icon: 'M3 17h18M6 17V9l6-5 6 5v8M9.5 17v-4h5v4',
    role: { en: 'Building your website and app', es: 'Construir tu web y tu app', de: 'Deine Website und App bauen' },
    summary: {
      en: 'Builds the actual screens your customers use — website and mobile app together, sharing the same look and the same login, instead of two separate products bolted together.',
      es: 'Construye las pantallas reales que usan tus clientes — web y app móvil juntas, con el mismo aspecto y el mismo login, en lugar de dos productos separados pegados con cinta.',
      de: 'Baut die echten Bildschirme, die deine Kunden nutzen — Website und mobile App zusammen, mit demselben Look und demselben Login, statt zwei separater Produkte, die notdürftig verbunden sind.',
    },
    does: {
      en: [
        'A website that works well on any device',
        'An iPhone and Android app built together, not as two separate projects',
        'A consistent look and feel across everything, not a patchwork of screens',
        'Shared building blocks (login, settings, design) so future features are faster to build',
      ],
      es: [
        'Una web que funciona bien en cualquier dispositivo',
        'Una app para iPhone y Android construida a la vez, no como dos proyectos separados',
        'Un aspecto y una sensación consistentes en todo, no un mosaico de pantallas',
        'Piezas compartidas (login, ajustes, diseño) para que las próximas funciones se construyan más rápido',
      ],
      de: [
        'Eine Website, die auf jedem Gerät gut funktioniert',
        'Eine iPhone- und Android-App, die zusammen gebaut werden, nicht als zwei getrennte Projekte',
        'Ein einheitliches Erscheinungsbild überall, statt eines Flickenteppichs aus Bildschirmen',
        'Gemeinsame Bausteine (Login, Einstellungen, Design), damit künftige Funktionen schneller entstehen',
      ],
    },
    proof: {
      en: 'Two different products were launched sharing the same building blocks — the second one reached customers without rebuilding everything the first one already had.',
      es: 'Dos productos distintos se lanzaron compartiendo las mismas piezas — el segundo llegó a los clientes sin reconstruir todo lo que ya tenía el primero.',
      de: 'Zwei verschiedene Produkte wurden mit denselben Bausteinen live gebracht — das zweite erreichte Kunden, ohne alles neu zu bauen, was das erste bereits hatte.',
    },
  },
  {
    id: 'sentinel',
    name: 'Sentinel',
    hue: 152,
    icon: 'M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3Zm-3 9 2.2 2.2L15 10',
    role: {
      en: 'Keeping it safe and legal',
      es: 'Mantenerlo seguro y legal',
      de: 'Sicher und rechtlich sauber halten',
    },
    summary: {
      en: 'Makes sure your customers\' data cannot leak, your app only asks for permissions it actually needs, and your privacy paperwork can survive a real inspection.',
      es: 'Se asegura de que los datos de tus clientes no puedan filtrarse, tu app solo pide los permisos que realmente necesita, y tu documentación de privacidad aguanta una inspección real.',
      de: 'Sorgt dafür, dass die Daten deiner Kunden nicht abfließen können, deine App nur die Berechtigungen anfragt, die sie wirklich braucht, und deine Datenschutz-Unterlagen eine echte Prüfung überstehen.',
    },
    does: {
      en: [
        'Passwords and payment details handled the safe way, not the easy way',
        'Your privacy policy and data rules written down and kept up to date',
        'Removing app permissions and access nobody can actually justify',
        'Getting your app ready to pass Apple and Google\'s review',
      ],
      es: [
        'Contraseñas y datos de pago gestionados de forma segura, no de la forma más fácil',
        'Tu política de privacidad y tus normas de datos por escrito y al día',
        'Eliminar permisos y accesos en la app que nadie puede justificar realmente',
        'Preparar tu app para pasar la revisión de Apple y Google',
      ],
      de: [
        'Passwörter und Zahlungsdaten sicher behandelt, nicht auf die bequeme Art',
        'Deine Datenschutzerklärung und Datenregeln schriftlich und aktuell',
        'Berechtigungen und Zugriffe entfernen, die niemand wirklich begründen kann',
        'Deine App fit machen für die Prüfung bei Apple und Google',
      ],
    },
    proof: {
      en: 'Payment handling was moved off the customer\'s phone onto a secure server, and an unnecessary camera permission was removed from an app entirely instead of just being explained away.',
      es: 'La gestión de pagos se movió del teléfono del cliente a un servidor seguro, y un permiso de cámara innecesario se eliminó por completo de una app en vez de simplemente justificarlo.',
      de: 'Die Zahlungsabwicklung wurde vom Handy des Kunden auf einen sicheren Server verlagert, und eine unnötige Kamera-Berechtigung wurde komplett aus einer App entfernt, statt sie nur zu rechtfertigen.',
    },
  },
  {
    id: 'relay',
    name: 'Relay',
    hue: 312,
    icon: 'M5 12a7 7 0 0 1 7-7m7 7a7 7 0 0 1-7 7m-7-7H2m20 0h-3m-7 7-2.5-2.5M12 5l2.5 2.5M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
    role: { en: 'Launching and keeping it running', es: 'Lanzar y mantenerlo en marcha', de: 'Launchen und am Laufen halten' },
    summary: {
      en: 'Gets your app into the App Store and Google Play and keeps it there — handles updates, undoes mistakes quickly, and takes care of the unglamorous maintenance nobody plans for.',
      es: 'Lleva tu app a la App Store y Google Play y la mantiene ahí — gestiona las actualizaciones, deshace errores rápido, y se ocupa del mantenimiento poco vistoso que nadie planifica.',
      de: 'Bringt deine App in den App Store und bei Google Play unter und hält sie dort — kümmert sich um Updates, macht Fehler schnell rückgängig und übernimmt die unglamouröse Wartung, die niemand einplant.',
    },
    does: {
      en: [
        'A reliable process for publishing updates without breaking things',
        'Getting your app approved on the App Store and Google Play',
        'A quick way to undo a bad update if something goes wrong',
        'Moving or updating your data safely, without losing anything',
      ],
      es: [
        'Un proceso fiable para publicar actualizaciones sin romper nada',
        'Conseguir que tu app se apruebe en la App Store y Google Play',
        'Una forma rápida de deshacer una mala actualización si algo sale mal',
        'Mover o actualizar tus datos de forma segura, sin perder nada',
      ],
      de: [
        'Ein zuverlässiger Prozess, um Updates zu veröffentlichen, ohne etwas kaputtzumachen',
        'Die Freigabe deiner App im App Store und bei Google Play',
        'Eine schnelle Möglichkeit, ein schlechtes Update rückgängig zu machen',
        'Deine Daten sicher verschieben oder aktualisieren, ohne etwas zu verlieren',
      ],
    },
    proof: {
      en: 'An app was built, tested and submitted to Google Play from scratch, including moving all existing customer listings to a new, safer storage system without a single one needing to be re-entered.',
      es: 'Se construyó, probó y envió una app a Google Play desde cero, incluyendo mover todos los anuncios existentes de los clientes a un sistema de almacenamiento nuevo y más seguro sin que ninguno tuviera que volver a introducirse.',
      de: 'Eine App wurde von Grund auf gebaut, getestet und bei Google Play eingereicht — inklusive der Umstellung aller bestehenden Kunden-Anzeigen auf ein neues, sichereres Speichersystem, ohne dass auch nur eine erneut eingegeben werden musste.',
    },
  },
  {
    id: 'beacon',
    name: 'Beacon',
    hue: 88,
    icon: 'M12 2v4m0 12v4M2 12h4m12 0h4M5 5l2.8 2.8m8.4 8.4L19 19M19 5l-2.8 2.8m-8.4 8.4L5 19m11-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
    role: { en: 'Getting found online', es: 'Conseguir que te encuentren', de: 'Online gefunden werden' },
    summary: {
      en: 'Makes your business easy to find on Google, works properly for customers in different countries and languages, and gives you numbers you can actually act on.',
      es: 'Hace que tu negocio se encuentre fácilmente en Google, funciona bien para clientes en distintos países e idiomas, y te da datos sobre los que realmente puedes actuar.',
      de: 'Macht dein Unternehmen bei Google leicht auffindbar, funktioniert sauber für Kunden in verschiedenen Ländern und Sprachen, und liefert dir Zahlen, aus denen du wirklich etwas ableiten kannst.',
    },
    does: {
      en: [
        'Better visibility in Google search results',
        'A website or app that works properly in more than one language',
        'Pages that load fast, so visitors do not leave before they arrive',
        'Clear numbers on what visitors actually do on your site',
      ],
      es: [
        'Mejor visibilidad en los resultados de búsqueda de Google',
        'Una web o app que funciona bien en más de un idioma',
        'Páginas que cargan rápido, para que los visitantes no se vayan antes de llegar',
        'Datos claros sobre lo que los visitantes realmente hacen en tu web',
      ],
      de: [
        'Bessere Sichtbarkeit in den Google-Suchergebnissen',
        'Eine Website oder App, die richtig in mehr als einer Sprache funktioniert',
        'Seiten, die schnell laden, damit Besucher nicht abspringen, bevor sie ankommen',
        'Klare Zahlen dazu, was Besucher auf deiner Seite wirklich tun',
      ],
    },
    proof: {
      en: 'Eleven languages running in production for one product, and this very page — fast-loading, easy to find, and built without the tracking scripts that usually slow a site down.',
      es: 'Once idiomas funcionando en producción para un solo producto, y esta misma página — rápida, fácil de encontrar, y construida sin los scripts de seguimiento que normalmente ralentizan un sitio.',
      de: 'Elf Sprachen live im Einsatz für ein einziges Produkt, und diese Seite selbst — schnell ladend, leicht zu finden und gebaut ohne die Tracking-Skripte, die eine Seite normalerweise ausbremsen.',
    },
  },
];

/** The end-to-end sequence a client is buying, in order. */
export const phases = [
  {
    id: 'frame',
    agent: 'Atlas',
    label: { en: 'Understand', es: 'Entender', de: 'Verstehen' },
    body: {
      en: 'Two weeks. We learn how your business actually works, spot the risks, and write up a clear plan with real costs. You end up with a document that is yours to keep — even if you decide not to continue with us.',
      es: 'Dos semanas. Aprendemos cómo funciona realmente tu negocio, detectamos los riesgos, y escribimos un plan claro con costes reales. Terminas con un documento que es tuyo — incluso si decides no continuar con nosotros.',
      de: 'Zwei Wochen. Wir lernen, wie dein Unternehmen wirklich funktioniert, erkennen die Risiken, und schreiben einen klaren Plan mit echten Kosten. Am Ende hast du ein Dokument, das dir gehört — auch wenn du dich entscheidest, nicht mit uns weiterzumachen.',
    },
  },
  {
    id: 'build',
    agent: 'Vault · Forge',
    label: { en: 'Build', es: 'Construir', de: 'Bauen' },
    body: {
      en: 'We get your data organised first, then build the screens on top. You see working software in front of real customers early, built on a foundation your next product can reuse.',
      es: 'Primero organizamos tus datos, después construimos las pantallas encima. Ves software funcionando delante de clientes reales pronto, construido sobre una base que tu próximo producto puede reutilizar.',
      de: 'Wir bringen zuerst deine Daten in Ordnung, dann bauen wir die Bildschirme darauf. Du siehst früh funktionierende Software vor echten Kunden — auf einer Basis, die dein nächstes Produkt wiederverwenden kann.',
    },
  },
  {
    id: 'harden',
    agent: 'Sentinel',
    label: { en: 'Make it safe', es: 'Hacerlo seguro', de: 'Absichern' },
    body: {
      en: 'Before it goes live, not after something goes wrong. We check for weak points, cut down on unnecessary access, and write down your privacy policy properly.',
      es: 'Antes de que salga a producción, no después de que algo falle. Revisamos los puntos débiles, recortamos accesos innecesarios, y redactamos bien tu política de privacidad.',
      de: 'Bevor es live geht, nicht nachdem etwas schiefgelaufen ist. Wir prüfen Schwachstellen, reduzieren unnötige Zugriffe, und schreiben deine Datenschutzerklärung ordentlich auf.',
    },
  },
  {
    id: 'ship',
    agent: 'Relay · Beacon',
    label: { en: 'Launch', es: 'Lanzar', de: 'Launchen' },
    body: {
      en: 'Getting it live in the App Store and online, making sure people can find it, and handing everything over. Your team gets clear notes they can actually follow, and full access to everything.',
      es: 'Lo llevamos a la App Store y a internet, nos aseguramos de que la gente pueda encontrarlo, y te lo entregamos todo. Tu equipo recibe notas claras que puede seguir de verdad, y acceso completo a todo.',
      de: 'Wir bringen es in den App Store und ins Netz, sorgen dafür, dass Leute es finden, und übergeben alles. Dein Team bekommt klare Notizen, denen es wirklich folgen kann, und vollen Zugriff auf alles.',
    },
  },
];
