import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@/lib/icons";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backLink?: { label: string; href: string };
  badge?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, backLink, badge, children }: PageHeroProps) => (
  <section className="bg-background border-b border-border/50">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div>
        <div className="max-w-3xl min-w-0">
          {backLink && (
            <Link
              to={backLink.href}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {backLink.label}
            </Link>
          )}
          {badge && <span className="eyebrow">{badge}</span>}
          <h1 className="h-display text-foreground">{title}</h1>
          <p className="mt-5 prose-lead text-muted-foreground">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default PageHero;
