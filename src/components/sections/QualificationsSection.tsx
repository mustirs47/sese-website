import { Scale, GraduationCap, HeartPulse, Settings } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const groups = [
  {
    icon: Scale,
    title: "Gewerberechtliche Grundlage",
    items: [
      "Gewerbeerlaubnis nach §34a GewO",
      "Sachkundeprüfung nach §34a GewO (IHK)",
      "Unterrichtungsverfahren nach §34a GewO",
    ],
    relevance: "Gesetzliche Voraussetzung für gewerbliche Sicherheitstätigkeit. Stellt sicher, dass unser Personal fachlich und rechtlich geprüft ist.",
  },
  {
    icon: GraduationCap,
    title: "Fachliche Qualifikation",
    items: [
      "Geprüfte Schutz- und Sicherheitskräfte",
      "Schulung in Rechtsgrundlagen und Eingriffsrecht",
      "Regelmäßige Auffrischungslehrgänge",
    ],
    relevance: "Gewährleistet, dass Einsatzkräfte rechtssicher handeln und in kritischen Situationen korrekt reagieren.",
  },
  {
    icon: HeartPulse,
    title: "Zusatzqualifikationen",
    items: [
      "Erste-Hilfe-Ausbildung (regelmäßig aufgefrischt)",
      "Brandschutzhelfer-Ausbildung",
      "Deeskalationstraining",
    ],
    relevance: "Ermöglicht schnelles Handeln bei Notfällen und reduziert Eskalationsrisiken im Einsatz.",
  },
  {
    icon: Settings,
    title: "Betriebliche Standards",
    items: [
      "Schriftliche Einsatzdokumentation",
      "Standardisierte Übergabe- und Meldeprotokolle",
      "Interne Qualitätskontrollen und Audits",
    ],
    relevance: "Transparenz für den Auftraggeber. Jeder Einsatz ist nachvollziehbar, überprüfbar und auswertbar.",
  },
];

const QualificationsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="qualifikationen" className="section-light">
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">Nachweise</span>
          <h2 className="h-section">Qualifikationen & Nachweise</h2>
          <p className="section-intro">
            Konkrete Nachweisgruppen, die zeigen, auf welcher fachlichen Grundlage wir arbeiten.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {groups.map(({ icon: Icon, title, items, relevance }) => (
            <div key={title} className="surface-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="icon-tile-sm"><Icon /></span>
                <h3 className="h-card">{title}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg p-3" style={{ background: "hsl(var(--primary) / 0.05)" }}>
                <p className="text-xs leading-relaxed text-muted-fg">
                  <span className="font-semibold text-primary">Relevanz für Kunden:</span> {relevance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;