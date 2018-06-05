import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import App from './App';
import Container from './components/Container';

describe('App', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('renders Container component', () => {
		const component = shallow(<App />);
		const container = <Container />;
		// expect (wrapper.contains(container)).to.equal(true);
		expect(component.contains(container)).toEqual(true);
	});

	it('full snapshot rendering', () => {
		const component = mount(
			<App />
			);
		expect(mountToJson(component)).toMatchSnapshot();
		component.unmount();
	});
});