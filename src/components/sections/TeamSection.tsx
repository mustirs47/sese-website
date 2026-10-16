import { ShieldCheck, HeartHandshake, BookOpen, Target } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const competences = [
  {
    icon: Target,
    title: "Operative Einsatzleitung",
    desc: "Koordination aller Einsatzkräfte vor Ort, Schichtplanung und direkte Verantwortung für den reibungslosen Ablauf. Erfahrung aus Objektschutz, Veranstaltungssicherung und Baustellenbewachung.",
    focus: ["Schicht- und Einsatzplanung", "Situationsbeurteilung vor Ort", "Eskalationsmanagement"],
  },
  {
    icon: HeartHandshake,
    title: "Kundenverantwortung",
    desc: "Fester Ansprechpartner von der Anfrage bis zum laufenden Einsatz. Kennt Ihr Objekt, Ihre Anforderungen und Ihre Erwartungen – und stellt sicher, dass sie erfüllt werden.",
    focus: ["Bedarfsanalyse und Konzeptentwicklung", "Regelmäßige Abstimmung und Berichterstattung", "Anpassung bei veränderten Anforderungen"],
  },
  {
    icon: ShieldCheck,
    title: "Qualitätssicherung",
    desc: "Überwachung der Einsatzqualität, Kontrolle der Dokumentation und Sicherstellung, dass Nachweise, Schulungen und Standards jederzeit aktuell sind.",
    focus: ["Einsatzdokumentation und Reporting", "Nachweisführung und Schulungsplanung", "Interne Audits und Qualitätskontrollen"],
  },
  {
    icon: BookOpen,
    title: "Fachliche Weiterbildung",
    desc: "Regelmäßige Schulungen in Deeskalation, Brandschutz, Erste Hilfe und branchenspezifischen Anforderungen. Wir achten darauf, dass Nachweise vor jedem Einsatz aktuell sind.",
    focus: ["Pflichtschulungen und Auffrischungen", "Branchenspezifische Zusatzqualifikationen", "Einweisung neuer Einsatzkräfte"],
  },
];

const TeamSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="team" className="bg-background">
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">Team</span>
          <h2 className="h-section text-foreground">Kompetenz und Verantwortung im Team</h2>
          <p className="section-intro">
            Hinter jedem Einsatz stehen klare Verantwortlichkeiten. Vier Kompetenzfelder tragen unsere Arbeit.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {competences.map(({ icon: Icon, title, desc, focus }) => (
            <div key={title} className="surface-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="icon-tile-sm"><Icon /></span>
                <h3 className="h-card text-foreground">{title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">{desc}</p>
              <ul className="space-y-1.5">
                {focus.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;