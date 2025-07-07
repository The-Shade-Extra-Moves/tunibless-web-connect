import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Video, Clock, Star } from "lucide-react";

const Events = () => {
  const featuredEvent = {
    title: "Familien-Camp 2024",
    date: "22-24. Juni 2024",
    location: "Kaiserslautern, Deutschland",
    description: "Ein unvergessliches Wochenende für tunesische Familien mit Workshops, kulturellen Aktivitäten und Networking.",
    participants: 120,
    image: "/placeholder.svg"
  };

  const livestreams = [
    { day: "Dienstag", time: "20:00", title: "Deutsch für alle", language: "🇩🇪", description: "Deutschunterricht und Sprachpraxis" },
    { day: "Mittwoch", time: "20:00", title: "Q&A Session", language: "🇹🇳", description: "Fragen zur Integration" },
    { day: "Donnerstag", time: "21:00", title: "Erfahrungsaustausch", language: "🇹🇳", description: "Entspannte Gespräche" }
  ];

  const upcomingEvents = [
    { title: "Integration Workshop Berlin", date: "15. März 2024", location: "Berlin", spots: 25 },
    { title: "Berufsberatung Hamburg", date: "08. April 2024", location: "Hamburg", spots: 20 },
    { title: "Networking München", date: "12. Mai 2024", location: "München", spots: 40 }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Veranstaltungen & Livestreams</h1>
            <p className="text-xl text-muted-foreground">Bleiben Sie verbunden mit unserer Community</p>
          </div>

          {/* Featured Event */}
          <Card className="p-8 mb-12 bg-gradient-primary/5 border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <Badge variant="secondary">Featured Event</Badge>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{featuredEvent.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {featuredEvent.date}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  {featuredEvent.location}
                </div>
                <p className="text-muted-foreground mb-6">{featuredEvent.description}</p>
                <Button variant="hero" size="lg">
                  <Users className="w-5 h-5 mr-2" />
                  Jetzt anmelden
                </Button>
              </div>
            </div>
          </Card>

          {/* Weekly Livestreams */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Wöchentliche Livestreams</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {livestreams.map((stream, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-4xl mb-4">{stream.language}</div>
                  <h3 className="font-semibold text-foreground mb-2">{stream.day}</h3>
                  <div className="flex items-center justify-center gap-2 text-primary mb-2">
                    <Clock className="w-4 h-4" />
                    {stream.time}
                  </div>
                  <h4 className="font-semibold mb-2">{stream.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{stream.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Video className="w-4 h-4 mr-2" />
                    Live beitreten
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          {/* Upcoming Events */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Kommende Veranstaltungen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <Badge variant="secondary" className="mb-4">{event.spots} Plätze</Badge>
                  <Button variant="outline" className="w-full">Anmelden</Button>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Events;