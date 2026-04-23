import { useLanguage } from "./hooks/useLanguage";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import HeroSection from "./features/home/HeroSection";
import FeaturesSection from "./features/features/FeaturesSection";
import HowItWorksSection from "./features/howItWorks/HowItWorksSection";
import TestimonialsSection from "./features/testimonials/TestimonialsSection";
import PricingSection from "./features/pricing/PricingSection";
import FinalCtaSection from "./features/contact/FinalCtaSection";

const App = () => {
  // Initialize direction based on language
  useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
