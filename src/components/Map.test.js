import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const center = {
  	lat: 25,
  	lng: -72
  }
  ReactDOM.render(<Map center={center} zoom={10} />, div);
  ReactDOM.unmountComponentAtNode(div);
});