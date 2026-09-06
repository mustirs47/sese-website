import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import { CookieBanner } from "@/components/CookieBanner";

// Indexierbare Hauptseiten eager laden: ein leerer Suspense-Fallback führte
// dazu, dass Crawler Seiten ohne H1, Description und OG-Tags erfassten.
import ServiceDetail from "./pages/LeistungDetail";
import DivisionHub from "./pages/DivisionHub";
import LegacyRedirect from "./pages/LegacyRedirect";
import { legacyRoutes } from "./data/legacyRoutes";
import BranchenPage from "./pages/Branchen";
import QualifikationenPage from "./pages/Qualifikationen";
import ArbeitsweisePage from "./pages/Arbeitsweise";
import KarrierePage from "./pages/KarrierePage";
import KontaktPage from "./pages/KontaktPage";

const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function ScrollToTop() { useScrollToTop(); return null; }

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>

          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Division hubs */}
            <Route path="/sicherheit" element={<DivisionHub division="sicherheit" />} />
            <Route path="/sicherheit/:slug" element={<ServiceDetail division="sicherheit" />} />
            <Route path="/reinigung" element={<DivisionHub division="reinigung" />} />
            <Route path="/reinigung/:slug" element={<ServiceDetail division="reinigung" />} />
            <Route path="/gruenanlagen" element={<DivisionHub division="gruenanlagen" />} />
            <Route path="/gruenanlagen/:slug" element={<ServiceDetail division="gruenanlagen" />} />
            <Route path="/facility-management" element={<DivisionHub division="facility-management" />} />
            <Route path="/facility-management/:slug" element={<ServiceDetail division="facility-management" />} />

            {/* Legacy-URLs: eigene Seite mit Canonical auf das Ziel statt sofortigem Redirect,
                damit Crawler kein Duplikat ohne Head-Tags erfassen. */}
            {legacyRoutes.map((r) => (
              <Route
                key={r.path}
                path={r.path}
                element={
                  <LegacyRedirect
                    to={r.to}
                    title={r.title}
                    description={r.description}
                    intro={r.intro}
                    linkLabel={r.linkLabel}
                  />
                }
              />
            ))}
            <Route
              path="/leistungen/:slug"
              element={
                <LegacyRedirect
                  to="/sicherheit"
                  title="Sicherheit & Bewachung – neue Adresse | Sentinel Services"
                  description="Die früheren Leistungsseiten sind im Bereich Sicherheit & Bewachung zusammengefasst: Objektschutz, Veranstaltungsschutz, Baustellenbewachung und mehr."
                  intro="Diese Leistung finden Sie jetzt im Bereich „Sicherheit & Bewachung“. Dort finden Sie alle Details zu dieser Leistung."
                  linkLabel="Zu Sicherheit & Bewachung"
                />
              }
            />

            <Route path="/branchen" element={<BranchenPage />} />
            <Route path="/qualifikationen" element={<QualifikationenPage />} />
            <Route path="/arbeitsweise" element={<ArbeitsweisePage />} />
            <Route path="/karriere" element={<KarrierePage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
