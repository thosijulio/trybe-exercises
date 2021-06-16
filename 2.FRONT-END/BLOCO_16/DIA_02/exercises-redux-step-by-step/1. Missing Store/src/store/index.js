import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer,
  window.devToolsExtension() || ((f) => f));

export default store;
