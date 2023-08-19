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
    const local = process.env.NEXT_PUBLIC_LOCAL;
    const prod = process.env.NEXT_PUBLIC_PROD;
    const endpoint = env === 'local' ? local : prod;

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