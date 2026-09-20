import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, MapPin, SprayCan, CheckCircle } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/StructuredData";
import { BASE_URL } from "@/lib/seo";

const leistungen = [
  {
    title: "Unterhaltsreinigung für Büros und Praxen",
    href: "/reinigung/unterhaltsreinigung",
    text: "Feste Reinigungskräfte, fester Turnus, feste Zeiten – vor Dienstbeginn, in der Mittagspause oder abends. Sanitärbereiche, Böden, Küchen und Kontaktflächen nach abgestimmtem Leistungsverzeichnis, dokumentiert je Einsatz.",
  },
  {
    title: "Glas- und Fensterreinigung",
    href: "/reinigung/glas-und-fensterreinigung",
    text: "Fensterflächen, Glastrennwände, Eingangsanlagen und Rahmen. Für höher gelegene Flächen arbeiten wir mit Teleskoptechnik oder Hubsteiger, nach Absprache auch außerhalb der Geschäftszeiten.",
  },
  {
    title: "Grundreinigung",
    href: "/reinigung/grundreinigung",
    text: "Wenn die Unterhaltsreinigung an ihre Grenzen kommt: Grundreinigung von Hartböden inklusive Einpflege, Teppichreinigung und Entfernung von Altbelägen – meist an Wochenenden, damit der Betrieb weiterläuft.",
  },
  {
    title: "Bauschluss- und Sonderreinigung",
    href: "/reinigung/bauschluss-und-sonderreinigung",
    text: "Bauzwischen- und Bauschlussreinigung für Objekte in Magdeburg und Umland, inklusive Entfernung von Folien, Mörtelresten und Aufklebern – abgestimmt auf Übergabetermine.",
  },
];

const objekte = [
  "Büro- und Verwaltungsgebäude",
  "Arzt- und Zahnarztpraxen",
  "Wohnanlagen und Treppenhäuser",
  "Ladengeschäfte und Filialen",
  "Produktions- und Lagerhallen",
  "Schulen, Kitas und Vereinsräume",
];

const faqs = [
  {
    question: "Was kostet Gebäudereinigung in Magdeburg?",
    answer:
      "Der Preis hängt an Fläche, Bodenbelag, Turnus und Uhrzeit. Wir sehen uns das Objekt vor Ort an, nehmen die Flächen auf und schicken Ihnen ein schriftliches Angebot mit Leistungsverzeichnis. Pauschalpreise am Telefon nennen wir bewusst nicht, weil sie später nie passen.",
  },
  {
    question: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
    answer:
      "Ja. Ein großer Teil unserer Magdeburger Objekte wird früh morgens vor sieben oder abends nach Dienstschluss gereinigt. Zugang regeln wir über Schlüssel oder Transponder mit dokumentierter Übergabe.",
  },
  {
    question: "Bekomme ich immer dieselbe Reinigungskraft?",
    answer:
      "Das ist unser Anspruch. Jedes Objekt hat eingewiesenes Stammpersonal und eine Vertretung, die das Objekt ebenfalls kennt. Wechselnde Subunternehmer setzen wir nicht ein.",
  },
  {
    question: "Wie schnell können Sie in Magdeburg starten?",
    answer:
      "Nach Objektbesichtigung und Auftragsfreigabe brauchen wir in der Regel ein bis zwei Wochen für Einweisung, Schlüsselübergabe und Materialbereitstellung. Bei Bauschluss- oder Sonderreinigungen geht es oft kurzfristiger.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/magdeburg/gebaeudereinigung#service`,
  name: "Gebäudereinigung Magdeburg",
  serviceType: "Gebäudereinigung",
  description:
    "Unterhaltsreinigung, Glas- und Fensterreinigung, Grundreinigung sowie Bauschlussreinigung für Objekte in Magdeburg und Umgebung.",
  url: `${BASE_URL}/magdeburg/gebaeudereinigung`,
  areaServed: [
    { "@type": "City", name: "Magdeburg" },
    { "@type": "AdministrativeArea", name: "Landkreis Börde" },
  ],
  provider: {
    "@type": "LocalBusiness",
    name: "Sentinel Services",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Grusonstraße 9",
      postalCode: "39112",
      addressLocality: "Magdeburg",
      addressCountry: "DE",
    },
    email: "info@sentinel-services.de",
  },
};

