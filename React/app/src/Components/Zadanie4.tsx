import { useState } from 'react';

export const Zadanie4 = () => {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Zadanie 4</h1>

            <div>
                <p>{counter}</p>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
            </div>

        </>
    );
}