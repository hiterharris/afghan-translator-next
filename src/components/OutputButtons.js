import React, { useState } from 'react';
import { AudioButton } from '.';
import Image from 'next/image';
import copy from '../assets/icons/copy.png';
import check from '../assets/icons/check.png';
import { bookmarkFilled, bookmarkEmpty } from '../assets/icons';

const OutputButtons = ({ isAudioLoading, handleSpeak, isCopied, handleCopy }) => {
    const [saved, setSaved] = useState(false);
    const handleSave = () => {
        setSaved(!saved);
        console.log('Save button clicked');
    }
    return (
        <div className='buttons-container'>
            <div className='output-buttons'>
                <Image
                    src={isCopied ? check : copy}
                    alt='copy icon'
                    className='copy'
                    onClick={handleCopy}
                />
                <AudioButton
                    isAudioLoading={isAudioLoading}
                    handleSpeak={handleSpeak}
                />
                <Image
                    src={saved ? bookmarkFilled : bookmarkEmpty}
                    alt='saved translations'
                    className='bookmark'
                    onClick={handleSave}
                />
            </div>
        </div>
    )
}

export default OutputButtons;
