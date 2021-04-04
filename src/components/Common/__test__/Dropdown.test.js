import { render, cleanup } from '@testing-library/react';
import DropDown from '../DropDown';

describe('Common dropdown component', () => {
	afterEach(cleanup);
	it('renders select combobox with options', () => {
		const { getByTestId } = render(
			<DropDown
				name='DropDownTest'
				value='Value1'
				rootStyles=''
				svgStyles=''
				selectStyles=''
				handleOnChange={() => {}}
			>
				<option value='Value1'>Label1</option>
				<option value='Value2'>Label2</option>
				<option value='Value3'>Label3</option>
			</DropDown>
		);

		expect(getByTestId('pce-dropdown-svg')).toContainElement(
			getByTestId('pce-svg-path')
		);
		expect(getByTestId('pce-dropdown-select')).toBeVisible();
		expect(getByTestId('pce-dropdown-select')).toContainHTML(
			"<option value='Value2'>Label2</option>"
		);
	});
});
