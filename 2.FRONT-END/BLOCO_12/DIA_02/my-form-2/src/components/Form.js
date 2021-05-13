import React from 'react';
import DadosPessoais from './DadosPessoais';
import DadosProfissionais from './DadosProfissionais';

class Form extends React.Component {
  constructor() {
    super()
    
    this.handleClick = this.handleClick.bind(this);

    this.state = ({
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      infos: '',
      descricaoCargo: '',

    })
  }

  handleClick({ target }) {
    const { type, name } = target;
    let value = type === 'checkbox' ? target.checked : target.value;
    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereco') value = value.replace(/[^a-zA-Z0-9]/g, '');

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <DadosPessoais value={ this.state } handleClick={this.handleClick}/>
        <DadosProfissionais value={ this.state } handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default Form;