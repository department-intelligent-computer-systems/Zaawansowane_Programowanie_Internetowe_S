import React from 'react'

type FunctionProperties = {
  deleteItem : () => void;
  
}

const Zad2_2 = ({deleteItem} : FunctionProperties) => {
  return (
    <div>
      <p>Na pewno usunąć?</p>
      <button onClick={deleteItem}>Tak</button>
      
    </div>
  )
}

export default Zad2_2