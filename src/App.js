import React, { Component } from 'react';
import Container from './components/Container.js'

/**
 * A component for the entire application
 */
 class App extends Component {

 	/**
     * render
     * @return {ReactElement} markup
     */
     render() {

     	return (
     		<div>
     		<Container />
     		</div>
     		);
     	}
     }

     export default App;
