import { useFabricJSEditor } from 'fabricjs-react';
import CanvasArea from './components/Canvas/CanvasArea';
import OpenImage from './components/Image/OpenImage';

const App = () => {
	const { editor, onReady } = useFabricJSEditor();

	return (
		<div className='h-screen p-16 flex divide-x divide-gray-250'>
			<div className='flex flex-1 items-start justify-center'>
				<CanvasArea onReady={onReady} />
			</div>
			<div className='w-56 flex flex-col items-center justify-start'>
				<OpenImage editor={editor} />
			</div>
		</div>
	);
};

export default App;
