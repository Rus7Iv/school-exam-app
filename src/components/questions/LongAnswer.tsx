import React, { useState } from 'react'
import { LongAnswerQuestion } from '../../types/types'

interface LongAnswerProps {
  question: LongAnswerQuestion
  onAnswer: (answer: string) => void
}

const LongAnswer: React.FC<LongAnswerProps> = ({ question, onAnswer }) => {
  const [answer, setAnswer] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value)
    onAnswer(event.target.value)
  }

  return (
    <div>
      <h3>{question.question}</h3>
      <textarea value={answer} onChange={handleChange} />
    </div>
  )
}

export default LongAnswer
