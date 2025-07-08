import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/lib/i18n-context';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Components
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const { t, isRTL, currentLanguage } = useI18n();
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Refs for section tracking
  const heroRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  // Scroll progress tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Intersection observers for scroll spy
  const heroInView = useIntersectionObserver(heroRef, { threshold: 0.5 });
  const missionInView = useIntersectionObserver(missionRef, { threshold: 0.5 });
  const servicesInView = useIntersectionObserver(servicesRef, { threshold: 0.5 });
  const teamInView = useIntersectionObserver(teamRef, { threshold: 0.5 });
  const contactInView = useIntersectionObserver(contactRef, { threshold: 0.5 });

  // Update active section based on scroll position
  useEffect(() => {
    if (heroInView) setActiveSection('hero');
    else if (missionInView) setActiveSection('mission');
    else if (servicesInView) setActiveSection('services');
    else if (teamInView) setActiveSection('team');
    else if (contactInView) setActiveSection('contact');
  }, [heroInView, missionInView, servicesInView, teamInView, contactInView]);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Update scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Meta data for SEO
  const metaData = {
    title: `${t.hero.title} | TuniBless e.V.`,
    description: t.hero.description,
    keywords: `TuniBless, Tunisia, Germany, education, integration, students, community, ${currentLanguage}`,
    ogImage: '/src/assets/hero-image.jpg',
    canonical: typeof window !== 'undefined' ? window.location.href : ''
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta property="og:url" content={metaData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.ogImage} />
        <link rel="canonical" href={metaData.canonical} />
        <html lang={currentLanguage} dir={isRTL ? 'rtl' : 'ltr'} />
      </Helmet>

      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-german-gold to-tunisian-red z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: isLoading ? 0 : 0.2 }}
        className="min-h-screen bg-background"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          {t.services.accessibility.skipToContent}
        </a>

        {/* Navigation with scroll spy */}
        <Navigation activeSection={activeSection} />

        {/* Main Content Area */}
        <main id="main-content" className="relative">
          {/* Hero Section */}
          <section ref={heroRef} id="hero" className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Hero />
            </motion.div>
          </section>

          {/* Page Transition Effect */}
          <PageTransition />

          {/* Mission Section */}
          <section ref={missionRef} id="mission" className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Mission />
            </motion.div>
          </section>

          {/* Services Section */}
          <section ref={servicesRef} id="services" className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <Services />
            </motion.div>
          </section>

          {/* Team Section */}
          <section ref={teamRef} id="team" className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Team />
            </motion.div>
          </section>

          {/* Contact Section */}
          <section ref={contactRef} id="contact" className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <Contact />
            </motion.div>
          </section>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Footer />
        </motion.footer>

        {/* Floating Action Elements */}
        <StickyCTA scrollProgress={scrollProgress} />
        <BackToTop />

        {/* Accessibility: Reduced motion support */}
        <style jsx>{`
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>

        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, #ef4444 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, #f59e0b 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Floating particles */}
          {!window.matchMedia('(prefers-reduced-motion: reduce)').matches && (
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/10 rounded-full"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${20 + (i % 3) * 30}%`,
                  }}
                  animate={{
                    y: [-30, 30, -30],
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    delay: i * 1.5,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Index;
