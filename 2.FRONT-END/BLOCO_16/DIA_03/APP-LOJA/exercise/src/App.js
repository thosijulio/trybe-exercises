import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionAddToCart, actionRemoveToList } from './actions';

class App extends React.Component {
  render(props) {
    const { products, addCart, takeItem } = this.props;

    return (
      <div className="App">
        {products.map((product, id) => {
          if (product.quantity <= 0 ) return (
            <div key={ id } style={ { margin: "60px 5px" } }>
              <h3>Nome: { product.name }</h3>
              <h3>Preço: { product.price }</h3>
              <button type="button" disabled={true}>Esgotado</button>
            </div>
          ); else return (
              <div key={ id } style={ { margin: "60px 5px" } }>
                <h3>Nome: { product.name }</h3>
                <h3>Preço: { product.price }</h3>
                <button type="button" onClick={ () => {addCart(product); takeItem(product)} }>Adicionar Item</button>
              </div>
          );
        })}
        <Link to="/cart">
          <button type="button">Ver Carrinho</button>
        </Link>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  products: state.productList,
});

const mapDispatchToProps = (dispatch) => ({
  addCart: (item) => dispatch(actionAddToCart(item)),
  takeItem: (item) => dispatch(actionRemoveToList(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
