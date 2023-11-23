import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [firstName, setName] = useState("");

  function handleClick() {
    setName("Jacek");
  }

  const [arrayOfLink, setArray] = useState([
    { id: 1, name: "moodle", url: "https://moodle2022.pcz.pl/course/view.php?id=2684", color: "red" },
    { id: 2, name: "wykresy", url: "https://app.creately.com/d/UYjC3L0xXcE/view", color: "red" },
    { id: 3, name: "random", url: "https://chat.openai.com/c/192ee8e1-87c6-47ee-ba2a-f055e96f1bb7", color: "red" }
  ]);

  const [counter, setCounter] = useState(0);

  function handleCounterplus() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  const [gallery, setGallery] = useState([
    { id: 1, name: "gory1", url: "https://www.tapeciarnia.pl/tapety/normalne/tapeta-widok-z-okwieconej-laki-na-szczyty-gor.jpg" },
    { id: 2, name: "gory2", url: "https://www.tapeciarnia.pl/tapeciarnia_pl.php?album=32813_1554277573_6598.jpg" },
    { id: 3, name: "gory3", url: "https://www.tapeciarnia.pl/tapety/normalne/149211_szczyty_gor_slonce.jpg" }
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleNextImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  }

  function handlePrevImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
  }

  function handleArray(id: number) {
    setArray((arrayOfLink) => {
      return arrayOfLink.map((link) => {
        if (link.id === id) {
          link.color = "blue";
        } else {
          link.color = "red";
        }
        return link;
      });
    });
  }

  return (
    <div className="">
      <span>Zad1</span>
      <p>{firstName}</p>
      <button onClick={handleClick}>Kliknij mnie</button>
      <br />
      <br />
      <br />
      <span>Zad2 + Zad3</span>
      {arrayOfLink.map((arrayOfLink) => (
        <li key={arrayOfLink.id}>
          <a style={{ backgroundColor: arrayOfLink.color }} onClick={() => handleArray(arrayOfLink.id)}>{arrayOfLink.name}</a>
        </li>
      ))}
      <br />
      <br />
      <span>Zad4</span>
      <p>{counter}</p>
      <button id='plus' onClick={handleCounterplus}>+1</button>
      <button id='minus' onClick={handleCounterplus}>-1</button>
      <button id='plus2' onClick={handleCounterplus}>+2</button>
      <button id='minus2' onClick={handleCounterplus}>-2</button>

      <br />
      <br />

      <span>Zad5</span>

      <div>
        <img src={gallery[currentImageIndex].url} width="300" height="300" alt={gallery[currentImageIndex].name}></img>
      </div>
      <button id='nastepneZdjecie' onClick={handleNextImage}>Następne zdjęcie</button>
      <button id='poprzednieZdjecie' onClick={handlePrevImage}>Poprzednie zdjęcie</button>
    </div>
  );
}

export default App;
