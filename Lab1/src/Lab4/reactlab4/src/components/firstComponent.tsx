import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { SecondComponent } from './secondComponent';

type FirstState={
    showSecondComponent:boolean;
}



  
export class FirstComponent extends React.Component<{},FirstState>{
     constructor(props:{}){
         super(props);
         this.state={
             showSecondComponent:false,
            };
        }
     
  handleButtonClick = () =>{
    if(!this.state.showSecondComponent){
    this.setState({
      showSecondComponent:true,
    })
    }
    else{
      this.setState({
        showSecondComponent:false,
      })
    }
}
    
render(){
  return (
    <div>

        <button onClick={this.handleButtonClick}>Kliknij żeby wyświetlić drugi komponent</button>
        {this.state.showSecondComponent && <SecondComponent/>}
    </div>
  );
}
}
