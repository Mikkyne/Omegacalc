import React from 'react'

interface HepteractSave {
  BAL: number,
  BASE_CAP: number,
  CAP: number,
  DISCOUNT: number,
  HEPTERACT_CONVERSION: number,
  UNLOCKED: boolean
}

interface HepteractSaveList {
  abyss: HepteractSave,
  accelerator: HepteractSave,
  acceleratorBoost: HepteractSave,
  challenge: HepteractSave,
  chronos: HepteractSave,
  hyperrealism: HepteractSave,
  multiplier: HepteractSave,
  quark: HepteractSave
}

export interface SaveFile {
  hepteractCrafts: HepteractSaveList
}

export const defaultSave = {
  save: "",
  setSave: (save: string) => { },
  decodedSave: {} as SaveFile,
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
