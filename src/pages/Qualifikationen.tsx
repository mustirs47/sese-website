import { Link } from "react-router-dom";
import { Scale, GraduationCap, HeartPulse, Settings, ArrowRight, Award, Shield, Users, BookOpen, RefreshCw } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BreadcrumbJsonLd, FAQPageJsonLd, WebPageJsonLd } from "@/components/StructuredData";
import { BASE_URL } from "@/lib/seo";

const groups = [
  {
    icon: Scale,
    title: "Gewerberechtliche Grundlage",
    items: [
      { name: "Gewerbeerlaubnis nach §34a GewO", detail: "Offizielle Zulassung für gewerbliche Bewachung" },
      { name: "Sachkundeprüfung nach §34a GewO (IHK)", detail: "Umfassende Fachprüfung bei der Industrie- und Handelskammer" },
      { name: "Unterrichtungsverfahren nach §34a GewO", detail: "40-stündige Grundschulung für Sicherheitsmitarbeiter" },
    ],
    relevance: "Gesetzliche Voraussetzung für gewerbliche Sicherheitstätigkeit. Ohne diese Nachweise darf in Deutschland kein Sicherheitsdienst betrieben werden.",
  },
  {
    icon: GraduationCap,
    title: "Fachliche Qualifikation",
    items: [
      { name: "Geprüfte Schutz- und Sicherheitskräfte", detail: "IHK-zertifizierte Weiterbildung mit Abschlussprüfung" },
      { name: "Schulung in Rechtsgrundlagen und Eingriffsrecht", detail: "Kenntnisse in Notwehr, Jedermannsrecht, Hausrecht" },
      { name: "Regelmäßige Auffrischungslehrgänge", detail: "Jährliche Updates zu Rechtsänderungen und Best Practices" },
    ],
    relevance: "Rechtssicheres Handeln und korrekte Reaktion in kritischen Situationen – minimiert Ihr Haftungsrisiko als Auftraggeber.",
  },
  {
    icon: HeartPulse,
    title: "Zusatzqualifikationen",
    items: [
      { name: "Erste-Hilfe-Ausbildung", detail: "16-stündige Ausbildung, alle 2 Jahre aufgefrischt" },
      { name: "Brandschutzhelfer-Ausbildung", detail: "Theoretische und praktische Schulung inkl. Feuerlöschübung" },
      { name: "Deeskalationstraining", detail: "Techniken zur Konfliktvermeidung und -bewältigung" },
    ],
    relevance: "Schnelles Handeln bei Notfällen und reduziertes Eskalationsrisiko – Ihre Mitarbeiter und Gäste sind in sicheren Händen.",
  },
  {
    icon: Settings,
    title: "Betriebliche Standards",
    items: [
      { name: "Lückenlose Einsatzdokumentation", detail: "Digitale Protokollierung aller Vorfälle und Kontrollgänge" },
      { name: "Standardisierte Übergabe- und Meldeprotokolle", detail: "Einheitliche Formulare für reibungslose Schichtwechsel" },
      { name: "Interne Qualitätskontrollen und Audits", detail: "Regelmäßige Überprüfung durch Einsatzleitung und Geschäftsführung" },
    ],
    relevance: "Transparenz und Nachvollziehbarkeit jedes Einsatzes – Sie wissen immer, was auf Ihrem Objekt passiert.",
  },
];

const qualFaqs = [
  { question: "Sind alle Mitarbeiter §34a-geprüft?", answer: "Ja, alle unsere Einsatzkräfte verfügen über die Sachkundeprüfung nach §34a GewO (IHK). Dies ist bei uns eine zwingende Einstellungsvoraussetzung." },
  { question: "Wie stellen Sie die Qualität dauerhaft sicher?", answer: "Durch regelmäßige interne Audits, verpflichtende Auffrischungsschulungen und standardisierte Einsatzdokumentation. Zusätzlich führen wir Kundenzufriedenheitsbefragungen durch." },
  { question: "Welche Zusatzausbildungen hat Ihr Personal?", answer: "Erste-Hilfe, Brandschutzhelfer und Deeskalationstraining – alles regelmäßig aufgefrischt. Je nach Einsatz kommen weitere Qualifikationen hinzu." },
  { question: "Wie oft werden Schulungen durchgeführt?", answer: "Wir schulen unser Personal mindestens zweimal jährlich in den Kernbereichen. Zusätzlich gibt es objektspezifische Einweisungen vor jedem neuen Einsatz." },
];

const certProcess = [
  { icon: BookOpen, title: "Grundausbildung", desc: "Sachkundeprüfung §34a GewO bei der IHK" },
  { icon: GraduationCap, title: "Fachschulung", desc: "Spezialisierung nach Einsatzbereich" },
  { icon: RefreshCw, title: "Auffrischung", desc: "Regelmäßige Weiterbildung und Re-Zertifizierung" },
  { icon: Shield, title: "Qualitätskontrolle", desc: "Interne Audits und Leistungsbewertung" },
];

