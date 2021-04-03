import React from 'react';

const UnGroupButton = ({ editor }) => {
	const handleUnGroupSelected = () => {
		if (!editor?.canvas.getActiveObject()) {
			return;
		}

		if (editor?.canvas.getActiveObject().type === 'group') {
			editor?.canvas.getActiveObject().toActiveSelection();
			editor.canvas.getActiveObject().originX = 'middle';
			editor.canvas.getActiveObject().originY = 'middle';
			editor.canvas.getActiveObject().top = editor?.canvas.getHeight() / 2;
			editor.canvas.getActiveObject().left = editor?.canvas.getWidth() / 2;
			editor?.canvas.requestRenderAll();
		} else {
			return;
		}
	};

	return (
		<button
			className='w-28 h-8 bg-blue-450 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-4'
			onClick={handleUnGroupSelected}
		>
			UnGroup
		</button>
	);
};

export default UnGroupButton;