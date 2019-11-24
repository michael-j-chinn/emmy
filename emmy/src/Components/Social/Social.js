import React, { Component, Fragment } from 'react';
import { Fab, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField';

class Social extends Component {
    
  constructor(
    props
  ) {
    super(props);
    this.state = {
      options : [],
      newOption : ""
    };
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  addOption(e) {
    e.preventDefault();
    let {options, newOption} = this.state;
    if (newOption.length) {
      options.push(newOption);
      newOption = '';
      this.setState({options, newOption});
    }
  }

  removeOption(o, e) {
    let {options} = this.state;
    e.preventDefault();
    for (var i = 0; i < options.length; i++) {
      if (options[i] == o) {
        options.splice(i, 1);
        break;
      }
    }
    this.setState({options});
  }

  onChange(e) {
    this.setState({ newOption: e.target.value });
  }


  render() {
    let {options, newOption} = this.state;
      return <Fragment>
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <label>Type your question</label>       
          </Grid> 
          <Grid item xs={12}>    
            <TextField id="question" label="question" multiline xs={12}/>
          </Grid>
            <label>Type your options</label>
            {
                options.length 
                  ? options.map(o => 
                    <Grid item xs={12}>
                      <Typography variant="body1">{o}</Typography>
                      <Fab color="primary" aria-label="delete" onClick={(e) => { this.removeOption(o, e)}}>
                        <DeleteIcon />
                      </Fab>
                    </Grid>
                  ) : 
                  <Grid item xs={12}>
                    <Typography variant="body1">No options listed</Typography>
                  </Grid>
            }

            <Grid item xs={12}>
              <TextField id="new-option" 
                name="newOption"
                label="Type an option" 
                onChange={this.onChange}
                value={newOption}/>
              <br/>
              
              <Fab color="primary" aria-label="add" onClick={(e) => { this.addOption(e) }}>
                <AddIcon ></AddIcon>
              </Fab>
            </Grid>
          </Grid>
        </Fragment>
      ;
    }
}

export default Social;
