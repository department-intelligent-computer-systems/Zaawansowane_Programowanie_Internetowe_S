import React from 'react';
import logo from './logo.svg';
import './App.css';
import Zadanie1 from "./components/Zadanie1"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Zadanie1/>

    </div>
  );
}

export default App;
