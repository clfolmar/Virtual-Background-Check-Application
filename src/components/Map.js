import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
    render(){

        const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

        const markers = this.props.markers.map((pin, i) => {

            const marker = {
                position: {
                    lat: pin.location.lat,
                    lng: pin.location.lng
                }
            }
                    // ... = shorthand notation for passing off a property
            return <Marker key={i} {...marker} />
        })

        return (
            <GoogleMapLoader
                containerElement = { mapContainer }
                googleMapElement = {
                    <GoogleMap
                        defaultZoom={this.props.zoom}
                        zoom={this.props.zoom}
                        center={this.props.center}
                        defaultCenter={this.props.center}
                        options={{streetViewControl: false, mapTypeControl: false}}>
                        { markers }
                    </GoogleMap>
                } />
        )
    }
}

export default Map;