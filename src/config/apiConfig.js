const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
const local = process.env.NEXT_PUBLIC_ENDPOINT_LOCAL;
const dev = process.env.NEXT_PUBLIC_ENDPOINT_DEV;
const dev2 = process.env.NEXT_PUBLIC_ENDPOINT_DEV_2;
const prod = process.env.NEXT_PUBLIC_ENDPOINT_PROD;

const apiConfig = () => {
    // const endpoint = 'https://afghan-translator-api-1.onrender.com/api';
    let endpoint = prod;
    if (env === 'local') endpoint = local;
    else if (env === 'dev') endpoint = dev;
    else if (env === 'dev2') endpoint = dev2; // 2.0
    return { endpoint };
}

export default apiConfig;
