import React from 'react';

const DeleteSelected = ({ editor }) => {
	const handleDeleteSelected = () => {
		editor?.deleteSelected();
	};

	return (
		<button
			className='w-28 h-8 bg-red-600 text-sm text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-4'
			onClick={handleDeleteSelected}
		>
			Delete
		</button>
	);
};

export default DeleteSelected;
