import React from 'react';
import PropTypes from 'prop-types';

const UndoButton = ({ editor }) => {
	const handleUndoAction = () => {
		editor?.canvas.undo();
	};

	return (
		<button
			className='w-28 h-8 bg-blue-450 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-10'
			onClick={handleUndoAction}
		>
			Undo
		</button>
	);
};

UndoButton.propTypes = {
	editor: PropTypes.object
};

export default UndoButton;
