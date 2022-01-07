import React from 'react'
import { Dropdown, Grid, Input } from 'semantic-ui-react'


const optionsquark = [
{ key: '50%', text: '50%', value: '50%' },
{ key: '100%', text: '100%', value: '100%' },
{ key: '150%', text: '150%', value: '150%' },
{ key: '190%', text: '190%', value: '190%' },
{ key: '200%', text: '200%', value: '200%' },
]

const optionspowder = [
{ key: '1%', text: '1%', value: '1%' },
{ key: '2%', text: '2%', value: '2%' },
{ key: '5%', text: '5%', value: '5%' },
{ key: '10%', text: '10%', value: '10%' },
{ key: '25%', text: '25%', value: '25%' },
{ key: '40%', text: '40%', value: '40%' },
{ key: '50%', text: '50%', value: '50%' },
{ key: '75%', text: '75%', value: '75%' },
{ key: '100%', text: '100%', value: '100%' },

]

const Parameters = () => {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column textAlign='center' width={2}>
        <h5>Quark Gain</h5>
          <Dropdown placeholder='Select one' multiple selection options={optionsquark}/>
        </Grid.Column>
        <Grid.Column textAlign='center' width={2}>
        <h5>Powder/Chronos Ratio</h5>
          <Dropdown placeholder='Select one' multiple selection options={optionspowder}/>
        </Grid.Column>
        <Grid.Column textAlign='center' width={2}>
        <h5>Number of Add per Day</h5>
          <Input placeholder='Select one' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Parameters
