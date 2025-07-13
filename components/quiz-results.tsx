"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PersonalityChart } from "@/components/personality-chart"
import type { Language } from "@/hooks/use-quiz"
import type { translations } from "@/lib/translations"

interface QuizResultsProps {
  scores: { red: number; yellow: number; green: number; blue: number }
  dominantColor: "red" | "yellow" | "green" | "blue"
  resetQuiz: () => void
  language: Language
  t: (typeof translations)["en"]
}

export function QuizResults({ scores, dominantColor, resetQuiz, language, t }: QuizResultsProps) {
  const dominantTrait = t.colorTraits[dominantColor]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-2xl mx-auto w-full space-y-6">
        <Card className="shadow-lg text-center">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-800">{t.results}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xl text-gray-700">
              {t.dominantColor}:{" "}
              <span className="font-bold text-2xl">
                {dominantTrait.emoji} {dominantTrait.name}
              </span>
            </p>
            <PersonalityChart scores={scores} language={language} />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">{t.analysis}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{dominantTrait.description}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">{t.careerSuggestions}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{dominantTrait.career}</p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button onClick={resetQuiz} className="px-8 py-3 text-lg">
            {t.retakeQuiz}
          </Button>
        </div>
      </div>
    </div>
  )
}
