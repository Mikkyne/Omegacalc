import React, { useEffect } from 'react'

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
