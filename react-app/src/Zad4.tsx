import React, {useState} from 'react';

const Zad4: React.FC =() => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count+1);
    };
    const handleDecrement = () => {
        setCount(count-1);
    };

    return(
        <div>
            <h1>Zad 4</h1>
            <p>Wartość: {count}</p>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
        </div>
    );
};
export default Zad4;