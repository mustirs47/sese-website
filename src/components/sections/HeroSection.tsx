import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, FileCheck, Users, ChevronRight, Building2 } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/illustrations/hero-security.webp";

const heroBg = "/hero-bg.webp";

const trustSignals = [
  { icon: Building2, text: "Vier Bereiche – ein Anbieter" },
  { icon: Users, text: "Feste Ansprechpartner" },
  { icon: FileCheck, text: "Dokumentierte Leistung" },
  { icon: Sparkles, text: "Eingewiesenes Fachpersonal" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt=""
        className="h-full w-full object-cover"
        width={1920}
        height={1080}
        decoding="async"
        {...({ fetchpriority: "high" } as Record<string, string>)}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, hsl(220 20% 6% / 0.95) 30%, hsl(220 20% 6% / 0.75) 70%, hsl(220 20% 6% / 0.85) 100%)",
        }}
      />
    </div>

    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24 xl:py-28">
      <div className="flex items-center gap-8 lg:gap-16 xl:gap-24">
        <div className="max-w-2xl xl:max-w-3xl flex-1">
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

        {/* Isometric illustration */}
        <div className="hidden lg:block shrink-0">
          <img
            src={heroIllustration}
            alt="Isometrische Darstellung: Objektbetreuung mit Reinigung, Pflege und Sicherheit"
            className="w-72 xl:w-[26rem] 2xl:w-[32rem] h-auto drop-shadow-2xl"
            width={1024}
            height={1024}
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
