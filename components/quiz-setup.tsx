"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { translations } from "@/lib/translations"
import type { Language, QuestionCount } from "@/hooks/use-quiz"

interface QuizSetupProps {
  language: Language
  setLanguage: (lang: Language) => void
  questionCount: QuestionCount
  setQuestionCount: (count: QuestionCount) => void
  startQuiz: () => void
  isRTL: boolean
}

export function QuizSetup({
  language,
  setLanguage,
  questionCount,
  setQuestionCount,
  startQuiz,
  isRTL,
}: QuizSetupProps) {
  const t = translations[language]

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
