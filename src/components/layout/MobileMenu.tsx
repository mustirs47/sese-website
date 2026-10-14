import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logoSymbol from "@/assets/sentinel-symbol-white.png";
import { divisions } from "@/data/divisions";
import { homepageFields } from "@/data/homepage";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const extras = [
  { label: "Arbeitsweise", href: "/arbeitsweise" },
  { label: "Kontakt", href: "/kontakt" },
];

const secondary = [
  { label: "Branchen", href: "/branchen" },
  { label: "Qualifikationen", href: "/qualifikationen" },
  { label: "Karriere", href: "/karriere" },
];

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const { pathname } = useLocation();
  const isHomepage = pathname === "/" || pathname === "/index";
  const fields = isHomepage ? homepageFields : divisions;
  return (
  <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
    <SheetContent
      side="right"
      className="w-80 bg-background border-border [&>button]:hidden flex flex-col"
    >
      <SheetHeader className="mb-4 items-start">
        <SheetTitle asChild>
          <Link to="/" onClick={onClose} aria-label="Sentinel Services – Startseite">
            <img
              src={logoSymbol}
              alt="Sentinel Services"
              className="h-10 w-auto shrink-0 object-contain"
              width={234}
              height={205}
            />
          </Link>
        </SheetTitle>
      </SheetHeader>

      <nav className="flex-1 overflow-y-auto pr-1">
        <p className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Bereiche
        </p>
        <div className="flex flex-col gap-1 mb-6">
          {fields.map((d) => {
            const Icon = d.icon;
            return (
              <Link
                key={d.slug}
                to={isHomepage ? `/#${d.slug}` : `/${d.slug}`}
                onClick={() => {
                  onClose();
                  if (isHomepage) {
                    requestAnimationFrame(() => {
                      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                      document.getElementById(d.slug)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
                    });
                  }
                }}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                {d.title}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-1 mb-6">
          {extras.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <p className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Mehr
        </p>
        <div className="flex flex-col gap-1">
          {secondary.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="mt-4 pt-4 border-t border-border/60">
        <Button asChild className="w-full">
          <Link to="/kontakt" onClick={onClose}>Anfrage stellen</Link>
        </Button>
      </div>
    </SheetContent>
  </Sheet>
  );
};

export default MobileMenu;
