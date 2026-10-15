import { Link } from "react-router-dom";
import { Search, UserCheck, Radio, ClipboardCheck, ArrowRight, Users, Shield, HeartPulse, CheckCircle, Target, Handshake } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BreadcrumbJsonLd, FAQPageJsonLd, WebPageJsonLd } from "@/components/StructuredData";
import { BASE_URL } from "@/lib/seo";

const phases = [
  {
    icon: Search,
    step: "01",
    title: "Analyse vor Einsatz",
    desc: "Jeder Auftrag beginnt mit einer Bestandsaufnahme: Einsatzort, Aufgaben, Zeitraum und betriebliche Abläufe.",
    detail: "Wir erfassen Flächen und Zugänge, Reinigungs- oder Pflegeintervalle sowie bei Veranstaltungen Gästezahl und Ablauf. Für Sicherheitsaufgaben bewerten wir zusätzlich Risiken und vorhandene Schutzmaßnahmen. Daraus erstellen wir den Einsatzplan.",
    deliverables: ["Objektbegehung vor Ort", "Aufgaben und Einsatzbedingungen festhalten", "Abstimmung mit Ihrem Ansprechpartner"],
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Personalauswahl & Einweisung",
    desc: "Wir setzen gezielt Personal ein, das zum Einsatz passt – nach Qualifikation, Erfahrung und Auftreten.",
    detail: "Personalauswahl nach Fachkompetenz, Sprachkenntnissen und Einsatzpassung. Vor Einsatzbeginn erfolgt ein objektspezifisches Briefing mit allen relevanten Informationen.",
    deliverables: ["Profilabgleich mit Einsatzanforderungen", "Objektspezifisches Briefing", "Vorstellung beim Auftraggeber"],
  },
  {
    icon: Radio,
    step: "03",
    title: "Führung im Einsatz",
    desc: "Feste Einsatzleitung, direkte Kommunikationswege und definierte Eskalationsstufen.",
    detail: "Eine benannte Ansprechperson koordiniert den Einsatz. Objektleitung oder Veranstaltungsleitung erhalten Rückmeldungen über vereinbarte Wege; Abweichungen werden gezielt geklärt.",
    deliverables: ["Fester Einsatzleiter als Ansprechpartner", "Definierte Eskalationsstufen", "Sofortmaßnahmen bei Abweichungen"],
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Dokumentation & Reporting",
    desc: "Lückenlose Einsatzdokumentation, regelmäßige Berichte und Nachsteuerung bei Abweichungen.",
    detail: "Standardisierte Protokolle, regelmäßige Einsatzberichte und strukturierte Nachbesprechungen. Volle Transparenz.",
    deliverables: ["Digitale Einsatzprotokolle", "Regelmäßige Statusberichte", "Nachbesprechung und Optimierung"],
  },
];

const teamCompetencies = [
  { icon: Shield, title: "Geprüftes Fachpersonal", desc: "Im Sicherheitsdienst gehört die IHK-Sachkundeprüfung zur Grundvoraussetzung – in den übrigen Bereichen arbeiten wir mit eingearbeiteten Fachkräften." },
  { icon: Users, title: "Feste Teams", desc: "Kontinuität statt Rotation – Sie bekommen feste Ansprechpartner und ein Team, das Ihr Objekt kennt." },
  { icon: HeartPulse, title: "Regelmäßige Weiterbildung", desc: "Schulungen richten sich nach der Aufgabe: Arbeitssicherheit und Verfahren im Facility Service, Kommunikation im Event Service, Deeskalation und Erste Hilfe im Sicherheitsdienst." },
];

const principles = [
  { icon: Target, title: "Prävention statt Reaktion", desc: "Unser Fokus liegt auf der Vermeidung von Vorfällen – nicht auf deren Nachbearbeitung." },
  { icon: Handshake, title: "Partnerschaftlich", desc: "Wir verstehen uns als verlängerter Arm Ihrer Organisation – nicht als externer Dienstleister." },
  { icon: CheckCircle, title: "Transparent & nachvollziehbar", desc: "Jeder Einsatz wird dokumentiert, jede Entscheidung ist nachvollziehbar." },
];

