import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import Data from './Data';

const header = "Hostname",
icon = "icon-list",
data = "Test Data";

describe('Data', () => {

	it('renders fully without crashing', () => {
		const component = mount(
			<Data 
				header={header} 
				icon={icon} 
				data={data}
			/>
			);
		component.unmount();
	});

	it('full snapshot rendering', () => {
		const component = mount(<Data />);
		expect(mountToJson(component)).toMatchSnapshot();
		component.unmount();
	});

	it('renders with propogated data', () => {
		const component = mount(
			<Data 
				header={header} 
				icon={icon} 
				data={data}
			/>
			);
		const populatedDataComponentElement = <p className="mb-0">{data}</p>;
		expect(component.contains(populatedDataComponentElement)).toEqual(true);
	});

});