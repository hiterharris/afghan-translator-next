import { Capacitor } from '@capacitor/core';
const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
const local = process.env.NEXT_PUBLIC_ENDPOINT_LOCAL;
const dev = process.env.NEXT_PUBLIC_ENDPOINT_DEV;
const prod = process.env.NEXT_PUBLIC_ENDPOINT_PROD;

const isCapacitor = Capacitor.isNativePlatform();
console.log('isCapacitor', isCapacitor);

const apiConfig = () => {
    let endpoint = '';
    if (env === 'local') endpoint = local;
    else if (env === 'dev') endpoint = dev;
    else endpoint = prod;
    return { endpoint };
}

export default apiConfig;