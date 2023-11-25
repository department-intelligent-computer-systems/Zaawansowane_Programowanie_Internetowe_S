import React from 'react';
import {useState} from "react";

const Zad16 = () => {
  const [value, setValue] = useState<string>("");


  return (
    <div>
      <p>{value}</p>
      <input type="text" onChange={(e) => {setValue(e.target.value)}}/>
    </div>
  )
}

export default Zad16