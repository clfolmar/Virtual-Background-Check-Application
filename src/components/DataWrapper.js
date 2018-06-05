import React, { Component } from 'react'
import Data from './Data'
import BadIp from './BadIp'
import GoodIp from './GoodIp'

class DataWrapper extends Component {
    render(){
        const address = this.props.address,
            latitudeLongitude = this.props.latitude + ", " + this.props.longitude,
            found = this.props.found,
            timeZone = this.props.timeZone,
            continent = this.props.continent,
            country = this.props.country,
            region = this.props.region,
            city = this.props.city,
            postal = this.props.postal,
            hostname = this.props.hostname,
            asNumber = this.props.asNumber,
            asName = this.props.asName,
            asCountry = this.props.asCountry;

            if(found){
                return (
                    <section className="features-icons bg-light text-center">
                    <div className="container">

                      <div className="row">
        
                          <BadIp address={address} />

                      </div>

                      <h4>IP Geolocation</h4>
                      <div className="row">

                        <div className="col-lg-3">
                          <Data header="Hostname" icon="icon-list" data={hostname} />
                        </div>

                        <div className="col-lg-3">
                          <Data header="Continent" icon="icon-map" data={continent} />
                        </div>

                        <div className="col-lg-3">
                          <Data header="Country" icon="icon-home" data={country} />
                        </div>

                        <div className="col-lg-3">
                          <Data header="Region" icon="icon-direction" data={region} />
                        </div>
                        
                      </div>
                      <div className="row">

                        <div className="col-lg-3">
                          <Data header="City" icon="icon-vector" data={city} />
                        </div>

                        <div className="col-lg-3">
                          <Data header="Postal Code" icon="icon-envelope" data={postal} />
                        </div>

                        <div className="col-lg-3">
                          <Data header="Latitude, Longitude" icon="icon-globe" data={latitudeLongitude} />
                        </div>

                        <div className="col-lg-3">
                          <Data header="Time Zone" icon="icon-clock" data={timeZone} />
                        </div>

                      </div>    
                      <h4>Autonomous System</h4>
                      <div className="row">

                        <div className="col-lg-4">
                          <Data header="Number" icon="icon-credit-card" data={asNumber} />
                        </div>

                        <div className="col-lg-4">
                          <Data header="Name" icon="icon-screen-desktop" data={asName} />
                        </div>

                        <div className="col-lg-4">
                          <Data header="Country" icon="icon-globe-alt" data={asCountry} />
                        </div>

                    </div>
                  </div>
                </section>

            );
        }

        return (
            <section className="features-icons bg-light text-center">
              <div className="container">

                <div className="row">
                    
                    <GoodIp address={address} />
                
                </div>

                <h4>IP Geolocation</h4>
                <div className="row">

                  <div className="col-lg-3">
                    <Data header="Hostname" icon="icon-list" data={hostname} />
                  </div>

                  <div className="col-lg-3">
                    <Data header="Continent" icon="icon-map" data={continent} />
                  </div>

                  <div className="col-lg-3">
                    <Data header="Country" icon="icon-home" data={country} />
                  </div>

                  <div className="col-lg-3">
                    <Data header="Region" icon="icon-direction" data={region} />
                  </div>
                  
                </div>
                <div className="row">

                  <div className="col-lg-3">
                    <Data header="City" icon="icon-vector" data={city} />
                  </div>

                  <div className="col-lg-3">
                    <Data header="Postal Code" icon="icon-envelope" data={postal} />
                  </div>

                  <div className="col-lg-3">
                    <Data header="Latitude, Longitude" icon="icon-globe" data={latitudeLongitude} />
                  </div>

                  <div className="col-lg-3">
                    <Data header="Time Zone" icon="icon-clock" data={timeZone} />
                  </div>

                </div>    
                <h4>Autonomous System</h4>
                <div className="row">

                  <div className="col-lg-4">
                    <Data header="Number" icon="icon-credit-card" data={asNumber} />
                  </div>

                  <div className="col-lg-4">
                    <Data header="Name" icon="icon-screen-desktop" data={asName} />
                  </div>

                  <div className="col-lg-4">
                    <Data header="Country" icon="icon-globe-alt" data={asCountry} />
                  </div>
  
                </div>
              </div>
            </section>
        );
    }
}



export default DataWrapper;


