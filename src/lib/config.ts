// Centralized configuration for all links, contact info, and repeated data
export const CONFIG = {
  // Organization Information
  organization: {
    name: "TuniBless e.V.",
    shortName: "TuniBless",
    tagline: {
      de: "Integration durch Bildung",
      ar: "الاندماج من خلال التعليم",
      fr: "Intégration par l'éducation",
      en: "Integration through Education"
    },
    description: {
      de: "Wir unterstützen tunesische Studenten auf ihrem Weg nach Deutschland und fördern erfolgreiche Integration durch Bildung und Gemeinschaft.",
      ar: "ندعم الطلاب التونسيين في رحلتهم إلى ألمانيا ونعزز الاندماج الناجح من خلال التعليم والمجتمع.",
      fr: "Nous soutenons les étudiants tunisiens dans leur voyage vers l'Allemagne et favorisons une intégration réussie grâce à l'éducation et à la communauté.",
      en: "We support Tunisian students on their way to Germany and promote successful integration through education and community."
    }
  },

  // Contact Information
  contact: {
    email: "tunibless@gmail.com",
    phone: "+49 (0) 631 123456789",
    address: {
      street: "Husarenäcker 4",
      postalCode: "67659",
      city: "Kaiserslautern",
      country: "Germany",
      full: "Husarenäcker 4, 67659 Kaiserslautern, Germany"
    },
    hours: {
      de: "Mo-Fr: 9:00-18:00 Uhr",
      ar: "الإثنين-الجمعة: 9:00-18:00",
      fr: "Lun-Ven : 9h00-18h00",
      en: "Mon-Fri: 9:00-18:00"
    }
  },

  // Banking Information
  banking: {
    bankName: "Sparkasse Kaiserslautern",
    iban: "DE14 5405 0220 0000 6402 68",
    bic: "MALADE51KLK",
    accountHolder: "TuniBless e.V."
  },

  // Social Media & Communication Links
  links: {
    // WhatsApp Groups
    whatsapp: {
      main: "https://chat.whatsapp.com/BpV8K9Y7X8J3Q2R5S6T7U8",
      tunisia: "https://chat.whatsapp.com/BpV8K9Y7X8J3Q2R5S6T7U8",
      germany: "https://chat.whatsapp.com/CqW9L1Z8Y9K4R3S6T7U8V9",
      worldwide: "https://chat.whatsapp.com/DrX0M2A9Z1L5S4T7U8V9W0"
    },
    
    // Social Media
    facebook: "https://www.facebook.com/tunibless",
    instagram: "https://www.instagram.com/tunibless",
    linkedin: "https://www.linkedin.com/company/tunibless",
    youtube: "https://www.youtube.com/@tunibless",
    telegram: "https://t.me/tunibless",
    
    // Messenger Links
    facebookMessenger: "https://m.me/tunibless",
    
    // External Links
    googleMaps: "https://maps.google.com/maps?q=Husarenäcker+4,+67659+Kaiserslautern,+Germany",
    directions: "https://www.google.com/maps/dir//Husarenäcker+4,+67659+Kaiserslautern,+Germany",
    
    // Government & Official Links
    daad: "https://www.daad.de/en/",
    bamf: "https://www.bamf.de/EN/",
    goetheInstitut: "https://www.goethe.de/en/index.html",
    
    // Donation Links
    paypal: "https://www.paypal.com/donate/?hosted_button_id=XXXXXXXXX",
    betterplace: "https://www.betterplace.org/de/projects/XXXXX-tunibless"
  },

  // Application/Download Links
  downloads: {
    checklist: "/downloads/integration-checklist.pdf",
    applicationTemplate: "/downloads/application-template.pdf",
    documentGuide: "/downloads/document-guide.pdf",
    glossary: "/downloads/glossary.pdf"
  },

  // Internal Routes (All in English)
  routes: {
    home: "/",
    about: "/about",
    services: "/services", 
    allServices: "/services",
    registration: "/registration",
    onboarding: "/onboarding",
    events: "/events",
    contact: "/contact",
    faq: "/faq",
    downloads: "/downloads",
    donate: "/donate",
    volunteer: "/volunteer",
    member: "/member",
    roadmap: "/roadmap",
    glossary: "/glossary",
    success: "/success",
    thanks: "/thanks",
    
    // Regional Pages
    tunisia: "/regions/tunisia",
    germany: "/regions/germany",
    worldwide: "/regions/worldwide",
    
    // Legal Pages
    imprint: "/imprint",
    privacy: "/privacy",
    cookies: "/cookies",
    
    // Service Categories
    checklists: "/services/checklists",
    templates: "/services/templates",
    guides: "/services/guides",
    videos: "/services/videos",
    community: "/services/community",
    
    // Dynamic Routes
    serviceCategory: "/services/:category",
    regionGov: "/region/:gov"
  },

  // Statistics (can be updated dynamically)
  stats: {
    members: 1200,
    successRate: 95,
    regions: 24,
    countries: 3
  },

  // Map Configuration
  map: {
    center: {
      lat: 49.4401,
      lng: 7.7491
    },
    zoom: 15,
    markers: [
      {
        id: "hq",
        lat: 49.4401,
        lng: 7.7491,
        title: "TuniBless e.V. Hauptsitz",
        description: "Hauptsitz von TuniBless e.V."
      }
    ]
  },

  // Theme Configuration
  theme: {
    colors: {
      primary: "#009688", // Teal
      secondary: "#E53935", // Red
      accent: "#FF9800" // Orange
    }
  },

  // Legal Information
  legal: {
    registrationNumber: "VR 12345",
    taxNumber: "12/345/67890",
    court: "Amtsgericht Kaiserslautern"
  }
};

// Helper functions to get localized content
export const getLocalizedContent = (content: Record<string, string>, language: string): string => {
  return content[language] || content.en || content.de || Object.values(content)[0];
};

export const getWhatsAppLink = (region?: 'tunisia' | 'germany' | 'worldwide'): string => {
  if (region && CONFIG.links.whatsapp[region]) {
    return CONFIG.links.whatsapp[region];
  }
  return CONFIG.links.whatsapp.main;
};

export const getContactEmail = (): string => {
  return `mailto:${CONFIG.contact.email}`;
};

export const getPhoneLink = (): string => {
  return `tel:${CONFIG.contact.phone}`;
};

export const getDirectionsLink = (): string => {
  return CONFIG.links.directions;
};

// Navigation helper functions
export const navigateTo = (route: keyof typeof CONFIG.routes): void => {
  window.location.href = CONFIG.routes[route];
};

export const getRoute = (route: keyof typeof CONFIG.routes): string => {
  return CONFIG.routes[route];
};

export default CONFIG;
