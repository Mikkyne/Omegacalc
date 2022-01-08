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

export interface State {
  save: string,
  decodedSave: SaveFile,
  quarkGain: number,
  powderRatio: number
  addUses: number,
  heptsPerSecond: number

  setSave: (a:string) => void,
  setDecodedSave: (a:SaveFile) => void,
  setQuarkGain: (a:number) => void,
  setPowderRatio: (a:number) => void,
  setAddUses: (a:number) => void,
  setHeptsPerSecond: (a:number) => void
}

export const defaultState = {
  save: "",
  decodedSave: {} as SaveFile,
  quarkGain: 0.5,
  powderRatio: 0.5,
  addUses: 24,
  heptsPerSecond: 0,

  setSave: (_: string) => { },
  setDecodedSave: (_: SaveFile) => { },
  setQuarkGain: (_: number) => { },
  setPowderRatio: (_: number) => { },
  setAddUses: (_: number) => { },
  setHeptsPerSecond: (_: number) => { },
} as State

const saveContext = React.createContext(defaultState)

export default saveContext
