import React from "react";


interface SecondComponentProps{
    OnHide: ()=>void;
    alertText:(text:any) => void;
}


export const SecondComponentF: React.FC<SecondComponentProps> = ({OnHide, alertText}): React.ReactElement => {

    const handleClick = () => {
        OnHide();
    }

    const handleButtonYes = () => {
        alertText("Ciesze się idziemy dalej");
    }

    const handleButtonNo = () => {
        alertText("Nie ciesz się idziemy dalej!");
    }
        

    return (
        <div>
            <button onClick={handleClick}>Ukryj</button>
            <h1>Drugi komponent metoda funkcyjna</h1>
            <p>Czy chcesz dalej uczyć się React</p>
            <button onClick={handleButtonYes}>tak</button>
            <button onClick={handleButtonNo}>nie</button>
            
        </div>
    );
}

