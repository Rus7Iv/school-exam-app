import { useCallback, useEffect, useState } from 'react'
import { CountdownProgress } from './LinearProgress'

interface ITimerProps {
  onTimeUp: () => void
  duration?: number
}

const Timer = ({ onTimeUp, duration = 60 * 1000 }: ITimerProps) => {
  const getRemainingTime = useCallback(() => {
    const start = localStorage.getItem('testStart')
    if (!start) {
      localStorage.setItem('testStart', Date.now().toString())
      return duration
    }
    const elapsed = Date.now() - Number(start)
    return Math.max(duration - elapsed, 0)
  }, [duration])

  const [timeLeft, setTimeLeft] = useState(getRemainingTime())

  useEffect(() => {
    if (Number(timeLeft) <= 0) {
      onTimeUp()
    }
    const timerId = setInterval(() => {
      setTimeLeft(getRemainingTime())
    }, 1000)
    return () => clearInterval(timerId)
  }, [timeLeft, onTimeUp, getRemainingTime])

  const progress = ((duration - timeLeft) / duration) * 100

  const seconds = Number(((timeLeft % 60000) / 1000).toFixed(0))
  return (
    <div>
      <CountdownProgress value={progress} />
      Оставшееся время: {Math.floor(timeLeft / 60000)}:{seconds < 10 ? '0' : ''}
      {seconds}
    </div>
  )
}

export default Timer
