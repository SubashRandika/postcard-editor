import { render, cleanup } from '@testing-library/react';
import UndoButton from '../UndoButton';
import RedoButton from '../RedoButton';

describe('Undo and Redo Buttons', () => {
	afterEach(cleanup);
	it('renders Undo button', () => {
		const { getByTestId } = render(<UndoButton />);
		expect(getByTestId('pce-undo-button')).toHaveTextContent('Undo');
	});

	it('renders Redo button', () => {
		const { getByTestId } = render(<RedoButton />);
		expect(getByTestId('pce-redo-button')).toHaveTextContent('Redo');
	});
});
