import React, { Component } from 'react';
import logo from './logo.svg';
// third-party imports
import styled from 'styled-components'
// local style imports
import './App.css';
// local component imports
import Navbar from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
