import React from 'react'

const LongAnswer: React.FC<{ question: any; onAnswer: (a: any) => void }> = ({
  question,
  onAnswer,
}) => {
  return (
    <div>
      <p>{question.question}</p>
      <textarea onChange={(e) => onAnswer(e.target.value)} />
    </div>
  )
}

export default LongAnswer
