import React from 'react';
import PropTypes from 'prop-types';
import { FabricJSCanvas } from 'fabricjs-react';

const CanvasArea = ({ onReady }) => {
	return (
		<FabricJSCanvas
			className='w-full h-full flex items-center justify-center mr-10 shadow-canvas'
			onReady={onReady}
		/>
	);
};

CanvasArea.propTypes = {
	onReady: PropTypes.func
};

export default CanvasArea;
