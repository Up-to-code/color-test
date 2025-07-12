export type Language = "en" | "ar" | "es"

export const translations = {
  en: {
    title: "Color Personality Quiz",
    subtitle: "Discover your personality through colors! Answer questions to reveal your unique blend.",
    selectLanguage: "Select Language",
    selectQuestionCount: "Choose Quiz Length",
    questionCounts: {
      quick: "Quick Test",
      standard: "Standard Test",
      detailed: "Detailed Test",
    },
    questions: "questions",
    startQuiz: "Start Quiz",
    question: "Question",
    of: "of",
    complete: "Complete",
    retakeQuiz: "Take Quiz Again",
    colorTraits: {
      red: {
        name: "Red",
        emoji: "🔴",
        traits: "Assertive, decisive, stubborn, leader",
        shortTrait: "Leader",
      },
      yellow: {
        name: "Yellow",
        emoji: "🟡",
        traits: "Playful, optimistic, spontaneous, emotional",
        shortTrait: "Optimist",
      },
      green: {
        name: "Green",
        emoji: "🟢",
        traits: "Peaceful, empathetic, listener, flexible",
        shortTrait: "Peacemaker",
      },
      blue: {
        name: "Blue",
        emoji: "🔵",
        traits: "Analytical, organized, logical, detail-oriented",
        shortTrait: "Analyst",
      },
    },
    results: {
      title: "Your Color Personality Results",
      subtitle: "Discover your unique personality blend!",
      analysis: "Your Personality Analysis",
      careers: "Career Suggestions",
      careerIntro: "Based on your {color} personality, these careers might be a great fit:",
    },
    personalityAnalysis: {
      primary: "You're primarily a {color} personality ({percentage}%), which means you're {traits}.",
      secondary: "Your secondary {color} traits ({percentage}%) add {traits} to your personality blend.",
      focused: "You have a strong, focused personality type with clear preferences and consistent behavior patterns.",
    },
    careerSuggestions: {
      red: ["CEO/Executive", "Sales Manager", "Entrepreneur", "Project Manager", "Military Officer"],
      yellow: ["Marketing Specialist", "Event Planner", "Teacher", "Social Media Manager", "Artist"],
      green: ["Counselor", "HR Specialist", "Social Worker", "Nurse", "Mediator"],
      blue: ["Data Analyst", "Engineer", "Accountant", "Researcher", "Software Developer"],
    },
    questionsData: [
      {
        question: "How do you react when someone strongly disagrees with your opinion?",
        options: [
          "I defend my stance until the end.",
          "I change the subject to avoid tension.",
          "I listen and try to find common ground.",
          "I analyze the logic in both sides before replying.",
        ],
      },
      {
        question: "How do you usually approach new tasks?",
        options: [
          "I jump in immediately and take charge.",
          "I get excited and like experimenting.",
          "I wait for someone to guide me and help.",
          "I plan everything carefully before starting.",
        ],
      },
      {
        question: "How would your friends describe you?",
        options: ["Direct and determined.", "Fun and energetic.", "Calm and kind.", "Smart and structured."],
      },
      {
        question: "What's your decision-making style?",
        options: [
          "Fast and confident.",
          "Based on my mood and gut feeling.",
          "After consulting others.",
          "Through deep thinking and analysis.",
        ],
      },
      {
        question: "How do you handle criticism?",
        options: [
          "I push back and argue.",
          "I laugh it off or change the topic.",
          "I absorb it quietly and reflect.",
          "I analyze the feedback logically.",
        ],
      },
      {
        question: "In a group project, what's your usual role?",
        options: [
          "Leader and decision-maker.",
          "Idea generator and motivator.",
          "Supportive teammate and listener.",
          "Planner and organizer.",
        ],
      },
      {
        question: "How do you spend your free time?",
        options: [
          "Competing in games or challenges.",
          "Hanging out or trying something new.",
          "Relaxing with family or close friends.",
          "Reading, researching, or organizing.",
        ],
      },
      {
        question: "What's your reaction to sudden change?",
        options: [
          "I take control and adapt fast.",
          "I get excited — I love surprises!",
          "I prefer stability and feel uneasy.",
          "I need to study the change first.",
        ],
      },
      {
        question: "When under stress, how do you act?",
        options: [
          "I become impatient and controlling.",
          "I try to distract myself with fun.",
          "I avoid conflict and go silent.",
          "I overthink and retreat inward.",
        ],
      },
      {
        question: "What motivates you the most?",
        options: [
          "Winning and achieving.",
          "Excitement and enjoyment.",
          "Harmony and appreciation.",
          "Understanding and clarity.",
        ],
      },
    ],
  },
  ar: {
    title: "اختبار الشخصية بالألوان",
    subtitle: "اكتشف شخصيتك من خلال الألوان! أجب على الأسئلة لتكشف مزيجك الفريد.",
    selectLanguage: "اختر اللغة",
    selectQuestionCount: "اختر طول الاختبار",
    questionCounts: {
      quick: "اختبار سريع",
      standard: "اختبار عادي",
      detailed: "اختبار مفصل",
    },
    questions: "أسئلة",
    startQuiz: "ابدأ الاختبار",
    question: "السؤال",
    of: "من",
    complete: "مكتمل",
    retakeQuiz: "أعد الاختبار",
    colorTraits: {
      red: {
        name: "الأحمر",
        emoji: "🔴",
        traits: "حازم، حاسم، عنيد، قائد",
        shortTrait: "القائد",
      },
      yellow: {
        name: "الأصفر",
        emoji: "🟡",
        traits: "مرح، متفائل، عفوي، عاطفي",
        shortTrait: "المتفائل",
      },
      green: {
        name: "الأخضر",
        emoji: "🟢",
        traits: "مسالم، متعاطف، مستمع، مرن",
        shortTrait: "صانع السلام",
      },
      blue: {
        name: "الأزرق",
        emoji: "🔵",
        traits: "تحليلي، منظم، منطقي، دقيق التفاصيل",
        shortTrait: "المحلل",
      },
    },
    results: {
      title: "نتائج شخصيتك بالألوان",
      subtitle: "اكتشف مزيج شخصيتك الفريد!",
      analysis: "تحليل شخصيتك",
      careers: "اقتراحات المهن",
      careerIntro: "بناءً على شخصيتك {color}، قد تناسبك هذه المهن:",
    },
    personalityAnalysis: {
      primary: "أنت في المقام الأول شخصية {color} ({percentage}%)، مما يعني أنك {traits}.",
      secondary: "سماتك الثانوية {color} ({percentage}%) تضيف {traits} إلى مزيج شخصيتك.",
      focused: "لديك نوع شخصية قوي ومركز مع تفضيلات واضحة وأنماط سلوك ثابتة.",
    },
    careerSuggestions: {
      red: ["الرئيس التنفيذي", "مدير المبيعات", "رائد أعمال", "مدير مشروع", "ضابط عسكري"],
      yellow: ["أخصائي تسويق", "منظم فعاليات", "معلم", "مدير وسائل التواصل", "فنان"],
      green: ["مستشار", "أخصائي موارد بشرية", "أخصائي اجتماعي", "ممرض", "وسيط"],
      blue: ["محلل بيانات", "مهندس", "محاسب", "باحث", "مطور برمجيات"],
    },
    questionsData: [
      {
        question: "كيف تتفاعل عندما يختلف شخص بقوة مع رأيك؟",
        options: [
          "أدافع عن موقفي حتى النهاية.",
          "أغير الموضوع لتجنب التوتر.",
          "أستمع وأحاول إيجاد أرضية مشتركة.",
          "أحلل المنطق في كلا الجانبين قبل الرد.",
        ],
      },
      {
        question: "كيف تتعامل عادة مع المهام الجديدة؟",
        options: [
          "أقفز فوراً وأتولى القيادة.",
          "أتحمس وأحب التجريب.",
          "أنتظر شخصاً ليرشدني ويساعدني.",
          "أخطط لكل شيء بعناية قبل البدء.",
        ],
      },
      {
        question: "كيف يصفك أصدقاؤك؟",
        options: ["مباشر ومصمم.", "ممتع ونشيط.", "هادئ ولطيف.", "ذكي ومنظم."],
      },
      {
        question: "ما هو أسلوبك في اتخاذ القرارات؟",
        options: ["سريع وواثق.", "بناءً على مزاجي وحدسي.", "بعد استشارة الآخرين.", "من خلال التفكير العميق والتحليل."],
      },
      {
        question: "كيف تتعامل مع النقد؟",
        options: ["أقاوم وأجادل.", "أضحك عليه أو أغير الموضوع.", "أمتصه بصمت وأتأمل.", "أحلل التعليقات منطقياً."],
      },
      {
        question: "في مشروع جماعي، ما هو دورك المعتاد؟",
        options: ["القائد وصانع القرار.", "مولد الأفكار والمحفز.", "زميل داعم ومستمع.", "المخطط والمنظم."],
      },
      {
        question: "كيف تقضي وقت فراغك؟",
        options: [
          "أتنافس في الألعاب أو التحديات.",
          "أتسكع أو أجرب شيئاً جديداً.",
          "أسترخي مع العائلة أو الأصدقاء المقربين.",
          "أقرأ أو أبحث أو أنظم.",
        ],
      },
      {
        question: "ما هو رد فعلك على التغيير المفاجئ؟",
        options: [
          "أتولى السيطرة وأتكيف بسرعة.",
          "أتحمس - أحب المفاجآت!",
          "أفضل الاستقرار وأشعر بالقلق.",
          "أحتاج لدراسة التغيير أولاً.",
        ],
      },
      {
        question: "عندما تكون تحت الضغط، كيف تتصرف؟",
        options: [
          "أصبح نفاد الصبر ومسيطراً.",
          "أحاول إلهاء نفسي بالمرح.",
          "أتجنب الصراع وأصمت.",
          "أفرط في التفكير وأنسحب للداخل.",
        ],
      },
      {
        question: "ما الذي يحفزك أكثر؟",
        options: ["الفوز والإنجاز.", "الإثارة والاستمتاع.", "الانسجام والتقدير.", "الفهم والوضوح."],
      },
    ],
  },
  es: {
    title: "Test de Personalidad por Colores",
    subtitle: "¡Descubre tu personalidad a través de los colores! Responde preguntas para revelar tu mezcla única.",
    selectLanguage: "Seleccionar Idioma",
    selectQuestionCount: "Elegir Duración del Test",
    questionCounts: {
      quick: "Test Rápido",
      standard: "Test Estándar",
      detailed: "Test Detallado",
    },
    questions: "preguntas",
    startQuiz: "Comenzar Test",
    question: "Pregunta",
    of: "de",
    complete: "Completo",
    retakeQuiz: "Repetir Test",
    colorTraits: {
      red: {
        name: "Rojo",
        emoji: "🔴",
        traits: "Asertivo, decisivo, terco, líder",
        shortTrait: "Líder",
      },
      yellow: {
        name: "Amarillo",
        emoji: "🟡",
        traits: "Juguetón, optimista, espontáneo, emocional",
        shortTrait: "Optimista",
      },
      green: {
        name: "Verde",
        emoji: "🟢",
        traits: "Pacífico, empático, oyente, flexible",
        shortTrait: "Pacificador",
      },
      blue: {
        name: "Azul",
        emoji: "🔵",
        traits: "Analítico, organizado, lógico, detallista",
        shortTrait: "Analista",
      },
    },
    results: {
      title: "Tus Resultados de Personalidad por Colores",
      subtitle: "¡Descubre tu mezcla única de personalidad!",
      analysis: "Tu Análisis de Personalidad",
      careers: "Sugerencias de Carrera",
      careerIntro: "Basado en tu personalidad {color}, estas carreras podrían ser perfectas:",
    },
    personalityAnalysis: {
      primary: "Eres principalmente una personalidad {color} ({percentage}%), lo que significa que eres {traits}.",
      secondary: "Tus rasgos secundarios {color} ({percentage}%) añaden {traits} a tu mezcla de personalidad.",
      focused:
        "Tienes un tipo de personalidad fuerte y enfocado con preferencias claras y patrones de comportamiento consistentes.",
    },
    careerSuggestions: {
      red: ["CEO/Ejecutivo", "Gerente de Ventas", "Emprendedor", "Gerente de Proyecto", "Oficial Militar"],
      yellow: [
        "Especialista en Marketing",
        "Organizador de Eventos",
        "Maestro",
        "Gerente de Redes Sociales",
        "Artista",
      ],
      green: ["Consejero", "Especialista en RRHH", "Trabajador Social", "Enfermero", "Mediador"],
      blue: ["Analista de Datos", "Ingeniero", "Contador", "Investigador", "Desarrollador de Software"],
    },
    questionsData: [
      {
        question: "¿Cómo reaccionas cuando alguien está fuertemente en desacuerdo con tu opinión?",
        options: [
          "Defiendo mi postura hasta el final.",
          "Cambio el tema para evitar tensión.",
          "Escucho y trato de encontrar puntos en común.",
          "Analizo la lógica de ambos lados antes de responder.",
        ],
      },
      {
        question: "¿Cómo sueles abordar nuevas tareas?",
        options: [
          "Salto inmediatamente y tomo el control.",
          "Me emociono y me gusta experimentar.",
          "Espero a que alguien me guíe y ayude.",
          "Planeo todo cuidadosamente antes de empezar.",
        ],
      },
      {
        question: "¿Cómo te describirían tus amigos?",
        options: [
          "Directo y determinado.",
          "Divertido y enérgico.",
          "Tranquilo y amable.",
          "Inteligente y estructurado.",
        ],
      },
      {
        question: "¿Cuál es tu estilo para tomar decisiones?",
        options: [
          "Rápido y confiado.",
          "Basado en mi estado de ánimo e intuición.",
          "Después de consultar a otros.",
          "A través de pensamiento profundo y análisis.",
        ],
      },
      {
        question: "¿Cómo manejas las críticas?",
        options: [
          "Me resisto y discuto.",
          "Me río o cambio el tema.",
          "Lo absorbo silenciosamente y reflexiono.",
          "Analizo los comentarios lógicamente.",
        ],
      },
      {
        question: "En un proyecto grupal, ¿cuál es tu rol usual?",
        options: [
          "Líder y tomador de decisiones.",
          "Generador de ideas y motivador.",
          "Compañero de apoyo y oyente.",
          "Planificador y organizador.",
        ],
      },
      {
        question: "¿Cómo pasas tu tiempo libre?",
        options: [
          "Compitiendo en juegos o desafíos.",
          "Pasando el rato o probando algo nuevo.",
          "Relajándome con familia o amigos cercanos.",
          "Leyendo, investigando u organizando.",
        ],
      },
      {
        question: "¿Cuál es tu reacción al cambio repentino?",
        options: [
          "Tomo control y me adapto rápido.",
          "Me emociono - ¡amo las sorpresas!",
          "Prefiero estabilidad y me siento inquieto.",
          "Necesito estudiar el cambio primero.",
        ],
      },
      {
        question: "Cuando estás bajo estrés, ¿cómo actúas?",
        options: [
          "Me vuelvo impaciente y controlador.",
          "Trato de distraerme con diversión.",
          "Evito el conflicto y me quedo callado.",
          "Pienso demasiado y me retiro hacia adentro.",
        ],
      },
      {
        question: "¿Qué te motiva más?",
        options: ["Ganar y lograr.", "Emoción y disfrute.", "Armonía y apreciación.", "Entendimiento y claridad."],
      },
    ],
  },
}
