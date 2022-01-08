import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import Timer from '../Timer'
import HeptList from '../HeptList'
import Parameters, { decodeSave } from '../Parameters'
import ShopOpti from '../ShopOpti'
import Tiers from '../Tiers'
import Menu from '../Menu'
import StateContext, { defaultState, State, SaveFile } from '../../contexts/stateContext'
import TimerContext from '../../contexts/timerContext'
import NerdStats from '../NerdStats'
import { useSave } from '../../hooks/saveHooks'
import Explanation from '../Explanation'
import Overview from '../Overview'

interface CurrentScreenProps {
  screen: string
}

const CurrentScreen = ({ screen }: CurrentScreenProps) => {
  const { save } = useSave()
  if (save === '') {
    return <div>Please enter a save file</div>
  }

  switch (screen) {
    case 'hept-list':
      return <HeptList />
    case 'nerd-stats':
      return <NerdStats />
    case 'shop-opti':
      return <ShopOpti />
    case 'tiers':
      return <Tiers />
    case 'overview':
      return <Overview />
    default:
      return <Overview />
  }
}

const updateStoredState = (state:State):State => {
  localStorage.setItem('saveFile', state.save)
  localStorage.setItem('quarkGain', state.quarkGain.toString())
  localStorage.setItem('powderRatio', state.powderRatio.toString())
  localStorage.setItem('addUses', state.addUses.toString())
  localStorage.setItem('heptsPerSecond', state.heptsPerSecond.toString())
  return state
}

const restoreStoredState = (defaultState:State):State => {
  try {
    return {
      ...defaultState,
      save: localStorage.getItem('saveFile'),
      quarkGain: Number.parseFloat(localStorage.getItem('quarkGain')),
      powderRatio: Number.parseFloat(localStorage.getItem('powderRatio')),
      addUses: Number.parseInt(localStorage.getItem('addUses')),
      heptsPerSecond: Number.parseFloat(localStorage.getItem('heptsPerSecond')),
      decodedSave: decodeSave(localStorage.getItem('saveFile'))
    }
  } catch(e) {
    console.log(e)
    return defaultState
  }
}

const App = () => {
  const [state, setState] = useState(() => ({
    ...restoreStoredState(defaultState),
    setSave: (newSave: string) => setState((previousState:State):State => updateStoredState({ ...previousState, save: newSave })),
    setDecodedSave: (newDecodedSave: SaveFile) => setState((previousState) => updateStoredState({ ...previousState, decodedSave: newDecodedSave })),
    setQuarkGain: (newQuarkGain: number) => setState((previousState) => updateStoredState({ ...previousState, quarkGain: newQuarkGain })),
    setPowderRatio: (newPowderRatio: number) => setState((previousState) => updateStoredState({ ...previousState, powderRatio: newPowderRatio })),
    setAddUses: (newAddUses: number) => setState((previousState) => updateStoredState({ ...previousState, addUses: newAddUses })),
    setHeptsPerSecond: (newHeptsPerSecond: number) => setState((previousState) => updateStoredState({ ...previousState, heptsPerSecond: newHeptsPerSecond })),
  }))

  const [timer, setTimer] = useState(new Date())
  const [currentScreen, setCurrentScreen] = useState('parameters')

  return (
    <StateContext.Provider value={state}>
      <TimerContext.Provider value={timer}>
        <Grid stretched>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center' color='black'>
              <h1>Omega Calc</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} color='black'>
              <Timer interval={500} setTimer={setTimer} currentTimer={timer} />
              <Parameters />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center' color='black'>
              <Menu currentScreen={currentScreen} onChange={(newScreen: string) => setCurrentScreen(newScreen)} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center' color='black'>
              <CurrentScreen screen={currentScreen} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center' color='black'>
              <Explanation />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </TimerContext.Provider>
    </StateContext.Provider>
  )
}

export default App
