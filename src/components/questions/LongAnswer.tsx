import React, { useState, useEffect } from 'react'
import { LongAnswerQuestion } from '../../types/types'

interface LongAnswerProps {
  question: LongAnswerQuestion
  answer: string
  onAnswer: (answer: string) => void
}

const LongAnswer: React.FC<LongAnswerProps> = ({
  question,
  answer = '',
  onAnswer,
}) => {
  const [userAnswer, setUserAnswer] = useState(answer || '')

  useEffect(() => {
    setUserAnswer(answer || '')
  }, [answer])

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setUserAnswer(value)
    onAnswer(value)
  }

  return (
    <div>
      <h3>{question.question}</h3>
      <textarea value={userAnswer} onChange={handleChange} />
    </div>
  )
}

export default LongAnswer
