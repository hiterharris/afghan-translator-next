import { useState, useEffect } from 'react';

const useTranslate = () => {
    const [inputLanguage, setInputLanguage] = useState('English');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [input, setInput] = useState('');
    const [switched, setSwitched] = useState(false)

    useEffect(() => {
        setLoading(false);
        input?.length === 0 && setResponse('');
    }, [input])

    const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
    const endpoint = env === 'local' ? 'http://localhost:3001/api/translate' : 'https://afghan-translator-api.onrender.com/api/translate';

    const translate = (input, inputLanguage) => {
        fetch(endpoint, {
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
                setResponse(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
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
    }
}

export default useTranslate;