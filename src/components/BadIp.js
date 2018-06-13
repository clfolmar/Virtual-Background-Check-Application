import React, { Component } from 'react'

/**
 * A component to hold the data when a searched IP is not found to be blacklisted
 */
 class BadIp extends Component {

	/**
     * render
     * @return {ReactElement} markup
     */
     render(){

     	const address = this.props.address;

     	const redStyle = {
     		color: 'red'
     	};

     	return(
     		<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
     			<h4>{address}</h4>
     			<div className="features-icons-icon d-flex">
	     			<i style={redStyle} className="fa fa-ban m-auto"></i>
	     		</div>
     			<h5 style={redStyle}>WARNING!</h5>
     			<p className="mb-0">The IP was found in at least one blacklist!</p>
     		</div>
     		);
     }
 }

 export default BadIp;