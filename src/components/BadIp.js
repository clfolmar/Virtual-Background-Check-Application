import React, { Component } from 'react'

class BadIp extends Component {

	 render(){

	 	const address = this.props.address;

        const redStyle = {
              color: 'red'
            };

		return(
	            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
	                  <h4>{address}</h4>
	                  <h5 style={redStyle}>WARNING!</h5>
	                  <p className="mb-0">The IP was found in at least one blacklist!</p>
                </div>
			);
	}
}

export default BadIp;