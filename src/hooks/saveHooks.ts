import { useContext } from 'react'
import SaveContext from '../contexts/saveContext'

export const useSave = () => {
  const { save, setSave } = useContext(SaveContext)
  return  { save,  setSave }
}

export const useQuarkGain = () => {
  const { quarkGain, setQuarkGain } = useContext(SaveContext)
  return { quarkGain, setQuarkGain }
}

export const useDecodedSave = () => {
  const { decodedSave, setDecodedSave } = useContext(SaveContext)
  return { decodedSave, setDecodedSave }
}

export const useAddUses = () => {
  const { addUses, setAddUses } = useContext(SaveContext)
  return { addUses, setAddUses }
}

export const usePowderRatio = () => {
  const { powderRatio, setPowderRatio } = useContext(SaveContext)
  return { powderRatio, setPowderRatio }
}
