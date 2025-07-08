// Events data structure for the Events page
import { 
  Calendar, MapPin, Users, Video, Clock, Star, GraduationCap, 
  Info, Handshake, Heart, Globe, Play, ExternalLink, Map,
  Phone, Mail, Bookmark, Share, Download, CheckCircle
} from "lucide-react";

export type EventType = 'workshop' | 'info-session' | 'networking' | 'family-camp' | 'consultation' | 'cultural';
export type EventStatus = 'upcoming' | 'live' | 'past' | 'cancelled' | 'full';
export type EventFormat = 'in-person' | 'livestream' | 'hybrid';

export interface EventLocation {
  venue: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  directions?: string;
  publicTransport?: string;
  parking?: string;
}

export interface Event {
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
  objectives?: {
    de: string[];
    ar: string[];
    fr: string[];
    en: string[];
  };
  type: EventType;
  format: EventFormat;
  status: EventStatus;
  featured?: boolean;
  startDate: string;
  endDate?: string;
  startTime: string;
  endTime?: string;
  timezone: string;
  location?: EventLocation;
  onlineLink?: string;
  maxParticipants?: number;
  currentParticipants?: number;
  spotsLeft?: number;
  price?: number;
  currency?: string;
  languages: ('de' | 'ar' | 'fr' | 'en')[];
  targetAudience: {
    de: string[];
    ar: string[];
    fr: string[];
    en: string[];
  };
  requirements?: {
    de: string[];
    ar: string[];
    fr: string[];
    en: string[];
  };
  organizer: {
    name: string;
    email?: string;
    phone?: string;
  };
  tags: string[];
  image?: string;
  gallery?: string[];
  recordings?: {
    title: string;
    url: string;
    date: string;
  }[];
  relatedEvents?: string[];
  registrationUrl?: string;
  calendarUrl?: string;
  shareUrl?: string;
}

export interface LivestreamSchedule {
  id: string;
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  time: string;
  timezone: string;
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
  language: 'de' | 'ar' | 'fr' | 'en';
  host: string;
  platform: 'youtube' | 'facebook' | 'zoom' | 'whatsapp';
  joinUrl: string;
  replayUrl?: string;
  isActive: boolean;
  audience: {
    de: string;
    ar: string;
    fr: string;
    en: string;
  };
}

