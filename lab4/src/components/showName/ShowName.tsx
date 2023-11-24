import React, { useState } from 'react'
import './ShowName.css'

const ShowName: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');

  const handleClick = () => {
    setDisplayText('Sebastian Wiora');
  };

  return (
    <div className='show-name'>
      <p className='show-name__text'>{displayText}</p>
      <button className='show-name__button' onClick={handleClick}>Show Name</button>
    </div>
  )
}

export default ShowName