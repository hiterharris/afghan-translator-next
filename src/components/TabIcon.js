import Image from 'next/image';

const TabIcon = ({ handleFileChange, icon, captureType }) => {
    let inputProps = {};
    if (captureType === 'photos') {
        inputProps = { accept: 'image/*'  };
    } else if (captureType === 'camera') {
        inputProps = { capture: 'environment', };
    } else {
        inputProps = { accept: '*/*' };
    }

    return (
        <div className='TabIcon'>
            <label htmlFor={`file-input-${captureType}`}>
                <Image
                    src={icon}
                    alt={`${captureType === 'camera' ? 'camera' : captureType === 'library' ? 'library' : 'file'} icon`}
                    className="icon upload"
                    width={40}
                    height={40}
                />
            </label>
            <input
                type="file"
                id={`file-input-${captureType}`}
                {...inputProps}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default TabIcon;
