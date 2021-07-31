// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
    const [state, setState] = useState({
      cars: {
        redCar: true,
        blueCar: false,
        yellowCar: false,
      },
    });
    
  const moveCar = (car, side) => {
    setState({
      ...state,
      cars: {
        ...state.cars,
        [car]: side,
      }
    });
  };

    const context = {
      ...state,
      moveCar,
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
