import React, { Component, Fragment } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import PriorityListItem from '../PriorityListItem';

class PriorityList extends Component {
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
		this.setState({ priotities: this.state.priotities.map(p => (p.name === name ? {...p, value: value} : p)) });
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
		let { priotities, newPriorityName } = this.state;

		return (
			<Fragment>
				{priotities.map(p => <PriorityListItem
					key={p.id}
					id={p.name}
					onSliderChange={this.onSliderChange}
					value={p.name} />)}
				<form onSubmit={this.onSubmit}>
					<TextField
						id="add-priority"
						name="add-priority"
						label="Add priority"
						margin="normal"
						value={newPriorityName}
						onChange={this.onChange}
					/>
					<Fab size="small" color="primary" aria-label="add" type="submit">
						<AddIcon />
					</Fab>
				</form>
			</Fragment>
		);
	}
}

export default PriorityList;
