import React from 'react'
import { Dropdown, Grid, Input } from 'semantic-ui-react'
import { SaveFile } from '../../contexts/stateContext'
import { useQuarkGain, usePowderRatio, useAddUses, useHeptsPerSecond, useSave, useDecodedSave } from '../../hooks/saveHooks'


const optionsquark = [
  { key: '50%', text: '50%', value: 0.5 },
  { key: '100%', text: '100%', value: 1 },
  { key: '150%', text: '150%', value: 1.5 },
  { key: '190%', text: '190%', value: 1.9 },
  { key: '200%', text: '200%', value: 2 },
]

const optionspowder = [
  { key: '1%', text: '1%', value: 0.01 },
  { key: '2%', text: '2%', value: 0.02 },
  { key: '5%', text: '5%', value: 0.05 },
  { key: '10%', text: '10%', value: 0.1 },
  { key: '25%', text: '25%', value: 0.25 },
  { key: '40%', text: '40%', value: 0.4 },
  { key: '50%', text: '50%', value: 0.5 },
  { key: '75%', text: '75%', value: 0.75 },
  { key: '100%', text: '100%', value: 1 },
]

export const decodeSave = (save: string):SaveFile => {
  const decodedSave = atob(save)
  return JSON.parse(decodedSave)
}

const Parameters = () => {
  const { setQuarkGain } = useQuarkGain()
  const { setPowderRatio } = usePowderRatio()
  const { setAddUses } = useAddUses()
  const { setHeptsPerSecond } = useHeptsPerSecond()
  const { save, setSave } = useSave()
  const { setDecodedSave } = useDecodedSave()

  const saveChanged = (newSave: string) => {
    setSave(newSave)
    setDecodedSave(decodeSave(newSave))
  }

  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column textAlign='center' width={2}>
          <h5>Save File</h5>
          <Input placeholder='Enter save here...' onChange={(e) => saveChanged(e.target.value)} value={save} />
        </Grid.Column>
        <Grid.Column textAlign='center' width={2}>
          <h5>Quark Gain</h5>
          <Dropdown placeholder='Select one' selection options={optionsquark} onChange={(_, d) => setQuarkGain(d.value as number)} />
        </Grid.Column>
        <Grid.Column textAlign='center' width={2}>
          <h5>Powder/Chronos Ratio</h5>
          <Dropdown placeholder='Select one' selection options={optionspowder} onChange={(_, d) => setPowderRatio(d.value as number)} />
        </Grid.Column>
        <Grid.Column textAlign='center' width={2}>
          <h5>Number of Add per Day</h5>
          <Input onChange={(e) => setAddUses(parseInt(e.target.value, 10))} />
        </Grid.Column>
        <Grid.Column textAlign='center' width={2}>
          <h5>Hepteract per second</h5>
          <Input onChange={(e) => setHeptsPerSecond(parseFloat(e.target.value))}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Parameters
