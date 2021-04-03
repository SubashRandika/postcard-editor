import React from 'react';

const RedoButton = ({ editor }) => {
	const handleRedoAction = () => {
		editor?.canvas.redo();
	};

	return (
		<button
			className='w-28 h-8 bg-blue-450 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-4'
			onClick={handleRedoAction}
		>
			Redo
		</button>
	);
};

export default RedoButton;
