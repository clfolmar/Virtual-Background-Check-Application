import React, { Component } from 'react'
import GoogleMapsContainer from './GoogleMapsContainer'
import DataWrapper from './DataWrapper'
import SearchInput from './SearchInput'
import { FetchDummyBadIp, FetchDummyGeoIp, FetchBadIp, FetchGeoIp } from '../api/apility'

class Container extends Component {
    constructor(props) {
        super(props);

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

    componentDidMount() {
        this.loadInitialData();
    }

    loadInitialData(){

        FetchDummyBadIp()
        .then( (res) => {

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

        FetchDummyGeoIp()
        .then( (data) => {

            const geoLocationData = data.ip;

            this.setState({
                ipData: geoLocationData,
                address: geoLocationData.address,
                latitude: parseFloat(geoLocationData.latitude),
                longitude: parseFloat(geoLocationData.longitude),
                hostname: geoLocationData.hostname,
                continent: geoLocationData.continent,
                country: geoLocationData.country,
                region: geoLocationData.region,
                city: geoLocationData.city,
                postal: geoLocationData.postal,
                timeZone: geoLocationData.time_zone,
                asNumber: geoLocationData.as.asn,
                asName: geoLocationData.as.name,
                asCountry: geoLocationData.as.country
            })
        })
    }

    ipSearch(val){

        FetchBadIp(val)
        .then( (res) => {

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

        FetchGeoIp(val)
        .then( (data) => {

            const searchData = data.ip;

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
