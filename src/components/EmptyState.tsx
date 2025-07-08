import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Search, 
  RefreshCw, 
  MessageCircle, 
  ArrowLeft,
  Filter,
  Lightbulb,
  HelpCircle
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

interface EmptyStateProps {
  type?: 'search' | 'filter' | 'general';
  searchQuery?: string;
  selectedCategory?: string;
  onClearSearch?: () => void;
  onClearFilters?: () => void;
  onContactSupport?: () => void;
  className?: string;
}

export const EmptyState = ({
  type = 'general',
  searchQuery,
  selectedCategory,
  onClearSearch,
  onClearFilters,
  onContactSupport,
  className = ""
}: EmptyStateProps) => {
  const { t } = useI18n();

  const getEmptyStateContent = () => {
    switch (type) {
      case 'search':
        return {
          icon: Search,
          title: t.services.noResults,
          description: searchQuery 
            ? `${t.services.noResultsDesc} "${searchQuery}"`
            : t.services.noResultsDesc,
          suggestions: [
            "Versuchen Sie allgemeinere Begriffe",
            "Überprüfen Sie die Rechtschreibung",
            "Verwenden Sie weniger Wörter",
            "Durchsuchen Sie die Kategorien"
          ]
        };
      case 'filter':
        return {
          icon: Filter,
          title: "Keine Services in dieser Kategorie",
          description: selectedCategory 
            ? `Keine Services gefunden für "${selectedCategory}"`
            : "Für die ausgewählten Filter wurden keine Services gefunden",
          suggestions: [
            "Wählen Sie eine andere Kategorie",
            "Entfernen Sie einige Filter",
            "Schauen Sie sich alle Services an",
            "Kontaktieren Sie uns für Anfragen"
          ]
        };
      default:
        return {
          icon: HelpCircle,
          title: "Keine Services verfügbar",
          description: "Derzeit sind keine Services verfügbar.",
          suggestions: [
            "Versuchen Sie es später noch einmal",
            "Kontaktieren Sie unser Support-Team",
            "Schauen Sie sich unsere anderen Ressourcen an"
          ]
        };
    }
  };

  const content = getEmptyStateContent();
  const IconComponent = content.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center py-16 px-4 ${className}`}
    >
      <Card className="max-w-md w-full p-8 text-center border-dashed border-2 border-muted">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-muted rounded-full">
            <IconComponent className="w-8 h-8 text-muted-foreground" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {content.title}
          </h3>
          <p className="text-muted-foreground mb-6">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="space-y-4"
        >
          {/* Suggestions */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-medium text-foreground">Versuchen Sie:</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {content.suggestions.map((suggestion, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  {suggestion}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-4">
            {type === 'search' && onClearSearch && (
              <Button
                variant="outline"
                onClick={onClearSearch}
                className="gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Suche zurücksetzen
              </Button>
            )}

            {type === 'filter' && onClearFilters && (
              <Button
                variant="outline"
                onClick={onClearFilters}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Alle Services anzeigen
              </Button>
            )}

            {onContactSupport && (
              <Button
                variant="default"
                onClick={onContactSupport}
                className="gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Support kontaktieren
              </Button>
            )}
          </div>
        </motion.div>
      </Card>

      {/* Additional Help Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-muted-foreground mb-4">
          Können Sie nicht finden, wonach Sie suchen?
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            onClick={() => {
              // Scroll to top
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Nach oben
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            onClick={() => {
              // Navigate to FAQ
              window.location.href = '/faq';
            }}
          >
            FAQ besuchen
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            onClick={() => {
              // Navigate to contact
              window.location.href = '/contact';
            }}
          >
            Kontakt
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmptyState;
