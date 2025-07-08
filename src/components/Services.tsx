import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { CheckCircle, FileText, Video, Users, Folder } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const { t, isRTL } = useI18n();
  const { scrollToSection } = useSmoothScroll();

  const services = [
    {
      title: t.services.checklists,
      description: t.services.checklistsDesc,
      icon: CheckCircle,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: t.services.templates,
      description: t.services.templatesDesc,
      icon: FileText,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: t.services.guides,
      description: t.services.guidesDesc,
      icon: Folder,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: t.services.videos,
      description: t.services.videosDesc,
      icon: Video,
      color: "text-tunisian-red",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      title: t.services.community,
      description: t.services.communityDesc,
      icon: Users,
      color: "text-german-gold",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
    }
  ];

  return (
    <section id="services" className="py-16 bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="default" 
            size="lg"
            asChild
          >
            <Link to="/services">
              {t.services.viewAll}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;