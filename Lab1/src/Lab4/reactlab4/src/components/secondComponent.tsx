import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { FirstComponent } from './firstComponent';




  
export class SecondComponent extends React.Component<{}>{
     
handleButton = () =>{
  const Stan= {}
}
    
render(){
  return (
    <div>

        <h1>Drugi komponent</h1>
        <p>text z drugiego komponentu</p>
        <button>Ukryj komponent</button>
    </div>
  );
}
}
