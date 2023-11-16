import React from "react";
import { useState } from "react";

const Ex9 = () => {
    const [isVisible, setisVisible] = useState(false)
    const [response, setResponse] = useState("")

    const setVisibleHandler = () => {
        setisVisible(true)
    }
    const setInvisibleHandler = () => {
        setisVisible(false)
    }

    const setNegativeResponseHandler = () => {
        setResponse("Lmao get fucked")
    }

    const setPositiveResponseHandler = () => {
        setResponse("Cieszę się! Idźmy dalej!")
    }
    return <div>
        <div>
            <p>Pierwszy komponent</p>
            <p>{response}</p>
            <button onClick={setVisibleHandler}>Press me !</button>
        </div>
        {isVisible ?
        <div>
            <p>Czy chcesz dalej uczyć się frameworka React ?</p>
            <button onClick={setInvisibleHandler}>Aaa im scared :C</button>
            <button onClick={setNegativeResponseHandler}>No</button>
            <button onClick={setPositiveResponseHandler}>Yes</button>
        </div> : null
        }
        
    </div>
}

export default Ex9