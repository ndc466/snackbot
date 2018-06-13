import React, { Component } from 'react';
import { Responsive, Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

import logo from '../assets/oracle/logo-red.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render(){
    return(
      <Container style={{marginLeft: "0px", marginRight: "0px"}}>
        <MediaQuery minDeviceWidth={1024}>
          <Desktop />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1023}>
          <MediaQuery minDeviceWidth={426}>
            <Tablet />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={425}>
            <Mobile />
          </MediaQuery>
        </MediaQuery>
      </Container>
    );
  }
}

class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render(){
    return(
      <Menu fixed='top' inverted borderless>
        <Menu.Item as='a' header style={{ textTransform: "uppercase", backgroundOrigin: "none", backgroundClip: "none" }}>
          <Image size='small' src={logo} style={{ marginRight: '1.5em' }} />
          SnackBot
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item minWidth={769} href="#" style={{ textTransform: "uppercase" }}>
            About
          </Menu.Item>
          <Menu.Item minWidth={769} href="#" style={{ textTransform: "uppercase" }}>
            Cloud Services
          </Menu.Item>
          <Responsive as={Dropdown} maxWidth={768} icon='bars' item
                      style={{ textTransform: "uppercase", fontSize: "20px"}}>
            <Dropdown.Menu style={{ textTransform: "uppercase" }}>
              <Dropdown.Item>ABOUT</Dropdown.Item>
              <Dropdown.Item>CLOUD SERVICES</Dropdown.Item>
            </Dropdown.Menu>
          </Responsive>
        </Menu.Menu>
      </Menu>
    );
  }
}

class Tablet extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render(){
    return(
      <Menu fixed='top' inverted borderless>
        <Menu.Item as='a' header style={{ textTransform: "uppercase" }}>
          <Image size='small' src={logo} style={{ marginRight: '1.5em' }} />
          SnackBot
        </Menu.Item>
        <Menu.Menu position='right'>
          <Dropdown icon='bars' item style={{ textTransform: "uppercase", fontSize: "20px"}}>
            <Dropdown.Menu style={{ textTransform: "uppercase" }}>
              <Dropdown.Item>ABOUT</Dropdown.Item>
              <Dropdown.Item>CLOUD SERVICES</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

class Mobile extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render(){
    return(
      <Menu fixed='top' inverted borderless>
        <Menu.Item as='a' header style={{ textTransform: "uppercase", fontSize: "75%" }}>
          <Image size='small' src={logo} style={{ marginRight: '1em' }} />
          SnackBot
        </Menu.Item>
        <Menu.Menu position='right'>
          <Dropdown icon='bars' item style={{ textTransform: "uppercase", fontSize: "20px"}}>
            <Dropdown.Menu style={{ textTransform: "uppercase" }}>
              <Dropdown.Item>ABOUT</Dropdown.Item>
              <Dropdown.Item>CLOUD SERVICES</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;