import { useEffect } from 'react';
import Languages from './Languages';
import Input from './Input';
import Output from './Output';
import MediaHandler from './MediaHandler';
import { useTranslate } from '../hooks';
import { Button } from 'primereact/button';
import { useOCR } from '../hooks';

const TranslateText = ({ moesifClick }) => {  
  const {
    inputLanguage,
    setInputLanguage,
    input,
    setInput,
    translate,
    loading,
    setLoading,
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
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      moesifClick();
      translate(input, inputLanguage);
    }
  };

  const handleTranslate = () => {
    moesifClick();
    translate(input, inputLanguage);
  };

  useEffect(() => {
    if (input) {
      translate(input, inputLanguage);
    }
  }, [input, inputLanguage]);

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
        setLoading={setLoading}
        inputLanguage={inputLanguage}
        inputConfig={inputConfig}
        switched={switched}
        reset={reset}
        handleKeyDown={handleKeyDown}
        isUploading={isUploading}
      />
      <Output response={response} inputLanguage={inputLanguage} loading={loading} />
      <Button
        className="translate-button"
        label={inputConfig.translate}
        icon="pi pi-check"
        onClick={handleTranslate}
      />
      <MediaHandler
        handleFileChange={handleFileChange}
        inputLanguage={inputLanguage}
      />
    </div>
  );
};

export default TranslateText;
