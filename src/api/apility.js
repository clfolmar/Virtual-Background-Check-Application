import superagent from 'superagent'

// to help retrieve the ip information from Apility.io's API
export function FetchDummyBadIp() {
	let url = "https://api.apility.net/badip/" + process.env.REACT_APP_MY_IP + "?token=" + process.env.REACT_APP_APILITY_KEY;

	/*return fetch(url)
	.then((response) => {

		return response;

	})
	.catch((ex) => {
		//throw new Error('fetch failed' + ex)
		console.log(ex);
	});*/

	superagent
	.get(url)
	.query(null)
	.set('Accept', 'text/json')
	.end((error, response) => {

		return response;
	})
}

// to help retrieve the ip information from Apility.io's API
export function FetchDummyGeoIp() {
	let url = "https://api.apility.net/geoip/" + process.env.REACT_APP_MY_IP + "?token=" + process.env.REACT_APP_APILITY_KEY;

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