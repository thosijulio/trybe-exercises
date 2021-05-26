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
      .then((result) => this.setState({ imageSource: result.message }));
  }

  render() {
    const { imageSource } = this.state;
    return (
      imageSource === '' ? <p>Loading...</p> : <img src={ imageSource } alt="dog" />
    );
  }
}

export default DogImage;
