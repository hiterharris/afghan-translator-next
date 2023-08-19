import React from 'react';

const TranslateButton = ({ text, input, handleTranslate, resetText, reset }) => {
    return (
        <>
            <button className={`translate-button`} onClick={handleTranslate}>
                {text}
            </button>
             <p className={`reset ${input && 'show'}`} onClick={reset}>{resetText}</p>
        </>
    );
}

export default TranslateButton;