import React from 'react';
import Languages from './Languages';
import Input from './Input';
import Output from './Output';
import useTranslate from '../hooks/useTranslate';

const TranslateText = () => {
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
      } = useTranslate();
    return (
        <div className="TranslateText">
            <Languages 
              setInputLanguage={setInputLanguage} 
              switched={switched} 
              setSwitched={setSwitched} 
            />
            <Output response={response} loading={loading} inputLanguage={inputLanguage} />
            <Input input={input} setInput={setInput} translate={translate} setLoading={setLoading} inputLanguage={inputLanguage} switched={switched} />
        </div>
    );
}

export default TranslateText;