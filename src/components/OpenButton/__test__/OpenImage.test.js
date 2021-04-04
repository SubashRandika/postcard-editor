import { render, cleanup } from '@testing-library/react';
import OpenImage from '../OpenImage';

describe('OpenImage Button', () => {
	afterEach(cleanup);
	it('renders OpenImage button', () => {
		const { getByTestId } = render(<OpenImage />);
		expect(getByTestId('pce-open-image')).toHaveTextContent('Open Image');
		expect(getByTestId('pce-file-input')).not.toBeVisible();
	});
});
