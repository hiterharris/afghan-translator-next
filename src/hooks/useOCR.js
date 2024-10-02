import { useState } from 'react';
const Tesseract = require("tesseract.js");

const useOCR = () => {
    const [isUploading, setIsUploading] = useState(false);

    const upload = async (e, setLoading, setInput, inputLanguage) => {
        const language = inputLanguage === 'Dari' ? 'fas' : 'eng';
        try {
          const file = typeof e === 'string' ? e : e.target.files[0];
          console.log('file: ', file);
          alert('file: ' + file);
            if (!file) return;

            setLoading(true);
            setIsUploading(true);

            const { data: { text } } = await Tesseract.recognize(file, language, {
                logger: () => {},
            });

            setInput(text);
            setIsUploading(false);
        } catch (error) {
            console.error('Error extracting text:', error);
            setIsUploading('An error occurred during text extraction.');
        } finally {
            setLoading(false);
        }
    };

    return { isUploading, upload }
}

export default useOCR;
