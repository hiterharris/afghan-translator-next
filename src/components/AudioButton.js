import React from 'react';
import Image from 'next/image';
import ClipLoader from "react-spinners/ClipLoader";
import { speech } from '../assets/icons';

const Speaker = ({ handleSpeak }) => {
  return (
    <Image
      src={speech}
      alt='speaker icon'
      className='speaker'
      onClick={() => handleSpeak()}
    />
  );
}

const SpeakerLoader = () => {
  return (
    <ClipLoader
      color="#504ed8"
      className='speaker'
      size={20}
    />
  );
}

const AudioButton = ({ isAudioLoading, handleSpeak }) => {
  const Icon = () => {
    if (isAudioLoading) return <SpeakerLoader />
    else return <Speaker handleSpeak={handleSpeak} />
  }

  return (
    <Icon />
  )
}

export default AudioButton;
