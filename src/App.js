import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container.js'
import SearchInput from './components/SearchInput.js'
import DataWrapper from './components/DataWrapper.js'
import Data from './components/Data.js'
import Map from './components/Map.js'

class App extends Component {
  render() {

    return (
      <div>
        <Container />
      </div>
    );
  }
}

export default App;
