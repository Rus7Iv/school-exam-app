import { Stepper, Step, StepLabel } from '@mui/material'
import React, { useState } from 'react'
import { questions } from '../mocks/questions'
import LongAnswer from './questions/LongAnswer'
import MultipleChoice from './questions/MultipleChoice'
import ShortAnswer from './questions/ShortAnswer'
import SingleChoice from './questions/SingleChoice'

const ExamComponent: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: any }>({})
  const [completed, setCompleted] = useState(false)

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

  const getStepContent = (step: number) => {
    const question = questions[step]
    switch (question.type) {
      case 'single':
        return (
          <SingleChoice
            question={question}
            onAnswer={(a) => handleAnswer(step, a)}
          />
        )
      case 'multiple':
        return (
          <MultipleChoice
            question={question}
            onAnswer={(a) => handleAnswer(step, a)}
          />
        )
      case 'short':
        return (
          <ShortAnswer
            question={question}
            onAnswer={(a) => handleAnswer(step, a)}
          />
        )
      case 'long':
        return (
          <LongAnswer
            question={question}
            onAnswer={(a) => handleAnswer(step, a)}
          />
        )
      default:
        return 'Unknown question type'
    }
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

  if (completed) {
    const score = checkAnswers()
    return (
      <div>
        <h2>
          Ваш результат: {score} из {questions.length}
        </h2>
        <button onClick={() => setCompleted(false)}>Начать заново</button>
      </div>
    )
  }

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {questions.map((_, index) => (
          <Step key={index}>
            <StepLabel>{`Вопрос ${index + 1}`}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep)}
      <div>
        <button disabled={activeStep === 0} onClick={handleBack}>
          Назад
        </button>
        <button onClick={handleNext}>
          {activeStep === questions.length - 1 ? 'Завершить' : 'Далее'}
        </button>
      </div>
    </div>
  )
}
export default ExamComponent
