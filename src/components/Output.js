import React, { useState } from 'react';
import speech from '../assets/icons/speech.png';
import copy from '../assets/icons/copy.png';
import check from '../assets/icons/check.png';
import Image from 'next/image';
import { writeToClipboard } from '@/helpers';
import SyncLoader from "react-spinners/SyncLoader";

const override = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const Output = ({ response, inputLanguage, loading }) => {
  const [isCopied, setIsCopied] = useState(false);

  const speak = async (value) => {
    let voice = new SpeechSynthesisUtterance(value);
    await speechSynthesis.speak(voice);
  }

  const handleCopy = () => {
    writeToClipboard(clipboard());
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  const clipboard = () => {
    let text = '';
    response?.arabic && (text += `${response?.arabic} `)
    response?.latin && (text += `${response?.latin}`);
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
      {response && inputLanguage === 'Dari' &&
        <Image
          src={speech}
          alt='speaker icon'
          className='speech'
          onClick={() => speak(response?.latin)}
        />
      }
      {response &&
        <Image
          src={isCopied ? check : copy}
          alt='copy icon'
          className='speech'
          onClick={handleCopy}
        />
      }
    </div>
  );
}

export default Output;