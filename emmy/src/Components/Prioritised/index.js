import React from 'react';
import PriorityList from './PriorityList';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function PriorityContainer(props) {
	return <Box m={2}>
		<Typography variant="h2">
			Priorities
		</Typography>
		<PriorityList />
	</Box>;
}

export default PriorityContainer;