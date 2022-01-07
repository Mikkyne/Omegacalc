import React, { Component } from 'react'
import { Button, Grid, Header, Segment, Portal } from 'semantic-ui-react'

export default class Explanation extends Component {
  state = { open: false }

  handleClose = () => this.setState({ open: false })
  handleOpen = () => this.setState({ open: true })

  render() {
    const { open } = this.state

    return (
      <Grid>
      <Grid.Row>
        <Grid.Column>
          <Button
            content='Explanation'
            disabled={open}
            positive
            onClick={this.handleOpen}
          />

          <Portal onClose={this.handleClose} open={open}>
            <Segment
              style={{
                left: '40%',
                position: 'fixed',
                top: '50%',
                zIndex: 1000,
              }}
            >
              <Header>This is a controlled portal</Header>
              <p>Portals have tons of great callback functions to hook into.</p>
              <p>To close, simply click the close button or click away</p>

              <Button
                content='Close Explanation'
                negative
                onClick={this.handleClose}
              />
            </Segment>
          </Portal>
        </Grid.Column>
        <Grid.Column>
        <h2>ALL THE ESTIMATED CALCULATION DOESN'T INCLUDE EVENT BONUSES</h2>
        <h4>Credits to : Lacklub, KittensGiveMorboGas, Eric, Workmad3, Actuallyasriel and Mikkyne</h4>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
