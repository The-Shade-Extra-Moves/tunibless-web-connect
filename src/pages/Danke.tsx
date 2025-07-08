import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Home } from "lucide-react";

const Danke = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Thank You Animation */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-full p-8 inline-block mb-6">
              <Heart className="h-20 w-20 text-primary animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Vielen Dank! 💚
            </h1>
            <p className="text-xl text-muted-foreground">
              Ihre Nachricht wurde erfolgreich übermittelt. 
              Wir werden uns so schnell wie möglich bei Ihnen melden.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/onboarding'}
                className="gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Onboarding fortsetzen
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                Zur Startseite
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Durchschnittliche Antwortzeit: 24 Stunden
            </p>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Während Sie warten...
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/downloads'}
              >
                📄 Dokumente herunterladen
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/faq'}
              >
                ❓ FAQ durchsuchen
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/veranstaltungen'}
              >
                📅 Events ansehen
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/glossar'}
              >
                📖 Glossar durchstöbern
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Danke;
