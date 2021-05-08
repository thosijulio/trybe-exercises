import logo from './logo.svg';
import './App.css';

function itensList() {
  const compromissos = ['Acordar', 'Trabalhar', 'Trybear', 'Namorar', 'Relaxar'];
  return compromissos.map((compromisso) => <ol>{compromisso}</ol>);
}

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! Esse é o meu Primeiro codigo em React!!!
        </p>
        {task(itensList())}
      </header>
    </div>
  );
}

export default App;
