import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { serviceCategories, getCategoryCount, ServiceCategory } from "@/lib/services-data";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
  layout?: 'horizontal' | 'vertical';
  showCounts?: boolean;
}

export const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
  className = "",
  layout = 'horizontal',
  showCounts = true
}: CategoryFilterProps) => {
  const { t, language } = useI18n();

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
  };

  const resetFilter = () => {
    onCategoryChange('all');
  };

  const getLocalizedTitle = (category: ServiceCategory) => {
    return category.title[language];
  };

  const getCategoryIcon = (category: ServiceCategory) => {
    return category.icon;
  };

  if (layout === 'vertical') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">{t.services?.filters?.category || 'Category'}</h3>
          {selectedCategory !== 'all' && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilter}
              className="text-xs"
            >
              <X className="w-3 h-3 mr-1" />
              {t.services?.filters?.clear || 'Clear'}
            </Button>
          )}
        </div>
        
        <div className="space-y-1">
          {serviceCategories.map((category, index) => {
            const IconComponent = getCategoryIcon(category);
            const count = getCategoryCount(category.id);
            const isSelected = selectedCategory === category.id;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Button
                  variant={isSelected ? "default" : "ghost"}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`w-full justify-start gap-3 h-12 ${
                    isSelected 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'hover:bg-muted'
                  }`}
                >
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  <span className="flex-1 text-left">{getLocalizedTitle(category)}</span>
                  {showCounts && count > 0 && (
                    <Badge 
                      variant={isSelected ? "secondary" : "outline"} 
                      className="text-xs"
                    >
                      {count}
                    </Badge>
                  )}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // Horizontal layout (default)
  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground hidden sm:block">
          {t.services?.filters?.category || 'Category'}
        </h3>
        {selectedCategory !== 'all' && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilter}
            className="text-xs"
          >
            <X className="w-3 h-3 mr-1" />
            {t.services?.filters?.clear || 'Clear'}
          </Button>
        )}
      </div>

      <ScrollArea className="w-full">
        <div className="flex gap-2 pb-2">
          {serviceCategories.map((category, index) => {
            const IconComponent = getCategoryIcon(category);
            const count = getCategoryCount(category.id);
            const isSelected = selectedCategory === category.id;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
              >
                <Button
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`gap-2 h-10 px-4 whitespace-nowrap ${
                    isSelected 
                      ? 'bg-primary text-primary-foreground shadow-md border-primary' 
                      : 'hover:bg-muted border-muted hover:border-primary/20'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{getLocalizedTitle(category)}</span>
                  {showCounts && count > 0 && (
                    <Badge 
                      variant={isSelected ? "secondary" : "outline"} 
                      className="text-xs ml-1"
                    >
                      {count}
                    </Badge>
                  )}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
