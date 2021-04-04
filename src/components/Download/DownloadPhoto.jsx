import React, { useRef, useState } from 'react';

const DownloadPhoto = ({ editor }) => {
	const downloadImage = useRef(null);
	const [image, setImage] = useState('');

	const handleSaveImage = () => {
		setImage(editor?.canvas.toDataURL('png'));
		downloadImage.current.click();
	};

	return (
		<>
			<a className='hidden' href={image} download='photo' ref={downloadImage}>
				Edited Photo
			</a>
			<button
				className='w-28 h-8 bg-green-600 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-10'
				onClick={handleSaveImage}
			>
				Download
			</button>
		</>
	);
};

export default DownloadPhoto;
