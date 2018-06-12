import React from 'react';
import ReactDOM from 'react-dom';
import GoodIp from './GoodIp';
import { shallow, mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json'

const address = "1.2.3.4";

describe('GoodIp', () => {

	it('renders fully without crashing', () => {
		const component = mount(<GoodIp address={address} />);
		component.unmount();
	});

	it('full snapshot rendering', () => {
		const component = mount(<GoodIp />);
		expect(mountToJson(component)).toMatchSnapshot();
		component.unmount();
	});

	it('renders populated element', () => {
		const component =  mount(<GoodIp address={address} />);
		const populatedElement = <h4>{address}</h4>;
		expect(component.contains(populatedElement)).toEqual(true);
		component.unmount();
	});
});