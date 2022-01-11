import React, { Component } from 'react'
import { Button, Progress, Grid } from 'semantic-ui-react'

export default class ProgressP45 extends Component {
	state = { percent: 1 }

	increment = () =>
		this.setState((prevState) => ({
			percent: prevState.percent >= 100 ? 1 : prevState.percent + 20,
		}))

	render() {
		return (
			<Grid>
				<Grid.Row centered>
					<Grid.Column width={8}>
						<Progress percent={this.state.percent} inverted indicating />
						<Button onClick={this.increment}>Increment</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}
