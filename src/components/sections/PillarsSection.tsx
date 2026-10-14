import { Link } from "react-router-dom";
import { ArrowRight } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { homepageFields } from "@/data/homepage";

const PillarsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="leistungen" className="section-light">
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">Unsere Fachgebiete</span>
          <h2 className="h-section">Sicherheit. Facility. Event Service.</h2>
          <p className="section-intro">
            Drei Fachgebiete, klare Zuständigkeiten. Wir übernehmen die Aufgaben, die Sie
            abgeben möchten – einzeln oder kombiniert, mit einer festen Ansprechperson.
          </p>
        </div>

        <div className="stagger-children grid gap-6 md:grid-cols-3">
          {homepageFields.map(({ slug, icon: Icon, title, claim, services }) => (
            <article
              key={slug}
              id={slug}
              className="card-accent surface-card surface-card--hover group flex flex-col"
            >
              <span className="icon-tile mb-5">
                <Icon />
              </span>
              <h3 className="h-card">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg flex-1">{claim}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-muted-fg">
                {services.map((service) => <li key={service}>{service}</li>)}
              </ul>
              <Link to="/kontakt" className="link-arrow mt-6" aria-label={`${title} anfragen`}>
                Leistung anfragen <ArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;