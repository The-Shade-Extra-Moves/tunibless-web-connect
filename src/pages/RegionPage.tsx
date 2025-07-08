import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import { 
  MessageCircle, 
  Facebook, 
  MapPin, 
  Users, 
  Calendar,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react";

const RegionPage = () => {
  const { gov } = useParams<{ gov: string }>();

  // Regional data - in a real app, this would come from a database
  const regionData: Record<string, any> = {
    "tunis": {
      name: "Tunis",
      arabicName: "تونس",
      coordinator: {
        name: "Ahmed Ben Salah",
        phone: "+216 98 123 456",
        email: "tunis@tunibless.org",
        whatsapp: "https://wa.me/21698123456"
      },
      statistics: {
        members: 156,
        successful: 23,
        events: 8
      },
      whatsappGroup: "https://chat.whatsapp.com/tunis-group",
      facebookPage: "https://facebook.com/tunibless.tunis",
      description: "Unsere größte Regionalgruppe mit erfahrenen Koordinatoren",
      notes: [
        "Wöchentliche Livestreams jeden Mittwoch um 19:00",
        "Monatliche Präsenz-Treffen in der Medina",
        "Spezielle Sprechstunden für Medizin-Bewerber"
      ],
      nextEvent: {
        title: "Bewerbungsworkshop für Wintersemester",
        date: "2025-07-15",
        time: "15:00"
      }
    },
    "sfax": {
      name: "Sfax",
      arabicName: "صفاقس",
      coordinator: {
        name: "Fatma Karoui",
        phone: "+216 97 654 321",
        email: "sfax@tunibless.org",
        whatsapp: "https://wa.me/21697654321"
      },
      statistics: {
        members: 89,
        successful: 12,
        events: 5
      },
      whatsappGroup: "https://chat.whatsapp.com/sfax-group",
      facebookPage: "https://facebook.com/tunibless.sfax",
      description: "Aktive Gruppe mit Fokus auf Ingenieurswissenschaften",
      notes: [
        "Spezialisiert auf technische Studiengänge",
        "Kontakte zu Industrieunternehmen",
        "Mentoring-Programm für neue Mitglieder"
      ],
      nextEvent: {
        title: "Ingenieursstudium in Deutschland - Info-Session",
        date: "2025-07-20",
        time: "16:00"
      }
    },
    "sousse": {
      name: "Sousse",
      arabicName: "سوسة",
      coordinator: {
        name: "Mohamed Gharbi",
        phone: "+216 99 876 543",
        email: "sousse@tunibless.org",
        whatsapp: "https://wa.me/21699876543"
      },
      statistics: {
        members: 67,
        successful: 8,
        events: 4
      },
      whatsappGroup: "https://chat.whatsapp.com/sousse-group",
      facebookPage: "https://facebook.com/tunibless.sousse",
      description: "Neue, dynamische Gruppe mit jungen Koordinatoren",
      notes: [
        "Fokus auf BWL und Wirtschaftswissenschaften",
        "Starke Social Media Präsenz",
        "Kooperation mit lokalen Universitäten"
      ],
      nextEvent: {
        title: "Business Studies in Germany",
        date: "2025-07-25",
        time: "17:00"
      }
    }
  };

  const region = regionData[gov || "tunis"] || regionData["tunis"];

  const handleWhatsAppJoin = () => {
    window.open(region.whatsappGroup, '_blank');
  };

  const handleFacebookJoin = () => {
    window.open(region.facebookPage, '_blank');
  };

  const handleContactCoordinator = () => {
    window.open(region.coordinator.whatsapp, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-6">
              <MapPin className="h-12 w-12 text-primary" />
              <div>
                <h1 className="text-4xl font-bold text-foreground">
                  TuniBless {region.name}
                </h1>
                <p className="text-2xl text-muted-foreground" dir="rtl">
                  {region.arabicName}
                </p>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {region.description}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">{region.statistics.members}</div>
              <div className="text-sm text-muted-foreground">Mitglieder</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{region.statistics.successful}</div>
              <div className="text-sm text-muted-foreground">Erfolgreiche Bewerbungen</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{region.statistics.events}</div>
              <div className="text-sm text-muted-foreground">Events 2024</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact & Join */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Unserer Community beitreten
                  </CardTitle>
                  <CardDescription>
                    Vernetzen Sie sich mit anderen Bewerbern aus {region.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    onClick={handleWhatsAppJoin}
                    className="w-full bg-green-500 hover:bg-green-600 gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Gruppe beitreten
                  </Button>
                  
                  <Button 
                    onClick={handleFacebookJoin}
                    variant="outline"
                    className="w-full gap-2"
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook Seite folgen
                  </Button>

                  <div className="text-xs text-muted-foreground text-center">
                    Über 90% unserer Mitglieder nutzen WhatsApp für täglichen Austausch
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Ihr regionaler Koordinator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{region.coordinator.name}</div>
                      <div className="text-sm text-muted-foreground">Regional Koordinator</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{region.coordinator.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{region.coordinator.email}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleContactCoordinator}
                    className="w-full gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Direkt kontaktieren
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Regional Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Nächste Veranstaltung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-medium text-primary mb-2">
                      {region.nextEvent.title}
                    </h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>📅 {new Date(region.nextEvent.date).toLocaleDateString('de-DE')}</div>
                      <div>🕐 {region.nextEvent.time} (Tunesische Zeit)</div>
                      <div>📱 Via WhatsApp Live</div>
                    </div>
                    <Button size="sm" className="mt-3 w-full">
                      Teilnahme bestätigen
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Besonderheiten {region.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {region.notes.map((note: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{note}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nützliche Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Uni-Assist Portal
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                    <ExternalLink className="h-4 w-4" />
                    DAAD Datenbank
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                    <ExternalLink className="h-4 w-4" />
                    TestDaF Termine
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Deutsche Botschaft Tunis
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Erfolgsgeschichten aus {region.name} 🌟
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="font-medium mb-2">Student {i}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Erfolgreich an der TU München eingeschrieben
                    </p>
                    <Badge variant="secondary">Maschinenbau</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Werden Sie Teil der {region.name} Community! 🤝
            </h3>
            <p className="text-muted-foreground mb-6">
              Profitieren Sie von lokaler Unterstützung und Erfahrungen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => window.location.href = '/anmeldung'}>
                Jetzt registrieren
              </Button>
              <Button variant="outline" size="lg" onClick={handleWhatsAppJoin}>
                WhatsApp Gruppe beitreten
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegionPage;
