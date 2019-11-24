import React, { Component, Fragment } from 'react';
import { Fab, Typography, Link, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';

const styles = {
	card: {
		marginBottom: 10,
		padding: 15
	},
	cardHeader: {
		padding: 0
	},
	cardContent: {
		padding: 0
	}
};

class Social extends Component {
    
  constructor(
    props
  ) {
    super(props);
    this.state = {
      options : [],
      newOption : "",
      socialNetworks : [
        { name: 'Facebook', enabled: false},
        { name: 'Instagram', enabled: false},
        { name: 'Twitter', enabled: false}
      ]
    };
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleSocialNetwork = this.toggleSocialNetwork.bind(this);
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
      if (options[i] === o) {
        options.splice(i, 1);
        break;
      }
    }
    this.setState({options});
  }

  onChange(e) {
    this.setState({ newOption: e.target.value });
  }

  toggleSocialNetwork(e) {
    let {socialNetworks} = this.state;
    for (var i = 0; socialNetworks.length; i++) {
      if (socialNetworks[i].name === e.target.name) {
        socialNetworks[i].enabled = e.target.checked;
        break;
      }
    }
  }

  render() {
    let {options, newOption, socialNetworks} = this.state;
      return <Fragment>
            <Card  className={classes.card}>
              <CardContent>
                <Typography variant="h5">Type your question</Typography>       
                <TextField id="question" label="question" multiline xs={12}/>            
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
              <Typography variant="h5">Type your options</Typography>
              {
                  options.length 
                    ? options.map(o => 
                      <Grid item xs={12}>
                        <Typography variant="body1">{o}</Typography>
                        <Fab size="small" color="primary" aria-label="delete" onClick={(e) => { this.removeOption(o, e)}}>
                          <DeleteIcon />
                        </Fab>
                      </Grid>
                    ) : 
                    <Grid item xs={12}>
                      <Typography variant="body1">No options listed</Typography>
                    </Grid>
              }

              
              <Grid item xs={12}>
                <form onSubmit={this.addOption}>
                  <TextField id="new-option" 
                    name="newOption"
                    label="Type an option" 
                    onChange={this.onChange}
                    value={newOption}/>
                  <br/>
                  
                  <Fab size="small" type="submit" color="primary" aria-label="add">
                    <AddIcon ></AddIcon>
                  </Fab>
                </form>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent>              
              <TextField xs={6}
                id="standard-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
              <FormControl>
                <Select displayEmpty>
                  <MenuItem >minutes</MenuItem>
                  <MenuItem >hours</MenuItem>
                  <MenuItem >days</MenuItem>
                </Select>
                </FormControl>
            </CardContent>
          </Card>

          
          <Card  className={classes.card}>
            <CardContent>
            
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  {
                    socialNetworks.map((sn) => 
                      <Grid item xs={12}>   
                        <FormControlLabel
                          name={sn.name}
                          value={sn.name}
                          control={<Switch color="primary" />}
                          label={sn.name}
                          labelPlacement="end"
                        />
                      </Grid>
                    )
                  }
                </FormGroup>
              </FormControl>
            </CardContent>
          </Card>
        </Fragment>
      ;
    }
}

export default Social;
