import {
  Shield,
  SprayCan,
  Leaf,
  Building2,
  PartyPopper,
  HardHat,
  DoorOpen,
  Route,
  Settings,
  Sparkles,
  Brush,
  GlassWater,
  Hammer,
  Trees,
  TreePine,
  Snowflake,
  Wrench,
  MapPin,
  ClipboardList,
  Users,
  type LucideIcon,
} from "@/lib/icons";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  context: string;
  desc: string;
  points: string[];
  longDesc: string;
  typicalClients: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
}

export type DivisionSlug =
  | "sicherheit"
  | "reinigung"
  | "gruenanlagen"
  | "facility-management"
  | "facility"
  | "event-service";

export interface DivisionData {
  slug: DivisionSlug;
  parent?: "facility";
  shortLabel: string;
  title: string;
  claim: string;
  icon: LucideIcon;
  intro: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  primaryKeyword: string;
  services: ServiceData[];
}

const sicherheitServices: ServiceData[] = [
  {
    slug: "objektschutz",
    icon: Building2,
    title: "Objektschutz",
    context: "Für Betriebsstätten mit Publikumsverkehr oder erhöhtem Schutzbedarf außerhalb der Geschäftszeiten.",
    desc: "Zugangskontrollen, Schichtbetrieb und sichtbare Präsenz – abgestimmt auf Objekt und Risikoprofil.",
    points: ["Zugangs- und Zutrittskontrolle", "Schließ- und Kontrolldienste", "Dokumentierte Rundgänge"],
    longDesc:
      "Objektschutz und Werkschutz für Gebäude, Betriebsstätten und Industrieanlagen – mit geprüftem Sicherheitspersonal, das auf Ihr Objekt eingewiesen ist. Ob Bürokomplex, Produktionsstätte, Lager oder öffentliches Gebäude: sichtbare Präsenz, geregelte Zugangs- und Zutrittskontrolle und dokumentierte Kontrollgänge. Die Wachkonzepte richten sich nach Risikoprofil, Betriebszeiten und den internen Abläufen Ihres Hauses.",
    typicalClients: "Hausverwaltungen, Unternehmen mit Büro- und Gewerbeflächen, öffentliche Einrichtungen, Industriebetriebe.",
    h1: "Objektschutz & Werkschutz – Gebäudebewachung",
    metaTitle: "Objektschutz & Werkschutz | Sentinel Services",
    metaDescription:
      "Objektschutz, Werkschutz und Wachschutz für Gebäude, Industrie und Gewerbe – geprüftes Sicherheitspersonal, Zugangskontrolle und dokumentierte Rundgänge.",
    faqs: [
      { question: "Welche Qualifikationen haben Ihre Objektschutzkräfte?", answer: "Unsere Einsatzkräfte haben die IHK-Sachkundeprüfung für das Bewachungsgewerbe, werden regelmäßig in Deeskalation und Erste Hilfe geschult und vor dem ersten Einsatz objektspezifisch eingewiesen." },
      { question: "Wie schnell kann ein Objektschutz-Einsatz starten?", answer: "Bei kurzfristigem Bedarf können wir zügig einsatzbereit sein. Für planbare Einsätze erstellen wir vorab ein individuelles Konzept." },
      { question: "Bieten Sie auch Nacht- und Wochenendbewachung an?", answer: "Ja, wir bieten Objektschutz rund um die Uhr, einschließlich Nacht-, Wochenend- und Feiertagsdiensten." },
      { question: "Was ist der Unterschied zwischen Objektschutz und Werkschutz?", answer: "Werkschutz ist eine Sonderform des Objektschutzes für Industriebetriebe und Produktionsstätten – mit zusätzlichem Fokus auf Werkstor-Kontrolle, Brandwache und Schutz sensibler Anlagen." },
    ],
  },
  {
    slug: "veranstaltungsschutz",
    icon: PartyPopper,
    title: "Veranstaltungsschutz",
    context: "Für Events mit Besucherströmen, VIP-Bereichen oder erhöhtem Koordinationsbedarf.",
    desc: "Einlassmanagement, Besucherlenkung und Deeskalation – in direkter Abstimmung mit dem Veranstalter.",
    points: ["Personalisiertes Einlassmanagement", "Deeskalation und Intervention", "Abstimmung mit Ordnungsbehörden"],
    longDesc:
      "Veranstaltungsschutz und Eventsecurity für Konzerte, Messen, Firmenevents und Stadtfeste – mit qualifizierten Türstehern und erfahrener Einsatzleitung. Wir liefern Einlasssteuerung, Besucherlenkung, VIP-Betreuung und Deeskalationsbereitschaft, immer in enger Abstimmung mit dem Veranstalter und den zuständigen Ordnungsbehörden.",
    typicalClients: "Veranstalter, Agenturen, Unternehmen mit Firmenevents, Kommunen und öffentliche Träger.",
    h1: "Veranstaltungsschutz & Eventsecurity",
    metaTitle: "Veranstaltungsschutz & Eventsecurity | Sentinel Services",
    metaDescription:
      "Veranstaltungsschutz mit erfahrenen Türstehern: Einlasskontrolle, Besucherlenkung, Deeskalation – für Firmenevents, Messen und Großveranstaltungen.",
    faqs: [
      { question: "Ab welcher Veranstaltungsgröße bieten Sie Schutz an?", answer: "Wir sichern Veranstaltungen jeder Größe – von Firmenfeiern mit 50 Gästen bis zu Großveranstaltungen mit mehreren tausend Besuchern." },
      { question: "Übernehmen Sie auch die Abstimmung mit dem Ordnungsamt?", answer: "Ja, wir unterstützen bei der Erstellung von Sicherheitskonzepten und koordinieren uns direkt mit den zuständigen Behörden." },
      { question: "Stellen Sie auch Türsteher für einzelne Abendveranstaltungen?", answer: "Ja, wir stellen geprüfte Türsteher und Ordner – inklusive Einlasskontrolle, Alterskontrolle und Konfliktbewältigung." },
    ],
  },
  {
    slug: "baustellenbewachung",
    icon: HardHat,
    title: "Baustellenbewachung",
    context: "Für Projektflächen mit hohem Materialwert oder Zugang außerhalb der Bauzeiten.",
    desc: "Nacht- und Wochenendbewachung mit dokumentierten Kontrollgängen und Zugangssicherung.",
    points: ["Nacht-/Wochenendpräsenz", "Materialschutz und Zufahrtskontrolle", "Sofortmeldung bei Vorfällen"],
    longDesc:
      "Baustellenbewachung, Brandwache und Nachtwache schützen Ihre Projektflächen genau dann, wenn keine Bauleitung vor Ort ist. Bei hohem Materialwert, offenen Zugängen und steigendem Risiko durch Metalldiebstahl sichern wir Zufahrten, kontrollieren Zugänge, dokumentieren Kontrollgänge und schützen Baumaterial sowie Gerätschaften.",
    typicalClients: "Bauunternehmen, Projektentwickler, Generalunternehmer, kommunale Bauträger.",
    h1: "Baustellenbewachung, Brandwache & Nachtwache",
    metaTitle: "Baustellenbewachung & Brandwache | Sentinel Services",
    metaDescription:
      "Baustellenbewachung in Nacht- und Wochenendlage, Brandwache nach DGUV und Nachtwache – geprüftes Personal, klare Meldekette bei Vorfällen.",
    faqs: [
      { question: "Welche Baustellen sichern Sie?", answer: "Wir sichern Baustellen jeder Größe – vom Einfamilienhaus bis zur Großbaustelle. Der Fokus liegt auf Flächen mit hohem Materialwert oder offenem Zugang." },
      { question: "Was passiert bei einem Vorfall auf der Baustelle?", answer: "Unsere Einsatzkräfte melden jeden Vorfall sofort an den Bauleiter und dokumentieren den Sachverhalt lückenlos." },
      { question: "Übernehmen Sie auch Brandwachen?", answer: "Ja, wir stellen Brandwachen für Schweiß- und Heißarbeiten sowie als Sicherheitswache nach Bränden – mit entsprechend geschultem Personal nach DGUV-Vorgaben." },
    ],
  },
  {
    slug: "empfangs-und-pfortendienst",
    icon: DoorOpen,
    title: "Empfangs- und Pfortendienste",
    context: "Für repräsentative Eingangsbereiche, die Sicherheitsfunktion und Servicequalität verbinden.",
    desc: "Professioneller Besucherempfang, Schlüsselverwaltung und Telefonzentrale.",
    points: ["Besucherregistrierung", "Schlüssel- und Zutrittsverwaltung", "Repräsentativer erster Eindruck"],
    longDesc:
      "Unser Empfangsdienst und Pfortendienst verbindet professionelle Sicherheitsfunktion mit erstklassigem Serviceauftritt – ähnlich einem klassischen Doorman: Besucherregistrierung, Schlüsselverwaltung, Telefonzentrale und diskreter Zutrittsschutz. Das Empfangspersonal wird auf Ihr Objekt, Ihre Unternehmenskultur und Ihre Sicherheitsstandards eingewiesen.",
    typicalClients: "Unternehmen mit Empfangsbereich, Mehrmieterobjekte, Kanzleien, Arztpraxen, Behörden.",
    h1: "Empfangsdienst & Pfortendienst",
    metaTitle: "Empfangsdienst & Pfortendienst | Sentinel Services",
    metaDescription:
      "Empfangs- und Pfortendienst: Besucherempfang, Schlüsselverwaltung, Telefonzentrale und Zutrittsprüfung – professionell und serviceorientiert.",
    faqs: [
      { question: "Kann Ihr Empfangspersonal auch Telefonanrufe entgegennehmen?", answer: "Ja, unser Personal übernimmt auf Wunsch die Telefonzentrale und leitet Anrufe nach Ihren Vorgaben weiter." },
      { question: "Wie wird das Empfangspersonal eingearbeitet?", answer: "Vor Einsatzbeginn erhalten unsere Kräfte eine objektspezifische Einweisung in Abläufe, Ansprechpartner und Hausordnung." },
    ],
  },
  {
    slug: "kontroll-und-streifendienst",
    icon: Route,
    title: "Kontroll- und Streifendienste",
    context: "Für Areale, die regelmäßige Überprüfung erfordern – ohne permanente Besetzung.",
    desc: "Revierdienst, Alarmverfolgung und Schließdienste nach festgelegtem Kontrollplan.",
    points: ["Revierfahrten nach Einsatzplan", "Alarm- und Störungsverfolgung", "Protokollierte Schließrunden"],
    longDesc:
      "Nicht jedes Objekt braucht permanente Besetzung – aber regelmäßige Kontrolle. Unser Revierdienst und Streifendienst umfasst geplante Revierfahrten, Alarm- und Störungsverfolgung, Nachtwache sowie dokumentierte Schließrunden. Die Kontrollpläne werden individuell auf Ihr Objekt, Ihre Betriebszeiten und Ihre Risikoschwerpunkte abgestimmt.",
    typicalClients: "Hausverwaltungen, Gewerbegebiete, Wohnanlagen, Industrieparks.",
    h1: "Revierdienst, Streifendienst & Nachtwache",
    metaTitle: "Revierdienst & Streifendienst | Sentinel Services",
    metaDescription:
      "Revierdienst, Streifendienst und Nachtwache mit geplanten Kontrollfahrten, Alarmverfolgung und Schließrunden – Bewachung ohne permanente Besetzung.",
    faqs: [
      { question: "Wie oft finden die Kontrollfahrten statt?", answer: "Die Häufigkeit wird individuell festgelegt – von einmal täglich bis zu mehrfachen Kontrollen pro Nacht, je nach Risikoprofil und Bedarf." },
      { question: "Werden die Kontrollgänge dokumentiert?", answer: "Ja, jeder Kontrollgang wird lückenlos dokumentiert. Sie erhalten regelmäßige Berichte über durchgeführte Kontrollen und festgestellte Abweichungen." },
    ],
  },
  {
    slug: "sicherheitskonzepte",
    icon: Settings,
    title: "Individuelle Sicherheitskonzepte",
    context: "Für komplexe Anforderungen, die keine Standardlösung abdeckt.",
    desc: "Risikoanalyse, Maßnahmenplanung und laufende Optimierung – zugeschnitten auf Ihr Objekt.",
    points: ["Objektspezifische Risikoanalyse", "Maßnahmen- und Einsatzplanung", "Regelmäßige Konzeptüberprüfung"],
    longDesc:
      "Ein gutes Sicherheitskonzept ist mehr als die Summe einzelner Wachschichten. Wir schauen uns Ihr Objekt an, bewerten Risiken strukturiert, leiten daraus konkrete Maßnahmen ab und setzen sie mit qualifiziertem Personal um. Konzept, Umsetzung und laufende Anpassung kommen aus einer Hand – als zugelassenes Bewachungsunternehmen.",
    typicalClients: "Unternehmen mit komplexen Sicherheitsanforderungen, sensible Infrastruktur, Konzernstandorte.",
    h1: "Sicherheitskonzept erstellen – Risikoanalyse & Umsetzung",
    metaTitle: "Sicherheitskonzept erstellen lassen | Sentinel Services",
    metaDescription:
      "Sicherheitskonzept aus einer Hand: Risikoanalyse, Maßnahmenplan, Personalmodell und Reporting – durch ein zugelassenes Bewachungsunternehmen.",
    faqs: [
      { question: "Was umfasst eine Risikoanalyse?", answer: "Wir bewerten Ihr Objekt hinsichtlich Lage, Zugänge, Betriebsabläufe, bekannter Risiken und vorhandener Schutzmaßnahmen – als Grundlage für ein passgenaues Sicherheitskonzept." },
      { question: "Wie oft wird das Sicherheitskonzept überprüft?", answer: "In der Regel vierteljährlich oder bei wesentlichen Änderungen der Rahmenbedingungen." },
    ],
  },
];

