# IP Verification Application 

## This application utilizes [Apility.io's Free Blacklist API](https://apility.io/) to demonstrate how a system could look up a user's IP address and know immediately if they are [blacklisted](https://www.whatismyip.com/why-is-my-ip-blacklisted/) so that it can decide to block them from accessing the system if necessary.

I decided to build this application as an introductory project to gain exposure to both the React.js framework and the cybersecurity industry as a whole.  [React](https://reactjs.org/) is one of, if not the preferred front-end framework today and after completing this project I can absolutely see why; it's modularity is incredible!  Additionally, cybersecurity is one of the hottest industries out there, but has been especially popular with everything that's been going on in the world (data leaks for instance) as of late.  

I had not had the opportunity to gain any exposure or experience in cybersecurity at previous employers, thus I decided to utilize a security intelligence data feed for this application.  With there being [so many different types of security intelligence data feeds available to choose from](https://github.com/hslatman/awesome-threat-intelligence), I wanted to choose one that I would not only be able to understand, but could utilize practically in my application.  

After searching through the list of data feeds above, I found [Apility.io's Free Blacklist API](https://apility.io/).  I had some prior understanding of what being "[blacklisted](https://www.whatismyip.com/why-is-my-ip-blacklisted/)" meant, thus decided I could utilize the API to demonstrate how an enterprise level solution could potentially verify a registering user's integrity by looking up if their IP was associated to a (or many) blacklist database(s).

![screenshot](https://github.com/clfolmar/travis-react-ipverifier/blob/master/screenshot.jpg)

## Technologies:
- [Facebook's Create React App](https://github.com/facebookincubator/create-react-app)
- [Apility.io's Free Blacklist API](https://apility.io/apidocs/)
- [JSX](https://jsx.github.io/)
- [npm](https://github.com/npm/npm)
- [Travis-CI](https://travis-ci.com/)
- [google-maps-react](https://www.npmjs.com/package/google-maps-react)
- [superagent](https://visionmedia.github.io/superagent/)
- [enzyme](https://github.com/airbnb/enzyme)
- [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json)
- [fetch-mock](https://github.com/wheresrhys/fetch-mock)
- [sinon](http://sinonjs.org/)
- [bootstrap](https://getbootstrap.com/)
- [startbootsrap-landing-page](https://github.com/BlackrockDigital/startbootstrap-landing-page)


## Checkout the finished application
- clone or download this repo
- navigate to the root directory of the application
- open terminal in this directory
- run `npm install` in the terminal
## Prerequisites
- get your own [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)
- get your own [Apility.io Free Blacklist API Key](https://dashboard.apility.io/#/register) by registering
- create a `.env` file at the root directory of the application
- add `REACT_APP_GOOGLE_KEY = <YOUR GOOGLE MAPS API KEY>` to the `.env` file
- add `REACT_APP_APILITY_KEY = <YOUR APILITY API KEY>` to the `.env` file
- run `npm run build` in the terminal
## Start & use the application
- run `npm start` in the terminal
- `index.html` will be opened in your local browser
- enter a valid IPv4 IP address in the search input field at the top of the page (eg. `1.2.3.4`)
- click the `Search` button or press the `enter` to retrieve the relevant IP, GeoLocation, and Autonomous System information for the searched IP address from Apility.io's Free Blacklist API
## Test the application
- run `npm test` in the terminal
## Build the application
- run `npm run build` in the terminal


For additional functionalty included with Facebook's "create-react-app" template, look [here](https://github.com/clfolmar/travis-react-ipverifier/blob/master/src/README.md)
