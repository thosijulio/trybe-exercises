import React from 'react';
import './DogImage.css';

class DogImage extends React.Component {
  constructor() {
    super();
    this.state = {
      imageSource: '',
    };
    this.fetchDogApi = this.fetchDogApi.bind(this);
  }

  componentDidMount() {
    this.fetchDogApi();
  }

  fetchDogApi() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) => {
        const dogBreed = result.message.split('/')[4];
        if (!result.message.includes('terrier')) {
          this.setState({ imageSource: result.message });
          localStorage.setItem('lastImage', result.message);
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
      </>
    );
  }
}

export default DogImage;
