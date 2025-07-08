import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, RefreshCw, Search, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import CONFIG from "@/lib/config";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, direction } = useI18n();
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Smart route suggestions based on pathname
  const getRouteSuggestions = () => {
    const path = location.pathname.toLowerCase();
    const suggestions = [];

    if (path.includes('event')) suggestions.push({ name: t.nav.events, href: CONFIG.routes.events });
    if (path.includes('service')) suggestions.push({ name: t.nav.services, href: CONFIG.routes.services });
    if (path.includes('about') || path.includes('uber')) suggestions.push({ name: t.nav.about, href: CONFIG.routes.about });
    if (path.includes('contact') || path.includes('kontakt')) suggestions.push({ name: t.nav.contact, href: CONFIG.routes.contact });
    if (path.includes('faq') || path.includes('help')) suggestions.push({ name: "FAQ", href: CONFIG.routes.faq });
    if (path.includes('member') || path.includes('mitglied')) suggestions.push({ name: t.nav.getInvolvedMenu.becomeMember, href: CONFIG.routes.member });
    if (path.includes('volunteer') || path.includes('helfer')) suggestions.push({ name: t.nav.getInvolvedMenu.becomeHelper, href: CONFIG.routes.volunteer });

    return suggestions.slice(0, 3); // Limit to 3 suggestions
  };

  useEffect(() => {
    // Log error for monitoring
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Show suggestions after a delay
    const timer = setTimeout(() => {
      setShowSuggestions(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const goHome = () => {
    navigate(CONFIG.routes.home);
  };

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      goHome();
    }
  };

  const routeSuggestions = getRouteSuggestions();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4" dir={direction}>
      <main className="w-full max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Animated 404 with emoji */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-black text-primary/20 mb-4">
              404
            </div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl mb-6"
            >
              🧭
            </motion.div>
          </motion.div>

          {/* Error message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.notFound?.title || "Page Not Found"}
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">
              {t.notFound?.description || "Oops! The page you're looking for doesn't exist."}
            </p>
            <p className="text-sm text-muted-foreground/70">
              {t.notFound?.attemptedPath || "Attempted path:"} <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button 
              onClick={goHome}
              size="lg"
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              {t.notFound?.returnHome || "Return to Home"}
            </Button>
            
            <Button 
              onClick={goBack}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.notFound?.goBack || "Go Back"}
            </Button>
          </motion.div>

          {/* Smart suggestions */}
          {showSuggestions && routeSuggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-dashed">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Search className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {t.notFound?.suggestions || "Were you looking for:"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {routeSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate(suggestion.href)}
                        className="text-xs"
                      >
                        {suggestion.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Help section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 pt-6 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-4">
              {t.notFound?.needHelp || "Still need help?"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(CONFIG.routes.faq)}
                className="gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                FAQ
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(CONFIG.routes.contact)}
                className="gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {t.nav.contact}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.reload()}
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                {t.notFound?.refresh || "Refresh Page"}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default NotFound;
