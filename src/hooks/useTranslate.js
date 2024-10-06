import { useState, useEffect } from 'react';
import apiConfig from '@/config/apiConfig';
import { Dialog } from '@capacitor/dialog';
import { languageConfig } from '@/constants/languageConfig';
import DetectLanguage from 'detectlanguage';
import { dari } from '@/assets/icons';

const useTranslate = () => {
    const { endpoint } = apiConfig();
    const [inputLanguage, setInputLanguage] = useState('Dari');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [input, setInput] = useState('');
    const [switched, setSwitched] = useState(true);
    const inputConfig = languageConfig[inputLanguage];
    const detectlanguage = new DetectLanguage(process.env.NEXT_PUBLIC_LANGUAGE_DETECT_API_KEY);
    const translationStyle = "casual"; // casual, formal, idiomatic, literal
    
    useEffect(() => {
        setLoading(false)
        input?.length === 0  && setResponse('');
    }, [input]);

    const showAlert = () => {
        Dialog.alert({
            title: inputConfig.alertTitle,
            message:inputConfig.alertMessage,
        });
    };

    const validateInput = async () => {
        if (input.trim() === '') {
            await showAlert();
            return false;
        }

        const languageDetected = await detectlanguage.detect(input).then(response => response[0]?.language);

        const isEnglish = inputLanguage === 'English' && languageDetected === 'en';
        const isDari = inputLanguage === 'Dari' && languageDetected !== 'en';

        if (isEnglish || isDari) {
            return true;
        } else {
            await showAlert();
            return false
        }
    };
    
    const translate = async () => {
        const isValid = await validateInput(input);
        if (isValid) {
            setLoading(true);
            fetch(`${endpoint}/translate`, {
                mode: 'cors',
                method: 'POST',
                body: JSON.stringify({
                    language: inputLanguage,
                    text: input,
                    translationStyle: translationStyle
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
        inputConfig,
    };
};

export default useTranslate;
