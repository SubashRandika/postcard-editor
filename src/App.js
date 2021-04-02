import { useFabricJSEditor } from 'fabricjs-react';
import CanvasArea from './components/Canvas/CanvasArea';
import DeleteSelected from './components/DeleteButton/DeleteSelected';
import OpenImage from './components/OpenButton/OpenImage';

const App = () => {
	const { editor, onReady } = useFabricJSEditor();

	return (
		<div className='h-screen p-16 flex divide-x divide-gray-250'>
			<div className='flex flex-1 items-start justify-center'>
				<CanvasArea onReady={onReady} />
			</div>
			<div className='w-56 flex flex-col items-center justify-start'>
				<OpenImage editor={editor} />
				<DeleteSelected editor={editor} />
			</div>
		</div>
	);
};

export default App;
