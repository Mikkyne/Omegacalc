import React from 'react'
import { Table } from 'semantic-ui-react'

const ShopOpti = () => {
  return (
  <Table  celled textAlign='center' striped>
    <Table.Header >
      <Table.Row>
        <Table.HeaderCell colSpan='3'>Acceleration</Table.HeaderCell>
        <Table.HeaderCell colSpan='3'>WoW Passes</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Accel 1</Table.HeaderCell>
        <Table.HeaderCell>Accel 2</Table.HeaderCell>
        <Table.HeaderCell>Cost</Table.HeaderCell>
        <Table.HeaderCell>WoW 3</Table.HeaderCell>
        <Table.HeaderCell>WoW Y</Table.HeaderCell>
        <Table.HeaderCell>Cost</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>0</Table.Cell>
        <Table.Cell>2000</Table.Cell>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>0</Table.Cell>
        <Table.Cell>5000</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  )
}

export default ShopOpti
