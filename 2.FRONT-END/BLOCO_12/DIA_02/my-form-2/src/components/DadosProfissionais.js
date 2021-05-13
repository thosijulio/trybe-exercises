import React from 'react';

class DadosProfissionais extends React.Component {
  render() {
    const { handleClick } = this.props;

    return (
      <fieldset>
        <legend>Dados Profissionais:</legend>
        Resumo:
        <textarea
            name="resumo"
            maxLength="1000"
            required
            onChange={handleClick}
          />
          Informações:
            <input
              type="text"
              name="infos"
              maxLength="40"
              required
              onChange={handleClick}
            />
          Descrição do cargo:
          <textarea
            name="descricaoCargo"
            maxLength="500"
            onChange={handleClick}
          />
      </fieldset>  
    )
  }
}

export default DadosProfissionais;