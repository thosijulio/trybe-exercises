import { createContext } from 'react';

const state = {
  blueCar: false,
  yellowCar: false,
  redCar: false,
}

const Context = createContext(state);

export default Context;