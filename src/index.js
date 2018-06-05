import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Bootstrap core CSS -->
import './vendor/bootstrap/css/bootstrap.min.css'
// Custom fonts for this template
import './vendor/font-awesome/css/font-awesome.min.css'
import './vendor/simple-line-icons/css/simple-line-icons.css'
// Custom styles for this template
import './css/landing-page.min.css'

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
