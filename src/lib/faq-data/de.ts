export const faqDataDe = {
  categories: {
    registration: "Registrierung",
    documents: "Dokumente", 
    whatsapp: "WhatsApp Gruppen",
    integration: "Integration",
    services: "Services",
    general: "Allgemein"
  },
  questions: {
    registration: [
      {
        id: "reg-1",
        question: "Wie kann ich mich bei TuniBless registrieren?",
        answer: "Besuchen Sie unsere Registrierungsseite und füllen Sie das 3-Schritte-Formular aus. Sie benötigen Ihre Kontaktdaten und Informationen zu Ihrem aktuellen Standort.",
        relatedLinks: [
          { text: "Zur Registrierung", url: "/registration" },
          { text: "Unsere Services", url: "/services" }
        ],
        tags: ["registrierung", "anmeldung", "formular"],
        lastUpdated: "2024-12-15",
        isNew: false,
        isUpdated: false
      },
      {
        id: "reg-2", 
        question: "Ist die Registrierung kostenlos?",
        answer: "Ja, die Registrierung und alle unsere Beratungsservices sind vollständig kostenlos. Wir sind ein gemeinnütziger Verein.",
        relatedLinks: [
          { text: "Über uns", url: "/about" },
          { text: "Spenden", url: "/donate" }
        ],
        tags: ["kostenlos", "gebühren", "verein"],
        lastUpdated: "2024-12-10",
        isNew: false,
        isUpdated: false
      },
      {
        id: "reg-3",
        question: "Wie lange dauert es, bis ich eine Antwort erhalte?",
        answer: "Nach der Registrierung kontaktieren wir Sie innerhalb von 24 Stunden. In dringenden Fällen können Sie auch direkt unsere WhatsApp-Gruppen nutzen.",
        relatedLinks: [
          { text: "Kontakt", url: "/contact" },
          { text: "WhatsApp Gruppen", url: "/whatsapp" }
        ],
        tags: ["antwort", "kontakt", "zeit"],
        lastUpdated: "2024-12-12",
        isNew: false,
        isUpdated: true
      },
      {
        id: "reg-4",
        question: "Welche Informationen muss ich bei der Registrierung angeben?",
        answer: "Sie müssen Ihren Namen, E-Mail-Adresse, Telefonnummer (WhatsApp), aktuellen Standort und Ihre Motivation für die Registrierung angeben.",
        relatedLinks: [
          { text: "Registrierungsformular", url: "/registration" },
          { text: "Datenschutz", url: "/datenschutz" }
        ],
        tags: ["daten", "informationen", "privatsphäre"],
        lastUpdated: "2024-12-20",
        isNew: true,
        isUpdated: false
      }
    ],
    documents: [
      {
        id: "doc-1",
        question: "Welche Dokumente benötige ich für Deutschland?",
        answer: "Sie benötigen: Reisepass, beglaubigte Bildungsabschlüsse, Geburtsurkunde, Führungszeugnis und ggf. Gesundheitszeugnis. Alle Dokumente sollten übersetzt werden.",
        relatedLinks: [
          { text: "Dokumenten-Checkliste", url: "/services/documents" },
          { text: "Downloads", url: "/downloads" }
        ],
        tags: ["dokumente", "unterlagen", "übersetzung"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-2",
        question: "Wo kann ich meine Dokumente übersetzen lassen?",
        answer: "Wir stellen Ihnen eine Liste zertifizierter Übersetzer zur Verfügung. Diese finden Sie in unserem Ressourcen-Bereich oder in der Download-Sektion.",
        relatedLinks: [
          { text: "Übersetzer-Liste", url: "/downloads" },
          { text: "Services", url: "/services" }
        ],
        tags: ["übersetzung", "übersetzer", "zertifiziert"],
        lastUpdated: "2024-12-16",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-3",
        question: "Wie lange sind übersetzte Dokumente gültig?",
        answer: "Beglaubigte Übersetzungen haben in der Regel keine Verfallsdauer. Achten Sie jedoch darauf, dass die Originaldokumente noch gültig sind.",
        relatedLinks: [
          { text: "Glossar", url: "/glossar" },
          { text: "Rechtliches", url: "/impressum" }
        ],
        tags: ["gültigkeit", "beglaubigung", "original"],
        lastUpdated: "2024-12-14",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-4",
        question: "Was kostet die Übersetzung meiner Dokumente?",
        answer: "Die Kosten variieren je nach Übersetzer und Umfang. Rechnen Sie mit 25-50€ pro Seite für beglaubigte Übersetzungen. Wir haben Partnerrabatte mit einigen Übersetzern.",
        relatedLinks: [
          { text: "Übersetzer-Partner", url: "/downloads" },
          { text: "Kostenübersicht", url: "/services" }
        ],
        tags: ["kosten", "preise", "rabatt"],
        lastUpdated: "2024-12-19",
        isNew: false,
        isUpdated: true
      }
    ],
    whatsapp: [
      {
        id: "wa-1",
        question: "Wie trete ich einer WhatsApp-Gruppe bei?",
        answer: "Nach der Registrierung erhalten Sie automatisch den Link zu Ihrer regionalen WhatsApp-Gruppe basierend auf Ihrem Standort.",
        relatedLinks: [
          { text: "Registrierung", url: "/registration" },
          { text: "Regionale Gruppen", url: "/regions" }
        ],
        tags: ["whatsapp", "gruppe", "regional"],
        lastUpdated: "2024-12-17",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-2",
        question: "Welche Sprachen werden in den Gruppen verwendet?",
        answer: "Hauptsächlich Arabisch und Französisch. Deutsche Begriffe werden erklärt. Unsere Koordinatoren sprechen mehrere Sprachen.",
        relatedLinks: [
          { text: "Unser Team", url: "/team" },
          { text: "Sprachen", url: "/languages" }
        ],
        tags: ["sprachen", "arabisch", "französisch", "deutsch"],
        lastUpdated: "2024-12-13",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-3",
        question: "Gibt es Regeln für die WhatsApp-Gruppen?",
        answer: "Ja, wir haben Gruppenregeln für einen respektvollen Umgang. Diese werden Ihnen beim Beitritt zur Gruppe mitgeteilt.",
        relatedLinks: [
          { text: "Community-Richtlinien", url: "/community-guidelines" },
          { text: "Verhaltenskodex", url: "/code-of-conduct" }
        ],
        tags: ["regeln", "verhalten", "respekt"],
        lastUpdated: "2024-12-11",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-4",
        question: "Kann ich mehreren WhatsApp-Gruppen beitreten?",
        answer: "Ja, Sie können sowohl Ihrer regionalen Gruppe als auch themenspezifischen Gruppen (z.B. Studium, Arbeit) beitreten.",
        relatedLinks: [
          { text: "Gruppenübersicht", url: "/whatsapp-groups" },
          { text: "Themen", url: "/topics" }
        ],
        tags: ["mehrere gruppen", "themen", "spezialisierung"],
        lastUpdated: "2024-12-21",
        isNew: true,
        isUpdated: false
      }
    ],
    integration: [
      {
        id: "int-1",
        question: "Wie lange dauert der Integrationsprozess?",
        answer: "Der Integrationsprozess variiert je nach individueller Situation. Im Durchschnitt dauert es 6-18 Monate von der Vorbereitung bis zur Ankunft in Deutschland.",
        relatedLinks: [
          { text: "Roadmap", url: "/roadmap" },
          { text: "Zeitplan", url: "/timeline" }
        ],
        tags: ["zeit", "dauer", "prozess"],
        lastUpdated: "2024-12-19",
        isNew: false,
        isUpdated: false
      },
      {
        id: "int-2",
        question: "Welche Unterstützung bietet TuniBless?",
        answer: "Wir bieten kostenlose Beratung, Dokumentenhilfe, Checklisten, Webinare, WhatsApp-Support und eine aktive Community mit über 1200 Mitgliedern.",
        relatedLinks: [
          { text: "Unsere Services", url: "/services" },
          { text: "Über uns", url: "/about" }
        ],
        tags: ["unterstützung", "beratung", "community"],
        lastUpdated: "2024-12-20",
        isNew: false,
        isUpdated: true
      },
      {
        id: "int-3",
        question: "Muss ich Deutsch sprechen können?",
        answer: "Grundkenntnisse sind hilfreich, aber nicht zwingend erforderlich. Viele unserer Mitglieder lernen Deutsch während des Prozesses. Wir haben deutschsprachige Ressourcen und Unterstützung.",
        relatedLinks: [
          { text: "Deutsch lernen", url: "/german-learning" },
          { text: "Sprachkurse", url: "/language-courses" }
        ],
        tags: ["deutsch", "sprache", "lernen"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      }
    ],
    services: [
      {
        id: "srv-1",
        question: "Welche Services sind verfügbar?",
        answer: "Wir bieten Checklisten, Dokumentenvorlagen, Übersetzungshilfe, persönliche Beratung, Webinare und Community-Support.",
        relatedLinks: [
          { text: "Alle Services", url: "/services" },
          { text: "Webinare", url: "/events" }
        ],
        tags: ["services", "checklisten", "beratung"],
        lastUpdated: "2024-12-15",
        isNew: false,
        isUpdated: false
      },
      {
        id: "srv-2",
        question: "Kann ich auch vor Ort Unterstützung erhalten?",
        answer: "Ja, wir haben regionale Koordinatoren in verschiedenen Städten in Deutschland und Tunesien, die persönliche Beratungen anbieten.",
        relatedLinks: [
          { text: "Unser Team", url: "/team" },
          { text: "Kontakt", url: "/contact" }
        ],
        tags: ["vor ort", "koordinatoren", "persönlich"],
        lastUpdated: "2024-12-16",
        isNew: false,
        isUpdated: false
      },
      {
        id: "srv-3",
        question: "Gibt es Online-Webinare?",
        answer: "Ja, wir organisieren regelmäßig Online-Webinare zu verschiedenen Themen wie Studium, Visum, Arbeitssuche und Integration.",
        relatedLinks: [
          { text: "Veranstaltungen", url: "/events" },
          { text: "Webinar-Archiv", url: "/webinars" }
        ],
        tags: ["webinare", "online", "schulungen"],
        lastUpdated: "2024-12-22",
        isNew: true,
        isUpdated: false
      }
    ],
    general: [
      {
        id: "gen-1",
        question: "Was ist TuniBless?",
        answer: "TuniBless e.V. ist ein gemeinnütziger Verein, der tunesische Familien und Jugendliche bei ihrer Integration in Deutschland unterstützt.",
        relatedLinks: [
          { text: "Über uns", url: "/about" },
          { text: "Unsere Mission", url: "/mission" }
        ],
        tags: ["tunibless", "verein", "mission"],
        lastUpdated: "2024-12-10",
        isNew: false,
        isUpdated: false
      },
      {
        id: "gen-2",
        question: "Wie kann ich TuniBless unterstützen?",
        answer: "Sie können uns als Helfer unterstützen, Mitglied werden oder spenden. Jede Form der Unterstützung hilft unserer Gemeinschaft.",
        relatedLinks: [
          { text: "Helfer werden", url: "/volunteer" },
          { text: "Mitgliedschaft", url: "/membership" },
          { text: "Spenden", url: "/donate" }
        ],
        tags: ["unterstützen", "helfer", "spenden"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      },
      {
        id: "gen-3",
        question: "Ist TuniBless nur für Tunesier?",
        answer: "Primär unterstützen wir tunesische Familien, aber wir helfen auch anderen arabischsprachigen Personen bei ähnlichen Anliegen.",
        relatedLinks: [
          { text: "Zielgruppe", url: "/target-audience" },
          { text: "Inklusion", url: "/inclusion" }
        ],
        tags: ["zielgruppe", "tunesier", "arabisch"],
        lastUpdated: "2024-12-14",
        isNew: false,
        isUpdated: false
      }
    ]
  }
};
