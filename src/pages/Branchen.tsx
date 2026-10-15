import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle, Zap } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { industries } from "@/data/industries";
import { findServiceAnywhere } from "@/data/divisions";
import { FAQPageJsonLd, BreadcrumbJsonLd, ItemListJsonLd } from "@/components/StructuredData";
import { BASE_URL } from "@/lib/seo";

const risks: Record<string, string[]> = {
  "gewerbe-und-buero": ["Einbruch außerhalb der Geschäftszeiten", "Unbefugter Zutritt", "Vandalismus"],
  "industrie-und-logistik": ["Diebstahl von Rohmaterialien", "Sabotage", "Unbefugtes Betreten von Produktionsflächen"],
  "baustellen": ["Materialdiebstahl", "Vandalismus an Baumaschinen", "Unbefugtes Betreten"],
  "einzelhandel": ["Ladendiebstahl", "Übergriffe auf Personal", "Warenschwund"],
  "veranstaltungen": ["Überfüllung", "Aggressive Gäste", "Fehlende Evakuierungsplanung"],
  "hotels-und-gastronomie": ["Unbefugte im Gästebereich", "Nachtruhe-Störungen", "Hausfriedensbruch"],
  "wohnanlagen": ["Einbruch in Gemeinschaftsflächen", "Vandalismus", "Unbefugte Personen auf dem Gelände"],
  "oeffentliche-einrichtungen": ["Bedrohung von Mitarbeitern", "Sachbeschädigung", "Unbefugter Zutritt zu sensiblen Bereichen"],
};

const branchenFaqs = [
  { question: "Arbeiten Sie nur in bestimmten Branchen?", answer: "Nein, wir sind branchenübergreifend aufgestellt. Die aufgeführten Branchen sind Schwerpunkte – Sicherheit, Facility und Event Service lassen sich auch für andere Bereiche kombinieren." },
  { question: "Wie passen Sie Ihre Leistungen an die Branche an?", answer: "Jede Branche hat eigene Abläufe und Hygiene-, Pflege- oder Sicherheitsanforderungen. Wir führen eine objektspezifische Analyse durch und stimmen Personal, Frequenzen und Maßnahmen darauf ab." },
  { question: "Können Sie mehrere Standorte gleichzeitig betreuen?", answer: "Ja, wir betreuen auch Kunden mit mehreren Standorten – mit einheitlichen Standards, zentraler Koordination und einem Ansprechpartner über alle Leistungsbereiche hinweg." },
];

