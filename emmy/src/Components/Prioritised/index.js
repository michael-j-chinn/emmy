import React, { Fragment } from 'react';
import PriorityList from './PriorityList';
import Typography from '@material-ui/core/Typography';

function PriorityContainer(props) {
	return <Fragment>
		<Typography variant="h4" style={{marginBottom:10}}>
			Priorities
		</Typography>
		<PriorityList />
	</Fragment>;
}

export default PriorityContainer;