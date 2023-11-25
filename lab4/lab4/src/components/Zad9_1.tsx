import React from 'react'

type FunctionProperties = {
  ShowComponent : () => void;
  
}

const Zad9_1 = ({ShowComponent} : FunctionProperties) => {
  return (
    <div>
      <p>Zadanie 9 - komponent wyświetlany po starcie</p>
      <button onClick={ShowComponent}>Wyświetl komponent drugi</button>
      
    </div>
  )
}

export default Zad9_1