import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import BottomNavigation from './BottomNavigation';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      braille: '',
      isFetching: false,
      navigation: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleNavigation = this.handleNavigation.bind(this)
  }

  handleChange(event) {
    this.setState({
      braille: event.target.value,
      isFetching: true
    })
  }

  handleNavigation(event, value) {
    this.setState({
      navigation: value
    })
  }

  render() { 
    return (
      <div className="App">
        <Main 
          value={this.state.braille} 
          isFetching={this.state.isFetching}
          handleChange={this.handleChange} 
        />
        <BottomNavigation 
          navigation={this.state.navigation}
          handleNavigation={this.handleNavigation} 
        />
      </div>
    );
  }
}

export default App;
