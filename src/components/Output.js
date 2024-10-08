import React, { useState } from 'react';
import { writeToClipboard, getTTS } from '../helpers';
import SyncLoader from "react-spinners/SyncLoader";
import { OutputButtons } from './OutputButtons';

const override = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const Output = ({ response, inputLanguage, loading }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false)

  const handleSpeak = async () => {
    setIsAudioLoading(true);
    let text = '';
    if (inputLanguage === 'Dari') {
      text = response?.english;
    } else if (inputLanguage === 'English') {
      text = response?.dari;
    }
    const tts = getTTS(inputLanguage, text);
    await tts && setIsAudioLoading(false);
    return tts;
  }

  const handleCopy = () => {
    writeToClipboard(clipboard());
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const clipboard = () => {
    let text = '';
    if (inputLanguage === 'Dari') {
      text = response?.english;
    } else if (inputLanguage === 'English') {
      text = response?.dari;
    }
    return text;
  }

  return (
    <div className='Output'>
      <SyncLoader
        color="#504ED8"
        loading={loading}
        cssOverride={override}
        aria-label="Loading Spinner"
      />
      <div>
        {inputLanguage === 'Dari' ? (
          <p className='output-text'>{response?.english}</p>
        ) : (
          <>
            <p className='output-text-dari'>{response?.dari}</p>
            <p className='output-text'>{response?.denglish}</p>
          </>
        )}
      </div>
      {response && 
      <div className='output-buttons'>
        <OutputButtons
          isAudioLoading={isAudioLoading}
          handleSpeak={handleSpeak}
          isCopied={isCopied}
          handleCopy={handleCopy}
        />
      </div>
      }
    </div>
  );
}

export default Output;
