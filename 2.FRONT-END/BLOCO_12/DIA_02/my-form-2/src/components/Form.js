import React from 'react';
import DadosPessoais from './DadosPessoais';
import DadosProfissionais from './DadosProfissionais';
import ShowInfos from './ShowInfos';

class Form extends React.Component {
  constructor() {
    super()
    
    this.handleClick = this.handleClick.bind(this);
    this.formButton = this.formButton.bind(this);
    this.resetForm = this.resetForm.bind(this);

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
      showInfos: false,
    })
  }
  resetForm() {
    this.setState({
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
      showInfos: false,
    })
  }

  formButton() {
    this.setState((oldState) => ({
      showInfos: !oldState.showInfos,
    }));
  }

  handleClick(event) {
    const { type, name } = event.target;
    let value = type === 'checkbox' ? event.target.checked : event.target.value;
    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereco') value = value.replace(/[^a-zA-Z0-9]/g, '');

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { showInfos } = this.state;
    return (
      <div>
        <DadosPessoais value={ this.state } handleClick={this.handleClick}/>
        <DadosProfissionais value={ this.state } handleClick={this.handleClick}/>
      <button onClick={ this.formButton } type="button" >Enviar Formulário</button>
      <button onClick={ this.resetForm } type="reset">Limpar Formulário</button>
        {showInfos ? <ShowInfos infos={ this.state }/> : null}
      </div>
    )
  }
}

export default Form;