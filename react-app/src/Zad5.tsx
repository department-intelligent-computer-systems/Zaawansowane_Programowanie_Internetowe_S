import React, {useState } from 'react'

const Zad5: React.FC = () => {
    const [count,setCount]=useState(0);
    const handleButtonClick = (value: number) => {
        setCount(count+value);
    };

    return(
        <div>
            <h1>Zad 5</h1>
            <p>Wartość: {count}</p>
            <button onClick={()=>handleButtonClick(1)}>+1</button>
            <button onClick={()=>handleButtonClick(-1)}>-1</button>
            <button onClick={()=>handleButtonClick(2)}>+2</button>
            <button onClick={()=>handleButtonClick(-2)}>-2</button>
        </div>
    );
};
export default Zad5