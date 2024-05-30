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

  const handleNext = () => {
    setActiveStep((prev) => prev + 1)
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

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {questions.map((_, index) => (
          <Step key={index}>
            <StepLabel>{`Question ${index + 1}`}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep)}
      <div>
        <button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </button>
        <button
          disabled={activeStep === questions.length - 1}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ExamComponent
