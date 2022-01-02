import React from 'react'
import { Grid } from 'semantic-ui-react'

const App = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16} textAlign='center' color='black' stretched>
          <div>Save input</div>
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
  )
}

export default App
