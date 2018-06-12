import fetchMock from 'fetch-mock';
import { FetchDummyBadIp, FetchDummyGeoIp, FetchBadIp, FetchGeoIp } from './apility'

test('call FetchDummyBadIp', () => {

	const testResponse = { 
		status: 200, 
		statusText: "OK",
	};

	fetchMock.get('*', testResponse);

	const apiResult = FetchDummyBadIp()
	.then( (response) => {
		expect(response.status).toEqual(testResponse.status);
		expect(response.statusText).toEqual(testResponse.statusText);
	});

	fetchMock.restore();
	return apiResult;
});

test('call FetchDummyGeoIp', () => {

	const testData = { ip: {}};
	fetchMock.get('*', testData);

	const apiResult = FetchDummyGeoIp()
	.then( (response) => {
		expect(response).toEqual(testData);
	});

	fetchMock.restore();
	return apiResult;
});

test('call FetchBadIp', () => {

	const testResponse = { 
		status: 200, 
		statusText: "OK",
	};

	fetchMock.get('*', testResponse);

	const apiResult = FetchBadIp()
	.then( (response) => {
		expect(response.status).toEqual(testResponse.status);
		expect(response.statusText).toEqual(testResponse.statusText);
	});

	fetchMock.restore();
	return apiResult;
});

test('call FetchGeoIp', () => {

	const testData = { ip: {}};
	fetchMock.get('*', testData);

	const apiResult = FetchGeoIp()
	.then( (response) => {
		expect(response).toEqual(testData);
	});

	fetchMock.restore();
	return apiResult;
});

