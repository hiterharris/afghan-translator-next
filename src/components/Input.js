import React, { useEffect, useState } from 'react';
import { languageConfig } from '../constants/languageConfig';

const Input = ({
  input,
  setInput,
  inputLanguage,
  switched,
}) => {
  const [count, setCount] = useState(0);
  const inputConfig = languageConfig[inputLanguage];

  const handleChange = (e) => {
    setInput(e.target.value);
    setCount(e.target.value.length);
  }

  useEffect(() => {
    input?.length === 0 && setCount(0);
  }, [input]);

  return (
    <div className='Input'>
      <textarea
        className={`input-textarea ${switched && 'right'}`}
        placeholder={inputConfig.placeholder}
        value={input}
        maxLength={120}
        onChange={handleChange}
      />
      <div className='character-count'>{count}/120</div>
    </div>
  );
}

export default Input;