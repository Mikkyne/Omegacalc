import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import SaveInput from '../SaveInput'
import Timer from '../Timer'
import HeptList from '../HeptList'
import Parameters from '../Parameters'
import ShopOpti from '../ShopOpti'
import Tiers from '../Tiers'
import Menu from '../Menu'
import SaveContext, { defaultSave, SaveFile } from '../../contexts/saveContext'
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

const App = () => {
  const [save, setSave] = useState({
    ...defaultSave,
    setSave: (newSave: string) => setSave((save) => ({ ...save, save: newSave })),
    setDecodedSave: (newDecodedSave: SaveFile) => setSave((save) => ({ ...save, decodedSave: newDecodedSave })),
    setQuarkGain: (newQuarkGain: number) => setSave((save) => ({ ...save, quarkGain: newQuarkGain })),
    setPowderRatio: (newPowderRatio: number) => setSave((save) => ({ ...save, powderRatio: newPowderRatio })),
    setAddUses: (newAddUses: number) => setSave((save) => ({ ...save, addUses: newAddUses })),
    setHeptsPerSecond: (newHeptsPerSecond: number) => setSave((save) => ({ ...save, heptsPerSecond: newHeptsPerSecond })),
  })
  const [timer, setTimer] = useState(new Date())
  const [currentScreen, setCurrentScreen] = useState('parameters')

  return (
    <SaveContext.Provider value={save}>
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
    </SaveContext.Provider>
  )
}

export default App
