import React from 'react';
import { Redirect } from 'react-router';

class StrictAccess extends React.Component {

  render() {
    const { user } = this.props;
    if (user.username !== 'joao' || user.password !== '1234') {
      alert('Access denied');
    }
    
    return (
      (user.username === 'joao' && user.password === '1234') ? <p>Welcome João!</p> : <Redirect to="/" />
    )
  }
}

export default StrictAccess;
