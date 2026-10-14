import { Link } from "react-router-dom";
import { Mail, MapPin, Shield, FileCheck, Users, ArrowRight } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="kontakt" className="section-light">
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">Kontakt</span>
          <h2 className="h-section">Ihr Auftrag. Unser Einsatz.</h2>
          <p className="section-intro">
            Nennen Sie uns die gewünschte Leistung, den Einsatzort und den Zeitraum.
            Wir prüfen den Umfang und melden uns mit den nächsten Schritten.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 xl:gap-14">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="h-card mb-4">Kontaktinformationen</h3>
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
                    <p className="text-sm text-muted-fg">
                      Sitz in Magdeburg, bundesweit im Einsatz –{" "}
                      <Link to="/magdeburg" className="text-primary hover:underline">Leistungen in Magdeburg</Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Trust signals near form */}
            <div className="rounded-xl p-4" style={{ background: "hsl(var(--primary) / 0.05)" }}>
              <p className="eyebrow !mb-3 !text-[12px]">Darauf können Sie sich verlassen</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-muted-fg">
                  <Shield className="h-3.5 w-3.5 text-primary shrink-0" /> Geprüftes, eingewiesenes Personal
                </li>
                <li className="flex items-center gap-2 text-xs text-muted-fg">
                  <Users className="h-3.5 w-3.5 text-primary shrink-0" /> Feste Ansprechpartner
                </li>
                <li className="flex items-center gap-2 text-xs text-muted-fg">
                  <FileCheck className="h-3.5 w-3.5 text-primary shrink-0" /> Nachvollziehbare Berichte
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card-accent surface-card flex flex-col h-full">
              <h3 className="h-card text-lg !font-bold mb-2">Dienstleistung anfragen</h3>
              <p className="text-sm text-muted-fg mb-6">
                Ob Sicherheit, Facility oder Event Service: Schicken Sie uns die Eckdaten Ihres Auftrags.
                Auf dieser Grundlage stimmen wir Leistungen und Aufwand mit Ihnen ab.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Gewünschte Leistungen und Aufgaben",
                  "Einsatzort und geplanter Zeitraum",
                  "Flächen, Gästezahl oder weitere Eckdaten zum Auftrag",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-fg">
                    <FileCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/kontakt">
                    Zum Kontaktformular
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
