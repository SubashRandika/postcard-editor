import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {
	afterEach(cleanup);
	it('renders App component', () => {
		render(<App />);
	});
});
