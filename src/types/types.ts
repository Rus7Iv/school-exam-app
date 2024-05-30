export interface SingleChoiceQuestion {
  type: 'single'
  question: string
  options: string[]
  correct: number
}

export interface MultipleChoiceQuestion {
  type: 'multiple'
  question: string
  options: string[]
  correct: number[]
}

export interface ShortAnswerQuestion {
  type: 'short'
  question: string
  correct: string
}

export interface LongAnswerQuestion {
  type: 'long'
  question: string
}

export type Question =
  | SingleChoiceQuestion
  | MultipleChoiceQuestion
  | ShortAnswerQuestion
  | LongAnswerQuestion
