import React from 'react'

type FunctionProperties = {
  linkDescription : string;
  
}

const Zad2_1 = ({linkDescription} : FunctionProperties) => {
  return (
    <div>
      <p>{linkDescription}</p>
    </div>
  )
}

export default Zad2_1