import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  render() {
    const { cartItens } = this.props;
    console.log(cartItens);
    return (
      <div>
      {cartItens.map((product) => {
        return (
          <div>
          <h3>Nome: { product.name }</h3>
          <h3>Preço: { product.price }</h3>
          <button type="button" >Remover Item</button>
          </div>
        )
      })}
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  cartItens: state.shoppingCart,
});

export default connect(mapStateToProps)(Cart);
