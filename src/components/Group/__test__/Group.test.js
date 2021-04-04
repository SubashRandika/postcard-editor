import { render, cleanup } from '@testing-library/react';
import GroupButton from '../GroupButton';
import UnGroupButton from '../UnGroupButton';

describe('Undo and Redo Buttons', () => {
	afterEach(cleanup);
	it('renders Undo button', () => {
		const { getByTestId } = render(<GroupButton />);
		expect(getByTestId('pcs-group-button')).toHaveTextContent('Group');
	});

	it('renders Redo button', () => {
		const { getByTestId } = render(<UnGroupButton />);
		expect(getByTestId('pcs-ungroup-button')).toHaveTextContent('UnGroup');
	});
});
