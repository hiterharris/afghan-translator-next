import React, { useEffect } from 'react';
import Languages from './Languages';
import Input from './Input';
import Output from './Output';
import Upload from './Upload';
import { useTranslate } from '../hooks';
import { Button } from 'primereact/button';
import { useOCR } from '../hooks';

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
		setResponse,
		switched,
		setSwitched,
		reset,
		inputConfig
	} = useTranslate();

	const { extractedText, handleFileChange } = useOCR(setLoading, inputLanguage, translate);

	const handleTranslate = () => {
		translate(input, inputLanguage);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			translate(input, inputLanguage);
		}
	};

	useEffect(() => {
	  setInput(extractedText);
	  setResponse('');
	}, [extractedText]);

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
			/>
			<Output
				response={response}
				inputLanguage={inputLanguage}
				loading={loading}
			/>
			<Button
				className='translate-button'
				label={inputConfig.translate}
				icon="pi pi-check"
				onClick={handleTranslate}
			/>
			<Upload handleFileChange={handleFileChange} />
		</div>
	);
}

export default TranslateText;
