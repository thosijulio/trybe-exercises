import React from 'react';
import Context from '.';

class CarContext extends React.Component {
  constructor() {
    super();
    this.state = {
      blueCar: false,
      redCar: false,
      yellowCar: false,
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
    const { children } = this.props;
    return (
      <Context.Provider value={{...this.state, handleChange: this.handleChange}}>
        { children }
      </Context.Provider>
    )
  }
}

export default CarContext;