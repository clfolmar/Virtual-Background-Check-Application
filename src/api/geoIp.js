const geoIpUrl = "https://api.apility.net/geoip/" + process.env.REACT_APP_MY_IP + "?token=" + process.env.REACT_APP_APILITY_KEY

export function fetchGeoIp() {
	let url = geoIpUrl;

    return fetch(url).then( (res) => res.json() );

}
        