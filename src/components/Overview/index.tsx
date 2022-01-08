import React, { useState } from 'react'
import { Accordion, Icon, Segment, Grid, Divider } from 'semantic-ui-react'
import ProgressP45 from '../ProgressP45'

const Overview = () => {
  const [openPanels, setOpenPanels] = useState([''])

  const togglePanel = (panelName: string) => {
    if (openPanels.includes(panelName)) {
      setOpenPanels(openPanels.filter((item) => item !== panelName))
    } else {
      setOpenPanels(openPanels.concat([panelName]))
    }
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column centered>
          <h2>P4x5</h2>
          <Segment.Group>
            <Segment.Group horizontal>
              <Segment textAlign='right'>Time left</Segment>
              <Segment textAlign='left'>Time left</Segment>
            </Segment.Group>
            <Segment.Group horizontal>
              <Segment textAlign='right'>Hepts Left</Segment>
              <Segment textAlign='left'>Hepts Left</Segment>
            </Segment.Group>
            <ProgressP45 />
          </Segment.Group>
          <Accordion centered inverted>
            <Accordion.Title onClick={() => togglePanel('orbs')} active={openPanels.includes('orbs')}>
              <h2>
                <Icon name='dropdown' />
                Orbs
        </h2>
            </Accordion.Title>
            <Accordion.Content active={openPanels.includes('orbs')}>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Segment.Group>
                    <Segment.Group horizontal>
                      <Segment>Orbs to reach Quark Gain</Segment>
                      <Segment>Next Powder Goal</Segment>
                      <Segment>Orbs to reach Powder Goal</Segment>
                    </Segment.Group>
                    <Segment.Group horizontal>
                      <Segment>Orbs to reach Quark Gain</Segment>
                      <Segment>Next Powder Goal</Segment>
                      <Segment>Orbs to reach Powder Goal</Segment>
                    </Segment.Group>
                    <Divider/>
                      <Segment.Group horizontal>
                        <Segment>What Should I Do</Segment>
                        <Segment>% Gain Buying Chronos</Segment>
                        <Segment>% Gain Buying Orbs</Segment>
                      </Segment.Group>
                      <Segment.Group horizontal>
                        <Segment>What Should I Do</Segment>
                        <Segment>% Gain Buying Chronos</Segment>
                        <Segment>% Gain Buying Orbs</Segment>
                      </Segment.Group>
                      <Divider/>
                      <Segment.Group horizontal>
                        <Segment>% Cube From Powder</Segment>
                        <Segment>% Cube From Next Powder</Segment>
                        <Segment>Hepts Needed for Orbs</Segment>
                      </Segment.Group>
                      <Segment.Group horizontal>
                        <Segment>% Cube From Powder</Segment>
                        <Segment>% Cube From Next Powder</Segment>
                        <Segment>Hepts Needed for Orbs</Segment>
                      </Segment.Group>
                    </Segment.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Accordion.Content>
            <Accordion.Title onClick={() => togglePanel('shop')} active={openPanels.includes('shop')}>
              <h2>
                <Icon name='dropdown' />
                Shop
        </h2>
            </Accordion.Title>
            <Accordion.Content active={openPanels.includes('shop')}>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Segment.Group>
                      <Segment.Group horizontal>
                        <Segment>Accel1 To Buy</Segment>
                        <Segment>Accel2 To Buy</Segment>
                        <Segment>Total Benefit</Segment>
                        <Segment>Quark Left</Segment>
                      </Segment.Group>
                      <Segment.Group horizontal>
                        <Segment>Accel1 To Buy</Segment>
                        <Segment>Accel2 To Buy</Segment>
                        <Segment>Total Benefit</Segment>
                        <Segment>Quark Left</Segment>
                      </Segment.Group>
                      <Divider/>
                      <Segment.Group>
                        <Segment.Group horizontal>
                          <Segment>WoW 3 To Buy</Segment>
                          <Segment>WoW Y To Buy</Segment>
                          <Segment>Total Benefit</Segment>
                          <Segment>Quark Left</Segment>
                        </Segment.Group>
                        <Segment.Group horizontal>
                          <Segment>WoW 3 To Buy</Segment>
                          <Segment>WoW Y To Buy</Segment>
                          <Segment>Total Benefit</Segment>
                          <Segment>Quark Left</Segment>
                        </Segment.Group>
                      </Segment.Group>
                    </Segment.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Accordion.Content>
            <Accordion.Title onClick={() => togglePanel('time')} active={openPanels.includes('time')}>
              <h2>
                <Icon name='dropdown' />
                Time
        </h2>
            </Accordion.Title>
            <Accordion.Content active={openPanels.includes('time')}>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Segment.Group>
                      <Segment.Group horizontal>
                        <Segment>Hours until Chronos max or Hours until enough orbs to powder</Segment>
                        <Segment>Time you'll have Chronos max or Time you'll have powder</Segment>
                        <Segment>Cost to Chronos max or Cost to powder</Segment>
                      </Segment.Group>
                      <Segment.Group horizontal>
                        <Segment>Hours until Chronos max or Hours until enough orbs to powder</Segment>
                        <Segment>Time you'll have Chronos max or Time you'll have powder</Segment>
                        <Segment>Cost to Chronos max or Cost to powder</Segment>
                      </Segment.Group>
                    </Segment.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Accordion.Content>
            <Accordion.Title onClick={() => togglePanel('cubes')} active={openPanels.includes('cubes')}>
              <h2>
                <Icon name='dropdown' />
                Cubes
        </h2>
            </Accordion.Title>
            <Accordion.Content active={openPanels.includes('cubes')}>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Segment.Group>
                      <Segment.Group horizontal>
                        <Segment>Half of Cube</Segment>
                        <Segment>Half of Trib</Segment>
                        <Segment>Half of Hyper</Segment>
                        <Segment>Half of Plat</Segment>
                      </Segment.Group>
                      <Segment.Group horizontal>
                        <Segment>Half of Cube</Segment>
                        <Segment>Half of Trib</Segment>
                        <Segment>Half of Hyper</Segment>
                        <Segment>Half of Plat</Segment>
                      </Segment.Group>
                    </Segment.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Overview
