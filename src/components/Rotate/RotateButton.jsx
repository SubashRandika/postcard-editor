import React from 'react';

const RotateButton = ({ editor }) => {
	const handleRotate = () => {
		const currentImageAngle = editor?.canvas.getActiveObject().angle;
		editor.canvas.getActiveObject().angle = currentImageAngle + 90;
		editor?.canvas.requestRenderAll();
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
