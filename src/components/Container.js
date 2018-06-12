import React, { Component } from 'react'
import GoogleMapsContainer from './GoogleMapsContainer'
import DataWrapper from './DataWrapper'
import SearchInput from './SearchInput'
import superagent from 'superagent'
import { FetchBadIp, FetchGeoIp } from '../api/apility'

/**
 * A container component to hold the application's various components that make up the application
 */
 class Container extends Component {

    /**
     * constructor
     * @param {object} props
     */
     constructor(props) {
        super(props);

        /**
         * @type {object}
         * @property {string} fieldVal - searched IP
         * @property {object} data - json result from API
         * @property {string} address - API result, IP address
         * @property {string} latitude - API result, latitude of the IP address
         * @property {string} longitude - API result, longitude of the IP address
         * @property {string} found - determined from API result by status code
         * @property {string} hostname - API result, hostname of the IP address
         * @property {string} continent - API result, continet of the IP address
         * @property {string} region - API result, region of the IP address
         * @property {string} city - API result, city of the IP address
         * @property {string} postal - API result, postal code of the IP address
         * @property {string} timeZone - API result, time zone of the IP address
         * @property {string} asName - API result, autonomous system name
         * @property {string} asNumber - API result, autonomous system number
         * @property {string} asCountry - API result, autonomous system country
         */
         this.state = {
            fieldVal: "",
            data: {},
            address: "",
            latitude: null,
            longitude: null,
            found: false,
            hostname: "",
            continent: "",
            country: "",
            region: "",
            city: "",
            postal: "",
            timeZone: "",
            asName: "",
            asNumber: "",
            asCountry: "",     
        };

        this.ipSearch = this.ipSearch.bind(this);
    }

    /**
     * handle submit form event
     */
     componentDidMount() {
        this.loadInitialData();
    }

    /**
     * make an initial API call to populate the application with 'default' data
     */
     loadInitialData(){
        const badIpUrl = "https://api.apility.net/badip/8.8.8.8?token=" + process.env.REACT_APP_APILITY_KEY;

        superagent
        .get(badIpUrl)
        .query(null)
        .set('Accept', 'text/json')
        .end((error, response) => {

            if(response.ok){

                this.setState({
                    found: true
                })
            }
            else
            {
                this.setState({
                    found: false
                })
            }
        })

        const geoIpUrl = "https://api.apility.net/geoip/8.8.8.8?token=" + process.env.REACT_APP_APILITY_KEY;

        superagent
        .get(geoIpUrl)
        .query(null)
        .set('Accept', 'text/json')
        .end((error, response) => {

            const data = response.body.ip

            this.setState({
                data: data,

                address: data.address,

                latitude: parseFloat(data.latitude),

                longitude: parseFloat(data.longitude),

                hostname: data.hostname,

                continent: data.continent,

                country: data.country,

                region: data.region,

                city: data.city,

                postal: data.postal,

                timeZone: data.time_zone,

                asNumber: data.as.asn,

                asName: data.as.name,

                asCountry: data.as.country
            })
        })
    }

        /**
         * handle the submitted IP Address to search
         * @param {object} val
         */
         ipSearch(val){

            /**
             * Use external helper method to fetch a response from the API
             */
             FetchBadIp(val)
             .then( (res) => {

                /**
                 * If the response of the API call is OK/200 then the IP address is blacklisted
                 */
                 if(res.ok){
                    this.setState({
                        found: true
                    })
                }
                else
                {
                    this.setState({
                        found: false
                    })
                }

            })

            /**
             * Use external helper method to fetch a json result from the API
             */
             FetchGeoIp(val)
             .then( (data) => {

                const searchData = data.ip;
                /**
                 * Update the state so child components inherit the new data
                 */
                 this.setState({
                    ipData: searchData,

                    address: searchData.address,

                    latitude: parseFloat(searchData.latitude),

                    longitude: parseFloat(searchData.longitude),

                    hostname: searchData.hostname,

                    continent: searchData.continent,

                    country: searchData.country,

                    region: searchData.region,

                    city: searchData.city,

                    postal: searchData.postal,

                    timeZone: searchData.time_zone,

                    asNumber: searchData.as.asn,

                    asName: searchData.as.name,

                    asCountry: searchData.as.country
                })
             })
         }

        /**
         * render
         * @return {ReactElement} markup
         */
         render (){

            const center = {
                lat: this.state.latitude,
                lng: this.state.longitude
            }

            return (
                <div>
                    <SearchInput onSubmission={this.ipSearch} />

                    <div style={{width: '100%', height: '30vh', background: 'grey'}}>
                        <GoogleMapsContainer center={center} zoom={10} />
                    </div>
                    <DataWrapper
                        found={this.state.found}
                        address={this.state.address}
                        hostname={this.state.hostname}
                        continenet={this.state.continent}
                        country={this.state.country}
                        region={this.state.region}
                        city={this.state.city}
                        postal={this.state.postal}
                        longitude={this.state.longitude} 
                        latitude={this.state.latitude}
                        timeZone={this.state.timeZone} 
                        asNumber={this.state.asNumber}
                        asName={this.state.asName}
                        asCountry={this.state.asCountry}
                    />
                </div>
                )
            }
        }

        export default Container;
