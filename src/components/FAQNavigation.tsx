import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useI18n } from "@/lib/i18n-context";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const FAQNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, isRTL } = useI18n();
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const quickLinks = [

  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Back Button & Logo */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={goBack}
              className="gap-2 hover:bg-muted transition-colors duration-200"
            >
              <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              <span className="hidden sm:inline">{t.common.previous}</span>
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TB</span>
              </div>
              <div className="hidden sm:block">
                <Link to="/" className="hover:opacity-80 transition-opacity">
                  <h1 className="text-lg font-bold text-foreground">TuniBless e.V.</h1>
                  <p className="text-xs text-muted-foreground">{t.faq.title}</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Center - FAQ Title (Mobile) */}
          <div className="sm:hidden">
            <h1 className="text-lg font-semibold text-foreground">{t.faq.title}</h1>
          </div>

          {/* Right Section - Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {quickLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-foreground hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-muted"
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2 border-l border-border pl-4">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-border pt-3 mt-3">
                <Button
                  onClick={goBack}
                  variant="outline"
                  className="w-full gap-2"
                >
                  <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                  {t.common.previous}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FAQNavigation;
