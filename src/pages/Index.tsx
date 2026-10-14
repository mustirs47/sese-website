import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { LocalBusinessJsonLd } from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import PillarsSection from "@/components/sections/PillarsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import { homepageFaqs } from "@/data/homepage";

const Index = () => (
  <PageLayout>
    <SEOHead
      title="Sentinel Services – Sicherheit, Facility & Event Service"
      description="Sicherheit, Facility und Event Service aus Magdeburg, bundesweit im Einsatz. Objektbewachung, Reinigung und Gästebetreuung mit festen Ansprechpartnern."
      keywords="Sicherheitsdienst, Facility Service, Event Service, Gebäudereinigung, Sicherheitsdienst Magdeburg, Gebäudereinigung Magdeburg, Gästebetreuung"
    />
    <LocalBusinessJsonLd homepage />
    <HeroSection />
    <TrustBar />
    <PillarsSection />
    <WhyUsSection />
    <IndustriesSection />
    <ReferencesSection />
    <ContactSection />
    <FAQSection light faqs={homepageFaqs} />
  </PageLayout>
);

export default Index;
