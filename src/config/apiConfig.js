import { useState, useEffect } from 'react';

const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
const local = process.env.NEXT_PUBLIC_ENDPOINT_LOCAL;
const dev = process.env.NEXT_PUBLIC_ENDPOINT_DEV;
const prod = process.env.NEXT_PUBLIC_ENDPOINT_PROD;

const apiConfig = () => {
    const [endpoint, setEndpoint] = useState('');

    useEffect(() => {
        if (env === 'local') setEndpoint(local)
        else if (env === 'dev') setEndpoint(dev)
        else setEndpoint(prod)
    }, [env])

    return { endpoint }
}

export default apiConfig;