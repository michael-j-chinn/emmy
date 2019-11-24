import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from './Components/Menu';
import Random from './Components/Random/Random';
import SocialContainer from './Components/Social';
import SocialSharingSuccess from './Components/Social/SocialSharingSuccess';
import PriorityContainer from './Components/Prioritised';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: {
		backgroundColor: "#548235"
	},
	input: {
		color: "white"
	}
};

class App extends Component {
	render() {
		let { classes } = this.props;

		return (
			<Router>
				<AppBar position="static" className={classes.root}>
					<Toolbar>
						<Typography variant="h6">
							My Decision Maker
						</Typography>
					</Toolbar>
				</AppBar>
				<CssBaseline />
				<Box m={2} style={{marginBottom:75}}>
					<Switch>
						<Route path="/random">
							<Random />
						</Route>
						<Route path="/social/success">
							<SocialSharingSuccess />
						</Route>
						<Route path="/social">
							<SocialContainer />
						</Route>
						<Route path="/prioritised">
							<PriorityContainer />
						</Route>
						<Route exact path="/">
							<Menu />
						</Route>
					</Switch>
				</Box>
			</Router>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
