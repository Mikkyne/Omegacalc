import React, { useState } from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'
import SaveInput from '../SaveInput'
import Timer from '../Timer'
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
               <Header size='huge' color='white'>Huge Header</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign='center' color='black'>
              <Timer interval={500} setTimer={setTimer} currentTimer={timer} />
              <SaveInput setSave={setSave}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8} color='black'>
              <Button>Buttons</Button>
            </Grid.Column>
            <Grid.Column width={8} color='black'>
              <Button>Info area</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </TimerContext.Provider>
    </SaveContext.Provider>
  )
}

export default App
