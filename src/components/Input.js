import React, { useEffect, useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { languageConfig } from '../constants/languageConfig';
import Image from 'next/image';
import refresh from '../assets/icons/refresh.png';
import SyncLoader from "react-spinners/SyncLoader";

const override = {
  display: 'block',
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1
};

const Input = ({
  input,
  setInput,
  inputLanguage,
  switched,
  reset,
  handleKeyDown,
  isUploading
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
      <SyncLoader
        color="#504ED8"
        loading={isUploading}
        cssOverride={override}
        aria-label="Loading Spinner"
      />
      <span className={`p-float-label input-textarea ${switched && 'right'}`}>
        <InputTextarea
          value={input}
          onChange={e => handleChange(e)}
          onKeyDown={handleKeyDown}
          placeholder={inputConfig.placeholder}
          maxLength={1200}
          className={`${switched && 'right'}`}
        />
        <div className='input-info'>
          <div className='character-count'>{count}/1200</div>
          <Image
            src={refresh}
            alt=""
            className={`reset ${input && 'show'}`}
            onClick={reset}
          />
        </div>
        <label>{!switched ? inputLanguage : `دری ${inputLanguage} `}</label>
      </span>
    </div>
  );
}

export default Input;
