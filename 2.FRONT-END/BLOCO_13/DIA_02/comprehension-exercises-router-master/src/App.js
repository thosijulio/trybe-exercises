import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={ (props) => <Users { ...props } greetingMessage="Good Morning"/> } />          
          <Route
            path="/strict-access"
            render={ (props) => <StrictAccess
              {...props}
              user={ ({ username: 'teste', password: '' }) }
            />}
          />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
        </Switch>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/users"> Users </Link>
        <Link to="/strict-access">Strict Access</Link>
      </BrowserRouter>
    );
  }
}

export default App;
