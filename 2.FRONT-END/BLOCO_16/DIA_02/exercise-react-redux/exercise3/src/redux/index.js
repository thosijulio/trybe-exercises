import { combineReducers, createStore } from 'redux';

const initialSignalState = {
  signal: {
    color: 'yellow',
  },
}

const initialCarsState = {
  cars: {
    red: 'left',
    blue: false,
    yellow: false,
  },
};

function signalReducer(state = initialSignalState, action) {
  switch (action.type) {
    case 'CHANGE_SIGNAL':
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}


function carsReducer(state = initialCarsState, action) {
  switch (action.type) {
    case 'MOVE_CAR':
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}


const reducer = combineReducers({
  signalReducer,
  carsReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
