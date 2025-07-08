import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, BookOpen, ArrowRight } from "lucide-react";

const Glossar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  const glossaryTerms = [
    {
      id: 1,
      term: "APS",
      definition: "Akademische Prüfstelle - Überprüfung der Bildungsnachweise durch die Deutsche Botschaft",
      category: "Bewerbung",
      letter: "A",
      synonyms: ["Akademische Prüfstelle"],
      examples: ["Sie müssen eine APS-Bescheinigung vorlegen"],
      relatedTerms: ["Zeugnisprüfung", "Botschaft"]
    },
    {
      id: 2,
      term: "Bewerbungsmappe",
      definition: "Vollständige Sammlung aller Dokumente für die Hochschulbewerbung",
      category: "Bewerbung",
      letter: "B",
      synonyms: ["Bewerbungsunterlagen"],
      examples: ["Ihre Bewerbungsmappe sollte vollständig sein"],
      relatedTerms: ["Zeugnisse", "Lebenslauf", "Motivationsschreiben"]
    },
    {
      id: 3,
      term: "DSH",
      definition: "Deutsche Sprachprüfung für den Hochschulzugang - erforderlich für das Studium",
      category: "Sprache",
      letter: "D", 
      synonyms: ["Deutsche Sprachprüfung"],
      examples: ["Sie benötigen DSH-2 für die meisten Studiengänge"],
      relatedTerms: ["TestDaF", "Deutschkenntnisse"]
    },
    {
      id: 4,
      term: "Erasmus+",
      definition: "EU-Austauschprogramm für Studierende, Lehrende und Hochschulpersonal",
      category: "Programme",
      letter: "E",
      synonyms: ["Erasmus Plus"],
      examples: ["Mit Erasmus+ können Sie in Europa studieren"],
      relatedTerms: ["Austauschstudium", "EU"]
    },
    {
      id: 5,
      term: "Finanzierungsnachweis",
      definition: "Beleg über ausreichende finanzielle Mittel für das Studium (ca. 11.208€/Jahr)",
      category: "Finanzen",
      letter: "F",
      synonyms: ["Finanznachweis", "Sperrkonto"],
      examples: ["Der Finanzierungsnachweis ist für das Visum erforderlich"],
      relatedTerms: ["Sperrkonto", "Visum", "BAföG"]
    },
    {
      id: 6,
      term: "Numerus Clausus (NC)",
      definition: "Zulassungsbeschränkung - bestimmte Anzahl verfügbarer Studienplätze",
      category: "Zulassung",
      letter: "N",
      synonyms: ["Zulassungsbeschränkung", "NC"],
      examples: ["Medizin hat einen hohen NC"],
      relatedTerms: ["Wartesemester", "Abiturnote"]
    },
    {
      id: 7,
      term: "TestDaF",
      definition: "Test Deutsch als Fremdsprache - standardisierter Deutschtest für Hochschulen",
      category: "Sprache",
      letter: "T",
      synonyms: ["Test Deutsch als Fremdsprache"],
      examples: ["TestDaF 4 in allen Bereichen erforderlich"],
      relatedTerms: ["DSH", "Sprachnachweis"]
    },
    {
      id: 8,
      term: "Uni-Assist",
      definition: "Zentralstelle für ausländische Studienbewerber - prüft internationale Bewerbungen",
      category: "Bewerbung",
      letter: "U",
      synonyms: ["Uni Assist"],
      examples: ["Ihre Bewerbung läuft über Uni-Assist"],
      relatedTerms: ["Bewerbung", "VPD", "Hochschule"]
    },
    {
      id: 9,
      term: "VPD",
      definition: "Vorprüfungsdokumentation - Bescheinigung von Uni-Assist über Bewerbungsunterlagen",
      category: "Bewerbung",
      letter: "V",
      synonyms: ["Vorprüfungsdokumentation"],
      examples: ["Die VPD wird an die Hochschulen weitergeleitet"],
      relatedTerms: ["Uni-Assist", "Zeugnisanerkennung"]
    },
    {
      id: 10,
      term: "Wartesemester",
      definition: "Semester zwischen Schulabschluss und Studienbeginn - verbessert NC-Chancen",
      category: "Zulassung",
      letter: "W",
      synonyms: ["Wartezeit"],
      examples: ["Nach 2 Wartesemestern steigen Ihre Chancen"],
      relatedTerms: ["Numerus Clausus", "Zulassung"]
    }
  ];

  // Generate alphabet for quick navigation
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  // Get unique letters that have terms
  const availableLetters = [...new Set(glossaryTerms.map(term => term.letter))].sort();

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = searchTerm === "" || 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.synonyms.some(synonym => synonym.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLetter = selectedLetter === "" || term.letter === selectedLetter;
    
    return matchesSearch && matchesLetter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Glossar 📖
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wichtige Begriffe rund um das Studium in Deutschland - verständlich erklärt
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Begriff suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Alphabet Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedLetter === "" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLetter("")}
              >
                Alle
              </Button>
              {alphabet.map((letter) => (
                <Button
                  key={letter}
                  variant={selectedLetter === letter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLetter(letter)}
                  disabled={!availableLetters.includes(letter)}
                  className="w-10 h-10 p-0"
                >
                  {letter}
                </Button>
              ))}
            </div>
          </div>

          {/* Terms List */}
          <div className="space-y-6">
            {filteredTerms.map((term) => (
              <Card key={term.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-primary">
                        {term.term}
                      </CardTitle>
                      {term.synonyms.length > 0 && (
                        <CardDescription className="mt-1">
                          Auch bekannt als: {term.synonyms.join(", ")}
                        </CardDescription>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                        {term.category}
                      </span>
                      <div className="bg-muted w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {term.letter}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    {term.definition}
                  </p>

                  {term.examples.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                        Beispiel
                      </h4>
                      <p className="text-sm italic text-muted-foreground">
                        "{term.examples[0]}"
                      </p>
                    </div>
                  )}

                  {term.relatedTerms.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                        Verwandte Begriffe
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTerms.map((relatedTerm, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            className="h-auto p-1 text-primary hover:text-primary/80"
                            onClick={() => setSearchTerm(relatedTerm)}
                          >
                            {relatedTerm}
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Keine Begriffe gefunden. Versuchen Sie andere Suchbegriffe.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLetter("");
                }}
              >
                Alle Begriffe anzeigen
              </Button>
            </div>
          )}

          {/* Help Section */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Begriff nicht gefunden?
            </h3>
            <p className="text-muted-foreground mb-6">
              Lassen Sie uns wissen, welche Begriffe Sie vermissen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.location.href = '/kontakt'}>
                Begriff vorschlagen
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

export default Glossar;
