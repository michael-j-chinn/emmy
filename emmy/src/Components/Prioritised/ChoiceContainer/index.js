import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import ChoiceList from './ChoiceList';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function ChoiceContainer(props) {
	return <Fragment>
		<Link to="/prioritised/decision">
			<Fab size="small" style={{ position: 'absolute', right: 10, backgroundColor: '#ed7d31' }}>
				<NavigateNextIcon />
			</Fab>
		</Link>
		<Typography variant="h4" style={{ marginBottom: 10 }}>
			Choices
		</Typography>
		<ChoiceList />
	</Fragment>;
}

export default ChoiceContainer;
