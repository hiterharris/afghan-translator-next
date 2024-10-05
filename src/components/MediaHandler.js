import React, { useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import Image from 'next/image';
import cameraIcon from "@/assets/icons/camera.png";
import photoLibraryIcon from "@/assets/icons/photos.png";
import scanIcon from "@/assets/icons/scan.png";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import uploadIcon from "@/assets/icons/upload.png";
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { languageConfig } from '@/constants/languageConfig';

const MediaHandler = ({ handleFileChange, inputLanguage }) => {
  const inputConfig = languageConfig[inputLanguage];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      defineCustomElements(window);
    }
  }, []);

  // File Picker - *
  const selectFile = async () => {
    try {
      const result = await FilePicker.pickFiles({
        types: [],
        multiple: false,
        readData: true,
      });
      if (result.files.length > 0) {
        const file = result.files[0];
        console.log('file: ', file);
        const mimeType = file.mimeType || 'image/png';
        const dataUrl = `data:${mimeType};base64,${file.data}`;
        handleFileChange(dataUrl);
      }
    } catch (error) {
      if (error.message !== 'User cancelled photos app') {
        console.error('Error selecting file:', error);
      }
    }
  };

  // Photo Library - png
  const selectPhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 100,
        source: CameraSource.Photos,
        resultType: CameraResultType.DataUrl,
      });
      console.log('photo: ', photo);
      const dataUrl = photo.dataUrl;
      handleFileChange(dataUrl);
    } catch (error) {
      if (error.message !== 'User cancelled photos app') {
        console.error('Error selecting photo:', error);
      }
    }
  };

  // Camera - png
  const openCamera = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        source: CameraSource.Camera,
        resultType: CameraResultType.DataUrl
      });
      console.log('camera: ', photo);
      const dataUrl = photo.dataUrl;
      handleFileChange(dataUrl);
    } catch (error) {
      if (error.message !== 'User cancelled photos app') {
        console.error('Error taking photo:', error);
      }
    }
  };

  // Scan Document - jpeg
  const scanDocument = async () => {
    if (Capacitor.isNativePlatform()) {
      try {
        const { DocumentScanner } = await import('capacitor-document-scanner');
        const scan = await DocumentScanner.scanDocument();
        console.log('scan: ', scan);
        handleFileChange(scan.scannedImages[0]);
      } catch (error) {
        console.error('Error scanning document:', error);
      }
    } else {
      console.error('Document scanning is not supported on the web.');
    }
  };

  return (
    <div className="media-handler">
      <div style={{ cursor: 'pointer' }} onClick={selectFile}>
        <Image src={uploadIcon} alt="File" className="icon file" width={40} height={40} />
        <p className='icon-label'>{inputConfig.icons.file}</p>
      </div>
      <div style={{ cursor: 'pointer' }} onClick={selectPhoto}>
        <Image src={photoLibraryIcon} alt="Photo Library" className="icon photo-library" width={40} height={40} />
        <p className='icon-label'>{inputConfig.icons.photo}</p>
      </div>

      <div style={{ cursor: 'pointer' }} onClick={openCamera}>
        <Image src={cameraIcon} alt="Camera" className="icon camera" width={40} height={40} />
        <p className='icon-label'>{inputConfig.icons.camera}</p>
      </div>

      {/* <div style={{ cursor: 'pointer' }} onClick={scanDocument}>
        <Image src={scanIcon} alt="Scan" className="icon scan" width={40} height={40} />
        <p className='icon-label'>{inputConfig.icons.scan}</p>
      </div> */}
    </div>
  );
};

export default MediaHandler;
