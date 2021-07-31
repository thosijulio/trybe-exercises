// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
  const [state, setState] = useState({
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
    signal: {
      color: 'yellow',
    },
  });

const moveCar = (car, side) => {
  setState({
    ...state,
    cars: {
      ...state.cars,
      [car]: side,
    },
  });
};

const changeSignal = (signalColor) => {
  setState({
    ...state,
    signal: {
      ...state.signal,
      color: signalColor,
    },
  });
};

  const context = {
    ...state,
    moveCar,
    changeSignal,
  };

  const { children } = props;

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
