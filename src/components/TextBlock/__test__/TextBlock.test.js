import { render, cleanup } from '@testing-library/react';
import TextBlock from '../TextBlock';

describe('TextBlock area including color, size, family of font', () => {
	afterEach(cleanup);
	it('renders text box button', () => {
		const { getByTestId } = render(<TextBlock />);
		expect(getByTestId('pce-textbox-button')).toHaveTextContent('Text Box');
	});

	it('renders text color input', () => {
		const { getByTestId, getByDisplayValue } = render(<TextBlock />);
		expect(getByTestId('pce-color-input')).toBeVisible();
		expect(getByDisplayValue('#000000')).toBeVisible();
	});

	it('renders font family dropdown', () => {
		const { getByTestId } = render(<TextBlock />);
		expect(getByTestId('pce-fontFamily')).toBeVisible();
		expect(getByTestId('pce-fontFamily')).toContainHTML(
			'<option value="\'Roboto\', sans-serif">Roboto</option>'
		);
	});

	it('renders font size dropdown', () => {
		const { getByTestId } = render(<TextBlock />);
		expect(getByTestId('pce-fontSize')).toBeVisible();
		expect(getByTestId('pce-fontSize')).toContainHTML(
			'<option value="40">40</option>'
		);
	});
});
