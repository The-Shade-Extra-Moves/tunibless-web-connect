import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  ArrowDown, 
  Download, 
  Users, 
  Globe, 
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Star,
  BookOpen,
  Smartphone
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { servicesData, getFeaturedServices, getPopularServices } from "@/lib/services-data";

interface ServicesHeroProps {
  onScrollToServices?: () => void;
  className?: string;
}

export const ServicesHero = ({ onScrollToServices, className = "" }: ServicesHeroProps) => {
  const { t, language } = useI18n();
  
  const featuredServices = getFeaturedServices();
  const popularServices = getPopularServices();
  const totalServices = servicesData.length;
  const totalCategories = 9; // Based on our categories
  
  const stats = [
    {
      icon: BookOpen,
      value: totalServices,
      label: t.services?.stats?.totalServices || "Services",
      color: "text-blue-600"
    },
    {
      icon: Download,
      value: "25K+",
      label: t.services?.stats?.downloads || "Downloads",
      color: "text-green-600"
    },
    {
      icon: Users,
      value: "5K+",
      label: t.services?.stats?.users || "Users",
      color: "text-purple-600"
    },
    {
      icon: Globe,
      value: "4",
      label: t.services?.stats?.languages || "Languages",
      color: "text-orange-600"
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: t.services?.features?.search || "Smart Search",
      description: "Intelligente Suche mit Vorschlägen und Verlauf"
    },
    {
      icon: Globe,
      title: t.services?.features?.multilingual || "Multilingual",
      description: "Verfügbar in Deutsch, Arabisch, Französisch und Englisch"
    },
    {
      icon: Smartphone,
      title: t.services?.features?.mobile || "Mobile Optimized",
      description: "Optimiert für alle Geräte und Bildschirmgrößen"
    },
    {
      icon: Shield,
      title: t.services?.features?.secure || "Secure",
      description: "Sichere Downloads und verschlüsselte Datenübertragung"
    },
    {
      icon: Clock,
      title: t.services?.features?.updated || "Always Updated",
      description: "Regelmäßig aktualisierte Inhalte und neue Ressourcen"
    },
    {
      icon: Star,
      title: t.services?.features?.filter || "Advanced Filters",
      description: "Erweiterte Filter und Sortierfunktionen"
    }
  ];

  const quickAccessItems = [
    { label: "Checklisten", category: "checklists", icon: CheckCircle },
    { label: "CV & Bewerbung", category: "cv", icon: BookOpen },
    { label: "Tutorials", category: "tutorials", icon: Zap },
    { label: "Community", category: "community", icon: Users }
  ];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-32 -translate-x-32" />
      
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                {t.services?.hero?.title || "Service Hub"}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                {t.services?.title || "All Services & Resources"}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t.services?.subtitle || "Comprehensive tools and resources for your integration journey"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                {t.services?.description || "A comprehensive collection of tools, templates and resources for successful integration"}
              </p>
              
              {/* Quick Access Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="text-sm font-medium text-muted-foreground mr-2">
                  Quick Access:
                </span>
                {quickAccessItems.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => {
                        // Scroll to category
                        const element = document.getElementById(`category-${item.category}`);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  onClick={onScrollToServices}
                  className="gap-2 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <ArrowDown className="w-5 h-5" />
                  Services erkunden
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-muted hover:border-primary/20">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Purpose Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <Card className="p-6 border-muted hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">
                🎯 {t.services?.purpose?.what || "What is this?"}
              </h3>
              <p className="text-muted-foreground">
                {t.services?.purpose?.whatDesc || "A central collection of useful materials (PDFs, videos, tools, contacts)"}
              </p>
            </Card>
            
            <Card className="p-6 border-muted hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">
                🌍 {t.services?.purpose?.who || "For whom?"}
              </h3>
              <p className="text-muted-foreground">
                {t.services?.purpose?.whoDesc || "Tunisian families, youth, students, professionals, parents"}
              </p>
            </Card>

            <Card className="p-6 border-muted hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">
                🗂️ {t.services?.purpose?.categories || "Categories"}
              </h3>
              <p className="text-muted-foreground">
                {t.services?.purpose?.categoriesDesc || "Checklists, CV & Application, Documents, Tutorials, Career Fields, Community, Tools"}
              </p>
            </Card>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
