"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PersonalityChart } from "@/components/personality-chart"

interface ColorScores {
  red: number
  yellow: number
  green: number
  blue: number
}

type QuestionCount = 10 | 20 | 50
type Language = "en" | "ar" | "es"

const translations = {
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
          "الدورات الشاملة والمنظمة.",
        ],
      },
      {
        question: "كيف تتعامل مع علاقات العملاء؟",
        options: [
          "التركيز على تقديم القيمة بسرعة.",
          "بناء العلاقة والثقة.",
          "فهم احتياجاتهم بعمق.",
          "تقديم المشورة والحلول الخبيرة.",
        ],
      },
      {
        question: "ما هو نهجك في مراقبة الجودة؟",
        options: [
          "عمليات فعالة تضمن النتائج.",
          "تشجيع الفخر والملكية.",
          "المراجعة والتحسين التعاوني.",
          "الاختبار والتوثيق المنهجي.",
        ],
      },
      {
        question: "كيف تتعامل مع العمل عن بعد؟",
        options: [
          "التركيز على المخرجات.",
          "الحفاظ على الروابط الاجتماعية افتراضياً.",
          "خلق بيئة منزلية مريحة.",
          "وضع روتينات منظمة.",
        ],
      },
      {
        question: "ما هي رؤيتك المهنية طويلة المدى؟",
        options: [
          "تحقيق القيادة والتأثير.",
          "إحداث تأثير إيجابي على الآخرين.",
          "بناء علاقات ذات معنى واستقرار.",
          "أن أصبح خبيراً في مجالي.",
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
        question: "¿Cómo manejas los cambios tecnológicos?",
        options: [
          "Adopto rápidamente si mejora la eficiencia.",
          "Exploro con entusiasmo.",
          "Espero a que otros lo prueben primero.",
          "Investigo a fondo antes de adoptar.",
        ],
      },
      {
        question: "¿Cuál es tu estilo de gestión del tiempo?",
        options: [
          "Horario apretado con prioridades claras.",
          "Flexible con espacio para la espontaneidad.",
          "Equilibrado con tiempo para las relaciones.",
          "Estructurado con planificación detallada.",
        ],
      },
      {
        question: "¿Cómo manejas las quejas de los clientes?",
        options: [
          "Resuelvo rápida y eficientemente.",
          "Escucho con empatía y tranquilizo.",
          "Entiendo sus sentimientos y me disculpo.",
          "Investigo los hechos y proporciono soluciones.",
        ],
      },
      {
        question: "¿Cuál es tu enfoque de la innovación?",
        options: [
          "Implementar mejoras probadas.",
          "Experimentar con ideas creativas.",
          "Construir sobre métodos exitosos existentes.",
          "Investigar y probar sistemáticamente.",
        ],
      },
      {
        question: "¿Cómo manejas los desacuerdos del equipo?",
        options: [
          "Tomo la decisión final rápidamente.",
          "Encuentro compromisos creativos.",
          "Facilito la discusión hasta el consenso.",
          "Presento hechos para guiar la decisión.",
        ],
      },
      {
        question: "¿Cuál es tu enfoque del equilibrio entre vida laboral y personal?",
        options: [
          "Trabajar duro, jugar duro.",
          "Integrar la diversión en todo.",
          "Mantener la armonía entre ambos.",
          "Planificar y programar ambos cuidadosamente.",
        ],
      },
      {
        question: "¿Cómo manejas las restricciones presupuestarias?",
        options: [
          "Encuentro formas de hacer más con menos.",
          "Soy creativo con las alternativas.",
          "Acepto las limitaciones con gracia.",
          "Analizo y optimizo el gasto.",
        ],
      },
      {
        question: "¿Cuál es tu estilo de delegación?",
        options: [
          "Expectativas y plazos claros.",
          "Fomentar la creatividad y la propiedad.",
          "Proporcionar apoyo y seguimiento.",
          "Instrucciones detalladas e hitos.",
        ],
      },
      {
        question: "¿Cómo manejas las revisiones de desempeño?",
        options: [
          "Me centro en los resultados y los objetivos.",
          "Celebro los logros con entusiasmo.",
          "Discuto el crecimiento y el desarrollo.",
          "Proporciono retroalimentación detallada y métricas.",
        ],
      },
      {
        question: "¿Cuál es tu enfoque de gestión de crisis?",
        options: [
          "Tomo medidas decisivas inmediatas.",
          "Me mantengo positivo y movilizo al equipo.",
          "Apoyo primero a las personas afectadas.",
          "Evalúo la situación y planifico la respuesta.",
        ],
      },
      {
        question: "¿Cómo manejas la política en el lugar de trabajo?",
        options: [
          "Navego estratégicamente para lograr objetivos.",
          "Construyo relaciones y me mantengo positivo.",
          "Evito conflictos y me mantengo neutral.",
          "Observo y entiendo la dinámica.",
        ],
      },
      {
        question: "¿Cuál es tu preferencia de formación y desarrollo?",
        options: [
          "Habilidades que impulsan resultados inmediatos.",
          "Programas interactivos y atractivos.",
          "Entornos de aprendizaje colaborativos.",
          "Cursos completos y estructurados.",
        ],
      },
      {
        question: "¿Cómo manejas las relaciones con los clientes?",
        options: [
          "Me centro en entregar valor rápidamente.",
          "Construyo una buena relación y confianza.",
          "Entiendo sus necesidades profundamente.",
          "Proporciono asesoramiento y soluciones expertas.",
        ],
      },
      {
        question: "¿Cuál es tu enfoque del control de calidad?",
        options: [
          "Procesos eficientes que garantizan resultados.",
          "Fomentar el orgullo y la propiedad.",
          "Revisión y mejora colaborativa.",
          "Pruebas y documentación sistemáticas.",
        ],
      },
      {
        question: "¿Cómo manejas el trabajo remoto?",
        options: [
          "Me mantengo centrado en los entregables.",
          "Mantengo las conexiones sociales virtualmente.",
          "Creo un ambiente hogareño cómodo.",
          "Establezco rutinas estructuradas.",
        ],
      },
      {
        question: "¿Cuál es tu visión profesional a largo plazo?",
        options: [
          "Lograr liderazgo e influencia.",
          "Generar un impacto positivo en los demás.",
          "Construir relaciones significativas y estabilidad.",
          "Convertirme en un experto en mi campo.",
        ],
      },
    ],
  },
}

