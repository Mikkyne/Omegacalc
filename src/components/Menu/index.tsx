import React from 'react'
import { Button, Grid } from 'semantic-ui-react'

interface MenuProps {
  currentScreen: string,
  onChange: Function
}

interface MenuItemProps {
  label: string,
  onChange: Function,
  currentScreen: string,
  value: string
}

const MenuItem = ({ label, onChange, currentScreen, value }: MenuItemProps) => {
  return <Button fluid onClick={() => onChange(value)} active={currentScreen === value}>{label}</Button>
}

const menuItems = [
  {
    label: 'Parameters',
    value: 'parameters'
  },
  {
    label: 'Tiers',
    value: 'tiers'
  },
  {
    label: 'Hept List',
    value: 'hept-list'
  },
  {
    label: 'Shop Optimization',
    value: 'shop-opti',
  },
  {
    label: 'Nerd Stats',
    value: 'nerd-stats'
  }
]

const Menu = ({ currentScreen, onChange }: MenuProps) => {
  return (
    <Grid columns='equal'>
      <Grid.Row centered>
        {menuItems.map((menuItem) => (
          <Grid.Column>
            <MenuItem {...menuItem} onChange={onChange} currentScreen={currentScreen} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}

export default Menu
