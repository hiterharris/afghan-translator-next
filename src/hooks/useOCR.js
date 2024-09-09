import { useState } from 'react';
const Tesseract = require("tesseract.js");

const useOCR = (setLoading, inputLanguage) => {
    const [uploadStatus, setUploadStatus] = useState('');
    const [extractedText, setExtractedText] = useState('');

    const handleFileChange = async (event) => {
        const language = inputLanguage === 'Dari' ? 'fas' : 'eng';
        try {
            const file = event.target.files[0];
            if (!file) return;

            setLoading(true);
            setUploadStatus('Processing...');

            const { data: { text } } = await Tesseract.recognize(file, language, {
                logger: () => {},
            });

            setExtractedText(text);
            setUploadStatus('Text extraction completed successfully!');
        } catch (error) {
            console.error('Error extracting text:', error);
            setUploadStatus('An error occurred during text extraction.');
        } finally {
            setLoading(false);
        }
    };

    return { uploadStatus, extractedText, handleFileChange }
}

export default useOCR;
