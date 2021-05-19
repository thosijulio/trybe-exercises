import React from 'react';
import './ApiRequisition.css';

class ApiRequisitions extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
    this.renderImgDog = this.renderImgDog.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.saveDog = this.saveDog.bind(this);
  }

  async componentDidMount() {
    await this.renderImgDog();
    const { data } = this.state;
    const typeDog = data.message.split('/')[4];
    alert(typeDog);
  }

  handleInput(event) {
    this.setState({
      apelido: event.target.value,
    });
  }

  saveDog() {
    localStorage.clear();
    const { data } = this.state;
    localStorage.setItem(this.state.apelido, data.message);
  }

  renderImgDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) => {
        if (!result.message.includes('terrier')) {
          this.setState({
            data: result,
          });
        } else alert('Raça não permitida');
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        { data !== '' ? <img src={ data.message } alt="random dog" /> : <p>Loading...</p>}
        <section>
          <button type="button" onClick={ this.renderImgDog }>Nova imagem</button>
          <input type="text" onChange={ this.handleInput } />
          <button type="button" onClick={ this.saveDog }>Salvar infos</button>
        </section>
      </div>
    );
  }
}

export default ApiRequisitions;
