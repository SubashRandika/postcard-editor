import React, { useRef, useState } from 'react';
import Dropdown from '../Common/DropDown';

const DownloadPhoto = ({ editor }) => {
	const downloadImage = useRef(null);
	const [imageUrl, setImageUrl] = useState('');
	const [format, setFormat] = useState('png');

	const handleDownloadImage = () => {
		if (!isCanvasEmpty()) {
			setImageUrl(editor?.canvas.toDataURL({ format, multiplier: 2 }));
			downloadImage.current.click();
		} else {
			alert(
				'Cannot download empty canvas. Please edit something on the canvas.'
			);
		}
	};

	const handleFileFormatChange = (event) => {
		setFormat(event.target.value);
	};

	const isCanvasEmpty = () => {
		const context = editor?.canvas.getContext();

		const pixelBuffer = new Uint32Array(
			context?.getImageData(
				0,
				0,
				editor?.canvas.width,
				editor?.canvas.height
			).data.buffer
		);

		return !pixelBuffer.some((color) => color !== 0);
	};

	return (
		<div className='flex items-center w-full mt-10 pl-6'>
			<Dropdown
				name='fileFormat'
				value={format}
				rootStyles='relative inline-flex mr-2 mt-4'
				svgStyles='w-2 absolute top-0 right-0 my-3.5 mr-2 pointer-events-none'
				selectStyles='border border-gray-300 text-xs text-gray-600 h-8 pl-2 pr-5 bg-white hover:border-gray-400 focus:outline-none appearance-none'
				handleOnChange={handleFileFormatChange}
			>
				<option value='png'>PNG</option>
				<option value='jpeg'>JPEG</option>
			</Dropdown>
			<a
				className='hidden'
				href={imageUrl}
				download='Photo'
				ref={downloadImage}
			>
				Edited Photo
			</a>
			<button
				className='w-28 h-8 bg-green-600 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-4'
				onClick={handleDownloadImage}
			>
				Download
			</button>
		</div>
	);
};

export default DownloadPhoto;
