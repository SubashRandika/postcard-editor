import React from 'react';
import { FabricJSCanvas } from 'fabricjs-react';

const CanvasArea = ({ onReady }) => {
	return (
		<FabricJSCanvas
			className='w-full h-5/6 flex items-center justify-center mr-10 shadow-canvas'
			onReady={onReady}
		/>
	);
};

export default CanvasArea;
