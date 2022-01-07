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

interface CurrentScreenProps {
  screen: string
}

const CurrentScreen = ({ screen }: CurrentScreenProps) => {
  switch (screen) {
    case 'hept-list':
      return <HeptList />
    case 'nerd-stats':
      return <NerdStats />
    case 'parameters':
      return <Parameters />
    case 'shop-opti':
      return <ShopOpti />
    case 'tiers':
      return <Tiers />
    default:
      return <Parameters />
  }
}

const App = () => {
  const [save, setSave] = useState({
    ...defaultSave,
    setSave: (newSave: string) => setSave({ ...save, save: newSave }),
    setDecodedSave: (newDecodedSave: SaveFile) => setSave({ ...save, decodedSave: newDecodedSave }),
    setQuarkGain: (newQuarkGain: number) => setSave({ ...save, quarkGain: newQuarkGain }),
    setPowderRatio: (newPowderRatio: number) => setSave({ ...save, powderRatio: newPowderRatio }),
    setAddUses: (newAddUses: number) => setSave({ ...save, addUses: newAddUses })
  })
  const [timer, setTimer] = useState(new Date())
  const [currentScreen, setCurrentScreen] = useState('parameters')

  return (
    <SaveContext.Provider value={save}>
      <TimerContext.Provider value={timer}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center' color='black'>
              <h1>Omega Calc</h1>
            </Grid.Column>
            <Grid.Column width={16} textAlign='center' color='black'>
              <Timer interval={500} setTimer={setTimer} currentTimer={timer} />
              <SaveInput />
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
        </Grid>
      </TimerContext.Provider>
    </SaveContext.Provider>
  )
}

export default App
