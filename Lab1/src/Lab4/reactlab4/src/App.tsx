import React, { useState } from 'react';
import { FirstComponent } from './components/firstComponent';
import { FirstComponentF } from './components/firstComponentF';
import {SecondComponentF} from './components/secondComponentF';

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

  function handleCounterplus(){
    const przycisk1 = document.getElementById('plus');
    const przycisk2 = document.getElementById('minus');
    const przycisk3 = document.getElementById('plus2');
    const przycisk4 = document.getElementById('minus2');
    przycisk1?.addEventListener('click', () => {
      setCounter(counter +1);
    });
    przycisk2?.addEventListener('click', () => {
      setCounter(counter -1);
    });
    przycisk3?.addEventListener('click', () => {
      setCounter(counter +2);
    });
    przycisk4?.addEventListener('click', () => {
      setCounter(counter -2);
    });
  }

  const [gallery, setGallery] = useState([
    { id: 1, name: "gory1", url: "https://www.tapeciarnia.pl/tapety/normalne/tapeta-widok-z-okwieconej-laki-na-szczyty-gor.jpg" },
    { id: 2, name: "gory2", url: "https://www.tapeciarnia.pl/tapeciarnia_pl.php?album=32813_1554277573_6598.jpg" },
    { id: 3, name: "gory3", url: "https://www.tapeciarnia.pl/tapety/normalne/149211_szczyty_gor_slonce.jpg" }
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(false);
  const [isPrevButtonHide, setIsPrevButtonHide] = useState(false);
  const [isNextButtonHide, setIsNextButtonHide] = useState(false);

  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const handleButtonClick = () => {
    setShowSecondComponent(true);
  };

  const handleHideSecondComponent = () => {
    setShowSecondComponent(false);
  };


  const [alertText, setAlertText] = useState("");
  const handleAlert = (message: string) => {
    setAlertText(message);
    //Zamyka 2 komponent
    setShowSecondComponent(false);
  };


  function handleNextImage() {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % gallery.length;
      setIsNextButtonDisabled(nextIndex === 0); 
      setIsNextButtonHide(nextIndex === 0 );
      setIsPrevButtonDisabled(false); 
      setIsPrevButtonHide(false);
      
      return nextIndex;
    });
  }

  function handlePrevImage() {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + gallery.length) % gallery.length;
      setIsPrevButtonDisabled(newIndex === 0);
      setIsPrevButtonHide(newIndex === 0);
      setIsNextButtonDisabled(false);
      setIsNextButtonHide(false);
      
      return newIndex;
    });
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
      <span>Zad5</span>
      <p>{counter}</p>
      <button onClick={handleCounterplus}>+1</button>

      <br />
      <br />

      <span>Zad6 i Zad7 i Zad8</span>

      <div>
        <img src={gallery[currentImageIndex].url} width="300" height="300" alt={gallery[currentImageIndex].name}></img>
      </div>
      <button id='nastepneZdjecie' onClick={handleNextImage} disabled={isNextButtonDisabled} hidden={isNextButtonHide}>
        Następne zdjęcie
      </button>
      <button id='poprzednieZdjecie' onClick={handlePrevImage} disabled={isPrevButtonDisabled} hidden={isPrevButtonHide}>
        Poprzednie zdjęcie
      </button>
      <br />
      <br />
      <br />
      <p>Zad9</p>
      <p>Zad10</p>
      <br />
      <br />
      <FirstComponent></FirstComponent>
      <br />
      <br />
      <br />
      <p>Zad11</p>
      <div>
      {showSecondComponent ? (
        <SecondComponentF OnHide={handleHideSecondComponent} alertText={handleAlert} />
      ) : (
        <FirstComponentF onButtonClick={handleButtonClick} alertText={alertText} />
      )}
    </div>
      <br />
      <br />
    </div>
  );
}

export default App;
