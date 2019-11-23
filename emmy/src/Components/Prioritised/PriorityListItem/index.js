import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';

class PriorityListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid container spacing={3}>
				<Grid container item xs={12}>
					<TextField id="standard-basic" label="Standard" value={this.props.value} />
				</Grid>
				<Grid item xs={12}>
					<Slider
						defaultValue={0}
						aria-labelledby="discrete-slider"
						valueLabelDisplay="auto"
						step={10}
						marks
						min={10}
						max={110}
					/>
				</Grid>
			</Grid>
		);
	}
}

export default PriorityListItem;
