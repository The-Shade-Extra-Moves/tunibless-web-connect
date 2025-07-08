import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import PageNavigation from "@/components/PageNavigation";
import ContactForm from "@/components/ContactForm";
import ContactInfoCard from "@/components/ContactInfoCard";
import QuickActions from "@/components/QuickActions";
import BankingDetails from "@/components/BankingDetails";
import EmbeddedMap from "@/components/EmbeddedMap";
import { Button } from "@/components/ui/button";
import { ArrowUp, Anchor } from "lucide-react";

const ContactPage = () => {
  const { t, direction } = useI18n();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check for anchor in URL on load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, []);

  const anchorLinks = [
    { id: "form", label: t.contactPage.anchors.form },
    { id: "info", label: t.contactPage.anchors.info },
    { id: "map", label: t.contactPage.anchors.map },
    { id: "banking", label: t.contactPage.anchors.banking },
  ];

  return (
    <>
      <PageNavigation />
      <div className="min-h-screen bg-background pt-20" dir={direction}>
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.contactPage.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t.contactPage.subtitle}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t.contactPage.description}
              </p>
              
              {/* Quick Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {anchorLinks.map((link) => (
                  <Button
                    key={link.id}
                    variant="outline"
                    size="sm"
                    onClick={() => scrollToSection(link.id)}
                    className="gap-2"
                  >
                    <Anchor className="h-3 w-3" />
                    {link.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Contact Form Section */}
          <ContactForm />

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <ContactInfoCard />
            
            {/* Quick Actions */}
            <QuickActions />
          </div>

          {/* Map Section */}
          <EmbeddedMap />

          {/* Banking Details */}
          <BankingDetails />

          {/* Additional Help Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center py-16 px-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still need help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out our frequently asked questions or browse our comprehensive guides and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <a href="/faq">
                  View FAQ
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/services">
                  Browse Resources
                </a>
              </Button>
            </div>
          </motion.section>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ContactPage;
