import { AudioButton } from '.';
import Image from 'next/image';
import copy from '../assets/icons/copy.png';
import check from '../assets/icons/check.png';

const OutputButtons = ({ isAudioLoading, handleSpeak, isCopied, handleCopy }) => {  
    return (
        <div className='output-buttons'>
            <AudioButton
                isAudioLoading={isAudioLoading}
                handleSpeak={handleSpeak}
            />
            <Image
                src={isCopied ? check : copy}
                alt='copy icon'
                className='copy'
                onClick={handleCopy}
            />
        </div>
    )
}

export default OutputButtons;
