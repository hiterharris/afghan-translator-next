import { useState } from 'react';
import Tesseract from 'tesseract.js';

const useOCR = () => {
    const [isUploading, setIsUploading] = useState(false);
    
    const upload = async (dataUrl, setLoading, setInput, inputLanguage) => {
        console.log('dataUrl: ', dataUrl);
        const language = inputLanguage === 'Dari' ? 'fas' : 'eng';
        try {
            setLoading(true);
            setIsUploading(true);
            Tesseract.setLogging(true);
            const { data: { text } } = await Tesseract.recognize(dataUrl, language, {
                logger: () => {},
            });
            setInput(text);
        } catch (error) {
            console.error('Error extracting text:', error);
        } finally {
            setIsUploading(false);
            setLoading(false);
        }
    };

    return { isUploading, upload };
};

export default useOCR;
