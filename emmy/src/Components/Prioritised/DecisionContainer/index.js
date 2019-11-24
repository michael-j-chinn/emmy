import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

function DecisionContainer(props) {
	return <Fragment>
		<Typography variant="h4" style={{ marginBottom: 25 }}>
			Final Decision
		</Typography>
		<Typography variant="h2" style={{ marginBottom: 25 }}>
			Foo Bar
		</Typography>
		<Link to="/">
			<Fab variant="extended" color="primary" aria-label="add">
				<NavigationIcon />
				Make Another Decision
		</Fab>
		</Link>
	</Fragment>;
}

export default DecisionContainer;