// Master question structure with English text and color mapping
const questions10 = [
  {
    id: 1,
    question: "How do you react when someone strongly disagrees with your opinion?",
    options: [
      { text: "I defend my stance until the end.", color: "red" },
      { text: "I change the subject to avoid tension.", color: "yellow" },
      { text: "I listen and try to find common ground.", color: "green" },
      { text: "I analyze the logic in both sides before replying.", color: "blue" },
    ],
  },
  {
    id: 2,
    question: "How do you usually approach new tasks?",
    options: [
      { text: "I jump in immediately and take charge.", color: "red" },
      { text: "I get excited and like experimenting.", color: "yellow" },
      { text: "I wait for someone to guide me and help.", color: "green" },
      { text: "I plan everything carefully before starting.", color: "blue" },
    ],
  },
  {
    id: 3,
    question: "How would your friends describe you?",
    options: [
      { text: "Direct and determined.", color: "red" },
      { text: "Fun and energetic.", color: "yellow" },
      { text: "Calm and kind.", color: "green" },
      { text: "Smart and structured.", color: "blue" },
    ],
  },
  {
    id: 4,
    question: "What's your decision-making style?",
    options: [
      { text: "Fast and confident.", color: "red" },
      { text: "Based on my mood and gut feeling.", color: "yellow" },
      { text: "After consulting others.", color: "green" },
      { text: "Through deep thinking and analysis.", color: "blue" },
    ],
  },
  {
    id: 5,
    question: "How do you handle criticism?",
    options: [
      { text: "I push back and argue.", color: "red" },
      { text: "I laugh it off or change the topic.", color: "yellow" },
      { text: "I absorb it quietly and reflect.", color: "green" },
      { text: "I analyze the feedback logically.", color: "blue" },
    ],
  },
  {
    id: 6,
    question: "In a group project, what's your usual role?",
    options: [
      { text: "Leader and decision-maker.", color: "red" },
      { text: "Idea generator and motivator.", color: "yellow" },
      { text: "Supportive teammate and listener.", color: "green" },
      { text: "Planner and organizer.", color: "blue" },
    ],
  },
  {
    id: 7,
    question: "How do you spend your free time?",
    options: [
      { text: "Competing in games or challenges.", color: "red" },
      { text: "Hanging out or trying something new.", color: "yellow" },
      { text: "Relaxing with family or close friends.", color: "green" },
      { text: "Reading, researching, or organizing.", color: "blue" },
    ],
  },
  {
    id: 8,
    question: "What's your reaction to sudden change?",
    options: [
      { text: "I take control and adapt fast.", color: "red" },
      { text: "I get excited — I love surprises!", color: "yellow" },
      { text: "I prefer stability and feel uneasy.", color: "green" },
      { text: "I need to study the change first.", color: "blue" },
    ],
  },
  {
    id: 9,
    question: "When under stress, how do you act?",
    options: [
      { text: "I become impatient and controlling.", color: "red" },
      { text: "I try to distract myself with fun.", color: "yellow" },
      { text: "I avoid conflict and go silent.", color: "green" },
      { text: "I overthink and retreat inward.", color: "blue" },
    ],
  },
  {
    id: 10,
    question: "What motivates you the most?",
    options: [
      { text: "Winning and achieving.", color: "red" },
      { text: "Excitement and enjoyment.", color: "yellow" },
      { text: "Harmony and appreciation.", color: "green" },
      { text: "Understanding and clarity.", color: "blue" },
    ],
  },
]

