import { useState } from "react";
import { Button } from "@/components/ui/button";
// Commented out dropdown imports - keeping for future use
// import { 
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
// Removed ChevronDown since dropdowns are commented out
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useI18n } from "@/lib/i18n-context";
import { Link } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import CONFIG from "@/lib/config";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, isRTL } = useI18n();
  const { scrollToSection } = useSmoothScroll();

  const navItems = [
    { name: t.nav.about, href: CONFIG.routes.about },
    { name: t.nav.services, href: CONFIG.routes.services },
    { name: t.nav.events, href: CONFIG.routes.events },
    { name: "FAQ", href: CONFIG.routes.faq },
    { name: t.nav.contact, href: CONFIG.routes.contact },
  ];

  // Commented out dropdown menus - keeping code for future use
  // const communityItems = [
  //   { name: t.nav.communityMenu.registration, href: CONFIG.routes.registration },
  //   { name: t.nav.communityMenu.onboarding, href: CONFIG.routes.onboarding },
  //   { name: t.nav.communityMenu.roadmap, href: CONFIG.routes.roadmap },
  //   { name: t.nav.communityMenu.downloads, href: CONFIG.routes.downloads },
  //   { name: t.nav.communityMenu.glossary, href: CONFIG.routes.glossary },
  //   { name: t.nav.communityMenu.tunisia, href: CONFIG.routes.tunisia },
  // ];

  // const getInvolvedItems = [
  //   { name: t.nav.getInvolvedMenu.becomeHelper, href: CONFIG.routes.volunteer },
  //   { name: t.nav.getInvolvedMenu.becomeMember, href: CONFIG.routes.member },
  //   { name: t.nav.getInvolvedMenu.donate, href: CONFIG.routes.donate },
  //   { name: t.nav.getInvolvedMenu.germany, href: CONFIG.routes.germany },
  //   { name: t.nav.getInvolvedMenu.worldwide, href: CONFIG.routes.worldwide },
  // ];

  // const legalItems = [
  //   { name: t.nav.legalMenu.imprint, href: CONFIG.routes.imprint },
  //   { name: t.nav.legalMenu.privacyPolicy, href: CONFIG.routes.privacy },
  //   { name: t.nav.legalMenu.cookies, href: CONFIG.routes.cookies },
  // ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">TB</span>
            </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">TuniBless e.V.</h1>
            <p className="text-xs text-muted-foreground">{t.footer.tagline}</p>
          </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              
              {/* Commented out dropdown menus for cleaner navigation */}
              {/* Community Dropdown */}
              {/* <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-auto p-0 font-medium text-foreground hover:text-primary">
                      {t.nav.community}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {communityItems.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href} className="w-full">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li> */}
              
              {/* Get Involved Dropdown */}
              {/* <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-auto p-0 font-medium text-foreground hover:text-primary">
                      {t.nav.getInvolved}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {getInvolvedItems.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href} className="w-full">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li> */}
              
              {/* Legal Dropdown */}
              {/* <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-auto p-0 font-medium text-foreground hover:text-primary">
                      {t.nav.legal}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {legalItems.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href} className="w-full">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li> */}
            </ul>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="hero" size="sm" asChild>
                <Link to={CONFIG.routes.registration}>
                  {t.nav.getStarted}
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t.nav.close : t.nav.menu}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border ${isRTL ? 'text-right' : 'text-left'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Commented out dropdown sections for cleaner mobile navigation */}
              {/* Community Section */}
              {/* <div className="px-3 py-2">
                <div className="font-semibold text-foreground mb-2">{t.nav.community}</div>
                <div className="pl-4 space-y-1">
                  {communityItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div> */}
              
              {/* Get Involved Section */}
              {/* <div className="px-3 py-2">
                <div className="font-semibold text-foreground mb-2">{t.nav.getInvolved}</div>
                <div className="pl-4 space-y-1">
                  {getInvolvedItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div> */}
              
              {/* Legal Section */}
              {/* <div className="px-3 py-2">
                <div className="font-semibold text-foreground mb-2">{t.nav.legal}</div>
                <div className="pl-4 space-y-1">
                  {legalItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div> */}
              
              <div className="px-3 py-2 space-y-2">
                <LanguageSwitcher />
                <ThemeSwitcher />
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <Link to={CONFIG.routes.registration} onClick={() => setIsMenuOpen(false)}>
                    {t.nav.getStarted}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;