const reinigungServices: ServiceData[] = [
  {
    slug: "unterhaltsreinigung",
    icon: Sparkles,
    title: "Unterhaltsreinigung",
    context: "Tägliche oder regelmäßige Pflege von Büros, Praxen und Gewerbeobjekten.",
    desc: "Strukturierte Reinigungspläne nach Hygiene- und Arbeitsschutzvorgaben – mit dokumentierter Leistung.",
    points: ["Büro-, Sanitär- und Verkehrsflächen", "Festgelegter Reinigungsplan", "Einweisung & Qualitätskontrolle"],
    longDesc:
      "Unterhaltsreinigung in Büros, Praxen, Verwaltungsgebäuden und Gewerbeobjekten. Wir reinigen nach klaren Leistungsverzeichnissen, mit eingewiesenem Personal und nachvollziehbarer Qualitätssicherung. Reinigungsmittel und Frequenzen werden auf Objektart, Nutzung und Hygieneanforderungen abgestimmt.",
    typicalClients: "Büros, Verwaltungen, Praxen, Kanzleien, Mehrmieterobjekte.",
    h1: "Unterhaltsreinigung für Büro und Gewerbe",
    metaTitle: "Unterhaltsreinigung Büro & Gewerbe | Sentinel Services",
    metaDescription:
      "Zuverlässige Unterhaltsreinigung für Büros, Praxen und Gewerbeobjekte. Festes Personal, klare Leistungsverzeichnisse, dokumentierte Qualität.",
    faqs: [
      { question: "Wie oft wird gereinigt?", answer: "Die Reinigungsfrequenz richtet sich nach Nutzung und Hygieneanforderungen – von täglich bis wöchentlich. Wir erstellen einen passenden Reinigungsplan." },
      { question: "Setzen Sie umweltfreundliche Reinigungsmittel ein?", answer: "Ja, wir bevorzugen ökologisch verträgliche Reinigungsmittel und dosieren materialschonend." },
    ],
  },
  {
    slug: "glas-und-fensterreinigung",
    icon: GlassWater,
    title: "Glas- und Fensterreinigung",
    context: "Für Fenster, Glasfassaden, Wintergärten und Innenverglasungen.",
    desc: "Streifenfreie Reinigung mit Osmoseverfahren, Hebearbeitsbühnen oder klassischer Technik – je nach Objekt.",
    points: ["Innen- und Außenseiten", "Rahmen, Bänke und Beschattung", "Sichere Höhenarbeit"],
    longDesc:
      "Fensterreinigung und Glasreinigung für Bürogebäude, Ladenflächen, Wintergärten und private Objekte. Wir arbeiten mit Osmose-Wassersystemen, Teleskoptechnik oder Hebebühne – je nach Höhe und Zugänglichkeit. Rahmen, Fensterbänke und Beschattungselemente werden auf Wunsch mitgereinigt.",
    typicalClients: "Bürogebäude, Einzelhandel, Hotellerie, Wohnanlagen.",
    h1: "Fensterreinigung & Glasreinigung",
    metaTitle: "Fensterreinigung & Glasreinigung | Sentinel Services",
    metaDescription:
      "Professionelle Fensterreinigung und Glasreinigung für Gewerbe und Wohnobjekte. Streifenfreies Ergebnis, sichere Höhenarbeit, planbare Intervalle.",
    faqs: [
      { question: "Reinigen Sie auch in großen Höhen?", answer: "Ja, mit Hebebühnen, Teleskopstangen oder Industriekletter-Partnern – je nach Objekt und Sicherheitsanforderung." },
      { question: "In welchen Intervallen empfehlen Sie die Reinigung?", answer: "Für Bürogebäude meist quartalsweise, für Ladenfassaden monatlich. Wir erstellen einen Vorschlag passend zu Lage und Verschmutzungsgrad." },
    ],
  },
  {
    slug: "grundreinigung",
    icon: Brush,
    title: "Grundreinigung",
    context: "Intensive Reinigung von Bodenbelägen, Sanitär und Oberflächen – einmalig oder periodisch.",
    desc: "Tiefenreinigung mit professioneller Maschinen- und Chemietechnik, abgestimmt auf den Belag.",
    points: ["Bodenpflege & Einpflege", "Sanitärgrundreinigung", "Sonderreinigung nach Bedarf"],
    longDesc:
      "Grundreinigung als Tiefenreinigung von Bodenbelägen, Sanitärbereichen und Oberflächen – mit auf das Material abgestimmter Maschinen- und Reinigungsmitteltechnik. Klassisch ergänzend zur Unterhaltsreinigung in festen Intervallen oder einmalig nach Bedarf.",
    typicalClients: "Verwaltungen, Industrie, Hotellerie, Wohnanlagen.",
    h1: "Grundreinigung für Gewerbe & Verwaltung",
    metaTitle: "Grundreinigung Gewerbe & Industrie | Sentinel Services",
    metaDescription:
      "Grundreinigung für Böden, Sanitär und Oberflächen – mit passender Maschinen- und Chemietechnik. Sichtbare Ergebnisse, planbare Intervalle.",
    faqs: [
      { question: "Wann ist eine Grundreinigung sinnvoll?", answer: "Ergänzend zur Unterhaltsreinigung in festen Intervallen (z. B. jährlich) oder einmalig nach Mieterwechsel, Renovierung oder bei stark beanspruchten Belägen." },
      { question: "Welche Bodenbeläge reinigen Sie?", answer: "PVC, Linoleum, Naturstein, Fliesen, Teppich und mehr – jeweils mit passender Maschinen- und Pflegetechnik." },
    ],
  },
  {
    slug: "bauschluss-und-sonderreinigung",
    icon: Hammer,
    title: "Bauschluss- und Sonderreinigung",
    context: "Reinigung nach Umbau, Renovierung oder Mieterwechsel.",
    desc: "Entfernung von Bauschmutz, Klebe- und Farbresten – inklusive Erstreinigung vor Bezug.",
    points: ["Bauend- und Bauzwischenreinigung", "Erstreinigung vor Übergabe", "Sonderreinigung nach Vorfall"],
    longDesc:
      "Bauschluss- und Sonderreinigung nach Umbau, Renovierung oder Mieterwechsel: Entfernung von Bauschmutz, Klebe- und Farbresten, Erstreinigung vor Bezug sowie anlassbezogene Sonderreinigung nach Wasserschäden oder Vorfällen.",
    typicalClients: "Bauunternehmen, Projektentwickler, Hausverwaltungen, Vermieter.",
    h1: "Bauschlussreinigung & Sonderreinigung",
    metaTitle: "Bauschlussreinigung & Sonderreinigung | Sentinel Services",
    metaDescription:
      "Bauschluss-, Bauend- und Sonderreinigung: Bauschmutz, Klebe- und Farbreste entfernen, Erstreinigung vor Übergabe.",
    faqs: [
      { question: "Wie schnell können Sie nach Bauende reinigen?", answer: "Wir richten uns nach Ihrem Bauzeitplan und reinigen termingerecht vor Übergabe oder Bezug." },
    ],
  },
];

