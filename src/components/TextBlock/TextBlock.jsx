import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fabric } from 'fabric';
import Dropdown from '../Common/DropDown';
import { fontFamilies, fontSizes } from './fontData.js';

const TextBlock = ({ editor }) => {
	const [textInfo, setTextInfo] = useState({
		fontSize: 40,
		fontFamily: "'Roboto', sans-serif",
		fill: '#000000'
	});

	const handleTextBlock = () => {
		const textBox = new fabric.IText('TEXT BOX', {
			...textInfo,
			top: editor?.canvas.getHeight() / 2,
			left: editor?.canvas.getWidth() / 2,
			fontWeight: 'normal',
			transparentCorners: false,
			cornerColor: '#63ABFF',
			cornerSize: 8,
			textAlign: 'center',
			originX: 'middle',
			originY: 'middle'
		});

		editor?.canvas.add(textBox);
		textBox.bringForward();
		editor?.canvas.setActiveObject(textBox);
		editor?.canvas.requestRenderAll();
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
		<div className='flex flex-col w-full items-center mt-10 pl-10'>
			<div className='flex items-center w-full'>
				<input
					name='fill'
					className='w-10 h-9'
					type='color'
					value={textInfo.fill}
					onChange={handleTextChange}
				/>
				<Dropdown
					name='fontFamily'
					value={textInfo.fontFamily}
					rootStyles='relative inline-flex ml-3'
					svgStyles='w-2 absolute top-0 right-0 m-3.5 pointer-events-none'
					selectStyles='border border-gray-300 text-xs text-gray-600 h-8 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none'
					handleOnChange={handleTextChange}
				>
					{fontFamilies.map((font, index) => (
						<option key={index} value={font.value}>
							{font.label}
						</option>
					))}
				</Dropdown>
			</div>
			<div className='flex items-center w-full'>
				<Dropdown
					name='fontSize'
					value={textInfo.fontSize}
					rootStyles='relative inline-flex mr-2 mt-4'
					svgStyles='w-2 absolute top-0 right-0 my-3.5 mr-2 pointer-events-none'
					selectStyles='border border-gray-300 text-xs text-gray-600 h-8 pl-2 pr-5 bg-white hover:border-gray-400 focus:outline-none appearance-none'
					handleOnChange={handleTextChange}
				>
					{fontSizes.map((size, index) => (
						<option key={index} value={size.value}>
							{size.label}
						</option>
					))}
				</Dropdown>
				<button
					className='w-28 h-8 bg-blue-450 text-xs text-white uppercase rounded-sm p-1.5 leading-3 hover:shadow-md mt-4'
					onClick={handleTextBlock}
				>
					Text Box
				</button>
			</div>
		</div>
	);
};

TextBlock.propTypes = {
	editor: PropTypes.object
};

export default TextBlock;
