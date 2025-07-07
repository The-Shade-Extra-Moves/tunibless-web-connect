import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, FileText, Users, Calendar, Award, MessageSquare, Briefcase } from "lucide-react";

const Onboarding = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 1,
      title: "Registrierung abschließen",
      description: "Füllen Sie das Registrierungsformular aus und wählen Sie Ihre Region",
      icon: FileText,
      details: "Registrieren Sie sich auf unserer Plattform und geben Sie alle erforderlichen Informationen an.",
      duration: "5 Minuten"
    },
    {
      id: 2,
      title: "WhatsApp-Gruppe beitreten",
      description: "Treten Sie der WhatsApp-Gruppe Ihrer Region bei für direkten Support",
      icon: MessageSquare,
      details: "Erhalten Sie den Link zu Ihrer regionalen WhatsApp-Gruppe und treten Sie bei.",
      duration: "2 Minuten"
    },
    {
      id: 3,
      title: "Dokumente sammeln",
      description: "Bereiten Sie Ihre Dokumente vor: Pass, Zeugnisse, Übersetzungen",
      icon: FileText,
      details: "Sammeln Sie alle erforderlichen Dokumente und lassen Sie sie bei Bedarf übersetzen.",
      duration: "1-2 Wochen"
    },
    {
      id: 4,
      title: "Checkliste herunterladen",
      description: "Laden Sie unsere detaillierte Checkliste für Ihren Integrationsprozess herunter",
      icon: CheckCircle,
      details: "Eine umfassende Checkliste hilft Ihnen, nichts zu vergessen.",
      duration: "10 Minuten"
    },
    {
      id: 5,
      title: "CV erstellen lassen",
      description: "Lassen Sie sich bei der Erstellung eines deutschen Lebenslaufs helfen",
      icon: FileText,
      details: "Unser Team hilft Ihnen bei der Erstellung eines professionellen deutschen CVs.",
      duration: "1 Woche"
    },
    {
      id: 6,
      title: "Facebook Live teilnehmen",
      description: "Nehmen Sie an unseren wöchentlichen Q&A Sessions teil",
      icon: Users,
      details: "Jeden Dienstag, Mittwoch und Donnerstag finden Live-Sessions statt.",
      duration: "1 Stunde/Woche"
    },
    {
      id: 7,
      title: "Bewerbungen vorbereiten",
      description: "Bereiten Sie sich auf Bewerbungsgespräche vor",
      icon: Briefcase,
      details: "Training für Bewerbungsgespräche und Vorbereitung auf den deutschen Arbeitsmarkt.",
      duration: "2-3 Wochen"
    },
    {
      id: 8,
      title: "Erfolgreiche Vermittlung",
      description: "Finden Sie Ihren Ausbildungsplatz oder Job in Deutschland",
      icon: Award,
      details: "Mit unserer Unterstützung finden Sie den passenden Arbeits- oder Ausbildungsplatz.",
      duration: "Variabel"
    }
  ];

  const toggleStep = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const progressPercentage = (completedSteps.length / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Ihr Integrationsweg</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Folgen Sie diesen 8 Schritten für eine erfolgreiche Integration in Deutschland
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Fortschritt</span>
                <span>{completedSteps.length}/8 Schritte</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-primary h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {Math.round(progressPercentage)}% abgeschlossen
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isCompleted = completedSteps.includes(step.id);
              const IconComponent = step.icon;
              
              return (
                <Card 
                  key={step.id}
                  className={`p-6 transition-all duration-300 hover:shadow-medium ${
                    isCompleted ? 'border-success bg-success/5' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-2 ${
                        isCompleted 
                          ? 'bg-success text-success-foreground' 
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          step.id
                        )}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-0.5 h-16 ${
                          isCompleted ? 'bg-success' : 'bg-muted'
                        }`} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                          <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full whitespace-nowrap">
                          {step.duration}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      <p className="text-sm text-muted-foreground mb-4">{step.details}</p>
                      
                      <div className="flex gap-3">
                        <Button
                          onClick={() => toggleStep(step.id)}
                          variant={isCompleted ? "success" : "outline"}
                          size="sm"
                        >
                          {isCompleted ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Abgeschlossen
                            </>
                          ) : (
                            <>
                              <Circle className="w-4 h-4 mr-2" />
                              Als erledigt markieren
                            </>
                          )}
                        </Button>
                        
                        {step.id === 1 && (
                          <Button variant="hero" size="sm">
                            Jetzt registrieren
                          </Button>
                        )}
                        
                        {step.id === 2 && (
                          <Button variant="outline" size="sm">
                            WhatsApp beitreten
                          </Button>
                        )}
                        
                        {step.id === 4 && (
                          <Button variant="outline" size="sm">
                            Checkliste herunterladen
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Completion Message */}
          {completedSteps.length === steps.length && (
            <Card className="p-8 text-center bg-success/10 border-success mt-8">
              <Award className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Herzlichen Glückwunsch! 🎉
              </h2>
              <p className="text-muted-foreground mb-6">
                Sie haben alle Schritte abgeschlossen. Unser Team wird Sie bei den nächsten Schritten unterstützen.
              </p>
              <Button variant="hero" size="lg">
                Kontakt aufnehmen
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;