const gruenServices: ServiceData[] = [
  {
    slug: "pflege",
    icon: Trees,
    title: "Grünanlagenpflege",
    context: "Regelmäßige Pflege von Außenanlagen, Beeten und Rasenflächen.",
    desc: "Mähen, Heckenschnitt, Beetpflege und Laubentfernung – nach festem Pflegeplan.",
    points: ["Rasenmahd & Vertikutieren", "Hecken- und Strauchschnitt", "Beet- und Wegepflege"],
    longDesc:
      "Pflege von Grün- und Außenanlagen für Gewerbe-, Wohn- und öffentliche Objekte: Rasenmahd, Vertikutieren, Hecken- und Strauchschnitt, Beetpflege, Laubentfernung und Wegepflege. Wir arbeiten nach einem auf Ihr Objekt abgestimmten Jahres-Pflegeplan.",
    typicalClients: "Hausverwaltungen, Wohnanlagen, Gewerbeparks, Kommunen.",
    h1: "Grünanlagenpflege & Gartenpflege",
    metaTitle: "Grünanlagenpflege & Gartenpflege | Sentinel Services",
    metaDescription:
      "Pflege von Grünanlagen, Rasen und Hecken für Gewerbe- und Wohnobjekte. Fester Pflegeplan, dokumentierte Leistung, verlässliche Intervalle.",
    faqs: [
      { question: "Übernehmen Sie auch die Entsorgung des Grünschnitts?", answer: "Ja, der gesamte Grünschnitt wird fachgerecht abtransportiert und entsorgt." },
      { question: "Pflegen Sie auch das ganze Jahr?", answer: "Ja, wir bieten ganzjährige Pflegeverträge mit saisonal angepassten Leistungen." },
    ],
  },
  {
    slug: "baumpflege",
    icon: TreePine,
    title: "Baumpflege & Baumkontrolle",
    context: "Sachkundige Pflege, Schnitt und Verkehrssicherungsprüfung.",
    desc: "Kronenpflege, Totholzentfernung und Baumkontrolle nach FLL-Richtlinie.",
    points: ["Kronen- und Erziehungsschnitt", "Totholzentfernung", "Baumkontrolle (Verkehrssicherung)"],
    longDesc:
      "Baumpflege und Baumkontrolle durch geschultes Personal: Kronen- und Erziehungsschnitt, Totholzentfernung sowie regelmäßige Baumkontrollen zur Verkehrssicherungspflicht – nach den Vorgaben der FLL-Baumkontroll­richtlinie.",
    typicalClients: "Kommunen, Wohnungsunternehmen, Industriegelände, Hotellerie.",
    h1: "Baumpflege & Baumkontrolle",
    metaTitle: "Baumpflege & Baumkontrolle | Sentinel Services",
    metaDescription:
      "Baumpflege, Kronenschnitt und Baumkontrollen zur Verkehrssicherung – nach FLL-Richtlinie und mit dokumentiertem Ergebnis.",
    faqs: [
      { question: "Erstellen Sie Baumkataster?", answer: "Ja, auf Wunsch übernehmen wir auch die digitale Erfassung und Pflege Ihres Baumbestands." },
    ],
  },
];

