import  React from "react";
import {useState} from "react";

const Zad1 = () => {
  const [name, setName] = useState("");

  const showName = () => {
    setName("Marcin Mierzejewski");
  }

  return (
    <>
      <p>{name}</p>
      <button onClick={showName}>Pokaż imie</button>
    </> 
  )
}

export default Zad1