import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, MessageCircle, Calendar, CheckCircle, Filter, RotateCcw, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import PageNavigation from "@/components/PageNavigation";
import SearchBar from "@/components/SearchBar";
import ServiceCard from "@/components/ServiceCard";
import { servicesData, getServicesByCategory, searchServices, getCategoryCount } from "@/lib/services-data";
import CONFIG, { getWhatsAppLink } from "@/lib/config";
import { Link } from "react-router-dom";

const AllServices = () => {
  const { t, language, direction } = useI18n();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load saved preferences
  useEffect(() => {
    const savedCategory = localStorage.getItem('services-last-category');
    const savedSearch = localStorage.getItem('services-last-search');
    
    if (savedCategory) setSelectedCategory(savedCategory);
    if (savedSearch) setSearchQuery(savedSearch);
    
    // Simulate loading for better UX
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  // Save preferences
  useEffect(() => {
    localStorage.setItem('services-last-category', selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (searchQuery) {
      localStorage.setItem('services-last-search', searchQuery);
    } else {
      localStorage.removeItem('services-last-search');
    }
  }, [searchQuery]);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K to focus search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
      // Escape to clear search/filters
      if (event.key === 'Escape' && (searchQuery || selectedCategory !== 'all')) {
        resetFilters();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchQuery, selectedCategory]);

  // Filter and search services
  const filteredServices = useMemo(() => {
    let services = getServicesByCategory(selectedCategory === "all" ? undefined : selectedCategory);
    if (searchQuery.trim()) {
      return searchServices(searchQuery, language).filter(service => 
        selectedCategory === "all" || service.category === selectedCategory
      );
    }
    return services;
  }, [selectedCategory, searchQuery, language]);

  const categories = [
    { key: "all", count: servicesData.length },
    { key: "checklists", count: getCategoryCount("checklists") },
    { key: "cv", count: getCategoryCount("cv") },
    { key: "careers", count: getCategoryCount("careers") },
    { key: "templates", count: getCategoryCount("templates") },
    { key: "documents", count: getCategoryCount("documents") },
    { key: "videos", count: getCategoryCount("videos") },
    { key: "guides", count: getCategoryCount("guides") },
    { key: "community", count: getCategoryCount("community") },
    { key: "tools", count: getCategoryCount("tools") },
    { key: "tutorials", count: getCategoryCount("tutorials") },
    { key: "apps", count: getCategoryCount("apps") },
    { key: "integration", count: getCategoryCount("integration") },
    { key: "legal", count: getCategoryCount("legal") },
    { key: "financial", count: getCategoryCount("financial") }
  ];

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    localStorage.removeItem('services-last-search');
    localStorage.removeItem('services-last-category');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <PageNavigation />
      <div className="min-h-screen bg-background pt-20" dir={direction}>
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          {t.services.accessibility.skipToContent}
        </a>

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.services.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t.services.subtitle}
              </p>
              
              {/* Purpose Section */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-4 bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2">🎯 {t.services.purpose.what}</h3>
                  <p className="text-sm text-muted-foreground">{t.services.purpose.whatDesc}</p>
                </Card>
                <Card className="p-4 bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2">🌍 {t.services.purpose.who}</h3>
                  <p className="text-sm text-muted-foreground">{t.services.purpose.whoDesc}</p>
                </Card>
                <Card className="p-4 bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2">🗂️ {t.services.purpose.categories}</h3>
                  <div className="flex flex-wrap gap-1">
                    {["✅", "📝", "📊", "🎥", "📚", "👥", "🔧"].map((emoji, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{emoji}</Badge>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-background/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{servicesData.length}</div>
                  <div className="text-sm text-muted-foreground">{t.services.stats.totalServices}</div>
                </div>
                <div className="text-center p-4 bg-background/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{servicesData.filter(s => s.popular).length}</div>
                  <div className="text-sm text-muted-foreground">{t.services.popular}</div>
                </div>
                <div className="text-center p-4 bg-background/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{servicesData.filter(s => s.new).length}</div>
                  <div className="text-sm text-muted-foreground">{t.services.new}</div>
                </div>
                <div className="text-center p-4 bg-background/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">{t.services.stats.languages}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background/50" id="main-content">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Search Bar */}
              <div role="search" aria-label={t.services.accessibility.searchInstructions}>
                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  onClear={() => setSearchQuery("")}
                />
              </div>
              
              {/* Category Filters */}
              <div className="space-y-4" role="region" aria-label={t.services.accessibility.filterInstructions}>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground" aria-live="polite">
                    {filteredServices.length} {filteredServices.length === 1 ? t.services.result : t.services.results}
                    {searchQuery && ` ${t.services.noResults ? 'für' : 'for'} "${searchQuery}"`}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                  {categories.map((category) => (
                    <Button
                      key={category.key}
                      variant={selectedCategory === category.key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.key)}
                      className="gap-2 rounded-full"
                      disabled={category.count === 0}
                      aria-pressed={selectedCategory === category.key}
                      aria-label={`${t.services.categories[category.key as keyof typeof t.services.categories]} (${category.count} services)`}
                    >
                      {t.services.categories[category.key as keyof typeof t.services.categories]}
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              {(searchQuery || selectedCategory !== "all") && (
                <div className="text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                    className="gap-2"
                  >
                    <RotateCcw className="h-3 w-3" />
                    {t.services.resetFilters}
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">{t.services.loading}</p>
              </motion.div>
            ) : (
              <>
                {/* Popular Services Preview (when no search/filter) */}
                {!searchQuery && selectedCategory === "all" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-foreground mb-2">🔥 {t.services.popular}</h2>
                      <p className="text-muted-foreground">Die am meisten genutzten Services</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {servicesData.filter(service => service.popular).slice(0, 8).map((service, index) => (
                        <ServiceCard
                          key={`popular-${service.id}`}
                          service={service}
                          searchQuery=""
                          index={index}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                <AnimatePresence mode="wait">
                  {filteredServices.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-16"
                    >
                      <div className="max-w-md mx-auto">
                        <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">{t.services.noResults}</h3>
                        <p className="text-muted-foreground mb-6">{t.services.noResultsDesc}</p>
                        <Button onClick={resetFilters} variant="outline">
                          {t.services.resetFilters}
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {(searchQuery || selectedCategory !== "all") && (
                        <div className="mb-6">
                          <h2 className="text-xl font-semibold text-foreground mb-4">
                            {searchQuery ? `🔍 ${t.services.results}` : `📂 ${t.services.categories[selectedCategory as keyof typeof t.services.categories]}`}
                          </h2>
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredServices.map((service, index) => (
                          <ServiceCard
                            key={service.id}
                            service={service}
                            searchQuery={searchQuery}
                            index={index}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h2 id="cta-heading" className="text-3xl font-bold text-foreground mb-4">
                {t.services.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t.services.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open(getWhatsAppLink(), '_blank')}
                  aria-label={`${t.services.cta.whatsapp} - opens in new window`}
                >
                  <MessageCircle className="h-5 w-5" />
                  {t.services.cta.whatsapp}
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                >
                  <Link to={CONFIG.routes.contact} aria-label={t.services.cta.consultation}>
                    <Calendar className="h-5 w-5" />
                    {t.services.cta.consultation}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Top Button */}
        <AnimatePresence>
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
                aria-label={t.services.backToTop}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AllServices;
