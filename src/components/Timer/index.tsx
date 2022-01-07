import React, { useState, useEffect } from 'react'
import TimerContext from '../../contexts/timerContext'

interface TimerProps {
  interval: number,
  setTimer: Function,
  currentTimer: Date,
}

const Timer = ({ interval, setTimer, currentTimer }: TimerProps) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => setTimer(new Date()), interval)
    return () => clearTimeout(timeoutId)
  }, [interval, currentTimer])

  return <></>
}

export default Timer
