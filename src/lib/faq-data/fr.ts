export const faqDataFr = {
  categories: {
    registration: "Inscription",
    documents: "Documents",
    whatsapp: "Groupes WhatsApp",
    integration: "Intégration",
    services: "Services",
    general: "Général"
  },
  questions: {
    registration: [
      {
        id: "reg-1",
        question: "Comment puis-je m'inscrire à TuniBless ?",
        answer: "Visitez notre page d'inscription et remplissez le formulaire en 3 étapes. Vous aurez besoin de vos coordonnées et d'informations sur votre localisation actuelle.",
        relatedLinks: [
          { text: "Vers l'inscription", url: "/registration" },
          { text: "Nos services", url: "/services" }
        ],
        tags: ["inscription", "formulaire", "données"],
        lastUpdated: "2024-12-15",
        isNew: false,
        isUpdated: false
      },
      {
        id: "reg-2",
        question: "L'inscription est-elle gratuite ?",
        answer: "Oui, l'inscription et tous nos services de conseil sont entièrement gratuits. Nous sommes une association à but non lucratif.",
        relatedLinks: [
          { text: "À propos", url: "/about" },
          { text: "Dons", url: "/donate" }
        ],
        tags: ["gratuit", "frais", "association"],
        lastUpdated: "2024-12-10",
        isNew: false,
        isUpdated: false
      },
      {
        id: "reg-3",
        question: "Combien de temps faut-il pour recevoir une réponse ?",
        answer: "Après l'inscription, nous vous contactons dans les 24 heures. En cas d'urgence, vous pouvez aussi utiliser directement nos groupes WhatsApp.",
        relatedLinks: [
          { text: "Contact", url: "/contact" },
          { text: "Groupes WhatsApp", url: "/whatsapp" }
        ],
        tags: ["réponse", "contact", "temps"],
        lastUpdated: "2024-12-12",
        isNew: false,
        isUpdated: true
      },
      {
        id: "reg-4",
        question: "Quelles informations dois-je fournir lors de l'inscription ?",
        answer: "Vous devez fournir votre nom, adresse e-mail, numéro de téléphone (WhatsApp), localisation actuelle et votre motivation pour l'inscription.",
        relatedLinks: [
          { text: "Formulaire d'inscription", url: "/registration" },
          { text: "Protection des données", url: "/datenschutz" }
        ],
        tags: ["données", "informations", "confidentialité"],
        lastUpdated: "2024-12-20",
        isNew: true,
        isUpdated: false
      }
    ],
    documents: [
      {
        id: "doc-1",
        question: "Quels documents ai-je besoin pour l'Allemagne ?",
        answer: "Vous avez besoin de : passeport, diplômes certifiés, acte de naissance, certificat de bonne conduite et éventuellement certificat médical. Tous les documents doivent être traduits.",
        relatedLinks: [
          { text: "Liste des documents", url: "/services/documents" },
          { text: "Téléchargements", url: "/downloads" }
        ],
        tags: ["documents", "pièces", "traduction"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-2",
        question: "Où puis-je faire traduire mes documents ?",
        answer: "Nous vous fournissons une liste de traducteurs certifiés. Vous la trouverez dans notre section ressources ou dans la section téléchargements.",
        relatedLinks: [
          { text: "Liste des traducteurs", url: "/downloads" },
          { text: "Services", url: "/services" }
        ],
        tags: ["traduction", "traducteurs", "certifié"],
        lastUpdated: "2024-12-16",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-3",
        question: "Combien de temps les documents traduits restent-ils valides ?",
        answer: "Les traductions certifiées n'ont généralement pas de date d'expiration. Assurez-vous cependant que les documents originaux sont encore valides.",
        relatedLinks: [
          { text: "Glossaire", url: "/glossar" },
          { text: "Légal", url: "/impressum" }
        ],
        tags: ["validité", "certification", "original"],
        lastUpdated: "2024-12-14",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-4",
        question: "Combien coûte la traduction de mes documents ?",
        answer: "Les coûts varient selon le traducteur et le volume. Comptez 25-50€ par page pour les traductions certifiées. Nous avons des remises partenaires avec certains traducteurs.",
        relatedLinks: [
          { text: "Traducteurs partenaires", url: "/downloads" },
          { text: "Aperçu des coûts", url: "/services" }
        ],
        tags: ["coûts", "prix", "remise"],
        lastUpdated: "2024-12-19",
        isNew: false,
        isUpdated: true
      }
    ],
    whatsapp: [
      {
        id: "wa-1",
        question: "Comment rejoindre un groupe WhatsApp ?",
        answer: "Après l'inscription, vous recevez automatiquement le lien vers votre groupe WhatsApp régional basé sur votre localisation.",
        relatedLinks: [
          { text: "Inscription", url: "/registration" },
          { text: "Groupes régionaux", url: "/regions" }
        ],
        tags: ["whatsapp", "groupe", "régional"],
        lastUpdated: "2024-12-17",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-2",
        question: "Quelles langues sont utilisées dans les groupes ?",
        answer: "Principalement l'arabe et le français. Les termes allemands sont expliqués. Nos coordinateurs parlent plusieurs langues.",
        relatedLinks: [
          { text: "Notre équipe", url: "/team" },
          { text: "Langues", url: "/languages" }
        ],
        tags: ["langues", "arabe", "français", "allemand"],
        lastUpdated: "2024-12-13",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-3",
        question: "Y a-t-il des règles pour les groupes WhatsApp ?",
        answer: "Oui, nous avons des règles de groupe pour un comportement respectueux. Elles vous seront communiquées lors de votre adhésion au groupe.",
        relatedLinks: [
          { text: "Directives communautaires", url: "/community-guidelines" },
          { text: "Code de conduite", url: "/code-of-conduct" }
        ],
        tags: ["règles", "comportement", "respect"],
        lastUpdated: "2024-12-11",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-4",
        question: "Puis-je rejoindre plusieurs groupes WhatsApp ?",
        answer: "Oui, vous pouvez rejoindre votre groupe régional ainsi que des groupes thématiques (par ex. études, travail).",
        relatedLinks: [
          { text: "Aperçu des groupes", url: "/whatsapp-groups" },
          { text: "Thèmes", url: "/topics" }
        ],
        tags: ["plusieurs groupes", "thèmes", "spécialisation"],
        lastUpdated: "2024-12-21",
        isNew: true,
        isUpdated: false
      }
    ],
    integration: [
      {
        id: "int-1",
        question: "Combien de temps dure le processus d'intégration ?",
        answer: "Le processus d'intégration varie selon la situation individuelle. En moyenne, cela prend 6-18 mois de la préparation à l'arrivée en Allemagne.",
        relatedLinks: [
          { text: "Feuille de route", url: "/roadmap" },
          { text: "Calendrier", url: "/timeline" }
        ],
        tags: ["temps", "durée", "processus"],
        lastUpdated: "2024-12-19",
        isNew: false,
        isUpdated: false
      },
      {
        id: "int-2",
        question: "Quel soutien offre TuniBless ?",
        answer: "Nous offrons des conseils gratuits, aide aux documents, listes de contrôle, webinaires, support WhatsApp et une communauté active de plus de 1200 membres.",
        relatedLinks: [
          { text: "Nos services", url: "/services" },
          { text: "À propos", url: "/about" }
        ],
        tags: ["soutien", "conseil", "communauté"],
        lastUpdated: "2024-12-20",
        isNew: false,
        isUpdated: true
      },
      {
        id: "int-3",
        question: "Dois-je savoir parler allemand ?",
        answer: "Les connaissances de base sont utiles, mais pas obligatoires. Beaucoup de nos membres apprennent l'allemand pendant le processus. Nous avons des ressources et du soutien en allemand.",
        relatedLinks: [
          { text: "Apprendre l'allemand", url: "/german-learning" },
          { text: "Cours de langue", url: "/language-courses" }
        ],
        tags: ["allemand", "langue", "apprendre"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      }
    ],
    services: [
      {
        id: "srv-1",
        question: "Quels services sont disponibles ?",
        answer: "Nous offrons des listes de contrôle, modèles de documents, aide à la traduction, conseil personnel, webinaires et support communautaire.",
        relatedLinks: [
          { text: "Tous les services", url: "/services" },
          { text: "Webinaires", url: "/events" }
        ],
        tags: ["services", "listes", "conseil"],
        lastUpdated: "2024-12-15",
        isNew: false,
        isUpdated: false
      },
      {
        id: "srv-2",
        question: "Puis-je obtenir un soutien sur place ?",
        answer: "Oui, nous avons des coordinateurs régionaux dans différentes villes d'Allemagne et de Tunisie qui offrent des consultations personnelles.",
        relatedLinks: [
          { text: "Notre équipe", url: "/team" },
          { text: "Contact", url: "/contact" }
        ],
        tags: ["sur place", "coordinateurs", "personnel"],
        lastUpdated: "2024-12-16",
        isNew: false,
        isUpdated: false
      },
      {
        id: "srv-3",
        question: "Y a-t-il des webinaires en ligne ?",
        answer: "Oui, nous organisons régulièrement des webinaires en ligne sur différents sujets comme les études, visa, recherche d'emploi et intégration.",
        relatedLinks: [
          { text: "Événements", url: "/events" },
          { text: "Archive webinaires", url: "/webinars" }
        ],
        tags: ["webinaires", "en ligne", "formations"],
        lastUpdated: "2024-12-22",
        isNew: true,
        isUpdated: false
      }
    ],
    general: [
      {
        id: "gen-1",
        question: "Qu'est-ce que TuniBless ?",
        answer: "TuniBless e.V. est une association à but non lucratif qui soutient les familles et jeunes tunisiens dans leur intégration en Allemagne.",
        relatedLinks: [
          { text: "À propos", url: "/about" },
          { text: "Notre mission", url: "/mission" }
        ],
        tags: ["tunibless", "association", "mission"],
        lastUpdated: "2024-12-10",
        isNew: false,
        isUpdated: false
      },
      {
        id: "gen-2",
        question: "Comment puis-je soutenir TuniBless ?",
        answer: "Vous pouvez nous soutenir en tant qu'aide bénévole, devenir membre ou faire un don. Toute forme de soutien aide notre communauté.",
        relatedLinks: [
          { text: "Devenir bénévole", url: "/volunteer" },
          { text: "Adhésion", url: "/membership" },
          { text: "Dons", url: "/donate" }
        ],
        tags: ["soutenir", "bénévole", "dons"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      },
      {
        id: "gen-3",
        question: "TuniBless est-il seulement pour les Tunisiens ?",
        answer: "Principalement nous soutenons les familles tunisiennes, mais nous aidons aussi d'autres personnes arabophones pour des demandes similaires.",
        relatedLinks: [
          { text: "Public cible", url: "/target-audience" },
          { text: "Inclusion", url: "/inclusion" }
        ],
        tags: ["public cible", "tunisiens", "arabe"],
        lastUpdated: "2024-12-14",
        isNew: false,
        isUpdated: false
      }
    ]
  }
};