const questions20 = [
  ...questions10,
  {
    id: 11,
    question: "How do you prefer to communicate?",
    options: [
      { text: "Direct and to the point.", color: "red" },
      { text: "Enthusiastic and expressive.", color: "yellow" },
      { text: "Gentle and considerate.", color: "green" },
      { text: "Precise and factual.", color: "blue" },
    ],
  },
  {
    id: 12,
    question: "What's your ideal work environment?",
    options: [
      { text: "Fast-paced and competitive.", color: "red" },
      { text: "Creative and collaborative.", color: "yellow" },
      { text: "Supportive and harmonious.", color: "green" },
      { text: "Quiet and organized.", color: "blue" },
    ],
  },
  {
    id: 13,
    question: "How do you handle deadlines?",
    options: [
      { text: "I work best under pressure.", color: "red" },
      { text: "I get energized by the rush.", color: "yellow" },
      { text: "I prefer steady progress.", color: "green" },
      { text: "I plan ahead to avoid stress.", color: "blue" },
    ],
  },
  {
    id: 14,
    question: "What's your learning style?",
    options: [
      { text: "Learning by doing and leading.", color: "red" },
      { text: "Interactive and hands-on.", color: "yellow" },
      { text: "Collaborative and supportive.", color: "green" },
      { text: "Research and systematic study.", color: "blue" },
    ],
  },
  {
    id: 15,
    question: "How do you handle conflict?",
    options: [
      { text: "Face it head-on.", color: "red" },
      { text: "Try to lighten the mood.", color: "yellow" },
      { text: "Seek compromise and understanding.", color: "green" },
      { text: "Analyze the root cause.", color: "blue" },
    ],
  },
  {
    id: 16,
    question: "What drives your decisions?",
    options: [
      { text: "Results and efficiency.", color: "red" },
      { text: "Passion and inspiration.", color: "yellow" },
      { text: "Values and relationships.", color: "green" },
      { text: "Logic and data.", color: "blue" },
    ],
  },
  {
    id: 17,
    question: "How do you recharge after a long day?",
    options: [
      { text: "Physical activity or competition.", color: "red" },
      { text: "Socializing or entertainment.", color: "yellow" },
      { text: "Quiet time with loved ones.", color: "green" },
      { text: "Reading or solitary activities.", color: "blue" },
    ],
  },
  {
    id: 18,
    question: "What's your approach to risk?",
    options: [
      { text: "Take calculated risks for big rewards.", color: "red" },
      { text: "Embrace uncertainty as adventure.", color: "yellow" },
      { text: "Prefer safety and stability.", color: "green" },
      { text: "Analyze thoroughly before deciding.", color: "blue" },
    ],
  },
  {
    id: 19,
    question: "How do you show appreciation?",
    options: [
      { text: "Through achievements and results.", color: "red" },
      { text: "With enthusiasm and celebration.", color: "yellow" },
      { text: "Through personal gestures and care.", color: "green" },
      { text: "With thoughtful and meaningful actions.", color: "blue" },
    ],
  },
  {
    id: 20,
    question: "What's your ideal vacation?",
    options: [
      { text: "Adventure sports or challenging activities.", color: "red" },
      { text: "Social gatherings and new experiences.", color: "yellow" },
      { text: "Peaceful retreat with family.", color: "green" },
      { text: "Cultural exploration and learning.", color: "blue" },
    ],
  },
]