// Event data
export const eventsData: Event[] = [
  // Featured Events
  {
    id: 'family-camp-2024',
    title: {
      de: 'Familien-Camp 2024',
      ar: 'مخيم العائلات 2024',
      fr: 'Camp Familial 2024',
      en: 'Family Camp 2024'
    },
    description: {
      de: 'Ein unvergessliches Wochenende für tunesische Familien mit Workshops, kulturellen Aktivitäten und Networking. Bringen Sie Ihre ganze Familie mit und erleben Sie eine wunderbare Zeit mit Gleichgesinnten.',
      ar: 'عطلة نهاية أسبوع لا تُنسى للعائلات التونسية مع ورش عمل وأنشطة ثقافية وتواصل. أحضر عائلتك بالكامل واستمتع بوقت رائع مع أشخاص متشابهين في التفكير.',
      fr: 'Un week-end inoubliable pour les familles tunisiennes avec des ateliers, des activités culturelles et du réseautage. Amenez toute votre famille et vivez un moment merveilleux avec des personnes partageant les mêmes idées.',
      en: 'An unforgettable weekend for Tunisian families with workshops, cultural activities and networking. Bring your whole family and experience a wonderful time with like-minded people.'
    },
    objectives: {
      de: [
        'Familien zusammenbringen und Gemeinschaft stärken',
        'Kulturelle Identität bewahren und teilen',
        'Kinder bei der Integration unterstützen',
        'Neue Freundschaften knüpfen'
      ],
      ar: [
        'جمع العائلات وتقوية المجتمع',
        'الحفاظ على الهوية الثقافية ومشاركتها',
        'دعم الأطفال في عملية الاندماج',
        'تكوين صداقات جديدة'
      ],
      fr: [
        'Rassembler les familles et renforcer la communauté',
        'Préserver et partager l\'identité culturelle',
        'Soutenir les enfants dans l\'intégration',
        'Nouer de nouvelles amitiés'
      ],
      en: [
        'Bring families together and strengthen community',
        'Preserve and share cultural identity',
        'Support children in integration',
        'Form new friendships'
      ]
    },
    type: 'family-camp',
    format: 'in-person',
    status: 'upcoming',
    featured: true,
    startDate: '2024-06-22',
    endDate: '2024-06-24',
    startTime: '09:00',
    endTime: '18:00',
    timezone: 'Europe/Berlin',
    location: {
      venue: 'Jugendherberge Kaiserslautern',
      address: 'Husarenäcker 4',
      city: 'Kaiserslautern',
      region: 'Rheinland-Pfalz',
      postalCode: '67659',
      country: 'Deutschland',
      coordinates: {
        lat: 49.4401,
        lng: 7.7491
      },
      directions: 'Mit dem Auto: A6 Ausfahrt Kaiserslautern-West. Mit der Bahn: Hauptbahnhof Kaiserslautern, dann Bus 101.',
      publicTransport: 'Bus 101 von Hauptbahnhof bis Haltestelle Husarenäcker',
      parking: 'Kostenlose Parkplätze vor Ort verfügbar'
    },
    maxParticipants: 150,
    currentParticipants: 120,
    spotsLeft: 30,
    price: 25,
    currency: 'EUR',
    languages: ['de', 'ar'],
    targetAudience: {
      de: ['Tunesische Familien', 'Kinder jeden Alters', 'Eltern'],
      ar: ['العائلات التونسية', 'الأطفال من جميع الأعمار', 'الآباء'],
      fr: ['Familles tunisiennes', 'Enfants de tous âges', 'Parents'],
      en: ['Tunisian families', 'Children of all ages', 'Parents']
    },
    organizer: {
      name: 'TuniBless e.V.',
      email: 'events@tunibless.de',
      phone: '+49 (0) 631 123456789'
    },
    tags: ['family', 'culture', 'community', 'children', 'integration'],
    image: '/assets/family-camp-2024.jpg',
    registrationUrl: 'https://forms.google.com/family-camp-2024',
    calendarUrl: '/calendar/family-camp-2024.ics'
  },

  // Workshops
  {
    id: 'integration-workshop-berlin',
    title: {
      de: 'Integration Workshop Berlin',
      ar: 'ورشة عمل الاندماج في برلين',
      fr: 'Atelier d\'intégration Berlin',
      en: 'Integration Workshop Berlin'
    },
    description: {
      de: 'Praktischer Workshop für Neuankömmlinge mit wichtigen Informationen über Behördengänge, Jobsuche und das Leben in Deutschland.',
      ar: 'ورشة عمل عملية للوافدين الجدد مع معلومات مهمة حول المعاملات الإدارية والبحث عن عمل والحياة في ألمانيا.',
      fr: 'Atelier pratique pour les nouveaux arrivants avec des informations importantes sur les démarches administratives, la recherche d\'emploi et la vie en Allemagne.',
      en: 'Practical workshop for newcomers with important information about administrative procedures, job search and life in Germany.'
    },
    objectives: {
      de: [
        'Behördengänge verstehen und meistern',
        'Effektive Jobsuche-Strategien lernen',
        'Wichtige Kontakte knüpfen',
        'Praktische Tipps für den Alltag'
      ],
      ar: [
        'فهم وإتقان المعاملات الإدارية',
        'تعلم استراتيجيات البحث عن عمل الفعالة',
        'تكوين اتصالات مهمة',
        'نصائح عملية للحياة اليومية'
      ],
      fr: [
        'Comprendre et maîtriser les démarches administratives',
        'Apprendre des stratégies de recherche d\'emploi efficaces',
        'Établir des contacts importants',
        'Conseils pratiques pour la vie quotidienne'
      ],
      en: [
        'Understand and master administrative procedures',
        'Learn effective job search strategies',
        'Build important contacts',
        'Practical tips for daily life'
      ]
    },
    type: 'workshop',
    format: 'in-person',
    status: 'upcoming',
    startDate: '2024-03-15',
    startTime: '10:00',
    endTime: '16:00',
    timezone: 'Europe/Berlin',
    location: {
      venue: 'Community Center Neukölln',
      address: 'Herrnhuter Weg 16',
      city: 'Berlin',
      region: 'Berlin',
      postalCode: '12043',
      country: 'Deutschland',
      coordinates: {
        lat: 52.4797,
        lng: 13.4395
      },
      directions: 'U-Bahn: U7 bis Hermannplatz, dann 5 Minuten zu Fuß',
      publicTransport: 'U7, U8 Hermannplatz + 5 Min. Fußweg',
      parking: 'Begrenzte Straßenparkplätze'
    },
    maxParticipants: 25,
    currentParticipants: 18,
    spotsLeft: 7,
    languages: ['de', 'ar'],
    targetAudience: {
      de: ['Neuankömmlinge', 'Arbeitssuchende', 'Studenten'],
      ar: ['الوافدون الجدد', 'الباحثون عن عمل', 'الطلاب'],
      fr: ['Nouveaux arrivants', 'Demandeurs d\'emploi', 'Étudiants'],
      en: ['Newcomers', 'Job seekers', 'Students']
    },
    organizer: {
      name: 'TuniBless Berlin',
      email: 'berlin@tunibless.de'
    },
    tags: ['workshop', 'integration', 'berlin', 'jobs', 'bureaucracy']
  },

  // More events...
  {
    id: 'career-consultation-hamburg',
    title: {
      de: 'Berufsberatung Hamburg',
      ar: 'استشارة مهنية في هامبورغ',
      fr: 'Conseil en carrière Hambourg',
      en: 'Career Consultation Hamburg'
    },
    description: {
      de: 'Individuelle Beratung für berufliche Orientierung und Karriereplanung in Deutschland.',
      ar: 'استشارة فردية للتوجه المهني وتخطيط المسيرة المهنية في ألمانيا.',
      fr: 'Conseils individuels pour l\'orientation professionnelle et la planification de carrière en Allemagne.',
      en: 'Individual consultation for career orientation and career planning in Germany.'
    },
    type: 'consultation',
    format: 'in-person',
    status: 'upcoming',
    startDate: '2024-04-08',
    startTime: '14:00',
    endTime: '18:00',
    timezone: 'Europe/Berlin',
    location: {
      venue: 'Bürgerzentrum Altona',
      address: 'Große Bergstraße 154',
      city: 'Hamburg',
      region: 'Hamburg',
      postalCode: '22767',
      country: 'Deutschland'
    },
    maxParticipants: 20,
    currentParticipants: 15,
    spotsLeft: 5,
    languages: ['de', 'ar'],
    targetAudience: {
      de: ['Berufstätige', 'Karrierewechsler', 'Studienabsolventen'],
      ar: ['العاملون', 'الراغبون في تغيير المهنة', 'خريجو الجامعات'],
      fr: ['Professionnels', 'Changement de carrière', 'Diplômés'],
      en: ['Professionals', 'Career changers', 'Graduates']
    },
    organizer: {
      name: 'TuniBless Hamburg',
      email: 'hamburg@tunibless.de'
    },
    tags: ['consultation', 'career', 'hamburg', 'guidance']
  }
];

