import React from 'react';
import speech from '../assets/icons/speech.png';
import Image from 'next/image';

const Output = ({ response, inputLanguage }) => {
  const speak = async (value) => {
    let voice = new SpeechSynthesisUtterance(value);
    await speechSynthesis.speak(voice);
  }

  return (
    <div className='Output'>
      {response?.arabic && <p className='output-text-dari'>{response?.arabic}</p>}
      <p className='output-text'>{response?.latin}</p>
      {response && inputLanguage === 'Dari' &&
        <Image
          src={speech}
          alt='speaker icon'
          className='speech'
          onClick={() => speak(response?.latin)}
        />
      }
    </div>
  );
}

export default Output;