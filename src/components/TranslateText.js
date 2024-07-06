import React from 'react';
import Languages from './Languages';
import Input from './Input';
import Output from './Output';
import useTranslate from '../hooks/useTranslate';
import { Button } from 'primereact/button';

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
		reset,
		inputConfig
	} = useTranslate();

	const handleTranslate = () => {
		translate(input, inputLanguage);
	}

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
			/>
			<Output response={response} inputLanguage={inputLanguage} />
			<Button
				className='translate-button'
				label="Translate"
				icon="pi pi-check"
				loading={loading}
				onClick={handleTranslate}
			/>
			<p className={`reset ${input && 'show'}`} onClick={reset}>{inputConfig.reset}</p>
		</div>
	);
}

export default TranslateText;
