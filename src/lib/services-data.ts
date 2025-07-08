// Enhanced Services data for the AllServices page
import { 
  FileText, Video, Users, Download, Settings, BookOpen, MessageCircle, Briefcase,
  CheckCircle, FileCheck, Award, Calendar, Search, Globe, GraduationCap, 
  Heart, Building, Plane, MapPin, Phone, Mail, CreditCard, FileImage,
  Smartphone, Laptop, Headphones, Languages, FileSpreadsheet, Presentation
} from "lucide-react";

export interface Service {
  id: string;
  title: {
    de: string;
    ar: string;
    fr: string;
    en: string;
  };
  description: {
    de: string;
    ar: string;
    fr: string;
    en: string;
  };
  shortDescription?: {
    de: string;
    ar: string;
    fr: string;
    en: string;
  };
  category: 'checklists' | 'templates' | 'documents' | 'videos' | 'guides' | 'community' | 'tools' | 'cv' | 'careers' | 'tutorials' | 'apps' | 'integration' | 'legal' | 'financial';
  type: 'PDF' | 'Tool' | 'Video' | 'Link' | 'Template' | 'Guide' | 'App' | 'Course' | 'WhatsApp' | 'Platform';
  icon: any;
  downloadUrl?: string;
  externalUrl?: string;
  whatsappLink?: string;
  action?: string;
  popular?: boolean;
  new?: boolean;
  featured?: boolean;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  duration?: string; // e.g., "5 min", "1 hour", "ongoing"
  requirements?: string[];
  tags: string[];
  rating?: number; // 1-5
  reviews?: number;
  lastUpdated?: string;
  language?: ('de' | 'ar' | 'fr' | 'en')[];
  fileSize?: string;
  preview?: string; // URL to preview image
}

// Category definitions with metadata
export interface ServiceCategory {
  id: string;
  title: {
    de: string;
    ar: string;
    fr: string;
    en: string;
  };
  description: {
    de: string;
    ar: string;
    fr: string;
    en: string;
  };
  icon: any;
  color: string;
  count?: number;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'all',
    title: {
      de: 'Alle Ressourcen',
      ar: 'جميع الموارد',
      fr: 'Toutes les ressources',
      en: 'All Resources'
    },
    description: {
      de: 'Alle verfügbaren Services und Tools',
      ar: 'جميع الخدمات والأدوات المتاحة',
      fr: 'Tous les services et outils disponibles',
      en: 'All available services and tools'
    },
    icon: Globe,
    color: 'primary'
  },
  {
    id: 'checklists',
    title: {
      de: 'Checklisten',
      ar: 'قوائم المراجعة',
      fr: 'Listes de contrôle',
      en: 'Checklists'
    },
    description: {
      de: 'Schritt-für-Schritt Anleitungen und Prüflisten',
      ar: 'أدلة خطوة بخطوة وقوائم مراجعة',
      fr: 'Guides étape par étape et listes de vérification',
      en: 'Step-by-step guides and verification lists'
    },
    icon: CheckCircle,
    color: 'green'
  },
  {
    id: 'cv',
    title: {
      de: 'CV & Bewerbung',
      ar: 'السيرة الذاتية والتقديم',
      fr: 'CV et candidature',
      en: 'CV & Application'
    },
    description: {
      de: 'Vorlagen und Tipps für Bewerbungen',
      ar: 'نماذج ونصائح للتقديمات',
      fr: 'Modèles et conseils pour candidatures',
      en: 'Templates and tips for applications'
    },
    icon: FileText,
    color: 'blue'
  },
  {
    id: 'documents',
    title: {
      de: 'Dokumente',
      ar: 'الوثائق',
      fr: 'Documents',
      en: 'Documents'
    },
    description: {
      de: 'Dokumentenverwaltung und Übersetzungsservices',
      ar: 'إدارة الوثائق وخدمات الترجمة',
      fr: 'Gestion de documents et services de traduction',
      en: 'Document management and translation services'
    },
    icon: FileCheck,
    color: 'orange'
  },
  {
    id: 'tutorials',
    title: {
      de: 'Tutorials',
      ar: 'البرامج التعليمية',
      fr: 'Tutoriels',
      en: 'Tutorials'
    },
    description: {
      de: 'Lernmaterialien und Kurse',
      ar: 'مواد التعلم والدورات',
      fr: 'Matériels d\'apprentissage et cours',
      en: 'Learning materials and courses'
    },
    icon: BookOpen,
    color: 'purple'
  },
  {
    id: 'careers',
    title: {
      de: 'Berufsfelder',
      ar: 'المجالات المهنية',
      fr: 'Domaines professionnels',
      en: 'Career Fields'
    },
    description: {
      de: 'Informationen zu verschiedenen Berufszweigen',
      ar: 'معلومات حول مختلف المجالات المهنية',
      fr: 'Informations sur divers secteurs professionnels',
      en: 'Information about various professional sectors'
    },
    icon: Award,
    color: 'indigo'
  },
  {
    id: 'community',
    title: {
      de: 'Community',
      ar: 'المجتمع',
      fr: 'Communauté',
      en: 'Community'
    },
    description: {
      de: 'Netzwerk und Gemeinschaftsressourcen',
      ar: 'الشبكة وموارد المجتمع',
      fr: 'Réseau et ressources communautaires',
      en: 'Network and community resources'
    },
    icon: Users,
    color: 'pink'
  },
  {
    id: 'tools',
    title: {
      de: 'Tools',
      ar: 'الأدوات',
      fr: 'Outils',
      en: 'Tools'
    },
    description: {
      de: 'Online-Tools und Hilfsmittel',
      ar: 'الأدوات والمساعدات عبر الإنترنت',
      fr: 'Outils en ligne et aides',
      en: 'Online tools and utilities'
    },
    icon: Settings,
    color: 'teal'
  },
  {
    id: 'apps',
    title: {
      de: 'Apps',
      ar: 'التطبيقات',
      fr: 'Applications',
      en: 'Apps'
    },
    description: {
      de: 'Mobile Apps und Anwendungen',
      ar: 'التطبيقات المحمولة والتطبيقات',
      fr: 'Applications mobiles et logiciels',
      en: 'Mobile apps and applications'
    },
    icon: Smartphone,
    color: 'cyan'
  }
];

