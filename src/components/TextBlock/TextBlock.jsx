import React, { useState } from 'react';
import { fabric } from 'fabric';

const TextBlock = ({ editor }) => {
	const [textInfo, setTextInfo] = useState({
		fontFamily: 'Roboto',
		fill: '#000000'
	});

	const handleTextBlock = () => {
		const textBox = new fabric.IText('TEXT BOX', {
			...textInfo,
			top: 100,
			left: 200,
			fontSize: 40,
			fontWeight: 'normal'
		});

		editor?.canvas.add(textBox);
		textBox.bringForward();
		editor?.canvas.setActiveObject(textBox);
	};

	const handleTextChange = (event) => {
		setTextInfo({ ...textInfo, [event.target.name]: event.target.value });
		const selectedText = editor?.canvas.getActiveObject();

		if (selectedText) {
			selectedText.set(event.target.name, event.target.value);
			editor?.canvas.requestRenderAll();
		}
	};

	return (
		<div className='mt-10 flex flex-col items-center'>
			<div className='flex items-center'>
				<input
					name='fill'
					className='w-10 h-9'
					type='color'
					value={textInfo.fill}
					onChange={handleTextChange}
				/>
				<div className='relative inline-flex ml-3'>
					<svg
						className='w-2 absolute top-0 right-0 m-3.5 pointer-events-none'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 412 232'
					>
						<path
							d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
							fill='#648299'
							fillRule='nonzero'
						/>
					</svg>
					<select
						name='fontFamily'
						className='border border-gray-300 text-xs text-gray-600 h-8 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none'
						onChange={handleTextChange}
					>
						<option value='Roboto'>Roboto</option>
						<option value='Arial, sans-serif'>Arial</option>
						<option value="'Times New Roman', serif">Times New Roman</option>
						<option value="'Open Sans', sans-serif">Open Sans</option>
						<option value="'Courier New', monospace">Courier New</option>
						<option value="'Lato', sans-serif">Lato</option>
						<option value="'Lobster', cursive">Lobster</option>
						<option value="'New Tegomin', serif">New Tegomin</option>
						<option value="'Pacifico', cursive">Pacifico</option>
						<option value="'Train One', cursive">Train One</option>
						<option value="'Yatra One', cursive">Yatra One</option>
					</select>
				</div>
			</div>
			<button
				className='w-28 h-8 bg-blue-450 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-4'
				onClick={handleTextBlock}
			>
				Text Box
			</button>
		</div>
	);
};

export default TextBlock;
