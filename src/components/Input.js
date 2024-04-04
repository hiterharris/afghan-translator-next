import React from 'react';
import { TranslateButton } from './index';
import { languageConfig } from '../constants/languageConfig';

const Input = ({ input, setInput, translate, setLoading, inputLanguage, switched, reset }) => {
  const inputConfig = languageConfig['default'];

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleTranslate = () => {
    translate(input, inputLanguage);
    setLoading(true);
  }

  return (
    <div className='Input'>
      <textarea
        className={`input-textarea ${switched && 'right'}`}
        placeholder={inputConfig.placeholder}
        value={input}
        onChange={handleChange}
      />
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