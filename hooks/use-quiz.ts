"use client"

import { useState, useMemo, useCallback } from "react"
import { questions10, questions20, questions50 } from "@/lib/questions"
import { translations } from "@/lib/translations"

export interface ColorScores {
  red: number
  yellow: number
  green: number
  blue: number
}

export type QuestionCount = 10 | 20 | 50
export type Language = "en" | "ar" | "es"

export function useQuiz() {
  const [language, setLanguage] = useState<Language>("en")
  const [questionCount, setQuestionCount] = useState<QuestionCount>(10)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [scores, setScores] = useState<ColorScores>({ red: 0, yellow: 0, green: 0, blue: 0 })
  const [quizStarted, setQuizStarted] = useState(false)

  const t = useMemo(() => translations[language], [language])
  const isRTL = language === "ar"

  const currentQuestions = useMemo(() => {
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
  }, [questionCount])

  const handleAnswer = useCallback(
    (color: string) => {
      const newAnswers = [...answers, color]
      setAnswers(newAnswers)

      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        calculateResults(newAnswers)
      }
    },
    [answers, currentQuestionIndex, currentQuestions.length],
  )

  const calculateResults = useCallback((allAnswers: string[]) => {
    const newScores = { red: 0, yellow: 0, green: 0, blue: 0 } as ColorScores

    allAnswers.forEach((answer) => {
      newScores[answer as keyof ColorScores]++
    })

    setScores(newScores)
    setShowResults(true)
  }, [])

  const getPercentages = useCallback(() => {
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0)
    return {
      red: Math.round((scores.red / total) * 100),
      yellow: Math.round((scores.yellow / total) * 100),
      green: Math.round((scores.green / total) * 100),
      blue: Math.round((scores.blue / total) * 100),
    }
  }, [scores])

  const getDominantColors = useCallback(() => {
    const percentages = getPercentages()
    const sortedColors = Object.entries(percentages)
      .sort(([, a], [, b]) => b - a)
      .map(([color]) => color as keyof typeof t.colorTraits)

    return sortedColors
  }, [getPercentages, t.colorTraits])

  const getPersonalityAnalysis = useCallback(() => {
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
  }, [getDominantColors, getPercentages, t.colorTraits, t.personalityAnalysis])

  const handleDownloadData = useCallback(() => {
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
  }, [getPercentages, getDominantColors, getPersonalityAnalysis, t])

  const resetQuiz = useCallback(() => {
    setCurrentQuestionIndex(0)
    setAnswers([])
    setShowResults(false)
    setScores({ red: 0, yellow: 0, green: 0, blue: 0 })
    setQuizStarted(false)
  }, [])

  const startQuiz = useCallback(() => {
    setQuizStarted(true)
  }, [])

  return {
    language,
    setLanguage,
    questionCount,
    setQuestionCount,
    currentQuestionIndex,
    answers,
    showResults,
    scores,
    quizStarted,
    t,
    isRTL,
    currentQuestions,
    handleAnswer,
    getPercentages,
    getDominantColors,
    getPersonalityAnalysis,
    handleDownloadData,
    resetQuiz,
    startQuiz,
  }
}
