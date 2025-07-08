import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  Heart, 
  Sparkles,
  Calendar,
  ArrowUp,
  UserPlus,
  HandHeart,
  Quote,
  Clock
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Link } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";

const About = () => {
  const { t, language, direction } = useI18n();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fallback data for when translations are not available
  const fallbackTimeline = [
    { year: "2020", title: "TuniBless e.V. Gründung", description: "Vereinsgründung zur Unterstützung tunesischer Familien" },
    { year: "2021", title: "Erste Partnerschaften", description: "Aufbau von Partnerschaften zwischen Tunesien und Deutschland" },
    { year: "2022", title: "WhatsApp Netzwerk", description: "24 regionale WhatsApp-Gruppen etabliert" },
    { year: "2023", title: "Erfolgreiche Vermittlungen", description: "Über 500 erfolgreiche Beratungen und Vermittlungen" },
    { year: "2024", title: "Expansion", description: "Erweiterung der Services und internationale Reichweite" },
  ];

  const fallbackTeam = [
    { name: "Kamel Ben Hamida", role: "Vorsitzender", region: "Deutschland", initials: "KB" },
    { name: "Saif Achour", role: "Kassenwart", region: "Deutschland", initials: "SA" },
    { name: "Nada Knani", role: "Leiter Koordinatoren", region: "Deutschland", initials: "NK" },
    { name: "Maryam El Oudhane", role: "Teamleiter Media", region: "Deutschland", initials: "ME" },
    { name: "Sofiene Ben Abdallah", role: "Koordinator NORD", region: "Deutschland", initials: "SB" },
    { name: "Yassine", role: "Koordinator WEST", region: "Deutschland", initials: "Y" },
    { name: "Adel Belaskar", role: "Koordinator SÜD", region: "Deutschland", initials: "AB" },
    { name: "Hareth El Ouadhane", role: "Koordinator OST", region: "Deutschland", initials: "HE" },
  ];

  return (
    <>
      <PageNavigation />
      <div className="min-h-screen bg-background" dir={direction}>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-primary rounded-full p-6 w-24 h-24 mx-auto mb-8 flex items-center justify-center"
              >
                <Users className="h-12 w-12 text-primary-foreground" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                {t?.about?.title || "Über TuniBless e.V."}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
                {t?.about?.subtitle || "Ein gemeinnütziger Verein, der tunesische Familien und Jugendliche auf ihrem Weg zur erfolgreichen Integration in Deutschland unterstützt."}
              </p>

              {/* Quick navigation */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { id: 'mission', label: t?.about?.mission?.title || "Mission", icon: Target },
                  { id: 'timeline', label: t?.about?.timeline?.title || "Timeline", icon: Calendar },
                  { id: 'team', label: t?.about?.team?.title || "Team", icon: Users },
                  { id: 'join', label: t?.about?.cta?.title || "Mitmachen", icon: Heart }
                ].map(({ id, label, icon: Icon }) => (
                  <Button
                    key={id}
                    variant="outline"
                    onClick={() => scrollToSection(id)}
                    className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t?.about?.mission?.title || "Unsere Mission"}
                </h2>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  {t?.about?.mission?.description || "TuniBless e.V. fördert strukturierte, würdevolle Alternativen zur illegalen Migration durch kostenlose Berufsberatung, Partnerschaftsarbeit und mehrsprachige Community-Betreuung."}
                </p>
              </div>

              {/* Proverb Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mb-12 relative overflow-hidden"
              >
                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/30" />
                <div className="text-center space-y-4">
                  <p className="text-2xl font-semibold text-primary" dir="rtl">
                    {t?.about?.mission?.proverb?.arabic || "ما حك جلدك مثل ظفرك، فتولّ أنت جميع أمرك"}
                  </p>
                  <p className="text-lg text-muted-foreground italic">
                    "{t?.about?.mission?.proverb?.german || "Niemand kratzt besser an deiner Haut als dein eigener Fingernagel – also erledige deine Aufgaben selbst."}"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t?.about?.mission?.proverb?.meaning || "Eigenverantwortung und Selbstbestimmung"}
                  </p>
                </div>
              </motion.div>

              {/* Feature Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { key: 'structured', title: 'Strukturiert', description: 'Klare Wege zur Integration', icon: Target },
                  { key: 'nonprofit', title: 'Gemeinnützig', description: 'Kostenlose Unterstützung', icon: Heart },
                  { key: 'community', title: 'Community', description: '24 WhatsApp Gruppen', icon: Users },
                  { key: 'continuous', title: 'Kontinuierlich', description: 'Regelmäße Livestreams', icon: Clock }
                ].map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6 text-center">
                          <div className="bg-gradient-primary rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {t?.about?.mission?.features?.[feature.key]?.title || feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {t?.about?.mission?.features?.[feature.key]?.description || feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t?.about?.timeline?.title || "Unser Weg"}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t?.about?.timeline?.subtitle || "Meilensteine unserer Entwicklung"}
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform -translate-x-0.5 md:-translate-x-1/2" />

                {/* Timeline events */}
                <div className="space-y-8">
                  {(t?.about?.timeline?.events || fallbackTimeline).map((event, index) => (
                    <motion.div
                      key={event.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-1/2 z-10" />
                      
                      {/* Content */}
                      <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-primary border-primary">
                                {event.year}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {event.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  {t?.about?.timeline?.lastUpdated || "Zuletzt aktualisiert"}: {new Date().toLocaleDateString(language)}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t?.about?.team?.title || "Unser Team"}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t?.about?.team?.subtitle || "Erfahrene Koordinatoren und engagierte Freiwillige"}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {(t?.about?.team?.members || fallbackTeam).map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-foreground">
                            {member.initials || member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {member.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {member.region}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section id="join" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-full p-6 w-24 h-24 mx-auto mb-8 flex items-center justify-center"
                >
                  <Heart className="h-12 w-12 text-primary" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t?.about?.cta?.title || "Werde Teil unserer Mission"}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                  {t?.about?.cta?.subtitle || "Unterstütze uns dabei, tunesischen Familien den Weg zu einem besseren Leben zu ebnen."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild size="lg" className="gap-2 shadow-lg">
                      <Link to="/registration">
                        <UserPlus className="h-5 w-5" />
                        {t?.about?.cta?.register || "Jetzt registrieren"}
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild variant="outline" size="lg" className="gap-2 shadow-lg">
                      <Link to="/helfer">
                        <HandHeart className="h-5 w-5" />
                        {t?.about?.cta?.volunteer || "Ehrenamtlich helfen"}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

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

// Animated Section Component
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default About;