const facilityServices: ServiceData[] = [
  {
    slug: "winterdienst",
    icon: Snowflake,
    title: "Winterdienst",
    context: "Räum- und Streupflicht zuverlässig erfüllt – als Teil der infrastrukturellen Objektbetreuung.",
    desc: "Schneeräumung und Streudienst auf Wegen, Zufahrten und Parkflächen – rechtzeitig vor Arbeitsbeginn.",
    points: ["Schneeräumung", "Streudienst gemäß Vorgaben", "Dokumentation der Einsätze"],
    longDesc:
      "Winterdienst zur sicheren Erfüllung Ihrer Räum- und Streupflicht: Schnee räumen, Streumittel ausbringen, Wege und Zufahrten frei halten – vor Arbeits- und Schulbeginn und mit lückenloser Einsatzdokumentation als Nachweis.",
    typicalClients: "Hausverwaltungen, Gewerbeobjekte, Logistik, öffentliche Träger.",
    h1: "Winterdienst – Räum- und Streupflicht zuverlässig erfüllt",
    metaTitle: "Winterdienst für Gewerbe & Wohnobjekte | Sentinel Services",
    metaDescription:
      "Zuverlässiger Winterdienst: Schnee räumen, streuen, dokumentieren – pünktlich vor Arbeitsbeginn, mit Nachweis Ihrer Räum- und Streupflicht.",
    faqs: [
      { question: "Ab wann werden Sie aktiv?", answer: "Wir richten uns nach den gesetzlichen Vorgaben und Ihrem Objekt – in der Regel vor Arbeits- oder Schulbeginn." },
      { question: "Liefern Sie auch das Streugut?", answer: "Ja, Streumittel und Geräte gehören zum Leistungsumfang." },
    ],
  },
  {
    slug: "hausmeisterdienste",
    icon: Wrench,
    title: "Hausmeisterdienste",
    context: "Feste Ansprechperson vor Ort für alle wiederkehrenden Aufgaben rund um Ihr Objekt.",
    desc: "Kleinreparaturen, Sicht- und Funktionskontrollen, Schließ- und Öffnungsdienste sowie Koordination von Handwerksfirmen.",
    points: [
      "Regelmäßige Objektbegehungen",
      "Kleinreparaturen und Sofortmaßnahmen",
      "Schließ- und Öffnungsdienste",
      "Koordination externer Handwerker",
    ],
    longDesc:
      "Unsere Hausmeisterdienste bündeln die alltäglichen Aufgaben rund um Ihr Objekt: regelmäßige Begehungen, Kleinreparaturen, Kontrolle von Gemeinschaftsflächen, Schließ- und Öffnungsdienste sowie das Weiterleiten und Begleiten größerer Handwerksaufträge. Eigentümer und Verwaltungen haben eine feste Ansprechperson – Meldungen von Mietern oder Nutzern werden strukturiert bearbeitet und dokumentiert.",
    typicalClients: "Hausverwaltungen, Wohnungseigentümergemeinschaften, Gewerbeobjekte, Mehrmieterobjekte.",
    h1: "Hausmeisterdienste für Wohn- und Gewerbeobjekte",
    metaTitle: "Hausmeisterdienste & Objektbetreuung | Sentinel Services",
    metaDescription:
      "Hausmeisterdienste: Begehungen, Kleinreparaturen, Schließdienste, Handwerkerkoordination – mit fester Ansprechperson und dokumentierter Leistung.",
    faqs: [
      { question: "Welche Aufgaben übernimmt der Hausmeisterdienst?", answer: "Regelmäßige Objektbegehungen, Kleinreparaturen, Kontrolle von Gemeinschaftsflächen, Schließ- und Öffnungsdienste sowie das Koordinieren externer Handwerker. Den genauen Leistungskatalog stimmen wir individuell auf Ihr Objekt ab." },
      { question: "Gibt es eine feste Ansprechperson?", answer: "Ja. Jedes Objekt wird einer festen Kraft zugewiesen, damit sich Abläufe, Ansprechpartner und Besonderheiten schnell einspielen." },
      { question: "Wie werden Einsätze dokumentiert?", answer: "Jede Begehung und Maßnahme wird protokolliert. Sie erhalten regelmäßige Berichte, auf Wunsch auch mit Foto-Dokumentation." },
    ],
  },
  {
    slug: "entsorgungsmanagement",
    icon: ClipboardList,
    title: "Entsorgungs- & Abfallmanagement",
    context: "Sauberes Abfallhandling für Mehrmieterobjekte, Gewerbeflächen und Wohnanlagen.",
    desc: "Bereitstellung, Kontrolle und Rückführung von Müllbehältern sowie Abstimmung mit Entsorgungsunternehmen.",
    points: [
      "Behälter herausstellen und zurückführen",
      "Kontrolle von Sammelplätzen",
      "Fehlwürfe erkennen und melden",
      "Abstimmung mit Entsorgern",
    ],
    longDesc:
      "Wir übernehmen das operative Abfallmanagement rund um Ihr Objekt: Müllbehälter werden pünktlich zur Abholung bereitgestellt und anschließend zurückgeführt, Sammelplätze regelmäßig kontrolliert und sauber gehalten. Fehlwürfe und Überfüllungen werden erkannt, dokumentiert und – wo sinnvoll – direkt mit dem Entsorger nachgesteuert. So bleiben Höfe und Stellplätze ordentlich und Beschwerden von Mietern oder Nachbarn werden vermieden.",
    typicalClients: "Hausverwaltungen, Wohnungsunternehmen, Gewerbeobjekte, Handelsimmobilien.",
    h1: "Entsorgungs- & Abfallmanagement für Ihre Liegenschaft",
    metaTitle: "Entsorgungs- & Abfallmanagement | Sentinel Services",
    metaDescription:
      "Abfallmanagement für Wohn- und Gewerbeobjekte: Behälter bereitstellen, Sammelplätze kontrollieren, mit Entsorgern abstimmen – dokumentiert.",
    faqs: [
      { question: "Übernehmen Sie auch die Reinigung der Müllstandorte?", answer: "Ja, auf Wunsch reinigen wir Behälter und Sammelplätze regelmäßig und halten die Flächen sauber." },
      { question: "Was passiert bei falsch befüllten Behältern?", answer: "Fehlwürfe werden dokumentiert und – abhängig von der Vereinbarung – korrigiert oder direkt mit dem Entsorger geklärt." },
    ],
  },
  {
    slug: "parkraumbewirtschaftung",
    icon: MapPin,
    title: "Parkraumbewirtschaftung",
    context: "Ordnung auf Kunden-, Mitarbeiter- und Anwohnerstellplätzen.",
    desc: "Kontrolle der Nutzungsordnung, Meldung von Falschparkern und Betreuung von Schranken- und Beschilderungsanlagen.",
    points: [
      "Kontrolle der Stellplatznutzung",
      "Meldung und Dokumentation von Verstößen",
      "Betreuung von Beschilderung und Schranken",
    ],
    longDesc:
      "Wir bewirtschaften Parkflächen im Auftrag von Eigentümern und Verwaltern: geregelte Nutzung von Kunden-, Mitarbeiter- und Anwohnerstellplätzen, dokumentierte Kontrolle auf Falschparker sowie die laufende Betreuung von Beschilderung, Markierungen und Schrankenanlagen. So bleiben Zufahrten frei und die vereinbarte Ordnung wird sichtbar durchgesetzt.",
    typicalClients: "Gewerbeobjekte, Handelsimmobilien, Wohnanlagen, Hausverwaltungen.",
    h1: "Parkraumbewirtschaftung für Gewerbe und Wohnobjekte",
    metaTitle: "Parkraumbewirtschaftung | Sentinel Services",
    metaDescription:
      "Parkraumbewirtschaftung: Kontrolle der Stellplatznutzung, Dokumentation von Verstößen und Betreuung von Beschilderung und Schrankenanlagen.",
    faqs: [
      { question: "Übernehmen Sie auch die Ahndung von Falschparkern?", answer: "Wir dokumentieren Verstöße und übergeben sie an den vom Eigentümer beauftragten Abschleppdienst oder Dienstleister für die Vertragsstrafe." },
      { question: "Betreuen Sie auch Schrankenanlagen?", answer: "Ja, wir übernehmen Sicht- und Funktionskontrollen und koordinieren bei Störungen die zuständigen Fachfirmen." },
    ],
  },
];

