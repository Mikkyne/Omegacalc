import React from 'react'
import { Button, Grid, SemanticCOLORS } from 'semantic-ui-react'

interface MenuProps {
	currentScreen: string,
	onChange: Function
}

interface MenuItemProps {
	label: string,
	onChange: Function,
	currentScreen: string,
	value: string,
	color: SemanticCOLORS,
}

const MenuItem = ({ label, onChange, currentScreen, value, color }: MenuItemProps) => {
	return <Button inverted color={color} fluid onClick={() => onChange(value)} active={currentScreen === value}>{label}</Button>
}

const menuItems = [
	{
		label: 'Overview',
		value: 'overview',
		color: 'yellow' as SemanticCOLORS,
	},
	{
		label: 'Tiers',
		value: 'tiers',
		color: 'red' as SemanticCOLORS,
	},
	{
		label: 'Hept List',
		value: 'hept-list',
		color: 'green' as SemanticCOLORS,
	},
	{
		label: 'Shop Optimization',
		value: 'shop-opti',
		color: 'blue' as SemanticCOLORS,
	},
	{
		label: 'Nerd Stats',
		value: 'nerd-stats',
		color: 'orange' as SemanticCOLORS,
	}
]

const Menu = ({ currentScreen, onChange }: MenuProps) => {
	return (
		<Grid columns='equal'>
			<Grid.Row centered>
				{menuItems.map((menuItem) => (
					<Grid.Column key={menuItem.value}>
						<MenuItem {...menuItem} onChange={onChange} currentScreen={currentScreen} />
					</Grid.Column>
				))}
			</Grid.Row>
		</Grid>
	)
}

export default Menu
