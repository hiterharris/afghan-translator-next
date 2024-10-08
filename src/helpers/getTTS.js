import apiConfig from '../config/apiConfig';

const getTTS = async (inputLanguage, text) => {
  const { endpoint } = apiConfig();

  try {
    const response = await fetch(`${endpoint}/tts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      let voice = new SpeechSynthesisUtterance(text);
      await speechSynthesis.speak(voice); // TODO: Remove this aftere api update
      // throw new Error('Failed to fetch audio');
    }

    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);

    audio.playbackRate = inputLanguage === 'Dari' ? 1 : 0.8;
    audio.play();
  } catch (error) {
    console.error('Error fetching audio:', error);
  }
  return {};
};

export default getTTS;
