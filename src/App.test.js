import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {
	afterEach(cleanup);
	it('renders application component', () => {
		render(<App />);
	});
});
