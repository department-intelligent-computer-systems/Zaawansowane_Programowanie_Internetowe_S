import React from 'react';
import logo from './logo.svg';
import './App.css';

import Ex1 from './components/Ex1/Ex1';
import Ex2 from './components/Ex2/Ex2';
import Ex4 from './components/Ex4/Ex4';
import Ex9 from './components/Ex9/Ex9';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ex1/>
        <Ex2/>
        <Ex4/>
        <Ex9/>
      </header>
    </div>
  );
}

export default App;
