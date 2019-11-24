import React, { Fragment } from 'react';
import Social from './Social';
import Typography from '@material-ui/core/Typography';

function SocialContainer(props) {
	return <Fragment>
		<Typography variant="h2">
			Social
		</Typography>
		<Social />
	</Fragment>;
}

export default SocialContainer;