const BranchenPage = () => {
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Objektbetreuung nach Branche – 8 Einsatzbereiche | Sentinel Services"
        description="Sicherheit, Facility und Event Service nach Branche: Gewerbe, Industrie, Baustelle, Handel, Events, Hotel, Wohnanlagen, Behörden."
        keywords="Gebäudereinigung Branche, Facility Management Branche, Grünanlagenpflege gewerblich, Werkschutz Logistik, Eventsecurity, Hotelobjektbetreuung, Wohnanlagen Service"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${BASE_URL}/` },
          { name: "Branchen", url: `${BASE_URL}/branchen` },
        ]}
      />
      <ItemListJsonLd
        items={industries.map((i) => ({
          name: i.title,
          description: i.detail,
          url: `${BASE_URL}/branchen#${i.slug}`,
        }))}
      />
      <FAQPageJsonLd faqs={branchenFaqs} />

      <PageHero
        badge="Branchen"
        title="Objektbetreuung nach Branche"
        subtitle="Büro, Baustelle oder Veranstaltung: Wir richten Sicherheit, Facility und Event Service nach den tatsächlichen Aufgaben aus. Klare Zuständigkeiten, passende Einsatzzeiten und ein abgestimmter Umfang."
      />

      {/* Stats */}
      <section className="section-light border-b" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="stat-number">8</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Branchen-Schwerpunkte</p>
            </div>
            <div>
              <p className="stat-number">3</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Fachgebiete</p>
            </div>
            <div>
              <p className="stat-number">100%</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Individuell angepasst</p>
            </div>
            <div>
              <p className="stat-number">DE</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Bundesweit einsetzbar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl mb-12">
            <h2 className="h-section mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
              Leistungen nach Einsatzbereich
            </h2>
            <p className="prose-lead text-muted-fg">
              Ein Bürogebäude hat andere Anforderungen als eine Baustelle, ein Hotel oder eine Wohnanlage. Wir analysieren 
              die branchentypischen Abläufe und stellen Sicherheit, Facility und Event Service so zusammen, dass Frequenzen, 
              Personal und Dokumentation exakt zum Objekt passen.
            </p>
          </div>

          <div className="stagger-children grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {industries.map(({ icon: Icon, title, detail, relatedServices, slug }) => (
              <div
                key={slug}
                id={slug}
                className="group relative rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg overflow-hidden"
                style={{
                  background: "hsl(var(--section-light-card))",
                  border: "1px solid hsl(var(--section-light-border))",
                }}
              >
                {/* Left accent stripe */}

                <div className="pl-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-base font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                  </div>
                  <p className="prose-body text-muted-fg mb-5">{detail}</p>
                  
                  {/* Risks */}
                  {risks[slug] && (
                    <div className="mb-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="h-3 w-3" /> Typische Risiken
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {risks[slug].map((risk) => (
                          <span
                            key={risk}
                            className="rounded-md px-2 py-0.5 text-xs font-medium"
                            style={{ background: "hsl(var(--accent) / 0.08)", color: "hsl(var(--section-light-muted))" }}
                          >
                            {risk}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="eyebrow !mb-2 inline-flex items-center gap-1.5">
                      <CheckCircle className="h-3 w-3" /> Passende Leistungen
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {relatedServices.map((rs) => {
                        const pair = findServiceAnywhere(rs);
                        const svc = pair?.service;
                        if (!svc || !pair) return null;
                        return (
                          <Link
                            key={rs}
                            to={`/${pair.division.slug}/${rs}`}
                            className="rounded-md px-2.5 py-1 text-xs font-medium transition-colors hover:text-primary hover:border-primary/40"
                            style={{
                              border: "1px solid hsl(var(--section-light-border))",
                              color: "hsl(var(--section-light-fg))",
                            }}
                          >
                            {svc.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us for industries */}
      <section className="bg-background border-t border-border/50">
        <div ref={ref2} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center mb-12">
            <p className="eyebrow">Warum Sentinel</p>
            <h2 className="h-section">
              Was uns von anderen Anbietern unterscheidet
            </h2>
          </div>
          <div className="stagger-children grid gap-6 sm:grid-cols-3 xl:grid-cols-3 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: "Branchenerfahrung", desc: "Unsere Einsatzkräfte werden branchenspezifisch geschult – nicht pauschal eingesetzt." },
              { icon: CheckCircle, title: "Individuelle Konzepte", desc: "Kein Standardpaket: Jede Branchenlösung wird objektspezifisch entwickelt und regelmäßig angepasst." },
              { icon: Zap, title: "Schnelle Umsetzung", desc: "Wir prüfen Zeiten und Personalverfügbarkeit konkret, bevor wir einen Einsatz zusagen." },
            ].map(({ icon: DiffIcon, title: diffTitle, desc }) => (
              <div key={diffTitle} className="text-center p-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-4">
                  <DiffIcon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{diffTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-light border-t" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 text-center">
          <h2 className="h-section mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
            Branchenlösung für Ihr Unternehmen
          </h2>
          <p className="text-muted-fg max-w-xl mx-auto mb-8">
            Wir analysieren die Anforderungen Ihrer Branche und stellen Sicherheit, Facility und Event Service passgenau zusammen.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Leistung anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection faqs={branchenFaqs} title="Häufige Fragen zu Branchenlösungen" emitJsonLd={false} />
    </PageLayout>
  );
};

export default BranchenPage;
