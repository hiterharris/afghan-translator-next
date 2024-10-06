// components/Camera.js
import React from 'react';
import Image from 'next/image';
import cameraIcon from "@/assets/icons/camera.png";

const Camera = ({ handleFileChange }) => {
    return (
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="camera-input" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Image
                    src={cameraIcon}
                    alt="camera icon"
                    className='icon camera'
                    width={40}
                    height={40}
                />
            </label>
            <input
                type="file"
                id="camera-input"
                accept="image/*"
                capture="environment" // This should ensure it accesses the device camera
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default Camera;
