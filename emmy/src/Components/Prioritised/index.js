import React, { Fragment } from 'react';
import PriorityList from './PriorityList';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function PriorityContainer(props) {
	return <Fragment>
		<Fab size="small" style={{position:'absolute', right: 10, backgroundColor: '#ed7d31'}}>
			<NavigateNextIcon />
		</Fab>
		<Typography variant="h4" style={{ marginBottom: 10 }}>
			Priorities
		</Typography>
		<PriorityList />
	</Fragment>;
}

export default PriorityContainer;