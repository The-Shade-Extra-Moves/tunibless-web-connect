import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Heart, 
  Calendar, 
  FileText, 
  Upload, 
  Download,
  Award,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  Phone
} from "lucide-react";

const Germany = () => {
  const regions = [
    { name: "Nord", coordinator: "Sofiene Ben Abdallah", cities: "Hamburg, Bremen, Hannover", members: 89 },
    { name: "West", coordinator: "Yassine", cities: "Köln, Düsseldorf, Dortmund", members: 134 },
    { name: "Süd", coordinator: "Adel Belaskar", cities: "München, Stuttgart, Nürnberg", members: 98 },
    { name: "Ost", coordinator: "Hareth El Oudhane", cities: "Berlin, Dresden, Leipzig", members: 76 }
  ];

  const workshops = [
    {
      title: "Integration Workshop",
      date: "15. März 2024",
      location: "Berlin",
      description: "Grundlagen der deutschen Arbeitskultur und Bewerbungsprozess",
      spots: 25
    },
    {
      title: "Familien-Camp 2024",
      date: "22-24. Juni 2024",
      location: "Kaiserslautern",
      description: "Wochenende für tunesische Familien mit Kindern und Jugendlichen",
      spots: 50
    },
    {
      title: "Berufsberatung Hamburg",
      date: "08. April 2024",
      location: "Hamburg",
      description: "Spezielle Beratung für technische und medizinische Berufe",
      spots: 20
    },
    {
      title: "Networking Event München",
      date: "12. Mai 2024",
      location: "München",
      description: "Vernetzung mit deutschen Arbeitgebern und Success Stories",
      spots: 40
    }
  ];

  const volunteerAreas = [
    "Übersetzung und Dolmetschen",
    "Bewerbungsberatung",
    "Mentoring für Jugendliche",
    "Social Media Management",
    "Event Organisation",
    "Dokumente-Support",
    "Rechtliche Beratung",
    "IT-Support"
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            TuniBless Deutschland
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Für tunesische Familien und Helfer in Deutschland - 
            Engagieren Sie sich ehrenamtlich oder werden Sie Mitglied unseres Vereins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Heart className="w-5 h-5 mr-2" />
              Ehrenamtlich helfen
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Users className="w-5 h-5 mr-2" />
              Mitglied werden
            </Button>
          </div>
        </div>
      </section>

      {/* Regional Coordinators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Unsere Gebietskoordinatoren
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold">
                  {region.name[0]}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{region.name}</h3>
                <p className="text-sm font-medium text-primary mb-2">{region.coordinator}</p>
                <p className="text-xs text-muted-foreground mb-3">{region.cities}</p>
                <Badge variant="secondary">{region.members} Mitglieder</Badge>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Kontakt
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ehrenamtlich mithelfen</h2>
            <p className="text-muted-foreground">
              Unterstützen Sie tunesische Familien bei ihrer Integration und sammeln Sie wertvolle Erfahrungen.
            </p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input id="firstName" placeholder="Ihr Vorname" />
                </div>
                <div>
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input id="lastName" placeholder="Ihr Nachname" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">E-Mail-Adresse</Label>
                  <Input id="email" type="email" placeholder="ihre.email@beispiel.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefonnummer</Label>
                  <Input id="phone" placeholder="+49..." />
                </div>
              </div>
              
              <div>
                <Label htmlFor="city">Stadt/Region</Label>
                <Input id="city" placeholder="Ihre Stadt oder Region" />
              </div>
              
              <div>
                <Label>Interessensbereiche (mehrere auswählbar)</Label>
                <div className="grid sm:grid-cols-2 gap-2 mt-2">
                  {volunteerAreas.map((area, index) => (
                    <label key={index} className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{area}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <Label htmlFor="availability">Verfügbarkeit</Label>
                <Textarea 
                  id="availability" 
                  placeholder="Wann können Sie helfen? (z.B. Wochenends, Abends, etc.)"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="motivation">Motivation</Label>
                <Textarea 
                  id="motivation" 
                  placeholder="Warum möchten Sie bei TuniBless ehrenamtlich mithelfen?"
                  rows={4}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Heart className="w-5 h-5 mr-2" />
                Ehrenamtliche Bewerbung senden
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Workshops and Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Workshops & Veranstaltungen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{workshop.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {workshop.location}
                    </div>
                  </div>
                  <Badge variant="secondary">{workshop.spots} Plätze</Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{workshop.description}</p>
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Anmelden
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Vereinsmitgliedschaft</h2>
            <p className="text-muted-foreground">
              Werden Sie Teil unseres gemeinnützigen Vereins und unterstützen Sie unsere Mission langfristig.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Mitgliedsvorteile</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Offizielle Mitgliedsurkunde
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Teilnahme an Mitgliederversammlungen
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Exklusive Mitglieder-Events
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Direkter Draht zum Vorstand
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Spendenquittungen für Steuer
                </li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Mitglied werden</h3>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-semibold mb-2">Jahresbeitrag: 24€</div>
                  <div className="text-sm text-muted-foreground">
                    Unterstützt direkt unsere Integrationsprogramme
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button variant="hero" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Mitgliedsantrag herunterladen
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Ausgefüllten Antrag hochladen
                  </Button>
                </div>
                
                <div className="text-xs text-muted-foreground text-center">
                  <p>TuniBless e.V. ist gemeinnützig anerkannt.</p>
                  <p>Ihre Beiträge sind steuerlich absetzbar.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Document Upload Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Dokumente-Upload Tipps
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <FileText className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-3">Akzeptierte Formate</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• PDF (bevorzugt)</li>
                <li>• JPG/JPEG</li>
                <li>• PNG</li>
                <li>• Maximale Dateigröße: 10MB</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <Upload className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-3">Upload-Richtlinien</h3>
              <ul className="text-sm text-muted-foregrund space-y-1">
                <li>• Dokumente gut lesbar scannen</li>
                <li>• Alle Seiten eines Dokuments</li>
                <li>• Deutsche Übersetzungen beifügen</li>
                <li>• Dateinamen aussagekräftig wählen</li>
              </ul>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="hero" size="lg">
              <Upload className="w-5 h-5 mr-2" />
              Zum Upload Portal
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Haben Sie Fragen?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Unser Team in Deutschland steht Ihnen gerne zur Verfügung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              E-Mail senden
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Anrufen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Germany;