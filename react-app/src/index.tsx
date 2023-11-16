import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Zad2 from './Zad2';
import Zad3 from './Zad3';
import Zad4 from './Zad4';
import Zad5 from './Zad5';
import GalleryShow from './Zad6';
import GalleryShow1 from './Zad7';
import GalleryShow2 from './Zad8';


ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render(<Zad2/>,document.getElementById('root'));
ReactDOM.render(<Zad3/>,document.getElementById('root'));
ReactDOM.render(<Zad4/>,document.getElementById('root'));
ReactDOM.render(<Zad5/>,document.getElementById('root'));
ReactDOM.render(<GalleryShow/>,document.getElementById('root'));
ReactDOM.render(<GalleryShow1/>,document.getElementById('root'));
ReactDOM.render(<GalleryShow2/>,document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

