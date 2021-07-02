import { combineReducers, createStore } from 'redux';
import { CHANGE_SIGNAL, MOVE_CAR } from './actionCreators';

const INITIAL_CARS_STATE = {
  red: false,
  blue: true,
  yellow: false,
};

const INITIAL_TRAFFIC_STATE = {
  color: 'yellow',
};

const carsReducer = (state = INITIAL_CARS_STATE, action) => {
  switch (action.type) {
  case MOVE_CAR:
    return {
      ...state,
      [action.car]: action.side,
    }
  default:
    return state;
  };
};

const signalReducer = (state = INITIAL_TRAFFIC_STATE, action) => {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return {
        color: action.payload,
    }
  default:
    return state;
  };
};

const rootReducer = combineReducers({
  cars: carsReducer,
  traffic: signalReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
