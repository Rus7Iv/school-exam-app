import React from 'react'

const MultipleChoice: React.FC<{
  question: any
  onAnswer: (a: any) => void
}> = ({ question, onAnswer }) => {
  return (
    <div>
      <p>{question.question}</p>
      {question.options.map((option: string, index: number) => (
        <div key={index}>
          <input
            type="checkbox"
            onChange={(e) => onAnswer(e.target.value)}
            value={option}
          />
          {option}
        </div>
      ))}
    </div>
  )
}

export default MultipleChoice