// Weekly livestream schedules
export const livestreamSchedule: LivestreamSchedule[] = [
  {
    id: 'german-for-all',
    day: 'tuesday',
    time: '20:00',
    timezone: 'Europe/Berlin',
    title: {
      de: 'Deutsch für alle',
      ar: 'الألمانية للجميع',
      fr: 'Allemand pour tous',
      en: 'German for Everyone'
    },
    description: {
      de: 'Kostenloses Deutschtraining für alle Levels mit interaktiven Übungen und Konversation.',
      ar: 'تدريب مجاني على اللغة الألمانية لجميع المستويات مع تمارين تفاعلية ومحادثة.',
      fr: 'Formation gratuite en allemand pour tous les niveaux avec exercices interactifs et conversation.',
      en: 'Free German training for all levels with interactive exercises and conversation.'
    },
    language: 'de',
    host: 'Sarah Müller',
    platform: 'youtube',
    joinUrl: 'https://youtube.com/live/german-for-all',
    replayUrl: 'https://youtube.com/playlist/german-for-all',
    isActive: true,
    audience: {
      de: 'Alle Deutschlerner',
      ar: 'جميع متعلمي اللغة الألمانية',
      fr: 'Tous les apprenants d\'allemand',
      en: 'All German learners'
    }
  },
  {
    id: 'qa-session',
    day: 'wednesday',
    time: '20:00',
    timezone: 'Europe/Berlin',
    title: {
      de: 'Q&A Session',
      ar: 'جلسة أسئلة وأجوبة',
      fr: 'Session Q&R',
      en: 'Q&A Session'
    },
    description: {
      de: 'Offene Fragerunde zu allen Themen rund um Integration, Bildung und Leben in Deutschland.',
      ar: 'جولة أسئلة مفتوحة حول جميع المواضيع المتعلقة بالاندماج والتعليم والحياة في ألمانيا.',
      fr: 'Session de questions ouvertes sur tous les sujets liés à l\'intégration, l\'éducation et la vie en Allemagne.',
      en: 'Open Q&A session on all topics related to integration, education and life in Germany.'
    },
    language: 'ar',
    host: 'Ahmed Ben Salem',
    platform: 'facebook',
    joinUrl: 'https://facebook.com/live/tunibless-qa',
    isActive: true,
    audience: {
      de: 'Tunesische Community',
      ar: 'المجتمع التونسي',
      fr: 'Communauté tunisienne',
      en: 'Tunisian community'
    }
  },
  {
    id: 'experience-exchange',
    day: 'thursday',
    time: '21:00',
    timezone: 'Europe/Berlin',
    title: {
      de: 'Erfahrungsaustausch',
      ar: 'تبادل الخبرات',
      fr: 'Échange d\'expériences',
      en: 'Experience Exchange'
    },
    description: {
      de: 'Entspannter Austausch von Erfahrungen, Erfolgsgeschichten und Herausforderungen.',
      ar: 'تبادل مريح للخبرات وقصص النجاح والتحديات.',
      fr: 'Échange détendu d\'expériences, d\'histoires de réussite et de défis.',
      en: 'Relaxed exchange of experiences, success stories and challenges.'
    },
    language: 'ar',
    host: 'Fatima Khedri',
    platform: 'whatsapp',
    joinUrl: 'https://chat.whatsapp.com/experience-exchange',
    isActive: true,
    audience: {
      de: 'Erfahrene Mitglieder',
      ar: 'الأعضاء ذوو الخبرة',
      fr: 'Membres expérimentés',
      en: 'Experienced members'
    }
  }
];

