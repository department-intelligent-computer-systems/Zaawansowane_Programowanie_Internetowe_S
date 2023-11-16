import React from "react";
import { useState } from "react";

const Ex4 = () => {
    const [number, setNumber] = useState(0)

    const addNumber = () => {
        setNumber(number + 1)
    }
    const subNumber = () => {
        setNumber(number - 1)
    }
    return <div>
            {number}
            <button onClick={addNumber}>+1</button>
            <button onClick={subNumber}>-1</button>

    </div>
}

export default Ex4