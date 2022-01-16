import React from 'react'
import { Dropdown, Grid, Input } from 'semantic-ui-react'
import { useQuarkGain, useAddUses, useHeptsPerSecond, useSave, useDecodedSave } from '../../hooks/saveHooks'


const optionsquark = [
	{ key: '50%', text: '50%', value: 0.5 },
	{ key: '100%', text: '100%', value: 1 },
	{ key: '150%', text: '150%', value: 1.5 },
	{ key: '190%', text: '190%', value: 1.9 },
	{ key: '200%', text: '200%', value: 2 },
]

const Parameters = () => {
	const { setQuarkGain } = useQuarkGain()
	const { setAddUses } = useAddUses()
	const { setHeptsPerSecond } = useHeptsPerSecond()
	const { save, setSave } = useSave()
	const { setDecodedSave } = useDecodedSave()
	const saveChanged = (newSave: string) => {
		const decodedSave = atob(newSave)
		setSave(newSave)
		setDecodedSave(JSON.parse(decodedSave))
	}

	return (
		<Grid>
			<Grid.Row centered>
				<Grid.Column textAlign='center' width={2}>
					<h3>Save File</h3>
					<Input placeholder='Enter save here...' onChange={(e) => saveChanged(e.target.value)} value={save} />
				</Grid.Column>
				<Grid.Column textAlign='center' width={2}>
					<h3>Quark Gain</h3>
					<Dropdown placeholder='Select one' selection options={optionsquark} onChange={(_, d) => setQuarkGain(d.value as number)} />
				</Grid.Column>
				<Grid.Column textAlign='center' width={2}>
					<h3>Number of Add per Day</h3>
					<Input onChange={(e) => setAddUses(parseInt(e.target.value, 10))} />
				</Grid.Column>
				<Grid.Column textAlign='center' width={2}>
					<h3>Hepteract per second</h3>
					<Input onChange={(e) => setHeptsPerSecond(parseFloat(e.target.value))} />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}

export default Parameters
