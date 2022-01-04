import React, { useState } from 'react'
import {Grid, Button, Menu} from 'semantic-ui-react'
import SaveInput from '../SaveInput'
import Timer from '../Timer'
import Parameters from '/Parameters'
import ShopOpti from '/ShopOpti'
import HeptList from '/HeptList'
import Tier from '/Tier'
import NerdStats from '/NerdStats'
import SaveContext from '../../contexts/saveContext'
import TimerContext from '../../contexts/timerContext'

const App = () => {
  const [save, setSave] = useState("")
  const [timer, setTimer] = useState(new Date())
  return (
    <SaveContext.Provider value={save}>
      <TimerContext.Provider value={timer}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center' color='black'>
              <h1>Omega Calc</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center' color='black'>
              <Timer interval={500} setTimer={setTimer} currentTimer={timer} />
              <SaveInput setSave={setSave} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8} color='black'>
              <Button positive floated='right' size='massive'>Decode</Button>
            </Grid.Column>
            <Grid.Column width={8} color='black'>
              <Button negative size='massive'>Get save back</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
            <Grid.Row>
              <Grid.Column height={16} textAlign='center' color='black'>
                <Menu inverted widths={5} size='massive' >
                  <Menu.Item onClick='Parameters'>Parameters</Menu.Item>
                  <Menu.Item onClick='Tier'>Tier</Menu.Item>
                  <Menu.Item onClick='ShopOpti'>Shop Opti</Menu.Item>
                  <Menu.Item onClick='HeptList'>Hept List</Menu.Item>
                  <Menu.Item onClick='NerdStats'>Nerd Stats</Menu.Item>
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </TimerContext.Provider>
    </SaveContext.Provider>
  )
}

export default App
