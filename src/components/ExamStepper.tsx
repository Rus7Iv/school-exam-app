import {
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  Typography,
} from '@mui/material'
import React from 'react'
import { questions } from '../mocks/questions'

const ExamStepper: React.FC<{ activeStep: number }> = ({ activeStep }) => {
  const isMobile = useMediaQuery('(max-width:600px)')

  return isMobile ? (
    <Typography variant="h5">{`${activeStep + 1} из ${questions.length} вопросов`}</Typography>
  ) : (
    <Stepper activeStep={activeStep}>
      {questions.map((_, index) => (
        <Step key={index}>
          <StepLabel>{`Вопрос ${index + 1}`}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default ExamStepper
