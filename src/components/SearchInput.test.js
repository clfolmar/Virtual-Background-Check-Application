import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json'
import SearchInput from './SearchInput';
import { spy } from 'sinon';

describe('SearchInput', () => {

	it('renders fully without crashing', () => {
		const component = mount(<SearchInput onSubmission={[Function]} />);
		component.unmount();
	});

	it('full snapshot rendering', () => {
		const component = mount(
			<SearchInput onSubmission={[Function]} />
			);
		expect(mountToJson(component)).toMatchSnapshot();
		component.unmount();
	});

	it('renders submit button', () => {
		const onSubmit = spy();
		const component = mount(<SearchInput onSubmission={onSubmit} />);
		const submitButton = <div className="col-12 col-md-3">
								<button type="submit" className="btn btn-block btn-lg btn-primary">Search</button>
							</div>;
		expect(component.contains(submitButton)).toEqual(true);
		component.unmount();
	});

	it('handles submit with submit event on form', () => {
		const onSubmit = spy();
		const component = mount(<SearchInput onSubmission={onSubmit} />);
		const form = component.find('form');
		form.simulate('submit');
		expect(onSubmit.called).toEqual(true);
		component.unmount();
	});

	it('handles submit with click event on button', () => {
		const onSubmit = spy();
		const component = mount(<SearchInput onSubmission={onSubmit} />);
		const button = component.find('button');
		button.simulate('submit');
		expect(onSubmit.called).toEqual(true);
		component.unmount();
	});

});

