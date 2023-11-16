import React,{useState} from "react";
import './App.css'

const FirstComponent = ({onClick})=>(
    <div>
        <h2>Pierwszy Komponent</h2>
        <button onClick={onClick}>Pokaz Drugi Komponent</button>
    </div>
);

const SecondComponent = () =>{
    <div>
        <h2>Drugi Komponent</h2>
        <p>To jest drugi komponent! </p>
    </div>
};

function Zad9(){
    const[showSecondComponent,setShowSecondComponent]=useState(false);

    const handleButtonClick = () => {
        setShowSecondComponent(true);
    };

    return(
        <div className="App">
            <header className="App-header">
                {showSecondComponent?(
                    <SecondComponent></SecondComponent>    
                ) : (
                    <FirstComponent onClick={handleButtonClick} />
                )
            }
            </header>
        </div>
    );
}
export default Zad9