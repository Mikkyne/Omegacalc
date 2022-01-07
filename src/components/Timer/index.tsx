import React, { useEffect } from 'react'

interface TimerProps {
  interval: number,
  setTimer: Function,
  currentTimer: Date,
}

const Timer = ({ interval, setTimer, currentTimer }: TimerProps) => {
  useEffect(() => {
    const timeoutId = requestAnimationFrame(() => setTimer(new Date()))
    return () => cancelAnimationFrame(timeoutId)
  }, [interval, currentTimer])

  return <></>
}

export default Timer
