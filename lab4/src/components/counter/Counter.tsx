import React, { useState } from 'react';
import './Counter.css';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleButtonClick = (amount: number) => {
    setCounter(counter + amount);
  };

  return (
    <div className="counter">
      <p>{counter}</p>
      <button onClick={() => handleButtonClick(2)}>+2</button>
      <button onClick={() => handleButtonClick(1)}>+1</button>
      <button onClick={() => handleButtonClick(-1)}>-1</button>
      <button onClick={() => handleButtonClick(-2)}>-2</button>
    </div>
  );
};

export default Counter;