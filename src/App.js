import React, { Component } from 'react';
// third-party imports
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// local style imports
import './App.css';
// local component imports
import Navbar from './components/Navigation'
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
            <Switch>
               <Route exact path="/" component={Dashboard} />
            </Switch>
          {/* <Dashboard/> */}
        </div>
      </Router>
    );
  }
}

export default App;
