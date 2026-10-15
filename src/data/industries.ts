import { Building, Factory, HardHat, ShoppingBag, PartyPopper, Hotel, Home, Landmark } from "@/lib/icons";

export interface IndustryData {
  slug: string;
  icon: typeof Building;
  title: string;
  detail: string;
  relatedServices: string[];
}

export const industries: IndustryData[] = [
  {
    slug: "gewerbe-und-buero",
    icon: Building,
    title: "Gewerbe & Büro",
    detail: "Zugang und Empfang sichern, Büro- und Glasflächen reinigen, laufende Objektaufgaben betreuen.",
    relatedServices: ["objektschutz", "unterhaltsreinigung", "glas-und-fensterreinigung", "hausmeisterdienste"],
  },
  {
    slug: "industrie-und-logistik",
    icon: Factory,
    title: "Industrie & Logistik",
    detail: "Torkontrolle und Bewachung mit Reinigung und infrastrukturellen Aufgaben im Schichtbetrieb abstimmen.",
    relatedServices: ["objektschutz", "kontroll-und-streifendienst", "grundreinigung", "winterdienst"],
  },
  {
    slug: "baustellen",
    icon: HardHat,
    title: "Baustellen",
    detail: "Material und Zugänge sichern, Bauflächen reinigen und die Übergabe vorbereiten.",
    relatedServices: ["baustellenbewachung", "bauschluss-und-sonderreinigung"],
  },
  {
    slug: "einzelhandel",
    icon: ShoppingBag,
    title: "Einzelhandel",
    detail: "Verkaufsflächen und Glas sauber halten, Zugänge sichern und Kundenparkflächen betreuen.",
    relatedServices: ["unterhaltsreinigung", "glas-und-fensterreinigung", "objektschutz", "parkraumbewirtschaftung"],
  },
  {
    slug: "veranstaltungen",
    icon: PartyPopper,
    title: "Veranstaltungen",
    detail: "Empfang, Gästebetreuung und operative Unterstützung – bei Bedarf mit getrenntem Veranstaltungsschutz.",
    relatedServices: ["empfang-und-akkreditierung", "gaestebetreuung", "operative-eventunterstuetzung", "veranstaltungsschutz"],
  },
  {
    slug: "hotels-und-gastronomie",
    icon: Hotel,
    title: "Hotels & Gastronomie",
    detail: "Gäste empfangen, Veranstaltungsabläufe unterstützen und vereinbarte Gebäude- und Glasflächen reinigen.",
    relatedServices: ["gaestebetreuung", "empfangs-und-pfortendienst", "unterhaltsreinigung", "glas-und-fensterreinigung"],
  },
  {
    slug: "wohnanlagen",
    icon: Home,
    title: "Wohnanlagen",
    detail: "Treppenhäuser, Grünanlagen und Gemeinschaftsflächen betreuen; Hausmeister- und Winterdienst abstimmen.",
    relatedServices: ["unterhaltsreinigung", "pflege", "hausmeisterdienste", "winterdienst"],
  },
  {
    slug: "oeffentliche-einrichtungen",
    icon: Landmark,
    title: "Öffentliche Einrichtungen",
    detail: "Besucherzugänge sichern, Gebäude reinigen und Außenflächen nach abgestimmten Plänen pflegen.",
    relatedServices: ["objektschutz", "unterhaltsreinigung", "pflege", "winterdienst"],
  },
];
