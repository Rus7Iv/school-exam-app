import React from 'react'

const SingleChoice: React.FC<{ question: any; onAnswer: (a: any) => void }> = ({
  question,
  onAnswer,
}) => {
  return (
    <div>
      <p>{question.question}</p>
      {question.options.map((option: string, index: number) => (
        <div key={index}>
          <input
            type="radio"
            name="singleChoice"
            onChange={() => onAnswer(option)}
            value={option}
          />
          {option}
        </div>
      ))}
    </div>
  )
}

export default SingleChoice
