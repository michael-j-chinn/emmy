
import React from 'react';
import {
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function Menu(props) {
  return <Grid container alignContent='center' spacing={2}>
    <Grid item xs={12}>
      <Grid container justify="center">
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button><Link to="/random"><Button variant="contained" color="primary">Random</Button></Link></ListItem>
          <ListItem button><Link to="/social"><Button variant="contained" color="primary">Social</Button></Link></ListItem>
          <ListItem button><Link to="/prioritised"><Button variant="contained" color="primary">Prioritised</Button></Link></ListItem>
        </List>
      </Grid>
    </Grid>
  </Grid>
}

export default Menu;