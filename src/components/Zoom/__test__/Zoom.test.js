import { render, cleanup } from '@testing-library/react';
import ZoomIn from '../ZoomIn';
import ZoomOut from '../ZoomOut';

describe('ZoomIn and ZoomOut Buttons', () => {
	afterEach(cleanup);
	it('renders ZoomIn button', () => {
		const { getByTestId } = render(<ZoomIn />);
		expect(getByTestId('pce-zoom-in')).toHaveTextContent('Zoom In');
	});

	it('renders ZoomOut button', () => {
		const { getByTestId } = render(<ZoomOut />);
		expect(getByTestId('pce-zoom-out')).toHaveTextContent('Zoom Out');
	});
});
