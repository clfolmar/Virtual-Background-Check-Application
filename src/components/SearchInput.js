import React, { Component } from 'react'

/**
 * A search bar component
 */
 class SearchInput extends Component {

	/**
     * constructor
     * @param {object} props
     */
     constructor(props){
     	super(props);

		/**
         * @type {object}
         * @property {string} fieldVal - searched IP
         */
         this.state = 
         {
         	fieldVal: ""
         };

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

	/**
     * handle change event at input form
     * @param {SytheticEvent} event
     */
     handleChange(event) {
     	this.setState({fieldVal: event.target.value});
     }

	/**
     * handle submit form event
     * @param {SytheticEvent} event
     */
     handleSubmit(event) {
     	event.preventDefault()
     	this.props.onSubmission(this.state.fieldVal)
     }

	/**
     * render
     * @return {ReactElement} markup
     */
     render(){

     	var blacklisted = {
     		color: 'black'
     	};

     	return(
     		<header className="masthead text-white text-center">
				<div className="overlay"></div>
					<div className="container">
						<div className="row">
							<div className="col-xl-9 mx-auto">
							<h2 className="mb-5">
								Verify if an IP Address is <span style={blacklisted}>blacklisted</span>
							</h2>
						</div>
						<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
							<form onSubmit={this.handleSubmit}>
								<div className="form-row">
									<div className="col-12 col-md-9 mb-2 mb-md-0">
											<input 
												type="text" 
												className="form-control form-control-lg" 
												placeholder="Enter IP Address to verify..."
												onChange={this.handleChange}
												value={this.state.fieldVal}
												pattern="\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b"
												title="1.2.3.4"
											/>
									</div>
									<div className="col-12 col-md-3">
										<button type="submit" className="btn btn-block btn-lg btn-primary">Search</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</header>
 		);
     }
 }

 export default SearchInput;