import React from 'react'


type FunctionProperties = {
  HideComponent : () => void;
}


const Zad9_2 = ({HideComponent} : FunctionProperties) => {
  return (
    <div>
      <p>Nie wiem co to za komunikat ale wyświetla się po naciśnięciu</p>
      <button onClick={HideComponent}>Ukryj mnie</button>
    </div>
  )
}

export default Zad9_2