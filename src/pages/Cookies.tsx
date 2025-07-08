import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Cookie, Shield, Settings, Info } from "lucide-react";

const Cookies = () => {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false
  });

  const cookieCategories = [
    {
      id: "necessary",
      title: "Notwendige Cookies",
      description: "Diese Cookies sind für das Funktionieren der Website unerlässlich",
      required: true,
      details: [
        "Session-Cookies für die Navigation",
        "Sicherheits-Cookies zum Schutz vor Angriffen",
        "Funktionale Cookies für Formulare"
      ]
    },
    {
      id: "analytics",
      title: "Analyse-Cookies",
      description: "Helfen uns zu verstehen, wie Besucher die Website nutzen",
      required: false,
      details: [
        "Google Analytics für Besucherstatistiken",
        "Heatmap-Tools für Nutzungsanalyse",
        "Performance-Monitoring"
      ]
    },
    {
      id: "marketing",
      title: "Marketing-Cookies",
      description: "Werden verwendet, um relevante Werbung anzuzeigen",
      required: false,
      details: [
        "Facebook Pixel für Werbeanzeigen",
        "Google Ads Tracking",
        "Retargeting-Cookies"
      ]
    },
    {
      id: "preferences",
      title: "Präferenz-Cookies",
      description: "Speichern Ihre Einstellungen und Präferenzen",
      required: false,
      details: [
        "Spracheinstellungen",
        "Theme-Präferenzen (Hell/Dunkel)",
        "Regionale Einstellungen"
      ]
    }
  ];

  const handleCookieToggle = (category: string, enabled: boolean) => {
    if (category === 'necessary') return; // Cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [category]: enabled
    }));
  };

  const handleAcceptAll = () => {
    setCookieSettings({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
    saveCookieSettings();
  };

  const handleAcceptNecessary = () => {
    setCookieSettings({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
    saveCookieSettings();
  };

  const handleSaveSettings = () => {
    saveCookieSettings();
  };

  const saveCookieSettings = () => {
    // Save settings to localStorage
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...cookieSettings,
      timestamp: new Date().toISOString()
    }));
    
    // Implement actual cookie management logic here
    console.log('Cookie settings saved:', cookieSettings);
    
    // Show success message or redirect
    alert('Cookie-Einstellungen gespeichert!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Cookie className="h-10 w-10 text-orange-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Cookie-Einstellungen 🍪
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verwalten Sie Ihre Cookie-Präferenzen und bestimmen Sie, welche Daten wir sammeln dürfen
            </p>
          </div>

          {/* Information Card */}
          <Card className="mb-8 border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-900/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <Info className="h-5 w-5" />
                Was sind Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Cookies sind kleine Textdateien, die von Websites auf Ihrem Gerät gespeichert werden. 
                Sie helfen uns dabei, die Website zu verbessern, Ihre Präferenzen zu speichern und 
                Ihnen eine bessere Nutzererfahrung zu bieten. Sie können jederzeit Ihre Einstellungen 
                ändern oder Cookies löschen.
              </p>
            </CardContent>
          </Card>

          {/* Cookie Categories */}
          <div className="space-y-6 mb-8">
            {cookieCategories.map((category) => (
              <Card key={category.id} className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {category.required && <Shield className="h-4 w-4 text-green-500" />}
                        {category.title}
                        {category.required && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            Erforderlich
                          </span>
                        )}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id={category.id}
                        checked={cookieSettings[category.id as keyof typeof cookieSettings]}
                        onCheckedChange={(checked) => handleCookieToggle(category.id, checked)}
                        disabled={category.required}
                      />
                      <Label htmlFor={category.id} className="sr-only">
                        {category.title}
                      </Label>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Details:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {category.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleAcceptAll}
                size="lg"
                className="flex-1"
              >
                Alle Cookies akzeptieren
              </Button>
              <Button 
                onClick={handleSaveSettings}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                <Settings className="h-4 w-4 mr-2" />
                Auswahl speichern
              </Button>
              <Button 
                onClick={handleAcceptNecessary}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                Nur notwendige Cookies
              </Button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cookie-Verwaltung in Ihrem Browser</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Sie können Cookies auch direkt in Ihrem Browser verwalten:
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-sm">Chrome:</h4>
                    <p className="text-xs text-muted-foreground">
                      Einstellungen → Datenschutz und Sicherheit → Cookies
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Firefox:</h4>
                    <p className="text-xs text-muted-foreground">
                      Einstellungen → Datenschutz & Sicherheit → Cookies
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Safari:</h4>
                    <p className="text-xs text-muted-foreground">
                      Einstellungen → Datenschutz → Cookies verwalten
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Edge:</h4>
                    <p className="text-xs text-muted-foreground">
                      Einstellungen → Datenschutz → Cookies und Websitedaten
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Häufige Fragen zu Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm">Kann ich die Website ohne Cookies nutzen?</h4>
                  <p className="text-xs text-muted-foreground">
                    Ja, Sie können unsere Website auch nur mit notwendigen Cookies nutzen. 
                    Einige Funktionen könnten jedoch eingeschränkt sein.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Wie kann ich meine Einstellungen ändern?</h4>
                  <p className="text-xs text-muted-foreground">
                    Sie können jederzeit auf diese Seite zurückkehren oder die Cookie-Einstellungen 
                    in der Fußzeile der Website aufrufen.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Werden meine Daten an Dritte weitergegeben?</h4>
                  <p className="text-xs text-muted-foreground">
                    Nur wenn Sie Marketing- oder Analyse-Cookies zustimmen. Alle Details finden Sie 
                    in unserer Datenschutzerklärung.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Links */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Weitere Informationen zum Datenschutz finden Sie in unserer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/datenschutz'}
              >
                Datenschutzerklärung
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/impressum'}
              >
                Impressum
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/kontakt'}
              >
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cookies;
