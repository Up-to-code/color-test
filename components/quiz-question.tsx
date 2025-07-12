"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { translations } from "@/lib/translations"
import type { Language } from "@/hooks/use-quiz"

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
}

export function QuizQuestion({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  handleAnswer,
  language,
  isRTL,
}: QuizQuestionProps) {
  const t = translations[language]

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
            <CardTitle className="text-xl text-center">{t.questionsData[currentQuestionIndex]?.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion?.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full text-left justify-start h-auto p-4 hover:scale-105 transition-transform hover:border-gray-300 hover:bg-gray-50 bg-transparent"
                onClick={() => handleAnswer(option.color)}
              >
                {t.questionsData[currentQuestionIndex]?.options[index]}
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
