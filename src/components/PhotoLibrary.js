import React from 'react';
import Image from 'next/image';
import photoLibraryIcon from "@/assets/icons/photos.png";

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
                capture=""
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default PhotoLibrary;
