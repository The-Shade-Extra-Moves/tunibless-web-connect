import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Search, 
  Filter,
  Grid,
  List,
  ArrowUp,
  Eye,
  Star,
  Clock,
  TrendingUp,
  Heart,
  Share,
  Download
} from "lucide-react";

// Import our enhanced components
import { useI18n } from "@/lib/i18n-context";
import { servicesData, searchServices, Service, getServicesByCategory } from "@/lib/services-data";
import { CONFIG } from "@/lib/config";
import ServicesHero from "@/components/ServicesHero";
import EnhancedSearchBar from "@/components/EnhancedSearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import EnhancedServiceCard from "@/components/EnhancedServiceCard";
import EmptyState from "@/components/EmptyState";
import BackToTop from "@/components/BackToTop";
import ServicesCTA from "@/components/ServicesCTA";
import PageTransition from "@/components/PageTransition";

export type SortType = 'popular' | 'new' | 'rating' | 'alphabetical';
export type ViewType = 'grid' | 'list';

const AllServices = () => {
  const { t, language } = useI18n();
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentSort, setCurrentSort] = useState<SortType>('popular');
  const [viewType, setViewType] = useState<ViewType>('grid');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load state from localStorage
  useEffect(() => {
    const savedCategory = localStorage.getItem('tunibless-services-category');
    const savedSort = localStorage.getItem('tunibless-services-sort') as SortType;
    const savedView = localStorage.getItem('tunibless-services-view') as ViewType;
    const savedFavorites = localStorage.getItem('tunibless-services-favorites');
    
    if (savedCategory) setSelectedCategory(savedCategory);
    if (savedSort) setCurrentSort(savedSort);
    if (savedView) setViewType(savedView);
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (e) {
        localStorage.removeItem('tunibless-services-favorites');
      }
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('tunibless-services-category', selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    localStorage.setItem('tunibless-services-sort', currentSort);
  }, [currentSort]);

  useEffect(() => {
    localStorage.setItem('tunibless-services-view', viewType);
  }, [viewType]);

  useEffect(() => {
    localStorage.setItem('tunibless-services-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Scroll tracking for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter and sort services
  const filteredAndSortedServices = useMemo(() => {
    setIsLoading(true);
    
    let filtered = servicesData;

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = searchServices(searchTerm, language);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (currentSort) {
        case 'popular':
          const aPopular = (a.popular ? 1000 : 0) + (a.rating || 0) * 100 + (a.reviews || 0);
          const bPopular = (b.popular ? 1000 : 0) + (b.rating || 0) * 100 + (b.reviews || 0);
          return bPopular - aPopular;
        
        case 'new':
          const aNew = a.new ? 1000 : 0;
          const bNew = b.new ? 1000 : 0;
          return bNew - aNew;
        
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        
        case 'alphabetical':
          return a.title[language].localeCompare(b.title[language]);
        
        default:
          return 0;
      }
    });

    setIsLoading(false);
    return sorted;
  }, [searchTerm, selectedCategory, currentSort, language]);

  // Get popular/featured services for hero section
  const popularServices = useMemo(() => {
    return servicesData
      .filter(service => service.popular || service.featured)
      .slice(0, 6);
  }, []);

  // Category statistics
  const categoryStats = useMemo(() => {
    const stats = new Map();
    servicesData.forEach(service => {
      stats.set(service.category, (stats.get(service.category) || 0) + 1);
    });
    return stats;
  }, []);

  // Handlers
  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleFavoriteToggle = (serviceId: string) => {
    setFavorites(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleServiceAction = (service: Service) => {
    // Track analytics
    console.log(`Service accessed: ${service.id}`);
    
    if (service.downloadUrl) {
      window.open(service.downloadUrl, '_blank');
    } else if (service.externalUrl) {
      window.open(service.externalUrl, '_blank');
    } else if (service.whatsappLink) {
      window.open(service.whatsappLink, '_blank');
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setCurrentSort('popular');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <ServicesHero onScrollToServices={handleScrollToServices} />

        {/* Main Services Section */}
        <div ref={servicesRef} className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Search and Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <EnhancedSearchBar
                  value={searchTerm}
                  onChange={setSearchTerm}
                  onSortChange={setCurrentSort}
                  currentSort={currentSort}
                  placeholder={t.services.searchPlaceholder}
                  showSuggestions={true}
                />
              </div>

              {/* Controls Row */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                {/* Category Filter */}
                <div className="flex-1 w-full sm:w-auto">
                  <CategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                </div>

                {/* View Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-lg border bg-background p-1">
                    <Button
                      variant={viewType === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewType('grid')}
                      className="h-8 w-8 p-0"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewType === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewType('list')}
                      className="h-8 w-8 p-0"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>

                  {(searchTerm || selectedCategory !== 'all') && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetFilters}
                      className="text-xs"
                    >
                      {t.services?.resetFilters || 'Reset Filters'}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory === 'all' 
                    ? (t.services?.categories?.all || 'All Resources')
                    : (t.services?.categories?.[selectedCategory as keyof typeof t.services.categories] || selectedCategory)
                  }
                </h2>
                <p className="text-muted-foreground">
                  {filteredAndSortedServices.length} {filteredAndSortedServices.length === 1 ? (t.services?.result || 'result') : (t.services?.results || 'results')}
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>

              {/* Sort Indicator */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <span>Sorted by:</span>
                <Badge variant="outline" className="gap-1">
                  {currentSort === 'popular' && <TrendingUp className="w-3 h-3" />}
                  {currentSort === 'new' && <Clock className="w-3 h-3" />}
                  {currentSort === 'rating' && <Star className="w-3 h-3" />}
                  {t.services?.sortBy?.[currentSort] || currentSort}
                </Badge>
              </div>
            </motion.div>

            {/* Services Grid/List */}
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Card key={index} className="p-6 animate-pulse">
                      <div className="space-y-4">
                        <div className="h-6 bg-muted rounded" />
                        <div className="h-4 bg-muted rounded w-3/4" />
                        <div className="h-4 bg-muted rounded w-1/2" />
                        <div className="h-8 bg-muted rounded" />
                      </div>
                    </Card>
                  ))}
                </motion.div>
              ) : filteredAndSortedServices.length > 0 ? (
                <motion.div
                  key="services"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`grid gap-6 ${
                    viewType === 'grid' 
                      ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                      : 'grid-cols-1 max-w-4xl mx-auto'
                  }`}
                >
                  {filteredAndSortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <EnhancedServiceCard
                        service={service}
                        index={index}
                        searchQuery={searchTerm}
                        variant={viewType === 'list' ? 'compact' : 'default'}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <EmptyState
                    type="search"
                    searchQuery={searchTerm}
                    selectedCategory={selectedCategory}
                    onClearSearch={() => setSearchTerm("")}
                    onClearFilters={resetFilters}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load More Button (for future pagination) */}
            {filteredAndSortedServices.length > 20 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <Button variant="outline" size="lg">
Load More
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <ServicesCTA />

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed bottom-6 right-6 z-50"
            >
              <BackToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default AllServices;