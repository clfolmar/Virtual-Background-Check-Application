import React, { Component } from 'react'

/**
 * A component to hold the data when a searched IP is not found to be blacklisted
 */
 class GoodIp extends Component {

	/**
     * render
     * @return {ReactElement} markup
     */
     render(){
     	const address = this.props.address;

     	var greenStyle = {
     		color: '#06B400'
     	};

     	return(
     		<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
     			<h4>{address}</h4>
     			<h5 style={greenStyle}>Not Found!</h5>
     			<p className="mb-0">The IP was not found in the database of blacklists!</p>
     		</div>
     		);
     }
 }

 export default GoodIp;