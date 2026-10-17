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
    href: "/facility/unterhaltsreinigung",
    text: "Laufende Reinigung von Sanitärbereichen, Böden, Küchen und Kontaktflächen. Im Leistungsverzeichnis halten wir fest, welche Flächen gereinigt werden, wie häufig und zu welchen Zeiten. Das Personal wird im Objekt eingewiesen; die vereinbarte Leistung wird kontrolliert und dokumentiert.",
  },
  {
    title: "Glas- und Fensterreinigung",
    href: "/facility/glas-und-fensterreinigung",
    text: "Reinigung von Fensterflächen, Glastrennwänden, Eingangsanlagen und Rahmen. Umfang und Verfahren richten sich nach Verschmutzung, Höhe und Zugänglichkeit. Zeiten außerhalb der Geschäftszeiten stimmen wir mit Ihnen ab.",
  },
  {
    title: "Grundreinigung",
    href: "/facility/grundreinigung",
    text: "Intensive Reinigung, wenn die laufende Pflege nicht ausreicht: Hartböden inklusive Einpflege, Teppichreinigung und Entfernung von Altbelägen. Bodenmaterial, Zustand und die anschließende Nutzung bestimmen das Verfahren und den Termin.",
  },
  {
    title: "Bauschluss- und Sonderreinigung",
    href: "/facility/bauschluss-und-sonderreinigung",
    text: "Bauzwischen- und Bauschlussreinigung für Objekte in Magdeburg und Umgebung. Dazu gehört die Entfernung von Folien, Mörtelresten und Aufklebern. Umfang und Termin werden mit dem Baufortschritt und der geplanten Übergabe abgestimmt.",
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
      "Der Preis richtet sich nach Fläche, Bodenbelag, Verschmutzung, Turnus und Reinigungszeiten. Nach der Objektaufnahme erhalten Sie ein schriftliches Angebot mit Leistungsverzeichnis. So können Sie Umfang und Preis zusammen prüfen; einen Pauschalpreis ohne Objektkenntnis nennen wir nicht.",
  },
  {
    question: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
    answer:
      "Reinigungszeiten außerhalb der Geschäftszeiten können vereinbart werden. Wir klären vor dem Start die verfügbaren Zeitfenster und den Zugang zum Objekt. Die Übergabe von Schlüsseln oder Transpondern wird dokumentiert.",
  },
  {
    question: "Wie wird die vereinbarte Reinigung überprüft?",
    answer:
      "Grundlage ist das abgestimmte Leistungsverzeichnis. Das Personal wird im Objekt eingewiesen, die Ausführung dokumentiert und durch Qualitätskontrollen vor Ort geprüft. Zuständigkeit und Rückmeldungen stimmen wir vor dem ersten Einsatz ab.",
  },
  {
    question: "Wie schnell können Sie in Magdeburg starten?",
    answer:
      "Nennen Sie in Ihrer Anfrage den gewünschten Start oder Übergabetermin. Nach der Objektaufnahme und Abstimmung des Leistungsumfangs klären wir den möglichen Beginn. Vor dem ersten Einsatz müssen Zugang, Reinigungszeiten und Einweisung feststehen; einen festen Vorlauf ohne diese Angaben versprechen wir nicht.",
  },
  {
    question: "Welche Angaben brauchen Sie für eine Reinigungsanfrage?",
    answer:
      "Nennen Sie die gewünschte Reinigung, die Adresse in Magdeburg oder Umgebung und den Zeitraum. Angaben zu Objektart, ungefährer Fläche, gewünschtem Turnus und Zugangszeiten helfen, den Umfang einzuordnen. Die Details nehmen wir anschließend am Objekt auf.",
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
  ],
  provider: {
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#organization`,
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Reinigungsleistungen in Magdeburg",
    itemListElement: leistungen.map(({ title, href, text }) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: title,
        description: text,
        url: `${BASE_URL}${href}`,
      },
    })),
  },
};

