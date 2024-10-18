import React from 'react';
import Image from 'next/image';
import ClipLoader from "react-spinners/ClipLoader";
import { speech } from '../assets/icons';

const AudioButton = ({ isAudioLoading, handleSpeak }) => {
  return (
    <div onClick={handleSpeak} disabled={isAudioLoading} className='AudioButton'>
      {isAudioLoading ? (
        <ClipLoader
          color="#504ed8"
          className='speaker'
          size={20}
        />
      ) : (
        <Image
          src={speech}
          alt='speaker icon'
          className='speaker'
      />
      )}
    </div>
  );
};

export default AudioButton;
