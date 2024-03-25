import { useState, useEffect } from 'react';
import apiConfig from '@/config/apiConfig';

const useTranslate = () => {
    const { endpoint } = apiConfig();
    const [inputLanguage, setInputLanguage] = useState('English');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [input, setInput] = useState('');
    const [switched, setSwitched] = useState(false);

    useEffect(() => {
        setLoading(false);
        input?.length === 0 && setResponse('');
    }, [input])
    
    const translate = (input, inputLanguage) => {
        fetch(`${endpoint}/translate`, {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({
                language: inputLanguage || 'English',
                text: input
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setResponse(JSON?.parse(data))
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const reset = () => {
        setInput('');
    }

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
        reset
    }
}

export default useTranslate;