import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, FileCheck, Users } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  ItemListJsonLd,
  ServiceJsonLd,
  WebPageJsonLd,
} from "@/components/StructuredData";
import { BASE_URL } from "@/lib/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { divisions, facilityCategories, getDivision, type DivisionSlug } from "@/data/divisions";
import { divisionDetails } from "@/data/divisionDetails";

interface Props {
  division: DivisionSlug;
}

const trustPoints = [
  { icon: Shield, text: "Eingewiesenes Personal" },
  { icon: Users, text: "Feste Ansprechpartner" },
  { icon: FileCheck, text: "Dokumentierte Leistung" },
];

const generalHubFaqs = [
  {
    question: "Können Sie mehrere Leistungen meines Objekts übernehmen?",
    answer:
      "Ja. Sicherheit, Facility und Event Service lassen sich einzeln oder kombiniert beauftragen. Aufgaben und Zuständigkeiten halten wir vor dem Einsatz fest.",
  },
  {
    question: "Wie schnell erhalte ich ein Angebot?",
    answer:
      "Nach einer kurzen Bedarfsaufnahme erstellen wir ein transparentes, schriftliches Angebot mit klaren Leistungsbausteinen.",
  },
  {
    question: "Wo sind Sie tätig?",
    answer:
      "Wir arbeiten bundesweit. Eine Bedarfsanalyse klärt schnell, ob und in welcher Form ein Einsatz in Ihrer Region sinnvoll ist.",
  },
];