const existingDivisions: DivisionData[] = [
  {
    slug: "sicherheit",
    shortLabel: "Sicherheit",
    title: "Sicherheit",
    claim: "Geprüftes Personal, klare Konzepte, dokumentierte Einsätze.",
    icon: Shield,
    primaryKeyword: "Sicherheitsdienst",
    intro:
      "Wir schützen Gebäude, Baustellen und Veranstaltungen. Zugangskontrollen, Bewachung und Streifendienste folgen einem klaren Einsatzplan – mit eingewiesenem Personal und einer festen Einsatzleitung.",
    h1: "Sicherheit",
    metaTitle: "Sicherheitsdienst & Wachdienst | Sentinel Services",
    metaDescription:
      "Sicherheitsdienst & Wachdienst: Objektschutz, Veranstaltungsschutz, Baustellenbewachung, Empfangs- und Streifendienst – geprüftes Personal, bundesweit.",
    keywords: "Sicherheitsdienst, Wachdienst, Sicherheitsfirma, Objektschutz, Werkschutz, Veranstaltungsschutz, Baustellenbewachung, Empfangsdienst, Streifendienst, Sicherheitskonzept",
    services: sicherheitServices,
  },
  {
    slug: "reinigung",
    shortLabel: "Reinigung",
    title: "Gebäudereinigung",
    claim: "Sauberkeit nach Plan – mit eingewiesenem Personal und nachvollziehbarer Qualität.",
    icon: SprayCan,
    primaryKeyword: "Gebäudereinigung",
    intro:
      "Gebäudereinigung für Büro, Gewerbe und Wohnobjekte: Unterhaltsreinigung, Glas- und Fensterreinigung, Grundreinigung sowie Bauschluss- und Sonderreinigung. Klare Leistungsverzeichnisse, eingewiesenes Personal und dokumentierte Qualität.",
    h1: "Gebäudereinigung – Unterhalt, Glas, Grund- und Sonderreinigung",
    metaTitle: "Gebäudereinigung für Büro & Gewerbe | Sentinel Services",
    metaDescription:
      "Gebäudereinigung aus einer Hand: Unterhalts-, Glas- & Fensterreinigung, Grund-, Bauschluss- und Sonderreinigung – mit dokumentierter Qualität.",
    keywords: "Gebäudereinigung, Unterhaltsreinigung, Fensterreinigung, Glasreinigung, Grundreinigung, Bauschlussreinigung, Sonderreinigung",
    services: reinigungServices,
  },
  {
    slug: "gruenanlagen",
    shortLabel: "Grünanlagen",
    title: "Garten & Grünanlagen",
    claim: "Gepflegte Außenanlagen – ganzjährig, planbar, dokumentiert.",
    icon: Leaf,
    primaryKeyword: "Grünanlagenpflege",
    intro:
      "Pflege von Garten- und Grünanlagen für Gewerbe-, Wohn- und öffentliche Objekte: Rasen, Hecken, Beete und Baumpflege – in festen Intervallen und nach klarem Pflegeplan.",
    h1: "Garten- & Grünanlagenpflege",
    metaTitle: "Grünanlagenpflege & Baumpflege | Sentinel Services",
    metaDescription:
      "Pflege von Grünanlagen und Baumpflege nach FLL. Ganzjährige Pflegeverträge mit dokumentierter Leistung.",
    keywords: "Grünanlagenpflege, Gartenpflege gewerblich, Landschaftspflege, Baumpflege, Baumkontrolle",
    services: gruenServices,
  },
  {
    slug: "facility-management",
    shortLabel: "Infrastrukturelles FM",
    title: "Infrastrukturelles Facility Management",
    claim: "Winterdienst und infrastrukturelle Objektbetreuung – zuverlässig und dokumentiert.",
    icon: Building2,
    primaryKeyword: "Infrastrukturelles Facility Management",
    intro:
      "Infrastrukturelles Facility Management für den laufenden Betrieb Ihres Objekts: Winterdienst, Hausmeisterdienste, Abfallmanagement und Parkraumbewirtschaftung – aus einer Hand, mit festem Ansprechpartner und dokumentierter Leistung.",
    h1: "Infrastrukturelles Facility Management – Objektbetreuung aus einer Hand",
    metaTitle: "Infrastrukturelles Facility Management | Sentinel Services",
    metaDescription:
      "Infrastrukturelles Facility Management: Winterdienst, Hausmeisterdienste, Abfall- und Parkraumbewirtschaftung – mit festem Ansprechpartner.",
    keywords: "Infrastrukturelles Facility Management, Winterdienst, Hausmeisterdienste, Abfallmanagement, Parkraumbewirtschaftung, Objektbetreuung",
    services: facilityServices,
  },
];

