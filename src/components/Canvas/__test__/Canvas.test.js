import { render, cleanup } from '@testing-library/react';
import CanvasArea from '../CanvasArea';

describe('Fabric.js canvas component', () => {
	afterEach(cleanup);
	it('renders canvas wrapper container', () => {
		const { getByTestId } = render(<CanvasArea />);
		expect(getByTestId('pce-main-canvas')).toBeVisible();
	});
});
