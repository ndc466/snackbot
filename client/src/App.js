import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Smooch from 'smooch';

import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';

Smooch.init({ appId: '5ad77c3402458600228a92dd' });
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <About/>
        <Services/>
      </div>
    );
  }
}

export default App;