const questions50 = [
  ...questions20,
  {
    id: 21,
    question: "How do you handle interruptions?",
    options: [
      { text: "I get frustrated and redirect quickly.", color: "red" },
      { text: "I welcome the break and chat.", color: "yellow" },
      { text: "I politely listen and help if needed.", color: "green" },
      { text: "I prefer to finish my current task first.", color: "blue" },
    ],
  },
  {
    id: 22,
    question: "What's your meeting style?",
    options: [
      { text: "Keep it short and action-focused.", color: "red" },
      { text: "Encourage brainstorming and ideas.", color: "yellow" },
      { text: "Ensure everyone has a voice.", color: "green" },
      { text: "Follow agenda and document decisions.", color: "blue" },
    ],
  },
  {
    id: 23,
    question: "How do you give feedback?",
    options: [
      { text: "Direct and focused on results.", color: "red" },
      { text: "Positive and encouraging.", color: "yellow" },
      { text: "Gentle and supportive.", color: "green" },
      { text: "Specific and constructive.", color: "blue" },
    ],
  },
  {
    id: 24,
    question: "What motivates your team participation?",
    options: [
      { text: "Leading and driving results.", color: "red" },
      { text: "Inspiring and energizing others.", color: "yellow" },
      { text: "Supporting and helping teammates.", color: "green" },
      { text: "Contributing expertise and analysis.", color: "blue" },
    ],
  },
  {
    id: 25,
    question: "How do you handle routine tasks?",
    options: [
      { text: "Find ways to do them faster.", color: "red" },
      { text: "Make them fun or delegate them.", color: "yellow" },
      { text: "Do them steadily and reliably.", color: "green" },
      { text: "Systematize and optimize them.", color: "blue" },
    ],
  },
  {
    id: 26,
    question: "What's your networking approach?",
    options: [
      { text: "Strategic and goal-oriented.", color: "red" },
      { text: "Natural and relationship-focused.", color: "yellow" },
      { text: "Genuine and trust-building.", color: "green" },
      { text: "Professional and knowledge-sharing.", color: "blue" },
    ],
  },
  {
    id: 27,
    question: "How do you handle mistakes?",
    options: [
      { text: "Fix them quickly and move on.", color: "red" },
      { text: "Learn from them and stay positive.", color: "yellow" },
      { text: "Reflect on them and seek support.", color: "green" },
      { text: "Analyze them to prevent recurrence.", color: "blue" },
    ],
  },
  {
    id: 28,
    question: "What's your presentation style?",
    options: [
      { text: "Confident and persuasive.", color: "red" },
      { text: "Engaging and interactive.", color: "yellow" },
      { text: "Warm and inclusive.", color: "green" },
      { text: "Detailed and informative.", color: "blue" },
    ],
  },
  {
    id: 29,
    question: "How do you prioritize tasks?",
    options: [
      { text: "By impact and urgency.", color: "red" },
      { text: "By interest and energy level.", color: "yellow" },
      { text: "By others' needs and deadlines.", color: "green" },
      { text: "By logical sequence and importance.", color: "blue" },
    ],
  },
  {
    id: 30,
    question: "What's your problem-solving approach?",
    options: [
      { text: "Take charge and implement solutions.", color: "red" },
      { text: "Brainstorm creative alternatives.", color: "yellow" },
      { text: "Seek input and build consensus.", color: "green" },
      { text: "Research and analyze systematically.", color: "blue" },
    ],
  },
  {
    id: 31,
    question: "How do you handle success?",
    options: [
      { text: "Set bigger goals immediately.", color: "red" },
      { text: "Celebrate and share the joy.", color: "yellow" },
      { text: "Thank those who helped.", color: "green" },
      { text: "Analyze what worked well.", color: "blue" },
    ],
  },
  {
    id: 32,
    question: "What's your email communication style?",
    options: [
      { text: "Brief and action-oriented.", color: "red" },
      { text: "Friendly and expressive.", color: "yellow" },
      { text: "Polite and considerate.", color: "green" },
      { text: "Clear and detailed.", color: "blue" },
    ],
  },
  {
    id: 33,
    question: "How do you handle information overload?",
    options: [
      { text: "Focus on what's most important.", color: "red" },
      { text: "Skim for interesting highlights.", color: "yellow" },
      { text: "Process it slowly and carefully.", color: "green" },
      { text: "Organize and categorize systematically.", color: "blue" },
    ],
  },
  {
    id: 34,
    question: "What's your leadership philosophy?",
    options: [
      { text: "Lead by example and results.", color: "red" },
      { text: "Inspire and motivate others.", color: "yellow" },
      { text: "Serve and support the team.", color: "green" },
      { text: "Guide with knowledge and structure.", color: "blue" },
    ],
  },
  {
    id: 35,
    question: "How do you handle technology changes?",
    options: [
      { text: "Adopt quickly if it improves efficiency.", color: "red" },
      { text: "Explore enthusiastically.", color: "yellow" },
      { text: "Wait for others to test it first.", color: "green" },
      { text: "Research thoroughly before adopting.", color: "blue" },
    ],
  },
  {
    id: 36,
    question: "What's your time management style?",
    options: [
      { text: "Packed schedule with clear priorities.", color: "red" },
      { text: "Flexible with room for spontaneity.", color: "yellow" },
      { text: "Balanced with time for relationships.", color: "green" },
      { text: "Structured with detailed planning.", color: "blue" },
    ],
  },
  {
    id: 37,
    question: "How do you handle customer complaints?",
    options: [
      { text: "Resolve quickly and efficiently.", color: "red" },
      { text: "Listen empathetically and reassure.", color: "yellow" },
      { text: "Understand their feelings and apologize.", color: "green" },
      { text: "Investigate facts and provide solutions.", color: "blue" },
    ],
  },
  {
    id: 38,
    question: "What's your approach to innovation?",
    options: [
      { text: "Implement proven improvements.", color: "red" },
      { text: "Experiment with creative ideas.", color: "yellow" },
      { text: "Build on existing successful methods.", color: "green" },
      { text: "Research and test systematically.", color: "blue" },
    ],
  },
  {
    id: 39,
    question: "How do you handle team disagreements?",
    options: [
      { text: "Make the final decision quickly.", color: "red" },
      { text: "Find creative compromises.", color: "yellow" },
      { text: "Facilitate discussion until consensus.", color: "green" },
      { text: "Present facts to guide decision.", color: "blue" },
    ],
  },
  {
    id: 40,
    question: "What's your work-life balance approach?",
    options: [
      { text: "Work hard, play hard.", color: "red" },
      { text: "Integrate fun into everything.", color: "yellow" },
      { text: "Maintain harmony between both.", color: "green" },
      { text: "Plan and schedule both carefully.", color: "blue" },
    ],
  },
  {
    id: 41,
    question: "How do you handle budget constraints?",
    options: [
      { text: "Find ways to do more with less.", color: "red" },
      { text: "Get creative with alternatives.", color: "yellow" },
      { text: "Accept limitations gracefully.", color: "green" },
      { text: "Analyze and optimize spending.", color: "blue" },
    ],
  },
  {
    id: 42,
    question: "What's your delegation style?",
    options: [
      { text: "Clear expectations and deadlines.", color: "red" },
      { text: "Encourage creativity and ownership.", color: "yellow" },
      { text: "Provide support and check-ins.", color: "green" },
      { text: "Detailed instructions and milestones.", color: "blue" },
    ],
  },
  {
    id: 43,
    question: "How do you handle performance reviews?",
    options: [
      { text: "Focus on results and goals.", color: "red" },
      { text: "Celebrate achievements enthusiastically.", color: "yellow" },
      { text: "Discuss growth and development.", color: "green" },
      { text: "Provide detailed feedback and metrics.", color: "blue" },
    ],
  },
  {
    id: 44,
    question: "What's your crisis management approach?",
    options: [
      { text: "Take immediate decisive action.", color: "red" },
      { text: "Stay positive and rally the team.", color: "yellow" },
      { text: "Support affected people first.", color: "green" },
      { text: "Assess situation and plan response.", color: "blue" },
    ],
  },
  {
    id: 45,
    question: "How do you handle workplace politics?",
    options: [
      { text: "Navigate strategically to achieve goals.", color: "red" },
      { text: "Build relationships and stay positive.", color: "yellow" },
      { text: "Avoid conflict and stay neutral.", color: "green" },
      { text: "Observe and understand the dynamics.", color: "blue" },
    ],
  },
  {
    id: 46,
    question: "What's your training and development preference?",
    options: [
      { text: "Skills that drive immediate results.", color: "red" },
      { text: "Interactive and engaging programs.", color: "yellow" },
      { text: "Collaborative learning environments.", color: "green" },
      { text: "Comprehensive and structured courses.", color: "blue" },
    ],
  },
  {
    id: 47,
    question: "How do you handle client relationships?",
    options: [
      { text: "Focus on delivering value quickly.", color: "red" },
      { text: "Build rapport and trust.", color: "yellow" },
      { text: "Understand their needs deeply.", color: "green" },
      { text: "Provide expert advice and solutions.", color: "blue" },
    ],
  },
  {
    id: 48,
    question: "What's your approach to quality control?",
    options: [
      { text: "Efficient processes that ensure results.", color: "red" },
      { text: "Encourage pride and ownership.", color: "yellow" },
      { text: "Collaborative review and improvement.", color: "green" },
      { text: "Systematic testing and documentation.", color: "blue" },
    ],
  },
  {
    id: 49,
    question: "How do you handle remote work?",
    options: [
      { text: "Stay focused on deliverables.", color: "red" },
      { text: "Maintain social connections virtually.", color: "yellow" },
      { text: "Create comfortable home environment.", color: "green" },
      { text: "Establish structured routines.", color: "blue" },
    ],
  },
  {
    id: 50,
    question: "What's your long-term career vision?",
    options: [
      { text: "Achieve leadership and influence.", color: "red" },
      { text: "Make a positive impact on others.", color: "yellow" },
      { text: "Build meaningful relationships and stability.", color: "green" },
      { text: "Become an expert in my field.", color: "blue" },
    ],
  },
]

