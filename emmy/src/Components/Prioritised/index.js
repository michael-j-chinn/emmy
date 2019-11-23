import React, { Fragment } from 'react';
import PriorityList from './PriorityList';
import Typography from '@material-ui/core/Typography';

function PriorityContainer(props) {
	return <Fragment>
		<Typography variant="h2">
			Priorities
		</Typography>
		<PriorityList />
	</Fragment>;
}

export default PriorityContainer;