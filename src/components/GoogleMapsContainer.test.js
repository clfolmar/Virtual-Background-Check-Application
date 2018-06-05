import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapsContainer from './GoogleMapsContainer';
import { shallow, mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json'

const center = {
	lat: 25,
	lng: -72
}

describe('GoogleMapsContainer', () => {

	it('renders fully without crashing', () => {
		const component = mount(<GoogleMapsContainer center={center} zoom={10} />);
		component.unmount();
	});

	it('full snapshot rendering', () => {
		const component = mount(
			<GoogleMapsContainer />
			);
		expect(mountToJson(component)).toMatchSnapshot();
		component.unmount();
	});
});