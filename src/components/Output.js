import React, { useState, useEffect } from 'react';
import { copy, check } from '../assets/icons';
import Image from 'next/image';
import { writeToClipboard, getTTS } from '@/helpers';
import SyncLoader from "react-spinners/SyncLoader";
import { AudioButton } from '.';

const override = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const Output = ({ response, inputLanguage, loading }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);

  const handleSpeak = async () => {
    setIsAudioLoading(true);
    let text = '';
    if (inputLanguage === 'Dari') {
      text = response?.latin;
    } else if (inputLanguage === 'English') {
      text = response?.arabic;
    }
    const tts = getTTS(text);
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
      text = response?.latin;
    } else if (inputLanguage === 'English') {
      text = response?.arabic;
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
      {inputLanguage === 'English' && <p className='output-text-dari'>{response?.arabic}</p>}
      <p className='output-text'>{response?.latin}</p>
      {response && 
      <>
        <AudioButton
          isAudioLoading={isAudioLoading}
          handleSpeak={handleSpeak}
        />
         <Image
          src={isCopied ? check : copy}
          alt='copy icon'
          className='speech'
          onClick={handleCopy}
        />
      </>
      }
    </div>
  );
}

export default Output;
