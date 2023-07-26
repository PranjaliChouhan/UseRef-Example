import React, { useRef, useState } from 'react';

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [characterCount, setCharacterCount] = useState(0);

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    setCharacterCount(inputValue.length);
  };

  return (
    <div className='count'>
      <input ref={inputRef} type="text" onChange={handleInputChange} />
      <p>Number of characters: {characterCount}</p>
    </div>
  );
};

export default CharacterCounter;
