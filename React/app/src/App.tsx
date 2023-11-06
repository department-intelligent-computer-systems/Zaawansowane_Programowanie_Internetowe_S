import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Zadanie1 } from './Components/Zadanie1';
import { Zadanie2 } from './Components/Zadanie2';
import { Zadanie4 } from './Components/Zadanie4';

function App() {
  return (
    <>
      <Zadanie1 />
      <Zadanie2 />
      <Zadanie4 />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
