import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Mail, ChevronDown } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MobileMenu from "./MobileMenu";
import logoColor from "@/assets/sentinel-logo-white.png";
import { divisions } from "@/data/divisions";


const primaryNav = [
  { label: "Arbeitsweise", href: "/arbeitsweise" },
  { label: "Kontakt", href: "/kontakt" },
];

const divisionPathPrefixes = divisions.map((d) => `/${d.slug}`);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const fields = divisions;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border/60 bg-background/95 backdrop-blur-lg"
            : "border-border/30 bg-background/95 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-3 lg:py-4">
          <Link to="/" className="flex items-center min-w-0 shrink-0" aria-label="Sentinel Services – Startseite">
            <img
              src={logoColor}
              alt="Sentinel Services"
               className="h-auto w-[min(66vw,18rem)] sm:w-72 lg:w-80 xl:w-[22rem]"
               width={1377}
               height={205}
              decoding="async"
              {...({ fetchpriority: "high" } as Record<string, string>)}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost"
                  className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm xl:text-[15px] font-medium transition-colors hover:text-primary ${
                    divisionPathPrefixes.some((p) => location.pathname.startsWith(p))
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  aria-label="Bereiche öffnen"
                >
                  Bereiche
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                sideOffset={8}
                className="w-[420px] p-2 bg-background/95 backdrop-blur-lg border-border/60"
              >
                <div className="grid grid-cols-1 gap-1">
                  {fields.map((d) => {
                    const Icon = d.icon;
                    const active = location.pathname.startsWith(`/${d.slug}`);
                    return (
                      <Link
                        key={d.slug}
                        to={`/${d.slug}`}
                        className={`group flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-secondary ${
                          active ? "bg-secondary" : ""
                        }`}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className={`block text-sm font-semibold ${active ? "text-primary" : "text-foreground"}`}>
                            {d.title}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-muted-foreground line-clamp-2">
                            {d.claim}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-border/60 px-3 pt-2">
                  <Link
                    to="/branchen"
                    className="text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    Branchenüberblick
                  </Link>
                  <Link
                    to="/qualifikationen"
                    className="text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    Qualifikationen
                  </Link>
                </div>
              </PopoverContent>
            </Popover>

            {primaryNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-md px-3 py-2 text-sm xl:text-[15px] font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:info@sentinel-services.de"
              aria-label="E-Mail an info@sentinel-services.de"
              className="hidden sm:inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/kontakt">Anfrage stellen</Link>
            </Button>
            <Button variant="ghost" size="icon"
              onClick={() => setMobileOpen(true)}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary lg:hidden"
              aria-label="Menü öffnen"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Header;
