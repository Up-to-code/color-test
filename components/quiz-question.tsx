"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { Language } from "@/hooks/use-quiz"
import type { translations } from "@/lib/translations"

interface QuestionOption {
  text: string
  color: "red" | "yellow" | "green" | "blue"
}

interface QuizQuestionProps {
  currentQuestion: {
    question: string
    options: QuestionOption[]
  }
  currentQuestionIndex: number
  totalQuestions: number
  handleAnswer: (color: string) => void
  language: Language
  isRTL: boolean
  t: (typeof translations)["en"] // Pass the translation object
}

export function QuizQuestion({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  handleAnswer,
  language,
  isRTL,
  t, // Use the passed translation object
}: QuizQuestionProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🎨 {t.title}</h1>
          <p className="text-gray-600 mb-4">{t.subtitle}</p>
          {/* Removed the color traits display from here */}
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              {t.question} {currentQuestionIndex + 1} {t.of} {totalQuestions}
            </span>
            <span>
              {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}% {t.complete}
            </span>
          </div>
          <Progress value={((currentQuestionIndex + 1) / totalQuestions) * 100} className="h-2" />
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center">{currentQuestion?.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion?.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full text-left justify-start h-auto p-4 hover:scale-105 transition-transform hover:border-gray-300 hover:bg-gray-50 bg-transparent"
                onClick={() => handleAnswer(option.color)} // Pass the color from the option object
              >
                {option.text} {/* Render the text property of the option object */}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Removed the bottom color traits display card from here */}
      </div>
    </div>
  )
}
