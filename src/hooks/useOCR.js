import { useState } from 'react';
import axios from 'axios';
import apiConfig from '@/config/apiConfig';

const useOCR = () => {
    const { endpoint } = apiConfig();
    const [isUploading, setIsUploading] = useState(false);

    const upload = async (imageData, setInput) => {
        try {
            setIsUploading(true);

            const response = await axios.post(`${endpoint}/upload`, {
                image_url: imageData,
            });
            
            const extractedText = response.data;
            setInput(extractedText);
        } catch (error) {
            console.error('Error extracting text:', error);
        } finally {
            setIsUploading(false);
        }
    };

    return { isUploading, upload };
};

export default useOCR;
