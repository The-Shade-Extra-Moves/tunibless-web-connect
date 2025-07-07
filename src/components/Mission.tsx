import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Mission = () => {
  const objectives = [
    {
      title: "Legal Integration",
      description: "Structured pathways for legal migration and settlement in Germany",
      icon: "⚖️"
    },
    {
      title: "Vocational Training",
      description: "Free guidance on dual training opportunities and apprenticeships",
      icon: "🎓"
    },
    {
      title: "Community Support",
      description: "24 regional WhatsApp groups connecting families across Germany",
      icon: "🤝"
    },
    {
      title: "Documentation Help",
      description: "CV creation, certificate recognition, and translation services",
      icon: "📋"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            TuniBless e.V. is a non-profit association dedicated to supporting Tunisian families 
            and youth on their journey toward successful legal integration in Germany.
          </p>
        </div>

        {/* Mission statement */}
        <div className="mb-16">
          <Card className="bg-gradient-card border-0 shadow-medium">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Integration through Education
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    We believe in empowering individuals through structured guidance, professional training, 
                    and community support. Our approach focuses on creating dignified alternatives to 
                    irregular migration through education and legal pathways.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero">
                      Join Our Community
                    </Button>
                    <Button variant="outline">
                      View Documents
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                  <h4 className="text-xl font-semibold mb-4">Key Services</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Berufsorientierung (Career Guidance)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>KAUSA Project Support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Monthly Facebook Live Sessions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Document Upload & Review</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Objectives grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{objective.icon}</div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {objective.title}
                </h4>
                <p className="text-muted-foreground">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legal info */}
        <div className="mt-16 text-center">
          <Card className="bg-secondary/10 border-0">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Registered Non-Profit Organization
              </h4>
              <p className="text-muted-foreground mb-4">
                TuniBless e.V. is officially registered as a gemeinnütziger Verein (non-profit association) 
                in Germany, dedicated to promoting integration and education.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>Address: Husarenäcker 4, 67659 Kaiserslautern</p>
                <p>Bank: Sparkasse Kaiserslautern | IBAN: DE14 5405 0220 0000 6402 68</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;