export const servicesData: Service[] = [
  // ========== CHECKLISTEN ==========
  {
    id: 'integration-checklist',
    title: {
      de: 'Integration Checkliste',
      ar: 'قائمة مراجعة الاندماج',
      fr: 'Liste de contrôle d\'intégration',
      en: 'Integration Checklist'
    },
    description: {
      de: 'Umfassende Schritt-für-Schritt Anleitung mit allen erforderlichen Dokumenten und Terminen für eine erfolgreiche Integration in Deutschland',
      ar: 'دليل شامل خطوة بخطوة مع جميع الوثائق والمواعيد المطلوبة للاندماج الناجح في ألمانيا',
      fr: 'Guide complet étape par étape avec tous les documents et rendez-vous requis pour une intégration réussie en Allemagne',
      en: 'Comprehensive step-by-step guide with all required documents and appointments for successful integration in Germany'
    },
    shortDescription: {
      de: 'Vollständiger Leitfaden für den Integrationsprozess',
      ar: 'دليل كامل لعملية الاندماج',
      fr: 'Guide complet pour le processus d\'intégration',
      en: 'Complete guide for the integration process'
    },
    category: 'checklists',
    type: 'PDF',
    icon: CheckCircle,
    downloadUrl: '/downloads/integration-checklist.pdf',
    popular: true,
    featured: true,
    difficulty: 'beginner',
    duration: '15 min read',
    tags: ['integration', 'checklist', 'guide', 'documents'],
    rating: 4.8,
    reviews: 156,
    lastUpdated: '2024-12-01',
    language: ['de', 'ar', 'fr', 'en'],
    fileSize: '2.4 MB'
  },
  {
    id: 'university-application-checklist',
    title: {
      de: 'Uni-Bewerbungs Checkliste',
      ar: 'قائمة مراجعة التقديم للجامعة',
      fr: 'Liste de contrôle pour candidature universitaire',
      en: 'University Application Checklist'
    },
    description: {
      de: 'Alles was Sie für eine erfolgreiche Universitätsbewerbung in Deutschland benötigen - von Dokumenten bis zu Terminen',
      ar: 'كل ما تحتاجه لتقديم طلب جامعي ناجح في ألمانيا - من الوثائق إلى المواعيد',
      fr: 'Tout ce dont vous avez besoin pour une candidature universitaire réussie en Allemagne - des documents aux délais',
      en: 'Everything you need for a successful university application in Germany - from documents to deadlines'
    },
    category: 'checklists',
    type: 'PDF',
    icon: GraduationCap,
    downloadUrl: '/downloads/university-application-checklist.pdf',
    popular: true,
    difficulty: 'intermediate',
    duration: '20 min read',
    tags: ['university', 'application', 'study', 'documents'],
    rating: 4.7,
    reviews: 89,
    lastUpdated: '2024-11-15',
    language: ['de', 'ar', 'fr', 'en'],
    fileSize: '1.8 MB'
  },
  {
    id: 'visa-documents-checklist',
    title: {
      de: 'Visa-Dokumente Checkliste',
      ar: 'قائمة مراجعة وثائق التأشيرة',
      fr: 'Liste de contrôle des documents de visa',
      en: 'Visa Documents Checklist'
    },
    description: {
      de: 'Vollständige Liste aller benötigten Dokumente für verschiedene Visa-Arten nach Deutschland',
      ar: 'قائمة كاملة بجميع الوثائق المطلوبة لأنواع التأشيرات المختلفة إلى ألمانيا',
      fr: 'Liste complète de tous les documents requis pour différents types de visas vers l\'Allemagne',
      en: 'Complete list of all required documents for different types of visas to Germany'
    },
    category: 'checklists',
    type: 'PDF',
    icon: Plane,
    downloadUrl: '/downloads/visa-documents-checklist.pdf',
    featured: true,
    difficulty: 'intermediate',
    duration: '10 min read',
    tags: ['visa', 'documents', 'travel', 'requirements'],
    rating: 4.9,
    reviews: 234,
    lastUpdated: '2024-12-15',
    language: ['de', 'ar', 'fr', 'en'],
    fileSize: '3.1 MB'
  },

  // ========== CV & BEWERBUNG ==========
  {
    id: 'german-cv-template',
    title: {
      de: 'Deutscher Lebenslauf Vorlage',
      ar: 'نموذج السيرة الذاتية الألمانية',
      fr: 'Modèle de CV allemand',
      en: 'German CV Template'
    },
    description: {
      de: 'Professionelle Lebenslauf-Vorlage nach deutschen Standards mit Tipps und Beispielen für verschiedene Branchen',
      ar: 'نموذج سيرة ذاتية مهنية وفقًا للمعايير الألمانية مع نصائح وأمثلة لمختلف الصناعات',
      fr: 'Modèle de CV professionnel selon les normes allemandes avec conseils et exemples pour différents secteurs',
      en: 'Professional CV template according to German standards with tips and examples for various industries'
    },
    category: 'cv',
    type: 'Template',
    icon: FileText,
    downloadUrl: '/downloads/german-cv-template.docx',
    popular: true,
    difficulty: 'beginner',
    duration: '30 min setup',
    tags: ['cv', 'template', 'job', 'application'],
    rating: 4.6,
    reviews: 312,
    lastUpdated: '2024-10-20',
    language: ['de', 'ar', 'fr', 'en'],
    fileSize: '850 KB'
  },
  {
    id: 'cover-letter-template',
    title: {
      de: 'Bewerbungsschreiben Vorlage',
      ar: 'نموذج خطاب التقديم',
      fr: 'Modèle de lettre de motivation',
      en: 'Cover Letter Template'
    },
    description: {
      de: 'Musterbewerbungsschreiben für verschiedene Branchen und Positionen mit personalisierbaren Abschnitten',
      ar: 'نماذج خطابات تقديم لمختلف الصناعات والمناصب مع أقسام قابلة للتخصيص',
      fr: 'Modèles de lettres de motivation pour divers secteurs et postes avec sections personnalisables',
      en: 'Sample cover letters for various industries and positions with customizable sections'
    },
    category: 'cv',
    type: 'Template',
    icon: FileText,
    downloadUrl: '/downloads/cover-letter-template.docx',
    popular: true,
    difficulty: 'intermediate',
    duration: '45 min setup',
    tags: ['cover letter', 'application', 'job', 'template'],
    rating: 4.5,
    reviews: 167,
    lastUpdated: '2024-11-05',
    language: ['de', 'ar', 'fr', 'en'],
    fileSize: '1.2 MB'
  },
  {
    id: 'portfolio-template',
    title: {
      de: 'Portfolio Vorlage',
      ar: 'نموذج ملف الأعمال',
      fr: 'Modèle de portfolio',
      en: 'Portfolio Template'
    },
    description: {
      de: 'Professionelle Portfolio-Vorlage für kreative Berufe und technische Fachkräfte',
      ar: 'نموذج ملف أعمال مهني للمهن الإبداعية والمتخصصين التقنيين',
      fr: 'Modèle de portfolio professionnel pour les métiers créatifs et les techniciens',
      en: 'Professional portfolio template for creative professions and technical specialists'
    },
    category: 'cv',
    type: 'Template',
    icon: Briefcase,
    downloadUrl: '/downloads/portfolio-template.zip',
    new: true,
    difficulty: 'intermediate',
    duration: '2 hours setup',
    tags: ['portfolio', 'creative', 'technical', 'showcase'],
    rating: 4.4,
    reviews: 78,
    lastUpdated: '2024-12-10',
    language: ['de', 'en'],
    fileSize: '15.8 MB'
  },

  // ========== DOKUMENTE ==========
  {
    id: 'document-upload-portal',
    title: {
      de: 'Dokumente-Upload Portal',
      ar: 'بوابة رفع الوثائق',
      fr: 'Portail de téléchargement de documents',
      en: 'Document Upload Portal'
    },
    description: {
      de: 'Sicheres Online-Portal für den Upload und die Verwaltung Ihrer wichtigen Dokumente mit Ende-zu-Ende-Verschlüsselung',
      ar: 'بوابة آمنة عبر الإنترنت لرفع وإدارة وثائقك المهمة مع التشفير من البداية إلى النهاية',
      fr: 'Portail en ligne sécurisé pour le téléchargement et la gestion de vos documents importants avec chiffrement de bout en bout',
      en: 'Secure online portal for uploading and managing your important documents with end-to-end encryption'
    },
    category: 'documents',
    type: 'Tool',
    icon: FileCheck,
    externalUrl: 'https://portal.tunibless.org/upload',
    popular: true,
    difficulty: 'beginner',
    duration: 'ongoing',
    tags: ['documents', 'upload', 'secure', 'management'],
    rating: 4.7,
    reviews: 203,
    lastUpdated: '2024-12-01',
    language: ['de', 'ar', 'fr', 'en']
  },
  {
    id: 'translator-network',
    title: {
      de: 'Übersetzer-Netzwerk',
      ar: 'شبكة المترجمين',
      fr: 'Réseau de traducteurs',
      en: 'Translator Network'
    },
    description: {
      de: 'Verzeichnis zertifizierter Übersetzer und Dolmetscher für offizielle Dokumente in ganz Deutschland',
      ar: 'دليل المترجمين والمترجمين الفوريين المعتمدين للوثائق الرسمية في جميع أنحاء ألمانيا',
      fr: 'Répertoire de traducteurs et interprètes certifiés pour documents officiels dans toute l\'Allemagne',
      en: 'Directory of certified translators and interpreters for official documents throughout Germany'
    },
    category: 'documents',
    type: 'Platform',
    icon: Languages,
    externalUrl: 'https://translators.tunibless.org',
    difficulty: 'beginner',
    duration: '5 min search',
    tags: ['translation', 'documents', 'certified', 'network'],
    rating: 4.8,
    reviews: 145,
    lastUpdated: '2024-11-20',
    language: ['de', 'ar', 'fr', 'en']
  },

  // ========== TUTORIALS ==========
  {
    id: 'job-interview-training',
    title: {
      de: 'Bewerbungsgespräch Training',
      ar: 'تدريب مقابلة العمل',
      fr: 'Formation entretien d\'embauche',
      en: 'Job Interview Training'
    },
    description: {
      de: 'Interaktives Video-Training mit praktischen Übungen für erfolgreiche Bewerbungsgespräche in Deutschland',
      ar: 'تدريب فيديو تفاعلي مع تمارين عملية لمقابلات عمل ناجحة في ألمانيا',
      fr: 'Formation vidéo interactive avec exercices pratiques pour des entretiens d\'embauche réussis en Allemagne',
      en: 'Interactive video training with practical exercises for successful job interviews in Germany'
    },
    category: 'tutorials',
    type: 'Video',
    icon: Video,
    externalUrl: 'https://learn.tunibless.org/interview-training',
    popular: true,
    difficulty: 'intermediate',
    duration: '2 hours',
    tags: ['interview', 'training', 'job', 'skills'],
    rating: 4.9,
    reviews: 278,
    lastUpdated: '2024-10-15',
    language: ['de', 'ar', 'fr', 'en']
  },
  {
    id: 'german-language-course',
    title: {
      de: 'Deutsch Lernkurs',
      ar: 'دورة تعلم الألمانية',
      fr: 'Cours d\'allemand',
      en: 'German Language Course'
    },
    description: {
      de: 'Kostenloser Online-Deutschkurs von A1 bis B2 mit interaktiven Übungen und Spracherkennung',
      ar: 'دورة ألمانية مجانية عبر الإنترنت من A1 إلى B2 مع تمارين تفاعلية وتقنية التعرف على الصوت',
      fr: 'Cours d\'allemand en ligne gratuit de A1 à B2 avec exercices interactifs et reconnaissance vocale',
      en: 'Free online German course from A1 to B2 with interactive exercises and speech recognition'
    },
    category: 'tutorials',
    type: 'Course',
    icon: Languages,
    externalUrl: 'https://learn.tunibless.org/german',
    featured: true,
    difficulty: 'beginner',
    duration: '6 months',
    tags: ['german', 'language', 'course', 'interactive'],
    rating: 4.6,
    reviews: 534,
    lastUpdated: '2024-12-05',
    language: ['de', 'ar', 'fr', 'en']
  },

  // ========== BERUFE ==========
  {
    id: 'healthcare-careers-guide',
    title: {
      de: 'Berufsfeld-Guide Gesundheit',
      ar: 'دليل مهن الصحة',
      fr: 'Guide des carrières de santé',
      en: 'Healthcare Careers Guide'
    },
    description: {
      de: 'Umfassender Leitfaden für Gesundheitsberufe in Deutschland: Anerkennung, Weiterbildung und Karrieremöglichkeiten',
      ar: 'دليل شامل لمهن الصحة في ألمانيا: الاعتراف والتدريب المهني وفرص المهنة',
      fr: 'Guide complet des professions de santé en Allemagne : reconnaissance, formation continue et opportunités de carrière',
      en: 'Comprehensive guide to healthcare professions in Germany: recognition, continuing education and career opportunities'
    },
    category: 'careers',
    type: 'Guide',
    icon: Heart,
    downloadUrl: '/downloads/healthcare-careers-guide.pdf',
    popular: true,
    difficulty: 'intermediate',
    duration: '45 min read',
    tags: ['healthcare', 'careers', 'recognition', 'education'],
    rating: 4.7,
    reviews: 192,
    lastUpdated: '2024-11-10',
    language: ['de', 'ar', 'fr', 'en'],
    fileSize: '4.2 MB'
  },
  {
    id: 'tech-careers-guide',
    title: {
      de: 'Berufsfeld-Guide Technik',
      ar: 'دليل مهن التكنولوجيا',
      fr: 'Guide des carrières technologiques',
      en: 'Technology Careers Guide'
    },
    description: {
      de: 'Alles über technische Berufe in Deutschland: von der Ausbildung bis zur Karriereentwicklung',
      ar: 'كل شيء عن المهن التقنية في ألمانيا: من التدريب إلى تطوير المهنة',
      fr: 'Tout sur les métiers techniques en Allemagne : de la formation au développement de carrière',
      en: 'Everything about technical professions in Germany: from training to career development'
    },
    category: 'careers',
    type: 'Guide',
    icon: Settings,
    downloadUrl: '/downloads/tech-careers-guide.pdf',
    new: true,
    difficulty: 'intermediate',
    duration: '35 min read',
    tags: ['technology', 'careers', 'training', 'development'],
    rating: 4.5,
    reviews: 98,
    lastUpdated: '2024-12-08',
    language: ['de', 'ar', 'fr', 'en'],
    fileSize: '3.8 MB'
  },

  // ========== COMMUNITY ==========
  {
    id: 'whatsapp-groups',
    title: {
      de: 'WhatsApp Gruppen',
      ar: 'مجموعات واتساب',
      fr: 'Groupes WhatsApp',
      en: 'WhatsApp Groups'
    },
    description: {
      de: 'Treten Sie unseren regionalen WhatsApp-Gruppen bei für direkten Austausch und Unterstützung',
      ar: 'انضم إلى مجموعات واتساب الإقليمية للتبادل المباشر والدعم',
      fr: 'Rejoignez nos groupes WhatsApp régionaux pour des échanges directs et du soutien',
      en: 'Join our regional WhatsApp groups for direct exchange and support'
    },
    category: 'community',
    type: 'WhatsApp',
    icon: MessageCircle,
    whatsappLink: 'main',
    popular: true,
    difficulty: 'beginner',
    duration: 'ongoing',
    tags: ['whatsapp', 'community', 'support', 'networking'],
    rating: 4.8,
    reviews: 445,
    lastUpdated: '2024-12-15',
    language: ['de', 'ar', 'fr', 'en']
  },
  {
    id: 'mentorship-program',
    title: {
      de: 'Mentorship Programm',
      ar: 'برنامج الإرشاد',
      fr: 'Programme de mentorat',
      en: 'Mentorship Program'
    },
    description: {
      de: 'Verbindung mit erfahrenen Mentoren, die bereits erfolgreich in Deutschland integriert sind',
      ar: 'التواصل مع الموجهين ذوي الخبرة الذين اندمجوا بنجاح في ألمانيا',
      fr: 'Connexion avec des mentors expérimentés qui se sont intégrés avec succès en Allemagne',
      en: 'Connect with experienced mentors who have successfully integrated in Germany'
    },
    category: 'community',
    type: 'Platform',
    icon: Users,
    externalUrl: 'https://mentorship.tunibless.org',
    featured: true,
    difficulty: 'beginner',
    duration: '3-6 months',
    tags: ['mentorship', 'guidance', 'networking', 'support'],
    rating: 4.9,
    reviews: 289,
    lastUpdated: '2024-11-25',
    language: ['de', 'ar', 'fr', 'en']
  },

  // ========== TOOLS ==========
  {
    id: 'integration-course-finder',
    title: {
      de: 'Integrationskurs-Finder',
      ar: 'باحث دورات الاندماج',
      fr: 'Localisateur de cours d\'intégration',
      en: 'Integration Course Finder'
    },
    description: {
      de: 'Finden Sie Integrationskurse in Ihrer Nähe mit Filtermöglichkeiten nach Zeit, Ort und Kurstyp',
      ar: 'اعثر على دورات الاندماج بالقرب منك مع خيارات التصفية حسب الوقت والمكان ونوع الدورة',
      fr: 'Trouvez des cours d\'intégration près de chez vous avec des options de filtrage par heure, lieu et type de cours',
      en: 'Find integration courses near you with filtering options by time, location and course type'
    },
    category: 'tools',
    type: 'Tool',
    icon: Search,
    externalUrl: 'https://tools.tunibless.org/course-finder',
    popular: true,
    difficulty: 'beginner',
    duration: '5 min search',
    tags: ['integration', 'courses', 'finder', 'location'],
    rating: 4.6,
    reviews: 178,
    lastUpdated: '2024-12-01',
    language: ['de', 'ar', 'fr', 'en']
  },
  {
    id: 'document-scheduler',
    title: {
      de: 'Termin-Planer für Ämter',
      ar: 'منظم مواعيد الدوائر الحكومية',
      fr: 'Planificateur de rendez-vous administratifs',
      en: 'Government Office Appointment Scheduler'
    },
    description: {
      de: 'Automatische Terminbuchung bei deutschen Behörden mit Erinnerungen und Dokumenten-Checkliste',
      ar: 'حجز المواعيد التلقائي في السلطات الألمانية مع التذكيرات وقائمة مراجعة الوثائق',
      fr: 'Réservation automatique de rendez-vous auprès des autorités allemandes avec rappels et liste de documents',
      en: 'Automatic appointment booking with German authorities including reminders and document checklist'
    },
    category: 'tools',
    type: 'Tool',
    icon: Calendar,
    externalUrl: 'https://tools.tunibless.org/appointment-scheduler',
    new: true,
    difficulty: 'intermediate',
    duration: '10 min setup',
    tags: ['appointments', 'government', 'scheduling', 'automation'],
    rating: 4.4,
    reviews: 67,
    lastUpdated: '2024-12-12',
    language: ['de', 'ar', 'fr', 'en']
  },

  // ========== APPS ==========
  {
    id: 'tunibless-mobile-app',
    title: {
      de: 'TuniBless Mobile App',
      ar: 'تطبيق TuniBless للهاتف المحمول',
      fr: 'Application mobile TuniBless',
      en: 'TuniBless Mobile App'
    },
    description: {
      de: 'Unsere offizielle mobile App mit Push-Benachrichtigungen, Offline-Zugang und personalisierten Inhalten',
      ar: 'تطبيقنا الرسمي للهاتف المحمول مع الإشعارات الفورية والوصول دون اتصال والمحتوى المخصص',
      fr: 'Notre application mobile officielle avec notifications push, accès hors ligne et contenu personnalisé',
      en: 'Our official mobile app with push notifications, offline access and personalized content'
    },
    category: 'apps',
    type: 'App',
    icon: Smartphone,
    externalUrl: 'https://app.tunibless.org',
    featured: true,
    new: true,
    difficulty: 'beginner',
    duration: '5 min install',
    tags: ['mobile', 'app', 'notifications', 'offline'],
    rating: 4.7,
    reviews: 1203,
    lastUpdated: '2024-12-18',
    language: ['de', 'ar', 'fr', 'en']
  }
];

