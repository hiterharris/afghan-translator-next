import { useState } from 'react';
import apiConfig from '@/config/apiConfig';

const useConvertImage = () => {
    const { endpoint } = apiConfig();
    const [response, setResponse] = useState('');

    const translate = (text) => {
        fetch(`${endpoint}/image/translate`, {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({
                text
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
        translate,
        response
    }
}

export default useConvertImage;