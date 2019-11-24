import React, { Component, Fragment } from 'react';
import { Fab } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField';

class Social extends Component {

	constructor(
		props
	) {
		super(props);
		this.state = {
			options: [],
			newOption: ""
		};
		this.addOption = this.addOption.bind(this);
	}

	render() {
		let { options } = this.state;

		return <Fragment>
			<h1>Social</h1>
			<Grid container>
				<Grid item>
					<label>Type your question</label>

					<br />
					<TextField id="question" label="question" multiline />
				</Grid>

				<br />
				<label>Type your options</label>
				{
					options.length ? options.map(el =>
						<span value={el} key={el}> {el}
							<Fab color="primary" aria-label="add">
								<DeleteIcon />
							</Fab>
						</span>
					)
						: <span>No options listed</span>
				}

				<br />
				<TextField id="new-option"
					label="Type an option"
					value={this.state.newOption}
					onChange={this.typeNewOption.bind(this)}
				//onChangeText={this.typeNewOption.bind(this)}
				/>
				<br />

				<Fab color="primary" aria-label="add" onClick={(e) => { this.addOption(e) }}>
					<AddIcon ></AddIcon>
				</Fab>
			</Grid>
		</Fragment>
			;
	}

	addOption(e) {
		e.preventDefault();
		// let {state} = this.state;
		this.state.options.push(this.state.newOption);
		this.state.newOption = "";
	}

	typeNewOption(e) {
		//e.preventDefault();
		this.setState({ newOption: e.target.value });
	}
}

export default Social;
