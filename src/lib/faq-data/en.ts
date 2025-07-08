export const faqDataEn = {
  categories: {
    registration: "Registration",
    documents: "Documents",
    whatsapp: "WhatsApp Groups",
    integration: "Integration",
    services: "Services",
    general: "General"
  },
  questions: {
    registration: [
      {
        id: "reg-1",
        question: "How can I register with TuniBless?",
        answer: "Visit our registration page and fill out the 3-step form. You'll need your contact details and information about your current location.",
        relatedLinks: [
          { text: "To Registration", url: "/registration" },
          { text: "Our Services", url: "/services" }
        ],
        tags: ["registration", "form", "data"],
        lastUpdated: "2024-12-15",
        isNew: false,
        isUpdated: false
      },
      {
        id: "reg-2",
        question: "Is registration free?",
        answer: "Yes, registration and all our consultation services are completely free. We are a non-profit association.",
        relatedLinks: [
          { text: "About Us", url: "/about" },
          { text: "Donations", url: "/donate" }
        ],
        tags: ["free", "fees", "association"],
        lastUpdated: "2024-12-10",
        isNew: false,
        isUpdated: false
      },
      {
        id: "reg-3",
        question: "How long does it take to receive a response?",
        answer: "After registration, we contact you within 24 hours. In urgent cases, you can also use our WhatsApp groups directly.",
        relatedLinks: [
          { text: "Contact", url: "/contact" },
          { text: "WhatsApp Groups", url: "/whatsapp" }
        ],
        tags: ["response", "contact", "time"],
        lastUpdated: "2024-12-12",
        isNew: false,
        isUpdated: true
      },
      {
        id: "reg-4",
        question: "What information do I need to provide during registration?",
        answer: "You need to provide your name, email address, phone number (WhatsApp), current location, and your motivation for registration.",
        relatedLinks: [
          { text: "Registration Form", url: "/registration" },
          { text: "Privacy Policy", url: "/datenschutz" }
        ],
        tags: ["data", "information", "privacy"],
        lastUpdated: "2024-12-20",
        isNew: true,
        isUpdated: false
      }
    ],
    documents: [
      {
        id: "doc-1",
        question: "What documents do I need for Germany?",
        answer: "You need: passport, certified educational certificates, birth certificate, criminal record certificate, and possibly health certificate. All documents should be translated.",
        relatedLinks: [
          { text: "Document Checklist", url: "/services/documents" },
          { text: "Downloads", url: "/downloads" }
        ],
        tags: ["documents", "papers", "translation"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-2",
        question: "Where can I get my documents translated?",
        answer: "We provide you with a list of certified translators. You can find them in our resources section or in the downloads section.",
        relatedLinks: [
          { text: "Translator List", url: "/downloads" },
          { text: "Services", url: "/services" }
        ],
        tags: ["translation", "translators", "certified"],
        lastUpdated: "2024-12-16",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-3",
        question: "How long do translated documents remain valid?",
        answer: "Certified translations generally have no expiration date. However, make sure the original documents are still valid.",
        relatedLinks: [
          { text: "Glossary", url: "/glossar" },
          { text: "Legal", url: "/impressum" }
        ],
        tags: ["validity", "certification", "original"],
        lastUpdated: "2024-12-14",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-4",
        question: "How much does translating my documents cost?",
        answer: "Costs vary by translator and volume. Expect 25-50€ per page for certified translations. We have partner discounts with some translators.",
        relatedLinks: [
          { text: "Partner Translators", url: "/downloads" },
          { text: "Cost Overview", url: "/services" }
        ],
        tags: ["costs", "prices", "discount"],
        lastUpdated: "2024-12-19",
        isNew: false,
        isUpdated: true
      }
    ],
    whatsapp: [
      {
        id: "wa-1",
        question: "How do I join a WhatsApp group?",
        answer: "After registration, you automatically receive the link to your regional WhatsApp group based on your location.",
        relatedLinks: [
          { text: "Registration", url: "/registration" },
          { text: "Regional Groups", url: "/regions" }
        ],
        tags: ["whatsapp", "group", "regional"],
        lastUpdated: "2024-12-17",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-2",
        question: "What languages are used in the groups?",
        answer: "Mainly Arabic and French. German terms are explained. Our coordinators speak multiple languages.",
        relatedLinks: [
          { text: "Our Team", url: "/team" },
          { text: "Languages", url: "/languages" }
        ],
        tags: ["languages", "arabic", "french", "german"],
        lastUpdated: "2024-12-13",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-3",
        question: "Are there rules for WhatsApp groups?",
        answer: "Yes, we have group rules for respectful interaction. These will be communicated to you when you join the group.",
        relatedLinks: [
          { text: "Community Guidelines", url: "/community-guidelines" },
          { text: "Code of Conduct", url: "/code-of-conduct" }
        ],
        tags: ["rules", "behavior", "respect"],
        lastUpdated: "2024-12-11",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-4",
        question: "Can I join multiple WhatsApp groups?",
        answer: "Yes, you can join both your regional group and topic-specific groups (e.g., studies, work).",
        relatedLinks: [
          { text: "Group Overview", url: "/whatsapp-groups" },
          { text: "Topics", url: "/topics" }
        ],
        tags: ["multiple groups", "topics", "specialization"],
        lastUpdated: "2024-12-21",
        isNew: true,
        isUpdated: false
      }
    ],
    integration: [
      {
        id: "int-1",
        question: "How long does the integration process take?",
        answer: "The integration process varies depending on individual situation. On average, it takes 6-18 months from preparation to arrival in Germany.",
        relatedLinks: [
          { text: "Roadmap", url: "/roadmap" },
          { text: "Timeline", url: "/timeline" }
        ],
        tags: ["time", "duration", "process"],
        lastUpdated: "2024-12-19",
        isNew: false,
        isUpdated: false
      },
      {
        id: "int-2",
        question: "What support does TuniBless offer?",
        answer: "We offer free consultation, document assistance, checklists, webinars, WhatsApp support, and an active community of over 1200 members.",
        relatedLinks: [
          { text: "Our Services", url: "/services" },
          { text: "About Us", url: "/about" }
        ],
        tags: ["support", "consultation", "community"],
        lastUpdated: "2024-12-20",
        isNew: false,
        isUpdated: true
      },
      {
        id: "int-3",
        question: "Do I need to speak German?",
        answer: "Basic knowledge is helpful, but not mandatory. Many of our members learn German during the process. We have German language resources and support.",
        relatedLinks: [
          { text: "Learn German", url: "/german-learning" },
          { text: "Language Courses", url: "/language-courses" }
        ],
        tags: ["german", "language", "learning"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      }
    ],
    services: [
      {
        id: "srv-1",
        question: "What services are available?",
        answer: "We offer checklists, document templates, translation assistance, personal consultation, webinars, and community support.",
        relatedLinks: [
          { text: "All Services", url: "/services" },
          { text: "Webinars", url: "/events" }
        ],
        tags: ["services", "checklists", "consultation"],
        lastUpdated: "2024-12-15",
        isNew: false,
        isUpdated: false
      },
      {
        id: "srv-2",
        question: "Can I get on-site support?",
        answer: "Yes, we have regional coordinators in various cities in Germany and Tunisia who offer personal consultations.",
        relatedLinks: [
          { text: "Our Team", url: "/team" },
          { text: "Contact", url: "/contact" }
        ],
        tags: ["on-site", "coordinators", "personal"],
        lastUpdated: "2024-12-16",
        isNew: false,
        isUpdated: false
      },
      {
        id: "srv-3",
        question: "Are there online webinars?",
        answer: "Yes, we regularly organize online webinars on various topics such as studies, visa, job search, and integration.",
        relatedLinks: [
          { text: "Events", url: "/events" },
          { text: "Webinar Archive", url: "/webinars" }
        ],
        tags: ["webinars", "online", "training"],
        lastUpdated: "2024-12-22",
        isNew: true,
        isUpdated: false
      }
    ],
    general: [
      {
        id: "gen-1",
        question: "What is TuniBless?",
        answer: "TuniBless e.V. is a non-profit association that supports Tunisian families and youth in their integration in Germany.",
        relatedLinks: [
          { text: "About Us", url: "/about" },
          { text: "Our Mission", url: "/mission" }
        ],
        tags: ["tunibless", "association", "mission"],
        lastUpdated: "2024-12-10",
        isNew: false,
        isUpdated: false
      },
      {
        id: "gen-2",
        question: "How can I support TuniBless?",
        answer: "You can support us as a volunteer, become a member, or donate. Every form of support helps our community.",
        relatedLinks: [
          { text: "Become Volunteer", url: "/volunteer" },
          { text: "Membership", url: "/membership" },
          { text: "Donations", url: "/donate" }
        ],
        tags: ["support", "volunteer", "donations"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      },
      {
        id: "gen-3",
        question: "Is TuniBless only for Tunisians?",
        answer: "Primarily we support Tunisian families, but we also help other Arabic-speaking people with similar requests.",
        relatedLinks: [
          { text: "Target Audience", url: "/target-audience" },
          { text: "Inclusion", url: "/inclusion" }
        ],
        tags: ["target audience", "tunisians", "arabic"],
        lastUpdated: "2024-12-14",
        isNew: false,
        isUpdated: false
      }
    ]
  }
};
