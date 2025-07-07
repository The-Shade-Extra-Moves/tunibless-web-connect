import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Kamel Ben Hamida",
      role: "Vorsitzender (President)",
      description: "Leading TuniBless e.V. with vision and dedication to helping Tunisian families integrate successfully into German society.",
      region: "Leadership"
    },
    {
      name: "Saif Achour",
      role: "Kassenwart (Treasurer)",
      description: "Managing financial operations and ensuring transparent allocation of resources for community programs.",
      region: "Finance"
    },
    {
      name: "Nada Knani",
      role: "Leiter Koordinatoren",
      description: "Coordinating regional activities and ensuring smooth operations across all German territories.",
      region: "Coordination"
    },
    {
      name: "Maryam El Oudhane",
      role: "Teamleiter Media",
      description: "Leading digital outreach, social media engagement, and communication strategies.",
      region: "Media"
    },
    {
      name: "Sofiene Ben Abdallah",
      role: "Gebietskoordinator NORD",
      description: "Managing northern German regions and supporting local community integration efforts.",
      region: "Nord"
    },
    {
      name: "Yassine",
      role: "Gebietskoordinator WEST",
      description: "Coordinating western German regions and facilitating training opportunities.",
      region: "West"
    },
    {
      name: "Adel Belaskar",
      role: "Gebietskoordinator SÜD",
      description: "Supporting southern German communities with integration and career guidance.",
      region: "Süd"
    },
    {
      name: "Hareth El Ouadhane",
      role: "Gebietskoordinator OST",
      description: "Managing eastern German regions and connecting families with local resources.",
      region: "Ost"
    }
  ];

  const getRegionColor = (region: string) => {
    const colors = {
      Leadership: "bg-primary/10 text-primary",
      Finance: "bg-success/10 text-success",
      Coordination: "bg-secondary/10 text-secondary",
      Media: "bg-accent/10 text-accent",
      Nord: "bg-blue-100 text-blue-800",
      West: "bg-green-100 text-green-800",
      Süd: "bg-yellow-100 text-yellow-800",
      Ost: "bg-purple-100 text-purple-800"
    };
    return colors[region as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated volunteers and coordinators who make TuniBless e.V. possible, 
            working across Germany to support Tunisian families in their integration journey.
          </p>
        </div>

        {/* Leadership team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 mx-auto">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {member.name}
                    </h4>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getRegionColor(member.region)}`}>
                      {member.role}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional coordinators */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Regional Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(4).map((member, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-full mb-4 mx-auto">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {member.name}
                    </h4>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getRegionColor(member.region)}`}>
                      {member.region}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join team CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-lg mb-6 text-white/90">
                Become a volunteer and help us support more Tunisian families in their integration journey.
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full">Volunteer Opportunities</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Remote Work</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Flexible Hours</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Certificate Provided</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;