import React from 'react';
import PropTypes from 'prop-types';

const GroupButton = ({ editor }) => {
	const handleGroupSelected = () => {
		if (!editor?.canvas.getActiveObject()) {
			return;
		}

		if (editor?.canvas.getActiveObject().type === 'activeSelection') {
			editor?.canvas.getActiveObject().toGroup();
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
			data-testid='pcs-group-button'
			className='w-28 h-8 bg-blue-450 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-10'
			onClick={handleGroupSelected}
		>
			Group
		</button>
	);
};

GroupButton.propTypes = {
	editor: PropTypes.object
};

export default GroupButton;
