import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, MessageCircle, FileText, Users } from "lucide-react";

const Success = () => {
  const tasks = [
    {
      id: 1,
      title: "Checkliste herunterladen",
      description: "Laden Sie Ihre persönliche Bewerbungs-Checkliste herunter",
      icon: Download,
      action: "Checkliste laden",
      href: "/downloads",
      completed: false
    },
    {
      id: 2,
      title: "WhatsApp Gruppe beitreten", 
      description: "Treten Sie unserer regionalen WhatsApp Gruppe bei",
      icon: MessageCircle,
      action: "Gruppe beitreten",
      href: "#whatsapp",
      completed: false
    },
    {
      id: 3,
      title: "Lebenslauf erstellen",
      description: "Nutzen Sie unsere Vorlagen für einen deutschen Lebenslauf",
      icon: FileText,
      action: "CV erstellen",
      href: "/services/lebenslauf",
      completed: false
    },
    {
      id: 4,
      title: "Onboarding absolvieren",
      description: "Folgen Sie unserem 8-Schritte Bewerbungsprozess",
      icon: Users,
      action: "Roadmap ansehen",
      href: "/roadmap",
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 dark:bg-green-900 rounded-full p-4">
                <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Willkommen bei TuniBless! 🎉
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ihre Registrierung war erfolgreich. Folgen Sie den nächsten Schritten, 
              um Ihren Bewerbungsprozess zu beginnen.
            </p>
          </div>

          {/* Next Steps */}
          <div className="grid gap-6 md:grid-cols-2">
            {tasks.map((task) => {
              const Icon = task.icon;
              return (
                <Card key={task.id} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{task.title}</CardTitle>
                        <CardDescription>{task.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full" 
                      onClick={() => window.location.href = task.href}
                    >
                      {task.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-12 text-center space-y-4">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Benötigen Sie Hilfe?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={() => window.location.href = '/faq'}>
                FAQ durchsuchen
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/kontakt'}>
                Kontakt aufnehmen
              </Button>
              <Button onClick={() => window.location.href = '/'}>
                Zurück zur Startseite
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Success;
