import React from 'react'
import { Button, Grid } from 'semantic-ui-react'

interface MenuProps {
  currentScreen:string,
  onChange:Function
}

interface MenuItemProps {
  label: string,
  onChange: Function,
  currentScreen: string,
  value: string
}

const MenuItem = ({ label, onChange, currentScreen, value }:MenuItemProps) => {
  return <Button onClick={() => onChange(value)} active={currentScreen === value}>{ label }</Button>
}

const menuItems = [
  {
    label: 'Hept List',
    value: 'hept-list'
  },
  {
    label: 'Nerd Stats',
    value: 'nerd-stats'
  },
  {
    label: 'Shop Optimization',
    value: 'shop-opti',
  },
  {
    label: 'Parameters',
    value: 'parameters'
  },
  {
    label: 'Tiers',
    value: 'tiers'
  }
]

const Menu = ({currentScreen, onChange}:MenuProps) => {
  return (
    <Grid>
      <Grid.Row>
        {menuItems.map((menuItem) => (
          <Grid.Column width={4} >
            <MenuItem {...menuItem} onChange={onChange} currentScreen={currentScreen} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}

export default Menu
