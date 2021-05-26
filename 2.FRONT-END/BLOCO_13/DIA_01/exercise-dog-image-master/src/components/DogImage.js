import React from 'react';
import './DogImage.css';

class DogImage extends React.Component {
  constructor() {
    super();
    this.state = {
      imageSource: '',
      dogName: '',
    };
    this.fetchDogApi = this.fetchDogApi.bind(this);
    this.saveDogName = this.saveDogName.bind(this);
    this.saveDog = this.saveDog.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('savedDog')) {
      const savedDog = JSON.parse(localStorage.getItem('savedDog'));
      this.setState({ imageSource: savedDog.imageSource })
    } else this.fetchDogApi();
  }

  saveDogName(event) {
    const { value } = event.target;
    this.setState({ dogName: value });
  }

  saveDog() {
    localStorage.setItem('savedDog', JSON.stringify(this.state));
  }

  fetchDogApi() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) => {
        const dogBreed = result.message.split('/')[4];
        if (!result.message.includes('terrier')) {
          this.setState({ imageSource: result.message });
          alert(dogBreed);
        } else alert(`Raça ${dogBreed} não permitida :(`);
      });
  }

  render() {
    const { imageSource } = this.state;
    return (
      <>
        { imageSource === '' ? <p>Loading...</p> : <img src={ imageSource } alt="dog" /> }
        <br />
        <button type="button" onClick={ this.fetchDogApi }>Novo Cachorro</button>
        <br />
        <input
          type="text"
          onChange={ this.saveDogName }
          placeholder="Digite um nome para o cachorro"
        />
        <button type="button" onClick={ this.saveDog }>Salvar Cachorro</button>
      </>
    );
  }
}

export default DogImage;
