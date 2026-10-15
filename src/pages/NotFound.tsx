import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";

const NotFound = () => (
  <PageLayout>
    <SEOHead
      title="Seite nicht gefunden | Sentinel Services"
      description="Die angeforderte Seite wurde nicht gefunden. Über die Navigation erreichen Sie Sicherheit, Facility und Event Service."
      noindex
    />
    <PageHero
      title="Seite nicht gefunden"
      subtitle="Die angeforderte Seite existiert nicht oder wurde verschoben."
    >
      <div className="mt-6">
        <Link to="/" className="text-primary font-medium hover:underline">
          Zurück zur Startseite →
        </Link>
      </div>
    </PageHero>
  </PageLayout>
);

export default NotFound;
