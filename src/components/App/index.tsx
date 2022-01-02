import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
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
            <Grid.Column width={16} textAlign='center' color='black' stretched>
              <Timer interval={500} setTimer={setTimer} currentTimer={timer} />
              <SaveInput setSave={setSave} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8} color='black'>
              <div>Buttons</div>
            </Grid.Column>
            <Grid.Column width={8} color='black'>
              <div>Info area</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </TimerContext.Provider>
    </SaveContext.Provider>
  )
}

export default App
