// Internationalization types and interfaces
export type LanguageCode = 'de' | 'ar' | 'fr' | 'en';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

export interface TranslationKeys {
  nav: {
    home: string;
    about: string;
    services: string;
    registration: string;
    events: string;
    contact: string;
    getStarted: string;
    menu: string;
    close: string;
    community: string;
    getInvolved: string;
    legal: string;
    
    // Community submenu
    communityMenu: {
      registration: string;
      onboarding: string;
      roadmap: string;
      downloads: string;
      glossary: string;
      tunisia: string;
    };
    
    // Get Involved submenu
    getInvolvedMenu: {
      becomeHelper: string;
      becomeMember: string;
      donate: string;
      germany: string;
      worldwide: string;
    };
    
    // Legal submenu
    legalMenu: {
      imprint: string;
      privacyPolicy: string;
      cookies: string;
    };
  };
  language: {
    switchTo: string;
    german: string;
    arabic: string;
    french: string;
    english: string;
  };
  theme: {
    light: string;
    dark: string;
    toggleTheme: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    joinCommunity: string;
    learnMore: string;
    members: string;
    successRate: string;
    regions: string;
  };
  mission: {
    title: string;
    subtitle: string;
    description: string;
    vision: string;
    visionDesc: string;
    values: string;
    valuesDesc: string;
  };
  features: {
    community: string;
    communityDesc: string;
    guidance: string;
    guidanceDesc: string;
    resources: string;
    resourcesDesc: string;
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    
    // Service categories for Services component
    checklists: string;
    checklistsDesc: string;
    templates: string;
    templatesDesc: string;
    guides: string;
    guidesDesc: string;
    videos: string;
    videosDesc: string;
    community: string;
    communityDesc: string;
    viewAll: string;
    
    searchPlaceholder: string;
    searchLabel: string;
    filterAll: string;
    resetFilters: string;
    noResults: string;
    noResultsDesc: string;
    loading: string;
    popular: string;
    new: string;
    featured: string;
    download: string;
    visit: string;
    open: string;
    join: string;
    viewMore: string;
    showLess: string;
    backToTop: string;
    results: string;
    result: string;
    lastUpdated: string;
    fileSize: string;
    duration: string;
    difficulty: string;
    rating: string;
    reviews: string;
    difficultyLevels: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
    sortBy: {
      popular: string;
      new: string;
      rating: string;
      alphabetical: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
      quickAccess: string;
    };
    categories: {
      all: string;
      checklists: string;
      templates: string;
      documents: string;
      videos: string;
      guides: string;
      community: string;
      tools: string;
      cv: string;
      careers: string;
      tutorials: string;
      apps: string;
      integration: string;
      legal: string;
      financial: string;
    };
    purpose: {
      title: string;
      what: string;
      whatDesc: string;
      who: string;
      whoDesc: string;
      categories: string;
      categoriesDesc: string;
    };
    features: {
      search: string;
      filter: string;
      multilingual: string;
      mobile: string;
      secure: string;
      updated: string;
    };
    stats: {
      totalServices: string;
      downloads: string;
      users: string;
      languages: string;
    };
    actions: {
      downloadPdf: string;
      openTool: string;
      joinWhatsapp: string;
      visitWebsite: string;
      watchVideo: string;
      viewGuide: string;
      useTemplate: string;
      joinCommunity: string;
      bookmark: string;
      share: string;
      report: string;
      feedback: string;
    };
    modal: {
      title: string;
      description: string;
      requirements: string;
      languages: string;
      preview: string;
      close: string;
      download: string;
      visit: string;
    };
    filters: {
      type: string;
      category: string;
      language: string;
      difficulty: string;
      popularity: string;
      date: string;
      clear: string;
      apply: string;
    };
    cta: {
      title: string;
      subtitle: string;
      description: string;
      whatsapp: string;
      consultation: string;
      community: string;
      support: string;
    };
    feedback: {
      helpful: string;
      notHelpful: string;
      suggest: string;
      report: string;
      thanks: string;
    };
    accessibility: {
      skipToContent: string;
      searchInstructions: string;
      filterInstructions: string;
      cardInstructions: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
    volunteers: string;
    coordinator: string;
    contact: string;
    // Add team member roles and volunteer areas
    president: string;
    treasurer: string;
    coordinatorLeader: string;
    mediaLeader: string;
    volunteerAreas: {
      personalConsultation: string;
      workshops: string;
      translation: string;
      contentCreation: string;
      whatsappModeration: string;
      eventOrganization: string;
    };
    volunteerDescription: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    email: string;
    phone: string;
    hours: string;
    mondayFriday: string;
    saturday: string;
    sunday: string;
    closed: string;
    sendMessage: string;
    joinWhatsApp: string;
    followFacebook: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    services: string;
    community: string;
    support: string;
    legal: string;
    followUs: string;
    newsletter: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    subscribe: string;
    allRightsReserved: string;
    // Additional footer links
    registration: string;
    onboarding: string;
    roadmap: string;
    downloads: string;
    glossary: string;
    tunisia: string;
    getInvolved: string;
    becomeHelper: string;
    becomeMember: string;
    donate: string;
    germany: string;
    worldwide: string;
    imprint: string;
    privacyPolicy: string;
    cookies: string;
    readyNextStep: string;
    brandDescription: string;
    address: string;
    email: string;
    phone: string;
  };
  forms: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    required: string;
    invalidEmail: string;
    sending: string;
    success: string;
    error: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    warning: string;
    info: string;
    close: string;
    cancel: string;
    confirm: string;
    save: string;
    edit: string;
    delete: string;
    search: string;
    filter: string;
    sort: string;
    next: string;
    previous: string;
    readMore: string;
    showLess: string;
  };
  loadingScreen: {
    slogan: string;
    tagline: string;
    loading: string;
  };
  registration: {
    title: string;
    subtitle: string;
    step1: {
      title: string;
      subtitle: string;
      location: string;
      locationPlaceholder: string;
      governorate: string;
      governoratePlaceholder: string;
      tunisia: string;
      germany: string;
      worldwide: string;
      next: string;
    };
    step2: {
      title: string;
      subtitle: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      firstNamePlaceholder: string;
      lastNamePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      back: string;
      next: string;
    };
    step3: {
      title: string;
      subtitle: string;
      motivation: string;
      motivationPlaceholder: string;
      back: string;
      submit: string;
    };
    success: {
      title: string;
      message: string;
      nextSteps: string;
      checkEmail: string;
      joinWhatsApp: string;
      downloadChecklist: string;
      joinLivestream: string;
      joinWhatsAppButton: string;
      downloadButton: string;
    };
    progress: {
      location: string;
      contact: string;
      motivation: string;
    };
    toast: {
      title: string;
      description: string;
    };
  };
  contactPage: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      title: string;
      subtitle: string;
      firstName: string;
      lastName: string;
      email: string;
      topic: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      firstNamePlaceholder: string;
      lastNamePlaceholder: string;
      emailPlaceholder: string;
      topicPlaceholder: string;
      messagePlaceholder: string;
      required: string;
      invalidEmail: string;
      saveDraft: string;
      loadDraft: string;
      topics: {
        registration: string;
        documents: string;
        volunteer: string;
        membership: string;
        technical: string;
        feedback: string;
        other: string;
      };
    };
    info: {
      title: string;
      subtitle: string;
      email: string;
      address: string;
      hours: string;
      hoursValue: string;
      responseTime: string;
    };
    quickContact: {
      title: string;
      subtitle: string;
      whatsapp: string;
      whatsappDesc: string;
      messenger: string;
      messengerDesc: string;
      email: string;
      emailDesc: string;
      telegram: string;
      telegramDesc: string;
    };
    map: {
      title: string;
      subtitle: string;
      directions: string;
      viewLarger: string;
    };
    banking: {
      title: string;
      subtitle: string;
      bank: string;
      iban: string;
      bic: string;
      donate: string;
      qrCode: string;
      copyIban: string;
      copied: string;
      purpose: string;
    };
    anchors: {
      form: string;
      info: string;
      map: string;
      banking: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    mission: {
      title: string;
      description: string;
      proverb: {
        arabic: string;
        german: string;
        meaning: string;
      };
      features: {
        structured: {
          title: string;
          description: string;
        };
        nonprofit: {
          title: string;
          description: string;
        };
        community: {
          title: string;
          description: string;
        };
        continuous: {
          title: string;
          description: string;
        };
      };
    };
    timeline: {
      title: string;
      subtitle: string;
      events: Array<{
        year: string;
        title: string;
        description: string;
      }>;
      lastUpdated: string;
    };
    team: {
      title: string;
      subtitle: string;
      members: Array<{
        name: string;
        role: string;
        region: string;
        initials: string;
      }>;
    };
    cta: {
      title: string;
      subtitle: string;
      register: string;
      volunteer: string;
    };
  };
  
  events: {
    title: string;
    subtitle: string;
    description: string;
    
    // Hero section
    hero: {
      title: string;
      highlightText: string;
      viewAllEvents: string;
      filterEvents: string;
      stats: {
        upcomingEvents: string;
        communityMembers: string;
        citiesInGermany: string;
      };
    };
    
    // Navigation
    upcoming: string;
    livestreams: string;
    past: string;
    featured: string;
    
    // Featured Event
    featuredEvent: string;
    joinNow: string;
    spotsLeft: string;
    participants: string;
    learnMore: string;
    
    // Event Types
    types: {
      workshop: string;
      "info-session": string;
      networking: string;
      "family-camp": string;
      consultation: string;
      cultural: string;
    };
    
    // Event Format
    formats: {
      "in-person": string;
      livestream: string;
      hybrid: string;
    };
    
    // Event Status
    status: {
      upcoming: string;
      live: string;
      past: string;
      cancelled: string;
      full: string;
    };
    
    // Livestreams
    weeklyLivestreams: string;
    joinLive: string;
    watchReplay: string;
    liveNow: string;
    nextStream: string;
    host: string;
    language: string;
    audience: string;
    
    // Days of week
    days: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    
    // Registration & Actions
    register: string;
    registerNow: string;
    fullEvent: string;
    waitingList: string;
    addToCalendar: string;
    shareEvent: string;
    getDirections: string;
    contactOrganizer: string;
    
    // Event Details
    when: string;
    where: string;
    what: string;
    who: string;
    objectives: string;
    requirements: string;
    organizer: string;
    targetAudience: string;
    eventDetails: string;
    
    // Location
    location: string;
    venue: string;
    address: string;
    directions: string;
    publicTransport: string;
    parking: string;
    coordinates: string;
    
    // Filters
    filters: {
      all: string;
      region: string;
      type: string;
      date: string;
      format: string;
      language: string;
      clear: string;
      apply: string;
    };
    
    // Regions
    regions: {
      all: string;
      berlin: string;
      hamburg: string;
      munich: string;
      cologne: string;
      frankfurt: string;
      stuttgart: string;
      dusseldorf: string;
      dortmund: string;
      kaiserslautern: string;
    };
    
    // Time
    timeUntil: string;
    startsIn: string;
    duration: string;
    timezone: string;
    
    // Registration
    registration: {
      title: string;
      subtitle: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      message: string;
      terms: string;
      submit: string;
      success: string;
      error: string;
      confirmation: string;
    };
    
    // Empty States
    noEvents: string;
    noEventsDesc: string;
    noUpcoming: string;
    noUpcomingDesc: string;
    noPastEvents: string;
    noPastEventsDesc: string;
    
    // Navigation labels
    map: string;
    resetFilters: string;
    
    // Search
    search: string;
    searchPlaceholder: string;
    searchResults: string;
    
    // Accessibility
    accessibility: {
      wheelchairAccessible: string;
      signLanguage: string;
      hearingLoop: string;
      largeText: string;
    };
    
    // Related
    relatedEvents: string;
    suggestedEvents: string;
    
    // Social
    share: {
      title: string;
      facebook: string;
      twitter: string;
      whatsapp: string;
      email: string;
      link: string;
    };
    
    // Countdown
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
      until: string;
    };
    
    // Success messages
    messages: {
      registrationSuccess: string;
      calendarAdded: string;
      linkCopied: string;
      shared: string;
    };
  };

  faq: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    noResults: string;
    noResultsDesc: string;
    askQuestion: string;
    backToTop: string;
    lastUpdated: string;
    newBadge: string;
    updatedBadge: string;
    helpfulQuestion: string;
    yes: string;
    no: string;
    seeAlso: string;
    printFaq: string;
    clearSearch: string;
    allCategories: string;
    selectAll: string;
    showMore: string;
    showLess: string;
  };
  notFound: {
    title: string;
    description: string;
    attemptedPath: string;
    returnHome: string;
    goBack: string;
    suggestions: string;
    needHelp: string;
    refresh: string;
  };
  pages: {
    about: {
      title: string;
      description: string;
    };
  };
   onboarding?: {
    title: string;
    description: string;
    steps: {
      welcome: string;
      howItWorks: string;
      startNow: string;
    };
    cta: {
      next: string;
      skip: string;
      back: string;
      done: string;
    };
  };
  legal?: {
    terms: string;
    privacy: string;
    cookies: string;
    disclaimer: string;
    version: string;
  };
  
  // Volunteer/Helper page
  volunteer: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      title: string;
      subtitle: string;
      personalInfo: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      city: string;
      country: string;
      languages: string;
      experience: string;
      availability: string;
      motivation: string;
      skills: string;
      agreeTerms: string;
      agreeWhatsApp: string;
      submit: string;
      success: string;
      error: string;
    };
    areas: {
      title: string;
      requirementsLabel: string;
      consultation: {
        title: string;
        description: string;
        timeCommitment: string;
        requirements: string[];
      };
      workshops: {
        title: string;
        description: string;
        timeCommitment: string;
        requirements: string[];
      };
      translation: {
        title: string;
        description: string;
        timeCommitment: string;
        requirements: string[];
      };
      content: {
        title: string;
        description: string;
        timeCommitment: string;
        requirements: string[];
      };
      moderation: {
        title: string;
        description: string;
        timeCommitment: string;
        requirements: string[];
      };
      events: {
        title: string;
        description: string;
        timeCommitment: string;
        requirements: string[];
      };
    };
    benefits: {
      title: string;
      items: string[];
      titles: string[];
    };
    requirements: {
      title: string;
      items: string[];
    };
    statistics: {
      activeHelpers: string;
      supportedStudents: string;
      volunteerHours: string;
      successfulApplications: string;
    };
  };
  
  // Member page
  member: {
    title: string;
    subtitle: string;
    description: string;
    chooseMembership: string;
    benefits: {
      title: string;
      items: string[];
    };
    form: {
      title: string;
      subtitle: string;
      personalInfo: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address: string;
      addressSection: string;
      street: string;
      city: string;
      postalCode: string;
      country: string;
      selectCountry: string;
      countries: {
        germany: string;
        tunisia: string;
        other: string;
      };
      professionalInfo: string;
      profession: string;
      skills: string;
      skillsPlaceholder: string;
      motivation: string;
      motivationLabel: string;
      motivationPlaceholder: string;
      timeCommitment: string;
      timeCommitmentPlaceholder: string;
      timeOptions: {
        "1-2": string;
        "3-5": string;
        "6-10": string;
        "10+": string;
      };
      agreements: string;
      agreeTerms: string;
      agreeNewsletter: string;
      documentUpload: string;
      uploadInstructions: string;
      chooseFile: string;
      membershipType: string;
      membershipTypes: {
        regular: string;
        student: string;
        supporting: string;
      };
      submit: string;
      submitLabel: string;
      downloadPdf: string;
      success: string;
      error: string;
    };
    payment: {
      title: string;
      afterRegistration: string;
      annualFee: string;
      questions: string;
    };
    whyBecomeMember: {
      title: string;
      community: {
        title: string;
        description: string;
      };
      influence: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
  };
}

export interface Translations {
  [languageCode: string]: TranslationKeys;
}

// Supported languages configuration
export const SUPPORTED_LANGUAGES: Language[] = [
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    direction: 'ltr'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇹🇳',
    direction: 'rtl'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    direction: 'ltr'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    direction: 'ltr'
  }
];

export const DEFAULT_LANGUAGE: LanguageCode = 'de';
export const FALLBACK_LANGUAGE = 'en';
