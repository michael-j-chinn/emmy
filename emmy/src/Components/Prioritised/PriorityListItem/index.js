import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


class PriorityListItem extends Component {
	render() {
		return (
			<Card style={{marginBottom: 10}}>
				<CardHeader
					title={this.props.value}
				/>
				<CardContent>
					<Slider
						defaultValue={0}
						aria-labelledby="discrete-slider"
						valueLabelDisplay="auto"
						step={10}
						marks
						min={10}
						max={110}
						onChange={this.props.onSliderChange(this.props.value)}
					/>
				</CardContent>
			</Card>
		);
	}
}

export default PriorityListItem;
