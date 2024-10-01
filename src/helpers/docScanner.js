import { Capacitor } from '@capacitor/core'
import { DocumentScanner } from 'capacitor-document-scanner'

const scanDocument = async () => {
  // start the document scanner
  const { scannedImages } = await DocumentScanner.scanDocument()

  // get back an array with scanned image file paths
  if (scannedImages.length > 0) {
    // set the img src, so we can view the first scanned image
    const scannedImage = document.getElementById('scannedImage');
    scannedImage.src = Capacitor.convertFileSrc(scannedImages[0])
  }
  return scannedImages;
}

export default scanDocument;
