import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import CircularProgress from '@material-ui/core/CircularProgress';
import Braille from './Braille';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  braille: {
    margin: '100px 0 20px',
    'min-height': '150px'
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  // let display = props.value
  // if (props.isFetching) {
  //   display = <CircularProgress className={classes.progress} size={50} />
  // }

  return (
    <div className={classes.root}>
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <div className={classes.braille}>
          <Braille convert={props.value} />
            {/* {display} */}
          </div>
          <Paper className={classes.paper}>  
            <TextField
              id="with-placeholder"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Placeholder"
              fullWidth
              margin="normal"
              onChange={props.handleChange}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);