import React, { useState } from "react";

export const Zadanie1 = () => {
    const [firstName, setFirstName] = useState("");
    const click = () => {
    setFirstName("Jakub");
}

return (
    <>
        <p>{firstName}</p>
        <button onClick={click}>Kliknij!</button>
    </>
    );
}
 
export default Zadanie1;