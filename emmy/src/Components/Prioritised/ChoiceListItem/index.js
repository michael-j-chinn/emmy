import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from "@material-ui/core/styles";

const styles = {
	card: {
		marginBottom: 10,
		padding: 15
	},
	cardHeader: {
		padding: 0
	},
	cardContent: {
		padding: 0
	}
};

class ChoiceListItem extends Component {
	render() {
		let { classes } = this.props;

		return (
			<Card className={classes.card}>
				<CardHeader
					title={this.props.value}
					className={classes.cardHeader}
				/>
				<CardContent className={classes.cardContent} style={{padding:0}}>
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

ChoiceListItem.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChoiceListItem);
