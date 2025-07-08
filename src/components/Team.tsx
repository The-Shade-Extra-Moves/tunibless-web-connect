import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";
import { Mail, MessageCircle } from "lucide-react";

const Team = () => {
  const { t, isRTL } = useI18n();

  const teamMembers = [
    {
      name: "Kamel Ben Hamida",
      role: t.team.president,
      description: "Leading TuniBless e.V. with vision and dedication to helping Tunisian families integrate successfully into German society.",
      region: "Leadership",
      avatar: "KB"
    },
    {
      name: "Saif Achour", 
      role: t.team.treasurer,
      description: "Managing financial operations and ensuring transparent allocation of resources for community programs.",
      region: "Finance",
      avatar: "SA"
    },
    {
      name: "Nada Knani",
      role: t.team.coordinatorLeader,
      description: "Coordinating regional activities and ensuring smooth operations across all German territories.", 
      region: "Coordination",
      avatar: "NK"
    },
    {
      name: "Maryam El Oudhane",
      role: t.team.mediaLeader,
      description: "Leading digital outreach, social media engagement, and communication strategies.",
      region: "Media", 
      avatar: "ME"
    }
  ];

  return (
    <section id="team" className="py-16 bg-muted/50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.team.title}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{member.avatar}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                
                {/* Contact buttons */}
                <div className="flex justify-center gap-2">
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors" title={t.team.contact}>
                    <Mail className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors" title="WhatsApp">
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Volunteers section */}
        <div className="text-center bg-background rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">25+ {t.team.volunteers}</h3>
          <p className="text-muted-foreground mb-6">
            {t.team.volunteerDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">{t.team.volunteerAreas.personalConsultation}</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">{t.team.volunteerAreas.workshops}</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">{t.team.volunteerAreas.translation}</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">{t.team.volunteerAreas.contentCreation}</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">{t.team.volunteerAreas.whatsappModeration}</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">{t.team.volunteerAreas.eventOrganization}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;