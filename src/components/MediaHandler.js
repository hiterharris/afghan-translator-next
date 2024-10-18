import React, { useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import Image from 'next/image';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { fileIcon, photoLibraryIcon, cameraIcon } from "@/assets/icons";
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { languageConfig } from '@/constants/languageConfig';

const MediaHandler = ({ handleFileChange, inputLanguage }) => {
  const inputConfig = languageConfig[inputLanguage];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      defineCustomElements(window);
    }
  }, []);

  const selectFile = async () => {
    try {
      const result = await FilePicker.pickFiles({
        types: [],
        multiple: false,
        readData: true,
      });
      if (result.files.length > 0) {
        const file = result.files[0];
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

  const selectPhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 100,
        source: CameraSource.Photos,
        resultType: CameraResultType.DataUrl,
      });
      const dataUrl = photo.dataUrl;
      handleFileChange(dataUrl);
    } catch (error) {
      if (error.message !== 'User cancelled photos app') {
        console.error('Error selecting photo:', error);
      }
    }
  };

  const openCamera = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        source: CameraSource.Camera,
        resultType: CameraResultType.DataUrl
      });
      const dataUrl = photo.dataUrl;
      handleFileChange(dataUrl);
    } catch (error) {
      if (error.message !== 'User cancelled photos app') {
        console.error('Error taking photo:', error);
      }
    }
  };

  return (
    <div className="media-handler">
      <div style={{ cursor: 'pointer' }} onClick={selectFile}>
        <Image src={fileIcon} alt="File" className="icon file" width={40} height={40} />
        {/* <p className='icon-label'>{inputConfig.icons.file}</p> */}
      </div>
      <div className="camera" style={{ cursor: 'pointer' }} onClick={openCamera}>
        <Image src={cameraIcon} alt="Camera" className="icon" width={40} height={40} />
        {/* <p className='icon-label'>{inputConfig.icons.camera}</p> */}
      </div>
      <div style={{ cursor: 'pointer' }} onClick={selectPhoto}>
        <Image src={photoLibraryIcon} alt="Photo Library" className="icon photo-library" width={40} height={40} />
        {/* <p className='icon-label'>{inputConfig.icons.photo}</p> */}
      </div>
    </div>
  );
};

export default MediaHandler;
