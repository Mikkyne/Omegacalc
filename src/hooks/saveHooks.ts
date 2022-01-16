import { useContext } from 'react'
import SaveContext, { HepteractSave } from '../contexts/saveContext'

export const useSave = () => {
	const { save, setSave } = useContext(SaveContext)
	return { save, setSave }
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

export const useHeptsPerSecond = () => {
	const { heptsPerSecond, setHeptsPerSecond } = useContext(SaveContext)
	return { heptsPerSecond, setHeptsPerSecond }
}

export interface Hepteract {
	name: string,
	balance: number,
	cap: number,
	base_cap: number,
	tier: number,
	cost: number,
}

interface Hepteracts {
	chronos: Hepteract,
	hyperrealism: Hepteract,
	quark: Hepteract,
	challenge: Hepteract,
	abyss: Hepteract,
	accelerator: Hepteract,
	acceleratorBoost: Hepteract,
	multiplier: Hepteract
}

const hydrateHepteract = (name: string, savedHept: HepteractSave): Hepteract => {
	return {
		name,
		balance: savedHept.BAL,
		cap: savedHept.CAP,
		base_cap: savedHept.BASE_CAP,
		tier: Math.log2(savedHept.CAP / savedHept.BASE_CAP) + 1,
		cost: savedHept.HEPTERACT_CONVERSION
	}
}

export const useHepts = (): Hepteracts => {
	const { decodedSave } = useDecodedSave()
	const { hepteractCrafts } = decodedSave

	return {
		chronos: hydrateHepteract('Chronos', hepteractCrafts.chronos),
		hyperrealism: hydrateHepteract('Hyper', hepteractCrafts.hyperrealism),
		quark: hydrateHepteract('Quark', hepteractCrafts.quark),
		challenge: hydrateHepteract('Challenge', hepteractCrafts.challenge),
		abyss: hydrateHepteract('Abyss', hepteractCrafts.abyss),
		accelerator: hydrateHepteract('Accelerator', hepteractCrafts.accelerator),
		acceleratorBoost: hydrateHepteract('Accelerator Boosts', hepteractCrafts.acceleratorBoost),
		multiplier: hydrateHepteract('Multiplier', hepteractCrafts.multiplier),
	}
}
