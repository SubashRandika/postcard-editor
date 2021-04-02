import React, { useState, createContext } from 'react';

const ImageContext = createContext();

const ImageProvider = (props) => {
	const [image, setImage] = useState({});

	return (
		<ImageContext.Provider value={[image, setImage]}>
			{props.children}
		</ImageContext.Provider>
	);
};

export { ImageContext, ImageProvider };
