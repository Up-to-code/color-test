"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { PersonalityChart } from "@/components/personality-chart"
import type { ColorScores, Language } from "@/hooks/use-quiz"
import { translations } from "@/lib/translations"

interface QuizResultsProps {
  scores: ColorScores
  language: Language
  isRTL: boolean
  getPercentages: () => ColorScores
  getDominantColors: () => Array<keyof (typeof translations)["en"]["colorTraits"]>
  getPersonalityAnalysis: () => string
  handleDownloadData: () => void
  resetQuiz: () => void
}

export function QuizResults({
  scores,
  language,
  isRTL,
  getPercentages,
  getDominantColors,
  getPersonalityAnalysis,
  handleDownloadData,
  resetQuiz,
}: QuizResultsProps) {
  const t = translations[language]
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
