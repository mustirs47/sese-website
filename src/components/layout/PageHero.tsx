import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@/lib/icons";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backLink?: { label: string; href: string };
  badge?: string;
  compact?: boolean;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, backLink, badge, compact, children }: PageHeroProps) => (
  <section className="bg-background border-b border-border/50">
    <div
      className={
        compact
          ? "mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9"
          : "mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
      }
    >
      <div>
        <div className="max-w-3xl min-w-0">
          {(backLink || badge) && (
            <div className={compact ? "mb-3 flex min-w-0 flex-col items-start gap-2" : "mb-6 flex min-w-0 flex-col items-start gap-3"}>
              {backLink && (
                <Link
                  to={backLink.href}
                  className="inline-flex max-w-full items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
                  <span className="min-w-0 break-words">{backLink.label}</span>
                </Link>
              )}
              {badge && <span className="eyebrow !mb-0 max-w-full break-words">{badge}</span>}
            </div>
          )}
          <h1 className="h-display text-foreground">{title}</h1>
          <p className={`prose-lead text-muted-foreground ${compact ? "mt-3" : "mt-5"}`}>{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default PageHero;
