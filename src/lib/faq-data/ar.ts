export const faqDataAr = {
  categories: {
    registration: "التسجيل",
    documents: "الوثائق",
    whatsapp: "مجموعات واتساب",
    integration: "الاندماج",
    services: "الخدمات",
    general: "عام"
  },
  questions: {
    registration: [
      {
        id: "reg-1",
        question: "كيف يمكنني التسجيل في تونس بليس؟",
        answer: "قم بزيارة صفحة التسجيل واملأ النموذج المكون من 3 خطوات. ستحتاج إلى بياناتك الشخصية ومعلومات عن موقعك الحالي.",
        relatedLinks: [
          { text: "إلى التسجيل", url: "/registration" },
          { text: "خدماتنا", url: "/services" }
        ],
        tags: ["تسجيل", "نموذج", "بيانات"],
        lastUpdated: "2024-12-15",
        isNew: false,
        isUpdated: false
      },
      {
        id: "reg-2",
        question: "هل التسجيل مجاني؟",
        answer: "نعم، التسجيل وجميع خدمات الاستشارة مجانية تماماً. نحن جمعية غير ربحية.",
        relatedLinks: [
          { text: "من نحن", url: "/about" },
          { text: "التبرعات", url: "/donate" }
        ],
        tags: ["مجاني", "رسوم", "جمعية"],
        lastUpdated: "2024-12-10",
        isNew: false,
        isUpdated: false
      },
      {
        id: "reg-3",
        question: "كم من الوقت يستغرق الحصول على رد؟",
        answer: "بعد التسجيل، سنتواصل معك خلال 24 ساعة. في الحالات العاجلة، يمكنك استخدام مجموعات واتساب مباشرة.",
        relatedLinks: [
          { text: "اتصل بنا", url: "/contact" },
          { text: "مجموعات واتساب", url: "/whatsapp" }
        ],
        tags: ["رد", "تواصل", "وقت"],
        lastUpdated: "2024-12-12",
        isNew: false,
        isUpdated: true
      },
      {
        id: "reg-4",
        question: "ما هي المعلومات المطلوبة للتسجيل؟",
        answer: "يجب إدخال اسمك، عنوان البريد الإلكتروني، رقم الهاتف (واتساب)، موقعك الحالي ودافعك للتسجيل.",
        relatedLinks: [
          { text: "نموذج التسجيل", url: "/registration" },
          { text: "سياسة الخصوصية", url: "/datenschutz" }
        ],
        tags: ["بيانات", "معلومات", "خصوصية"],
        lastUpdated: "2024-12-20",
        isNew: true,
        isUpdated: false
      }
    ],
    documents: [
      {
        id: "doc-1",
        question: "ما هي الوثائق المطلوبة لألمانيا؟",
        answer: "تحتاج إلى: جواز السفر، شهادات تعليمية مصدقة، شهادة ميلاد، شهادة حسن سيرة وسلوك، وشهادة صحية إذا لزم الأمر. يجب ترجمة جميع الوثائق.",
        relatedLinks: [
          { text: "قائمة الوثائق", url: "/services/documents" },
          { text: "التحميلات", url: "/downloads" }
        ],
        tags: ["وثائق", "مستندات", "ترجمة"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-2",
        question: "أين يمكنني ترجمة وثائقي؟",
        answer: "نوفر لك قائمة بالمترجمين المعتمدين. يمكنك العثور عليها في قسم الموارد أو في صفحة التحميلات.",
        relatedLinks: [
          { text: "قائمة المترجمين", url: "/downloads" },
          { text: "الخدمات", url: "/services" }
        ],
        tags: ["ترجمة", "مترجمين", "معتمد"],
        lastUpdated: "2024-12-16",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-3",
        question: "كم تبقى الوثائق المترجمة صالحة؟",
        answer: "الترجمات المصدقة عادة لا تنتهي صلاحيتها. لكن تأكد من أن الوثائق الأصلية ما زالت صالحة.",
        relatedLinks: [
          { text: "المسرد", url: "/glossar" },
          { text: "القانونية", url: "/impressum" }
        ],
        tags: ["صلاحية", "تصديق", "أصلي"],
        lastUpdated: "2024-12-14",
        isNew: false,
        isUpdated: false
      },
      {
        id: "doc-4",
        question: "كم تكلف ترجمة وثائقي؟",
        answer: "التكاليف تختلف حسب المترجم والحجم. توقع 25-50 يورو لكل صفحة للترجمات المصدقة. لدينا خصومات مع بعض المترجمين الشركاء.",
        relatedLinks: [
          { text: "المترجمون الشركاء", url: "/downloads" },
          { text: "نظرة عامة على التكاليف", url: "/services" }
        ],
        tags: ["تكاليف", "أسعار", "خصم"],
        lastUpdated: "2024-12-19",
        isNew: false,
        isUpdated: true
      }
    ],
    whatsapp: [
      {
        id: "wa-1",
        question: "كيف أنضم إلى مجموعة واتساب؟",
        answer: "بعد التسجيل، ستحصل تلقائياً على رابط مجموعة واتساب الإقليمية بناء على موقعك.",
        relatedLinks: [
          { text: "التسجيل", url: "/registration" },
          { text: "المجموعات الإقليمية", url: "/regions" }
        ],
        tags: ["واتساب", "مجموعة", "إقليمي"],
        lastUpdated: "2024-12-17",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-2",
        question: "ما هي اللغات المستخدمة في المجموعات؟",
        answer: "أساساً العربية والفرنسية. المصطلحات الألمانية يتم شرحها. منسقونا يتحدثون عدة لغات.",
        relatedLinks: [
          { text: "فريقنا", url: "/team" },
          { text: "اللغات", url: "/languages" }
        ],
        tags: ["لغات", "عربي", "فرنسي", "ألماني"],
        lastUpdated: "2024-12-13",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-3",
        question: "هل توجد قواعد لمجموعات واتساب؟",
        answer: "نعم، لدينا قواعد للمجموعة للتعامل الاحترافي. ستحصل عليها عند انضمامك للمجموعة.",
        relatedLinks: [
          { text: "إرشادات المجتمع", url: "/community-guidelines" },
          { text: "قواعد السلوك", url: "/code-of-conduct" }
        ],
        tags: ["قواعد", "سلوك", "احترام"],
        lastUpdated: "2024-12-11",
        isNew: false,
        isUpdated: false
      },
      {
        id: "wa-4",
        question: "هل يمكنني الانضمام إلى عدة مجموعات واتساب؟",
        answer: "نعم، يمكنك الانضمام إلى مجموعتك الإقليمية وأيضاً للمجموعات المتخصصة (مثل الدراسة، العمل).",
        relatedLinks: [
          { text: "نظرة عامة على المجموعات", url: "/whatsapp-groups" },
          { text: "المواضيع", url: "/topics" }
        ],
        tags: ["عدة مجموعات", "مواضيع", "تخصص"],
        lastUpdated: "2024-12-21",
        isNew: true,
        isUpdated: false
      }
    ],
    integration: [
      {
        id: "int-1",
        question: "كم يستغرق عملية الاندماج؟",
        answer: "عملية الاندماج تختلف حسب الوضع الفردي. في المتوسط تستغرق 6-18 شهر من التحضير حتى الوصول إلى ألمانيا.",
        relatedLinks: [
          { text: "خارطة الطريق", url: "/roadmap" },
          { text: "الجدول الزمني", url: "/timeline" }
        ],
        tags: ["وقت", "مدة", "عملية"],
        lastUpdated: "2024-12-19",
        isNew: false,
        isUpdated: false
      },
      {
        id: "int-2",
        question: "ما الدعم الذي يقدمه تونس بليس؟",
        answer: "نقدم استشارة مجانية، مساعدة في الوثائق، قوائم مراجعة، ندوات، دعم واتساب ومجتمع نشط يضم أكثر من 1200 عضو.",
        relatedLinks: [
          { text: "خدماتنا", url: "/services" },
          { text: "من نحن", url: "/about" }
        ],
        tags: ["دعم", "استشارة", "مجتمع"],
        lastUpdated: "2024-12-20",
        isNew: false,
        isUpdated: true
      },
      {
        id: "int-3",
        question: "هل يجب أن أتحدث الألمانية؟",
        answer: "المعرفة الأساسية مفيدة، لكنها ليست ضرورية. كثير من أعضائنا يتعلمون الألمانية أثناء العملية. لدينا موارد ودعم باللغة الألمانية.",
        relatedLinks: [
          { text: "تعلم الألمانية", url: "/german-learning" },
          { text: "دورات اللغة", url: "/language-courses" }
        ],
        tags: ["ألماني", "لغة", "تعلم"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      }
    ],
    services: [
      {
        id: "srv-1",
        question: "ما هي الخدمات المتاحة؟",
        answer: "نقدم قوائم مراجعة، قوالب وثائق، مساعدة في الترجمة، استشارة شخصية، ندوات ودعم المجتمع.",
        relatedLinks: [
          { text: "جميع الخدمات", url: "/services" },
          { text: "الندوات", url: "/events" }
        ],
        tags: ["خدمات", "قوائم", "استشارة"],
        lastUpdated: "2024-12-15",
        isNew: false,
        isUpdated: false
      },
      {
        id: "srv-2",
        question: "هل يمكنني الحصول على دعم في الموقع؟",
        answer: "نعم، لدينا منسقون إقليميون في مدن مختلفة في ألمانيا وتونس يقدمون استشارات شخصية.",
        relatedLinks: [
          { text: "فريقنا", url: "/team" },
          { text: "اتصل بنا", url: "/contact" }
        ],
        tags: ["في الموقع", "منسقون", "شخصي"],
        lastUpdated: "2024-12-16",
        isNew: false,
        isUpdated: false
      },
      {
        id: "srv-3",
        question: "هل توجد ندوات عبر الإنترنت؟",
        answer: "نعم، ننظم بانتظام ندوات عبر الإنترنت حول مواضيع مختلفة مثل الدراسة، التأشيرة، البحث عن عمل والاندماج.",
        relatedLinks: [
          { text: "الفعاليات", url: "/events" },
          { text: "أرشيف الندوات", url: "/webinars" }
        ],
        tags: ["ندوات", "عبر الإنترنت", "تدريبات"],
        lastUpdated: "2024-12-22",
        isNew: true,
        isUpdated: false
      }
    ],
    general: [
      {
        id: "gen-1",
        question: "ما هو تونس بليس؟",
        answer: "تونس بليس جمعية غير ربحية تدعم العائلات والشباب التونسي في اندماجهم في ألمانيا.",
        relatedLinks: [
          { text: "من نحن", url: "/about" },
          { text: "مهمتنا", url: "/mission" }
        ],
        tags: ["تونس بليس", "جمعية", "مهمة"],
        lastUpdated: "2024-12-10",
        isNew: false,
        isUpdated: false
      },
      {
        id: "gen-2",
        question: "كيف يمكنني دعم تونس بليس؟",
        answer: "يمكنك دعمنا كمساعد، أو أن تصبح عضواً أو تتبرع. كل شكل من أشكال الدعم يساعد مجتمعنا.",
        relatedLinks: [
          { text: "كن مساعداً", url: "/volunteer" },
          { text: "العضوية", url: "/membership" },
          { text: "التبرعات", url: "/donate" }
        ],
        tags: ["دعم", "مساعد", "تبرعات"],
        lastUpdated: "2024-12-18",
        isNew: false,
        isUpdated: false
      },
      {
        id: "gen-3",
        question: "هل تونس بليس للتونسيين فقط؟",
        answer: "أساساً ندعم العائلات التونسية، لكننا نساعد أيضاً الأشخاص الناطقين بالعربية الآخرين في طلبات مماثلة.",
        relatedLinks: [
          { text: "الجمهور المستهدف", url: "/target-audience" },
          { text: "الشمولية", url: "/inclusion" }
        ],
        tags: ["جمهور مستهدف", "تونسيين", "عربي"],
        lastUpdated: "2024-12-14",
        isNew: false,
        isUpdated: false
      }
    ]
  }
};
