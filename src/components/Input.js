import React, { useEffect, useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
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
      <span className={`p-float-label input-textarea ${switched && 'right'}`}>
        <InputTextarea
          value={input}
          onChange={handleChange}
          placeholder={inputConfig.placeholder}
          maxLength={120}
          className={`${switched && 'right'}`}
        />
        <label>{!switched ? inputLanguage : `دری ${inputLanguage} ` }</label>
      </span>
      <div className='character-count'>{count}/120</div>
    </div>
  );
}

export default Input;