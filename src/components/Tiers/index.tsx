import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import { useHepts, Hepteract, useHeptsPerSecond } from '../../hooks/saveHooks'
import { useSecondsSinceSave } from '../../hooks/timerHooks'

interface HeptTableRowProps {
  hepteract:Hepteract
}

const HeptTableRow = ({ hepteract }:HeptTableRowProps) => {
  const saveTime = useSecondsSinceSave()
  const { heptsPerSecond } = useHeptsPerSecond()

  return (
    <Table.Row>
      <Table.Cell>{hepteract.name}</Table.Cell>
      <Table.Cell>{hepteract.tier}</Table.Cell>
      <Table.Cell>{hepteract.balance}</Table.Cell>
      <Table.Cell>{Math.floor((saveTime * heptsPerSecond) / hepteract.cost)}</Table.Cell>
    </Table.Row>
  )
}

const Tiers = () => {
  const hepts = useHepts()

  return (
    <Grid>
      <Grid.Column width={16}>
        <Grid.Row centered>
          <Grid.Column>
            <Table textAlign='center'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Tier</Table.HeaderCell>
                  <Table.HeaderCell>Balance</Table.HeaderCell>
                  <Table.HeaderCell>Number you can buy</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Object.values(hepts).map(hept => <HeptTableRow key={hept.name} hepteract={hept} />)}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
      <Grid.Row centered>
        <Grid.Column textAlign='center' width={8}><h4>Ratio Chronos/Hyper/Challenge</h4></Grid.Column>
        <Grid.Column textAlign='center' width={8}><h4>Ratio Accel/A. Boost/Multi</h4></Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Tiers
