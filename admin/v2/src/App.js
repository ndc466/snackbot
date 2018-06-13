import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { };
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container style={{ marginTop: '7em' }} fluid>
          <Segment.Group >
            <Home />
          </Segment.Group>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;