import React from 'react';
import speech from '../assets/icons/speech.png';
import Image from 'next/image';

const Output = ({ response, loading, inputLanguage }) => {
  const speak = async (value) => {
    let voice = new SpeechSynthesisUtterance(value);
    await speechSynthesis.speak(voice);
  }

  return (
    <div className='Output'>
      <p className='output-text-dari'>{response?.arabic}</p>
      <p className='output-text'>{!response && loading ? 'Translating...' : response?.latin}</p>
      {response && inputLanguage === 'Dari' &&
        <Image
          src={speech}
          alt='speaker icon'
          className='speech'
          onClick={() => speak(response)}
        />
      }
    </div>
  );
}

export default Output;