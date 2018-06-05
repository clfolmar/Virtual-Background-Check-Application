import React, { Component } from 'react'

class GoodIp extends Component {
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