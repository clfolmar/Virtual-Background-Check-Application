const badIpUrl = "https://api.apility.net/badip/" + process.env.REACT_APP_MY_IP + "?token=" + process.env.REACT_APP_APILITY_KEY

export function fetchBadIp() {
	let url = badIpUrl;

    return fetch(url);

}