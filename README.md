# IP Verification Application 

## This application utilizes [Apility.io's free blacklist API](https://apility.io/) which has unfortunately been depreciated.  With that being said, I will look for a replacement API for my application when I have spare time in the neat future.  

## This application utilized the [Apility.io's free blacklist API](https://apility.io/) to demonstrate how a system could verify a user by their IP address. By determining if the IP address is [blacklisted](https://www.whatismyip.com/why-is-my-ip-blacklisted/), and gathering their Geolocation data and Autonomous System information, the system could decide to block the user's access if necessary.  This allows the system to perform a "virtual background check" on new users, which helps maintain the system's integrity.

![screenshot](https://github.com/clfolmar/travis-react-ipverifier/blob/master/application-screenshot.jpg)

## Project Goals
- Build a simple, yet elegant application that visualizes a [security intelligence data feed](https://whatis.techtarget.com/definition/threat-intelligence-feed)
- Utilize the [React](https://reactjs.org/) JavaScript library

## Technologies:
- [Facebook's Create React App](https://github.com/facebookincubator/create-react-app)
- [Apility.io's Free Blacklist API](https://apility.io/apidocs/)
- [Travis-CI](https://travis-ci.com/clfolmar/travis-react-ipverifier)
- [JSX](https://jsx.github.io/)
- [npm](https://github.com/npm/npm)
- [google-maps-react](https://www.npmjs.com/package/google-maps-react)
- [superagent](https://visionmedia.github.io/superagent/)
- [enzyme](https://github.com/airbnb/enzyme)
- [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json)
- [fetch-mock](https://github.com/wheresrhys/fetch-mock)
- [sinon](http://sinonjs.org/)
- [bootstrap](https://getbootstrap.com/)
- [startbootsrap-landing-page](https://github.com/BlackrockDigital/startbootstrap-landing-page)

## Getting started
- clone or download this repository
- navigate to the root directory of the application
- open terminal in this directory
- run `npm install` in the terminal
## Before using
- retrieve a Google Maps API Key by following the instructions [here](https://developers.google.com/maps/documentation/javascript/get-api-key)
- retrieve a Apility.io API Key by registering [here](https://dashboard.apility.io/#/register)
- create a file named `.env` at the root directory of the application
- add `REACT_APP_GOOGLE_KEY = <YOUR GOOGLE MAPS API KEY>` to the `.env` file
- add `REACT_APP_APILITY_KEY = <YOUR APILITY API KEY>` to the `.env` file
- run `npm run build` in the terminal
## Start & use the application
- run `npm start` in the terminal
- `index.html` will be opened in your local browser
- enter a valid IPv4 IP address in the search input field at the top of the page (eg. `1.2.3.4`)
- click the `Search` button or press `enter` to retrieve the relevant IP, Geolocation, and Autonomous System information for the searched IP address from Apility.io's API
## Test the application
- run `npm test` in the terminal
## Build the application
- run `npm run build` in the terminal

## Why I built this project
I decided to build this application to help introduce myself to the [React](https://reactjs.org/) JavaScript library and the [cybersecurity](https://searchsecurity.techtarget.com/definition/cybersecurity) industry.  React is a popular front-end library used today because of its exceptional modularity.  Additionally, cybersecurity is one of the hottest industries out there and has been especially popular with everything going on in the world lately, like data breaches for instance.

Having not had the opportunity to gain any experience in cybersecurity at previous employers, I decided to utilize a [security intelligence data feed](https://whatis.techtarget.com/definition/threat-intelligence-feed) for this application.  With there being [so many](https://github.com/hslatman/awesome-threat-intelligence) data feeds available to choose from, I wanted to select one that I would not only be able to understand, but could utilize practically in my application.

I found Apility.io's blacklist API and already had some prior understanding of what being "[blacklisted](https://www.whatismyip.com/why-is-my-ip-blacklisted/)" meant, thus decided I could utilize the API to demonstrate how an enterprise level solution could verify a new user's integrity with their IP address by checking if it is found in a (or many) blacklist database(s), as well as retrieving Geolocation data and Autonomous System information.

## Author
- <strong>[Chris Folmar](https://www.linkedin.com/in/clfolmar/)</strong>

## License
This project is licensed with the MIT License - see the [LICENSE.md](https://github.com/clfolmar/travis-react-ipverifier/blob/master/LICENSE.md) file for details

## Acknowledgements
- [React Livecycle Method Overview](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)
- [ReactJS.NET Tutorial](https://reactjs.net/getting-started/tutorial_aspnet4.html)
- [React Tutorial](https://www.youtube.com/watch?v=N1J7Q1qJPQM&t=3s)
- [Testing](https://medium.com/wehkamp-techblog/unit-testing-your-react-application-with-jest-and-enzyme-81c5545cee45)
- [Travis-CI Integration](https://medium.com/@bezgachev/6-simple-steps-to-automatically-test-and-deploy-your-javascript-app-to-github-pages-c4c32a34bcb1)

For additional functionalty included with Facebook's "create-react-app" template, look [here](https://github.com/clfolmar/travis-react-ipverifier/blob/master/src/README.md)
