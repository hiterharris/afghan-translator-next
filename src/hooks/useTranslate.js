import { useState, useEffect } from 'react';
import apiConfig from '@/config/apiConfig';
import { Dialog } from '@capacitor/dialog';
import { languageConfig } from '@/constants/languageConfig';
import { detectLanguage } from '@/helpers';

const useTranslate = () => {
    const { endpoint } = apiConfig();
    const [inputLanguage, setInputLanguage] = useState('English');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [input, setInput] = useState('');
    const [switched, setSwitched] = useState(true);
    const [languageDetected, setLanguageDetected] = useState();
    const inputConfig = languageConfig[inputLanguage];
    
    useEffect(() => {
        setLoading(false)
        input?.length >= 3 && detectLanguage(input, setLanguageDetected);
        input?.length === 0  && setResponse('');
    }, [input]);

    const showAlert = () => {
        Dialog.alert({
            title: inputConfig.alertTitle,
            message:inputConfig.alertMessage,
        });
    };

    const validateInput = async (text) => {
        if (text.trim() === '') {
            await showAlert();
            return false;
        }
        
        const isEnglish = inputLanguage === 'English' && languageDetected === 'en';
        const isDari = inputLanguage === 'Dari' && languageDetected !== 'en';

        if (isEnglish || isDari) {
            return true;
        } else {
            await showAlert();
            return false
        }
    };
    
    const translate = async (input) => {
        const isValid = await validateInput(input);
        if (isValid) {
            setLoading(true);
            fetch(`${endpoint}/translate`, {
                mode: 'cors',
                method: 'POST',
                body: JSON.stringify({
                    language: inputLanguage,
                    text: input
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((data) => {
                setResponse(JSON?.parse(data));
            })
            .catch((err) => {
                console.error(err.message);
                setResponse(inputConfig?.errorResponse);
            })
            .finally(() => {
                setLoading(false);
            });
        }
    };

    const reset = () => {
        setInput('');
        setResponse('');
    };

    return {
        inputLanguage,
        setInputLanguage,
        input,
        setInput,
        translate,
        loading,
        setLoading, 
        response, 
        setResponse, 
        switched, 
        setSwitched,
        reset,
        inputConfig
    };
};

export default useTranslate;
