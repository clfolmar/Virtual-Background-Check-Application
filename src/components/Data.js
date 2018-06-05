import React, { Component } from 'react'

class Data extends Component {
	 render(){
	 	const header = this.props.header,
        		data = this.props.data;

		return(
	            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
	              <div className="features-icons-icon d-flex">
	                <i className="icon-list m-auto text-primary"></i>
	              </div>
	              <h5>{header}</h5>
	              <p className="mb-0">{data}</p>
	            </div>
			);
	}
}

export default Data;