const MagdeburgReinigungPage = () => {
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Gebäudereinigung Magdeburg – Büro, Fenster, Grundreinigung | Sentinel Services"
        description="Gebäudereinigung in Magdeburg: Unterhaltsreinigung für Büros und Praxen, Glas- und Fensterreinigung, Grund- und Bauschlussreinigung. Festes Personal, fester Turnus, Sitz in der Grusonstraße."
        keywords="Gebäudereinigung Magdeburg, Reinigungsfirma Magdeburg, Büroreinigung Magdeburg, Fensterreinigung Magdeburg, Unterhaltsreinigung Magdeburg, Grundreinigung Magdeburg"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${BASE_URL}/` },
          { name: "Magdeburg", url: `${BASE_URL}/magdeburg` },
          { name: "Gebäudereinigung", url: `${BASE_URL}/magdeburg/gebaeudereinigung` },
        ]}
      />
      <WebPageJsonLd
        name="Gebäudereinigung in Magdeburg"
        description="Reinigungsleistungen von Sentinel Services für Objekte in Magdeburg und Umgebung."
        url={`${BASE_URL}/magdeburg/gebaeudereinigung`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <PageHero
        badge="Gebäudereinigung Magdeburg"
        title="Gebäudereinigung in Magdeburg"
        subtitle="Von der Grusonstraße aus reinigen wir Büros, Praxen, Wohnanlagen und Gewerbeobjekte im gesamten Magdeburger Stadtgebiet – mit eingewiesenem Stammpersonal, festen Zeiten und einer Ansprechperson, die das Objekt kennt."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/kontakt">
              Reinigung anfragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/magdeburg">Alle Leistungen in Magdeburg</Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow">Reinigungsleistungen</span>
            <h2 className="h-section mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
              Was wir in Magdeburg reinigen
            </h2>
            <p className="prose-lead text-muted-fg">
              Die meisten Aufträge in Magdeburg beginnen mit der laufenden Unterhaltsreinigung und wachsen dann um
              Fensterreinigung, Grundreinigung oder saisonale Sonderarbeiten. Weil Disposition und Personal in der Stadt
              sitzen, lassen sich Turnus und Uhrzeiten kurzfristig anpassen, ohne dass ein zweites Unternehmen ins Objekt
              muss.
            </p>
          </div>

          <div className="stagger-children grid gap-6 sm:grid-cols-2">
            {leistungen.map(({ title, href, text }) => (
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
                    <SprayCan className="h-6 w-6 text-primary" />
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
              <span className="eyebrow">Objekte</span>
              <h2 className="h-section mb-4">Wo wir reinigen</h2>
              <p className="prose-body text-muted-foreground mb-6">
                Wir fahren feste Touren durch das Stadtgebiet – Altstadt, Stadtfeld, Buckau, Sudenburg, Neue Neustadt und
                die Gewerbegebiete im Norden. Objekte in Schönebeck, Barleben, Wolmirstedt und Burg liegen ebenfalls im
                täglichen Radius. Reinigungsmittel, Maschinen und Verbrauchsmaterial bringen wir mit; auf Wunsch
                übernehmen wir auch die Bestückung von Sanitärspendern.
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {objekte.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <span className="eyebrow">Ablauf</span>
              <h2 className="h-section mb-4">Von der Anfrage bis zum ersten Einsatz</h2>
              <ol className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">1. Objektbesichtigung.</strong> Wir sehen uns Flächen, Beläge und
                  Zugänge an und klären, wann gereinigt werden darf.
                </li>
                <li>
                  <strong className="text-foreground">2. Leistungsverzeichnis und Angebot.</strong> Sie erhalten
                  schriftlich, welche Fläche in welchem Turnus gereinigt wird – ohne Verkaufsgespräch.
                </li>
                <li>
                  <strong className="text-foreground">3. Einweisung und Schlüsselübergabe.</strong> Das Stammpersonal
                  wird im Objekt eingewiesen, Schlüssel werden dokumentiert übergeben.
                </li>
                <li>
                  <strong className="text-foreground">4. Laufender Betrieb.</strong> Feste Ansprechperson,
                  Einsatznachweise und regelmäßige Qualitätskontrollen vor Ort.
                </li>
              </ol>
              <address className="not-italic text-muted-foreground prose-body mt-8">
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
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/kontakt">
                    Reinigung in Magdeburg anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection light faqs={faqs} title="Fragen zur Gebäudereinigung in Magdeburg" />
    </PageLayout>
  );
};

export default MagdeburgReinigungPage;
