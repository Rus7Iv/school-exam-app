import React, { useState } from 'react'
import { SingleChoiceQuestion } from '../../types/types'

interface SingleChoiceProps {
  question: SingleChoiceQuestion
  onAnswer: (answer: number) => void
}

const SingleChoice: React.FC<SingleChoiceProps> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    setSelectedOption(value)
    onAnswer(value)
  }

  return (
    <div>
      <h3>{question.question}</h3>
      {question.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`single-choice-${index}`}
            name="single-choice"
            value={index}
            checked={selectedOption === index}
            onChange={handleChange}
          />
          <label htmlFor={`single-choice-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  )
}

export default SingleChoice
