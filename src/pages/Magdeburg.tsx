import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, MapPin, Shield, Building2, Users, CheckCircle } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BreadcrumbJsonLd, FAQPageJsonLd, WebPageJsonLd } from "@/components/StructuredData";
import { BASE_URL } from "@/lib/seo";
import logoAsset from "@/assets/brand/logo-dark.png.asset.json";
import { divisions } from "@/data/divisions";

const sicherheitsleistungen = divisions.find((division) => division.slug === "sicherheit")?.services ?? [];

const leistungen = [
  { icon: Shield, title: "Sicherheitsdienst Magdeburg", href: "/sicherheit", text: "Objektschutz, Baustellenbewachung, Empfangs- und Pfortendienst sowie Kontrollgänge – mit abgestimmten Dienstzeiten und Meldewegen." },
  { icon: Building2, title: "Facility in Magdeburg", href: "/facility", text: "Gebäude- und Fensterreinigung, Grünpflege, Hausmeister- und Winterdienst. Wir bündeln den vereinbarten Umfang und stimmen Turnus, Zugang und Dokumentation ab." },
  { icon: Users, title: "Event Service in Magdeburg", href: "/event-service", text: "Empfang, Gästebetreuung und operative Unterstützung bei Veranstaltungen. Aufgaben vor Ort werden mit Ihrer Veranstaltungsleitung festgelegt; Veranstaltungsschutz wird getrennt beauftragt." },
];

const stadtteile = [
  "Altstadt",
  "Stadtfeld Ost & West",
  "Buckau",
  "Sudenburg",
  "Neue Neustadt",
  "Rothensee",
  "Reform",
  "Ottersleben",
  "Cracau",
  "Herrenkrug",
];

const faqs = [
  {
    question: "Welche Sicherheitsleistungen kann ich in Magdeburg beauftragen?",
    answer:
      "Objektschutz, Baustellenbewachung, Empfangs- und Pfortendienst, Kontroll- und Streifendienst sowie Veranstaltungsschutz und Sicherheitskonzepte. Geben Sie in Ihrer Anfrage den Einsatzort, die benötigte Leistung und die Dienstzeiten an. Aufgaben, Zugänge und Meldewege werden vor dem Einsatz abgestimmt.",
  },
  {
    question: "Ist eine Bewachung nachts oder am Wochenende möglich?",
    answer:
      "Ja, nach vereinbarten Dienstzeiten. Für Objekt- und Baustellenbewachung stimmen wir Zeitraum, Kontrollpunkte und Zuständigkeiten mit Ihnen ab. Ob der gewünschte Einsatz übernommen werden kann, prüfen wir anhand Ihrer Anfrage; eine sofortige Verfügbarkeit wird nicht zugesagt.",
  },
  {
    question: "Betreuen Sie auch kleinere Objekte in Magdeburg?",
    answer:
      "Ja. Wir übernehmen einzelne Treppenhäuser und Praxisräume genauso wie ganze Gewerbeobjekte. Entscheidend ist ein fester Turnus, den wir zuverlässig einhalten können – nicht die Objektgröße.",
  },
  {
    question: "Wo sitzt Sentinel Services in Magdeburg?",
    answer:
      "Unser Sitz ist in der Grusonstraße 9 in 39112 Magdeburg. Wir übernehmen Aufträge im Stadtgebiet. Beginn, Dienstzeiten und Personalbedarf stimmen wir für das jeweilige Objekt ab – eine pauschale Anfahrts- oder Reaktionszeit nennen wir nicht.",
  },
  {
    question: "Arbeiten Sie nur in Magdeburg?",
    answer:
      "Unser Sitz ist Magdeburg. Darüber hinaus betreuen wir Objekte bundesweit, unter anderem für Kunden mit mehreren Standorten.",
  },
  {
    question: "Kann ich Reinigung, Winterdienst und Sicherheit zusammen beauftragen?",
    answer:
      "Ja. Wir stimmen die gewünschten Facility- und Sicherheitsleistungen gemeinsam ab. Umfang, Vertragsbedingungen und Ansprechpersonen werden vor Beginn festgelegt.",
  },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/magdeburg#localbusiness`,
  name: "Sentinel Services – Magdeburg",
  description:
    "Sicherheitsdienst in Magdeburg: Objektschutz, Baustellenbewachung und Kontrollgänge. Dazu Facility und operativer Event Service mit klaren Zuständigkeiten.",
  url: `${BASE_URL}/magdeburg`,
  image: `${BASE_URL}${logoAsset.url}`,
  email: "info@sentinel-services.de",
  parentOrganization: { "@id": `${BASE_URL}/#organization` },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grusonstraße 9",
    postalCode: "39112",
    addressLocality: "Magdeburg",
    addressRegion: "Sachsen-Anhalt",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 52.1053, longitude: 11.6621 },
  areaServed: [
    { "@type": "City", name: "Magdeburg" },

  ],
  priceRange: "€€",
};

