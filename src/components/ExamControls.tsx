import React from 'react'

const ExamControls: React.FC<{
  activeStep: number
  handleBack: () => void
  handleNext: () => void
  questionsLength: number
}> = ({ activeStep, handleBack, handleNext, questionsLength }) => (
  <div className="button-group">
    <button disabled={activeStep === 0} onClick={handleBack}>
      Назад
    </button>
    <button onClick={handleNext}>
      {activeStep === questionsLength - 1 ? 'Завершить' : 'Далее'}
    </button>
  </div>
)

export default ExamControls
