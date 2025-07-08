import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, FileText } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

const Mission = () => {
  const { t, isRTL } = useI18n();

  const features = [
    {
      icon: Users,
      title: t.mission.community,
      description: t.mission.communityDesc,
    },
    {
      icon: BookOpen,
      title: t.mission.guidance,
      description: t.mission.guidanceDesc,
    },
    {
      icon: FileText,
      title: t.mission.resources,
      description: t.mission.resourcesDesc,
    },
  ];

  return (
    <section id="mission" className="py-16 bg-muted/50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.mission.title}</h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            {t.mission.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            {t.mission.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
