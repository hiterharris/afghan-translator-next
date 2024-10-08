// components/Upload.js
import React from 'react';
import Image from 'next/image';
import uploadIcon from "@/assets/icons/upload.png";

const Upload = ({ handleFileChange }) => {
    return (
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="upload-input" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Image
                    src={uploadIcon}
                    alt="upload icon"
                    className='icon upload'
                    width={40}
                    height={40}
                />
            </label>
            <input
                type="file"
                id="upload-input"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default Upload;
