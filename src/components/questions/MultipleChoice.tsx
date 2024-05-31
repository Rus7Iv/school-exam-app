import React, { useState, useEffect } from 'react'
import { MultipleChoiceQuestion } from '../../types/types'

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion
  answer: number[]
  onAnswer: (answer: number[]) => void
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  question,
  answer = [],
  onAnswer,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>(answer || [])

  useEffect(() => {
    setSelectedOptions(answer || [])
  }, [answer])

  const handleChange = (index: number) => {
    const updatedOptions = selectedOptions.includes(index)
      ? selectedOptions.filter((item) => item !== index)
      : [...selectedOptions, index]
    setSelectedOptions(updatedOptions)
    onAnswer(updatedOptions)
  }

  return (
    <div>
      <h3>{question.question}</h3>
      {question.options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`multiple-choice-${index}`}
            value={index}
            checked={selectedOptions.includes(index)}
            onChange={() => handleChange(index)}
          />
          <label htmlFor={`multiple-choice-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  )
}

export default MultipleChoice
