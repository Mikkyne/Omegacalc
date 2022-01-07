import React from 'react'
import { Table, Grid, Tab } from 'semantic-ui-react'
import { useHepts, Hepteract } from '../../hooks/saveHooks'

interface HeptTableRowProps {
  hepteract:Hepteract
}

const HeptTableRow = ({ hepteract }:HeptTableRowProps) => {
  return (
    <Table.Row>
      <Table.Cell>{hepteract.name}</Table.Cell>
      <Table.Cell>{hepteract.tier}</Table.Cell>
      <Table.Cell>{hepteract.balance}</Table.Cell>
      <Table.Cell></Table.Cell>
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
    </Grid>
  )
}

export default Tiers
