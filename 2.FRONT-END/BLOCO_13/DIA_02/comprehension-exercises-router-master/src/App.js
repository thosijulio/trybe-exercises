import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/users"> Users </Link>
      </BrowserRouter>
    );
  }
}

export default App;
