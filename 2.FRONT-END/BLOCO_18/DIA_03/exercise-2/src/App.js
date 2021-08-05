import React, { useState, useEffect } from 'react';

function Greeting({ initialName = '' }) {
  // 🐨 inicialize o estado com o valor que vem do localStorage
  const [name, setName] = useState(localStorage.getItem('name') || initialName);

  // 🐨 Utilizar o hook useEffect para atualizar a
  // propriedade `name` no localStorage quando o estado for alterado
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
