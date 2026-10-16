export interface LegacyRoute {
  path: string;
  to: string;
  title: string;
  description: string;
  intro: string;
  linkLabel: string;
}

const sec = (slug: string, name: string, desc: string): LegacyRoute => ({
  path: `/leistungen/${slug}`,
  to: `/sicherheit/${slug}`,
  title: `${name} – neue Adresse | Sentinel Services`,
  description: desc,
  intro: `Diese Seite finden Sie jetzt unter „Sicherheit & Bewachung“. Über den Button unten kommen Sie direkt zur neuen Seite.`,
  linkLabel: `Zu ${name}`,
});

export const legacyRoutes: LegacyRoute[] = [
  {
    path: "/leistungen",
    to: "/sicherheit",
    title: "Leistungen – neue Struktur | Sentinel Services",
    description:
      "Unsere Leistungen sind jetzt in drei Fachgebiete gegliedert: Sicherheit, Facility und Event Service.",
    intro:
      "Die frühere Sammelseite „Leistungen“ ist in drei Fachgebiete aufgeteilt. Am nächsten kommt Ihrem Anliegen der Bereich Sicherheit & Bewachung.",
    linkLabel: "Zu Sicherheit & Bewachung",
  },
  sec("objektschutz", "Objektschutz", "Objektschutz für Gewerbe, Industrie und Wohnanlagen – die Seite finden Sie jetzt im Bereich Sicherheit & Bewachung."),
  sec("veranstaltungsschutz", "Veranstaltungsschutz", "Veranstaltungsschutz für Events und Versammlungen – die Seite finden Sie jetzt im Bereich Sicherheit & Bewachung."),
  sec("baustellenbewachung", "Baustellenbewachung", "Baustellenbewachung gegen Materialdiebstahl und Vandalismus – jetzt im Bereich Sicherheit & Bewachung."),
  sec("empfangs-und-pfortendienst", "Empfangs- & Pfortendienst", "Empfangs- und Pfortendienst für Zutrittskontrolle und Besucherführung – jetzt im Bereich Sicherheit & Bewachung."),
  sec("kontroll-und-streifendienst", "Kontroll- & Streifendienst", "Kontroll- und Streifendienst mit dokumentierten Rundgängen – jetzt im Bereich Sicherheit & Bewachung."),
  sec("sicherheitskonzepte", "Sicherheitskonzepte", "Sicherheitskonzepte und Gefährdungsanalysen – die Seite finden Sie jetzt im Bereich Sicherheit & Bewachung."),
  {
    path: "/gruenanlagen/winterdienst",
    to: "/facility/winterdienst",
    title: "Winterdienst – neue Adresse | Sentinel Services",
    description:
      "Der Winterdienst gehört jetzt zum infrastrukturellen Facility Management: Räum- und Streupflicht, Dokumentation und Bereitschaft nach vereinbartem Einsatzplan.",
    intro:
      "Der Winterdienst ist vom Bereich Grünanlagen in das infrastrukturelle Facility Management gewechselt. Sie finden ihn jetzt dort.",
    linkLabel: "Zum Winterdienst",
  },
  ...[
    "technische-objektbetreuung",
    "technisches-fm",
    "infrastrukturelles-fm",
    "kaufmaennisches-fm",
  ].map((slug) => ({
    path: `/facility-management/${slug}`,
    to: "/facility",
    title: "Infrastrukturelles Facility Management | Sentinel Services",
    description:
      "Winterdienst, Hausmeisterdienste, Entsorgungsmanagement und Parkraumbewirtschaftung – gebündelt im infrastrukturellen Facility Management.",
    intro:
      "Diese Unterseite ist im Bereich „Infrastrukturelles Facility Management“ aufgegangen. Dort finden Sie Winterdienst, Hausmeisterdienste, Entsorgungsmanagement und Parkraumbewirtschaftung.",
    linkLabel: "Zum Facility Management",
  })),
];