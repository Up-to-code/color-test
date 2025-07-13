"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Language, QuizLength } from "@/hooks/use-quiz"
import type { translations } from "@/lib/translations"

interface QuizSetupProps {
  startQuiz: (length: QuizLength) => void
  setLanguage: (language: Language) => void
  language: Language
  t: (typeof translations)["en"]
}

export function QuizSetup({ startQuiz, setLanguage, language, t }: QuizSetupProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-gray-800">🎨 {t.title}</CardTitle>
          <p className="text-center text-gray-600">{t.subtitle}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="language-select" className="text-sm font-medium text-gray-700">
              {t.selectLanguage}
            </label>
            <Select onValueChange={(value: Language) => setLanguage(value)} defaultValue={language}>
              <SelectTrigger id="language-select" className="w-full">
                <SelectValue placeholder={t.selectLanguage} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="quiz-length-select" className="text-sm font-medium text-gray-700">
              {t.selectQuizLength}
            </label>
            <Select onValueChange={(value: QuizLength) => startQuiz(value)}>
              <SelectTrigger id="quiz-length-select" className="w-full">
                <SelectValue placeholder={t.selectQuizLength} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 {t.questions}</SelectItem>
                <SelectItem value="20">20 {t.questions}</SelectItem>
                <SelectItem value="50">50 {t.questions}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
