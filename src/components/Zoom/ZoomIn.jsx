import React from 'react';
import PropTypes from 'prop-types';

const ZoomIn = ({ editor }) => {
	const maxZoom = 23;
	const SCALE_FACTOR = 1.2;

	const handleZoomIn = () => {
		if (editor?.canvas.getZoom().toFixed(5) > maxZoom) {
			console.log('ZOOM IN: Error: cannot zoom in further');
			return;
		}

		editor?.canvas.setZoom(editor?.canvas.getZoom() * SCALE_FACTOR);
		editor?.canvas.requestRenderAll();
	};

	return (
		<button
			data-testid='pce-zoom-in'
			className='w-28 h-8 bg-blue-450 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-10'
			onClick={handleZoomIn}
		>
			Zoom In
		</button>
	);
};

ZoomIn.propTypes = {
	editor: PropTypes.object
};

export default ZoomIn;
