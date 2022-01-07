import React, { useEffect } from 'react'

interface TimerProps {
  setTimer: Function,
  currentTimer: Date,
}

const Timer = ({ setTimer, currentTimer }: TimerProps) => {
  useEffect(() => {
    const timeoutId = requestAnimationFrame(() => setTimer(new Date()))
    return () => cancelAnimationFrame(timeoutId)
  }, [currentTimer])

  return <></>
}

export default Timer