export default function MultilingualColorPersonalityQuiz() {
  const [language, setLanguage] = useState<Language>("ar")
  const [questionCount, setQuestionCount] = useState<QuestionCount>(10)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [scores, setScores] = useState<ColorScores>({ red: 0, yellow: 0, green: 0, blue: 0 })
  const [quizStarted, setQuizStarted] = useState(false)

  const t = translations[language]
  const isRTL = language === "ar"

  const getQuestions = () => {
    switch (questionCount) {
      case 10:
        return questions10
      case 20:
        return questions20
      case 50:
        return questions50
      default:
        return questions10
    }
  }

  const currentQuestions = getQuestions()

  const handleAnswer = (color: string) => {
    const newAnswers = [...answers, color]
    setAnswers(newAnswers)

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults(newAnswers)
    }
  }

  const calculateResults = (allAnswers: string[]) => {
    const newScores = { red: 0, yellow: 0, green: 0, blue: 0 }

    allAnswers.forEach((answer) => {
      newScores[answer as keyof ColorScores]++
    })

    setScores(newScores)
    setShowResults(true)
  }

  const getPercentages = () => {
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0)
    return {
      red: Math.round((scores.red / total) * 100),
      yellow: Math.round((scores.yellow / total) * 100),
      green: Math.round((scores.green / total) * 100),
      blue: Math.round((scores.blue / total) * 100),
    }
  }

  const getDominantColors = () => {
    const percentages = getPercentages()
    const sortedColors = Object.entries(percentages)
      .sort(([, a], [, b]) => b - a)
      .map(([color]) => color as keyof typeof t.colorTraits)

    return sortedColors
  }

  const getPersonalityAnalysis = () => {
    const dominantColors = getDominantColors()
    const percentages = getPercentages()
    const primary = dominantColors[0]
    const secondary = dominantColors[1]

    let analysis = t.personalityAnalysis.primary
      .replace("{color}", t.colorTraits[primary].name)
      .replace("{percentage}", percentages[primary].toString())
      .replace("{traits}", t.colorTraits[primary].traits)

    if (percentages[secondary] >= 20) {
      analysis +=
        " " +
        t.personalityAnalysis.secondary
          .replace("{color}", t.colorTraits[secondary].name)
          .replace("{percentage}", percentages[secondary].toString())
          .replace("{traits}", t.colorTraits[secondary].traits)
    } else {
      analysis += " " + t.personalityAnalysis.focused
    }

    return analysis
  }

  const handleDownloadData = () => {
    const percentages = getPercentages()
    const dominantColors = getDominantColors()
    const primaryColor = dominantColors[0]

    let reportContent = `${t.results.title}\n`
    reportContent += `${t.results.subtitle}\n\n`

    reportContent += `${t.results.analysis}:\n`
    reportContent += `${getPersonalityAnalysis()}\n\n`

    reportContent += `${t.results.moreAboutColors}:\n`
    Object.entries(t.colorTraits).forEach(([colorKey, info]) => {
      const percentage = percentages[colorKey as keyof typeof percentages]
      reportContent += `\n${info.emoji} ${info.name} (${percentage}%):\n`
      reportContent += `${info.longDescription}\n`
    })

    reportContent += `\n${t.results.careers}:\n`
    reportContent += `${t.results.careerIntro.replace("{color}", t.colorTraits[primaryColor].name)}\n`
    t.careerSuggestions[primaryColor].forEach((career) => {
      reportContent += `- ${career}\n`
    })

    const blob = new Blob([reportContent], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `color_personality_analysis_${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setScores({ red: 0, yellow: 0, green: 0, blue: 0 })
    setQuizStarted(false)
  }

  const startQuiz = () => {
    setQuizStarted(true)
  }

  if (!quizStarted) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4 ${isRTL ? "rtl" : "ltr"}`}>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-gray-800 mb-4">🎨 {t.title}</CardTitle>
              <p className="text-gray-600 mb-6">{t.subtitle}</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.selectLanguage}</label>
                  <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ar">🇪🇬 العربية</SelectItem>
                      <SelectItem value="en">🇺🇸 English</SelectItem>
                      <SelectItem value="es">🇪🇸 Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.selectQuestionCount}</label>
                  <Select
                    value={questionCount.toString()}
                    onValueChange={(value) => setQuestionCount(Number.parseInt(value) as QuestionCount)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">
                        {t.questionCounts.quick} (10 {t.questions})
                      </SelectItem>
                      <SelectItem value="20">
                        {t.questionCounts.standard} (20 {t.questions})
                      </SelectItem>
                      <SelectItem value="50">
                        {t.questionCounts.detailed} (50 {t.questions})
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(t.colorTraits).map(([color, info]) => (
                  <div key={color} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                    <span className="text-2xl">{info.emoji}</span>
                    <div>
                      <div className="font-semibold">{info.name}</div>
                      <div className="text-sm text-gray-600">{info.traits}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  onClick={startQuiz}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  {t.startQuiz}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (showResults) {
    const percentages = getPercentages()
    const dominantColors = getDominantColors()
    const primaryColor = dominantColors[0]

    return (
      <div className={`min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4 ${isRTL ? "rtl" : "ltr"}`}>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800 mb-2">🎨 {t.results.title}</CardTitle>
              <p className="text-gray-600">{t.results.subtitle}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(percentages).map(([color, percentage]) => (
                  <div key={color} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-semibold">
                        {t.colorTraits[color as keyof typeof t.colorTraits].emoji}
                        {t.colorTraits[color as keyof typeof t.colorTraits].name}
                      </span>
                      <Badge variant="secondary">{percentage}%</Badge>
                    </div>
                    <Progress
                      value={percentage}
                      className={`h-3 ${
                        color === "red"
                          ? "[&>div]:bg-red-500"
                          : color === "yellow"
                            ? "[&>div]:bg-yellow-500"
                            : color === "green"
                              ? "[&>div]:bg-green-500"
                              : "[&>div]:bg-blue-500"
                      }`}
                    />
                    <p className="text-sm text-gray-600">{t.colorTraits[color as keyof typeof t.colorTraits].traits}</p>
                  </div>
                ))}
              </div>

              <PersonalityChart scores={scores} colorTraits={t.colorTraits} language={language} />

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {t.colorTraits[primaryColor].emoji} {t.results.analysis}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{getPersonalityAnalysis()}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-xl">✨ {t.results.moreAboutColors}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(t.colorTraits).map(([color, info]) => (
                    <div key={color} className="flex items-start gap-3">
                      <span className="text-3xl mt-1">{info.emoji}</span>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{info.name}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{info.longDescription}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl">💼 {t.results.careers}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    {t.results.careerIntro.replace("{color}", t.colorTraits[primaryColor].name)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.careerSuggestions[primaryColor].map((career, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {career}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={resetQuiz}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  {t.retakeQuiz}
                </Button>
                <Button
                  onClick={handleDownloadData}
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-700 hover:bg-purple-50 bg-transparent"
                >
                  {t.downloadData}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🎨 {t.title}</h1>
          <p className="text-gray-600 mb-4">{t.subtitle}</p>
          <div className="flex justify-center gap-2 mb-4 flex-wrap">
            {Object.entries(t.colorTraits).map(([color, info]) => (
              <span key={color} className="text-sm">
                {info.emoji} {info.shortTrait}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              {t.question} {currentQuestion + 1} {t.of} {currentQuestions.length}
            </span>
            <span>
              {Math.round(((currentQuestion + 1) / currentQuestions.length) * 100)}% {t.complete}
            </span>
          </div>
          <Progress value={((currentQuestion + 1) / currentQuestions.length) * 100} className="h-2" />
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center">{t.questionsData[currentQuestion]?.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestions[currentQuestion]?.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={`w-full text-left justify-start h-auto p-4 hover:scale-105 transition-transform ${
                  option.color === "red"
                    ? "hover:border-red-300 hover:bg-red-50"
                    : option.color === "yellow"
                      ? "hover:border-yellow-300 hover:bg-yellow-50"
                      : option.color === "green"
                        ? "hover:border-green-300 hover:bg-green-50"
                        : "hover:border-blue-300 hover:bg-blue-50"
                }`}
                onClick={() => handleAnswer(option.color)}
              >
                <span className={`text-lg ${isRTL ? "ml-3" : "mr-3"}`}>
                  {t.colorTraits[option.color as keyof typeof t.colorTraits].emoji}
                </span>
                {t.questionsData[currentQuestion]?.options[index]}
              </Button>
            ))}
          </CardContent>
        </Card>

        <Card className="mt-6 bg-gradient-to-r from-gray-50 to-white">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              {Object.entries(t.colorTraits).map(([color, info]) => (
                <div key={color} className="flex items-center gap-2">
                  <span>{info.emoji}</span>
                  <span className="text-gray-600">{info.shortTrait}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
