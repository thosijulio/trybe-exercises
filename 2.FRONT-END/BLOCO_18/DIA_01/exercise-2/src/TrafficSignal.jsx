import React from 'react';
import PropTypes from 'prop-types';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import Context from './context';

class TrafficSignal extends React.Component {
  
  renderSignal(signalColor) {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  render() {
    return (
      <Context.Consumer>
        { (value) => {
          const { signalColor, handleChange } = value;
          return (
            <div>
              <div className="button-container">
                <button onClick={() => handleChange('red')} type="button">
                  Red
                </button>
                <button onClick={() => handleChange('yellow')} type="button">
                  Yellow
                </button>
                <button onClick={() => handleChange('green')} type="button">
                  Green
                </button>
              </div>
              <img className="signal" src={this.renderSignal(signalColor)} alt="" />
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
};

TrafficSignal.propTypes = {
  changeSignal: PropTypes.func.isRequired,
  signalColor: PropTypes.string.isRequired,
};

export default TrafficSignal;
