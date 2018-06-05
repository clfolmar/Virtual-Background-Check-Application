import React from 'react';
import ReactDOM from 'react-dom';
import DataWrapper from './DataWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});