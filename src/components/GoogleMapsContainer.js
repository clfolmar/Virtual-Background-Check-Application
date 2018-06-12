import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

/**
 * A wrapper to hold a Map component which is populated by
 * the Geolocation data returned from the API nd a few other configuration
 * options
 */
 class GoogleMapsContainer extends React.Component {

  /**
   * render
   * @return {ReactElement} markup
   */
   render() {
    const mapStyle = {
      width: '100%', 
      height: '30vh'
    }

    return (
      <Map
        item
        style = {mapStyle}
        xs = { 12 }
        google = { this.props.google }
        zoom = { this.props.zoom }
        center = { this.props.center }
        initialCenter = { this.props.center } 
        mapTypeControl = { false }
        streetViewControl = { false }
      >
        <Marker
          position = {this.props.center}
        />
      </Map>

      );
    }
  }
  export default GoogleApiWrapper({
    api: (process.env.REACT_APP_GOOGLE_KEY)
  })(GoogleMapsContainer)