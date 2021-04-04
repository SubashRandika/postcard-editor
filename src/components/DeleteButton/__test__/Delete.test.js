import { render, cleanup } from '@testing-library/react';
import DeleteSelected from '../DeleteSelected';

describe('Delete selected object in the canvas', () => {
	afterEach(cleanup);
	it('renders delete button', () => {
		const { getByTestId } = render(<DeleteSelected />);
		expect(getByTestId('pce-delete-button')).toHaveTextContent('Delete');
	});
});
