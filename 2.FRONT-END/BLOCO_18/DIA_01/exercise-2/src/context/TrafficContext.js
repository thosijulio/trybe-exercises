import React from 'react';
import Context from '.';

class TrafficContext extends React.Component {
  constructor() {
    super();
    this.state = {
      signalColor: 'red',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(color) {
    this.setState({ signalColor: color });
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

export default TrafficContext;