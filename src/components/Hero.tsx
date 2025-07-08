import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Link } from "react-router-dom";
import CONFIG from "@/lib/config";

const Hero = () => {
  const { t, isRTL } = useI18n();
  const { scrollToSection } = useSmoothScroll();
  
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              <span className="block">{t.hero.title}</span>
              <span className="block bg-gradient-to-r from-german-gold to-primary-glow bg-clip-text text-transparent">
                TuniBless e.V.
              </span>
            </h1>
            <div className="w-24 h-1 bg-german-gold mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="min-w-48"
              asChild
            >
              <Link to={CONFIG.routes.registration}>
                {t.hero.joinCommunity}
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-48 border-white/30 text-white hover:bg-white/10"
              onClick={() => scrollToSection('mission')}
            >
              {t.hero.learnMore}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16">
          <button
            onClick={() => scrollToSection('mission')}
            className="animate-bounce text-white/70 hover:text-white transition-colors"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;