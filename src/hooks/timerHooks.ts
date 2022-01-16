import { useContext } from 'react'
import timerContext from '../contexts/timerContext'
import { useDecodedSave } from './saveHooks'

export const useSecondsSinceSave = () => {
	const currentTime = useContext(timerContext)
	const { decodedSave } = useDecodedSave()
	return currentTime.getTime() - decodedSave.offlinetick
}