const QualifikationenPage = () => {
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Qualifikationen & Nachweise unseres Personals | Sentinel Services"
        description="Qualifikationen je Bereich: Reinigung (DIN 13549), Grünpflege (FLL), Facility Management und Sicherheit (§34a GewO). Geprüftes Fachpersonal."
        keywords="Gebäudereinigung Qualifikation, FLL Baumpflege, Facility Management Nachweise, Sachkundeprüfung 34a, §34a GewO, Fachpersonal Objektbetreuung"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${BASE_URL}/` },
          { name: "Qualifikationen", url: `${BASE_URL}/qualifikationen` },
        ]}
      />
      <WebPageJsonLd
        type="AboutPage"
        name="Qualifikationen und Nachweise – Sentinel Services"
        description="Rechtliche, fachliche und betriebliche Qualifikationen unseres Personals in Reinigung, Facility Management, Grünpflege und Sicherheit."
        url={`${BASE_URL}/qualifikationen`}
      />
      <FAQPageJsonLd faqs={qualFaqs} />

      <PageHero
        badge="Qualifikationen"
        title="Qualifikationen & Nachweise unseres Personals"
        subtitle="Welche Nachweise, Schulungen und Zusatzqualifikationen unsere Einsatzkräfte in Reinigung, Pflege, Facility Management und Sicherheit mitbringen – und was das für Sie als Auftraggeber konkret bedeutet."
      />

      {/* Summary stats */}
      <section className="section-light border-b" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="stat-number">4</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Qualifikationsgruppen</p>
            </div>
            <div>
              <p className="stat-number">12+</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Einzelnachweise</p>
            </div>
            <div>
              <p className="stat-number">100%</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>§34a-geprüft</p>
            </div>
            <div>
              <p className="stat-number">2×</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Schulungen pro Jahr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-12">
          <div className="max-w-2xl">
            <h2 className="h-section mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
              Warum Qualifikation zählt
            </h2>
            <p className="prose-lead text-muted-fg">
              Ob Hygienestandard in der Unterhaltsreinigung, FLL-konforme Baumkontrolle, Betreiberpflichten im Facility 
              Management oder §34a-geprüfter Sicherheitsdienst – die Qualifikation des Personals entscheidet über Qualität, 
              Ergebnis und Ihr Haftungsrisiko als Auftraggeber. Wir investieren kontinuierlich in Aus- und Weiterbildung, 
              dokumentieren jeden Nachweis und frischen jede Schulung regelmäßig auf.
            </p>
          </div>
        </div>
      </section>

      {/* Qualification groups */}
      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="stagger-children grid gap-6 sm:grid-cols-2 xl:grid-cols-4 [&>*]:min-w-0">
            {groups.map(({ icon: Icon, title, items, relevance }) => (
              <div
                key={title}
                className="card-accent rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg"
                style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-base font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {items.length}
                  </span>
                </div>
                <ul className="space-y-4 mb-5">
                  {items.map((item) => (
                    <li key={item.name} className="flex items-start gap-2.5">
                      <Award className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{item.name}</p>
                        <p className="text-xs text-muted-fg mt-0.5">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg p-3" style={{ background: "hsl(var(--primary) / 0.05)" }}>
                  <p className="text-xs leading-relaxed text-muted-fg">
                    <span className="font-bold text-primary">Relevanz für Sie:</span> {relevance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification process */}
      <section className="bg-background border-t border-border/50">
        <div ref={ref2} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center mb-12">
            <p className="eyebrow">Unser Qualifizierungsprozess</p>
            <h2 className="h-section">
              Vom Nachwuchs zur zertifizierten Einsatzkraft
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Jede Einsatzkraft durchläuft einen strukturierten Qualifizierungsprozess – von der Grundausbildung bis zur laufenden Weiterbildung.
            </p>
          </div>
          <div className="stagger-children grid gap-6 sm:grid-cols-4">
            {certProcess.map(({ icon: StepIcon, title, desc }, i) => (
              <div key={title} className="text-center relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-4 relative">
                  <StepIcon className="h-6 w-6 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevance for clients */}
      <section ref={ref3} className="fade-in-section section-light border-t" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-xl p-8 sm:p-10" style={{ background: "hsl(var(--primary) / 0.05)", border: "1px solid hsl(var(--section-light-border))" }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--section-light-fg))" }}>
                  Was bedeutet das für Sie als Auftraggeber?
                </h2>
                <p className="text-base leading-relaxed text-muted-fg">
                  Qualifiziertes Personal bedeutet nicht nur besseren Schutz – es reduziert auch Ihr Haftungsrisiko erheblich. 
                  Als Auftraggeber profitieren Sie von:
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 pl-0 sm:pl-16">
              {[
                "Rechtssichere Einsätze durch geschultes Personal",
                "Reduziertes Haftungsrisiko bei Vorfällen",
                "Professionelles Auftreten gegenüber Ihren Kunden und Mitarbeitern",
                "Nachweisbare Qualifikationen für Audits und Versicherungen",
                "Sofortige Handlungsfähigkeit bei Notfällen",
                "Dokumentierte Prozesse für volle Transparenz",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <Award className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm" style={{ color: "hsl(var(--section-light-fg))" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 text-center">
          <h2 className="h-section mb-4">
            Überzeugt von unserer Qualifikation?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Stellen Sie Ihre Anfrage – wir zeigen Ihnen, wie wir Ihre Anforderungen in Reinigung, Pflege, Facility Management oder Sicherheit konkret umsetzen.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Anfrage stellen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/arbeitsweise">Unsere Arbeitsweise</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection faqs={qualFaqs} title="Häufige Fragen zu Qualifikationen" emitJsonLd={false} />
    </PageLayout>
  );
};

export default QualifikationenPage;
