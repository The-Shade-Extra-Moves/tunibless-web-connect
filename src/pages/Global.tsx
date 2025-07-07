import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  MessageSquare, 
  Users, 
  MapPin, 
  Calendar, 
  CheckCircle,
  Heart,
  Video,
  Phone,
  Mail
} from "lucide-react";

const Global = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    { code: "fr", name: "Frankreich", flag: "🇫🇷", members: 234, whatsapp: "#" },
    { code: "it", name: "Italien", flag: "🇮🇹", members: 187, whatsapp: "#" },
    { code: "ca", name: "Kanada", flag: "🇨🇦", members: 156, whatsapp: "#" },
    { code: "us", name: "USA", flag: "🇺🇸", members: 143, whatsapp: "#" },
    { code: "be", name: "Belgien", flag: "🇧🇪", members: 98, whatsapp: "#" },
    { code: "ch", name: "Schweiz", flag: "🇨🇭", members: 87, whatsapp: "#" },
    { code: "uk", name: "Großbritannien", flag: "🇬🇧", members: 76, whatsapp: "#" },
    { code: "au", name: "Australien", flag: "🇦🇺", members: 65, whatsapp: "#" },
    { code: "nl", name: "Niederlande", flag: "🇳🇱", members: 54, whatsapp: "#" },
    { code: "se", name: "Schweden", flag: "🇸🇪", members: 43, whatsapp: "#" },
    { code: "no", name: "Norwegen", flag: "🇳🇴", members: 32, whatsapp: "#" },
    { code: "ae", name: "VAE", flag: "🇦🇪", members: 89, whatsapp: "#" }
  ];

  const steps = [
    {
      step: 1,
      title: "Land auswählen",
      description: "Wählen Sie Ihr aktuelles Aufenthaltsland aus der Liste"
    },
    {
      step: 2,
      title: "Registrierung",
      description: "Füllen Sie das Registrierungsformular mit Ihren Daten aus"
    },
    {
      step: 3,
      title: "Community beitreten",
      description: "Treten Sie der WhatsApp-Gruppe Ihres Landes bei"
    },
    {
      step: 4,
      title: "Dokumente vorbereiten",
      description: "Sammeln Sie alle erforderlichen Dokumente"
    },
    {
      step: 5,
      title: "Beratung erhalten",
      description: "Nehmen Sie an individuellen Beratungsgesprächen teil"
    },
    {
      step: 6,
      title: "Deutschland-Vorbereitung",
      description: "Spezielle Vorbereitung für Ihren Umzug nach Deutschland"
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Weltweite Community",
      description: "Über 1500 Mitglieder in 12 Ländern weltweit"
    },
    {
      icon: MessageSquare,
      title: "Länder-spezifische Gruppen",
      description: "WhatsApp-Gruppen für jedes Land mit lokalem Support"
    },
    {
      icon: Video,
      title: "Online Beratung",
      description: "Virtuelle Beratungsgespräche angepasst an Ihre Zeitzone"
    },
    {
      icon: Heart,
      title: "Kulturelle Unterstützung",
      description: "Unterstützung bei der kulturellen Anpassung"
    }
  ];

  const testimonials = [
    {
      name: "Amira K.",
      country: "Frankreich",
      flag: "🇫🇷",
      text: "TuniBless hat mir geholfen, von Paris aus meinen Traum einer Ausbildung in Deutschland zu verwirklichen."
    },
    {
      name: "Mohamed S.",
      country: "Kanada",
      flag: "🇨🇦",
      text: "Die Unterstützung war unglaublich. Trotz der Zeitverschiebung war das Team immer erreichbar."
    },
    {
      name: "Leila B.",
      country: "Italien",
      flag: "🇮🇹",
      text: "Als tunesische Diaspora in Rom wurde ich perfekt durch den gesamten Prozess begleitet."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tunesische Diaspora weltweit
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Egal wo Sie leben - wir unterstützen tunesische Familien und Jugendliche 
            weltweit bei ihrer Integration nach Deutschland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Users className="w-5 h-5 mr-2" />
              Community beitreten
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Calendar className="w-5 h-5 mr-2" />
              Beratungstermin buchen
            </Button>
          </div>
        </div>
      </section>

      {/* Country Selector */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Wählen Sie Ihr Land
          </h2>
          <div className="max-w-md mx-auto mb-8">
            <Select onValueChange={setSelectedCountry}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Land auswählen..." />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{country.flag}</span>
                      <span>{country.name}</span>
                      <Badge variant="secondary" className="ml-auto">
                        {country.members} Mitglieder
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedCountry && (
            <Card className="p-8 text-center bg-primary/5 border-primary/20">
              <div className="text-6xl mb-4">
                {countries.find(c => c.code === selectedCountry)?.flag}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {countries.find(c => c.code === selectedCountry)?.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {countries.find(c => c.code === selectedCountry)?.members} aktive Mitglieder
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Gruppe beitreten
                </Button>
                <Button variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Lokalen Koordinator kontaktieren
                </Button>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Länder</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1500+</div>
              <div className="text-muted-foreground">Diaspora Mitglieder</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Online Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Erfolgreiche Übergänge</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Warum TuniBless für die Diaspora?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                  <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Ihr Weg nach Deutschland
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-soft">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Stimmen aus der Diaspora
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{testimonial.flag}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Unsere weltweite Community
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {countries.map((country, index) => (
              <Card key={index} className="p-4 hover:shadow-medium transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedCountry(country.code)}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{country.flag}</span>
                    <span className="font-semibold text-foreground">{country.name}</span>
                  </div>
                  <Badge variant="secondary">{country.members}</Badge>
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Bereit, Teil unserer globalen Familie zu werden?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schließen Sie sich über 1500 tunesischen Familien weltweit an, 
            die ihren Weg nach Deutschland erfolgreich begonnen haben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <CheckCircle className="w-5 h-5 mr-2" />
              Jetzt registrieren
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Mehr Informationen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Global;