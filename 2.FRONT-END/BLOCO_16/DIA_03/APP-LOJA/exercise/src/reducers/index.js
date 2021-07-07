import { combineReducers } from 'redux';
import productList from './productList';
import shoppingCart from './shoppingCart';

const rootReducer = combineReducers({
  productList,
  shoppingCart,
})

export default rootReducer;
