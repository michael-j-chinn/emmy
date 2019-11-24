import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import PriorityListItem from '../PriorityListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: {
		backgroundColor: "#bf9000",
		top: "auto",
		bottom: 0
	}
};

class ChoiceList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newPriorityName: '',
			priotities: []
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSliderChange = this.onSliderChange.bind(this);
	}

	onChange(e) {
		this.setState({ newPriorityName: e.target.value });
	}

	onSliderChange = name => (e, value) => {
		this.setState({ priotities: this.state.priotities.map(p => (p.name === name ? { ...p, value: value } : p)) });
	}

	onSubmit(e) {
		e.preventDefault();
		let { priotities, newPriorityName } = this.state;
		let id = ++priotities.length;
		priotities.push({
			id,
			name: newPriorityName,
			value: 0
		});
		newPriorityName = '';
		this.setState({ priotities, newPriorityName });
	}

	render() {
		let { classes } = this.props;
		let { priotities, newPriorityName } = this.state;

		return (
			<Fragment>
				{priotities.map(p => <PriorityListItem
					key={p.id}
					id={p.name}
					onSliderChange={this.onSliderChange}
					value={p.name} />)}
				<AppBar position="fixed" className={classes.root}>
					<Toolbar>
						<TextField
							fullWidth
							id="add-priority"
							name="add-priority"
							label="Add priority"
							margin="normal"
							style={{marginTop:0}}
							value={newPriorityName}
							onChange={this.onChange}
						/>
						<div style={{ flexGrow: 1 }} />
						<IconButton color="inherit" onClick={this.onSubmit}>
							<AddIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Fragment>
		);
	}
}

ChoiceList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChoiceList);
