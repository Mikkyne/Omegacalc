import React from 'react'
import { Dropdown, Grid, Input, Table } from 'semantic-ui-react'

const optionshept = [
{ key: 'Chronos', text: 'Chronos', value: 'Chronos' },
{ key: 'Hyper', text: 'Hyper', value: 'Hyper' },
{ key: 'Quark', text: 'Quark', value: 'Quark' },
{ key: 'Challenge', text: 'Challenge', value: 'Challenge' },
{ key: 'HotA', text: 'HotA', value: 'HotA' },
{ key: 'Accel', text: 'Accel', value: 'Accel' },
{ key: 'A. Boost', text: 'A. Boost', value: 'A. Boost' },
{ key: 'Multi', text: 'Multi', value: 'Multi' },
]

const App = () => {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column textAlign='center' width={2}>
        <h5>Hept</h5>
          <Dropdown placeholder='Select one' multiple selection options={optionshept}/>
        </Grid.Column>
        <Grid.Column textAlign='center' width={2}>
        <h5>Tier</h5>
          <Input/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Table>
      </Grid.Row>
    </Grid>
  )
}

export default App
