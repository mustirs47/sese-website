import { Link } from "react-router-dom";
import { divisions } from "@/data/divisions";
import { Button } from "@/components/ui/button";
import logoGrayscale from "@/assets/brand/logo-white.png.asset.json";
import { reopenCookieSettings } from "@/components/CookieBanner";

const unternehmenNav = [
  { label: "Branchen", href: "/branchen" },
  { label: "Magdeburg", href: "/magdeburg" },
  { label: "Arbeitsweise", href: "/arbeitsweise" },
  { label: "Qualifikationen", href: "/qualifikationen" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
];

const legalNav = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const Footer = () => {
  const fields = divisions.map(d => ({ label: d.title, href: `/${d.slug}` }));
  return (
  <footer className="bg-background border-t border-border/50">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" aria-label="Sentinel Services – Startseite" className="inline-block">
            <img
              src={logoGrayscale.url}
              alt="Sentinel Services"
              className="block h-auto w-64 max-w-full mb-4"
              width={813}
              height={120}
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
            Sicherheit, Facility und Event Service – mit eingewiesenem Personal, klaren Zuständigkeiten und festen Ansprechpartnern.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Sitz in Magdeburg · Einsatzgebiet bundesweit
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Bereiche</h4>
          <ul className="space-y-1">
            {fields.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="block py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Unternehmen</h4>
          <ul className="space-y-1">
            {unternehmenNav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="block py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Kontakt</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>
              <a href="mailto:info@sentinel-services.de" className="block py-1.5 hover:text-primary transition-colors">
                info@sentinel-services.de
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Rechtliches</h4>
            <ul className="space-y-1">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="block py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button variant="link"
                  type="button"
                  onClick={reopenCookieSettings}
                  className="h-auto p-0 py-1.5 text-sm text-muted-foreground text-left"
                >
                  Cookie-Einstellungen
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border/40 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sentinel Services. Alle Rechte vorbehalten.
        </p>
        <p className="text-xs text-muted-foreground">
          Webdesign:{" "}
          <a href="https://www.ovarna.de/?utm_source=sentinel-services.de&utm_medium=referral&utm_campaign=footer-credit" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Ovarna
          </a>
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