const eventServices: ServiceData[] = [
  {
    slug: "empfang-und-akkreditierung", icon: DoorOpen, title: "Empfang & Akkreditierung",
    context: "Für Firmenevents, Messen und Veranstaltungen mit angemeldeten Gästen.",
    desc: "Gäste begrüßen, Anmeldungen abgleichen und Orientierung geben – abgestimmt auf Ihren Veranstaltungsablauf.",
    points: ["Gästeempfang und Anmeldung", "Ausgabe vorbereiteter Namensschilder", "Wegweisung und Information"],
    longDesc: "Am Empfang entscheidet sich, wie geordnet eine Veranstaltung beginnt. Wir begrüßen Ihre Gäste, gleichen Anmeldungen mit den von Ihnen bereitgestellten Listen ab und geben vorbereitete Ausweise oder Namensschilder aus. Vor dem Einsatz klären wir Ankunftszeiten, Ansprechpersonen, Zugänge und den Umgang mit Rückfragen. Sicherheitsrelevante Zutrittsentscheidungen bleiben beim beauftragten Veranstaltungsschutz.",
    typicalClients: "Unternehmen, Veranstalter, Messeaussteller und Eventagenturen.",
    h1: "Empfang & Akkreditierung für Veranstaltungen", metaTitle: "Eventempfang & Akkreditierung | Sentinel Services",
    metaDescription: "Empfang und Akkreditierung für Firmenevents und Messen: Gäste begrüßen, Anmeldungen abgleichen und Orientierung geben. Klar abgestimmter Einsatz vor Ort.",
    faqs: [{ question: "Ist das zugleich eine Sicherheitskontrolle?", answer: "Nein. Anmeldung und Akkreditierung sind Serviceaufgaben. Bewachung, Taschenkontrollen und sicherheitsrelevante Zutrittsprüfungen gehören zum Veranstaltungsschutz und werden getrennt beauftragt." }, { question: "Was brauchen Sie vor dem Einsatz?", answer: "Veranstaltungsort, Zeitfenster, erwartete Gästezahl und Ablauf. Gästelisten erhalten ausschließlich die dafür vorgesehenen Kräfte und nur für den vereinbarten Anmeldeprozess; der Umgang und die Löschung werden vorab festgelegt." }],
  },
  {
    slug: "gaestebetreuung", icon: Users, title: "Gästebetreuung",
    context: "Für Veranstaltungen, bei denen Gäste eine erreichbare Ansprechperson brauchen.",
    desc: "Gäste informieren, Wege erklären und Anliegen an die richtige Stelle weitergeben.",
    points: ["Ansprechpersonen für Gäste", "Orientierung am Veranstaltungsort", "Weiterleitung von Fragen und Anliegen"],
    longDesc: "Unsere Gästebetreuung hält den Kontakt zwischen Gästen und Veranstaltungsorganisation. Wir erklären Wege, informieren über den von Ihnen freigegebenen Ablauf und leiten Anliegen gezielt weiter. Die Kräfte kennen vor Beginn die Räumlichkeiten, Programmpunkte und zuständigen Ansprechpersonen. Bei Änderungen erhalten sie eine abgestimmte Information, damit Gäste verlässliche Auskünfte bekommen.",
    typicalClients: "Veranstalter, Unternehmen, Tagungsorte und Eventagenturen.",
    h1: "Gästebetreuung für Events & Firmenevents", metaTitle: "Gästebetreuung für Veranstaltungen | Sentinel Services",
    metaDescription: "Gästebetreuung für Firmenevents, Tagungen und Messen: Orientierung, Information und persönliche Ansprechpartner vor Ort – abgestimmt auf Ihren Ablauf.",
    faqs: [{ question: "Übernehmen Sie auch die Veranstaltungsplanung?", answer: "Nein. Wir unterstützen die Durchführung vor Ort. Programmplanung, Buchungen und die Gesamtorganisation bleiben beim Veranstalter." }, { question: "Wie wird das Personal eingewiesen?", answer: "Vor dem Einsatz stimmen wir Programm, Räumlichkeiten, Aufgaben und Meldewege ab. Änderungen laufen über eine benannte Ansprechperson." }],
  },
  {
    slug: "operative-eventunterstuetzung", icon: ClipboardList, title: "Operative Eventunterstützung",
    context: "Für Veranstalter, die zusätzliche Unterstützung in der Durchführung benötigen.",
    desc: "Abgestimmte Aufgaben vor Ort übernehmen und Rückmeldungen direkt an Ihre Veranstaltungsleitung geben.",
    points: ["Unterstützung an Service- und Infopunkten", "Abstimmung mit der Veranstaltungsleitung", "Koordination vereinbarter Übergaben"],
    longDesc: "Wir unterstützen Ihr Veranstaltungsteam bei klar definierten Aufgaben vor Ort: Servicepunkte besetzen, Informationen weitergeben und vereinbarte Übergaben begleiten. Umfang und Einsatzzeiten legen wir vorab fest. Unsere Kräfte arbeiten entlang Ihres Ablaufplans und melden Abweichungen an die benannte Veranstaltungsleitung. Technische Facharbeiten, Catering und die vollständige Veranstaltungsorganisation sind nicht Teil dieses Angebots.",
    typicalClients: "Eventagenturen, Unternehmen, Messeveranstalter und Veranstaltungsstätten.",
    h1: "Operative Unterstützung bei Veranstaltungen", metaTitle: "Operative Eventunterstützung | Sentinel Services",
    metaDescription: "Operative Unterstützung bei Veranstaltungen: Servicepunkte, Informationswege und abgestimmte Aufgaben vor Ort. Klare Zuständigkeiten statt Eventplanung.",
    faqs: [{ question: "Welche Aufgaben können wir abgeben?", answer: "Beschreiben Sie die konkreten Tätigkeiten, Zeiten und Einsatzbereiche. Wir prüfen, welche Serviceaufgaben wir übernehmen können, und halten den Umfang schriftlich fest." }, { question: "Lässt sich Event Service mit Veranstaltungsschutz kombinieren?", answer: "Ja. Service und Sicherheit können gemeinsam geplant werden. Aufgaben, Qualifikationen und Zuständigkeiten bleiben dabei eindeutig getrennt." }],
  },
];

