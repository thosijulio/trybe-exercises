import React from 'react';

class ApiRequisitions extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
    this.renderImgDog = this.renderImgDog.bind(this);
  }

  componentDidMount() {
    this.renderImgDog();
  }

  renderImgDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) => {
        if (!result.message.includes('terrier')) {
          this.setState({
            data: result,
          });
        }
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        { data !== '' ? <img src={ data.message } alt="random dog" /> : <p>Loading...</p>}
        <section>
          <button type="button" onClick={ this.renderImgDog }>Nova imagem</button>
        </section>
      </div>
    );
  }
}

export default ApiRequisitions;
