import React, { useEffect } from 'react';
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
    	reset
		} = useTranslate();
	return (
		<div className="TranslateText">
			<Languages 
				setInputLanguage={setInputLanguage} 
				switched={switched} 
				setSwitched={setSwitched}
        		reset={reset}
			/>
			<Output response={response} loading={loading} inputLanguage={inputLanguage} />
			<Input
				input={input}
				setInput={setInput} 
				translate={translate} 
				setLoading={setLoading} 
				inputLanguage={inputLanguage} 
				switched={switched}
        		reset={reset}
			/>
		</div>
	);
}

export default TranslateText;
