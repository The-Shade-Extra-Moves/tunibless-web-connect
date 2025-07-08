import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  UserPlus, 
  FileText, 
  Search, 
  Send, 
  Calendar, 
  CheckCircle, 
  Briefcase, 
  GraduationCap 
} from "lucide-react";

const Roadmap = () => {
  const steps = [
    {
      id: 1,
      title: "Registrierung & Onboarding",
      description: "Anmeldung bei TuniBless und Erhalt der Checkliste",
      icon: UserPlus,
      duration: "1 Tag",
      status: "completed" as const,
      details: [
        "Persönliche Daten erfassen",
        "WhatsApp Gruppe beitreten", 
        "Checkliste herunterladen",
        "Erstberatung vereinbaren"
      ]
    },
    {
      id: 2,
      title: "Dokumente vorbereiten",
      description: "Sammlung und Übersetzung aller benötigten Dokumente",
      icon: FileText,
      duration: "2-4 Wochen",
      status: "in-progress" as const,
      details: [
        "Zeugnisse übersetzen lassen",
        "Sprachzertifikate besorgen",
        "Lebenslauf auf Deutsch erstellen",
        "Motivationsschreiben verfassen"
      ]
    },
    {
      id: 3,
      title: "Hochschulsuche",
      description: "Passende Universitäten und Studiengänge finden",
      icon: Search,
      duration: "1-2 Wochen",
      status: "pending" as const,
      details: [
        "Studienrichtung festlegen",
        "Universitäten recherchieren",
        "Zulassungsvoraussetzungen prüfen",
        "Bewerbungsfristen notieren"
      ]
    },
    {
      id: 4,
      title: "Bewerbung einreichen",
      description: "Online-Bewerbung bei ausgewählten Hochschulen",
      icon: Send,
      duration: "1 Woche",
      status: "pending" as const,
      details: [
        "Uni-Assist Bewerbung",
        "Direkte Hochschulbewerbung",
        "Bewerbungsgebühren zahlen",
        "Bestätigungen sammeln"
      ]
    },
    {
      id: 5,
      title: "Bewerbungsphase",
      description: "Warten auf Rückmeldungen und Zusagen",
      icon: Calendar,
      duration: "2-6 Monate",
      status: "pending" as const,
      details: [
        "Bewerbungsstatus verfolgen",
        "Zusagen/Absagen verwalten",
        "Wartesemester planen",
        "Alternative Optionen prüfen"
      ]
    },
    {
      id: 6,
      title: "Zusage erhalten",
      description: "Studienplatz-Zusage und Einschreibung",
      icon: CheckCircle,
      duration: "1-2 Wochen",
      status: "pending" as const,
      details: [
        "Zusage bestätigen",
        "Semesterbeitrag zahlen",
        "Studentenausweis beantragen",
        "Orientierungswoche anmelden"
      ]
    },
    {
      id: 7,
      title: "Visum & Einreise",
      description: "Studentenvisum beantragen und nach Deutschland reisen",
      icon: Briefcase,
      duration: "4-8 Wochen",
      status: "pending" as const,
      details: [
        "Visumsantrag stellen",
        "Finanzierungsnachweis erbringen",
        "Krankenversicherung abschließen",
        "Flug und Unterkunft buchen"
      ]
    },
    {
      id: 8,
      title: "Studium beginnen",
      description: "Ankunft in Deutschland und Studienstart",
      icon: GraduationCap,
      duration: "Laufend",
      status: "pending" as const,
      details: [
        "Anmeldung bei Behörden",
        "Bankkonto eröffnen",
        "Wohnung finden",
        "Studium erfolgreich absolvieren"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      default: return 'bg-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      default: return '⏳';
    }
  };

  // Calculate overall progress
  const completedSteps = steps.filter(step => step.status === 'completed').length;
  const inProgressSteps = steps.filter(step => step.status === 'in-progress').length;
  const overallProgress = ((completedSteps + inProgressSteps * 0.5) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Ihr Weg zum Studium in Deutschland 🎯
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Von der Anmeldung bis zum Studienstart - folgen Sie unserem bewährten 8-Schritte-Plan
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Fortschritt</span>
                <span>{Math.round(overallProgress)}%</span>
              </div>
              <Progress value={overallProgress} className="h-3" />
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={step.id} className="relative">
                  {/* Timeline Line */}
                  {!isLast && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-border" />
                  )}
                  
                  <Card className={`ml-16 border-l-4 ${
                    step.status === 'completed' ? 'border-l-green-500' : 
                    step.status === 'in-progress' ? 'border-l-blue-500' : 'border-l-gray-300'
                  }`}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        {/* Step Number & Icon */}
                        <div className="absolute -left-10 top-6">
                          <div className={`w-12 h-12 rounded-full ${getStatusColor(step.status)} flex items-center justify-center text-white font-bold`}>
                            {step.status === 'completed' ? (
                              <CheckCircle className="h-6 w-6" />
                            ) : (
                              <Icon className="h-6 w-6" />
                            )}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl">
                              Schritt {step.id}: {step.title}
                            </CardTitle>
                            <span className="text-lg">{getStatusIcon(step.status)}</span>
                          </div>
                          <CardDescription className="text-base">
                            {step.description}
                          </CardDescription>
                          <div className="text-sm text-muted-foreground mt-1">
                            Dauer: {step.duration}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="grid gap-2 md:grid-cols-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Bereit für den nächsten Schritt?
            </h3>
            <p className="text-muted-foreground mb-6">
              Lassen Sie sich von unserem erfahrenen Team persönlich begleiten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => window.location.href = '/anmeldung'}>
                Jetzt registrieren
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/kontakt'}>
                Beratung vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Roadmap;
