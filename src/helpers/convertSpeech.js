export const convertSpeech = (base64String) => {
    const binaryString = atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'audio/wav' });

    const url = URL.createObjectURL(blob);

    const audio = new Audio(url);
    audio.play();

    audio.onended = () => {
      URL.revokeObjectURL(url);
    };
  }
