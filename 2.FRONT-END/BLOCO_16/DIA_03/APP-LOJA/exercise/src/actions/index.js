export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const LESS_ONE_ITEM = 'LESS_ONE_ITEM';

export const actionAddToCart = (item) => ({
  type: ADD_ITEM,
  payload: {
    item,
  },
});

export const actionRemoveToList = (item) => ({
  type: LESS_ONE_ITEM,
  payload: {
    item,
  },
});