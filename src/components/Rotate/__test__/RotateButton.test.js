import { render, cleanup } from '@testing-library/react';
import RotateButton from '../RotateButton';

describe('Rotate Button', () => {
	afterEach(cleanup);
	it('renders rotate button', () => {
		const { getByTestId } = render(<RotateButton />);
		expect(getByTestId('pce-rotate-button')).toHaveTextContent('Rotate');
	});
});
