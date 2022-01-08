import React, { useState } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

const Overview = () => {
  const [openPanels, setOpenPanels] = useState(['orbs'])

  const togglePanel = (panelName:string) => {
    if (openPanels.includes(panelName)) {
      setOpenPanels(openPanels.filter((item) => item !== panelName))
    } else {
      setOpenPanels(openPanels.concat([panelName]))
    }
  }

  return (
    <Accordion inverted>
      <Accordion.Title onClick={() => togglePanel('orbs')} active={openPanels.includes('orbs')}>
        <h2>
          <Icon name='dropdown' />
          Orbs
        </h2>
      </Accordion.Title>
      <Accordion.Content active={openPanels.includes('orbs')}>
        Test
      </Accordion.Content>
      <Accordion.Title onClick={() => togglePanel('shop')} active={openPanels.includes('shop')}>
        <h2>
          <Icon name='dropdown' />
          Shop
        </h2>
      </Accordion.Title>
      <Accordion.Content active={openPanels.includes('shop')}>
        Test 2
      </Accordion.Content>
      <Accordion.Title onClick={() => togglePanel('time')} active={openPanels.includes('time')}>
        <h2>
          <Icon name='dropdown' />
          Time
        </h2>
      </Accordion.Title>
      <Accordion.Content active={openPanels.includes('time')}>
        Test 3
      </Accordion.Content>
      <Accordion.Title onClick={() => togglePanel('cubes')} active={openPanels.includes('cubes')}>
        <h2>
          <Icon name='dropdown' />
          Cubes
        </h2>
      </Accordion.Title>
      <Accordion.Content active={openPanels.includes('cubes')}>
        Test 4
      </Accordion.Content>
    </Accordion>
  )
}

export default Overview
