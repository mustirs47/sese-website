import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, MapPin, Shield, SprayCan, Leaf, Building2, CheckCircle } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BreadcrumbJsonLd, FAQPageJsonLd, WebPageJsonLd } from "@/components/StructuredData";
import { BASE_URL } from "@/lib/seo";

const leistungen = [
  {
    icon: SprayCan,
    title: "Gebäudereinigung in Magdeburg",
    href: "/reinigung",
    text: "Unterhaltsreinigung für Büros, Praxen und Wohnanlagen, Glas- und Fensterreinigung, Grund- und Bauschlussreinigung. Feste Reinigungskräfte, feste Zeiten, protokollierte Leistung.",
  },
  {
    icon: Shield,
    title: "Sicherheitsdienst in Magdeburg",
    href: "/sicherheit",
    text: "Objektschutz, Baustellenbewachung, Empfangs- und Pfortendienst sowie Kontrollgänge – auch nachts, am Wochenende und kurzfristig für einzelne Veranstaltungen.",
  },
  {
    icon: Leaf,
    title: "Grünanlagenpflege in Magdeburg",
    href: "/gruenanlagen",
    text: "Rasen-, Hecken- und Beetpflege sowie Baumpflege auf Firmengeländen, in Wohnquartieren und an öffentlichen Flächen – nach festem Pflegeplan über die Saison.",
  },
  {
    icon: Building2,
    title: "Facility Management & Winterdienst",
    href: "/facility-management",
    text: "Hausmeisterdienste, Entsorgungs- und Abfallmanagement, Parkraumbewirtschaftung und Winterdienst mit Räum- und Streupflicht-Dokumentation für Magdeburger Objekte.",
  },
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
    question: "Betreuen Sie auch kleinere Objekte in Magdeburg?",
    answer:
      "Ja. Wir übernehmen einzelne Treppenhäuser und Praxisräume genauso wie ganze Gewerbeobjekte. Entscheidend ist ein fester Turnus, den wir zuverlässig einhalten können – nicht die Objektgröße.",
  },
  {
    question: "Wie schnell sind Sie in Magdeburg vor Ort?",
    answer:
      "Unser Sitz ist in der Grusonstraße 9 in 39112 Magdeburg. Für Objekte im Stadtgebiet und im direkten Umland sind unsere Kräfte in der Regel innerhalb kurzer Anfahrt am Einsatzort; feste Touren planen wir ohnehin nach Stadtgebiet.",
  },
  {
    question: "Arbeiten Sie nur in Magdeburg?",
    answer:
      "Magdeburg und die Börde sind unser Heimatgebiet, hier sitzen Disposition und Personal. Darüber hinaus betreuen wir Objekte bundesweit, unter anderem für Kunden mit mehreren Standorten.",
  },
  {
    question: "Kann ich Reinigung, Winterdienst und Sicherheit zusammen beauftragen?",
    answer:
      "Ja, und das ist für Magdeburger Objekte der Regelfall. Sie bekommen eine Ansprechperson, einen Vertrag und eine Abrechnung statt drei Firmen, die sich gegenseitig die Zuständigkeit zuschieben.",
  },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/magdeburg#localbusiness`,
  name: "Sentinel Services – Magdeburg",
  description:
    "Gebäudereinigung, Sicherheitsdienst, Grünanlagenpflege und Facility Management für Objekte in Magdeburg und Umgebung.",
  url: `${BASE_URL}/magdeburg`,
  image: `${BASE_URL}/logo.png`,
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
    { "@type": "AdministrativeArea", name: "Landkreis Börde" },
    { "@type": "AdministrativeArea", name: "Sachsen-Anhalt" },
  ],
  priceRange: "€€",
};

const MagdeburgPage = () => {
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Gebäudereinigung & Sicherheitsdienst Magdeburg | Sentinel Services"
        description="Gebäudereinigung, Sicherheitsdienst, Grünpflege und Winterdienst in Magdeburg – aus einer Hand, mit Sitz in der Grusonstraße und festen Ansprechpartnern vor Ort."
        keywords="Gebäudereinigung Magdeburg, Sicherheitsdienst Magdeburg, Reinigungsfirma Magdeburg, Winterdienst Magdeburg, Hausmeisterservice Magdeburg, Grünanlagenpflege Magdeburg"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${BASE_URL}/` },
          { name: "Magdeburg", url: `${BASE_URL}/magdeburg` },
        ]}
      />
      <WebPageJsonLd
        name="Gebäudereinigung & Sicherheitsdienst in Magdeburg"
        description="Leistungen von Sentinel Services für Objekte in Magdeburg und Umgebung."
        url={`${BASE_URL}/magdeburg`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localSchema)}</script>
      </Helmet>
      <FAQPageJsonLd faqs={faqs} />

      <PageHero
        badge="Standort Magdeburg"
        title="Gebäudereinigung und Sicherheitsdienst in Magdeburg"
        subtitle="Unser Sitz liegt in der Grusonstraße in Magdeburg-Rothensee. Von dort betreuen wir Büro- und Gewerbeobjekte, Wohnanlagen, Baustellen und Außenflächen im gesamten Stadtgebiet – Reinigung, Bewachung, Grünpflege und Winterdienst über einen Ansprechpartner."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/kontakt">
              Anfrage für Magdeburg stellen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/arbeitsweise">So arbeiten wir</Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">Leistungen vor Ort</span>
            <h2 className="h-section mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
              Was wir in Magdeburg übernehmen
            </h2>
            <p className="prose-lead text-muted-fg">
              Die meisten unserer Magdeburger Kunden starten mit einem Bereich – meist Unterhaltsreinigung oder
              Objektschutz – und geben nach und nach weitere Aufgaben dazu. Weil Personal, Einsatzleitung und
              Disposition in der Stadt sitzen, lassen sich Turnus, Uhrzeiten und kurzfristige Zusatzeinsätze ohne
              lange Abstimmungswege ändern.
            </p>
          </div>

          <div className="stagger-children grid gap-6 sm:grid-cols-2">
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
              <h2 className="h-section mb-4">Magdeburg und Umland</h2>
              <p className="prose-body text-muted-foreground mb-6">
                Wir fahren Touren im gesamten Stadtgebiet, von der Altstadt über Stadtfeld und Buckau bis in die
                Gewerbegebiete im Norden. Auch Objekte in der Börde, in Schönebeck, Barleben, Wolmirstedt oder
                Burg liegen im täglichen Radius. Für Winterdienst planen wir die Routen vor Saisonbeginn, damit
                Räum- und Streupflichten morgens fristgerecht erfüllt und dokumentiert sind.
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
                  "Eingewiesenes Personal statt wechselnder Subunternehmer",
                  "Nachvollziehbare Berichte zu jedem Einsatz",
                  "Angebot schriftlich, ohne Verkaufsgespräch",
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
