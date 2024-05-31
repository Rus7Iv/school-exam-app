import React from 'react'

const ExamResult: React.FC<{
  score: number
  questionsLength: number
  resetTest: () => void
}> = ({ score, questionsLength, resetTest }) => (
  <div>
    <h2>
      Ваш результат: {score} из {questionsLength}
    </h2>
    <button onClick={resetTest}>Начать заново</button>
  </div>
)

export default ExamResult
