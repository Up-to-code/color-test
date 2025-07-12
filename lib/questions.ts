interface Question {
  id: number
  question: string
  options: {
    text: string
    color: "red" | "yellow" | "green" | "blue"
  }[]
}

export const questions10: Question[] = [
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

export const questions20: Question[] = [
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

export const questions50: Question[] = [
  ...questions20,
  // Additional 30 questions for the detailed test
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
