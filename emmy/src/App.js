import React, { Component } from 'react';
import './App.css';
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
import Social from './Components/Social';
import PriorityContainer from './Components/Prioritised';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
	render() {
		return (
			<Router>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6">
							Eeny Meeny Miny Yo
						</Typography>
					</Toolbar>
				</AppBar>
				<CssBaseline />
				<Box m={2}>
					<Switch>
						<Route path="/random">
							<Random />
						</Route>
						<Route path="/social">
							<Social />
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

export default App;
