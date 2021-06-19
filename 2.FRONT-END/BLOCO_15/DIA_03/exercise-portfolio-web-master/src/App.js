import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <header className="App-header">
        <h1>Portfolio - Julio H. Thosi</h1>
        <nav id="links">
          <Link to="/">Início</Link>
          <Link to="/Projects">Projetos</Link>
          <Link to="/About">Sobre Mim</Link>
          <Link to="Contact">Contato</Link>
          </nav>
      </header>
     <Switch>
       <Route path="/Projects" component={ Projects } />
       <Route path="/Contact" component={ Contact } />
       <Route path="/About" component={ About } />
       <Route path="/" component={ Home } />
     </Switch>
    </>
  );
}

export default App;
