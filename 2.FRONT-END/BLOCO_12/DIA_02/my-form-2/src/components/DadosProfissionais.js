import React from 'react';

class DadosProfissionais extends React.Component {
  render() {
    const { handleClick, value } = this.props;

    return (
      <fieldset>
        <legend>Dados Profissionais:</legend>
        Resumo:
        <textarea
            name="resumo"
            maxLength="1000"
            required
            onChange={ handleClick }
            value={ value.resumo }
          />
          Informações:
            <input
              type="text"
              name="infos"
              maxLength="40"
              required
              onChange={ handleClick }
              value={ value.infos }
            />
          Descrição do cargo:
          <textarea
            name="descricaoCargo"
            maxLength="500"
            onChange={handleClick}
            value={ value.descricaoCargo }
          />
      </fieldset>  
    )
  }
}

export default DadosProfissionais;