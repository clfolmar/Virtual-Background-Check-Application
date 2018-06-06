
// to help retrieve default ip information from Apility.io's API
export function FetchDummyBadIp() {
	let url = "https://api.apility.net/badip/1.2.3.4?token=" + process.env.REACT_APP_APILITY_KEY;

	return fetch(url)
	.then((response) => {

		return response;

	})
	.catch((ex) => {
		//throw new Error('fetch failed' + ex)
		console.log(ex);
	});
}

// to help retrieve default geo ip information from Apility.io's API
export function FetchDummyGeoIp() {
	let url = "https://api.apility.net/geoip/1.2.3.4?token=" + process.env.REACT_APP_APILITY_KEY;

	return fetch(url)
	.then((response) => {

		return response.json();

	})
	.catch((ex) => {
		//throw new Error('fetch failed' + ex)
		console.log(ex);
	});
}

// to help retrieve the ip information from Apility.io's API
export function FetchBadIp(val) {
	let url = "https://api.apility.net/badip/" + val + "?token=" + process.env.REACT_APP_APILITY_KEY;

	return fetch(url)
	.then((response) => {

		return response;

	})
	.catch((ex) => {
		//throw new Error('fetch failed' + ex)
		console.log(ex);
	});
}

// to help retrieve the GeoLocation information from Apility.io's API
export function FetchGeoIp(val) {
	let url = "https://api.apility.net/geoip/" + val + "?token=" + process.env.REACT_APP_APILITY_KEY;

	return fetch(url)
	.then((response) => {

		return response.json();

	})
	.catch((ex) => {
		//throw new Error('fetch failed' + ex)
		console.log(ex);
	});
}