import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Mission />
      <Services />
      <Team />
      <Contact />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
