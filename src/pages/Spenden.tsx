import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { 
  Heart, 
  Copy, 
  Check, 
  QrCode, 
  Euro, 
  GraduationCap, 
  Users, 
  BookOpen,
  Gift
} from "lucide-react";

const Spenden = () => {
  const [selectedPurpose, setSelectedPurpose] = useState("general");
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    recipient: "TuniBless e.V.",
    iban: "DE89 3704 0044 0532 0130 00",
    bic: "COBADEFFXXX",
    bank: "Commerzbank AG",
    purpose: "Spende"
  };

  const donationPurposes = [
    {
      id: "general",
      title: "Allgemeine Unterstützung",
      description: "Für alle Bereiche unserer Arbeit",
      icon: Heart,
      color: "bg-red-500"
    },
    {
      id: "scholarships",
      title: "Stipendien-Programm",
      description: "Finanzielle Hilfe für bedürftige Studierende",
      icon: GraduationCap,
      color: "bg-blue-500"
    },
    {
      id: "events",
      title: "Veranstaltungen",
      description: "Workshops, Seminare und Events",
      icon: Users,
      color: "bg-green-500"
    },
    {
      id: "materials",
      title: "Lernmaterialien",
      description: "Bücher, Software und Ressourcen",
      icon: BookOpen,
      color: "bg-purple-500"
    }
  ];

  const impactStats = [
    { number: "500+", label: "Unterstützte Studierende", icon: "🎓" },
    { number: "50+", label: "Erfolgreiche Bewerbungen", icon: "✅" },
    { number: "24", label: "Veranstaltungen pro Jahr", icon: "📅" },
    { number: "15", label: "Ehrenamtliche Helfer", icon: "🤝" }
  ];

  const donationAmounts = [25, 50, 100, 250, 500];

  const copyToClipboard = () => {
    const textToCopy = `
Empfänger: ${bankDetails.recipient}
IBAN: ${bankDetails.iban}
BIC: ${bankDetails.bic}
Bank: ${bankDetails.bank}
Verwendungszweck: ${bankDetails.purpose}
    `.trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Heart className="h-10 w-10 text-red-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Unterstützen Sie unsere Mission 💝
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mit Ihrer Spende ermöglichen Sie tunesischen Studierenden den Weg zu einer 
              erfolgreichen Bildung in Deutschland
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Donation Purpose Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Wofür möchten Sie spenden?
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {donationPurposes.map((purpose) => {
                const Icon = purpose.icon;
                return (
                  <Card 
                    key={purpose.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedPurpose === purpose.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedPurpose(purpose.id)}
                  >
                    <CardHeader className="text-center pb-2">
                      <div className={`${purpose.color} rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{purpose.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {purpose.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Donation Methods */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Bank Transfer */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="h-5 w-5" />
                  Banküberweisung
                </CardTitle>
                <CardDescription>
                  Sichere Überweisung direkt auf unser Vereinskonto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Empfänger:</span>
                    <span className="font-medium">{bankDetails.recipient}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">IBAN:</span>
                    <span className="font-mono">{bankDetails.iban}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">BIC:</span>
                    <span className="font-mono">{bankDetails.bic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Bank:</span>
                    <span className="font-medium">{bankDetails.bank}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Zweck:</span>
                    <span className="font-medium">{bankDetails.purpose}</span>
                  </div>
                </div>

                <Button 
                  onClick={copyToClipboard}
                  className="w-full gap-2"
                  variant="outline"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Kopiert!" : "Bankdaten kopieren"}
                </Button>

                <div className="text-xs text-muted-foreground text-center">
                  TuniBless e.V. ist als gemeinnützig anerkannt. 
                  Spendenbescheinigungen werden automatisch erstellt.
                </div>
              </CardContent>
            </Card>

            {/* QR Code & Quick Amounts */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Schnellspende
                </CardTitle>
                <CardDescription>
                  Wählen Sie einen Betrag oder geben Sie Ihren Wunschbetrag ein
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Quick Amount Buttons */}
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Beliebte Beträge:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {donationAmounts.map((amount) => (
                      <Button key={amount} variant="outline" size="sm">
                        {amount}€
                      </Button>
                    ))}
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="bg-muted/50 rounded-lg p-8 text-center">
                  <QrCode className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground">
                    QR-Code für mobile Banking
                  </p>
                  <Badge variant="secondary" className="mt-2">
                    Coming Soon
                  </Badge>
                </div>

                <Button className="w-full" disabled>
                  <Gift className="h-4 w-4 mr-2" />
                  PayPal/Stripe Integration
                </Button>

                <div className="text-xs text-muted-foreground text-center">
                  Online-Spenden werden in Kürze verfügbar sein
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tax Benefits */}
          <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-lg">
            <h3 className="text-xl font-semibold text-center mb-4">
              Steuerliche Vorteile Ihrer Spende 💰
            </h3>
            <div className="grid gap-4 md:grid-cols-3 text-center">
              <div>
                <div className="text-2xl mb-2">📋</div>
                <h4 className="font-medium">Spendenbescheinigung</h4>
                <p className="text-sm text-muted-foreground">
                  Automatisch für alle Spenden ab 25€
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">💸</div>
                <h4 className="font-medium">Steuerersparnis</h4>
                <p className="text-sm text-muted-foreground">
                  Bis zu 40% der Spende zurückerhalten
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">✅</div>
                <h4 className="font-medium">Gemeinnützig</h4>
                <p className="text-sm text-muted-foreground">
                  Anerkannt nach § 52 AO
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Jede Spende macht einen Unterschied! 🌟
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Mit nur 50€ können wir einem Studierenden bei der Bewerbung helfen. 
              Mit 200€ finanzieren wir einen kompletten Workshop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => window.location.href = '/kontakt'}>
                Fragen zur Spende?
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/about'}>
                Mehr über uns erfahren
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Spenden;
