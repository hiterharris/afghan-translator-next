const detectLanguage = async (input) => {
    const url = 'https://community-language-detection.p.rapidapi.com/detect';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'x-rapidapi-host': 'community-language-detection.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "q": [input] })
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        const detections = json?.data?.detections[0];
        const result = detections?.find(item => item.language);
        const language = result?.language;
        setLanguageDetected(language);
    } catch (error) {
        console.error(error);
    }
};

export default detectLanguage;
