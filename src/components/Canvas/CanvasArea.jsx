import React from 'react';
import { FabricJSCanvas } from 'fabricjs-react';

const CanvasArea = ({ onReady }) => {
	return (
		<FabricJSCanvas
			className='w-full h-full flex items-center justify-center mr-10 shadow-canvas'
			onReady={onReady}
		/>
	);
};

export default CanvasArea;
