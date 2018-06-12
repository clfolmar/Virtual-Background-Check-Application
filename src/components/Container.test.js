import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json'
import Container from './Container';

describe('Container', () => {

	it('renders fully without crashing', () => {
		const component = mount(<Container />);
		component.unmount();
	});

	it('full snapshot rendering', () => {
		const component = mount(<Container />);
		expect(mountToJson(component)).toMatchSnapshot();
		component.unmount();
	});

	it('renders form submission button', () => {
		const component = mount(<Container />);
		const submit = 	
		<div className="col-12 col-md-3">
			<button type="submit" className="btn btn-block btn-lg btn-primary">Search</button>
		</div>;
		expect(component.contains(submit)).toEqual(true);
		component.unmount();
	});

	it('renders child Data component', () => {
		const component = mount(<Container />);
		const dataComponentHeader = <h5>Hostname</h5>;
		expect(component.contains(dataComponentHeader)).toEqual(true);
		component.unmount();
	});

});
