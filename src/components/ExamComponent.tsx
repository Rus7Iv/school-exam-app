import { Stepper, Step, StepLabel } from '@mui/material'
import React, { useState } from 'react'
import LongAnswer from './questions/LongAnswer'
import MultipleChoice from './questions/MultipleChoice'
import ShortAnswer from './questions/ShortAnswer'
import SingleChoice from './questions/SingleChoice'

const questions = [
  {
    type: 'single',
    question: 'Сколько будет 2+2?',
    options: ['3', '4', '5'],
    correct: 1,
  },
  {
    type: 'single',
    question: 'Какого цвета небо?',
    options: ['Зелёное', 'Синее', 'Красное'],
    correct: 1,
  },
  {
    type: 'multiple',
    question: 'Какие из следующих животных являются млекопитающими?',
    options: ['Кит', 'Акула', 'Слон', 'Крокодил'],
    correct: [0, 2],
  },
  {
    type: 'short',
    question: 'Как называется столица России?',
    correct: 'Москва',
  },
  {
    type: 'long',
    question:
      'Опишите основные принципы объектно-ориентированного программирования.',
  },
  {
    type: 'single',
    question: 'Какой язык программирования используется для веб-разработки?',
    options: ['Python', 'HTML', 'Java'],
    correct: 1,
  },
  {
    type: 'multiple',
    question: 'Выберите известные алгоритмы сортировки.',
    options: ['Quick Sort', 'Binary Search', 'Merge Sort', 'Dijkstra'],
    correct: [0, 2],
  },
  {
    type: 'short',
    question: 'Назовите самую высокую гору в мире.',
    correct: 'Эверест',
  },
  {
    type: 'long',
    question:
      'Опишите, что такое искусственный интеллект и какие задачи он решает.',
  },
  {
    type: 'single',
    question: 'Какая планета является третьей от Солнца?',
    options: ['Венера', 'Земля', 'Марс'],
    correct: 1,
  },
]

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