const MagdeburgPage = () => {
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Sicherheitsdienst Magdeburg | Sentinel Services"
        description="Sicherheitsdienst Magdeburg: Objektschutz, Baustellenbewachung und Kontrollgänge. Sentinel Services, Grusonstraße 9 – fragen Sie Ihren Einsatz konkret an."
        keywords="Sicherheitsdienst Magdeburg, Objektschutz Magdeburg, Baustellenbewachung Magdeburg, Veranstaltungsschutz Magdeburg"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${BASE_URL}/` },
          { name: "Magdeburg", url: `${BASE_URL}/magdeburg` },
        ]}
      />
      <WebPageJsonLd
        name="Sicherheitsdienst Magdeburg"
        description="Sicherheitsleistungen von Sentinel Services für Objekte und Veranstaltungen in Magdeburg; ergänzend Facility und Event Service."
        url={`${BASE_URL}/magdeburg`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localSchema)}</script>
      </Helmet>
      <FAQPageJsonLd faqs={faqs} />

      <PageHero
        badge="Standort Magdeburg"
        title="Sicherheitsdienst Magdeburg"
        subtitle="Objektschutz, Baustellenbewachung und Kontrollgänge für Ihr Objekt. Sentinel Services sitzt in der Grusonstraße 9 in Magdeburg. Wir stimmen Aufgaben, Dienstzeiten und Meldewege mit Ihnen ab; Facility und Event Service können Sie ergänzend anfragen."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/kontakt">
              Anfrage für Magdeburg stellen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/sicherheit">Sicherheitsleistungen ansehen</Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-light border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow">Bewachung und Kontrolldienste</span>
            <h2 className="h-section mb-4">Welche Aufgabe soll Ihr Sicherheitsdienst übernehmen?</h2>
            <p className="prose-lead text-muted-fg">
              Ein Werkstor braucht andere Abläufe als eine Baustelle oder ein Veranstaltungseingang.
              Wählen Sie die passende Leistung: Auf den Detailseiten finden Sie Aufgaben,
              typische Einsatzorte und den jeweiligen Umfang.
            </p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {sicherheitsleistungen.map(({ slug, title, desc, icon: Icon }) => (
              <Link key={slug} to={`/sicherheit/${slug}`} className="group flex min-w-0 items-start gap-4 border-t border-border py-6 text-foreground">
                <Icon className="mt-1 h-5 w-5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 text-base font-bold group-hover:underline">{title}</h3>
                  <p className="prose-body text-muted-fg">{desc}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
          <div className="mt-10 max-w-3xl">
            <h3 className="mb-3 text-lg font-bold">Vor dem ersten Dienst</h3>
            <p className="prose-body text-muted-fg">
              Gemeinsam legen wir fest, wer Zugang erhält, welche Punkte kontrolliert werden und
              wer bei Auffälligkeiten informiert wird. Die Einsatzkräfte werden auf das Objekt
              eingewiesen; Kontrollgänge und Vorfälle werden dokumentiert. Für Ihr Angebot brauchen
              wir Einsatzort, Leistung, Zeitraum und gewünschte Dienstzeiten.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              <Link to="/arbeitsweise" className="link-arrow">Ablauf und Dokumentation <ArrowRight /></Link>
              <Link to="/qualifikationen" className="link-arrow">Qualifikationen des Personals <ArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">Leistungen vor Ort</span>
            <h2 className="h-section mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
              Was wir in Magdeburg übernehmen
            </h2>
            <p className="prose-lead text-muted-fg">
              Neben Sicherheitsleistungen übernehmen wir Reinigung, Grünpflege und weitere
              infrastrukturelle Aufgaben. Für Veranstaltungen bieten wir auch Empfang und
              Gästebetreuung an. Sie können einen einzelnen Bereich anfragen oder mehrere
              Leistungen für denselben Standort abstimmen.
            </p>
          </div>

          <Link to="/magdeburg/gebaeudereinigung" className="link-arrow mb-8">Gebäudereinigung in Magdeburg im Detail <ArrowRight /></Link>
          <div className="stagger-children grid gap-6 md:grid-cols-3">
            {leistungen.map(({ icon: Icon, title, href, text }) => (
              <div
                key={href}
                className="rounded-xl p-6 sm:p-8 min-w-0"
                style={{
                  background: "hsl(var(--section-light-card))",
                  border: "1px solid hsl(var(--section-light-border))",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "hsl(var(--primary) / 0.1)" }}
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>
                    {title}
                  </h3>
                </div>
                <p className="prose-body text-muted-fg mb-5">{text}</p>
                <Link
                  to={href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Details ansehen
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background border-t border-border/50">
        <div ref={ref2} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <span className="eyebrow">Einsatzgebiet</span>
              <h2 className="h-section mb-4">Einsätze im Stadtgebiet Magdeburg</h2>
              <p className="prose-body text-muted-foreground mb-6">
                Für ein Objekt in der Altstadt, in Stadtfeld, Buckau oder einem anderen Stadtteil
                nennen Sie uns die genaue Adresse und den gewünschten Leistungsumfang.
                Wir prüfen den Einsatz anhand der Dienstzeiten und verfügbaren Kräfte.
                Sicherheitsleistungen, Reinigung und Winterdienst werden jeweils mit den
                zum Objekt passenden Abläufen vereinbart.
              </p>
              <ul className="flex flex-wrap gap-2">
                {stadtteile.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-border/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <span className="eyebrow">Standort</span>
              <h2 className="h-section mb-4">Ansprechpartner vor Ort</h2>
              <address className="not-italic text-muted-foreground prose-body mb-6">
                <span className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    Sentinel Services
                    <br />
                    Grusonstraße 9<br />
                    39112 Magdeburg
                    <br />
                    <a href="mailto:info@sentinel-services.de" className="hover:text-primary transition-colors">
                      info@sentinel-services.de
                    </a>
                  </span>
                </span>
              </address>
              <ul className="space-y-2.5">
                {[
                  "Eine feste Ansprechperson für alle Bereiche",
                  "Objektspezifische Einweisung vor dem Einsatz",
                  "Dokumentierte Kontrollgänge und Meldung von Vorfällen",
                  "Schriftliches Angebot zum angefragten Leistungsumfang",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/kontakt">
                    Objekt in Magdeburg anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection light faqs={faqs} title="Fragen zu Einsätzen in Magdeburg" emitJsonLd={false} />
    </PageLayout>
  );
};

export default MagdeburgPage;
