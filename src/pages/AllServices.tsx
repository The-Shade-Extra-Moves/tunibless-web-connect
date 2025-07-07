import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CheckCircle, 
  Users, 
  Calendar, 
  Download, 
  Search,
  Filter,
  Video,
  MessageSquare,
  FileCheck,
  Award
} from "lucide-react";

const AllServices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: 1,
      title: "Integrations-Checkliste",
      description: "Umfassende Checkliste mit allen erforderlichen Schritten für die erfolgreiche Integration",
      category: "checklisten",
      type: "PDF Download",
      icon: CheckCircle,
      downloadLink: "#",
      popular: true
    },
    {
      id: 2,
      title: "Deutscher Lebenslauf Vorlage",
      description: "Professionelle CV-Vorlage angepasst an deutsche Standards",
      category: "cv",
      type: "Word Template",
      icon: FileText,
      downloadLink: "#",
      popular: true
    },
    {
      id: 3,
      title: "Bewerbungsschreiben Muster",
      description: "Musterbewerbungsschreiben für verschiedene Branchen",
      category: "cv",
      type: "PDF Template",
      icon: FileText,
      downloadLink: "#"
    },
    {
      id: 4,
      title: "Dokumente-Upload Portal",
      description: "Sicherer Upload für Zeugnisse, Pässe und andere wichtige Dokumente",
      category: "dokumente",
      type: "Online Tool",
      icon: FileCheck,
      downloadLink: "#"
    },
    {
      id: 5,
      title: "Übersetzer-Netzwerk",
      description: "Liste zertifizierter Übersetzer für offizielle Dokumente",
      category: "dokumente",
      type: "Kontaktliste",
      icon: Users,
      downloadLink: "#"
    },
    {
      id: 6,
      title: "Bewerbungstraining Video",
      description: "Schritt-für-Schritt Anleitung für erfolgreiche Bewerbungsgespräche",
      category: "tutorials",
      type: "Video",
      icon: Video,
      downloadLink: "#"
    },
    {
      id: 7,
      title: "Livestream Kalender",
      description: "Termine für wöchentliche Q&A Sessions und Webinare",
      category: "termine",
      type: "Kalender",
      icon: Calendar,
      downloadLink: "#"
    },
    {
      id: 8,
      title: "WhatsApp Gruppen-Links",
      description: "Direkte Links zu regionalen WhatsApp-Gruppen",
      category: "community",
      type: "Links",
      icon: MessageSquare,
      downloadLink: "#"
    },
    {
      id: 9,
      title: "Berufsfeld-Guide Gesundheit",
      description: "Spezielle Informationen für Gesundheitsberufe in Deutschland",
      category: "berufe",
      type: "PDF Guide",
      icon: Award,
      downloadLink: "#"
    },
    {
      id: 10,
      title: "Berufsfeld-Guide Technik",
      description: "Technische Ausbildungen und deren Anforderungen",
      category: "berufe",
      type: "PDF Guide",
      icon: Award,
      downloadLink: "#"
    },
    {
      id: 11,
      title: "Deutsch Lernmaterialien",
      description: "Kostenlose Materialien zum Deutschlernen für Anfänger",
      category: "tutorials",
      type: "PDF + Audio",
      icon: Video,
      downloadLink: "#"
    },
    {
      id: 12,
      title: "Integrationskurs-Finder",
      description: "Tool zum Finden von Integrationskursen in Ihrer Nähe",
      category: "tools",
      type: "Online Tool",
      icon: Search,
      downloadLink: "#"
    }
  ];

  const categories = [
    { id: "all", label: "Alle Ressourcen", count: services.length },
    { id: "checklisten", label: "Checklisten", count: services.filter(s => s.category === "checklisten").length },
    { id: "cv", label: "CV & Bewerbung", count: services.filter(s => s.category === "cv").length },
    { id: "dokumente", label: "Dokumente", count: services.filter(s => s.category === "dokumente").length },
    { id: "tutorials", label: "Tutorials", count: services.filter(s => s.category === "tutorials").length },
    { id: "berufe", label: "Berufsfelder", count: services.filter(s => s.category === "berufe").length },
    { id: "community", label: "Community", count: services.filter(s => s.category === "community").length },
    { id: "tools", label: "Tools", count: services.filter(s => s.category === "tools").length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Alle Ressourcen</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Umfassende Sammlung aller Tools, Checklisten, Vorlagen und Materialien 
              für Ihre erfolgreiche Integration in Deutschland.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Ressourcen durchsuchen..."
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
                  variant={selectedCategory === category.id ? "hero" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Filter className="w-4 h-4 mr-1" />
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Popular Resources */}
          {selectedCategory === "all" && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Beliebte Ressourcen</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter(service => service.popular).map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={service.id} className="p-6 hover:shadow-medium transition-all duration-300 border-primary/20">
                      <div className="flex items-start justify-between mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                        <Badge variant="secondary">Beliebt</Badge>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {service.type}
                        </span>
                        <Button size="sm" variant="hero">
                          <Download className="w-4 h-4 mr-1" />
                          Herunterladen
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Resources */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {selectedCategory === "all" ? "Alle Ressourcen" : categories.find(c => c.id === selectedCategory)?.label}
              </h2>
              <span className="text-muted-foreground">
                {filteredServices.length} {filteredServices.length === 1 ? "Ressource" : "Ressourcen"}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.id} className="p-6 hover:shadow-medium transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                      {service.popular && (
                        <Badge variant="secondary" className="text-xs">Beliebt</Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{service.description}</p>
                    <div className="space-y-3">
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded block text-center">
                        {service.type}
                      </span>
                      <Button size="sm" variant="outline" className="w-full">
                        <Download className="w-4 h-4 mr-1" />
                        Herunterladen
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Keine Ressourcen gefunden</h3>
                <p className="text-muted-foreground">
                  Versuchen Sie andere Suchbegriffe oder wählen Sie eine andere Kategorie.
                </p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-primary/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Benötigen Sie persönliche Beratung?</h2>
            <p className="text-muted-foreground mb-6">
              Unser Team steht Ihnen für individuelle Fragen zur Verfügung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp Gruppe beitreten
              </Button>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Beratungstermin buchen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;