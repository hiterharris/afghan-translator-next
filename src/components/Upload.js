import Image from 'next/image';
import upload from "@/assets/icons/upload.png";

const Upload = ({ handleFileChange }) => {
    return (
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="file-input" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Image
                    src={upload}
                    alt="upload icon"
                    className='icon upload'
                />
            </label>
            <input
                type="file"
                id="file-input"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default Upload;
