import { useState, useEffect, useRef } from 'react';
import apiConfig from '@/config/apiConfig';
import { Dialog } from '@capacitor/dialog';
import { languageConfig } from '@/constants/languageConfig';
import DetectLanguage from 'detectlanguage';

const useTranslate = () => {
    const { endpoint } = apiConfig();
    const [inputLanguage, setInputLanguage] = useState('Dari');
    const [loading, setLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [response, setResponse] = useState('');
    const [input, setInput] = useState('');
    const [switched, setSwitched] = useState(true);
    const inputConfig = languageConfig[inputLanguage];
    const detectlanguage = new DetectLanguage(process.env.NEXT_PUBLIC_LANGUAGE_DETECT_API_KEY);
    const translationStyle = "casual"; // casual, formal, idiomatic, literal
    const abortControllerRef = useRef(null);
    
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

        const isEnglish = inputLanguage === 'English';
        const isDari = inputLanguage === 'Dari';
        
        if (isEnglish || isDari) {
            return true;
        } else {
            setTimeout(() => showAlert(), 3000)
            return false;
        }
    };
    
    const translate = async () => {
        const isValid = await validateInput(input);
        if (isValid) {
            setResponse('');
            !loading && setLoading(true);
            abortControllerRef.current = new AbortController();
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
                signal: abortControllerRef.current.signal,
            })
            .then((response) => response.json())
            .then((data) => {
                setResponse(JSON?.parse(data));
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.error(err.message);
                    setResponse(inputConfig?.errorResponse);
                }
            })
            .finally(() => {
                setLoading(false);
            });
        }
    };

    const reset = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        setInput('');
        setResponse('');
    };

    useEffect(() => {
        if (input.length >= 3) {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
            setIsTyping(true);
            const timeout = setTimeout(() => setIsTyping(false), 3000);
            setTypingTimeout(timeout);
            translate();
        }
    }, [input]);

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
