import { Stepper, Step, StepLabel } from '@mui/material'
import React from 'react'
import { questions } from '../mocks/questions'

const ExamStepper: React.FC<{ activeStep: number }> = ({ activeStep }) => (
  <Stepper activeStep={activeStep}>
    {questions.map((_, index) => (
      <Step key={index}>
        <StepLabel>{`Вопрос ${index + 1}`}</StepLabel>
      </Step>
    ))}
  </Stepper>
)

export default ExamStepper
