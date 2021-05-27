import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/users"> Users </Link>
      </BrowserRouter>
    );
  }
}

export default App;