const MagdeburgReinigungPage = () => {
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Gebäudereinigung Magdeburg | Sentinel Services"
        description="Gebäudereinigung in Magdeburg: Unterhalts-, Fenster-, Grund- und Bauschlussreinigung. Objektbezogenes Leistungsverzeichnis und dokumentierte Kontrollen."
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
        backLink={{ label: "Facility", href: "/facility" }}
        badge="Facility · Gebäudereinigung Magdeburg"
        title="Gebäudereinigung in Magdeburg"
        subtitle="Unterhaltsreinigung, Fensterreinigung, Grund- und Bauschlussreinigung für Büros, Praxen, Wohnanlagen und Gewerbeobjekte in Magdeburg. Flächen, Turnus und Reinigungszeiten werden für Ihr Objekt festgelegt."
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
            <h2 className="h-section mb-4 text-foreground">
              Was wir in Magdeburg reinigen
            </h2>
            <p className="prose-lead text-muted-fg">
              Für die laufende Pflege, eine intensive Reinigung oder die Übergabe nach Bauarbeiten:
              Sie können die Leistungen einzeln oder zusammen anfragen. Entscheidend sind die Flächen,
              ihr Zustand und die Nutzung des Gebäudes – danach legen wir den Umfang fest.
            </p>
          </div>

          <div className="stagger-children grid gap-6 sm:grid-cols-2">
            {leistungen.map(({ title, href, text }) => (
              <div
                key={href}
                className="rounded-md border border-border bg-card p-6 sm:p-8 min-w-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10"
                  >
                    <SprayCan className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="min-w-0 text-base font-bold text-foreground">
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
              <h2 className="h-section mb-4">Magdeburg und Umgebung</h2>
              <p className="prose-body text-muted-foreground mb-6">
                Unser Sitz ist in der Grusonstraße 9 in Magdeburg. Zu unserem Einsatzgebiet gehören
                Altstadt, Stadtfeld, Buckau, Sudenburg, Neue Neustadt und die Gewerbegebiete im Norden.
                Für ein Objekt in der Umgebung nennen Sie uns bitte die Adresse; den konkreten Einsatzort
                und die Reinigungszeiten stimmen wir anhand Ihrer Anfrage ab.
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
                  schriftlich, welche Flächen in welchem Turnus gereinigt werden. Umfang und Preis lassen sich so gemeinsam prüfen.
                </li>
                <li>
                  <strong className="text-foreground">3. Einweisung und Schlüsselübergabe.</strong> Das Stammpersonal
                  wird anhand des Reinigungsplans im Objekt eingewiesen, Schlüssel werden dokumentiert übergeben.
                </li>
                <li>
                  <strong className="text-foreground">4. Laufender Betrieb.</strong> Feste Ansprechperson,
                  Einsatznachweise und regelmäßige Qualitätskontrollen vor Ort.
                </li>
              </ol>
              <p className="mt-6 prose-body text-muted-foreground">
                Reinigungsplan, Einweisung und Kontrollen bilden die Grundlage der Arbeit.
                Wie wir Personal vorbereiten und Einsätze dokumentieren, finden Sie unter
                {" "}<Link to="/arbeitsweise" className="text-foreground underline underline-offset-4">Arbeitsweise</Link>
                {" "}und <Link to="/qualifikationen" className="text-foreground underline underline-offset-4">Qualifikationen</Link>.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 border-t border-border pt-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <span className="eyebrow">Dienstleistungsanfrage</span>
              <h2 className="h-section mb-4">Reinigung in Magdeburg anfragen</h2>
              <p className="prose-body text-muted-foreground">
                Nennen Sie Leistung, Objektadresse und gewünschten Zeitraum. Wenn Fläche, Turnus oder
                Zugangszeiten bereits feststehen, geben Sie diese bitte mit an. Nach der Objektaufnahme
                erhalten Sie ein schriftliches Angebot mit dem vereinbarten Leistungsumfang.
              </p>
              <div className="mt-6">
                <Button asChild size="lg">
                  <Link to="/kontakt">
                    Reinigung anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="min-w-0">
              <address className="not-italic text-muted-foreground prose-body">
                <span className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    Sentinel Services
                    <br />
                    Grusonstraße 9<br />
                    39112 Magdeburg
                    <br />
                    <a href="mailto:info@sentinel-services.de" className="break-words underline underline-offset-4 hover:text-primary transition-colors">
                      info@sentinel-services.de
                    </a>
                  </span>
                </span>
              </address>
              <p className="mt-4 prose-body text-muted-foreground">Ihre Reinigungsanfrage können Sie auch direkt per E-Mail senden.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection light faqs={faqs} title="Fragen zur Gebäudereinigung in Magdeburg" />
    </PageLayout>
  );
};

export default MagdeburgReinigungPage;
