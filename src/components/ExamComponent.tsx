import React, { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { questions } from '../mocks/questions'
import ExamControls from './ExamControls'
import ExamResult from './ExamResult'
import ExamStepper from './ExamStepper'
import StepContent from './StepContent'
import Timer from './Timer'

const ExamComponent: React.FC = () => {
  const [activeStep, setActiveStep] = useLocalStorage<number>('activeStep', 0)
  const [answers, setAnswers] = useLocalStorage<Record<number, any>>(
    'answers',
    {},
  )
  const [completed, setCompleted] = useLocalStorage<boolean>('completed', false)

  const handleTimeUp = () => {
    setCompleted(true)
  }

  useEffect(() => {
    localStorage.setItem('activeStep', String(activeStep))
    localStorage.setItem('answers', JSON.stringify(answers))
    localStorage.setItem('completed', String(completed))

    if (completed) {
      localStorage.removeItem('testStart')
    }
  }, [activeStep, answers, completed])

  const handleNext = () => {
    if (activeStep === questions.length - 1) {
      setCompleted(true)
    } else {
      setActiveStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    setActiveStep((prev) => prev - 1)
  }

  const handleAnswer = (questionIndex: number, answer: any) => {
    setAnswers({ ...answers, [questionIndex]: answer })
  }

  const checkAnswers = () => {
    let score = 0
    questions.forEach((question, index) => {
      const userAnswer = answers[index]
      if (question.type === 'single' && userAnswer === question.correct) {
        score += 1
      } else if (question.type === 'multiple' && Array.isArray(userAnswer)) {
        const correctAnswers = question.correct as number[]
        if (
          correctAnswers.length === userAnswer.length &&
          correctAnswers.every((val, i) => val === userAnswer[i])
        ) {
          score += 1
        }
      } else if (question.type === 'short' && userAnswer === question.correct) {
        score += 1
      }
    })
    return score
  }

  const resetTest = () => {
    setActiveStep(0)
    setAnswers({})
    setCompleted(false)
    localStorage.clear()
  }

  if (completed) {
    const score = checkAnswers()
    return (
      <ExamResult
        score={score}
        questionsLength={questions.length}
        resetTest={resetTest}
      />
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ExamStepper activeStep={activeStep} />
      <Timer onTimeUp={handleTimeUp} duration={20 * 60 * 1000} />
      <StepContent
        step={activeStep}
        question={questions[activeStep]}
        answer={answers[activeStep]}
        onAnswer={(a) => handleAnswer(activeStep, a)}
      />
      <ExamControls
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        questionsLength={questions.length}
      />
    </div>
  )
}

export default ExamComponent
