import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

const ShopOpti = () => {
	return (
		<Table celled textAlign='center' striped>
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
					<Table.Cell colSpan='6'>
						<Button fluid animated='fade'>
							<Button.Content visible>Previous Line</Button.Content>
							<Button.Content hidden>
								<Icon name='arrow up' />
							</Button.Content>
						</Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>1</Table.Cell>
					<Table.Cell>0</Table.Cell>
					<Table.Cell>2000</Table.Cell>
					<Table.Cell>1</Table.Cell>
					<Table.Cell>0</Table.Cell>
					<Table.Cell>5000</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell colSpan='6'>
						<Button fluid animated='fade'>
							<Button.Content visible>Next Line</Button.Content>
							<Button.Content hidden>
								<Icon name='arrow down' />
							</Button.Content>
						</Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	)
}

export default ShopOpti