const DivisionHub = ({ division: slug }: Props) => {
  const division = getDivision(slug);
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();

  if (!division) return null;

  const others = divisions.filter((d) => d.slug !== (division.parent ?? slug));
  const details = divisionDetails[slug] ?? [];
  const hubFaqs = slug === "event-service" ? [
    { question: "Welche Aufgaben übernimmt Ihr Event Service?", answer: "Empfang und Akkreditierung, Gästebetreuung sowie vereinbarte operative Aufgaben an Service- und Informationspunkten. Umfang und Meldewege stimmen wir mit Ihrer Veranstaltungsleitung ab." },
    { question: "Ist Veranstaltungsschutz enthalten?", answer: "Nein. Bewachung, Sicherheitskontrollen und Intervention gehören zum Fachgebiet Sicherheit. Eine kombinierte Beauftragung ist möglich; die Zuständigkeiten bleiben getrennt." },
    { question: "Planen Sie auch die komplette Veranstaltung?", answer: "Nein. Wir unterstützen die Durchführung vor Ort. Programm, Buchungen und Gesamtorganisation bleiben beim Veranstalter." },
    ...generalHubFaqs.slice(1),
  ] : generalHubFaqs;

  return (
    <PageLayout>
      <SEOHead
        title={division.metaTitle}
        description={division.metaDescription}
        keywords={division.keywords}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${BASE_URL}/` },
          { name: division.title, url: `${BASE_URL}/${division.slug}` },
        ]}
      />
      <WebPageJsonLd
        name={division.metaTitle}
        description={division.metaDescription}
        url={`${BASE_URL}/${division.slug}`}
      />
      <ServiceJsonLd
        name={division.title}
        description={division.intro}
        url={`${BASE_URL}/${division.slug}`}
      />
      <ItemListJsonLd
        items={division.services.map((s) => ({
          name: s.title,
          description: s.desc,
          url: `${BASE_URL}/${division.parent ?? division.slug}/${s.slug}`,
        }))}
      />
      <FAQPageJsonLd faqs={hubFaqs} />

      <PageHero
        backLink={division.parent ? { label: "Facility", href: "/facility" } : undefined}
        badge={division.parent ? "Facility · " + division.shortLabel : "Fachgebiet"}
        title={division.h1}
        subtitle={division.intro}
      />

      {/* Trust row */}
      <section
        className="section-light border-b"
        style={{ borderColor: "hsl(var(--section-light-border))" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {trustPoints.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-xl p-4"
                style={{ background: "hsl(var(--primary) / 0.05)" }}
              >
                <Icon className="h-5 w-5 text-primary shrink-0" />
                <span
                  className="text-sm font-medium"
                  style={{ color: "hsl(var(--section-light-fg))" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {slug === "facility" && (
        <section className="section-light border-b border-border">
          <div className="section-shell !py-8 grid gap-4 md:grid-cols-3">
            {facilityCategories.map(category => <Link key={category.slug} to={`/${category.slug}`} className="link-arrow">{category.title}<ArrowRight /></Link>)}
          </div>
        </section>
      )}
      {/* Services */}
      <section className="section-light">
        <div
          ref={ref}
          className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="max-w-3xl mb-10">
            <h2
              className="h-section mb-4"
              style={{ color: "hsl(var(--section-light-fg))" }}
            >
              Unsere Leistungen: {division.shortLabel}
            </h2>
            <p className="text-base leading-relaxed text-muted-fg">{division.parent ? "Einzelne Leistungen oder ein abgestimmter Turnus – wir halten Aufgaben, Zeiten und Zuständigkeiten vor dem Start fest." : "Wählen Sie die Aufgaben, die Sie beauftragen möchten. Den genauen Umfang und die Einsatzzeiten stimmen wir vor Beginn ab."}</p>
          </div>

          <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {division.services.map(({ slug: sSlug, icon: Icon, title, context, desc, points }) => (
              <Link
                key={sSlug}
                to={`/${division.parent ?? division.slug}/${sSlug}`}
                className="surface-card surface-card--hover group flex flex-col"
              >
                  <span className="icon-tile mb-5"><Icon /></span>
                <h3
                  className="text-lg font-bold"
                  style={{ color: "hsl(var(--section-light-fg))" }}
                >
                  {title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-primary">{context}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-fg flex-1">{desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {points.slice(0, 3).map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-xs text-muted-fg"
                    >
                      <CheckCircle className="h-3 w-3 text-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vertiefende Fachabschnitte */}
      {details.length > 0 && (
        <section
          className="section-light border-t"
          style={{ borderColor: "hsl(var(--section-light-border))" }}
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-3xl mb-10">
              <p className="eyebrow">Wie wir arbeiten</p>
              <h2
                className="h-section"
                style={{ color: "hsl(var(--section-light-fg))" }}
              >
                {division.shortLabel} bei Sentinel Services
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {details.map(({ heading, body }) => (
                <article key={heading} className="min-w-0">
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: "hsl(var(--section-light-fg))" }}
                  >
                    {heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-fg">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        ref={ref2}
        className="fade-in-section section-light border-t"
        style={{ borderColor: "hsl(var(--section-light-border))" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 text-center">
          <h2
            className="h-section mb-4"
            style={{ color: "hsl(var(--section-light-fg))" }}
          >
            Bedarf im Bereich {division.shortLabel}?
          </h2>
          <p className="text-muted-fg max-w-xl mx-auto mb-8">
            Nennen Sie Aufgabe, Einsatzort und Zeitraum. Wir prüfen die Umsetzung und erstellen ein konkretes Angebot.
          </p>
          <Button asChild size="lg">
            <Link to="/kontakt">
              Anfrage stellen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Cross-Selling */}
      <section className="bg-background border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="eyebrow text-center">
            Auch von Sentinel
          </p>
          <h2 className="text-xl font-bold text-foreground text-center mb-8">
            Ein Anbieter – weniger Schnittstellen
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map(({ slug: oSlug, icon: OIcon, title, claim }) => (
              <Link
                key={oSlug}
                to={`/${oSlug}`}
                className="group rounded-xl border border-border/50 p-5 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-2">
                  <OIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-bold text-foreground">{title}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{claim}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={hubFaqs} title={`Häufige Fragen – ${division.shortLabel}`} emitJsonLd={false} />
    </PageLayout>
  );
};

export default DivisionHub;