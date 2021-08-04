import React from 'react';
import './App.css';
import Cars from './Cars';
import Context from './context/index';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      blueCar: false,
      yellowCar: false,
      redCar: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(car) {
    this.setState((oldState) => ({
      ...oldState,
      [car]: !oldState[car],
    }));
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, handleChange: this.handleChange}}>
        <Cars />
      </Context.Provider>
    );
  }
}

export default App;
