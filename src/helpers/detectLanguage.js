import DetectLanguage from 'detectlanguage';

const detectLanguage = (input, setLanguageDetected) => {
    const initDetectLanguage = new DetectLanguage(process.env.NEXT_PUBLIC_LANGUAGE_DETECT_API_KEY);
    
    try {
        initDetectLanguage.detect(input).then(function(response) {
            const result = response[0]?.language;
            setLanguageDetected(result);
        });
    } catch (error) {
        console.error(error);
    }
}

export default detectLanguage;

