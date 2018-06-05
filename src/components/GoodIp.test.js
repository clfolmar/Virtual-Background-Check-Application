import React from 'react';
import ReactDOM from 'react-dom';
import GoodIp from './GoodIp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoodIp />, div);
  ReactDOM.unmountComponentAtNode(div);
});