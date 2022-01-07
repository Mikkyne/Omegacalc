import React from 'react'

export interface SaveFile {
}

export const defaultSave = {
  save: "",
  setSave: (save: string) => { },
  decodedSave: {},
  setDecodedSave: (decodedSave: SaveFile) => { },
  quarkGain: 0.5,
  setQuarkGain: (quarkGain: number) => { },
  powderRatio: 0.5,
  setPowderRatio: (powderRatio: number) => { },
  addUses: 24,
  setAddUses: (addUses: number) => { }
}

const saveContext = React.createContext(defaultSave)

export default saveContext
