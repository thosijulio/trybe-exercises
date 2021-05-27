import React from 'react';
import PikachuCrying from './Pikachu-crying.png';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <h2>Page Requested not found <span role="img" aria-label="loudly-crying-face">😭</span></h2>
        <img src={ PikachuCrying } alt="Pikachu crying" style={ {width: '400px'} } />
      </>
    )
  }
}

export default NotFound;
