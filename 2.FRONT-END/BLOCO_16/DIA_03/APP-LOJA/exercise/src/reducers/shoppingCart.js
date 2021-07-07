import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM } from '../actions';

const INITIAL_STATE = [];

function shoppingCart(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      return state.concat(payload.item);

    case REMOVE_ITEM:
      return state.filter((product) => product.id === payload.item.id ? false : true);

    case CLEAR_CART:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export default shoppingCart;