import React, { useState } from 'react'
import { ShortAnswerQuestion } from '../../types/types'

interface ShortAnswerProps {
  question: ShortAnswerQuestion
  onAnswer: (answer: string) => void
}

const ShortAnswer: React.FC<ShortAnswerProps> = ({ question, onAnswer }) => {
  const [answer, setAnswer] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value)
    onAnswer(event.target.value)
  }

  return (
    <div>
      <h3>{question.question}</h3>
      <input type="text" value={answer} onChange={handleChange} />
    </div>
  )
}

export default ShortAnswer
