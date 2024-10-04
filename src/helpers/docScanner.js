import { Capacitor } from '@capacitor/core';
import { DocumentScanner } from 'capacitor-document-scanner';

const scanDocument = async () => {
  try {
    const { scannedImages } = await DocumentScanner.scanDocument();

    if (scannedImages.length > 0) {
      const scannedImage = document.getElementById('scannedImage');
      if (scannedImage) {
        scannedImage.src = Capacitor.convertFileSrc(scannedImages[0]);
      } else {
        console.error('Element with ID "scannedImage" not found.');
      }
    }
    return scannedImages;
  } catch (error) {
    console.error('Error scanning document:', error);
  }
};

export default scanDocument;