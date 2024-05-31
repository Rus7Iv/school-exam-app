import React, { useState, useEffect } from 'react'
import { ShortAnswerQuestion } from '../../types/types'

interface ShortAnswerProps {
  question: ShortAnswerQuestion
  answer: string
  onAnswer: (answer: string) => void
}

const ShortAnswer: React.FC<ShortAnswerProps> = ({
  question,
  answer = '',
  onAnswer,
}) => {
  const [userAnswer, setUserAnswer] = useState(answer || '')

  useEffect(() => {
    setUserAnswer(answer || '')
  }, [answer])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setUserAnswer(value)
    onAnswer(value)
  }

  return (
    <div>
      <h3>{question.question}</h3>
      <input type="text" value={userAnswer} onChange={handleChange} />
    </div>
  )
}

export default ShortAnswer
