"use client"

import { useMemo } from "react"
import { useQuiz } from "@/hooks/use-quiz"
import { QuizSetup } from "@/components/quiz-setup"
import { QuizQuestion } from "@/components/quiz-question"
import { QuizResults } from "@/components/quiz-results"

export default function MultilingualColorPersonalityQuiz() {
  const {
    language,
    quizLength,
    currentQuestionIndex,
    answers,
    scores,
    quizStarted,
    quizCompleted,
    t,
    isRTL,
    currentQuestion,
    totalQuestions,
    startQuiz,
    handleAnswer,
    resetQuiz,
    setLanguage,
  } = useQuiz()

  const dominantColor = useMemo(() => {
    let maxScore = -1
    let dominant: "red" | "yellow" | "green" | "blue" = "red" // Default to red

    for (const color in scores) {
      if (scores[color as keyof typeof scores] > maxScore) {
        maxScore = scores[color as keyof typeof scores]
        dominant = color as "red" | "yellow" | "green" | "blue"
      }
    }
    return dominant
  }, [scores])

  if (!quizStarted) {
    return <QuizSetup startQuiz={startQuiz} setLanguage={setLanguage} language={language} t={t} />
  }

  if (quizStarted && !quizCompleted && currentQuestion) {
    return (
      <QuizQuestion
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        handleAnswer={handleAnswer}
        language={language}
        isRTL={isRTL}
        t={t}
      />
    )
  }

  if (quizCompleted) {
    return <QuizResults scores={scores} dominantColor={dominantColor} resetQuiz={resetQuiz} language={language} t={t} />
  }

  return null // Should not happen if logic is correct
}
