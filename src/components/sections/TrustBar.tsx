import { Building2, Users, FileCheck, MapPin } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Building2, value: "3 Fachgebiete", label: "Sicherheit · Facility · Event Service" },
  { icon: Users, value: "Feste Teams", label: "Persönliche Ansprechpartner" },
  { icon: FileCheck, value: "Klare Abläufe", label: "Abgestimmt und dokumentiert" },
  { icon: MapPin, value: "Bundesweit", label: "Nach Prüfung von Ort und Umfang" },
];

const TrustBar = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light border-y" style={{ borderColor: "hsl(var(--section-light-border))" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:py-14 xl:py-16">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8 xl:gap-10">
          {items.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex min-w-0 items-start gap-3">
              <span className="icon-tile-sm shrink-0"><Icon /></span>
              <div className="min-w-0">
                <p className="text-sm lg:text-base font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>{value}</p>
                <p className="text-xs lg:text-sm text-muted-fg">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;