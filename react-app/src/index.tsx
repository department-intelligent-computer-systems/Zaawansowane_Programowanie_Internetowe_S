import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Zad2 from './Zad2';
import Zad3 from './Zad3';
import Zad4 from './Zad4';
import Zad5 from './Zad5';

ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render(<Zad2/>,document.getElementById('root'));
ReactDOM.render(<Zad3/>,document.getElementById('root'));
ReactDOM.render(<Zad4/>,document.getElementById('root'));
ReactDOM.render(<Zad5/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

