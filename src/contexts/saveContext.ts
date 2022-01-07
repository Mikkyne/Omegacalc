import React from 'react'

export interface HepteractSave {
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
  hepteractCrafts: HepteractSaveList,
  offlinetick: number
}

export const defaultSave = {
  save: "",
  setSave: (_: string) => { },
  decodedSave: {} as SaveFile,
  setDecodedSave: (_: SaveFile) => { },
  quarkGain: 0.5,
  setQuarkGain: (_: number) => { },
  powderRatio: 0.5,
  setPowderRatio: (_: number) => { },
  addUses: 24,
  setAddUses: (_: number) => { },
  heptsPerSecond: 0,
  setHeptsPerSecond: (_: number) => { },
}

const saveContext = React.createContext(defaultSave)

export default saveContext