const arbeitsweiseFaqs = [
  { question: "Wie schnell kann ein Einsatz starten?", answer: "Bei kurzfristigem Bedarf können wir zügig einsatzbereit sein. Für planbare Einsätze empfehlen wir eine Vorlaufzeit von mindestens einer Woche." },
  { question: "Wer ist mein Ansprechpartner?", answer: "Sie erhalten einen festen Einsatzleiter als direkten Ansprechpartner. Dieser koordiniert den Einsatz, hält Sie informiert und ist bei Fragen oder Änderungen direkt erreichbar." },
  { question: "Wie oft erhalte ich Berichte?", answer: "Die Berichtsfrequenz wird individuell vereinbart – von täglichen Schichtprotokollen bis zu wöchentlichen oder monatlichen Zusammenfassungen." },
  { question: "Kann ich den Einsatz kurzfristig ändern?", answer: "Änderungen prüfen wir anhand der verfügbaren Kräfte und des vereinbarten Umfangs. Wir bestätigen die Umsetzung, bevor der Einsatzplan angepasst wird." },
];

const ArbeitsweisePage = () => {
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Unsere Arbeitsweise – Ablauf in 4 Phasen | Sentinel Services"
        description="Unser Vier-Phasen-Modell für Sicherheit, Facility und Event Service: Analyse, Personal, Einsatz, Reporting – transparent und mit fester Einsatzleitung."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${BASE_URL}/` },
          { name: "Arbeitsweise", url: `${BASE_URL}/arbeitsweise` },
        ]}
      />
      <WebPageJsonLd
        type="AboutPage"
        name="Arbeitsweise – Sentinel Services"
        description="Vier-Phasen-Modell: Analyse, Personal, Einsatzführung, Dokumentation."
        url={`${BASE_URL}/arbeitsweise`}
      />
      <FAQPageJsonLd faqs={arbeitsweiseFaqs} />

      <PageHero
        badge="Arbeitsweise"
        title="Unsere Arbeitsweise"
        subtitle="Sicherheit, Facility und Event Service folgen demselben Anspruch: Aufgaben vorab klären, Personal einweisen, den Einsatz führen und Ergebnisse nachvollziehbar übergeben."
      />

      {/* Stats */}
      <section className="section-light border-b" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="stat-number">4</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Phasen pro Einsatz</p>
            </div>
            <div>
              <p className="stat-number">1</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Fester Ansprechpartner</p>
            </div>
            <div>
              <p className="stat-number">100%</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Dokumentierte Einsätze</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-12">
          <div className="max-w-2xl mb-10">
            <h2 className="h-section mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
              Unsere Leitprinzipien
            </h2>
            <p className="prose-lead text-muted-fg">
              Drei Grundsätze, die unsere gesamte Arbeitsweise bestimmen – von der ersten Anfrage bis zum laufenden Einsatz.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {principles.map(({ icon: PIcon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl p-6"
                style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl mb-4" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                  <PIcon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h3>
                <p className="text-sm text-muted-fg leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section className="section-light">
        <div ref={ref} className="fade-in-section reading-shell">
          <div className="text-center mb-14">
            <p className="eyebrow">4 Phasen</p>
            <h2 className="h-section" style={{ color: "hsl(var(--section-light-fg))" }}>
              Unser strukturierter Einsatzprozess
            </h2>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-12">
              {phases.map(({ icon: Icon, step, title, desc, detail, deliverables }) => (
                <div key={step} className="relative flex gap-6 sm:gap-8">
                  {/* Step circle */}
                  <div className="relative z-10 flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/30" style={{ background: "hsl(var(--section-light-bg))" }}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h2 className="text-lg font-bold mb-2" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                    <p className="text-sm leading-relaxed text-muted-fg mb-3">{desc}</p>
                    <div
                      className="rounded-lg p-4 mb-3"
                      style={{ background: "hsl(var(--primary) / 0.05)", border: "1px solid hsl(var(--section-light-border))" }}
                    >
                      <p className="text-sm leading-relaxed text-muted-fg">{detail}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-muted-fg">
                          <CheckCircle className="h-3 w-3 text-primary shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Competencies */}
      <section className="bg-background border-t border-border/50">
        <div ref={ref2} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center mb-12">
            <p className="eyebrow">Unser Team</p>
            <h2 className="h-section">
              Kompetenz, der Sie vertrauen können
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Unsere Einsatzkräfte sind das Fundament unserer Leistung. Deshalb investieren wir kontinuierlich in ihre Qualifikation und Entwicklung.
            </p>
          </div>
          <div className="stagger-children grid gap-6 sm:grid-cols-3">
            {teamCompetencies.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-accent rounded-xl border border-border/50 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Anfrage stellen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection faqs={arbeitsweiseFaqs} title="Häufige Fragen zur Arbeitsweise" emitJsonLd={false} />
    </PageLayout>
  );
};

export default ArbeitsweisePage;
