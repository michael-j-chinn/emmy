import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import PriorityListItem from '../PriorityListItem'

class PriorityList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newPriorityName: '',
			priotities: []
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({ newPriorityName: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		let { priotities, newPriorityName } = this.state;
		priotities.push({
			name: newPriorityName,
			value: 0
		});
		newPriorityName = '';
		this.setState({ priotities, newPriorityName });
	}

	render() {
		let { priotities, newPriorityName } = this.state;

		return (
			<Grid container spacing={3}>
				{priotities.map(p => <PriorityListItem value={p.name} />)}
				<Grid item xs={12}>
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
				</Grid>
			</Grid>
		);
	}
}

export default PriorityList;
