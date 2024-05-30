import React from 'react'

const ShortAnswer: React.FC<{ question: any; onAnswer: (a: any) => void }> = ({
  question,
  onAnswer,
}) => {
  return (
    <div>
      <p>{question.question}</p>
      <input type="text" onChange={(e) => onAnswer(e.target.value)} />
    </div>
  )
}

export default ShortAnswer
