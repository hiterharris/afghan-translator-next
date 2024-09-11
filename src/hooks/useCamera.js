import { useState } from 'react';
import { Camera, CameraResultType } from '@capacitor/camera';

const useCamera = () => {
    const [imageUrl, setImageUrl] = useState('');
    const takePicture = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri
        });
        console.log('image:', image);
        setImageUrl(image.webPath);
      
        return;
      };
    return { takePicture, imageUrl }
}

export default useCamera;