export const facilityCategories: DivisionData[] = existingDivisions.filter(d => d.slug !== "sicherheit").map(d => ({ ...d, parent: "facility" }));

export const divisions: DivisionData[] = [
  existingDivisions[0],
  {
    slug: "facility", shortLabel: "Facility", title: "Facility", icon: Building2,
    claim: "Gebäude und Außenflächen betreuen – mit abgestimmten Leistungen und festen Zuständigkeiten.",
    intro: "Wir halten Gebäude und Außenflächen in Ordnung. Gebäudereinigung, Fensterreinigung, Grünpflege und infrastrukturelle Objektleistungen laufen bei uns zusammen. Sie bestimmen den Umfang; wir regeln Personal, Turnus und Rückmeldungen.",
    h1: "Facility", metaTitle: "Facility Service – Reinigung & Objektbetreuung | Sentinel Services",
    metaDescription: "Facility Service für Gebäude und Außenflächen: Reinigung, Fensterreinigung, Grünpflege, Hausmeister- und Winterdienst. Einzeln oder kombiniert beauftragen.",
    keywords: "Facility Service, Gebäudereinigung, Fensterreinigung, Grünpflege, Hausmeisterdienst, Winterdienst, infrastrukturelles Facility Management",
    primaryKeyword: "Facility Service", services: [...facilityServices, ...reinigungServices, ...gruenServices],
  },
  {
    slug: "event-service", shortLabel: "Event Service", title: "Event Service", icon: PartyPopper,
    claim: "Empfang, Gästebetreuung und operative Unterstützung bei Ihrer Veranstaltung.",
    intro: "Wir unterstützen Ihre Veranstaltung dort, wo Menschen und Abläufe zusammenkommen: am Empfang, in der Gästebetreuung und an Servicepunkten vor Ort. Mit klaren Aufgaben und direkter Abstimmung mit Ihrer Veranstaltungsleitung – keine vollständige Eventplanung.",
    h1: "Event Service", metaTitle: "Event Service – Empfang & Gästebetreuung | Sentinel Services",
    metaDescription: "Event Service für Firmenevents, Messen und Tagungen: Empfang, Gästebetreuung und operative Unterstützung vor Ort. Klar getrennt vom Veranstaltungsschutz.",
    keywords: "Event Service, Eventpersonal, Gästebetreuung, Eventempfang, Akkreditierung, operative Eventunterstützung",
    primaryKeyword: "Event Service", services: eventServices,
  },
];

export const getDivision = (slug: string): DivisionData | undefined =>
  [...divisions, ...facilityCategories].find(d => d.slug === slug);

export const getDivisionAndService = (divisionSlug: string, serviceSlug: string): { division: DivisionData; service: ServiceData } | undefined => {
  const division = getDivision(divisionSlug);
  const service = division?.services.find(s => s.slug === serviceSlug);
  if (!division || !service) return undefined;
  return { division, service };
};

export const findServiceAnywhere = (serviceSlug: string): { division: DivisionData; service: ServiceData } | undefined => {
  for (const division of divisions) {
    const service = division.services.find(s => s.slug === serviceSlug);
    if (service) return { division, service };
  }
  return undefined;
};

export const allServices = (): { division: DivisionData; service: ServiceData }[] =>
  divisions.flatMap(division => division.services.map(service => ({ division, service })));
