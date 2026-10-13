import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, FileCheck, Users, ChevronRight, Building2 } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import brandSymbol from "@/assets/sentinel-symbol-white.png";

const trustSignals = [
  { icon: Building2, text: "Vier Bereiche – ein Anbieter" },
  { icon: Users, text: "Feste Ansprechpartner" },
  { icon: FileCheck, text: "Dokumentierte Leistung" },
  { icon: Sparkles, text: "Eingewiesenes Fachpersonal" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24">
        <div className="max-w-2xl xl:max-w-3xl flex-1 min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-5">
              <Building2 className="h-3 w-3" />
              Objektbetreuung aus einer Hand
            </span>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4.25rem] break-words hyphens-auto" style={{ lineHeight: 1.1 }}>
            Schutz, Sauberkeit und{" "}
            <span className="text-primary">Werterhalt</span> für Ihr Objekt.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl xl:text-[1.375rem] max-w-xl xl:max-w-2xl">
            Gebäudereinigung, Facility Management, Grünanlagenpflege und Sicherheitsdienst – einzeln
            buchbar oder als komplette Objektbetreuung. Mit eingewiesenem Personal, einer festen
            Ansprechperson und Berichten, die nachvollziehbar bleiben.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="text-base px-6">
              <Link to="/kontakt">
                Anfrage stellen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="#leistungen"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Bereiche ansehen
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex shrink-0 items-center justify-center" aria-hidden="true">
          <img
            src={brandSymbol}
            alt=""
            className="w-48 xl:w-64 h-auto"
            width={234}
            height={205}
            decoding="async"
            loading="eager"
          />
        </div>
      </div>

      {/* Trust signals as flat row */}
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/30 pt-6">
        {trustSignals.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
