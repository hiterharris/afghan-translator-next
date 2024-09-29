// components/MediaHandler.js
import React from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import Image from 'next/image';
import uploadIcon from "@/assets/icons/upload.png";
import cameraIcon from "@/assets/icons/camera.png";
import photoLibraryIcon from "@/assets/icons/photos.png";

const MediaHandler = ({ handleFileChange }) => {
  
  // Function to capture an image using the camera
  const takePhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera, // Directly access the camera
      });
      const photoBlob = dataURLtoBlob(photo.dataUrl);
      handleFileChange({ target: { files: [photoBlob] } });
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  // Function to select an image from the photo library
  const pickPhotoFromLibrary = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos, // Directly access the photo library
      });
      const photoBlob = dataURLtoBlob(photo.dataUrl);
      handleFileChange({ target: { files: [photoBlob] } });
    } catch (error) {
      console.error('Error picking photo from library:', error);
    }
  };

  // Function to select a file using an input element (for other file types)
  const handleFileUpload = (event) => {
    handleFileChange(event); // Directly pass the file to the handleFileChange function
  };

  // Utility function to convert base64 data URL to a Blob object
  const dataURLtoBlob = (dataUrl) => {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  return (
    <div className="media-handler" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      {/* Button to open the file picker */}
      <label htmlFor="file-input" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <Image src={uploadIcon} alt="Upload" className="icon upload" width={40} height={40} />
      </label>
      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />

      {/* Button to pick photo from the library */}
      <div style={{ cursor: 'pointer' }} onClick={pickPhotoFromLibrary}>
        <Image src={photoLibraryIcon} alt="Photo Library" className="icon photo-library" width={40} height={40} />
      </div>

      {/* Button to take a photo with the camera */}
      <div style={{ cursor: 'pointer' }} onClick={takePhoto}>
        <Image src={cameraIcon} alt="Camera" className="icon camera" width={40} height={40} />
      </div>
    </div>
  );
};

export default MediaHandler;
