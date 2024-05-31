import React from 'react'
import LongAnswer from './questions/LongAnswer'
import MultipleChoice from './questions/MultipleChoice'
import ShortAnswer from './questions/ShortAnswer'
import SingleChoice from './questions/SingleChoice'

const StepContent: React.FC<{
  step: number
  question: any
  answer: any
  onAnswer: (a: any) => void
}> = ({ question, answer, onAnswer }) => {
  switch (question.type) {
    case 'single':
      return (
        <SingleChoice
          question={question}
          answer={answer}
          onAnswer={(a) => onAnswer(a)}
        />
      )
    case 'multiple':
      return (
        <MultipleChoice
          question={question}
          answer={answer}
          onAnswer={(a) => onAnswer(a)}
        />
      )
    case 'short':
      return (
        <ShortAnswer
          question={question}
          answer={answer}
          onAnswer={(a) => onAnswer(a)}
        />
      )
    case 'long':
      return (
        <LongAnswer
          question={question}
          answer={answer}
          onAnswer={(a) => onAnswer(a)}
        />
      )
    default:
      return 'Unknown question type'
  }
}

export default StepContent
