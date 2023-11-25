import React from 'react'
import { useState } from "react";

const Zad3 = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <p>Zadanie 3 </p>
      <p>{value}</p>
      <button onClick={() => setValue(value-1)}>-1</button>
      <button onClick={() => setValue(value+1)}>+1</button>
      <button onClick={() => setValue(value-2)}>-2</button>
      <button onClick={() => setValue(value+2)}>+2</button>
    </div>
  )
}

export default Zad3