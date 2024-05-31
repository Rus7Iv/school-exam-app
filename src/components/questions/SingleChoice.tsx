import React, { useState, useEffect } from 'react'
import { SingleChoiceQuestion } from '../../types/types'

interface SingleChoiceProps {
  question: SingleChoiceQuestion
  answer: number | null
  onAnswer: (answer: number) => void
}

const SingleChoice: React.FC<SingleChoiceProps> = ({
  question,
  answer = null,
  onAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(answer)

  useEffect(() => {
    setSelectedOption(answer)
  }, [answer])

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
