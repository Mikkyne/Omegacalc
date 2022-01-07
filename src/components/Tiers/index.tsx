import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import { useHepts } from '../../hooks/saveHooks'

const Tiers = () => {
  const hepts = useHepts()

  return (
    <Grid>
      <Grid.Column width={8}>
        <Grid.Row centered>
          <Grid.Column>
            <Table textAlign='center'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell>Chronos </Table.HeaderCell>
                  <Table.HeaderCell>Hyper</Table.HeaderCell>
                  <Table.HeaderCell>Quark</Table.HeaderCell>
                  <Table.HeaderCell>Challenge</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.HeaderCell>Current Tier</Table.HeaderCell>
                  <Table.Cell>{ Math.log2(hepts.chronos.CAP / hepts.chronos.BASE_CAP) + 1 }</Table.Cell>
                  <Table.Cell>Current Hyper Tier</Table.Cell>
                  <Table.Cell>Current Quark Tier</Table.Cell>
                  <Table.Cell>Current Challenge Tier</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>Number you can buy</Table.HeaderCell>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>Current balance</Table.HeaderCell>
                  <Table.Cell>{ hepts.chronos.BAL }</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={8}>
        <Grid.Row centered>
          <Grid.Column>
            <Table celled textAlign='center'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Current HotA Tier</Table.HeaderCell>
                  <Table.HeaderCell>Current Accel Tier</Table.HeaderCell>
                  <Table.HeaderCell>Current A. Boost Tier</Table.HeaderCell>
                  <Table.HeaderCell>Current Multi Tier</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Current HotA Tier</Table.Cell>
                  <Table.Cell>Current Accel Tier</Table.Cell>
                  <Table.Cell>Current A. Boost Tier</Table.Cell>
                  <Table.Cell>Current Multi Tier</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <Table celled textAlign='center'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Number you can buy</Table.HeaderCell>
                  <Table.HeaderCell>Number you can buy</Table.HeaderCell>
                  <Table.HeaderCell>Number you can buy</Table.HeaderCell>
                  <Table.HeaderCell>Number you can buy</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <Table celled textAlign='center'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>HotA</Table.HeaderCell>
                  <Table.HeaderCell>Accelerators</Table.HeaderCell>
                  <Table.HeaderCell>Accel Boost</Table.HeaderCell>
                  <Table.HeaderCell>Multipliers</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>HotA</Table.Cell>
                  <Table.Cell>Accelerators</Table.Cell>
                  <Table.Cell>Accel Boost</Table.Cell>
                  <Table.Cell>Multipliers</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <Table celled textAlign='center'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Number you can buy</Table.HeaderCell>
                  <Table.HeaderCell>Number you can buy</Table.HeaderCell>
                  <Table.HeaderCell>Number you can buy</Table.HeaderCell>
                  <Table.HeaderCell>Number you can buy</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                  <Table.Cell>Number you can buy</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

export default Tiers
