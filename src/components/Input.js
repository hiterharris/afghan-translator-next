import React, { useEffect, useState } from 'react';
import { TranslateButton } from './index';
import { languageConfig } from '../constants/languageConfig';

const Input = ({
  input,
  setInput,
  translate,
  setLoading,
  inputLanguage,
  switched,
  reset
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

  const handleTranslate = () => {
    translate(input, inputLanguage);
  }

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
      <TranslateButton
        text={inputConfig.translate}
        input={input}
        handleTranslate={handleTranslate}
        resetText={inputConfig.reset}
        reset={reset}
      />
    </div>
  );
}

export default Input;