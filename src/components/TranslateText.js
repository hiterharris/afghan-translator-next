import React, { useEffect } from 'react';
import Languages from './Languages';
import Input from './Input';
import Output from './Output';
import TabIcon from './TabIcon';
import { useTranslate, useOCR, useCamera } from '../hooks';
import { Button } from 'primereact/button';
import camera from '@/assets/icons/camera.png';
import Image from 'next/image';
import upload from "@/assets/icons/upload.png";
import photos from "@/assets/icons/photos.png";

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
	const { takePicture, imageUrl } = useCamera();

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

	const tabs = [
		{ title: 'Text', content: 'Text content' },
		{ title: 'Image', content: 'Image content' }
	];

	return (
		<div className="TranslateText">
			<Languages
				setInputLanguage={setInputLanguage}
				switched={switched}
				setSwitched={setSwitched}
				reset={reset}
			/>
			{imageUrl && <Image
				src={imageUrl}
				alt="camera icon"
				className='icon camera'
				width={100}
				height={150}
			/>}
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

			<div className='TabBar'>
				<TabIcon handleFileChange={handleFileChange} icon={photos} captureType="photos" />
				<Button
				className='translate-button'
				label={inputConfig.translate}
				icon="pi pi-check"
				onClick={handleTranslate}
			/>
				<TabIcon handleFileChange={handleFileChange} icon={camera} captureType="camera" />
			</div>

		</div>
	);
}

export default TranslateText;
