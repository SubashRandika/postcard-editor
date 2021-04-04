import React from 'react';
import PropTypes from 'prop-types';

const ZoomOut = ({ editor }) => {
	const minZoom = 0.1;
	const SCALE_FACTOR = 1.2;

	const handleZoomOut = () => {
		if (editor?.canvas.getZoom().toFixed(5) <= minZoom) {
			console.log('ZOOM OUT: Error: cannot zoom out anymore');
			return;
		}

		editor?.canvas.setZoom(editor?.canvas.getZoom() / SCALE_FACTOR);
		editor?.canvas.requestRenderAll();
	};

	return (
		<button
			data-testid='pce-zoom-out'
			className='w-28 h-8 bg-blue-450 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-4'
			onClick={handleZoomOut}
		>
			Zoom Out
		</button>
	);
};

ZoomOut.propTypes = {
	editor: PropTypes.object
};

export default ZoomOut;
