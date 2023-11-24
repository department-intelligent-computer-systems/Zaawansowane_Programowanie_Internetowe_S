import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { FirstComponent } from './firstComponent';


type SecondState={
  text:string
}


  
export class SecondComponent extends React.Component<{}, SecondState>{
      constructor(props:{}){
          super(props);
          this.state={
            text:""
              };
          }
     
handleButton = () =>{
  const Stan= {}
}
handleButtonYes = () =>{
  this.setState({
    text:"Ciesze się idziemy dalej",
  })
}
handleButtonNo = () =>{
  this.setState({
    text:"Nie ciesz się idziemy dalej!",
  })
}
    
render(){
  return (
    <div>

        <h1>Drugi komponent</h1>
        <p>Czy chcesz dalej uczyć się React</p>
        <button onClick={this.handleButtonYes}>tak</button>
        <button onClick={this.handleButtonNo}>nie</button>
        {this.state.text && <p>{this.state.text}</p>}
    </div>
  );
}
}
