import { useEffect } from 'react';
import { useFabricJSEditor } from 'fabricjs-react';
import 'fabric-history';
import CanvasArea from './components/Canvas/CanvasArea';
import DeleteSelected from './components/DeleteButton/DeleteSelected';
import GroupButton from './components/Group/GroupButton';
import UnGroupButton from './components/Group/UnGroupButton';
import RedoButton from './components/History/RedoButton';
import UndoButton from './components/History/UndoButton';
import OpenImage from './components/OpenButton/OpenImage';
import RotateButton from './components/Rotate/RotateButton';
import TextBlock from './components/TextBlock/TextBlock';
import ZoomIn from './components/Zoom/ZoomIn';
import ZoomOut from './components/Zoom/ZoomOut';
import SavePhoto from './components/Save/SavePhoto';

const App = () => {
	const { editor, onReady } = useFabricJSEditor();

	useEffect(() => {
		editor?.canvas.on('mouse:wheel', function (opt) {
			var delta = opt.e.deltaY;
			var zoom = editor?.canvas.getZoom();
			zoom *= 0.999 ** delta;

			if (zoom > 20) {
				zoom = 20;
			}
			if (zoom < 0.01) {
				zoom = 0.01;
			}

			editor?.canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);

			opt.e.preventDefault();
			opt.e.stopPropagation();
		});
	}, [editor]);

	return (
		<div className='h-screen p-16 flex divide-x divide-gray-250'>
			<div className='flex flex-1 items-start justify-center'>
				<CanvasArea onReady={onReady} />
			</div>
			<div className='w-56 flex flex-col items-center justify-start'>
				<OpenImage editor={editor} />
				<DeleteSelected editor={editor} />
				<TextBlock editor={editor} />
				<ZoomIn editor={editor} />
				<ZoomOut editor={editor} />
				<RotateButton editor={editor} />
				<GroupButton editor={editor} />
				<UnGroupButton editor={editor} />
				<UndoButton editor={editor} />
				<RedoButton editor={editor} />
				<SavePhoto editor={editor} />
			</div>
		</div>
	);
};

export default App;
