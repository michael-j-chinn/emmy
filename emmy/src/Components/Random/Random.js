import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: []
    }
    this.getChoices = this.getChoices.bind(this);
  }

  getChoices() {
    var { choices } = this.state;
    if (choices.length === 0) {
      return <h2>Add Choice</h2>
    } else {
      return choices.map(choice => <TextField id="outlined-basic" label="Outlined" variant="outlined" />);
    }
  }

  render() {
    return (
      <Grid item xs={12}>
        <Grid container justify="center">
          <Typography variant="h1">
            Random
          </Typography>
          {this.getChoices()}
        </Grid>
      </Grid>
    );
  }
}

export default Random;