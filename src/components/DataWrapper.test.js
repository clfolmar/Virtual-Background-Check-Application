import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import DataWrapper from './DataWrapper';

const found=false,
address="1.2.3.4",
hostname="Test Name",
continent="Test Continent",
country="Test Country",
region="Test Region",
city="Test City",
postal="12345",
longitude=45,
latitude=-72,
timeZone="Test Time Zone",
asNumber=123,
asName="Test AS Name",
asCountry="Test AS Country";

describe('DataWrapper', () => { 

	it('renders fully without crashing', () => {
		const component = mount(
			<DataWrapper
				found={found}
				address={address}
				hostname={hostname}
				continenet={continent}
				country={country}
				region={region}
				city={city}
				postal={postal}
				longitude={longitude} 
				latitude={latitude}
				timeZone={timeZone} 
				asNumber={asNumber}
				asName={asName}
				asCountry={asCountry}
			/>
			);
		component.unmount();
	});

	it('full snapshot rendering', () => {
		const component = mount(
			<DataWrapper
				found={found}
				address={address}
				hostname={hostname}
				continenet={continent}
				country={country}
				region={region}
				city={city}
				postal={postal}
				longitude={longitude} 
				latitude={latitude}
				timeZone={timeZone} 
				asNumber={asNumber}
				asName={asName}
				asCountry={asCountry}
			/>
			);
		expect(mountToJson(component)).toMatchSnapshot();
		component.unmount();
	});

	it('renders child with propogated data', () => {
		const component = mount(
			<DataWrapper
				found={found}
				address={address}
				hostname={hostname}
				continenet={continent}
				country={country}
				region={region}
				city={city}
				postal={postal}
				longitude={longitude} 
				latitude={latitude}
				timeZone={timeZone} 
				asNumber={asNumber}
				asName={asName}
				asCountry={asCountry}
			/>
			);
		const populatedDataComponentElement = <p className="mb-0">{country}</p>;
		expect(component.contains(populatedDataComponentElement)).toEqual(true);
	});

});