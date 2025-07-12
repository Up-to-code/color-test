interface ColorTrait {
  name: string
  emoji: string
  traits: string
  shortTrait: string
  longDescription: string
}

interface Translations {
  title: string
  subtitle: string
  selectLanguage: string
  selectQuestionCount: string
  questionCounts: {
    quick: string
    standard: string
    detailed: string
  }
  questions: string
  startQuiz: string
  question: string
  of: string
  complete: string
  retakeQuiz: string
  downloadData: string
  colorTraits: {
    red: ColorTrait
    yellow: ColorTrait
    green: ColorTrait
    blue: ColorTrait
  }
  results: {
    title: string
    subtitle: string
    analysis: string
    careers: string
    careerIntro: string
    moreAboutColors: string
  }
  personalityAnalysis: {
    primary: string
    secondary: string
    focused: string
  }
  careerSuggestions: {
    red: string[]
    yellow: string[]
    green: string[]
    blue: string[]
  }
  questionsData: string[] | { question: string; options: string[] }[]
}

export const translations: Record<"en" | "ar" | "es", Translations> = {
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
    downloadData: "Download Results",
    colorTraits: {
      red: {
        name: "Red",
        emoji: "🔴",
        traits: "Assertive, decisive, stubborn, leader",
        shortTrait: "Leader",
        longDescription:
          "The Red personality is characterized by leadership, determination, and ambition. You are direct, love to be in control, and strive to achieve goals quickly and efficiently. You might be stubborn at times, but this reflects your persistence for success. You are born to lead and make tough decisions.",
      },
      yellow: {
        name: "Yellow",
        emoji: "🟡",
        traits: "Playful, optimistic, spontaneous, emotional",
        shortTrait: "Optimist",
        longDescription:
          "The Yellow personality is characterized by playfulness, optimism, and spontaneity. You are social, love the spotlight, and enjoy new experiences. You might be emotional and impulsive, but your positive energy is contagious. You bring joy and inspiration to those around you.",
      },
      green: {
        name: "Green",
        emoji: "🟢",
        traits: "Peaceful, empathetic, listener, flexible",
        shortTrait: "Peacemaker",
        longDescription:
          "The Green personality is characterized by peace, empathy, and flexibility. You are calm, love harmony, and seek to help others. You might be hesitant in making big decisions, but you are an excellent listener and a strong supporter. You build bridges of trust and understanding.",
      },
      blue: {
        name: "Blue",
        emoji: "🔵",
        traits: "Analytical, organized, logical, detail-oriented",
        shortTrait: "Analyst",
        longDescription:
          "The Blue personality is characterized by analysis, organization, and logic. You are precise, love facts, and seek deep understanding of everything. You might be a perfectionist and overthink, but your accuracy and methodology are invaluable. You strive for perfection and bring clarity.",
      },
    },
    results: {
      title: "Your Color Personality Results",
      subtitle: "Discover your unique personality blend!",
      analysis: "Your Personality Analysis",
      careers: "Career Suggestions",
      careerIntro: "Based on your {color} personality, these careers might be a great fit:",
      moreAboutColors: "More About Your Colors",
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
      {
        question: "How do you prefer to communicate?",
        options: [
          "Direct and to the point.",
          "Enthusiastic and expressive.",
          "Gentle and considerate.",
          "Precise and factual.",
        ],
      },
      {
        question: "What's your ideal work environment?",
        options: [
          "Fast-paced and competitive.",
          "Creative and collaborative.",
          "Supportive and harmonious.",
          "Quiet and organized.",
        ],
      },
      {
        question: "How do you handle deadlines?",
        options: [
          "I work best under pressure.",
          "I get energized by the rush.",
          "I prefer steady progress.",
          "I plan ahead to avoid stress.",
        ],
      },
      {
        question: "What's your learning style?",
        options: [
          "Learning by doing and leading.",
          "Interactive and hands-on.",
          "Collaborative and supportive.",
          "Research and systematic study.",
        ],
      },
      {
        question: "How do you handle conflict?",
        options: [
          "Face it head-on.",
          "Try to lighten the mood.",
          "Seek compromise and understanding.",
          "Analyze the root cause.",
        ],
      },
      {
        question: "What drives your decisions?",
        options: [
          "Results and efficiency.",
          "Passion and inspiration.",
          "Values and relationships.",
          "Logic and data.",
        ],
      },
      {
        question: "How do you recharge after a long day?",
        options: [
          "Physical activity or competition.",
          "Socializing or entertainment.",
          "Quiet time with loved ones.",
          "Reading or solitary activities.",
        ],
      },
      {
        question: "What's your approach to risk?",
        options: [
          "Take calculated risks for big rewards.",
          "Embrace uncertainty as adventure.",
          "Prefer safety and stability.",
          "Analyze thoroughly before deciding.",
        ],
      },
      {
        question: "How do you show appreciation?",
        options: [
          "Through achievements and results.",
          "With enthusiasm and celebration.",
          "Through personal gestures and care.",
          "With thoughtful and meaningful actions.",
        ],
      },
      {
        question: "What's your ideal vacation?",
        options: [
          "Adventure sports or challenging activities.",
          "Social gatherings and new experiences.",
          "Peaceful retreat with family.",
          "Cultural exploration and learning.",
        ],
      },
      {
        question: "How do you handle interruptions?",
        options: [
          "I get frustrated and redirect quickly.",
          "I welcome the break and chat.",
          "I politely listen and help if needed.",
          "I prefer to finish my current task first.",
        ],
      },
      {
        question: "What's your meeting style?",
        options: [
          "Keep it short and action-focused.",
          "Encourage brainstorming and ideas.",
          "Ensure everyone has a voice.",
          "Follow agenda and document decisions.",
        ],
      },
      {
        question: "How do you give feedback?",
        options: [
          "Direct and focused on results.",
          "Positive and encouraging.",
          "Gentle and supportive.",
          "Specific and constructive.",
        ],
      },
      {
        question: "What motivates your team participation?",
        options: [
          "Leading and driving results.",
          "Inspiring and energizing others.",
          "Supporting and helping teammates.",
          "Contributing expertise and analysis.",
        ],
      },
      {
        question: "How do you handle routine tasks?",
        options: [
          "Find ways to do them faster.",
          "Make them fun or delegate them.",
          "Do them steadily and reliably.",
          "Systematize and optimize them.",
        ],
      },
      {
        question: "What's your networking approach?",
        options: [
          "Strategic and goal-oriented.",
          "Natural and relationship-focused.",
          "Genuine and trust-building.",
          "Professional and knowledge-sharing.",
        ],
      },
      {
        question: "How do you handle mistakes?",
        options: [
          "Fix them quickly and move on.",
          "Learn from them and stay positive.",
          "Reflect on them and seek support.",
          "Analyze them to prevent recurrence.",
        ],
      },
      {
        question: "What's your presentation style?",
        options: [
          "Confident and persuasive.",
          "Engaging and interactive.",
          "Warm and inclusive.",
          "Detailed and informative.",
        ],
      },
      {
        question: "How do you prioritize tasks?",
        options: [
          "By impact and urgency.",
          "By interest and energy level.",
          "By others' needs and deadlines.",
          "By logical sequence and importance.",
        ],
      },
      {
        question: "What's your problem-solving approach?",
        options: [
          "Take charge and implement solutions.",
          "Brainstorm creative alternatives.",
          "Seek input and build consensus.",
          "Research and analyze systematically.",
        ],
      },
      {
        question: "How do you handle success?",
        options: [
          "Set bigger goals immediately.",
          "Celebrate and share the joy.",
          "Thank those who helped.",
          "Analyze what worked well.",
        ],
      },
      {
        question: "What's your email communication style?",
        options: [
          "Brief and action-oriented.",
          "Friendly and expressive.",
          "Polite and considerate.",
          "Clear and detailed.",
        ],
      },
      {
        question: "How do you handle information overload?",
        options: [
          "Focus on what's most important.",
          "Skim for interesting highlights.",
          "Process it slowly and carefully.",
          "Organize and categorize systematically.",
        ],
      },
      {
        question: "What's your leadership philosophy?",
        options: [
          "Lead by example and results.",
          "Inspire and motivate others.",
          "Serve and support the team.",
          "Guide with knowledge and structure.",
        ],
      },
      {
        question: "How do you handle technology changes?",
        options: [
          "Adopt quickly if it improves efficiency.",
          "Explore enthusiastically.",
          "Wait for others to test it first.",
          "Research thoroughly before adopting.",
        ],
      },
      {
        question: "What's your time management style?",
        options: [
          "Packed schedule with clear priorities.",
          "Flexible with room for spontaneity.",
          "Balanced with time for relationships.",
          "Structured with detailed planning.",
        ],
      },
      {
        question: "How do you handle customer complaints?",
        options: [
          "Resolve quickly and efficiently.",
          "Listen empathetically and reassure.",
          "Understand their feelings and apologize.",
          "Investigate facts and provide solutions.",
        ],
      },
      {
        question: "What's your approach to innovation?",
        options: [
          "Implement proven improvements.",
          "Experiment with creative ideas.",
          "Build on existing successful methods.",
          "Research and test systematically.",
        ],
      },
      {
        question: "How do you handle team disagreements?",
        options: [
          "Make the final decision quickly.",
          "Find creative compromises.",
          "Facilitate discussion until consensus.",
          "Present facts to guide decision.",
        ],
      },
      {
        question: "What's your work-life balance approach?",
        options: [
          "Work hard, play hard.",
          "Integrate fun into everything.",
          "Maintain harmony between both.",
          "Plan and schedule both carefully.",
        ],
      },
      {
        question: "How do you handle budget constraints?",
        options: [
          "Find ways to do more with less.",
          "Get creative with alternatives.",
          "Accept limitations gracefully.",
          "Analyze and optimize spending.",
        ],
      },
      {
        question: "What's your delegation style?",
        options: [
          "Clear expectations and deadlines.",
          "Encourage creativity and ownership.",
          "Provide support and check-ins.",
          "Detailed instructions and milestones.",
        ],
      },
      {
        question: "How do you handle performance reviews?",
        options: [
          "Focus on results and goals.",
          "Celebrate achievements enthusiastically.",
          "Discuss growth and development.",
          "Provide detailed feedback and metrics.",
        ],
      },
      {
        question: "What's your crisis management approach?",
        options: [
          "Take immediate decisive action.",
          "Stay positive and rally the team.",
          "Support affected people first.",
          "Assess situation and plan response.",
        ],
      },
      {
        question: "How do you handle workplace politics?",
        options: [
          "Navigate strategically to achieve goals.",
          "Build relationships and stay positive.",
          "Avoid conflict and stay neutral.",
          "Observe and understand the dynamics.",
        ],
      },
      {
        question: "What's your training and development preference?",
        options: [
          "Skills that drive immediate results.",
          "Interactive and engaging programs.",
          "Collaborative learning environments.",
          "Comprehensive and structured courses.",
        ],
      },
      {
        question: "How do you handle client relationships?",
        options: [
          "Focus on delivering value quickly.",
          "Build rapport and trust.",
          "Understand their needs deeply.",
          "Provide expert advice and solutions.",
        ],
      },
      {
        question: "What's your approach to quality control?",
        options: [
          "Efficient processes that ensure results.",
          "Encourage pride and ownership.",
          "Collaborative review and improvement.",
          "Systematic testing and documentation.",
        ],
      },
      {
        question: "How do you handle remote work?",
        options: [
          "Stay focused on deliverables.",
          "Maintain social connections virtually.",
          "Create comfortable home environment.",
          "Establish structured routines.",
        ],
      },
      {
        question: "What's your long-term career vision?",
        options: [
          "Achieve leadership and influence.",
          "Make a positive impact on others.",
          "Build meaningful relationships and stability.",
          "Become an expert in my field.",
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
    downloadData: "تنزيل النتائج",
    colorTraits: {
      red: {
        name: "الأحمر",
        emoji: "🔴",
        traits: "حازم، حاسم، عنيد، قائد",
        shortTrait: "القائد",
        longDescription:
          "الشخصية الحمراء تتميز بالقيادة، العزيمة، والطموح. أنت شخص مباشر، تحب التحكم، وتسعى لتحقيق الأهداف بسرعة وكفاءة. قد تكون عنيداً في بعض الأحيان، ولكن هذا يعكس إصرارك على النجاح. أنت مولود لتكون قائداً وتتخذ القرارات الصعبة.",
      },
      yellow: {
        name: "الأصفر",
        emoji: "🟡",
        traits: "مرح، متفائل، عفوي، عاطفي",
        shortTrait: "المتفائل",
        longDescription:
          "الشخصية الصفراء تتميز بالمرح، التفاؤل، والعفوية. أنت شخص اجتماعي، تحب الأضواء، وتستمتع بالتجارب الجديدة. قد تكون عاطفياً ومندفعاً، ولكن طاقتك الإيجابية معدية. أنت تجلب البهجة والإلهام لمن حولك.",
      },
      green: {
        name: "الأخضر",
        emoji: "🟢",
        traits: "مسالم، متعاطف، مستمع، مرن",
        shortTrait: "صانع السلام",
        longDescription:
          "الشخصية الخضراء تتميز بالسلام، التعاطف، والمرونة. أنت شخص هادئ، تحب الانسجام، وتسعى لمساعدة الآخرين. قد تكون متردداً في اتخاذ القرارات الكبيرة، ولكنك مستمع ممتاز وداعم قوي. أنت تبني جسوراً من الثقة والتفاهم.",
      },
      blue: {
        name: "الأزرق",
        emoji: "🔵",
        traits: "تحليلي، منظم، منطقي، دقيق التفاصيل",
        shortTrait: "المحلل",
        longDescription:
          "الشخصية الزرقاء تتميز بالتحليل، التنظيم، والمنطق. أنت شخص دقيق، تحب الحقائق، وتسعى للفهم العميق لكل شيء. قد تكون مثالياً وتفرط في التفكير، ولكن دقتك ومنهجيتك لا تقدر بثمن. أنت تسعى للكمال وتجلب الوضوح.",
      },
    },
    results: {
      title: "نتائج شخصيتك بالألوان",
      subtitle: "اكتشف مزيج شخصيتك الفريد!",
      analysis: "تحليل شخصيتك",
      careers: "اقتراحات المهن",
      careerIntro: "بناءً على شخصيتك {color}، قد تناسبك هذه المهن:",
      moreAboutColors: "المزيد عن ألوانك",
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
      {
        question: "كيف تفضل التواصل؟",
        options: ["مباشر ومختصر.", "متحمس ومعبر.", "لطيف ومراعٍ.", "دقيق وواقعي."],
      },
      {
        question: "ما هي بيئة العمل المثالية بالنسبة لك؟",
        options: ["سريعة الوتيرة وتنافسية.", "إبداعية وتعاونية.", "داعمة ومتناغمة.", "هادئة ومنظمة."],
      },
      {
        question: "كيف تتعامل مع المواعيد النهائية؟",
        options: [
          "أعمل بشكل أفضل تحت الضغط.",
          "أشعر بالنشاط من الاندفاع.",
          "أفضل التقدم المطرد.",
          "أخطط مسبقاً لتجنب التوتر.",
        ],
      },
      {
        question: "ما هو أسلوبك في التعلم؟",
        options: ["التعلم بالممارسة والقيادة.", "تفاعلي وعملي.", "تعاوني وداعم.", "بحث ودراسة منهجية."],
      },
      {
        question: "كيف تتعامل مع النزاعات؟",
        options: ["أواجهها مباشرة.", "أحاول تخفيف الأجواء.", "أسعى للحلول الوسط والتفاهم.", "أحلل السبب الجذري."],
      },
      {
        question: "ما الذي يدفع قراراتك؟",
        options: ["النتائج والكفاءة.", "الشغف والإلهام.", "القيم والعلاقات.", "المنطق والبيانات."],
      },
      {
        question: "كيف تستعيد طاقتك بعد يوم طويل؟",
        options: [
          "النشاط البدني أو المنافسة.",
          "التواصل الاجتماعي أو الترفيه.",
          "وقت هادئ مع الأحباء.",
          "القراءة أو الأنشطة الفردية.",
        ],
      },
      {
        question: "ما هو نهجك تجاه المخاطر؟",
        options: [
          "أخاطر بمخاطر محسوبة لتحقيق مكافآت كبيرة.",
          "أحتضن عدم اليقين كمغامرة.",
          "أفضل السلامة والاستقرار.",
          "أحلل بدقة قبل اتخاذ القرار.",
        ],
      },
      {
        question: "كيف تظهر تقديرك؟",
        options: [
          "من خلال الإنجازات والنتائج.",
          "بحماس واحتفال.",
          "من خلال الإيماءات الشخصية والرعاية.",
          "بأفعال مدروسة وذات مغزى.",
        ],
      },
      {
        question: "ما هي عطلتك المثالية؟",
        options: [
          "رياضات المغامرة أو الأنشطة الصعبة.",
          "التجمعات الاجتماعية والتجارب الجديدة.",
          "الاسترخاء الهادئ مع العائلة.",
          "الاستكشاف الثقافي والتعلم.",
        ],
      },
      {
        question: "كيف تتعامل مع الانقطاعات؟",
        options: [
          "أشعر بالإحباط وأعيد التوجيه بسرعة.",
          "أرحب بالاستراحة وأتحدث.",
          "أستمع بلطف وأساعد إذا لزم الأمر.",
          "أفضل إنهاء مهمتي الحالية أولاً.",
        ],
      },
      {
        question: "ما هو أسلوبك في الاجتماعات؟",
        options: [
          "اجعلها قصيرة ومركزة على الإجراءات.",
          "شجع العصف الذهني والأفكار.",
          "تأكد من أن للجميع صوتاً.",
          "اتبع جدول الأعمال ووثق القرارات.",
        ],
      },
      {
        question: "كيف تقدم الملاحظات؟",
        options: ["مباشرة ومركزة على النتائج.", "إيجابية ومشجعة.", "لطيفة وداعمة.", "محددة وبناءة."],
      },
      {
        question: "ما الذي يحفز مشاركتك في الفريق؟",
        options: [
          "القيادة وتحقيق النتائج.",
          "إلهام الآخرين وتنشيطهم.",
          "دعم ومساعدة الزملاء.",
          "المساهمة بالخبرة والتحليل.",
        ],
      },
      {
        question: "كيف تتعامل مع المهام الروتينية؟",
        options: [
          "أجد طرقاً لإنجازها بشكل أسرع.",
          "أجعلها ممتعة أو أفوضها.",
          "أقوم بها بثبات وموثوقية.",
          "أقوم بتنظيمها وتحسينها بشكل منهجي.",
        ],
      },
      {
        question: "ما هو نهجك في بناء العلاقات؟",
        options: [
          "استراتيجي وموجه نحو الهدف.",
          "طبيعي ومركز على العلاقات.",
          "أصيل وبناء للثقة.",
          "مهني ومشارك للمعرفة.",
        ],
      },
      {
        question: "كيف تتعامل مع الأخطاء؟",
        options: [
          "أصلحها بسرعة وأمضي قدماً.",
          "أتعلم منها وأظل إيجابياً.",
          "أتأمل فيها وأطلب الدعم.",
          "أحللها لمنع تكرارها.",
        ],
      },
      {
        question: "ما هو أسلوبك في العرض التقديمي؟",
        options: ["واثق ومقنع.", "جذاب وتفاعلي.", "دافئ وشامل.", "مفصل وغني بالمعلومات."],
      },
      {
        question: "كيف تحدد أولويات المهام؟",
        options: [
          "حسب التأثير والإلحاح.",
          "حسب الاهتمام ومستوى الطاقة.",
          "حسب احتياجات الآخرين والمواعيد النهائية.",
          "حسب التسلسل المنطقي والأهمية.",
        ],
      },
      {
        question: "ما هو نهجك في حل المشكلات؟",
        options: [
          "أتولى المسؤولية وأنفذ الحلول.",
          "أعصف ذهنياً ببدائل إبداعية.",
          "أسعى للحصول على المدخلات وبناء التوافق.",
          "أبحث وأحلل بشكل منهجي.",
        ],
      },
      {
        question: "كيف تتعامل مع النجاح؟",
        options: ["أضع أهدافاً أكبر على الفور.", "أحتفل وأشارك الفرحة.", "أشكر من ساعدني.", "أحلل ما نجح بشكل جيد."],
      },
      {
        question: "ما هو أسلوبك في التواصل عبر البريد الإلكتروني؟",
        options: ["مختصر وموجه نحو الإجراءات.", "ودود ومعبر.", "مهذب ومراعٍ.", "واضح ومفصل."],
      },
      {
        question: "كيف تتعامل مع الحمل الزائد للمعلومات؟",
        options: [
          "أركز على الأهم.",
          "أتصفح بحثاً عن النقاط البارزة المثيرة للاهتمام.",
          "أعالجها ببطء وبعناية.",
          "أنظمها وأصنفها بشكل منهجي.",
        ],
      },
      {
        question: "ما هي فلسفتك في القيادة؟",
        options: [
          "القيادة بالقدوة والنتائج.",
          "إلهام وتحفيز الآخرين.",
          "خدمة ودعم الفريق.",
          "التوجيه بالمعرفة والهيكل.",
        ],
      },
      {
        question: "كيف تتعامل مع التغيرات التكنولوجية؟",
        options: [
          "أتبناها بسرعة إذا كانت تحسن الكفاءة.",
          "أستكشفها بحماس.",
          "أنتظر الآخرين لاختبارها أولاً.",
          "أبحث بدقة قبل التبني.",
        ],
      },
      {
        question: "ما هو أسلوبك في إدارة الوقت؟",
        options: [
          "جدول زمني مزدحم بأولويات واضحة.",
          "مرن مع مساحة للعفوية.",
          "متوازن مع وقت للعلاقات.",
          "منظم مع تخطيط مفصل.",
        ],
      },
      {
        question: "كيف تتعامل مع شكاوى العملاء؟",
        options: [
          "أحلها بسرعة وكفاءة.",
          "أستمع بتعاطف وأطمئن.",
          "أفهم مشاعرهم وأعتذر.",
          "أبحث في الحقائق وأقدم الحلول.",
        ],
      },
      {
        question: "ما هو نهجك تجاه الابتكار؟",
        options: [
          "تطبيق التحسينات المثبتة.",
          "التجريب بأفكار إبداعية.",
          "البناء على الأساليب الناجحة الموجودة.",
          "البحث والاختبار بشكل منهجي.",
        ],
      },
      {
        question: "كيف تتعامل مع خلافات الفريق؟",
        options: [
          "أتخذ القرار النهائي بسرعة.",
          "أجد حلولاً وسط إبداعية.",
          "أسهل النقاش حتى التوافق.",
          "أقدم الحقائق لتوجيه القرار.",
        ],
      },
      {
        question: "ما هو نهجك في التوازن بين العمل والحياة؟",
        options: [
          "أعمل بجد، ألعب بجد.",
          "أدمج المرح في كل شيء.",
          "أحافظ على الانسجام بين الاثنين.",
          "أخطط وأجدول كلاهما بعناية.",
        ],
      },
      {
        question: "كيف تتعامل مع قيود الميزانية؟",
        options: ["أجد طرقاً لإنجاز المزيد بأقل.", "أكون مبدعاً في البدائل.", "أقبل القيود بلطف.", "أحلل وأحسن الإنفاق."],
      },
      {
        question: "ما هو أسلوبك في التفويض؟",
        options: [
          "توقعات واضحة ومواعيد نهائية.",
          "تشجيع الإبداع والملكية.",
          "تقديم الدعم والمتابعة.",
          "تعليمات مفصلة ومراحل.",
        ],
      },
      {
        question: "كيف تتعامل مع مراجعات الأداء؟",
        options: [
          "التركيز على النتائج والأهداف.",
          "الاحتفال بالإنجازات بحماس.",
          "مناقشة النمو والتطوير.",
          "تقديم ملاحظات مفصلة ومقاييس.",
        ],
      },
      {
        question: "ما هو نهجك في إدارة الأزمات؟",
        options: [
          "اتخاذ إجراءات حاسمة فورية.",
          "البقاء إيجابياً وحشد الفريق.",
          "دعم المتضررين أولاً.",
          "تقييم الوضع وتخطيط الاستجابة.",
        ],
      },
      {
        question: "كيف تتعامل مع سياسات مكان العمل؟",
        options: [
          "التنقل استراتيجياً لتحقيق الأهداف.",
          "بناء العلاقات والبقاء إيجابياً.",
          "تجنب الصراع والبقاء محايداً.",
          "مراقبة وفهم الديناميكيات.",
        ],
      },
      {
        question: "ما هو تفضيلك للتدريب والتطوير؟",
        options: [
          "المهارات التي تحقق نتائج فورية.",
          "البرامج التفاعلية والجذابة.",
          "بيئات التعلم التعاوني.",
          "Cursos completos y estructurados.",
        ],
      },
      {
        question: "How do you handle client relationships?",
        options: [
          "Focus on delivering value quickly.",
          "Build rapport and trust.",
          "Understand their needs deeply.",
          "Provide expert advice and solutions.",
        ],
      },
      {
        question: "What's your approach to quality control?",
        options: [
          "Efficient processes that ensure results.",
          "Encourage pride and ownership.",
          "Collaborative review and improvement.",
          "Systematic testing and documentation.",
        ],
      },
      {
        question: "How do you handle remote work?",
        options: [
          "Stay focused on deliverables.",
          "Maintain social connections virtually.",
          "Create comfortable home environment.",
          "Establish structured routines.",
        ],
      },
      {
        question: "What's your long-term career vision?",
        options: [
          "Achieve leadership and influence.",
          "Make a positive impact on others.",
          "Build meaningful relationships and stability.",
          "Become an expert in my field.",
        ],
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
    downloadData: "Descargar Resultados",
    colorTraits: {
      red: {
        name: "Rojo",
        emoji: "🔴",
        traits: "Asertivo, decisivo, terco, líder",
        shortTrait: "Líder",
        longDescription:
          "La personalidad Roja se caracteriza por el liderazgo, la determinación y la ambición. Eres directo, te encanta tener el control y te esfuerzas por lograr tus objetivos de forma rápida y eficiente. A veces puedes ser terco, pero esto refleja tu persistencia para el éxito. Naciste para liderar y tomar decisiones difíciles.",
      },
      yellow: {
        name: "Amarillo",
        emoji: "🟡",
        traits: "Juguetón, optimista, espontáneo, emocional",
        shortTrait: "Optimista",
        longDescription:
          "La personalidad Amarilla se caracteriza por la alegría, el optimismo y la espontaneidad. Eres sociable, te encanta ser el centro de atención y disfrutas de nuevas experiencias. Puedes ser emocional e impulsivo, pero tu energía positiva es contagiosa. Traes alegría e inspiración a quienes te rodean.",
      },
      green: {
        name: "Verde",
        emoji: "🟢",
        traits: "Pacífico, empático, oyente, flexible",
        shortTrait: "Pacificador",
        longDescription:
          "La personalidad Verde se caracteriza por la paz, la empatía y la flexibilidad. Eres tranquilo, amas la armonía y buscas ayudar a los demás. Puedes dudar al tomar grandes decisiones, pero eres un excelente oyente y un gran apoyo. Construyes puentes de confianza y comprensión.",
      },
      blue: {
        name: "Azul",
        emoji: "🔵",
        traits: "Analítico, organizado, lógico, detallista",
        shortTrait: "Analista",
        longDescription:
          "La personalidad Azul se caracteriza por el análisis, la organización y la lógica. Eres preciso, te encantan los hechos y buscas una comprensión profunda de todo. Puedes ser perfeccionista y pensar demasiado, pero tu precisión y metodología son invaluables. Buscas la perfección y aportas claridad.",
      },
    },
    results: {
      title: "Tus Resultados de Personalidad por Colores",
      subtitle: "¡Descubre tu mezcla única de personalidad!",
      analysis: "Tu Análisis de Personalidad",
      careers: "Sugerencias de Carrera",
      careerIntro: "Basado en tu personalidad {color}, estas carreras podrían ser perfectas:",
      moreAboutColors: "Más sobre tus colores",
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
      {
        question: "¿Cómo prefieres comunicarte?",
        options: ["Directo y al grano.", "Entusiasta y expresivo.", "Amable y considerado.", "Preciso y factual."],
      },
      {
        question: "¿Cuál es tu entorno de trabajo ideal?",
        options: [
          "De ritmo rápido y competitivo.",
          "Creativo y colaborativo.",
          "De apoyo y armonioso.",
          "Tranquilo y organizado.",
        ],
      },
      {
        question: "¿Cómo manejas los plazos?",
        options: [
          "Trabajo mejor bajo presión.",
          "Me energiza la prisa.",
          "Prefiero un progreso constante.",
          "Planifico con anticipación para evitar el estrés.",
        ],
      },
      {
        question: "¿Cuál es tu estilo de aprendizaje?",
        options: [
          "Aprender haciendo y liderando.",
          "Interactivo y práctico.",
          "Colaborativo y de apoyo.",
          "Investigación y estudio sistemático.",
        ],
      },
      {
        question: "¿Cómo manejas los conflictos?",
        options: [
          "Lo enfrento directamente.",
          "Intento aligerar el ambiente.",
          "Busco el compromiso y la comprensión.",
          "Analizo la causa raíz.",
        ],
      },
      {
        question: "¿Qué impulsa tus decisiones?",
        options: ["Resultados y eficiencia.", "Pasión e inspiración.", "Valores y relaciones.", "Lógica y datos."],
      },
      {
        question: "¿Cómo te recargas después de un largo día?",
        options: [
          "Actividad física o competición.",
          "Socializar o entretenimiento.",
          "Tiempo tranquilo con seres queridos.",
          "Leer o actividades solitarias.",
        ],
      },
      {
        question: "¿Cuál es tu enfoque ante el riesgo?",
        options: [
          "Asumo riesgos calculados para grandes recompensas.",
          "Abrazo la incertidumbre como una aventura.",
          "Prefiero la seguridad y la estabilidad.",
          "Analizo a fondo antes de decidir.",
        ],
      },
      {
        question: "¿Cómo muestras aprecio?",
        options: [
          "A través de logros y resultados.",
          "Con entusiasmo y celebración.",
          "A través de gestos personales y cuidado.",
          "Con acciones reflexivas y significativas.",
        ],
      },
      {
        question: "¿Cuál es tu vacación ideal?",
        options: [
          "Deportes de aventura o actividades desafiantes.",
          "Reuniones sociales y nuevas experiencias.",
          "Retiro tranquilo con la familia.",
          "Exploración cultural y aprendizaje.",
        ],
      },
      {
        question: "¿Cómo manejas las interrupciones?",
        options: [
          "Me frustro y redirijo rápidamente.",
          "Doy la bienvenida a la pausa y charlo.",
          "Escucho cortésmente y ayudo si es necesario.",
          "Prefiero terminar mi tarea actual primero.",
        ],
      },
      {
        question: "¿Cuál es tu estilo de reunión?",
        options: [
          "Que sea breve y centrada en la acción.",
          "Fomentar la lluvia de ideas y las ideas.",
          "Asegurarse de que todos tengan voz.",
          "Seguir la agenda y documentar las decisiones.",
        ],
      },
      {
        question: "¿Cómo das retroalimentación?",
        options: [
          "Directa y centrada en los resultados.",
          "Positiva y alentadora.",
          "Amable y de apoyo.",
          "Específica y constructiva.",
        ],
      },
      {
        question: "¿Qué motiva tu participación en el equipo?",
        options: [
          "Liderar e impulsar resultados.",
          "Inspirar y energizar a otros.",
          "Apoyar y ayudar a los compañeros de equipo.",
          "Contribuir con experiencia y análisis.",
        ],
      },
      {
        question: "¿Cómo manejas las tareas rutinarias?",
        options: [
          "Encuentro formas de hacerlas más rápido.",
          "Las hago divertidas o las delego.",
          "Las hago de forma constante y fiable.",
          "Las sistematizo y optimizo.",
        ],
      },
      {
        question: "¿Cuál es tu enfoque de networking?",
        options: [
          "Estratégico y orientado a objetivos.",
          "Natural y centrado en las relaciones.",
          "Genuino y que genera confianza.",
          "Profesional y de intercambio de conocimientos.",
        ],
      },
      {
        question: "¿Cómo manejas los errores?",
        options: [
          "Los corrijo rápidamente y sigo adelante.",
          "Aprendo de ellos y me mantengo positivo.",
          "Reflexiono sobre ellos y busco apoyo.",
          "Los analizo para evitar que se repitan.",
        ],
      },
      {
        question: "¿Cuál es tu estilo de presentación?",
        options: [
          "Seguro y persuasivo.",
          "Atractivo e interactivo.",
          "Cálido e inclusivo.",
          "Detallado e informativo.",
        ],
      },
      {
        question: "¿Cómo priorizas las tareas?",
        options: [
          "Por impacto y urgencia.",
          "Por interés y nivel de energía.",
          "Por las necesidades y plazos de los demás.",
          "Por secuencia lógica e importancia.",
        ],
      },
      {
        question: "¿Cuál es tu enfoque para la resolución de problemas?",
        options: [
          "Tomo el control e implemento soluciones.",
          "Hago una lluvia de ideas de alternativas creativas.",
          "Busco aportes y construyo consenso.",
          "Investigo y analizo sistemáticamente.",
        ],
      },
      {
        question: "¿Cómo manejas el éxito?",
        options: [
          "Establezco metas más grandes inmediatamente.",
          "Celebro y comparto la alegría.",
          "Agradezco a quienes me ayudaron.",
          "Analizo lo que funcionó bien.",
        ],
      },
      {
        question: "¿Cuál es tu estilo de comunicación por correo electrónico?",
        options: [
          "Breve y orientada a la acción.",
          "Amigable y expresiva.",
          "Educada y considerada.",
          "Clara y detallada.",
        ],
      },
      {
        question: "¿Cómo manejas la sobrecarga de información?",
        options: [
          "Me concentro en lo más importante.",
          "Busco los puntos destacados interesantes.",
          "Lo proceso lenta y cuidadosamente.",
          "Lo organizo y clasifico sistemáticamente.",
        ],
      },
      {
        question: "¿Cuál es tu filosofía de liderazgo?",
        options: [
          "Liderar con el ejemplo y los resultados.",
          "Inspirar y motivar a otros.",
          "Servir y apoyar al equipo.",
          "Guiar con conocimiento y estructura.",
        ],
      },
      {
        question: "How do you handle technology changes?",
        options: [
          "Adopt quickly if it improves efficiency.",
          "Explore enthusiastically.",
          "Wait for others to test it first.",
          "Research thoroughly before adopting.",
        ],
      },
      {
        question: "What's your time management style?",
        options: [
          "Packed schedule with clear priorities.",
          "Flexible with room for spontaneity.",
          "Balanced with time for relationships.",
          "Structured with detailed planning.",
        ],
      },
      {
        question: "How do you handle customer complaints?",
        options: [
          "Resolve quickly and efficiently.",
          "Listen empathetically and reassure.",
          "Understand their feelings and apologize.",
          "Investigate facts and provide solutions.",
        ],
      },
      {
        question: "What's your approach to innovation?",
        options: [
          "Implement proven improvements.",
          "Experiment with creative ideas.",
          "Build on existing successful methods.",
          "Research and test systematically.",
        ],
      },
      {
        question: "How do you handle team disagreements?",
        options: [
          "Make the final decision quickly.",
          "Find creative compromises.",
          "Facilitate discussion until consensus.",
          "Present facts to guide decision.",
        ],
      },
      {
        question: "What's your work-life balance approach?",
        options: [
          "Work hard, play hard.",
          "Integrate fun into everything.",
          "Maintain harmony between both.",
          "Plan and schedule both carefully.",
        ],
      },
      {
        question: "How do you handle budget constraints?",
        options: [
          "Find ways to do more with less.",
          "Get creative with alternatives.",
          "Accept limitations gracefully.",
          "Analyze and optimize spending.",
        ],
      },
      {
        question: "What's your delegation style?",
        options: [
          "Clear expectations and deadlines.",
          "Encourage creativity and ownership.",
          "Provide support and check-ins.",
          "Detailed instructions and milestones.",
        ],
      },
      {
        question: "How do you handle performance reviews?",
        options: [
          "Focus on results and goals.",
          "Celebrate achievements enthusiastically.",
          "Discuss growth and development.",
          "Provide detailed feedback and metrics.",
        ],
      },
      {
        question: "What's your crisis management approach?",
        options: [
          "Take immediate decisive action.",
          "Stay positive and rally the team.",
          "Support affected people first.",
          "Assess situation and plan response.",
        ],
      },
      {
        question: "How do you handle workplace politics?",
        options: [
          "Navigate strategically to achieve goals.",
          "Build relationships and stay positive.",
          "Avoid conflict and stay neutral.",
          "Observe and understand the dynamics.",
        ],
      },
      {
        question: "What's your training and development preference?",
        options: [
          "Skills that drive immediate results.",
          "Interactive and engaging programs.",
          "Collaborative learning environments.",
          "Comprehensive and structured courses.",
        ],
      },
      {
        question: "How do you handle client relationships?",
        options: [
          "Focus on delivering value quickly.",
          "Build rapport and trust.",
          "Understand their needs deeply.",
          "Provide expert advice and solutions.",
        ],
      },
      {
        question: "What's your approach to quality control?",
        options: [
          "Efficient processes that ensure results.",
          "Encourage pride and ownership.",
          "Collaborative review and improvement.",
          "Systematic testing and documentation.",
        ],
      },
      {
        question: "How do you handle remote work?",
        options: [
          "Stay focused on deliverables.",
          "Maintain social connections virtually.",
          "Create comfortable home environment.",
          "Establish structured routines.",
        ],
      },
      {
        question: "What's your long-term career vision?",
        options: [
          "Achieve leadership and influence.",
          "Make a positive impact on others.",
          "Build meaningful relationships and stability.",
          "Become an expert in my field.",
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
    downloadData: "تنزيل النتائج",
    colorTraits: {
      red: {
        name: "الأحمر",
        emoji: "🔴",
        traits: "حازم، حاسم، عنيد، قائد",
        shortTrait: "القائد",
        longDescription:
          "الشخصية الحمراء تتميز بالقيادة، العزيمة، والطموح. أنت شخص مباشر، تحب التحكم، وتسعى لتحقيق الأهداف بسرعة وكفاءة. قد تكون عنيداً في بعض الأحيان، ولكن هذا يعكس إصرارك على النجاح. أنت مولود لتكون قائداً وتتخذ القرارات الصعبة.",
      },
      yellow: {
        name: "الأصفر",
        emoji: "🟡",
        traits: "مرح، متفائل، عفوي، عاطفي",
        shortTrait: "المتفائل",
        longDescription:
          "الشخصية الصفراء تتميز بالمرح، التفاؤل، والعفوية. أنت شخص اجتماعي، تحب الأضواء، وتستمتع بالتجارب الجديدة. قد تكون عاطفياً ومندفعاً، ولكن طاقتك الإيجابية معدية. أنت تجلب البهجة والإلهام لمن حولك.",
      },
      green: {
        name: "الأخضر",
        emoji: "🟢",
        traits: "مسالم، متعاطف، مستمع، مرن",
        shortTrait: "صانع السلام",
        longDescription:
          "الشخصية الخضراء تتميز بالسلام، التعاطف، والمرونة. أنت شخص هادئ، تحب الانسجام، وتسعى لمساعدة الآخرين. قد تكون متردداً في اتخاذ القرارات الكبيرة، ولكنك مستمع ممتاز وداعم قوي. أنت تبني جسوراً من الثقة والتفاهم.",
      },
      blue: {
        name: "الأزرق",
        emoji: "🔵",
        traits: "تحليلي، منظم، منطقي، دقيق التفاصيل",
        shortTrait: "المحلل",
        longDescription:
          "الشخصية الزرقاء تتميز بالتحليل، التنظيم، والمنطق. أنت شخص دقيق، تحب الحقائق، وتسعى للفهم العميق لكل شيء. قد تكون مثالياً وتفرط في التفكير، ولكن دقتك ومنهجيتك لا تقدر بثمن. أنت تسعى للكمال وتجلب الوضوح.",
      },
    },
    results: {
      title: "نتائج شخصيتك بالألوان",
      subtitle: "اكتشف مزيج شخصيتك الفريد!",
      analysis: "تحليل شخصيتك",
      careers: "اقتراحات المهن",
      careerIntro: "بناءً على شخصيتك {color}، قد تناسبك هذه المهن:",
      moreAboutColors: "المزيد عن ألوانك",
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
      {
        question: "كيف تفضل التواصل؟",
        options: ["مباشر ومختصر.", "متحمس ومعبر.", "لطيف ومراعٍ.", "دقيق وواقعي."],
      },
      {
        question: "ما هي بيئة العمل المثالية بالنسبة لك؟",
        options: ["سريعة الوتيرة وتنافسية.", "إبداعية وتعاونية.", "داعمة ومتناغمة.", "هادئة ومنظمة."],
      },
      {
        question: "كيف تتعامل مع المواعيد النهائية؟",
        options: [
          "أعمل بشكل أفضل تحت الضغط.",
          "أشعر بالنشاط من الاندفاع.",
          "أفضل التقدم المطرد.",
          "أخطط مسبقاً لتجنب التوتر.",
        ],
      },
      {
        question: "ما هو أسلوبك في التعلم؟",
        options: ["التعلم بالممارسة والقيادة.", "تفاعلي وعملي.", "تعاوني وداعم.", "بحث ودراسة منهجية."],
      },
      {
        question: "كيف تتعامل مع النزاعات؟",
        options: ["أواجهها مباشرة.", "أحاول تخفيف الأجواء.", "أسعى للحلول الوسط والتفاهم.", "أحلل السبب الجذري."],
      },
      {
        question: "ما الذي يدفع قراراتك؟",
        options: ["النتائج والكفاءة.", "الشغف والإلهام.", "القيم والعلاقات.", "المنطق والبيانات."],
      },
      {
        question: "كيف تستعيد طاقتك بعد يوم طويل؟",
        options: [
          "النشاط البدني أو المنافسة.",
          "التواصل الاجتماعي أو الترفيه.",
          "وقت هادئ مع الأحباء.",
          "القراءة أو الأنشطة الفردية.",
        ],
      },
      {
        question: "ما هو نهجك تجاه المخاطر؟",
        options: [
          "أخاطر بمخاطر محسوبة لتحقيق مكافآت كبيرة.",
          "أحتضن عدم اليقين كمغامرة.",
          "أفضل السلامة والاستقرار.",
          "أحلل بدقة قبل اتخاذ القرار.",
        ],
      },
      {
        question: "كيف تظهر تقديرك؟",
        options: [
          "من خلال الإنجازات والنتائج.",
          "بحماس واحتفال.",
          "من خلال الإيماءات الشخصية والرعاية.",
          "بأفعال مدروسة وذات مغزى.",
        ],
      },
      {
        question: "ما هي عطلتك المثالية؟",
        options: [
          "رياضات المغامرة أو الأنشطة الصعبة.",
          "التجمعات الاجتماعية والتجارب الجديدة.",
          "الاسترخاء الهادئ مع العائلة.",
          "الاستكشاف الثقافي والتعلم.",
        ],
      },
      {
        question: "كيف تتعامل مع الانقطاعات؟",
        options: [
          "أشعر بالإحباط وأعيد التوجيه بسرعة.",
          "أرحب بالاستراحة وأتحدث.",
          "أستمع بلطف وأساعد إذا لزم الأمر.",
          "أفضل إنهاء مهمتي الحالية أولاً.",
        ],
      },
      {
        question: "ما هو أسلوبك في الاجتماعات؟",
        options: [
          "اجعلها قصيرة ومركزة على الإجراءات.",
          "شجع العصف الذهني والأفكار.",
          "تأكد من أن للجميع صوتاً.",
          "اتبع جدول الأعمال ووثق القرارات.",
        ],
      },
      {
        question: "كيف تقدم الملاحظات؟",
        options: ["مباشرة ومركزة على النتائج.", "إيجابية ومشجعة.", "لطيفة وداعمة.", "محددة وبناءة."],
      },
      {
        question: "ما الذي يحفز مشاركتك في الفريق؟",
        options: [
          "القيادة وتحقيق النتائج.",
          "إلهام الآخرين وتنشيطهم.",
          "دعم ومساعدة الزملاء.",
          "المساهمة بالخبرة والتحليل.",
        ],
      },
      {
        question: "كيف تتعامل مع المهام الروتينية؟",
        options: [
          "أجد طرقاً لإنجازها بشكل أسرع.",
          "أجعلها ممتعة أو أفوضها.",
          "أقوم بها بثبات وموثوقية.",
          "أقوم بتنظيمها وتحسينها بشكل منهجي.",
        ],
      },
      {
        question: "ما هو نهجك في بناء العلاقات؟",
        options: [
          "استراتيجي وموجه نحو الهدف.",
          "طبيعي ومركز على العلاقات.",
          "أصيل وبناء للثقة.",
          "مهني ومشارك للمعرفة.",
        ],
      },
      {
        question: "كيف تتعامل مع الأخطاء؟",
        options: [
          "أصلحها بسرعة وأمضي قدماً.",
          "أتعلم منها وأظل إيجابياً.",
          "أتأمل فيها وأطلب الدعم.",
          "أحللها لمنع تكرارها.",
        ],
      },
      {
        question: "ما هو أسلوبك في العرض التقديمي؟",
        options: ["واثق ومقنع.", "جذاب وتفاعلي.", "دافئ وشامل.", "مفصل وغني بالمعلومات."],
      },
      {
        question: "كيف تحدد أولويات المهام؟",
        options: [
          "حسب التأثير والإلحاح.",
          "حسب الاهتمام ومستوى الطاقة.",
          "حسب احتياجات الآخرين والمواعيد النهائية.",
          "حسب التسلسل المنطقي والأهمية.",
        ],
      },
      {
        question: "ما هو نهجك في حل المشكلات؟",
        options: [
          "أتولى المسؤولية وأنفذ الحلول.",
          "أعصف ذهنياً ببدائل إبداعية.",
          "أسعى للحصول على المدخلات وبناء التوافق.",
          "أبحث وأحلل بشكل منهجي.",
        ],
      },
      {
        question: "كيف تتعامل مع النجاح؟",
        options: ["أضع أهدافاً أكبر على الفور.", "أحتفل وأشارك الفرحة.", "أشكر من ساعدني.", "أحلل ما نجح بشكل جيد."],
      },
      {
        question: "ما هو أسلوبك في التواصل عبر البريد الإلكتروني؟",
        options: ["مختصر وموجه نحو الإجراءات.", "ودود ومعبر.", "مهذب ومراعٍ.", "واضح ومفصل."],
      },
      {
        question: "كيف تتعامل مع الحمل الزائد للمعلومات؟",
        options: [
          "أركز على الأهم.",
          "أتصفح بحثاً عن النقاط البارزة المثيرة للاهتمام.",
          "أعالجها ببطء وبعناية.",
          "أنظمها وأصنفها بشكل منهجي.",
        ],
      },
      {
        question: "ما هي فلسفتك في القيادة؟",
        options: [
          "القيادة بالقدوة والنتائج.",
          "إلهام وتحفيز الآخرين.",
          "خدمة ودعم الفريق.",
          "التوجيه بالمعرفة والهيكل.",
        ],
      },
      {
        question: "كيف تتعامل مع التغيرات التكنولوجية؟",
        options: [
          "أتبناها بسرعة إذا كانت تحسن الكفاءة.",
          "أستكشفها بحماس.",
          "أنتظر الآخرين لاختبارها أولاً.",
          "أبحث بدقة قبل التبني.",
        ],
      },
      {
        question: "ما هو أسلوبك في إدارة الوقت؟",
        options: [
          "جدول زمني مزدحم بأولويات واضحة.",
          "مرن مع مساحة للعفوية.",
          "متوازن مع وقت للعلاقات.",
          "منظم مع تخطيط مفصل.",
        ],
      },
      {
        question: "كيف تتعامل مع شكاوى العملاء؟",
        options: [
          "أحلها بسرعة وكفاءة.",
          "أستمع بتعاطف وأطمئن.",
          "أفهم مشاعرهم وأعتذر.",
          "أبحث في الحقائق وأقدم الحلول.",
        ],
      },
      {
        question: "ما هو نهجك تجاه الابتكار؟",
        options: [
          "تطبيق التحسينات المثبتة.",
          "التجريب بأفكار إبداعية.",
          "البناء على الأساليب الناجحة الموجودة.",
          "البحث والاختبار بشكل منهجي.",
        ],
      },
      {
        question: "كيف تتعامل مع خلافات الفريق؟",
        options: [
          "أتخذ القرار النهائي بسرعة.",
          "أجد حلولاً وسط إبداعية.",
          "أسهل النقاش حتى التوافق.",
          "أقدم الحقائق لتوجيه القرار.",
        ],
      },
      {
        question: "ما هو نهجك في التوازن بين العمل والحياة؟",
        options: [
          "أعمل بجد، ألعب بجد.",
          "أدمج المرح في كل شيء.",
          "أحافظ على الانسجام بين الاثنين.",
          "أخطط وأجدول كلاهما بعناية.",
        ],
      },
      {
        question: "كيف تتعامل مع قيود الميزانية؟",
        options: ["أجد طرقاً لإنجاز المزيد بأقل.", "أكون مبدعاً في البدائل.", "أقبل القيود بلطف.", "أحلل وأحسن الإنفاق."],
      },
      {
        question: "ما هو أسلوبك في التفويض؟",
        options: [
          "توقعات واضحة ومواعيد نهائية.",
          "تشجيع الإبداع والملكية.",
          "تقديم الدعم والمتابعة.",
          "تعليمات مفصلة ومراحل.",
        ],
      },
      {
        question: "كيف تتعامل مع مراجعات الأداء؟",
        options: [
          "التركيز على النتائج والأهداف.",
          "الاحتفال بالإنجازات بحماس.",
          "مناقشة النمو والتطوير.",
          "تقديم ملاحظات مفصلة ومقاييس.",
        ],
      },
      {
        question: "ما هو نهجك في إدارة الأزمات؟",
        options: [
          "اتخاذ إجراءات حاسمة فورية.",
          "البقاء إيجابياً وحشد الفريق.",
          "دعم المتضررين أولاً.",
          "تقييم الوضع وتخطيط الاستجابة.",
        ],
      },
      {
        question: "كيف تتعامل مع سياسات مكان العمل؟",
        options: [
          "التنقل استراتيجياً لتحقيق الأهداف.",
          "بناء العلاقات والبقاء إيجابياً.",
          "تجنب الصراع والبقاء محايداً.",
          "مراقبة وفهم الديناميكيات.",
        ],
      },
      {
        question: "ما هو تفضيلك للتدريب والتطوير؟",
        options: [
          "المهارات التي تحقق نتائج فورية.",
          "البرامج التفاعلية والجذابة.",
          "بيئات التعلم التعاوني.",
          "Cursos completos y estructurados.",
        ],
      },
      {
        question: "How do you handle client relationships?",
        options: [
          "Focus on delivering value quickly.",
          "Build rapport and trust.",
          "Understand their needs deeply.",
          "Provide expert advice and solutions.",
        ],
      },
      {
        question: "What's your approach to quality control?",
        options: [
          "Efficient processes that ensure results.",
          "Encourage pride and ownership.",
          "Collaborative review and improvement.",
          "Systematic testing and documentation.",
        ],
      },
      {
        question: "How do you handle remote work?",
        options: [
          "Stay focused on deliverables.",
          "Maintain social connections virtually.",
          "Create comfortable home environment.",
          "Establish structured routines.",
        ],
      },
      {
        question: "What's your long-term career vision?",
        options: [
          "Achieve leadership and influence.",
          "Make a positive impact on others.",
          "Build meaningful relationships and stability.",
          "Become an expert in my field.",
        ],
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
    downloadData: "Descargar Resultados",
    colorTraits: {
      red: {
        name: "Rojo",
        emoji: "🔴",
        traits: "Asertivo, decisivo, terco, líder",
        shortTrait: "Líder",
        longDescription:
          "La personalidad Roja se caracteriza por el liderazgo, la determinación y la ambición. Eres directo, te encanta tener el control y te esfuerzas por lograr tus objetivos de forma rápida y eficiente. A veces puedes ser terco, pero esto refleja tu persistencia para el éxito. Naciste para liderar y tomar decisiones difíciles.",
      },
      yellow: {
        name: "Amarillo",
        emoji: "🟡",
        traits: "Juguetón, optimista, espontáneo, emocional",
        shortTrait: "Optimista",
        longDescription:
          "La personalidad Amarilla se caracteriza por la alegría, el optimismo y la espontaneidad. Eres sociable, te encanta ser el centro de atención y disfrutas de nuevas experiencias. Puedes ser emocional e impulsivo, pero tu energía positiva es contagiosa. Traes alegría e inspiración a quienes te rodean.",
      },
      green: {
        name: "Verde",
        emoji: "🟢",
        traits: "Pacífico, empático, oyente, flexible",
        shortTrait: "Pacificador",
        longDescription:
          "La personalidad Verde se caracteriza por la paz, la empatía y la flexibilidad. Eres tranquilo, amas la armonía y buscas ayudar a los demás. Puedes dudar al tomar grandes decisiones, pero eres un excelente oyente y un gran apoyo. Construyes puentes de confianza y comprensión.",
      },
      blue: {
        name: "Azul",
        emoji: "🔵",
        traits: "Analítico, organizado, lógico, detallista",
        shortTrait: "Analista",
        longDescription:
          "La personalidad Azul se caracteriza por el análisis, la organización y la lógica. Eres preciso, te encantan los hechos y buscas una comprensión profunda de todo. Puedes ser perfeccionista y pensar demasiado, pero tu precisión y metodología son invaluables. Buscas la perfección y aportas claridad.",
      },
    },
    results: {
      title: "Tus Resultados de Personalidad por Colores",
      subtitle: "¡Descubre tu mezcla única de personalidad!",
      analysis: "Tu Análisis de Personalidad",
      careers: "Sugerencias de Carrera",
      careerIntro: "Basado en tu personalidad {color}, estas carreras podrían ser perfectas:",
      moreAboutColors: "Más sobre tus colores",
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
      {
        question: "¿Cómo prefieres comunicarte?",
        options: ["Directo y al grano.", "Entusiasta y expresivo.", "Amable y considerado.", "Preciso y factual."],
      },
      {
        question: "¿Cuál es tu entorno de trabajo ideal?",
        options: [
          "De ritmo rápido y competitivo.",
          "Creativo y colaborativo.",
          "De apoyo y armonioso.",
          "Tranquilo y organizado.",
        ],
      },
      {
        question: "¿Cómo manejas los plazos?",
        options: [
          "Trabajo mejor bajo presión.",
          "Me energiza la prisa.",
          "Prefiero un progreso constante.",
          "Planifico con anticipación para evitar el estrés.",
        ],
      },
      {
        question: "¿Cuál es tu estilo de aprendizaje?",
        options: [
          "Aprender haciendo y liderando.",
          "Interactivo y práctico.",
          "Colaborativo y de apoyo.",
          "Investigación y estudio sistemático.",
        ],
      },
      {
        question: "¿Cómo manejas los conflictos?",
        options: [
          "Lo enfrento directamente.",
          "Intento aligerar el ambiente.",
          "Busco el compromiso y la comprensión.",
          "Analizo la causa raíz.",
        ],
      },
      {
        question: "¿Qué impulsa tus decisiones?",
        options: ["Resultados y eficiencia.", "Pasión e inspiración.", "Valores y relaciones.", "Lógica y datos."],
      },
      {
        question: "¿Cómo te recargas después de un largo día?",
        options: [
          "Actividad física o competición.",
          "Socializar o entretenimiento.",
          "Tiempo tranquilo con seres queridos.",
          "Leer o actividades solitarias.",
        ],
      },
      {
        question: "¿Cuál es tu enfoque ante el riesgo?",
        options: [
          "Asumo riesgos calculados para grandes recompensas.",
          "Abrazo la incertidumbre como una aventura.",
          "Prefiero la seguridad y la estabilidad.",
          "Analizo a fondo antes de decidir.",
        ],
      },
      {
        question: "¿Cómo muestras aprecio?",
        options: [
          "A través de logros y resultados.",
          "Con entusiasmo y celebración.",
          "A través de gestos personales y cuidado.",
          "Con acciones reflexivas y significativas.",
        ],
      },
      {
        question: "¿Cuál es tu vacación ideal?",
        options: [
          "Deportes de aventura o actividades desafiantes.",
          "Reuniones sociales y nuevas experiencias.",
          "Retiro tranquilo con la familia.",
          "Exploración cultural y aprendizaje.",
        ],
      },
      {
        question: "¿Cómo manejas las interrupciones?",
        options: [
          "Me frustro y redirijo rápidamente.",
          "Doy la bienvenida a la pausa y charlo.",
          "Escucho cortésmente y ayudo si es necesario.",
          "Prefiero terminar mi tarea actual primero.",
        ],
      },
      {
        question: "¿Cuál es tu estilo de reunión?",
        options: [
          "Que sea breve y centrada en la acción.",
          "Fomentar la lluvia de ideas y las ideas.",
          "Asegurarse de que todos tengan voz.",
          "Seguir la agenda y documentar las decisiones.",
        ],
      },
      {
        question: "¿Cómo das retroalimentación?",
        options: [
          "Directa y centrada en los resultados.",
          "Positiva y alentadora.",
          "Amable y de apoyo.",
          "Específica y constructiva.",
        ],
      },
      {
        question: "¿Qué motiva tu participación en el equipo?",
        options: [
          "Liderar e impulsar resultados.",
          "Inspirar y energizar a otros.",
          "Apoyar y ayudar a los compañeros de equipo.",
          "Contribuir con experiencia y análisis.",
        ],
      },
      {
        question: "¿Cómo manejas las tareas rutinarias?",
        options: [
          "Encuentro formas de hacerlas más rápido.",
          "Las hago divertidas o las delego.",
          "Las hago de forma constante y fiable.",
          "Las sistematizo y optimizo.",
        ],
      },
      {
        question: "¿Cuál es tu enfoque de networking?",
        options: [
          "Estratégico y orientado a objetivos.",
          "Natural y centrado en las relaciones.",
          "Genuino y que genera confianza.",
          "Profesional y de intercambio de conocimientos.",
        ],
      },
      {
        question: "¿Cómo manejas los errores?",
        options: [
          "Los corrijo rápidamente y sigo adelante.",
          "Aprendo de ellos y me mantengo positivo.",
          "Reflexiono sobre ellos y busco apoyo.",
          "Los analizo para evitar que se repitan.",
        ],
      },
      {
        question: "¿Cuál es tu estilo de presentación?",
        options: [
          "Seguro y persuasivo.",
          "Atractivo e interactivo.",
          "Cálido e inclusivo.",
          "Detallado e informativo.",
        ],
      },
      {
        question: "¿Cómo priorizas las tareas?",
        options: [
          "Por impacto y urgencia.",
          "Por interés y nivel de energía.",
          "Por las necesidades y plazos de los demás.",
          "Por secuencia lógica e importancia.",
        ],
      },
      {
        question: "¿Cuál es tu enfoque para la resolución de problemas?",
        options: [
          "Tomo el control e implemento soluciones.",
          "Hago una lluvia de ideas de alternativas creativas.",
          "Busco aportes y construyo consenso.",
          "Investigo y analizo sistemáticamente.",
        ],
      },
      {
        question: "¿Cómo manejas el éxito?",
        options: [
          "Establezco metas más grandes inmediatamente.",
          "Celebro y comparto la alegría.",
          "Agradezco a quienes me ayudaron.",
          "Analizo lo que funcionó bien.",
        ],
      },
      {
        question: "¿Cuál es tu estilo de comunicación por correo electrónico?",
        options: [
          "Breve y orientada a la acción.",
          "Amigable y expresiva.",
          "Educada y considerada.",
          "Clara y detallada.",
        ],
      },
      {
        question: "¿Cómo manejas la sobrecarga de información?",
        options: [
          "Me concentro en lo más importante.",
          "Busco los puntos destacados interesantes.",
          "Lo proceso lenta y cuidadosamente.",
          "Lo organizo y clasifico sistemáticamente.",
        ],
      },
      {
        question: "¿Cuál es tu filosofía de liderazgo?",
        options: [
          "Liderar con el ejemplo y los resultados.",
          "Inspirar y motivar a otros.",
          "Servir y apoyar al equipo.",
          "Guiar con conocimiento y estructura.",
        ],
      },
      {
        question: "How do you handle technology changes?",
        options: [
          "Adopt quickly if it improves efficiency.",
          "Explore enthusiastically.",
          "Wait for others to test it first.",
          "Research thoroughly before adopting.",
        ],
      },
      {
        question: "What's your time management style?",
        options: [
          "Packed schedule with clear priorities.",
          "Flexible with room for spontaneity.",
          "Balanced with time for relationships.",
          "Structured with detailed planning.",
        ],
      },
      {
        question: "How do you handle customer complaints?",
        options: [
          "Resolve quickly and efficiently.",
          "Listen empathetically and reassure.",
          "Understand their feelings and apologize.",
          "Investigate facts and provide solutions.",
        ],
      },
      {
        question: "What's your approach to innovation?",
        options: [
          "Implement proven improvements.",
          "Experiment with creative ideas.",
          "Build on existing successful methods.",
          "Research and test systematically.",
        ],
      },
      {
        question: "How do you handle team disagreements?",
        options: [
          "Make the final decision quickly.",
          "Find creative compromises.",
          "Facilitate discussion until consensus.",
          "Present facts to guide decision.",
        ],
      },
      {
        question: "What's your work-life balance approach?",
        options: [
          "Work hard, play hard.",
          "Integrate fun into everything.",
          "Maintain harmony between both.",
          "Plan and schedule both carefully.",
        ],
      },
      {
        question: "How do you handle budget constraints?",
        options: [
          "Find ways to do more with less.",
          "Get creative with alternatives.",
          "Accept limitations gracefully.",
          "Analizo y optimizo el gasto.",
        ],
      },
      {
        question: "What's your delegation style?",
        options: [
          "Clear expectations and deadlines.",
          "Encourage creativity and ownership.",
          "Provide support and check-ins.",
          "Detailed instructions and milestones.",
        ],
      },
      {
        question: "How do you handle performance reviews?",
        options: [
          "Focus on results and goals.",
          "Celebrate achievements enthusiastically.",
          "Discuss growth and development.",
          "Provide detailed feedback and metrics.",
        ],
      },
      {
        question: "What's your crisis management approach?",
        options: [
          "Take immediate decisive action.",
          "Stay positive and rally the team.",
          "Support affected people first.",
          "Assess situation and plan response.",
        ],
      },
      {
        question: "How do you handle workplace politics?",
        options: [
          "Navigate strategically to achieve goals.",
          "Build relationships and stay positive.",
          "Avoid conflict and stay neutral.",
          "Observe and understand the dynamics.",
        ],
      },
      {
        question: "What's your training and development preference?",
        options: [
          "Skills that drive immediate results.",
          "Interactive and engaging programs.",
          "Collaborative learning environments.",
          "Comprehensive and structured courses.",
        ],
      },
      {
        question: "How do you handle client relationships?",
        options: [
          "Focus on delivering value quickly.",
          "Build rapport and trust.",
          "Understand their needs deeply.",
          "Provide expert advice and solutions.",
        ],
      },
      {
        question: "What's your approach to quality control?",
        options: [
          "Efficient processes that ensure results.",
          "Encourage pride and ownership.",
          "Collaborative review and improvement.",
          "Systematic testing and documentation.",
        ],
      },
      {
        question: "How do you handle remote work?",
        options: [
          "Stay focused on deliverables.",
          "Maintain social connections virtually.",
          "Create comfortable home environment.",
          "Establish structured routines.",
        ],
      },
      {
        question: "What's your long-term career vision?",
        options: [
          "Achieve leadership and influence.",
          "Make a positive impact on others.",
          "Build meaningful relationships and stability.",
          "Become an expert in my field.",
        ],
      },
    ],
  },
}