// Helper functions
export const getServicesByCategory = (category: string): Service[] => {
  if (category === 'all') {
    return servicesData;
  }
  return servicesData.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return servicesData.filter(service => service.popular);
};

export const getFeaturedServices = (): Service[] => {
  return servicesData.filter(service => service.featured);
};

export const getNewServices = (): Service[] => {
  return servicesData.filter(service => service.new);
};

export const searchServices = (query: string, language: 'de' | 'ar' | 'fr' | 'en' = 'de'): Service[] => {
  if (!query.trim()) return servicesData;
  
  const lowercaseQuery = query.toLowerCase();
  return servicesData.filter(service => 
    service.title[language].toLowerCase().includes(lowercaseQuery) ||
    service.description[language].toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getCategoryCount = (category: string): number => {
  if (category === 'all') {
    return servicesData.length;
  }
  return servicesData.filter(service => service.category === category).length;
};

export const getLocalizedService = (service: Service, language: 'de' | 'ar' | 'fr' | 'en' = 'de') => {
  return {
    ...service,
    localizedTitle: service.title[language],
    localizedDescription: service.description[language],
    localizedShortDescription: service.shortDescription?.[language]
  };
};

export const sortServices = (services: Service[], sortBy: 'popular' | 'new' | 'rating' | 'alphabetical' = 'popular', language: 'de' | 'ar' | 'fr' | 'en' = 'de'): Service[] => {
  const sorted = [...services];
  
  switch (sortBy) {
    case 'popular':
      return sorted.sort((a, b) => {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return (b.rating || 0) - (a.rating || 0);
      });
    case 'new':
      return sorted.sort((a, b) => {
        if (a.new && !b.new) return -1;
        if (!a.new && b.new) return 1;
        return new Date(b.lastUpdated || '').getTime() - new Date(a.lastUpdated || '').getTime();
      });
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'alphabetical':
      return sorted.sort((a, b) => a.title[language].localeCompare(b.title[language]));
    default:
      return sorted;
  }
};

export default { servicesData, serviceCategories };
