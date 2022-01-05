import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import SaveInput from '../SaveInput'
import Timer from '../Timer'
import HeptList from '../HeptList'
import Parameters from '../Parameters'
import ShopOpti from '../ShopOpti'
import Tiers from '../Tiers'
import Menu from '../Menu'
import SaveContext from '../../contexts/saveContext'
import TimerContext from '../../contexts/timerContext'
import NerdStats from '../NerdStats'

interface CurrentScreenProps {
  screen: string
}

const CurrentScreen = ({ screen }:CurrentScreenProps) => {
  switch(screen) {
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
      return <HeptList />
  }
}

const App = () => {
  const [save, setSave] = useState("")
  const [timer, setTimer] = useState(new Date())
  const [currentScreen, setCurrentScreen] = useState('hept-list')
  return (
    <SaveContext.Provider value={save}>
      <TimerContext.Provider value={timer}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4} textAlign='center' color='black'>
              <h1>Omega Calc</h1>
            </Grid.Column>
            <Grid.Column width={12} textAlign='center' color='black'>
              <Timer interval={500} setTimer={setTimer} currentTimer={timer} />
              <SaveInput setSave={setSave} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8} color='black'>
              <Menu currentScreen={currentScreen} onChange={(newScreen:string) => setCurrentScreen(newScreen)} />
            </Grid.Column>
            <Grid.Column width={8} color='black'>
              <CurrentScreen screen={currentScreen} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </TimerContext.Provider>
    </SaveContext.Provider>
  )
}

export default App
