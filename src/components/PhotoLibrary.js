// components/PhotoLibrary.js
import React from 'react';
import Image from 'next/image';
import photoLibraryIcon from "@/assets/icons/photos.png"; // Add your photo library icon

const PhotoLibrary = ({ handleFileChange }) => {
    return (
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="photo-library-input" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Image
                    src={photoLibraryIcon}
                    alt="photo library icon"
                    className='icon photo-library'
                    width={40}
                    height={40}
                />
            </label>
            <input
                type="file"
                id="photo-library-input"
                accept="image/*"
                capture="" // Ensure this is empty to access only the photo library
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default PhotoLibrary;
