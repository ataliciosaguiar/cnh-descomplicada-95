import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ProductCards from "@/components/ProductCards";
import ForWhoSection from "@/components/ForWhoSection";
import BenefitsSection from "@/components/BenefitsSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhySection />
      <ProductCards />
      <ForWhoSection />
      <BenefitsSection />
      <OfferSection />
      <GuaranteeSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
