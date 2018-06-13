import React, { Component } from 'react';
import { 
  Navbar, NavbarToggler, NavLink, NavbarBrand, Nav, NavItem,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import FaBars from 'react-icons/lib/fa/bars';
import MediaQuery from 'react-responsive';

import logo from '../images/oracle-red.png';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{color: "white"}}>
        <MediaQuery minDeviceWidth={1000}>
          <MediaQuery minWidth={1112}> {/* Desktop - Normal */}
            <Navbar expand="md" color="faded" light style={{textTransform: "uppercase", padding: "0px"}}>
              <NavbarBrand className="" href="#page-top" style={{fontSize:"20px", fontWeight: "bold", color: "white", textAlign: "left"}}>
                <img className="img-responsive" src={logo} alt="logo" style={{height: "auto", maxWidth: "40%", paddingLeft: "10px"}}/>{' '}
                <span style={{verticalAlign: "middle"}}>SnackBot</span>
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#portfolio">Cloud Services</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
            <br/>
            <div>You are normal</div>
          </MediaQuery>
          <MediaQuery maxWidth={1112}> {/* Desktop - Minimized */}
            <Navbar style={{textTransform: "uppercase", backgroundColor: "white", padding: "0px"}}>
              <NavbarBrand className="" href="#page-top" style={{fontSize:"20px", fontWeight: "bold", color: "#214C5C", textAlign: "left"}}>
                <img className="img-responsive" src={logo} alt="logo" style={{height: "auto", maxWidth: "40%", paddingLeft: "10px"}}/>{' '}
                <span style={{verticalAlign: "middle"}}>SnackBot</span>
              </NavbarBrand>
              <Nav navbar style={{marginRight: "20px", textAlign: "right"}}>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <FaBars style={{fontSize: "30px", color: "#214C5C"}}/>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      About
                    </DropdownItem>
                    <DropdownItem>
                      Cloud Services
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Navbar>
            <br/>
            <div>You are minimized</div>
          </MediaQuery>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={1000}>
          <Navbar style={{textTransform: "uppercase", backgroundColor: "white", padding: "0px"}}>
            <NavbarBrand className="" href="#page-top" 
                         style={{
                           fontSize:"10px", 
                           fontWeight: "bold", 
                           color: "#214C5C", 
                           textAlign: "left"
                         }}>
              <img className="img-responsive" src={logo} alt="logo" style={{height: "30px", width: "auto", paddingLeft: "10px"}}/>{' '}
              <span style={{verticalAlign: "middle"}}>SnackBot</span>
            </NavbarBrand>
            <Nav navbar style={{marginRight: "25px", textAlign: "right"}}>
              <UncontrolledDropdown nav>
                <DropdownToggle nav>
                  <FaBars style={{fontSize: "25px", color: "#214C5C"}}/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    About
                  </DropdownItem>
                  <DropdownItem>
                    Cloud Services
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Navbar>
        </MediaQuery>
      </div>
    );
  }
}

export default Navigation;

      /*
      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <img class="img-responsive" src={logo} alt="logo" />
          SnackBot
        </a>
        <button class="navbar-toggler navbar-toggler-right"
                data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio">Cloud Services</a>
            </li>
          </ul>
        </div>
      </nav>
      <Navbar expand="xl" color="faded" light style={{textTransform: "uppercase"}}>
        <NavbarBrand className="mr-auto" href="#page-top" style={{fontSize:"30px", fontWeight: "bold", color: "white"}}>
          <img className="img-responsive" src={logo} alt="logo"/>{' '}SnackBot
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={!this.state.isOpen} navbar id="navbarResponsive">
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            &nbsp;&nbsp;
            <NavItem>
              <NavLink href="#portfolio">Cloud Services</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

  <div>
    <div>Device Test!</div>
    <MediaQuery minDeviceWidth={1224}>
      <div>You are a desktop or laptop</div>
      <MediaQuery minDeviceWidth={1824}>
        <div>You also have a huge screen</div>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <div>You are sized like a tablet or mobile phone though</div>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <div>You are a tablet or mobile phone</div>
    </MediaQuery>
    <MediaQuery orientation="portrait">
      <div>You are portrait</div>
    </MediaQuery>
    <MediaQuery orientation="landscape">
      <div>You are landscape</div>
    </MediaQuery>
    <MediaQuery minResolution="2dppx">
      <div>You are retina</div>
    </MediaQuery>
  </div>

      */