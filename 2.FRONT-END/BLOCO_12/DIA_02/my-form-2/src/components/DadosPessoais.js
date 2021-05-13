import React from 'react';

class DadosPessoais extends React.Component {
  render() {
    const { value, handleClick } = this.props;
    return (
      <fieldset>
        <legend>Dados Pessoais:</legend>
        <label htmlFor="nome">Nome:
          <input id="nome" name="nome" type="text" value={ value.nome } onChange={ handleClick } required></input>
        </label>
        <label htmlFor="email">Email:
          <input id="email" name="email" type="text" maxLength="50" value={ value.email } onChange={ handleClick } required></input>
        </label>
        <label htmlFor="cpf">CPF:
          <input id="cpf" name="cpf" type="text" maxLength="11" value={ value.cpf } onChange={ handleClick } required></input>
        </label>
        <label htmlFor="endereco">Endereço:
          <input id="endereco" name="endereco" type="text" maxLength="200" value={ value.endereco } onChange={ handleClick } required></input>
        </label>
        <label htmlFor="cidade">Cidade:
          <input id="cidade" name="cidade" type="text" maxLength="28" value={ value.cidade } onChange={ handleClick } required></input>
        </label>
        <label htmlFor="estado">Estado:
          <select name="estado" id="estado" value={ value.estado } onChange={ handleClick } required>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </label>
        <label htmlFor="casa">Casa:
          <input id="casa" name="tipo" type="radio" value="casa" onChange={ handleClick }></input>
          </label>
        <label htmlFor="apto">Apartamento:
          <input id="apto" name="tipo" type="radio" value="apto" onChange={ handleClick }></input>
        </label>
      </fieldset>
    )
  }
}

export default DadosPessoais;