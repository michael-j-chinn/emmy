import React, { Fragment } from 'react';
import Social from './Social';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


function SocialContainer(props) {
	return <Fragment>

		
		<Fab size="small" style={{position:'absolute', right: 10, backgroundColor: '#ed7d31'}}  to="/social/success">
				<NavigateNextIcon />
		</Fab>
		<Typography variant="h4">
			Social
		</Typography>
		<Social />
	</Fragment>;
}

export default SocialContainer;