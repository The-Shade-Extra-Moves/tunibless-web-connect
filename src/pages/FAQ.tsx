import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      category: "Registrierung",
      questions: [
        {
          question: "Wie kann ich mich bei TuniBless registrieren?",
          answer: "Besuchen Sie unsere Registrierungsseite und füllen Sie das 3-Schritte-Formular aus. Sie benötigen Ihre Kontaktdaten und Informationen zu Ihrem aktuellen Standort."
        },
        {
          question: "Ist die Registrierung kostenlos?",
          answer: "Ja, die Registrierung und alle unsere Beratungsservices sind vollständig kostenlos. Wir sind ein gemeinnütziger Verein."
        }
      ]
    },
    {
      category: "Dokumente",
      questions: [
        {
          question: "Welche Dokumente benötige ich?",
          answer: "Sie benötigen: Reisepass, beglaubigte Bildungsabschlüsse, Geburtsurkunde, Führungszeugnis und ggf. Gesundheitszeugnis. Alle Dokumente sollten übersetzt werden."
        },
        {
          question: "Wo kann ich meine Dokumente übersetzen lassen?",
          answer: "Wir stellen Ihnen eine Liste zertifizierter Übersetzer zur Verfügung. Diese finden Sie in unserem Ressourcen-Bereich."
        }
      ]
    },
    {
      category: "WhatsApp Gruppen",
      questions: [
        {
          question: "Wie trete ich einer WhatsApp-Gruppe bei?",
          answer: "Nach der Registrierung erhalten Sie automatisch den Link zu Ihrer regionalen WhatsApp-Gruppe basierend auf Ihrem Standort."
        },
        {
          question: "Welche Sprachen werden in den Gruppen verwendet?",
          answer: "Hauptsächlich Arabisch und Französisch. Deutsche Begriffe werden erklärt. Unsere Koordinatoren sprechen mehrere Sprachen."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Häufig gestellte Fragen</h1>
            <p className="text-xl text-muted-foreground">Antworten auf die wichtigsten Fragen zur Integration</p>
          </div>

          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;