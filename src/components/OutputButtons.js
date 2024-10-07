import { AudioButton } from '.';
import Image from 'next/image';
import copy from '../assets/icons/copy.png';
import check from '../assets/icons/check.png';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; 

const OutputButtons = ({ isAudioLoading, handleSpeak, isCopied, handleCopy, handleStarClick, isStarred }) => {  
    return (
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
            <div onClick={handleStarClick} style={{ cursor: 'pointer' }}>
                {isStarred ? <AiFillStar size={30} color="gold" float="right" /> : <AiOutlineStar size={30} />}
            </div>
        </div>
    )
}

export default OutputButtons;
