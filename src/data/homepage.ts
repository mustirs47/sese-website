import { Building2, Shield, PartyPopper } from "@/lib/icons";

// Homepage positioning is separate from the existing detail-page taxonomy.
export const homepageFields = [
  {
    slug: "sicherheit",
    title: "Sicherheit",
    icon: Shield,
    claim: "Wir schützen Objekte, sichern Zugänge und halten im Einsatz die Lage im Blick. Mit klaren Zuständigkeiten und eingewiesenem Personal.",
    services: ["Objekt- und Baustellenbewachung", "Veranstaltungsschutz", "Empfangs- und Streifendienst"],
  },
  {
    slug: "facility",
    title: "Facility",
    icon: Building2,
    claim: "Wir kümmern uns um Gebäude und Außenflächen. Reinigung, Grünpflege und infrastrukturelle Leistungen laufen bei uns zusammen.",
    services: ["Gebäude- und Fensterreinigung", "Garten- und Grünanlagenpflege", "Hausmeister- und Winterdienst"],
  },
  {
    slug: "event-service",
    title: "Event Service",
    icon: PartyPopper,
    claim: "Wir unterstützen Ihre Veranstaltung dort, wo es auf Menschen und Abläufe ankommt: am Empfang, in der Gästebetreuung und vor Ort.",
    services: ["Empfang und Gästebetreuung", "Operative Unterstützung vor Ort", "Abstimmung mit dem Veranstaltungsschutz"],
  },
];

export const homepageFaqs = [
  { question: "Welche Fachgebiete deckt Sentinel Services ab?", answer: "Sicherheit, Facility und Event Service. Facility bündelt Gebäudereinigung, Fensterreinigung, Grünpflege und infrastrukturelle Leistungen. Event Service umfasst Empfang, Gästebetreuung und operative Unterstützung bei Veranstaltungen." },
  { question: "Kann ich die Fachgebiete einzeln beauftragen?", answer: "Ja. Sie beauftragen die Leistungen, die Sie brauchen – einzeln oder kombiniert. Umfang, Zuständigkeiten und Ablauf halten wir vor dem Einsatz fest." },
  { question: "Übernehmen Sie auch die gesamte Veranstaltungsplanung?", answer: "Unser Event Service unterstützt die Durchführung vor Ort. Die vollständige Planung und Organisation einer Veranstaltung gehört nicht zu diesem Leistungsumfang." },
  { question: "Wo sind Sie im Einsatz?", answer: "Unser Sitz ist in Magdeburg, unser Einsatzgebiet bundesweit. Nennen Sie uns Einsatzort, Zeitraum und Leistungsumfang, damit wir die Verfügbarkeit konkret prüfen können." },
  { question: "Was brauchen Sie für eine Dienstleistungsanfrage?", answer: "Die gewünschte Leistung, den Einsatzort und den Zeitraum. Bei Objekten helfen Angaben zu Flächen und Aufgaben; bei Veranstaltungen die Gästezahl und der geplante Ablauf." },
  { question: "Wie stimmen Sie den Einsatz mit uns ab?", answer: "Vor dem Start legen wir Aufgaben, Ansprechpartner und Meldewege fest. Während des Einsatzes laufen Rückmeldungen über die vereinbarte Ansprechperson. Die Dokumentation richtet sich nach der beauftragten Leistung." },
];