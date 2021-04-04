import React from 'react';
import PropTypes from 'prop-types';

const DeleteSelected = ({ editor }) => {
	const handleDeleteSelected = () => {
		editor?.deleteSelected();
	};

	return (
		<button
			className='w-28 h-8 bg-red-500 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-4'
			onClick={handleDeleteSelected}
		>
			Delete
		</button>
	);
};

DeleteSelected.propTypes = {
	editor: PropTypes.object
};

export default DeleteSelected;
