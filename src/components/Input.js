import React, { useEffect, useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { languageConfig } from '../constants/languageConfig';
import Image from 'next/image';
import refresh from '../assets/icons/refresh.png';

const Input = ({
  input,
  setInput,
  inputLanguage,
  switched,
  reset
}) => {
  const [count, setCount] = useState(0);
  const inputConfig = languageConfig[inputLanguage];
  const characterMax = 240;

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
          maxLength={characterMax}
          className={`${switched && 'right'}`}
        />
        <Image
          src={refresh}
          alt=""
          className={`reset ${input && 'show'}`}
          onClick={reset}
        />
      <div className='character-count'>{count}/{characterMax}</div>
        <label>{!switched ? inputLanguage : `دری ${inputLanguage} `}</label>
      </span>
    </div>
  );
}

export default Input;