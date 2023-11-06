import { useState } from 'react';

export const Zadanie1 = () => {

    const [text, setText] = useState('Jakiś tekst tutaj');

    const Click = () => {
        setText('Jan Kowalksi');
    }

    return (
        <>
            <h1>Zadanie 1</h1>
            <p>{text}</p>
            <button onClick={() => Click()}>Zmien na imie i nazwisko</button>
        </>
    );
}