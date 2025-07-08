import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import { 
  Download, 
  Play, 
  FileText, 
  Video, 
  CheckSquare,
  ArrowLeft,
  Clock,
  Star
} from "lucide-react";

const ServiceCategory = () => {
  const { category } = useParams<{ category: string }>();

  const categoryData: Record<string, any> = {
    "checklisten": {
      title: "Checklisten & Übersichten",
      description: "Vollständige Checklisten für jeden Schritt Ihrer Bewerbung",
      icon: CheckSquare,
      color: "bg-blue-500",
      items: [
        {
          id: 1,
          title: "Grundlegende Bewerbungs-Checkliste",
          description: "Alle notwendigen Dokumente und Schritte im Überblick",
          type: "checklist",
          duration: "15 min",
          difficulty: "Anfänger",
          downloads: 1234,
          format: "PDF"
        },
        {
          id: 2,
          title: "Dokumente-Checkliste für Tunesier",
          description: "Spezielle Anforderungen für tunesische Bewerber",
          type: "checklist",
          duration: "10 min",
          difficulty: "Anfänger",
          downloads: 856,
          format: "PDF"
        },
        {
          id: 3,
          title: "Visum-Antrag Checkliste",
          description: "Vollständige Auflistung aller Visum-Dokumente",
          type: "checklist",
          duration: "20 min",
          difficulty: "Fortgeschritten",
          downloads: 642,
          format: "PDF"
        }
      ]
    },
    "lebenslauf": {
      title: "Lebenslauf & Bewerbungsunterlagen",
      description: "Professionelle Vorlagen und Beispiele für deutsche Bewerbungen",
      icon: FileText,
      color: "bg-green-500",
      items: [
        {
          id: 1,
          title: "Deutscher Lebenslauf Vorlage",
          description: "Moderne CV-Vorlage nach deutschen Standards",
          type: "template",
          duration: "30 min",
          difficulty: "Anfänger",
          downloads: 2134,
          format: "DOCX"
        },
        {
          id: 2,
          title: "Motivationsschreiben Beispiele",
          description: "Musterbriefe für verschiedene Studiengänge",
          type: "template",
          duration: "45 min",
          difficulty: "Fortgeschritten",
          downloads: 1456,
          format: "PDF"
        },
        {
          id: 3,
          title: "CV Review & Feedback Service",
          description: "Persönliche Überprüfung Ihres Lebenslaufs",
          type: "service",
          duration: "2-3 Tage",
          difficulty: "Alle Level",
          downloads: 234,
          format: "Service"
        }
      ]
    },
    "dokumente": {
      title: "Dokumenten-Service",
      description: "Hilfe bei Übersetzungen, Beglaubigungen und Anerkennungen",
      icon: FileText,
      color: "bg-purple-500",
      items: [
        {
          id: 1,
          title: "Übersetzung Anleitung",
          description: "Schritt-für-Schritt Anleitung für Dokumentenübersetzungen",
          type: "guide",
          duration: "25 min",
          difficulty: "Fortgeschritten",
          downloads: 987,
          format: "PDF"
        },
        {
          id: 2,
          title: "Beglaubigung Guide",
          description: "Wo und wie Sie Dokumente beglaubigen lassen",
          type: "guide",
          duration: "15 min",
          difficulty: "Anfänger",
          downloads: 765,
          format: "PDF"
        },
        {
          id: 3,
          title: "Translator Kontakte",
          description: "Empfohlene Übersetzer in Tunesien und Deutschland",
          type: "directory",
          duration: "5 min",
          difficulty: "Alle Level",
          downloads: 543,
          format: "PDF"
        }
      ]
    },
    "videos": {
      title: "Video-Tutorials",
      description: "Schritt-für-Schritt Anleitungen und Live-Sessions",
      icon: Video,
      color: "bg-red-500",
      items: [
        {
          id: 1,
          title: "Uni-Assist Bewerbung Tutorial",
          description: "Vollständige Anleitung zur Online-Bewerbung",
          type: "video",
          duration: "45 min",
          difficulty: "Anfänger",
          downloads: 1567,
          format: "MP4"
        },
        {
          id: 2,
          title: "Studienfinanzierung erklärt",
          description: "Alle Optionen zur Studienfinanzierung",
          type: "video",
          duration: "30 min",
          difficulty: "Fortgeschritten",
          downloads: 892,
          format: "MP4"
        },
        {
          id: 3,
          title: "Wohnungssuche in Deutschland",
          description: "Praktische Tipps für die erste Wohnung",
          type: "video",
          duration: "25 min",
          difficulty: "Alle Level",
          downloads: 634,
          format: "MP4"
        }
      ]
    }
  };

  const currentCategory = categoryData[category || "checklisten"] || categoryData["checklisten"];
  const Icon = currentCategory.icon;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Anfänger': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Fortgeschritten': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'checklist': return CheckSquare;
      case 'template': return FileText;
      case 'video': return Play;
      case 'guide': return FileText;
      case 'service': return Star;
      case 'directory': return FileText;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = '/services'}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zu Services
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className={`${currentCategory.color} rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {currentCategory.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {currentCategory.description}
            </p>
          </div>

          {/* Items Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentCategory.items.map((item: any) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 rounded-lg p-2">
                          <TypeIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg leading-tight">
                            {item.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {item.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Metadata */}
                    <div className="flex items-center justify-between">
                      <Badge className={getDifficultyColor(item.difficulty)}>
                        {item.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {item.format}
                      </span>
                    </div>

                    {/* Downloads */}
                    <div className="text-xs text-muted-foreground">
                      {item.downloads.toLocaleString()} Downloads
                    </div>

                    {/* Action Button */}
                    <Button className="w-full gap-2">
                      {item.type === 'video' ? (
                        <>
                          <Play className="h-4 w-4" />
                          Video ansehen
                        </>
                      ) : item.type === 'service' ? (
                        <>
                          <Star className="h-4 w-4" />
                          Service anfragen
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          Herunterladen
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Related Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Verwandte Kategorien
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Object.entries(categoryData).map(([key, cat]) => {
                if (key === category) return null;
                const CatIcon = cat.icon;
                return (
                  <Card 
                    key={key}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => window.location.href = `/services/${key}`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`${cat.color} rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center`}>
                        <CatIcon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-medium">{cat.title}</h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Brauchen Sie persönliche Hilfe?
            </h3>
            <p className="text-muted-foreground mb-6">
              Unser Team steht Ihnen für individuelle Beratung zur Verfügung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => window.location.href = '/kontakt'}>
                Beratung buchen
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/faq'}>
                FAQ durchsuchen
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceCategory;