// Utility functions
export const getEventsByStatus = (status: EventStatus): Event[] => {
  return eventsData.filter(event => event.status === status);
};

export const getEventsByType = (type: EventType): Event[] => {
  return eventsData.filter(event => event.type === type);
};

export const getEventsByRegion = (region: string): Event[] => {
  return eventsData.filter(event => 
    event.location && event.location.region.toLowerCase() === region.toLowerCase()
  );
};

export const getFeaturedEvents = (): Event[] => {
  return eventsData.filter(event => event.featured);
};

export const getUpcomingEvents = (): Event[] => {
  const now = new Date();
  return eventsData.filter(event => {
    const eventDate = new Date(event.startDate);
    return eventDate > now && event.status === 'upcoming';
  }).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
};

export const searchEvents = (query: string, language: 'de' | 'ar' | 'fr' | 'en'): Event[] => {
  const searchTerm = query.toLowerCase();
  return eventsData.filter(event => 
    event.title[language].toLowerCase().includes(searchTerm) ||
    event.description[language].toLowerCase().includes(searchTerm) ||
    event.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    (event.location && event.location.city.toLowerCase().includes(searchTerm))
  );
};

export const getEventTypeIcon = (type: EventType) => {
  switch (type) {
    case 'workshop': return GraduationCap;
    case 'info-session': return Info;
    case 'networking': return Handshake;
    case 'family-camp': return Heart;
    case 'consultation': return Users;
    case 'cultural': return Globe;
    default: return Calendar;
  }
};

export const getEventStatusColor = (status: EventStatus): string => {
  switch (status) {
    case 'upcoming': return 'text-green-600';
    case 'live': return 'text-red-600';
    case 'past': return 'text-gray-500';
    case 'cancelled': return 'text-red-500';
    case 'full': return 'text-orange-500';
    default: return 'text-gray-500';
  }
};

export const formatEventDate = (date: string, locale: string = 'de-DE'): string => {
  return new Date(date).toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatEventTime = (time: string, locale: string = 'de-DE'): string => {
  return new Date(`2024-01-01T${time}`).toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const isEventLive = (event: Event): boolean => {
  const now = new Date();
  const eventStart = new Date(`${event.startDate}T${event.startTime}`);
  const eventEnd = event.endTime ? new Date(`${event.endDate || event.startDate}T${event.endTime}`) : null;
  
  return event.status === 'live' || (now >= eventStart && (!eventEnd || now <= eventEnd));
};

export const getTimeUntilEvent = (event: Event): number => {
  const now = new Date();
  const eventStart = new Date(`${event.startDate}T${event.startTime}`);
  return eventStart.getTime() - now.getTime();
};

export default eventsData;
