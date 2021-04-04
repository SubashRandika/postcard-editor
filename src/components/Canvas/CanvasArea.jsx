import React from 'react';
import PropTypes from 'prop-types';
import { FabricJSCanvas } from 'fabricjs-react';

const CanvasArea = ({ onReady }) => {
	return (
		<div
			data-testid='pce-main-canvas'
			className='w-full h-full flex items-center justify-center mr-10 shadow-canvas'
		>
			<FabricJSCanvas onReady={onReady} />
		</div>
	);
};

CanvasArea.propTypes = {
	onReady: PropTypes.func
};

export default CanvasArea;
