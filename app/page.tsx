"use client"

import { useQuiz } from "@/hooks/use-quiz"
import { QuizSetup } from "@/components/quiz-setup"
import { QuizQuestion } from "@/components/quiz-question"
import { QuizResults } from "@/components/quiz-results"

export default function MultilingualColorPersonalityQuiz() {
  const {
    language,
    setLanguage,
    questionCount,
    setQuestionCount,
    currentQuestionIndex,
    answers, // Not directly used here, but part of the hook state
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
  } = useQuiz()

  if (!quizStarted) {
    return (
      <QuizSetup
        language={language}
        setLanguage={setLanguage}
        questionCount={questionCount}
        setQuestionCount={setQuestionCount}
        startQuiz={startQuiz}
        isRTL={isRTL}
      />
    )
  }

  if (showResults) {
    return (
      <QuizResults
        scores={scores}
        language={language}
        isRTL={isRTL}
        getPercentages={getPercentages}
        getDominantColors={getDominantColors}
        getPersonalityAnalysis={getPersonalityAnalysis}
        handleDownloadData={handleDownloadData}
        resetQuiz={resetQuiz}
      />
    )
  }

  return (
    <QuizQuestion
      currentQuestion={currentQuestions[currentQuestionIndex]}
      currentQuestionIndex={currentQuestionIndex}
      totalQuestions={currentQuestions.length}
      handleAnswer={handleAnswer}
      language={language}
      isRTL={isRTL}
    />
  )
}
