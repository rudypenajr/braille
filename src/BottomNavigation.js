import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import OneIcon from "@material-ui/icons/Filter1";
import TwoIcon from "@material-ui/icons/Filter2";
import ThreeIcon from "@material-ui/icons/Filter3";

const styles = theme => ({
  root: {
    width: '50%',
    margin: '0 auto'
  }
});

// class SimpleBottomNavigation extends React.Component {
function SimpleBottomNavigation(props) {
  // console.log('navigation: ', props)
  const { classes } = props;
  const { navigation } = props;

  return (
    <BottomNavigation
      value={navigation}
      onChange={props.handleNavigation}
      className={classes.root}
    >
      <BottomNavigationAction icon={<OneIcon />} />
      <BottomNavigationAction icon={<TwoIcon />} />
      <BottomNavigationAction icon={<ThreeIcon />} />
    </BottomNavigation>
  );
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
