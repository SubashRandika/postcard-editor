import React, { useContext } from 'react';
import { ImageContext } from '../../context/ImageContext';

const RotateButton = ({ editor }) => {
	const image = useContext(ImageContext)[0];

	const handleRotate = () => {
		const currentImageAngle = image.angle;
		image.angle = currentImageAngle + 90;
		editor?.canvas.renderAll();
	};

	return (
		<button
			className='w-28 h-8 bg-blue-450 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-4'
			onClick={handleRotate}
		>
			Rotate
		</button>
	);
};

export default RotateButton;
