import { TranslationKeys, LanguageCode } from './i18n-types';

export const translations: Record<LanguageCode, TranslationKeys> = {
  de: {
    // Navigation
    nav: {
      home: "Startseite",
      about: "Über uns",
      services: "Dienste",
      registration: "Anmeldung",
      events: "Veranstaltungen",
      contact: "Kontakt",
      getStarted: "Jetzt starten",
      menu: "Menü",
      close: "Schließen"
    },
    
    // Language switcher
    language: {
      switchTo: "Sprache wechseln zu",
      german: "Deutsch",
      arabic: "العربية",
      french: "Français",
      english: "English"
    },
    
    // Theme switcher
    theme: {
      light: "Heller Modus",
      dark: "Dunkler Modus",
      toggleTheme: "Design wechseln"
    },
    
    // Homepage sections
    hero: {
      title: "Integration durch Bildung",
      subtitle: "Kostenlose Beratung für tunesische Familien und Jugendliche auf ihrem Weg nach Deutschland",
      description: "Wir unterstützen Sie bei jedem Schritt Ihrer Reise - von der ersten Beratung bis zur erfolgreichen Integration in Deutschland.",
      joinCommunity: "Community beitreten",
      learnMore: "Mehr erfahren",
      members: "Aktive Mitglieder",
      successRate: "Erfolgsquote",
      regions: "Regionale Gruppen"
    },
    
    // Mission section
    mission: {
      title: "Unsere Mission",
      subtitle: "TuniBless e.V. unterstützt tunesische Familien bei ihrer Integration in Deutschland",
      description: "Seit 2020 helfen wir Menschen dabei, ihre Träume zu verwirklichen. Mit kostenlosen Beratungen, Dokumentenhilfe und einer starken Gemeinschaft begleiten wir Sie auf jedem Schritt Ihrer Reise.",
      community: "Starke Gemeinschaft",
      communityDesc: "1200+ aktive Mitglieder in 24 regionalen Gruppen",
      guidance: "Expertenberatung",
      guidanceDesc: "Kostenlose persönliche Beratung von erfahrenen Mentoren",
      resources: "Umfassende Ressourcen",
      resourcesDesc: "Checklisten, Vorlagen, Videos und Anleitungen"
    },
    
    // Services section
    services: {
      title: "Unsere Dienste",
      subtitle: "Alles was Sie für Ihre erfolgreiche Integration benötigen",
      checklists: "Checklisten",
      checklistsDesc: "Schritt-für-Schritt Anleitungen",
      templates: "Vorlagen",
      templatesDesc: "Bewerbungsunterlagen und Formulare",
      guides: "Anleitungen",
      guidesDesc: "Detaillierte Hilfen und Tutorials",
      videos: "Videos",
      videosDesc: "Visuelle Anleitungen und Webinare",
      community: "Gemeinschaft",
      communityDesc: "WhatsApp Gruppen und Netzwerk",
      viewAll: "Alle Dienste anzeigen"
    },
    
    // Team section
    team: {
      title: "Unser Team",
      subtitle: "Erfahrene Koordinatoren und engagierte Freiwillige",
      volunteers: "Freiwillige",
      coordinator: "Koordinator",
      contact: "Kontakt",
      president: "Vorsitzender",
      treasurer: "Kassenwart",
      coordinatorLeader: "Leiter Koordinatoren",
      mediaLeader: "Teamleiter Media",
      volunteerAreas: {
        personalConsultation: "Persönliche Beratung",
        workshops: "Workshops",
        translation: "Übersetzung",
        contentCreation: "Content Creation",
        whatsappModeration: "WhatsApp Moderation",
        eventOrganization: "Veranstaltungsorganisation"
      },
      volunteerDescription: "Unsere engagierten Freiwilligen arbeiten in 6 verschiedenen Bereichen, um unsere Gemeinschaft zu unterstützen."
    },
    
    // Contact section
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Wir sind hier, um Ihnen zu helfen",
      address: "Adresse",
      email: "E-Mail",
      phone: "Telefon",
      hours: "Öffnungszeiten",
      mondayFriday: "Montag - Freitag",
      saturday: "Samstag",
      sunday: "Sonntag",
      closed: "Geschlossen",
      sendMessage: "Nachricht senden",
      joinWhatsApp: "WhatsApp Gruppe beitreten",
      followFacebook: "Auf Facebook folgen"
    },
    
    // Footer
    footer: {
      tagline: "Integration durch Bildung",
      quickLinks: "Schnellzugriff",
      services: "Dienste",
      community: "Gemeinschaft",
      support: "Unterstützung",
      legal: "Rechtliches",
      followUs: "Folgen Sie uns",
      newsletter: "Newsletter",
      newsletterDesc: "Bleiben Sie über unsere neuesten Updates informiert",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      subscribe: "Abonnieren",
      allRightsReserved: "Alle Rechte vorbehalten",
      registration: "Anmeldung",
      onboarding: "Einführung",
      roadmap: "Roadmap",
      downloads: "Downloads",
      glossary: "Glossar",
      tunisia: "Tunesien",
      getInvolved: "Mitmachen",
      becomeHelper: "Helfer werden",
      becomeMember: "Mitglied werden",
      donate: "Spenden",
      germany: "Deutschland",
      worldwide: "Weltweit",
      imprint: "Impressum",
      privacyPolicy: "Datenschutz",
      cookies: "Cookies",
      readyNextStep: "Bereit für den nächsten Schritt?",
      brandDescription: "Wir unterstützen tunesische Studierende beim Weg nach Deutschland und fördern erfolgreiche Integration durch Bildung und Gemeinschaft.",
      address: "Musterstraße 123, 12345 Musterstadt",
      email: "info@tunibless.org",
      phone: "+49 (0) 123 456789"
    },
    
    // Forms
    forms: {
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht",
      submit: "Absenden",
      required: "Pflichtfeld",
      invalidEmail: "Ungültige E-Mail-Adresse",
      sending: "Wird gesendet...",
      success: "Erfolgreich gesendet!",
      error: "Fehler beim Senden. Bitte versuchen Sie es erneut."
    },
    
    // Common elements
    common: {
      loading: "Wird geladen...",
      error: "Fehler",
      success: "Erfolg",
      warning: "Warnung",
      info: "Information",
      close: "Schließen",
      cancel: "Abbrechen",
      confirm: "Bestätigen",
      save: "Speichern",
      edit: "Bearbeiten",
      delete: "Löschen",
      search: "Suchen",
      filter: "Filter",
      sort: "Sortieren",
      next: "Weiter",
      previous: "Zurück",
      readMore: "Mehr lesen",
      showLess: "Weniger anzeigen"
    },
    
    // Pages
    pages: {
      notFound: {
        title: "Seite nicht gefunden",
        description: "Die angeforderte Seite konnte nicht gefunden werden.",
        goHome: "Zur Startseite"
      }
    },
    
    // Registration form
    registration: {
      title: "Registrierung",
      subtitle: "Beginnen Sie Ihren Weg zur erfolgreichen Integration in Deutschland",
      step1: {
        title: "Wo befinden Sie sich?",
        subtitle: "Dies hilft uns, Sie der richtigen WhatsApp-Gruppe zuzuordnen",
        location: "Aktueller Aufenthaltsort",
        locationPlaceholder: "Wählen Sie Ihren Standort",
        governorate: "Gouvernorat",
        governoratePlaceholder: "Wählen Sie Ihr Gouvernorat",
        tunisia: "Tunesien",
        germany: "Deutschland",
        worldwide: "Andere Länder",
        next: "Weiter"
      },
      step2: {
        title: "Kontaktinformationen",
        subtitle: "Wie können wir Sie erreichen?",
        firstName: "Vorname",
        lastName: "Nachname",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer (WhatsApp)",
        firstNamePlaceholder: "Ihr Vorname",
        lastNamePlaceholder: "Ihr Nachname",
        emailPlaceholder: "ihre.email@beispiel.com",
        phonePlaceholder: "+49 oder +216...",
        back: "Zurück",
        next: "Weiter"
      },
      step3: {
        title: "Ihre Motivation",
        subtitle: "Erzählen Sie uns von Ihren Zielen",
        motivation: "Warum möchten Sie sich bei TuniBless registrieren?",
        motivationPlaceholder: "Beschreiben Sie Ihre Ziele und wie wir Ihnen helfen können...",
        back: "Zurück",
        submit: "Registrierung abschließen"
      },
      success: {
        title: "Registrierung erfolgreich!",
        message: "Vielen Dank für Ihre Registrierung. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.",
        nextSteps: "Nächste Schritte:",
        checkEmail: "Prüfen Sie Ihre E-Mails für weitere Informationen",
        joinWhatsApp: "Sie erhalten einen Link zur WhatsApp-Gruppe",
        downloadChecklist: "Laden Sie unsere Checkliste herunter",
        joinLivestream: "Nehmen Sie an unserem nächsten Livestream teil",
        joinWhatsAppButton: "WhatsApp Gruppe beitreten",
        downloadButton: "Checkliste herunterladen"
      },
      progress: {
        location: "Standort",
        contact: "Kontakt",
        motivation: "Motivation"
      },
      toast: {
        title: "Registrierung erfolgreich!",
        description: "Wir werden uns bald bei Ihnen melden. Prüfen Sie Ihre E-Mails für weitere Schritte."
      }
    },
    
    // Contact page
    contactPage: {
      title: "Kontakt",
      subtitle: "Wir sind hier, um Ihnen zu helfen",
      form: {
        title: "Nachricht senden",
        firstName: "Vorname",
        lastName: "Nachname",
        email: "E-Mail-Adresse",
        topic: "Betreff",
        message: "Nachricht",
        send: "Nachricht senden",
        firstNamePlaceholder: "Ihr Vorname",
        lastNamePlaceholder: "Ihr Nachname",
        emailPlaceholder: "ihre.email@beispiel.com",
        topicPlaceholder: "Wählen Sie ein Thema",
        messagePlaceholder: "Ihre Nachricht...",
        topics: {
          registration: "Registrierung",
          documents: "Dokumente",
          volunteer: "Ehrenamtlich helfen",
          membership: "Mitgliedschaft",
          other: "Sonstiges"
        }
      },
      info: {
        title: "Kontaktinformationen",
        email: "tunibless@gmail.com",
        address: "Husarenäcker 4, 67659 Kaiserslautern",
        hours: "Öffnungszeiten",
        hoursValue: "Mo-Fr: 9:00-18:00 Uhr"
      },
      quickContact: {
        title: "Schneller Kontakt",
        whatsapp: "WhatsApp Gruppe beitreten",
        messenger: "Facebook Messenger"
      },
      banking: {
        title: "Bankverbindung",
        bank: "Sparkasse Kaiserslautern",
        iban: "DE14 5405 0220 0000 6402 68",
        bic: "MALADE51KLK"
      }
    },

    // Arabic translations...
  },
  
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      registration: "التسجيل",
      events: "الفعاليات",
      contact: "اتصل بنا",
      getStarted: "ابدأ الآن",
      menu: "القائمة",
      close: "إغلاق"
    },
    
    // Language switcher
    language: {
      switchTo: "تغيير اللغة إلى",
      german: "Deutsch",
      arabic: "العربية",
      french: "Français",
      english: "English"
    },
    
    // Theme switcher
    theme: {
      light: "الوضع المضيء",
      dark: "الوضع المظلم",
      toggleTheme: "تبديل المظهر"
    },
    
    // Homepage sections
    hero: {
      title: "الاندماج من خلال التعليم",
      subtitle: "استشارة مجانية للعائلات والشباب التونسي في رحلتهم إلى ألمانيا",
      description: "ندعمك في كل خطوة من رحلتك - من الاستشارة الأولى إلى الاندماج الناجح في ألمانيا.",
      joinCommunity: "انضم للمجتمع",
      learnMore: "اعرف المزيد",
      members: "الأعضاء النشطون",
      successRate: "معدل النجاح",
      regions: "المجموعات الإقليمية"
    },
    
    // Mission section
    mission: {
      title: "مهمتنا",
      subtitle: "جمعية تونس بليس تدعم العائلات التونسية في اندماجها في ألمانيا",
      description: "منذ عام 2020، نساعد الناس على تحقيق أحلامهم. بالاستشارات المجانية ومساعدة الوثائق ومجتمع قوي، نرافقك في كل خطوة من رحلتك.",
      community: "مجتمع قوي",
      communityDesc: "أكثر من 1200 عضو نشط في 24 مجموعة إقليمية",
      guidance: "إرشاد الخبراء",
      guidanceDesc: "استشارة شخصية مجانية من مرشدين ذوي خبرة",
      resources: "موارد شاملة",
      resourcesDesc: "قوائم مراجعة وقوالب وفيديوهات وأدلة"
    },
    
    // Services section
    services: {
      title: "خدماتنا",
      subtitle: "كل ما تحتاجه لاندماج ناجح",
      checklists: "قوائم المراجعة",
      checklistsDesc: "إرشادات خطوة بخطوة",
      templates: "القوالب",
      templatesDesc: "وثائق التقديم والنماذج",
      guides: "الأدلة",
      guidesDesc: "مساعدات مفصلة ودروس تعليمية",
      videos: "الفيديوهات",
      videosDesc: "إرشادات مرئية وندوات عبر الإنترنت",
      community: "المجتمع",
      communityDesc: "مجموعات واتساب والشبكة",
      viewAll: "عرض جميع الخدمات"
    },
    
    // Team section
    team: {
      title: "فريقنا",
      subtitle: "منسقون ذوو خبرة ومتطوعون مخلصون",
      volunteers: "المتطوعون",
      coordinator: "المنسق",
      contact: "اتصال",
      president: "الرئيس",
      treasurer: "أمين الصندوق",
      coordinatorLeader: "رئيس المنسقين",
      mediaLeader: "رئيس فريق الإعلام",
      volunteerAreas: {
        personalConsultation: "الاستشارة الشخصية",
        workshops: "ورش العمل",
        translation: "الترجمة",
        contentCreation: "إنشاء المحتوى",
        whatsappModeration: "إدارة واتساب",
        eventOrganization: "تنظيم الفعاليات"
      },
      volunteerDescription: "يعمل متطوعونا المتفانون في 6 مجالات مختلفة لدعم مجتمعنا."
    },
    
    // Contact section
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك",
      address: "العنوان",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      hours: "ساعات العمل",
      mondayFriday: "الاثنين - الجمعة",
      saturday: "السبت",
      sunday: "الأحد",
      closed: "مغلق",
      sendMessage: "إرسال رسالة",
      joinWhatsApp: "انضم لمجموعة واتساب",
      followFacebook: "تابعنا على فيسبوك"
    },
    
    // Footer
    footer: {
      tagline: "الاندماج من خلال التعليم",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      community: "المجتمع",
      support: "الدعم",
      legal: "قانوني",
      followUs: "تابعنا",
      newsletter: "النشرة الإخبارية",
      newsletterDesc: "ابق على اطلاع بآخر التحديثات",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      subscribe: "اشتراك",
      allRightsReserved: "جميع الحقوق محفوظة",
      registration: "التسجيل",
      onboarding: "التوجيه",
      roadmap: "خارطة الطريق",
      downloads: "التنزيلات",
      glossary: "المسرد",
      tunisia: "تونس",
      getInvolved: "شارك معنا",
      becomeHelper: "كن مساعداً",
      becomeMember: "كن عضواً",
      donate: "تبرع",
      germany: "ألمانيا",
      worldwide: "عالمياً",
      imprint: "معلومات قانونية",
      privacyPolicy: "سياسة الخصوصية",
      cookies: "ملفات تعريف الارتباط",
      readyNextStep: "مستعد للخطوة التالية؟",
      brandDescription: "ندعم الطلاب التونسيين في طريقهم إلى ألمانيا ونعزز الاندماج الناجح من خلال التعليم والمجتمع.",
      address: "Musterstraße 123, 12345 Musterstadt",
      email: "info@tunibless.org",
      phone: "+49 (0) 123 456789"
    },
    
    // Forms
    forms: {
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      message: "الرسالة",
      submit: "إرسال",
      required: "حقل مطلوب",
      invalidEmail: "عنوان بريد إلكتروني غير صحيح",
      sending: "جاري الإرسال...",
      success: "تم الإرسال بنجاح!",
      error: "خطأ في الإرسال. يرجى المحاولة مرة أخرى."
    },
    
    // Common elements
    common: {
      loading: "جاري التحميل...",
      error: "خطأ",
      success: "نجح",
      warning: "تحذير",
      info: "معلومات",
      close: "إغلاق",
      cancel: "إلغاء",
      confirm: "تأكيد",
      save: "حفظ",
      edit: "تحرير",
      delete: "حذف",
      search: "بحث",
      filter: "فلتر",
      sort: "ترتيب",
      next: "التالي",
      previous: "السابق",
      readMore: "اقرأ المزيد",
      showLess: "عرض أقل"
    },
    
    // Registration form
    registration: {
      title: "التسجيل",
      subtitle: "ابدأ رحلتك نحو الاندماج الناجح في ألمانيا",
      step1: {
        title: "أين أنت حاليا؟",
        subtitle: "هذا يساعدنا في إضافتك إلى مجموعة واتساب المناسبة",
        location: "الموقع الحالي",
        locationPlaceholder: "اختر موقعك",
        governorate: "الولاية",
        governoratePlaceholder: "اختر ولايتك",
        tunisia: "تونس",
        germany: "ألمانيا",
        worldwide: "بلدان أخرى",
        next: "التالي"
      },
      step2: {
        title: "معلومات الاتصال",
        subtitle: "كيف يمكننا الوصول إليك؟",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        email: "عنوان البريد الإلكتروني",
        phone: "رقم الهاتف (واتساب)",
        firstNamePlaceholder: "اسمك الأول",
        lastNamePlaceholder: "اسم عائلتك",
        emailPlaceholder: "your.email@example.com",
        phonePlaceholder: "+49 أو +216...",
        back: "السابق",
        next: "التالي"
      },
      step3: {
        title: "دافعك",
        subtitle: "أخبرنا عن أهدافك",
        motivation: "لماذا تريد التسجيل في تونس بليس؟",
        motivationPlaceholder: "صف أهدافك وكيف يمكننا مساعدتك...",
        back: "السابق",
        submit: "إكمال التسجيل"
      },
      success: {
        title: "تم التسجيل بنجاح!",
        message: "شكراً لك على التسجيل. سنتواصل معك خلال 24 ساعة.",
        nextSteps: "الخطوات التالية:",
        checkEmail: "تحقق من بريدك الإلكتروني للمزيد من المعلومات",
        joinWhatsApp: "ستتلقى رابط للانضمام إلى مجموعة واتساب",
        downloadChecklist: "قم بتحميل قائمة المراجعة الخاصة بنا",
        joinLivestream: "شارك في البث المباشر القادم",
        joinWhatsAppButton: "انضم لمجموعة واتساب",
        downloadButton: "تحميل قائمة المراجعة"
      },
      progress: {
        location: "الموقع",
        contact: "الاتصال",
        motivation: "الدافع"
      },
      toast: {
        title: "تم التسجيل بنجاح!",
        description: "سنتواصل معك قريباً. تحقق من بريدك الإلكتروني للخطوات التالية."
      }
    },

    // Contact page
    contactPage: {
      title: "اتصل بنا",
      subtitle: "نحن هنا لمساعدتك",
      form: {
        title: "إرسال رسالة",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        email: "عنوان البريد الإلكتروني",
        topic: "الموضوع",
        message: "الرسالة",
        send: "إرسال الرسالة",
        firstNamePlaceholder: "اسمك الأول",
        lastNamePlaceholder: "اسم عائلتك",
        emailPlaceholder: "your.email@example.com",
        topicPlaceholder: "اختر موضوعاً",
        messagePlaceholder: "رسالتك...",
        topics: {
          registration: "التسجيل",
          documents: "الوثائق",
          volunteer: "المساعدة التطوعية",
          membership: "العضوية",
          other: "أخرى"
        }
      },
      info: {
        title: "معلومات الاتصال",
        email: "tunibless@gmail.com",
        address: "Husarenäcker 4, 67659 Kaiserslautern",
        hours: "ساعات العمل",
        hoursValue: "الإثنين-الجمعة: 9:00-18:00"
      },
      quickContact: {
        title: "اتصال سريع",
        whatsapp: "انضم لمجموعة واتساب",
        messenger: "فيسبوك ماسنجر"
      },
      banking: {
        title: "بيانات البنك",
        bank: "Sparkasse Kaiserslautern",
        iban: "DE14 5405 0220 0000 6402 68",
        bic: "MALADE51KLK"
      }
    },

    // Pages
    pages: {
      notFound: {
        title: "الصفحة غير موجودة",
        description: "لم يتم العثور على الصفحة المطلوبة.",
        goHome: "العودة للرئيسية"
      }
    }
  },
  
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      registration: "Inscription",
      events: "Événements",
      contact: "Contact",
      getStarted: "Commencer",
      menu: "Menu",
      close: "Fermer"
    },
    
    // Language switcher
    language: {
      switchTo: "Changer de langue vers",
      german: "Deutsch",
      arabic: "العربية",
      french: "Français",
      english: "English"
    },
    
    // Theme switcher
    theme: {
      light: "Mode clair",
      dark: "Mode sombre",
      toggleTheme: "Basculer le thème"
    },
    
    // Homepage sections
    hero: {
      title: "Intégration par l'éducation",
      subtitle: "Conseil gratuit pour les familles et jeunes tunisiens dans leur parcours vers l'Allemagne",
      description: "Nous vous soutenons à chaque étape de votre voyage - du premier conseil à l'intégration réussie en Allemagne.",
      joinCommunity: "Rejoindre la communauté",
      learnMore: "En savoir plus",
      members: "Membres actifs",
      successRate: "Taux de réussite",
      regions: "Groupes régionaux"
    },
    
    // Mission section
    mission: {
      title: "Notre mission",
      subtitle: "TuniBless e.V. soutient les familles tunisiennes dans leur intégration en Allemagne",
      description: "Depuis 2020, nous aidons les gens à réaliser leurs rêves. Avec des conseils gratuits, une aide documentaire et une communauté forte, nous vous accompagnons à chaque étape de votre voyage.",
      community: "Communauté forte",
      communityDesc: "1200+ membres actifs dans 24 groupes régionaux",
      guidance: "Conseil d'experts",
      guidanceDesc: "Conseil personnel gratuit de mentors expérimentés",
      resources: "Ressources complètes",
      resourcesDesc: "Listes de contrôle, modèles, vidéos et guides"
    },
    
    // Services section
    services: {
      title: "Nos services",
      subtitle: "Tout ce dont vous avez besoin pour une intégration réussie",
      checklists: "Listes de contrôle",
      checklistsDesc: "Instructions étape par étape",
      templates: "Modèles",
      templatesDesc: "Documents de candidature et formulaires",
      guides: "Guides",
      guidesDesc: "Aides détaillées et tutoriels",
      videos: "Vidéos",
      videosDesc: "Instructions visuelles et webinaires",
      community: "Communauté",
      communityDesc: "Groupes WhatsApp et réseau",
      viewAll: "Voir tous les services"
    },
    
    // Team section
    team: {
      title: "Notre équipe",
      subtitle: "Coordinateurs expérimentés et bénévoles dévoués",
      volunteers: "Bénévoles",
      coordinator: "Coordinateur",
      contact: "Contact",
      president: "Président",
      treasurer: "Trésorier",
      coordinatorLeader: "Chef des coordinateurs",
      mediaLeader: "Chef d'équipe médias",
      volunteerAreas: {
        personalConsultation: "Consultation personnelle",
        workshops: "Ateliers",
        translation: "Traduction",
        contentCreation: "Création de contenu",
        whatsappModeration: "Modération WhatsApp",
        eventOrganization: "Organisation d'événements"
      },
      volunteerDescription: "Nos bénévoles dévoués travaillent dans 6 domaines différents pour soutenir notre communauté."
    },
    
    // Contact section
    contact: {
      title: "Prendre contact",
      subtitle: "Nous sommes là pour vous aider",
      address: "Adresse",
      email: "E-mail",
      phone: "Téléphone",
      hours: "Heures d'ouverture",
      mondayFriday: "Lundi - Vendredi",
      saturday: "Samedi",
      sunday: "Dimanche",
      closed: "Fermé",
      sendMessage: "Envoyer un message",
      joinWhatsApp: "Rejoindre le groupe WhatsApp",
      followFacebook: "Suivre sur Facebook"
    },
    
    // Footer
    footer: {
      tagline: "Intégration par l'éducation",
      quickLinks: "Liens rapides",
      services: "Services",
      community: "Communauté",
      support: "Support",
      legal: "Légal",
      followUs: "Suivez-nous",
      newsletter: "Newsletter",
      newsletterDesc: "Restez informé de nos dernières mises à jour",
      emailPlaceholder: "Votre adresse e-mail",
      subscribe: "S'abonner",
      allRightsReserved: "Tous droits réservés",
      registration: "Inscription",
      onboarding: "Intégration",
      roadmap: "Feuille de route",
      downloads: "Téléchargements",
      glossary: "Glossaire",
      tunisia: "Tunisie",
      getInvolved: "S'impliquer",
      becomeHelper: "Devenir aide",
      becomeMember: "Devenir membre",
      donate: "Faire un don",
      germany: "Allemagne",
      worldwide: "Mondial",
      imprint: "Mentions légales",
      privacyPolicy: "Politique de confidentialité",
      cookies: "Cookies",
      readyNextStep: "Prêt pour la prochaine étape ?",
      brandDescription: "Nous soutenons les étudiants tunisiens sur leur chemin vers l'Allemagne et favorisons une intégration réussie par l'éducation et la communauté.",
      address: "Musterstraße 123, 12345 Musterstadt",
      email: "info@tunibless.org",
      phone: "+49 (0) 123 456789"
    },
    
    // Forms
    forms: {
      firstName: "Prénom",
      lastName: "Nom de famille",
      email: "E-mail",
      phone: "Téléphone",
      message: "Message",
      submit: "Envoyer",
      required: "Champ requis",
      invalidEmail: "Adresse e-mail invalide",
      sending: "Envoi en cours...",
      success: "Envoyé avec succès !",
      error: "Erreur lors de l'envoi. Veuillez réessayer."
    },
    
    // Common elements
    common: {
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      warning: "Avertissement",
      info: "Information",
      close: "Fermer",
      cancel: "Annuler",
      confirm: "Confirmer",
      save: "Sauvegarder",
      edit: "Modifier",
      delete: "Supprimer",
      search: "Rechercher",
      filter: "Filtrer",
      sort: "Trier",
      next: "Suivant",
      previous: "Précédent",
      readMore: "Lire plus",
      showLess: "Afficher moins"
    },
    
    // Registration form
    registration: {
      title: "Inscription",
      subtitle: "Commencez votre parcours vers une intégration réussie en Allemagne",
      step1: {
        title: "Où vous trouvez-vous ?",
        subtitle: "Cela nous aide à vous ajouter au bon groupe WhatsApp",
        location: "Localisation actuelle",
        locationPlaceholder: "Choisissez votre emplacement",
        governorate: "Gouvernorat",
        governoratePlaceholder: "Choisissez votre gouvernorat",
        tunisia: "Tunisie",
        germany: "Allemagne",
        worldwide: "Autres pays",
        next: "Suivant"
      },
      step2: {
        title: "Informations de contact",
        subtitle: "Comment pouvons-nous vous contacter ?",
        firstName: "Prénom",
        lastName: "Nom de famille",
        email: "Adresse e-mail",
        phone: "Numéro de téléphone (WhatsApp)",
        firstNamePlaceholder: "Votre prénom",
        lastNamePlaceholder: "Votre nom de famille",
        emailPlaceholder: "votre.email@exemple.com",
        phonePlaceholder: "+49 ou +216...",
        back: "Précédent",
        next: "Suivant"
      },
      step3: {
        title: "Votre motivation",
        subtitle: "Parlez-nous de vos objectifs",
        motivation: "Pourquoi souhaitez-vous vous inscrire à TuniBless ?",
        motivationPlaceholder: "Décrivez vos objectifs et comment nous pouvons vous aider...",
        back: "Précédent",
        submit: "Terminer l'inscription"
      },
      success: {
        title: "Inscription réussie !",
        message: "Merci pour votre inscription. Nous vous contacterons dans les 24 heures.",
        nextSteps: "Prochaines étapes :",
        checkEmail: "Vérifiez vos e-mails pour plus d'informations",
        joinWhatsApp: "Vous recevrez un lien vers le groupe WhatsApp",
        downloadChecklist: "Téléchargez notre liste de vérification",
        joinLivestream: "Participez à notre prochain livestream",
        joinWhatsAppButton: "Rejoindre le groupe WhatsApp",
        downloadButton: "Télécharger la liste de vérification"
      },
      progress: {
        location: "Localisation",
        contact: "Contact",
        motivation: "Motivation"
      },
      toast: {
        title: "Inscription réussie !",
        description: "Nous vous contacterons bientôt. Vérifiez vos e-mails pour les prochaines étapes."
      }
    },

    // Contact page
    contactPage: {
      title: "Contact",
      subtitle: "Nous sommes là pour vous aider",
      form: {
        title: "Envoyer un message",
        firstName: "Prénom",
        lastName: "Nom de famille",
        email: "Adresse e-mail",
        topic: "Sujet",
        message: "Message",
        send: "Envoyer le message",
        firstNamePlaceholder: "Votre prénom",
        lastNamePlaceholder: "Votre nom de famille",
        emailPlaceholder: "votre.email@exemple.com",
        topicPlaceholder: "Choisissez un sujet",
        messagePlaceholder: "Votre message...",
        topics: {
          registration: "Inscription",
          documents: "Documents",
          volunteer: "Aide bénévole",
          membership: "Adhésion",
          other: "Autre"
        }
      },
      info: {
        title: "Informations de contact",
        email: "tunibless@gmail.com",
        address: "Husarenäcker 4, 67659 Kaiserslautern",
        hours: "Heures d'ouverture",
        hoursValue: "Lun-Ven : 9h00-18h00"
      },
      quickContact: {
        title: "Contact rapide",
        whatsapp: "Rejoindre le groupe WhatsApp",
        messenger: "Facebook Messenger"
      },
      banking: {
        title: "Coordonnées bancaires",
        bank: "Sparkasse Kaiserslautern",
        iban: "DE14 5405 0220 0000 6402 68",
        bic: "MALADE51KLK"
      }
    },

    // Pages
    pages: {
      notFound: {
        title: "Page non trouvée",
        description: "La page demandée n'a pas pu être trouvée.",
        goHome: "Retour à l'accueil"
      }
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      registration: "Registration",
      events: "Events",
      contact: "Contact",
      getStarted: "Get Started",
      menu: "Menu",
      close: "Close"
    },
    
    // Language switcher
    language: {
      switchTo: "Switch language to",
      german: "Deutsch",
      arabic: "العربية",
      french: "Français",
      english: "English"
    },
    
    // Theme switcher
    theme: {
      light: "Light mode",
      dark: "Dark mode",
      toggleTheme: "Toggle theme"
    },
    
    // Homepage sections
    hero: {
      title: "Integration through Education",
      subtitle: "Free consultation for Tunisian families and youth on their journey to Germany",
      description: "We support you every step of the way - from initial consultation to successful integration in Germany.",
      joinCommunity: "Join Community",
      learnMore: "Learn More",
      members: "Active Members",
      successRate: "Success Rate",
      regions: "Regional Groups"
    },
    
    // Mission section
    mission: {
      title: "Our Mission",
      subtitle: "TuniBless e.V. supports Tunisian families in their integration to Germany",
      description: "Since 2020, we help people achieve their dreams. With free consultations, document assistance, and a strong community, we accompany you every step of your journey.",
      community: "Strong Community",
      communityDesc: "1200+ active members across 24 regional groups",
      guidance: "Expert Guidance",
      guidanceDesc: "Free personal consultation from experienced mentors",
      resources: "Comprehensive Resources",
      resourcesDesc: "Checklists, templates, videos, and guides"
    },
    
    // Services section
    services: {
      title: "Our Services",
      subtitle: "Everything you need for successful integration",
      checklists: "Checklists",
      checklistsDesc: "Step-by-step instructions",
      templates: "Templates",
      templatesDesc: "Application documents and forms",
      guides: "Guides",
      guidesDesc: "Detailed assistance and tutorials",
      videos: "Videos",
      videosDesc: "Visual instructions and webinars",
      community: "Community",
      communityDesc: "WhatsApp groups and network",
      viewAll: "View All Services"
    },
    
    // Team section
    team: {
      title: "Our Team",
      subtitle: "Experienced coordinators and dedicated volunteers",
      volunteers: "Volunteers",
      coordinator: "Coordinator",
      contact: "Contact",
      president: "President",
      treasurer: "Treasurer",
      coordinatorLeader: "Coordinator Leader",
      mediaLeader: "Media Team Leader",
      volunteerAreas: {
        personalConsultation: "Personal Consultation",
        workshops: "Workshops",
        translation: "Translation",
        contentCreation: "Content Creation",
        whatsappModeration: "WhatsApp Moderation",
        eventOrganization: "Event Organization"
      },
      volunteerDescription: "Our dedicated volunteers work across 6 different areas to support our community."
    },
    
    // Contact section
    contact: {
      title: "Get in Touch",
      subtitle: "We're here to help you",
      address: "Address",
      email: "Email",
      phone: "Phone",
      hours: "Opening Hours",
      mondayFriday: "Monday - Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      sendMessage: "Send Message",
      joinWhatsApp: "Join WhatsApp Group",
      followFacebook: "Follow on Facebook"
    },
    
    // Registration form
    registration: {
      title: "Registration",
      subtitle: "Begin your journey to successful integration in Germany",
      step1: {
        title: "Where are you located?",
        subtitle: "This helps us add you to the right WhatsApp group",
        location: "Current location",
        locationPlaceholder: "Choose your location",
        governorate: "Governorate",
        governoratePlaceholder: "Choose your governorate",
        tunisia: "Tunisia",
        germany: "Germany",
        worldwide: "Other countries",
        next: "Next"
      },
      step2: {
        title: "Contact information",
        subtitle: "How can we reach you?",
        firstName: "First name",
        lastName: "Last name",
        email: "Email address",
        phone: "Phone number (WhatsApp)",
        firstNamePlaceholder: "Your first name",
        lastNamePlaceholder: "Your last name",
        emailPlaceholder: "your.email@example.com",
        phonePlaceholder: "+49 or +216...",
        back: "Back",
        next: "Next"
      },
      step3: {
        title: "Your motivation",
        subtitle: "Tell us about your goals",
        motivation: "Why do you want to register with TuniBless?",
        motivationPlaceholder: "Describe your goals and how we can help you...",
        back: "Back",
        submit: "Complete registration"
      },
      success: {
        title: "Registration successful!",
        message: "Thank you for registering. We will contact you within 24 hours.",
        nextSteps: "Next steps:",
        checkEmail: "Check your emails for more information",
        joinWhatsApp: "You will receive a link to the WhatsApp group",
        downloadChecklist: "Download our checklist",
        joinLivestream: "Join our next livestream",
        joinWhatsAppButton: "Join WhatsApp Group",
        downloadButton: "Download Checklist"
      },
      progress: {
        location: "Location",
        contact: "Contact",
        motivation: "Motivation"
      },
      toast: {
        title: "Registration successful!",
        description: "We will contact you soon. Check your emails for next steps."
      }
    },

    // Contact page
    contactPage: {
      title: "Contact",
      subtitle: "We're here to help you",
      form: {
        title: "Send message",
        firstName: "First name",
        lastName: "Last name",
        email: "Email address",
        topic: "Subject",
        message: "Message",
        send: "Send message",
        firstNamePlaceholder: "Your first name",
        lastNamePlaceholder: "Your last name",
        emailPlaceholder: "your.email@example.com",
        topicPlaceholder: "Choose a topic",
        messagePlaceholder: "Your message...",
        topics: {
          registration: "Registration",
          documents: "Documents",
          volunteer: "Volunteer help",
          membership: "Membership",
          other: "Other"
        }
      },
      info: {
        title: "Contact information",
        email: "tunibless@gmail.com",
        address: "Husarenäcker 4, 67659 Kaiserslautern",
        hours: "Opening hours",
        hoursValue: "Mon-Fri: 9:00-18:00"
      },
      quickContact: {
        title: "Quick contact",
        whatsapp: "Join WhatsApp Group",
        messenger: "Facebook Messenger"
      },
      banking: {
        title: "Banking details",
        bank: "Sparkasse Kaiserslautern",
        iban: "DE14 5405 0220 0000 6402 68",
        bic: "MALADE51KLK"
      }
    },

    // Footer
    footer: {
      tagline: "Integration through Education",
      quickLinks: "Quick Links",
      services: "Services",
      community: "Community",
      support: "Support",
      legal: "Legal",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      newsletterDesc: "Stay updated with our latest news",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      allRightsReserved: "All rights reserved",
      registration: "Registration",
      onboarding: "Onboarding",
      roadmap: "Roadmap",
      downloads: "Downloads",
      glossary: "Glossary",
      tunisia: "Tunisia",
      getInvolved: "Get Involved",
      becomeHelper: "Become Helper",
      becomeMember: "Become Member",
      donate: "Donate",
      germany: "Germany",
      worldwide: "Worldwide",
      imprint: "Imprint",
      privacyPolicy: "Privacy Policy",
      cookies: "Cookies",
      readyNextStep: "Ready for the next step?",
      brandDescription: "We support Tunisian students on their way to Germany and promote successful integration through education and community.",
      address: "Sample Street 123, 12345 Sample City",
      email: "info@tunibless.org",
      phone: "+49 (0) 123 456789"
    },
    
    // Forms
    forms: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Submit",
      required: "Required field",
      invalidEmail: "Invalid email address",
      sending: "Sending...",
      success: "Successfully sent!",
      error: "Error sending. Please try again."
    },
    
    // Common elements
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      warning: "Warning",
      info: "Information",
      close: "Close",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      next: "Next",
      previous: "Previous",
      readMore: "Read more",
      showLess: "Show less"
    },
    
    // Pages
    pages: {
      notFound: {
        title: "Page not found",
        description: "The requested page could not be found.",
        goHome: "Go to home"
      }
    }
  }
};
