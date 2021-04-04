import { render, cleanup } from '@testing-library/react';
import DownloadPhoto from '../DownloadPhoto';

describe('DownloadPhoto including file format and download button', () => {
	afterEach(cleanup);
	it('renders download button', () => {
		const { getByTestId } = render(<DownloadPhoto />);
		expect(getByTestId('pce-download-button')).toHaveTextContent('Download');
	});

	it('renders file format dropdown', () => {
		const { getByTestId } = render(<DownloadPhoto />);
		expect(getByTestId('pce-fileFormat')).toBeVisible();
		expect(getByTestId('pce-fileFormat')).toContainHTML(
			'<option value="png">PNG</option>'
		);
	});

	it('renders hidden download click anchor link', () => {
		const { getByTestId } = render(<DownloadPhoto />);
		expect(getByTestId('pce-hidden-download')).toBeInTheDocument();
		expect(getByTestId('pce-hidden-download')).toHaveTextContent(
			'Edited Photo'
		);
	});
});
