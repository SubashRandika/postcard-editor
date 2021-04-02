import React, { useRef } from 'react';
import { fabric } from 'fabric';

const OpenImage = ({ editor }) => {
	// create hidden file input reference
	const hiddenFileInput = useRef(null);

	// programmatically click the hidden file input
	const handleImageOpen = (event) => {
		hiddenFileInput.current.click();
	};

	// handle image upload and display within the canvas
	const handleImageUpload = (event) => {
		fabric.Image.fromURL(
			URL.createObjectURL(event.target.files[0]),
			(imageObj) => {
				editor?.canvas.clear();
				editor?.canvas.centerObject(imageObj);
				editor?.canvas.add(imageObj);
				editor?.canvas.setActiveObject(imageObj);
			},
			{
				transparentCorners: false,
				cornerColor: '#63ABFF',
				cornerSize: 8
			}
		);
	};

	return (
		<>
			<button
				className='w-28 h-8 bg-blue-450 text-sm text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md'
				onClick={handleImageOpen}
			>
				Open Image
			</button>
			<input
				type='file'
				ref={hiddenFileInput}
				onChange={handleImageUpload}
				style={{ display: 'none' }}
			/>
		</>
	);
};

export default OpenImage;
