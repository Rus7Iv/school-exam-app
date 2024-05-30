import React, { useState } from 'react'
import { MultipleChoiceQuestion } from '../../types/types'

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion
  onAnswer: (answer: number[]) => void
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  question,
  onAnswer,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])

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
