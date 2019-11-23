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
import Random from './Components/Random';

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
      <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/random">
            <Random />
          </Route>
        </Switch>
     </Router>
    );
  }
}

export default App;
