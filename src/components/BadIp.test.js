import React from 'react';
import ReactDOM from 'react-dom';
import BadIp from './BadIp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BadIp />, div);
  ReactDOM.unmountComponentAtNode(div);
});