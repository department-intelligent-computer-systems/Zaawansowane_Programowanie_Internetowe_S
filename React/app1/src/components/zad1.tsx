import React, {useState} from 'react';

const FirstComponent = () => {
    const [name, setName] = useState('');

    const showName = () => setName("Adrian Adamczyk");

    return (
        <div>
            <p>{name}</p>
            <button onClick={showName}>Pokaż nazwe</button>
        </div>
    )
}

export default FirstComponent