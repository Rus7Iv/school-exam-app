import { Question } from '../types/types'

export const questions: Question[] = [
  {
    type: 'single',
    question: 'Сколько будет 2+2?',
    options: ['3', '4', '5'],
    correct: 1,
  },
  {
    type: 'single',
    question: 'Какого цвета небо?',
    options: ['Зелёное', 'Синее', 'Красное'],
    correct: 1,
  },
  {
    type: 'multiple',
    question: 'Какие из следующих животных являются млекопитающими?',
    options: ['Кит', 'Акула', 'Слон', 'Крокодил'],
    correct: [0, 2],
  },
  {
    type: 'short',
    question: 'Как называется столица России?',
    correct: 'Москва',
  },
  {
    type: 'long',
    question:
      'Опишите основные принципы объектно-ориентированного программирования.',
  },
  {
    type: 'single',
    question: 'Какой язык программирования используется для веб-разработки?',
    options: ['Python', 'HTML', 'Java'],
    correct: 1,
  },
  {
    type: 'multiple',
    question: 'Выберите известные алгоритмы сортировки.',
    options: ['Quick Sort', 'Binary Search', 'Merge Sort', 'Dijkstra'],
    correct: [0, 2],
  },
  {
    type: 'short',
    question: 'Назовите самую высокую гору в мире.',
    correct: 'Эверест',
  },
  {
    type: 'long',
    question:
      'Опишите, что такое искусственный интеллект и какие задачи он решает.',
  },
  {
    type: 'single',
    question: 'Какая планета является третьей от Солнца?',
    options: ['Венера', 'Земля', 'Марс'],
    correct: 1,
  },
]
