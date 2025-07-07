import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  MessageSquare, 
  FileText, 
  Users, 
  Calendar, 
  CheckCircle,
  Download,
  Video,
  Phone
} from "lucide-react";

const Tunisia = () => {
  const governorates = [
    { name: "Tunis", members: 150, whatsapp: "#" },
    { name: "Ariana", members: 89, whatsapp: "#" },
    { name: "Ben Arous", members: 72, whatsapp: "#" },
    { name: "Nabeul", members: 134, whatsapp: "#" },
    { name: "Sousse", members: 98, whatsapp: "#" },
    { name: "Monastir", members: 76, whatsapp: "#" },
    { name: "Sfax", members: 145, whatsapp: "#" },
    { name: "Kairouan", members: 54, whatsapp: "#" },
    { name: "Gafsa", members: 43, whatsapp: "#" },
    { name: "Gabès", members: 67, whatsapp: "#" },
    { name: "Medenine", members: 39, whatsapp: "#" },
    { name: "Tataouine", members: 28, whatsapp: "#" }
  ];

  const documents = [
    {
      title: "Passport Scan",
      description: "Hochauflösender Scan aller Passseiten",
      required: true,
      format: "PDF"
    },
    {
      title: "Bildungsabschlüsse",
      description: "Beglaubigte Kopien aller Zeugnisse und Diplome",
      required: true,
      format: "PDF"
    },
    {
      title: "Geburtsurkunde",
      description: "Beglaubigte Geburtsurkunde mit Apostille",
      required: true,
      format: "PDF"
    },
    {
      title: "Führungszeugnis",
      description: "Polizeiliches Führungszeugnis nicht älter als 3 Monate",
      required: true,
      format: "PDF"
    },
    {
      title: "Gesundheitszeugnis",
      description: "Medizinische Untersuchung und Impfnachweis",
      required: false,
      format: "PDF"
    },
    {
      title: "Sprachzertifikat",
      description: "A2/B1 Deutsch-Zertifikat (falls vorhanden)",
      required: false,
      format: "PDF"
    }
  ];

  const livestreams = [
    {
      day: "Dienstag",
      time: "20:00 Tunis Zeit",
      title: "Deutsch für alle",
      description: "Deutschunterricht und Sprachpraxis",
      language: "🇩🇪",
      link: "#"
    },
    {
      day: "Mittwoch",
      time: "20:00 Tunis Zeit",
      title: "Q&A Session",
      description: "Fragen und Antworten zur Integration",
      language: "🇹🇳",
      link: "#"
    },
    {
      day: "Donnerstag",
      time: "21:00 Tunis Zeit",
      title: "Erfahrungsaustausch",
      description: "Entspannte Unterhaltung und Netzwerken",
      language: "🇹🇳",
      link: "#"
    }
  ];

  const steps = [
    "Registrierung auf unserer Plattform",
    "WhatsApp-Gruppe Ihres Gouvernorats beitreten",
    "Dokumente sammeln und digitalisieren",
    "Upload in unser sicheres Portal",
    "CV-Erstellung mit unserem Team",
    "Teilnahme an Livestreams",
    "Bewerbungstraining absolvieren",
    "Matching mit deutschen Arbeitgebern"
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ihr Weg nach Deutschland
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Spezielle Unterstützung für tunesische Bewerber - Von der Dokumentenvorbereitung 
            bis zur erfolgreichen Vermittlung in deutsche Ausbildungs- und Arbeitsplätze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Gruppe beitreten
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Calendar className="w-5 h-5 mr-2" />
              Livestream anschauen
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24</div>
              <div className="text-muted-foreground">WhatsApp Gruppen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1200+</div>
              <div className="text-muted-foreground">Aktive Mitglieder</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Erfolgreich vermittelt</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <div className="text-muted-foreground">Livestreams pro Woche</div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Ihr 8-Schritte Integrationspfad
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <span className="text-foreground">{step}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="hero" size="lg">
              <CheckCircle className="w-5 h-5 mr-2" />
              Jetzt starten
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Groups by Governorate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            WhatsApp-Gruppen nach Gouvernorat
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {governorates.map((gov, index) => (
              <Card key={index} className="p-4 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-foreground">{gov.name}</h3>
                  </div>
                  <Badge variant="secondary">{gov.members}</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Gruppe beitreten
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Erforderliche Dokumente
          </h2>
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{doc.title}</h3>
                      {doc.required && (
                        <Badge variant="destructive" className="text-xs">Erforderlich</Badge>
                      )}
                      <Badge variant="outline" className="text-xs">{doc.format}</Badge>
                    </div>
                    <p className="text-muted-foreground">{doc.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="hero">
              <Download className="w-5 h-5 mr-2" />
              Vollständige Checkliste herunterladen
            </Button>
          </div>
        </div>
      </section>

      {/* Weekly Livestreams */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Wöchentliche Livestreams
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {livestreams.map((stream, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                <div className="text-4xl mb-4">{stream.language}</div>
                <h3 className="font-semibold text-foreground mb-2">{stream.day}</h3>
                <p className="text-primary font-medium mb-2">{stream.time}</p>
                <h4 className="font-semibold mb-2">{stream.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{stream.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Video className="w-4 h-4 mr-2" />
                  Teilnehmen
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Bereit für Ihren Deutschland-Traum?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schließen Sie sich über 1200 tunesischen Bewerbern an, die bereits ihren Weg nach Deutschland begonnen haben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Users className="w-5 h-5 mr-2" />
              Jetzt registrieren
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tunisia;