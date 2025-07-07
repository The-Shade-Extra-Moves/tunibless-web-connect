import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              <span className="block">Building Bridges</span>
              <span className="block bg-gradient-to-r from-german-gold to-primary-glow bg-clip-text text-transparent">
                Creating Futures
              </span>
            </h1>
            <div className="w-24 h-1 bg-german-gold mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Empowering Tunisian youth and families through structured guidance, vocational training, 
            and legal pathways to successful integration in Germany.
          </p>

          {/* Mission quote */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-white/20">
            <blockquote className="text-white/90 text-lg italic mb-4">
              "ما حك جلدك مثل ظفرك، فتولّ أنت جميع أمرك"
            </blockquote>
            <p className="text-white/70 text-sm">
              "Nobody scratches your skin better than your own fingernail – so handle your affairs yourself."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="min-w-48">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="min-w-48 border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">24</div>
              <div className="text-white/70">Regional WhatsApp Groups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-white/70">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">4</div>
              <div className="text-white/70">German Regions Covered</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;