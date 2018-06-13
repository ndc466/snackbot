import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Main from './components/Main';
import MediaQuery from 'react-responsive';
//import OrderList from './components/OrderList';

class App extends Component {

  render() {

    return (
      <div className="App">
        <MediaQuery minDeviceWidth={1000}>
          <Navigation device="desktop" />
          <Main device="desktop" />
          {/*<OrderList />*/}
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1000}>
          <Navigation device="mobile" />
          <Main device="mobile" />
          {/*<OrderList />*/}
        </MediaQuery>
      </div>
    );
  }
}

export default App;