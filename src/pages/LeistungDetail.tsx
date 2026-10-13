import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Users, FileCheck, Zap, Target } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from "@/components/StructuredData";
import { BASE_URL } from "@/lib/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  getDivision,
  getDivisionAndService,
  type DivisionSlug,
} from "@/data/divisions";
import { serviceDetails } from "@/data/serviceDetails";

interface Props {
  division: DivisionSlug;
}

const trustItems = [
  { icon: Shield, text: "Geprüftes Fachpersonal" },
  { icon: Users, text: "Feste Ansprechpartner" },
  { icon: FileCheck, text: "Nachvollziehbare Dokumentation" },
  { icon: CheckCircle, text: "Auf Ihr Objekt zugeschnitten" },
];

const processSteps = [
  { icon: Target, title: "Analyse", desc: "Bestandsaufnahme Ihres Objekts und Ihrer Anforderungen" },
  { icon: Users, title: "Konzept", desc: "Individuelle Maßnahmenplanung und Personalauswahl" },
  { icon: Zap, title: "Einsatz", desc: "Strukturierter Start mit Einweisung und Führung" },
  { icon: FileCheck, title: "Reporting", desc: "Laufende Dokumentation und regelmäßige Berichte" },
];

const ServiceDetail = ({ division: divisionSlug }: Props) => {
  const { slug } = useParams<{ slug: string }>();
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();

  const division = getDivision(divisionSlug);
  const pair = getDivisionAndService(divisionSlug, slug || "");
  if (!division) return <Navigate to="/" replace />;
  if (!pair) return <Navigate to={`/${division.slug}`} replace />;

  const { service } = pair;
  const { icon: Icon, title, h1, metaTitle, metaDescription, longDesc, typicalClients, points, context, faqs } = service;
  const detailUrl = `${BASE_URL}/${division.slug}/${slug}`;
  const siblings = division.services.filter((s) => s.slug !== slug);
  const details = serviceDetails[slug || ""] ?? [];

  return (
    <PageLayout>
      <SEOHead title={metaTitle} description={metaDescription} ogType="article" />
      <ServiceJsonLd
        name={title}
        description={metaDescription}
        url={detailUrl}
      />
      <FAQPageJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${BASE_URL}/` },
          { name: division.title, url: `${BASE_URL}/${division.slug}` },
          { name: title, url: detailUrl },
        ]}
      />

      <PageHero
        backLink={{ label: division.title, href: `/${division.slug}` }}
        title={h1}
        subtitle={context}
      >
        <div className="flex items-center gap-3 mt-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary">{title}</span>
        </div>
      </PageHero>

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          {/* Two-column layout */}
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left: Main content */}
            <div className="lg:col-span-2 min-w-0 space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
                  Über diese Leistung
                </h2>
                <p className="text-base leading-relaxed text-muted-fg">
                  {longDesc}
                </p>
              </div>

              {details.length > 0 && (
                <div className="space-y-6">
                  {details.map((d) => (
                    <div key={d.heading}>
                      <h3
                        className="text-base font-bold mb-2"
                        style={{ color: "hsl(var(--section-light-fg))" }}
                      >
                        {d.heading}
                      </h3>
                      <p className="text-base leading-relaxed text-muted-fg">{d.body}</p>
                    </div>
                  ))}
                </div>
              )}

              <div
                className="card-accent rounded-xl p-6"
                style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
              >
                <h2 className="text-lg font-bold mb-5" style={{ color: "hsl(var(--section-light-fg))" }}>
                  Leistungsumfang
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm" style={{ color: "hsl(var(--section-light-fg))" }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="max-w-full whitespace-normal h-auto py-3 text-left">
                  <Link to="/kontakt">
                    <span className="break-words">Anfrage senden</span>
                    <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="min-w-0 space-y-6">
              <div
                className="rounded-xl p-6 sticky top-24"
                style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Auf einen Blick</h3>

                <div className="mb-5">
                  <p className="text-xs font-semibold mb-2" style={{ color: "hsl(var(--section-light-fg))" }}>Typische Auftraggeber</p>
                  <p className="text-sm text-muted-fg leading-relaxed">{typicalClients}</p>
                </div>

                <div className="border-t pt-4 mb-5" style={{ borderColor: "hsl(var(--section-light-border))" }}>
                  <p className="text-xs font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>Vertrauen Sie auf</p>
                  <ul className="space-y-2.5">
                    {trustItems.map(({ icon: TrustIcon, text }) => (
                      <li key={text} className="flex items-center gap-2.5">
                        <TrustIcon className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-fg">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link to="/kontakt">
                    Jetzt anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-background border-t border-border/50">
        <div ref={ref2} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center mb-12">
            <p className="eyebrow">Ablauf</p>
            <h2 className="h-section">
              Von der Anfrage zum Einsatz
            </h2>
          </div>
          <div className="stagger-children grid gap-6 sm:grid-cols-4">
            {processSteps.map(({ icon: StepIcon, title: stepTitle, desc }, i) => (
              <div key={stepTitle} className="text-center relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-4 relative">
                  <StepIcon className="h-6 w-6 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1">{stepTitle}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/arbeitsweise" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Mehr zu unserer Arbeitsweise <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`Häufige Fragen zu ${title}`} emitJsonLd={false} />

      {/* Related services */}
      <section ref={ref3} className="fade-in-section section-light border-t" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-lg font-bold mb-6" style={{ color: "hsl(var(--section-light-fg))" }}>
            Weitere Leistungen aus {division.title}
          </h2>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-5">
            {siblings.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${division.slug}/${s.slug}`}
                  className="group rounded-xl border p-4 text-center transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
                  style={{ borderColor: "hsl(var(--section-light-border))", background: "hsl(var(--section-light-card))" }}
                >
                  <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <span className="text-sm font-semibold block" style={{ color: "hsl(var(--section-light-fg))" }}>{s.title}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceDetail;
