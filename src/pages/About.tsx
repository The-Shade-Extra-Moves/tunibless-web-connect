import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Clock } from "lucide-react";

const About = () => {
  const coordinators = [
    { name: "Kamel Ben Hamida", role: "Vorsitzender (President)", region: "Deutschland" },
    { name: "Saif Achour", role: "Kassenwart (Treasurer)", region: "Deutschland" },
    { name: "Nada Knani", role: "Leiter Koordinatoren", region: "Deutschland" },
    { name: "Maryam El Oudhane", role: "Teamleiter Media", region: "Deutschland" },
    { name: "Sofiene Ben Abdallah", role: "Gebietskoordinator NORD", region: "Deutschland" },
    { name: "Yassine", role: "Gebietskoordinator WEST", region: "Deutschland" },
    { name: "Adel Belaskar", role: "Gebietskoordinator SÜD", region: "Deutschland" },
    { name: "Hareth El Ouadhane", role: "Gebietskoordinator OST", region: "Deutschland" },
  ];

  const timeline = [
    { year: "2020", event: "TuniBless e.V. Gründung", description: "Vereinsgründung zur Unterstützung tunesischer Familien" },
    { year: "2021", event: "Erste Partnerschaften", description: "Aufbau von Partnerschaften zwischen Tunesien und Deutschland" },
    { year: "2022", event: "WhatsApp Netzwerk", description: "24 regionale WhatsApp-Gruppen etabliert" },
    { year: "2023", event: "Erfolgreiche Vermittlungen", description: "Über 500 erfolgreiche Beratungen und Vermittlungen" },
    { year: "2024", event: "Expansion", description: "Erweiterung der Services und internationale Reichweite" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Über TuniBless e.V.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ein gemeinnütziger Verein, der tunesische Familien und Jugendliche auf ihrem Weg zur erfolgreichen 
            legalen Integration in Deutschland unterstützt.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Unsere Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                TuniBless e.V. fördert strukturierte, würdevolle Alternativen zur illegalen Migration durch 
                kostenlose Berufsberatung, Partnerschaftsarbeit und mehrsprachige Community-Betreuung.
              </p>
              <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
                <p className="font-medium mb-2">
                  "Niemand kratzt besser an deiner Haut als dein eigener Fingernagel – also erledige deine Aufgaben selbst."
                </p>
                <p className="text-sm opacity-90">
                  "ما حك جلدك مثل ظفرك، فتولّ أنت جميع أمرك"
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Strukturiert</h3>
                <p className="text-sm text-muted-foreground">Klare Wege zur Integration</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Gemeinnützig</h3>
                <p className="text-sm text-muted-foreground">Kostenlose Unterstützung</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">24 WhatsApp Gruppen</p>
              </Card>
              <Card className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Kontinuierlich</h3>
                <p className="text-sm text-muted-foreground">Regelmäße Livestreams</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Unser Weg</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.event}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Unser Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coordinators.map((coordinator, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {coordinator.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{coordinator.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">{coordinator.role}</p>
                <p className="text-xs text-muted-foreground">{coordinator.region}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Werde Teil unserer Mission</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Unterstütze uns dabei, tunesischen Familien den Weg zu einem besseren Leben zu ebnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Jetzt registrieren
            </Button>
            <Button variant="outline" size="lg">
              Ehrenamtlich helfen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;