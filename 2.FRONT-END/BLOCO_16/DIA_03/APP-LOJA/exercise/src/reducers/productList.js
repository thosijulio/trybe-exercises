import { LESS_ONE_ITEM } from "../actions";

const INITIAL_STATE = [
  {
    id: 1,
    name: 'Carrinho Hot Wheels',
    price: 12.50,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Detetive',
    price: 79.50,
    quantity: 5,
  },
  {
    id: 3,
    name: 'Imagem e Ação',
    price: 84,
    quantity: 5,
  },
  {
    id: 4,
    name: 'Lego Star Wars',
    price: 172.90,
    quantity: 5,
  },
  {
    id: 5,
    name: 'Boneca Barbie',
    price: 140.10,
    quantity: 5,
  },
];

function productList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LESS_ONE_ITEM:
      return state.map((product) => {
        if (product.id === action.payload.item.id) {
          return {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity - 1,
          };
        } else return product;
      })
    default:
      return state;
  }
};

export default productList;
