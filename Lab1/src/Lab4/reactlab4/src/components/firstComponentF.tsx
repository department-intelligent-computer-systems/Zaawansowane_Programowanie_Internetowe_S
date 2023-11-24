import React from "react";

interface FirstComponentProps{
    onButtonClick:()=>void;
    alertText:string;
}



export const FirstComponentF:React.FC<FirstComponentProps> = ({onButtonClick, alertText}) => {
    return (
        <div>
            <h1>Pierwszy komponent metoda funkcyjna</h1>
            <button onClick={onButtonClick}>Pokaż drugi komponent</button>
            <p>{alertText}</p>
        </div>
    );
};