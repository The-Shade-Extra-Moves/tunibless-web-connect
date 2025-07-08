import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ArrowUp, 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  Printer,
  X,
  ChevronDown,
  ExternalLink
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { faqData, FAQQuestion, FAQData } from "@/lib/faq-data";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PageNavigation from "@/components/PageNavigation";

const FAQ = () => {
  const { t, language, direction } = useI18n();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectAllCategories, setSelectAllCategories] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Get FAQ data for current language
  const currentFAQData: FAQData = faqData[language];

  // Store last opened category in localStorage
  useEffect(() => {
    const savedCategory = localStorage.getItem('faq-last-category');
    if (savedCategory && currentFAQData.categories[savedCategory]) {
      setSelectedCategory(savedCategory);
    }
  }, [currentFAQData.categories]);

  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem('faq-last-category', selectedCategory);
    }
  }, [selectedCategory]);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter questions based on search and category
  const filteredData = useMemo(() => {
    const result: Record<string, FAQQuestion[]> = {};
    
    Object.entries(currentFAQData.questions).forEach(([categoryKey, questions]) => {
      // If specific categories are selected, only show those
      if (selectedCategories.length > 0 && !selectedCategories.includes(categoryKey)) {
        return;
      }
      // If single category is selected (legacy support), only show that one
      if (selectedCategory && selectedCategory !== categoryKey && selectedCategories.length === 0) {
        return;
      }

      const filteredQuestions = questions.filter((q) => {
        if (!searchQuery) return true;
        
        const searchLower = searchQuery.toLowerCase();
        return (
          q.question.toLowerCase().includes(searchLower) ||
          q.answer.toLowerCase().includes(searchLower) ||
          q.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      });

      if (filteredQuestions.length > 0) {
        result[categoryKey] = filteredQuestions;
      }
    });

    return result;
  }, [currentFAQData.questions, searchQuery, selectedCategory, selectedCategories]);

  // Highlight search terms in text
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-900/50 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const handleFeedback = (questionId: string, helpful: boolean) => {
    toast({
      title: helpful ? t.common.success : t.common.info,
      description: helpful 
        ? "Vielen Dank für Ihr Feedback!" 
        : "Danke für Ihr Feedback. Wir werden diese Antwort verbessern.",
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedCategories([]);
    setSelectAllCategories(false);
  };

  const toggleSelectAllCategories = () => {
    if (selectAllCategories) {
      setSelectedCategories([]);
      setSelectAllCategories(false);
    } else {
      setSelectedCategories(Object.keys(currentFAQData.categories));
      setSelectAllCategories(true);
    }
    setSelectedCategory(null);
  };

  const toggleCategory = (categoryKey: string) => {
    if (selectedCategories.includes(categoryKey)) {
      const newCategories = selectedCategories.filter(key => key !== categoryKey);
      setSelectedCategories(newCategories);
      setSelectAllCategories(false);
    } else {
      const newCategories = [...selectedCategories, categoryKey];
      setSelectedCategories(newCategories);
      setSelectAllCategories(newCategories.length === Object.keys(currentFAQData.categories).length);
    }
    setSelectedCategory(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <PageNavigation />
      <div className="min-h-screen bg-background pt-20" dir={direction}>
        <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">{t.faq.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{t.faq.subtitle}</p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder={t.faq.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-12 py-3 text-lg rounded-xl border-2 focus:border-primary"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Button
                variant={selectedCategory === null && selectedCategories.length === 0 ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedCategories([]);
                  setSelectAllCategories(false);
                }}
                className="rounded-full"
              >
                {t.faq.allCategories}
              </Button>
              
              <Button
                variant={selectAllCategories ? "default" : "outline"}
                size="sm"
                onClick={toggleSelectAllCategories}
                className="rounded-full"
              >
                {t.faq.selectAll} ({Object.keys(currentFAQData.categories).length})
              </Button>
              
              {Object.entries(currentFAQData.categories).map(([key, name]) => (
                <Button
                  key={key}
                  variant={selectedCategories.includes(key) || selectedCategory === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleCategory(key)}
                  className="rounded-full"
                >
                  {name}
                </Button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button variant="outline" onClick={handlePrint} className="gap-2">
                <Printer className="h-4 w-4" />
                {t.faq.printFaq}
              </Button>
              <Button asChild className="gap-2">
                <Link to="/contact">
                  <MessageSquare className="h-4 w-4" />
                  {t.faq.askQuestion}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* FAQ Content */}
          <AnimatePresence mode="wait">
            {Object.keys(filteredData).length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="max-w-md mx-auto">
                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.faq.noResults}</h3>
                  <p className="text-muted-foreground mb-6">{t.faq.noResultsDesc}</p>
                  <Button onClick={clearSearch} variant="outline">
                    {t.faq.clearSearch}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-8">
                {Object.entries(filteredData).map(([categoryKey, questions], categoryIndex) => (
                  <motion.div
                    key={categoryKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <div 
                        className="flex items-center justify-between cursor-pointer mb-6"
                        onClick={() => setExpandedCategory(
                          expandedCategory === categoryKey ? null : categoryKey
                        )}
                      >
                        <h2 className="text-2xl font-semibold text-foreground">
                          {currentFAQData.categories[categoryKey]}
                        </h2>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{questions.length}</Badge>
                          <ChevronDown 
                            className={`h-5 w-5 transition-transform duration-200 ${
                              expandedCategory === categoryKey ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>

                      <AnimatePresence>
                        {(expandedCategory === categoryKey || expandedCategory === null) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
                              {questions.map((faq, index) => (
                                <AccordionItem key={faq.id} value={faq.id} className="border-muted">
                                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">
                                    <div className="flex items-start gap-3 w-full">
                                      <div className="flex-1">
                                        {highlightText(faq.question, searchQuery)}
                                      </div>
                                      <div className="flex gap-1 flex-shrink-0">
                                        {faq.isNew && (
                                          <Badge variant="destructive" className="text-xs">
                                            {t.faq.newBadge}
                                          </Badge>
                                        )}
                                        {faq.isUpdated && (
                                          <Badge variant="secondary" className="text-xs">
                                            {t.faq.updatedBadge}
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="space-y-4">
                                    <div className="text-muted-foreground leading-relaxed">
                                      {highlightText(faq.answer, searchQuery)}
                                    </div>

                                    {/* Related Links */}
                                    {faq.relatedLinks.length > 0 && (
                                      <div className="space-y-2">
                                        <p className="text-sm font-medium text-foreground">{t.faq.seeAlso}</p>
                                        <div className="flex flex-wrap gap-2">
                                          {faq.relatedLinks.map((link, linkIndex) => (
                                            <Button 
                                              key={linkIndex}
                                              variant="outline" 
                                              size="sm" 
                                              asChild
                                              className="gap-1"
                                            >
                                              <Link to={link.url}>
                                                {link.text}
                                                <ExternalLink className="h-3 w-3" />
                                              </Link>
                                            </Button>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {/* Last Updated */}
                                    <div className="text-xs text-muted-foreground">
                                      {t.faq.lastUpdated}: {formatDate(faq.lastUpdated)}
                                    </div>

                                    {/* Feedback */}
                                    <div className="pt-4 border-t border-muted">
                                      <p className="text-sm text-muted-foreground mb-2">
                                        {t.faq.helpfulQuestion}
                                      </p>
                                      <div className="flex gap-2">
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => handleFeedback(faq.id, true)}
                                          className="gap-1"
                                        >
                                          <ThumbsUp className="h-3 w-3" />
                                          {t.faq.yes}
                                        </Button>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => handleFeedback(faq.id, false)}
                                          className="gap-1"
                                        >
                                          <ThumbsDown className="h-3 w-3" />
                                          {t.faq.no}
                                        </Button>
                                      </div>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

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
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      </div>
    </>
  );
};

export default FAQ;