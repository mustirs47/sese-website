import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Send, Shield, FileCheck, Users, Search, UserCheck, Radio, ClipboardCheck, ArrowRight, CheckCircle } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BreadcrumbJsonLd, FAQPageJsonLd, WebPageJsonLd } from "@/components/StructuredData";
import { BASE_URL } from "@/lib/seo";

const processSteps = [
  { icon: Search, title: "Analyse", desc: "Wir erfassen Ihren Bedarf" },
  { icon: UserCheck, title: "Konzept", desc: "Individueller Einsatzplan" },
  { icon: Radio, title: "Einsatz", desc: "Strukturierter Start" },
  { icon: ClipboardCheck, title: "Reporting", desc: "Laufende Dokumentation" },
];

const guarantees = [
  "Schnellstmögliche Rückmeldung auf Ihre Anfrage",
  "Konkretes Angebot statt allgemeiner Beratung",
  "Kein Standardangebot – individuelles Konzept für Ihren Bedarf",
  "Transparente Kostenaufstellung ohne versteckte Gebühren",
];

const kontaktFaqs = [
  { question: "Wie schnell melden Sie sich auf meine Anfrage?", answer: "Wir melden uns schnellstmöglich auf Ihre Anfrage per E-Mail." },
  { question: "Was kostet die Angebotserstellung?", answer: "Die Erstellung eines konkreten Angebots auf Basis Ihrer Anfrage ist kostenfrei und unverbindlich." },
  { question: "Wie kurzfristig kann ein Einsatz starten?", answer: "Bei akutem Bedarf können wir zügig einsatzbereit sein. Für planbare Einsätze empfehlen wir eine Vorlaufzeit von mindestens einer Woche." },
];

const KontaktPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const fid = useId();
  const id = (k: string) => `${fid}-${k}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("_honey")) return;

    // DSGVO-Consent prüfen
    if (!formData.get("consent")) {
      toast({
        title: "Einwilligung erforderlich",
        description: "Bitte stimmen Sie der Datenverarbeitung zu, um die Anfrage zu senden.",
        variant: "destructive",
      });
      return;
    }

    // Validierung Mindestlängen
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (name.length < 2 || name.length > 100) {
      toast({ title: "Name prüfen", description: "Bitte geben Sie einen gültigen Namen ein.", variant: "destructive" });
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 255) {
      toast({ title: "E-Mail prüfen", description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.", variant: "destructive" });
      return;
    }
    if (message.length < 10 || message.length > 2000) {
      toast({ title: "Nachricht prüfen", description: "Bitte beschreiben Sie Ihren Bedarf (mind. 10 Zeichen).", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/707d95ee3477d513c79f21196dac79a1", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: name,
          Unternehmen: formData.get("company") || "",
          "E-Mail": email,
          Telefon: formData.get("phone") || "",
          "Gewünschte Leistung": formData.get("service") || "",
          Einsatzort: formData.get("location") || "",
          Zeitraum: formData.get("period") || "",
          Nachricht: message,
          Rückruf: formData.get("callback") ? "ja" : "nein",
          Kurzfristig: formData.get("urgent") ? "ja" : "nein",
          _subject: `Neue Kontaktanfrage von ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
      } catch {
        toast({
          title: "Senden fehlgeschlagen",
          description: "Bitte versuchen Sie es erneut oder senden Sie uns eine E-Mail.",
          variant: "destructive",
        });
      } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <SEOHead
        title="Anfrage stellen – Kontakt | Sentinel Services"
        description="Sicherheit, Facility oder Event Service anfragen: Bedarf, Einsatzort und Zeitraum nennen – wir melden uns mit einem konkreten Angebot."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${BASE_URL}/` },
          { name: "Kontakt", url: `${BASE_URL}/kontakt` },
        ]}
      />
      <WebPageJsonLd
        type="ContactPage"
        name="Kontakt – Sentinel Services"
        description="Anfrageformular und Kontaktwege zu Sentinel Services."
        url={`${BASE_URL}/kontakt`}
      />
      <FAQPageJsonLd faqs={kontaktFaqs} />

      <PageHero
        badge="Kontakt"
        title="Anfrage stellen"
        subtitle="Nennen Sie Leistung, Einsatzort und Zeitraum. Wir prüfen Ihre Anfrage und melden uns mit einer konkreten Einschätzung zur Umsetzung."
      />

      {/* Process steps row */}
      <section className="section-light border-b" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <p className="eyebrow text-center !mb-5">So läuft es ab</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {processSteps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="text-center relative">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-2 relative">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <p className="text-xs font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</p>
                <p className="text-[11px] text-muted-fg mt-0.5 hidden sm:block">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-sm font-bold mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
                  Kontaktinformationen
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "hsl(var(--section-light-fg))" }}>E-Mail</p>
                      <a href="mailto:info@sentinel-services.de" className="text-sm text-muted-fg hover:text-primary transition-colors">
                        info@sentinel-services.de
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "hsl(var(--section-light-fg))" }}>Einsatzgebiet</p>
                      <p className="text-sm text-muted-fg">Bundesweit</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Guarantees */}
              <div className="rounded-xl p-5" style={{ background: "hsl(var(--primary) / 0.05)", border: "1px solid hsl(var(--section-light-border))" }}>
                <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">Was Sie von uns erhalten</p>
                <ul className="space-y-2.5">
                  {guarantees.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-sm text-muted-fg">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust signals */}
              <div className="rounded-xl p-5" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}>
                <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">Darauf können Sie sich verlassen</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm text-muted-fg">
                    <Shield className="h-4 w-4 text-primary shrink-0" /> Eingewiesenes Fachpersonal je Bereich
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-muted-fg">
                    <Users className="h-4 w-4 text-primary shrink-0" /> Feste Ansprechpartner
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-muted-fg">
                    <FileCheck className="h-4 w-4 text-primary shrink-0" /> Dokumentation je Einsatz
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-xl p-8 text-center" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>Vielen Dank für Ihre Anfrage</h2>
                  <p className="mt-2 text-sm text-muted-fg">Wir melden uns schnellstmöglich bei Ihnen.</p>
                  <Button asChild className="mt-6" variant="outline">
                    <Link to="/">Zurück zur Startseite</Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-accent rounded-xl p-6 sm:p-8 space-y-4" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }} noValidate>
                  <h2 className="text-base font-bold mb-2" style={{ color: "hsl(var(--section-light-fg))" }}>
                    Kontaktformular
                  </h2>
                  <p className="text-sm text-muted-fg mb-4">
                    Beschreiben Sie Ihren Bedarf – je genauer, desto besser können wir Ihnen helfen.
                  </p>
                  {/* Honeypot - für Bots */}
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor={id("name")} className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Name *</label>
                      <Input id={id("name")} required name="name" autoComplete="name" maxLength={100} placeholder="Ihr Name" />
                    </div>
                    <div>
                      <label htmlFor={id("company")} className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Unternehmen</label>
                      <Input id={id("company")} name="company" autoComplete="organization" maxLength={150} placeholder="Firma / Organisation" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor={id("email")} className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>E-Mail *</label>
                      <Input id={id("email")} required name="email" type="email" autoComplete="email" maxLength={255} placeholder="ihre@email.de" />
                    </div>
                    <div>
                      <label htmlFor={id("phone")} className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Telefon</label>
                      <Input id={id("phone")} name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="Für Rückruf" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor={id("service")} className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Gewünschte Leistung</label>
                    <Input id={id("service")} name="service" maxLength={150} placeholder="z.B. Objektschutz, Gebäudereinigung oder Gästebetreuung" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor={id("location")} className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Einsatzort</label>
                      <Input id={id("location")} name="location" autoComplete="address-level2" maxLength={120} placeholder="Stadt / PLZ" />
                    </div>
                    <div>
                      <label htmlFor={id("period")} className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Zeitraum</label>
                      <Input id={id("period")} name="period" maxLength={80} placeholder="z.B. ab November oder am Veranstaltungstag" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor={id("message")} className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Nachricht *</label>
                    <textarea
                      id={id("message")}
                      name="message"
                      required
                      maxLength={2000}
                      rows={4}
                      placeholder="Beschreiben Sie Ihren Bedarf..."
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-fg">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="callback" className="rounded border-input text-primary focus:ring-primary" />
                      Rückruf erwünscht
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="urgent" className="rounded border-input text-primary focus:ring-primary" />
                      Kurzfristiger Einsatzbedarf
                    </label>
                  </div>
                  <div className="rounded-md border p-3" style={{ borderColor: "hsl(var(--section-light-border))", background: "hsl(var(--section-light-card))" }}>
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-muted-fg">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-0.5 rounded border-input text-primary focus:ring-primary"
                      />
                      <span>
                        Ich stimme den{" "}
                        <Link to="/datenschutz" className="text-primary hover:underline">
                          Datenschutzbestimmungen
                        </Link>{" "}
                        zu. *
                      </span>
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button type="submit" size="lg" disabled={submitting}>
                      {submitting ? "Wird gesendet…" : "Anfrage absenden"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-fg leading-relaxed">*Pflichtfelder</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hinweise zur Anfrage */}
      <section
        className="section-light border-t"
        style={{ borderColor: "hsl(var(--section-light-border))" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow">Vor der Anfrage</p>
            <h2 className="h-section" style={{ color: "hsl(var(--section-light-fg))" }}>
              Was uns hilft, schnell konkret zu werden
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {[
              {
                heading: "Objekt oder Veranstaltung",
                body: "Bei Veranstaltungen nennen Sie Gästezahl, Veranstaltungsort und Aufgaben vor Ort. Bei Gebäuden helfen Objektart, ungefähre Fläche und Nutzung. Ein Bürogebäude mit Publikumsverkehr braucht andere Intervalle als eine Lagerhalle, eine Wohnanlage andere Zeiten als eine Produktion im Dreischichtbetrieb.",
              },
              {
                heading: "Zeitraum und Turnus",
                body: "Nennen Sie uns, ob es um eine einmalige Maßnahme, eine Saison oder eine dauerhafte Betreuung geht, und ab wann. Bei kurzfristigem Bedarf sagen wir Ihnen offen, ob wir die nötigen Kräfte seriös stellen können – lieber eine klare Absage als eine unbesetzte Schicht.",
              },
              {
                heading: "Bestehende Verträge",
                body: "Läuft bereits ein Vertrag mit Kündigungsfrist, planen wir den Übergang danach. Wir übernehmen Objekte auch mitten in der Saison; Einweisung, Schlüsselübergabe und Personalplanung brauchen dann etwa zwei bis drei Wochen Vorlauf.",
              },
              {
                heading: "Was danach passiert",
                body: "Nach Ihrer Anfrage prüfen wir Umfang und Verfügbarkeit und melden uns bei Ihnen. Bei größeren Objekten vereinbaren wir eine Begehung, sonst klären wir offene Punkte per E-Mail oder Rückruf. Sie erhalten anschließend ein schriftliches Angebot mit Leistungsverzeichnis, Intervallen und Preisen – mit klar benannten Vertragsbedingungen.",
              },
              {
                heading: "Mehrere Bereiche gleichzeitig",
                body: "Wenn Sie Sicherheit, Facility oder Event Service zusammen benötigen, nennen Sie uns die gewünschten Aufgaben. Wir bündeln die Leistungen dann in einem Angebot und einer Objektleitung – das spart Ihnen Schnittstellen und macht Zuständigkeiten im Alltag eindeutig.",
              },
              {
                heading: "Datenschutz",
                body: "Wir verwenden Ihre Angaben zur Bearbeitung der Anfrage. Die technische Formularzustellung erfolgt über FormSubmit; Hinweise dazu stehen in der Datenschutzerklärung. Wenn Sie lieber ohne Formular starten: eine kurze E-Mail mit Objekt und Bedarf genügt.",
              },
            ].map(({ heading, body }) => (
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

      {/* Additional CTA */}
      <section className="bg-background border-t border-border/50">
        <div ref={ref2} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="h-section mb-3">
              Leistungen und Abläufe im Überblick
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Erfahren Sie mehr über unsere Leistungen, Qualifikationen und Arbeitsweise – oder schreiben Sie uns eine Nachricht.
            </p>
          </div>
          <div className="stagger-children grid gap-4 sm:grid-cols-3">
            {[
              { title: "Unsere Bereiche", desc: "Sicherheit, Facility und Event Service", href: "/#leistungen" },
              { title: "Qualifikationen", desc: "Nachweise und Zertifizierungen unseres Personals", href: "/qualifikationen" },
              { title: "Arbeitsweise", desc: "Unser strukturierter 4-Phasen-Prozess", href: "/arbeitsweise" },
            ].map(({ title, desc, href }) => (
              <Link
                key={href}
                to={href}
                className="group rounded-xl border border-border/50 p-6 text-center transition-all hover:shadow-md hover:border-primary/30"
              >
                <h3 className="text-base font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Mehr erfahren <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={kontaktFaqs} title="Häufige Fragen zum Kontakt" emitJsonLd={false} />
    </PageLayout>
  );
};

export default KontaktPage;
