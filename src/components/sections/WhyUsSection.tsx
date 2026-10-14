import { Link } from "react-router-dom";
import { Search, UserCheck, Radio, ClipboardCheck, ArrowRight } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phases = [
  {
    icon: Search,
    step: "01",
    title: "Analyse vor Einsatz",
    desc: "Wir klären Aufgaben, Einsatzort und Rahmenbedingungen, bevor wir starten.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Personal & Briefing",
    desc: "Wir wählen das Personal passend zum Auftrag aus und weisen es in die Aufgaben ein.",
  },
  {
    icon: Radio,
    step: "03",
    title: "Führung im Einsatz",
    desc: "Eine feste Ansprechperson hält die Abstimmung zusammen. Meldewege sind vorab geklärt.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Dokumentation",
    desc: "Wir halten Ergebnisse fest, melden Abweichungen und passen den Einsatz bei Bedarf an.",
  },
];

const WhyUsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="bg-background">
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">4 Phasen</span>
          <h2 className="h-section text-foreground">So arbeiten wir</h2>
          <p className="section-intro">
            Vom ersten Auftrag bis zur Rückmeldung: Wir legen fest, wer was übernimmt und wie der Einsatz abläuft.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />

          {phases.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="relative flex flex-col items-center text-center p-6 lg:p-8">
              <div className="icon-tile-lg relative z-10 mb-5 border-2 border-primary/30 !bg-background">
                <Icon />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {step}
                </span>
              </div>
              <h3 className="h-card text-foreground mb-2">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/arbeitsweise" className="link-arrow">
            Mehr über unsere Arbeitsweise <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
