import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Cookie, Settings, X, Shield, BarChart3, Check } from "@/lib/icons";

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

const STORAGE_KEY = "sentinel-cookie-consent";
const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;

const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  timestamp: 0,
};

let analyticsGranted = false;

function applyConsent(consent: CookieConsent) {
  // gtag.js verarbeitet nur echte `arguments`-Objekte, keine Arrays.
  // Daher die in index.html definierte globale gtag-Funktion verwenden.
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== "function") {
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      (w.dataLayer as unknown[]).push(arguments);
    };
  }
  w.gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
  });
  // Der erste Seitenaufruf lief noch ohne Einwilligung. Nach der Zustimmung
  // einmalig erneut senden, damit der Besuch in GA zählt.
  if (consent.analytics && !analyticsGranted) {
    analyticsGranted = true;
    w.gtag("event", "page_view", {
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookieConsent;
        if (Date.now() - parsed.timestamp > ONE_YEAR) {
          setIsVisible(true);
        } else {
          setConsent(parsed);
          applyConsent(parsed);
        }
      } catch {
        setIsVisible(true);
      }
    } else {
      const t = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try { setConsent(JSON.parse(stored)); } catch { /* noop */ }
      }
      setShowSettings(true);
      setIsVisible(true);
    };
    window.addEventListener("cookie-settings-open", handleOpen);
    return () => window.removeEventListener("cookie-settings-open", handleOpen);
  }, []);

  const save = (next: CookieConsent) => {
    const withTs = { ...next, timestamp: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(withTs));
    setConsent(withTs);
    applyConsent(withTs);
    setIsVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, timestamp: Date.now() });
  const acceptNecessary = () => save({ necessary: true, analytics: false, timestamp: Date.now() });
  const saveSettings = () => save(consent);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex items-end justify-center p-3 sm:p-6 pointer-events-none"
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-modal="false"
    >
      <div className="pointer-events-auto w-full max-w-3xl rounded-lg border border-border bg-background shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="max-h-[85vh] overflow-y-auto p-5 sm:p-7">
          {!showSettings ? (
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  Cookies &amp; Datenschutz
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  Wir verwenden technisch notwendige Cookies für den Betrieb der Website. Mit Ihrer Einwilligung
                  setzen wir zusätzlich Google Analytics ein, um die Nutzung anonymisiert auszuwerten und unser
                  Angebot zu verbessern. Details finden Sie in der{" "}
                  <Link to="/datenschutz" className="text-primary underline-offset-2 hover:underline">
                    Datenschutzerklärung
                  </Link>.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <Button onClick={acceptAll} size="sm" className="gap-2">
                    <Check className="h-4 w-4" />
                    Alle akzeptieren
                  </Button>
                  <Button onClick={acceptNecessary} variant="outline" size="sm">
                    Nur notwendige
                  </Button>
                  <Button onClick={() => setShowSettings(true)} variant="ghost" size="sm" className="gap-2">
                    <Settings className="h-4 w-4" />
                    Einstellungen
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Cookie-Einstellungen</h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  aria-label="Schließen"
                  className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4 rounded-md border border-border bg-muted/30 p-4">
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <Label className="text-sm font-medium text-foreground">Technisch notwendig</Label>
                      <span className="rounded bg-primary/15 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-primary">
                        Immer aktiv
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Sicherstellen der Grundfunktionen der Website (z. B. Navigation, Sicherheit). Diese
                      Cookies sind erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>
                  <Switch checked disabled className="opacity-60" />
                </div>

                <div className="flex items-start justify-between gap-4 rounded-md border border-border bg-muted/30 p-4">
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      <Label htmlFor="consent-analytics" className="text-sm font-medium text-foreground">
                        Statistik (Google Analytics)
                      </Label>
                    </div>
                    <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
                      Anonymisierte Auswertung der Seitennutzung mit Google Analytics 4 (IP-Anonymisierung
                      aktiv), um Inhalte und Performance der Website zu verbessern.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Google Analytics 4", "_ga", "_ga_*"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Switch
                    id="consent-analytics"
                    checked={consent.analytics}
                    onCheckedChange={(checked) =>
                      setConsent((prev) => ({ ...prev, analytics: checked }))
                    }
                  />
                </div>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Sie können Ihre Auswahl jederzeit über den Link „Cookie-Einstellungen" im Footer ändern.
                Weitere Informationen in der{" "}
                <Link to="/datenschutz" className="text-primary underline-offset-2 hover:underline">
                  Datenschutzerklärung
                </Link>.
              </p>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <Button onClick={saveSettings} size="sm">Auswahl speichern</Button>
                <Button onClick={acceptAll} variant="outline" size="sm">Alle akzeptieren</Button>
                <Button onClick={acceptNecessary} variant="ghost" size="sm">Nur notwendige</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function reopenCookieSettings(): void {
  window.dispatchEvent(new CustomEvent("cookie-settings-open"));
}