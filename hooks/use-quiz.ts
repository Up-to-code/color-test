"use client"

import { useState, useEffect, useCallback } from "react"
import { questions10, questions20, questions50 } from "@/lib/questions"
import { translations } from "@/lib/translations"

export type Language = "en" | "es"
export type QuizLength = "10" | "20" | "50"
export type Color = "red" | "yellow" | "green" | "blue"

interface Question {
  id: number
  question: string
  options: {
    text: string
    color: Color
  }[]
}

interface QuizState {
  language: Language
  quizLength: QuizLength | null
  currentQuestionIndex: number
  answers: Color[]
  scores: Record<Color, number>
  quizStarted: boolean
  quizCompleted: boolean
  t: (typeof translations)["en"] // Type for translation object
  isRTL: boolean
}

// Utility function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function useQuiz() {
  const [state, setState] = useState<QuizState>({
    language: "en",
    quizLength: null,
    currentQuestionIndex: 0,
    answers: [],
    scores: { red: 0, yellow: 0, green: 0, blue: 0 },
    quizStarted: false,
    quizCompleted: false,
    t: translations["en"],
    isRTL: false,
  })

  const getQuestions = useCallback(() => {
    switch (state.quizLength) {
      case "10":
        return questions10
      case "20":
        return questions20
      case "50":
        return questions50
      default:
        return []
    }
  }, [state.quizLength])

  const allQuestions = getQuestions()
  const currentQuestion = allQuestions[state.currentQuestionIndex]

  // Shuffle options for the current question
  const shuffledOptions = currentQuestion ? shuffleArray(currentQuestion.options) : []

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      t: translations[prevState.language],
      isRTL: prevState.language === "ar", // Example for RTL language
    }))
  }, [state.language])

  const startQuiz = useCallback((length: QuizLength) => {
    setState((prevState) => ({
      ...prevState,
      quizLength: length,
      quizStarted: true,
      currentQuestionIndex: 0,
      answers: [],
      scores: { red: 0, yellow: 0, green: 0, blue: 0 },
      quizCompleted: false,
    }))
  }, [])

  const handleAnswer = useCallback(
    (color: Color) => {
      setState((prevState) => {
        const newAnswers = [...prevState.answers, color]
        const newScores = { ...prevState.scores, [color]: prevState.scores[color] + 1 }

        if (prevState.currentQuestionIndex < allQuestions.length - 1) {
          return {
            ...prevState,
            answers: newAnswers,
            scores: newScores,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
          }
        } else {
          // Quiz completed
          return {
            ...prevState,
            answers: newAnswers,
            scores: newScores,
            quizCompleted: true,
          }
        }
      })
    },
    [allQuestions.length],
  )

  const resetQuiz = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      quizLength: null,
      currentQuestionIndex: 0,
      answers: [],
      scores: { red: 0, yellow: 0, green: 0, blue: 0 },
      quizStarted: false,
      quizCompleted: false,
    }))
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setState((prevState) => ({
      ...prevState,
      language: lang,
    }))
  }, [])

  return {
    ...state,
    currentQuestion: currentQuestion ? { ...currentQuestion, options: shuffledOptions } : undefined,
    totalQuestions: allQuestions.length,
    startQuiz,
    handleAnswer,
    resetQuiz,
    setLanguage,
  }
}
