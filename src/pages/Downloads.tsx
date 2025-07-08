import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  Download, 
  FileText, 
  Video, 
  Image, 
  Search,
  Filter,
  Eye
} from "lucide-react";

const Downloads = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Alle", count: 24 },
    { id: "checklisten", name: "Checklisten", count: 8 },
    { id: "templates", name: "Vorlagen", count: 6 },
    { id: "guides", name: "Anleitungen", count: 5 },
    { id: "forms", name: "Formulare", count: 3 },
    { id: "videos", name: "Videos", count: 2 }
  ];

  const files = [
    {
      id: 1,
      title: "Bewerbungs-Checkliste Deutschland",
      description: "Vollständige Checkliste für Studienbewerber aus Tunesien",
      category: "checklisten",
      type: "pdf",
      size: "2.4 MB",
      downloads: 1234,
      language: "🇩🇪 DE",
      tags: ["Bewerbung", "Studium", "Deutschland"],
      preview: true
    },
    {
      id: 2,
      title: "Lebenslauf Vorlage Deutsch",
      description: "Professionelle CV-Vorlage für deutsche Universitäten",
      category: "templates",
      type: "docx",
      size: "156 KB",
      downloads: 856,
      language: "🇩🇪 DE",
      tags: ["Lebenslauf", "CV", "Vorlage"],
      preview: true
    },
    {
      id: 3,
      title: "Motivationsschreiben Muster",
      description: "Beispiele und Tipps für überzeugende Motivationsschreiben",
      category: "templates",
      type: "pdf",
      size: "1.8 MB",
      downloads: 642,
      language: "🇩🇪 DE",
      tags: ["Motivationsschreiben", "Bewerbung", "Beispiele"],
      preview: true
    },
    {
      id: 4,
      title: "Uni-Assist Anleitung",
      description: "Schritt-für-Schritt Anleitung für Uni-Assist Bewerbungen",
      category: "guides",
      type: "pdf",
      size: "3.2 MB",
      downloads: 789,
      language: "🇩🇪🇦🇷 DE/AR",
      tags: ["Uni-Assist", "Bewerbung", "Anleitung"],
      preview: true
    },
    {
      id: 5,
      title: "Sprachzertifikat Übersicht",
      description: "Anerkannte Deutschtests und Anforderungen",
      category: "guides",
      type: "pdf",
      size: "1.1 MB",
      downloads: 523,
      language: "🇩🇪 DE",
      tags: ["Sprache", "TestDaF", "DSH"],
      preview: false
    },
    {
      id: 6,
      title: "Finanzierungsnachweis Vorlage",
      description: "Formular für den Nachweis der Studienfinanzierung",
      category: "forms",
      type: "pdf",
      size: "485 KB",
      downloads: 467,
      language: "🇩🇪 DE",
      tags: ["Finanzierung", "Visum", "Formular"],
      preview: true
    },
    {
      id: 7,
      title: "Bewerbungsvideo Tutorial",
      description: "Video-Anleitung zum Bewerbungsprozess",
      category: "videos",
      type: "mp4",
      size: "45.2 MB",
      downloads: 234,
      language: "🇦🇷 AR",
      tags: ["Video", "Tutorial", "Bewerbung"],
      preview: true
    },
    {
      id: 8,
      title: "Wohnungssuche Deutschland",
      description: "Tipps und Tricks für die Wohnungssuche",
      category: "guides",
      type: "pdf",
      size: "2.1 MB",
      downloads: 445,
      language: "🇩🇪 DE",
      tags: ["Wohnung", "Leben", "Deutschland"],
      preview: true
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'docx': return '📝';
      case 'mp4': return '🎥';
      default: return '📁';
    }
  };

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || file.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (file: any) => {
    // Track download
    console.log(`Download tracked: ${file.title}`);
    // Implement actual download logic
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Downloads & Ressourcen 📚
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alle wichtigen Dokumente, Vorlagen und Anleitungen für Ihre Bewerbung
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Dokumente durchsuchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="gap-2"
                >
                  <Filter className="h-3 w-3" />
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Files Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredFiles.map((file) => (
              <Card key={file.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getFileIcon(file.type)}</span>
                      <div>
                        <CardTitle className="text-lg leading-tight">
                          {file.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs">{file.language}</span>
                          <span className="text-xs text-muted-foreground">
                            {file.size}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {file.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {file.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="text-xs text-muted-foreground">
                    {file.downloads.toLocaleString()} Downloads
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleDownload(file)}
                      className="flex-1 gap-2"
                      size="sm"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    {file.preview && (
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredFiles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Keine Dateien gefunden. Versuchen Sie andere Suchbegriffe.
              </p>
            </div>
          )}

          {/* Help Section */}
          <div className="mt-16 text-center p-8 bg-muted/50 rounded-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Dokument nicht gefunden?
            </h3>
            <p className="text-muted-foreground mb-6">
              Wir helfen Ihnen gerne bei der Suche nach spezifischen Dokumenten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.location.href = '/kontakt'}>
                Kontakt aufnehmen
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/faq'}>
                FAQ durchsuchen
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Downloads;
