import apiConfig from '@/config/apiConfig';

const getTTS = async(text) => {
  const { endpoint } = apiConfig();

    try {
        const response = await fetch(`${endpoint}/tts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch audio');
        }
    
        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);
    
        const audio = new Audio(audioUrl);
        audio.play();
      } catch (error) {
        console.error('Error fetching audio:', error);
      }


    return {};
};

export default getTTS;
