import { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import useConvertImage from '../hooks/useConvertImage';

function TranslateImage() {
  const { translate, response } = useConvertImage();
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleImageChange(e) {
    setLoading(true);
    const file = e.target.files[0];

    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      console.log({ imageDataUri });
      setImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    imageData !== null && (async () => {
      const worker = await createWorker({
        logger: m => console.log(m)
      });

      (async () => {
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(imageData);
        await worker.terminate()
        await translate(text)
      })();
    })();
  }, [imageData]);

  useEffect(() => {
    setLoading(false)
  }, [response]);

  return (
    <div className="TranslateImage">
      <div className="upload-image">
        <p>Choose an Image</p>
        <input
          type="file"
          name=""
          id=""
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
      <div className="image-text">
        <img src={imageData} alt="" srcSet="" width={240} />
        {loading ? <p>Loading...</p> : <div className="html" dangerouslySetInnerHTML={{ __html: response }} />}
      </div>
    </div>
  );
}
export default TranslateImage;

// Steps:
// 1. Capture image and return text from tessereact
// 2. Translate text using current translate endpoint
// 3. Return html with translated text
// 4. Convert into pdf
// 5. Share pdf
// 6. Store pdf

// Prompts:
// Translate the following text to Afghan Dari and create an html document formatted and styled based on the context of the text I provide: