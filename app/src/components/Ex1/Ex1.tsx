import React from "react"
import { useState } from "react"

const Ex1 = () =>{
    const [paragraph, setparagraph] = useState("Paragraf")

    const setParagraphHandler = () => {
        setparagraph("Dominik Nowak");
    }

    return <div>
        <p>
            {paragraph}
        </p>
        <button onClick={setParagraphHandler}>Press me !</button>
    </div>
}

export default Ex1