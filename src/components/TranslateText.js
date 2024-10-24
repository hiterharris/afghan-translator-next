import Languages from './Languages';
import Input from './Input';
import Output from './Output';
import MediaHandler from './MediaHandler';
import { useTranslate } from '../hooks';
import Image from 'next/image';
import { useOCR } from '../hooks';
import { dark } from '../assets/icons';

const TranslateText = ({ darkMode, setDarkMode }) => {
  const {
    inputLanguage,
    setInputLanguage,
    input,
    setInput,
    translate,
    loading,
    response,
    switched,
    setSwitched,
    reset,
    inputConfig
  } = useTranslate();

  const { isUploading, upload } = useOCR();

  const handleFileChange = async (file) => {
    upload(file, (updatedInput) => {
      setInput(updatedInput);
      if (file && input) {
        setLoading(true);
        translate();
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      translate();
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="TranslateText">
      <Languages
        setInputLanguage={setInputLanguage}
        switched={switched}
        setSwitched={setSwitched}
        reset={reset}
      />
      <Input
        input={input}
        setInput={setInput}
        translate={translate}
        inputLanguage={inputLanguage}
        inputConfig={inputConfig}
        switched={switched}
        reset={reset}
        handleKeyDown={handleKeyDown}
        isUploading={isUploading}
        darkMode={darkMode}
      />
      <Output
        response={response}
        inputLanguage={inputLanguage}
        loading={loading}
        darkMode={darkMode}
      />
      <Image
        src={dark}
        alt="dark mode toggle"
        className="toggle-dark"
        onClick={toggleDarkMode}
      />
      <MediaHandler
        handleFileChange={handleFileChange}
        inputLanguage={inputLanguage}
      />
    </div>
  );
};

export default TranslateText;
