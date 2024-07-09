import { Capacitor } from '@capacitor/core';

const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
const local = process.env.NEXT_PUBLIC_ENDPOINT_LOCAL;
const dev = process.env.NEXT_PUBLIC_ENDPOINT_DEV;
const prod = process.env.NEXT_PUBLIC_ENDPOINT_PROD;
const isCapacitorNative = Capacitor.isNativePlatform();

const apiConfig = () => {
    console.log('PLATFORM =', isCapacitorNative ? 'MOBILE' : 'WEB');
    
    let endpoint = prod;
    if (env === 'dev') endpoint = dev;
    else if (env === 'local') endpoint = local;
    return { endpoint };
}

export default apiConfig;
